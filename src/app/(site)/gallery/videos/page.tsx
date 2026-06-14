import { client } from "@/sanity/client";
import VideosClient, { SanityVideo } from "./VideosClient";

const query = `*[_type == "galleryVideo"] | order(order asc) {
  _id, title, videoType, youtubeId,
  "videoFileUrl": videoFile.asset->url,
  videoUrl, localSrc, order
}`;

export default async function Videos() {
  const videos: SanityVideo[] = await client.fetch(query, {}, { next: { revalidate: 60 } });
  return <VideosClient videos={videos} />;
}
