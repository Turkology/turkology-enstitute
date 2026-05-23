import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos",
  description: "Watch videos from the Turkic World on our YouTube channel.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
