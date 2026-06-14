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
      options: { list: [{ title: "YouTube", value: "youtube" }, { title: "Yerel / Local", value: "local" }] },
    }),
    defineField({ name: "youtubeId", title: "YouTube Video ID", type: "string" }),
    defineField({ name: "localSrc", title: "Yerel Dosya Yolu / Local File Path", type: "string" }),
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
    defineField({ name: "src", title: "Dosya Yolu / File Path (ör: /audios/xxx.mp3)", type: "string" }),
    defineField({ name: "order", title: "Sıra / Order", type: "number" }),
  ],
  preview: {
    select: { title: "title", subtitle: "artist" },
  },
});
