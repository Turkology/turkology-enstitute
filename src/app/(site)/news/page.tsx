import { client } from "@/sanity/client";
import NewsClient, { SanityNewsArticle } from "./NewsClient";

const query = `*[_type == "newsArticle"] | order(publishedAt desc) {
  _id, title_tr, title_en, date_tr, date_en, body_tr, body_en, image, sourceUrl, publishedAt
}`;

export default async function News() {
  const articles: SanityNewsArticle[] = await client.fetch(query, {}, { next: { revalidate: 60 } });
  return <NewsClient articles={articles} />;
}
