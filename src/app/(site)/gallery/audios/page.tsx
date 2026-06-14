import { client } from "@/sanity/client";
import AudiosClient, { SanityAudio } from "./AudiosClient";

const query = `*[_type == "galleryAudio"] | order(order asc) {
  _id, title, artist, region, duration,
  "audioFileUrl": audioFile.asset->url,
  audioUrl, src, order
}`;

export default async function Audios() {
  const audios: SanityAudio[] = await client.fetch(query, {}, { next: { revalidate: 60 } });
  return <AudiosClient audios={audios} />;
}
