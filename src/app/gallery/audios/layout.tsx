import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audio Samples",
  description: "Traditional music from Turkic peoples across Central Asia, the Caucasus, and beyond.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
