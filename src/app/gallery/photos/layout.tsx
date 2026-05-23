import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photos",
  description: "Photos from Kyrgyzstan, Türkiye and the Turkic World.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
