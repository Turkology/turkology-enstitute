import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turkology in Australian Universities",
  description: "Advocating for the establishment of Turkology as an academic discipline in Australian universities.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
