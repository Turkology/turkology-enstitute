/**
 * Migration script: locale JSON → Sanity CMS
 * Run: SANITY_TOKEN=your_token node scripts/migrate-to-sanity.js
 */

const { createClient } = require("@sanity/client");
const fs = require("fs");
const path = require("path");

const token = process.env.SANITY_TOKEN;
if (!token) {
  console.error("SANITY_TOKEN env variable is required.");
  process.exit(1);
}

const client = createClient({
  projectId: "e11t99da",
  dataset: "production",
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

const publicDir = path.join(__dirname, "..", "public");
const tr = require("../src/locales/tr.json");
const en = require("../src/locales/en.json");

async function uploadImage(imgPath) {
  const fullPath = path.join(publicDir, imgPath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`  [WARN] Image not found: ${fullPath}`);
    return null;
  }
  const ext = path.extname(imgPath).slice(1).toLowerCase();
  const mimeType = ext === "jpg" || ext === "jpeg" ? "image/jpeg" : ext === "png" ? "image/png" : "image/jpeg";
  const asset = await client.assets.upload("image", fs.createReadStream(fullPath), {
    filename: path.basename(imgPath),
    contentType: mimeType,
  });
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

async function migrateNews() {
  console.log("\n=== Migrating News Articles ===");
  const articlesTr = tr.news.articles;
  const articlesEn = en.news.articles;

  for (let i = 0; i < articlesTr.length; i++) {
    const t = articlesTr[i];
    const e = articlesEn[i];
    console.log(`  [${i + 1}/${articlesTr.length}] ${t.title}`);

    let image = null;
    if (t.img) {
      console.log(`    Uploading image: ${t.img}`);
      image = await uploadImage(t.img);
    }

    await client.create({
      _type: "newsArticle",
      title_tr: t.title,
      title_en: e.title,
      date_tr: t.date,
      date_en: e.date,
      body_tr: t.body,
      body_en: e.body,
      image: image || undefined,
      publishedAt: new Date().toISOString(),
    });
    console.log(`    ✓ Created`);
  }
}

async function migratePhotos() {
  console.log("\n=== Migrating Gallery Photos ===");
  const photosTr = tr.gallery.photos;
  const photosEn = en.gallery.photos;

  for (let i = 0; i < photosTr.length; i++) {
    const t = photosTr[i];
    const e = photosEn[i];
    console.log(`  [${i + 1}/${photosTr.length}] ${t.caption}`);

    console.log(`    Uploading image: ${t.img}`);
    const image = await uploadImage(t.img);

    await client.create({
      _type: "galleryPhoto",
      caption_tr: t.caption,
      caption_en: e.caption,
      location: t.location,
      image: image || undefined,
      order: i + 1,
    });
    console.log(`    ✓ Created`);
  }
}

async function migrateVideos() {
  console.log("\n=== Migrating Gallery Videos ===");
  const videos = tr.gallery.videos;

  for (let i = 0; i < videos.length; i++) {
    const v = videos[i];
    console.log(`  [${i + 1}/${videos.length}] ${v.title}`);

    await client.create({
      _type: "galleryVideo",
      title: v.title,
      videoType: v.type,
      youtubeId: v.type === "youtube" ? v.id : undefined,
      localSrc: v.type === "local" ? v.src : undefined,
      order: i + 1,
    });
    console.log(`    ✓ Created`);
  }
}

async function migrateAudios() {
  console.log("\n=== Migrating Gallery Audios ===");
  const audios = tr.gallery.audios;

  for (let i = 0; i < audios.length; i++) {
    const a = audios[i];
    console.log(`  [${i + 1}/${audios.length}] ${a.title}`);

    await client.create({
      _type: "galleryAudio",
      title: a.title,
      artist: a.artist,
      region: a.region,
      duration: a.duration,
      src: a.src,
      order: i + 1,
    });
    console.log(`    ✓ Created`);
  }
}

async function main() {
  console.log("Starting migration to Sanity...");
  await migrateNews();
  await migratePhotos();
  await migrateVideos();
  await migrateAudios();
  console.log("\n✅ Migration complete!");
}

main().catch(err => {
  console.error("Migration failed:", err);
  process.exit(1);
});
