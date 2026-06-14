import { client } from "@/sanity/client";
import PhotosClient, { SanityPhoto } from "./PhotosClient";

const query = `*[_type == "galleryPhoto"] | order(order asc) {
  _id, caption_tr, caption_en, location, image, order
}`;

export default async function Photos() {
  const photos: SanityPhoto[] = await client.fetch(query, {}, { next: { revalidate: 60 } });
  return <PhotosClient photos={photos} />;
}
