"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function Header() {
  const { t, locale, setLocale, mounted } = useI18n();
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo/logo.svg" alt="Turkology Institute" width={180} height={40} className="hidden sm:block" />
          <Image src="/images/logo/logo.svg" alt="Turkology Institute" width={130} height={30} className="block sm:hidden" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Link href="/" className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">
            {t("nav.home")}
          </Link>
          <Link href="/about" className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">
            {t("nav.about")}
          </Link>

          <div className="relative" onMouseEnter={() => setProjectsOpen(true)} onMouseLeave={() => setProjectsOpen(false)}>
            <button className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1">
              {t("nav.projects")}
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {projectsOpen && (
              <div className="absolute top-full left-0 w-64 pt-2">
                <div className="bg-zinc-900 border border-white/10 rounded-lg shadow-xl py-1">
                  <Link href="/projects/library" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors" onClick={() => setProjectsOpen(false)}>{t("nav.projects_sub.library")}</Link>
                  <Link href="/projects/quotes" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors" onClick={() => setProjectsOpen(false)}>{t("nav.projects_sub.quotes")}</Link>
                  <Link href="/projects/great-figures" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors" onClick={() => setProjectsOpen(false)}>{t("nav.projects_sub.great_figures")}</Link>
                  <Link href="/projects/endangered-languages" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors" onClick={() => setProjectsOpen(false)}>{t("nav.projects_sub.endangered")}</Link>
                  <Link href="/projects/131-books" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors" onClick={() => setProjectsOpen(false)}>{t("nav.projects_sub.131books")}</Link>
                  <Link href="/projects/university" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors" onClick={() => setProjectsOpen(false)}>{t("nav.projects_sub.university")}</Link>
                </div>
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setGalleryOpen(true)} onMouseLeave={() => setGalleryOpen(false)}>
            <button className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1">
              {t("nav.gallery")}
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {galleryOpen && (
              <div className="absolute top-full left-0 w-40 pt-2">
                <div className="bg-zinc-900 border border-white/10 rounded-lg shadow-xl py-1">
                  <Link href="/gallery/videos" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors" onClick={() => setGalleryOpen(false)}>{t("nav.gallery_sub.videos")}</Link>
                  <Link href="/gallery/audios" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors" onClick={() => setGalleryOpen(false)}>{t("nav.gallery_sub.audios")}</Link>
                  <Link href="/gallery/photos" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors" onClick={() => setGalleryOpen(false)}>{t("nav.gallery_sub.photos")}</Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/news" className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">
            {t("nav.news")}
          </Link>
          <Link href="/contact" className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">
            {t("nav.contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={() => setLocale(locale === "en" ? "tr" : "en")}
              className="text-sm font-medium px-3 py-1 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors"
            >
              {locale === "en" ? "TR" : "EN"}
            </button>
          )}

          <button
            className="md:hidden text-white/70 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-white/10 px-6 py-4 flex flex-col gap-1">
          <Link href="/" className="py-2 text-sm text-white/70 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>{t("nav.home")}</Link>
          <Link href="/about" className="py-2 text-sm text-white/70 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>{t("nav.about")}</Link>

          {/* Projects */}
          <button
            className="py-2 text-sm text-white/70 hover:text-white transition-colors flex items-center justify-between w-full"
            onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
          >
            {t("nav.projects")}
            <svg className={`w-3 h-3 transition-transform ${mobileProjectsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileProjectsOpen && (
            <div className="pl-4 flex flex-col gap-1 border-l border-white/10 ml-1 mb-1">
              <Link href="/projects/library" className="py-1.5 text-sm text-white/50 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>{t("nav.projects_sub.library")}</Link>
              <Link href="/projects/quotes" className="py-1.5 text-sm text-white/50 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>{t("nav.projects_sub.quotes")}</Link>
              <Link href="/projects/great-figures" className="py-1.5 text-sm text-white/50 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>{t("nav.projects_sub.great_figures")}</Link>
              <Link href="/projects/endangered-languages" className="py-1.5 text-sm text-white/50 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>{t("nav.projects_sub.endangered")}</Link>
              <Link href="/projects/131-books" className="py-1.5 text-sm text-white/50 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>{t("nav.projects_sub.131books")}</Link>
              <Link href="/projects/university" className="py-1.5 text-sm text-white/50 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>{t("nav.projects_sub.university")}</Link>
            </div>
          )}

          {/* Gallery */}
          <button
            className="py-2 text-sm text-white/70 hover:text-white transition-colors flex items-center justify-between w-full"
            onClick={() => setMobileGalleryOpen(!mobileGalleryOpen)}
          >
            {t("nav.gallery")}
            <svg className={`w-3 h-3 transition-transform ${mobileGalleryOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileGalleryOpen && (
            <div className="pl-4 flex flex-col gap-1 border-l border-white/10 ml-1 mb-1">
              <Link href="/gallery/videos" className="py-1.5 text-sm text-white/50 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>{t("nav.gallery_sub.videos")}</Link>
              <Link href="/gallery/audios" className="py-1.5 text-sm text-white/50 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>{t("nav.gallery_sub.audios")}</Link>
              <Link href="/gallery/photos" className="py-1.5 text-sm text-white/50 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>{t("nav.gallery_sub.photos")}</Link>
            </div>
          )}

          <Link href="/news" className="py-2 text-sm text-white/70 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>{t("nav.news")}</Link>
          <Link href="/contact" className="py-2 text-sm text-white/70 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>{t("nav.contact")}</Link>
        </div>
      )}
    </header>
  );
}
