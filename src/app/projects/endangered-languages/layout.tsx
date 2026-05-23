import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Endangered Turkic Languages",
  description: "Documenting and raising awareness about Turkic languages and dialects at risk of extinction.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
