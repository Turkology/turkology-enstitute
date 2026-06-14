import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.turkology.com.au"),
  title: {
    default: "Turkology Institute | Sydney, Australia",
    template: "%s | Turkology Institute",
  },
  description: "A private education organisation in Sydney dedicated to researching Turkic languages, history, literature, folklore, and culture.",
  keywords: ["Turkology", "Turkic", "Turkish", "Sydney", "Australia", "languages", "culture", "history"],
  icons: {
    icon: "/images/logo/icon.svg",
    shortcut: "/images/logo/icon.svg",
    apple: "/images/logo/icon.svg",
  },
  openGraph: {
    siteName: "Turkology Institute",
    locale: "en_AU",
    type: "website",
    url: "https://www.turkology.com.au",
  },
  alternates: {
    canonical: "https://www.turkology.com.au",
  },
  verification: {
    google: "UVSAeTZdAV0YsfyWlp1WMhQ0PZhHVlCjoKHP6eEvRzk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-black text-white antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
