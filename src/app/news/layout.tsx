import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What's New",
  description: "Latest news on Turkic culture, language, and events from the Turkology Institute.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
