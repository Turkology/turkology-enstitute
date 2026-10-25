import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Turkology Institute",
    short_name: "Turkology",
    description:
      "A private education organisation in Sydney dedicated to researching Turkic languages, history, literature, folklore, and culture.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#1fa4a1",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
