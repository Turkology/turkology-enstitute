import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the Turkology Institute, founded in Sydney in 2024 by Volkan Kaya Türüdü to research and share Turkic civilisation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
