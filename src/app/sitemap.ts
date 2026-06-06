import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.turkology.com.au";

  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/projects", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/projects/library", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/projects/quotes", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/projects/great-figures", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/projects/endangered-languages", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/projects/131-books", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/projects/university", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/gallery", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/gallery/videos", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/gallery/audios", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/gallery/photos", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/news", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${base}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
