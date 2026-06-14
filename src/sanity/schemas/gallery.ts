import { defineType, defineField } from "sanity";

export const galleryPhoto = defineType({
  name: "galleryPhoto",
  title: "Fotoğraf / Photo",
  type: "document",
  fields: [
    defineField({ name: "caption_tr", title: "Açıklama (TR)", type: "string" }),
    defineField({ name: "caption_en", title: "Caption (EN)", type: "string" }),
    defineField({ name: "location", title: "Lokasyon / Location", type: "string" }),
    defineField({ name: "image", title: "Fotoğraf / Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "order", title: "Sıra / Order", type: "number" }),
  ],
  preview: {
    select: { title: "caption_tr", media: "image" },
  },
});

export const galleryVideo = defineType({
  name: "galleryVideo",
  title: "Video",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Başlık / Title", type: "string" }),
    defineField({
      name: "videoType",
      title: "Video Türü / Type",
      type: "string",
      options: {
        list: [
          { title: "YouTube", value: "youtube" },
          { title: "Dosya Yükle / Upload File", value: "upload" },
          { title: "Link (URL)", value: "link" },
          { title: "Yerel / Local (eski)", value: "local" },
        ],
      },
    }),
    defineField({ name: "youtubeId", title: "YouTube Video ID", type: "string" }),
    defineField({ name: "videoFile", title: "Video Dosyası / Upload File", type: "file" }),
    defineField({ name: "videoUrl", title: "Video Linki / URL", type: "url" }),
    defineField({ name: "localSrc", title: "Yerel Dosya Yolu / Local Path (eski)", type: "string" }),
    defineField({ name: "order", title: "Sıra / Order", type: "number" }),
  ],
  preview: {
    select: { title: "title" },
  },
});

export const galleryAudio = defineType({
  name: "galleryAudio",
  title: "Ses / Audio",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Başlık / Title", type: "string" }),
    defineField({ name: "artist", title: "Sanatçı / Artist", type: "string" }),
    defineField({ name: "region", title: "Bölge / Region", type: "string" }),
    defineField({ name: "duration", title: "Süre / Duration", type: "string" }),
    defineField({ name: "audioFile", title: "Ses Dosyası / Upload File", type: "file" }),
    defineField({ name: "audioUrl", title: "Ses Linki / URL", type: "url" }),
    defineField({ name: "src", title: "Dosya Yolu / Local Path (eski)", type: "string" }),
    defineField({ name: "order", title: "Sıra / Order", type: "number" }),
  ],
  preview: {
    select: { title: "title", subtitle: "artist" },
  },
});
