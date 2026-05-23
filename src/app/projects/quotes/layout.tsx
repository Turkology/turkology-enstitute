import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quotes from Ancestors",
  description: "Over 250 significant sayings from Turkic ancestors, reflecting the wisdom of Turkic cultural heritage.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
