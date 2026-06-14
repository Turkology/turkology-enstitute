import { defineType, defineField } from "sanity";

export const newsArticle = defineType({
  name: "newsArticle",
  title: "Haber / News Article",
  type: "document",
  fields: [
    defineField({ name: "title_tr", title: "Başlık (TR)", type: "string" }),
    defineField({ name: "title_en", title: "Title (EN)", type: "string" }),
    defineField({ name: "date_tr", title: "Tarih (TR) — ör: 7 Aralık 2025", type: "string" }),
    defineField({ name: "date_en", title: "Date (EN) — e.g. 7 December 2025", type: "string" }),
    defineField({ name: "body_tr", title: "İçerik (TR)", type: "text", rows: 6 }),
    defineField({ name: "body_en", title: "Content (EN)", type: "text", rows: 6 }),
    defineField({ name: "image", title: "Görsel / Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "sourceUrl", title: "Kaynak Linki / Source URL", type: "url" }),
    defineField({ name: "publishedAt", title: "Yayın Tarihi", type: "datetime" }),
  ],
  preview: {
    select: { title: "title_tr", media: "image" },
  },
  orderings: [
    { title: "Yayın Tarihi (Yeni→Eski)", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] },
  ],
});
