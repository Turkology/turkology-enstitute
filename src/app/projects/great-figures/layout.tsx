import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Great Figures of Turkic Civilization",
  description: "A catalogue of over 1,300 influential writers, poets, statesmen, scientists and artists of Turkic civilization.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
