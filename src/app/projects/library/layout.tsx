import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turkology Library",
  description: "A growing collection of ~500 rare Turkology books, with plans to expand to 10,000 volumes.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
