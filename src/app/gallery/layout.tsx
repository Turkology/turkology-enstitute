import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Videos, audio samples, and photos from the Turkic World and our cultural travels to Turkestan.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
