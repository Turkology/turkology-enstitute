import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "131 Books Project",
  description: "Atatürk's initiative to translate 131 landmark works on Turkish history and language — never published after his passing.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
