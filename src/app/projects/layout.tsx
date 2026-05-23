import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore our initiatives: Turkology Library, Great Figures, Endangered Languages, 131 Books Project, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
