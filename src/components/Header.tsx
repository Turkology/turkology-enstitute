"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n";

export default function Header() {
  const { t, locale, setLocale, mounted } = useI18n();
  const pathname = usePathname();
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);

  // Strip locale prefix if present (/tr/... → /...)
  const path = pathname.replace(/^\/(tr|en)/, "") || "/";

  const isActive = (href: string) =>
    href === "/" ? path === "/" : path === href || path.startsWith(href + "/");

  const navLink = (href: string) =>
    `px-4 py-2 text-sm transition-colors ${isActive(href) ? "text-[#1fa4a1]" : "text-white/70 hover:text-white"}`;

  const mobileLink = (href: string) =>
    `py-2 text-sm transition-colors ${isActive(href) ? "text-[#1fa4a1]" : "text-white/70 hover:text-white"}`;

  const mobileSubLink = (href: string) =>
    `py-1.5 text-sm transition-colors ${isActive(href) ? "text-[#1fa4a1]" : "text-white/50 hover:text-white"}`;

  const parentActive = (prefix: string) => path.startsWith(prefix);
  const parentClass = (prefix: string) =>
    `px-4 py-2 text-sm transition-colors flex items-center gap-1 ${parentActive(prefix) ? "text-[#1fa4a1]" : "text-white/70 hover:text-white"}`;
  const mobileParentClass = (prefix: string) =>
    `py-2 text-sm transition-colors flex items-center justify-between w-full ${parentActive(prefix) ? "text-[#1fa4a1]" : "text-white/70 hover:text-white"}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo/logo.svg" alt="Turkology Institute" width={180} height={40} className="hidden sm:block" />
          <Image src="/images/logo/logo.svg" alt="Turkology Institute" width={130} height={30} className="block sm:hidden" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Link href="/" className={navLink("/")}>{t("nav.home")}</Link>
          <Link href="/about" className={navLink("/about")}>{t("nav.about")}</Link>

          <div className="relative" onMouseEnter={() => setProjectsOpen(true)} onMouseLeave={() => setProjectsOpen(false)}>
            <button className={parentClass("/projects")}>
              {t("nav.projects")}
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {projectsOpen && (
              <div className="absolute top-full left-0 w-64 pt-2">
                <div className="bg-zinc-900 border border-white/10 rounded-lg shadow-xl py-1">
                  {[
                    { href: "/projects/library", key: "library" },
                    { href: "/projects/quotes", key: "quotes" },
                    { href: "/projects/great-figures", key: "great_figures" },
                    { href: "/projects/endangered-languages", key: "endangered" },
                    { href: "/projects/131-books", key: "131books" },
                    { href: "/projects/university", key: "university" },
                  ].map(({ href, key }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setProjectsOpen(false)}
                      className={`block px-4 py-2 text-sm hover:bg-white/5 transition-colors ${isActive(href) ? "text-[#1fa4a1]" : "text-white/70 hover:text-white"}`}
                    >
                      {t(`nav.projects_sub.${key}` as any)}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setGalleryOpen(true)} onMouseLeave={() => setGalleryOpen(false)}>
            <button className={parentClass("/gallery")}>
              {t("nav.gallery")}
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {galleryOpen && (
              <div className="absolute top-full left-0 w-40 pt-2">
                <div className="bg-zinc-900 border border-white/10 rounded-lg shadow-xl py-1">
                  {[
                    { href: "/gallery/videos", key: "videos" },
                    { href: "/gallery/audios", key: "audios" },
                    { href: "/gallery/photos", key: "photos" },
                  ].map(({ href, key }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setGalleryOpen(false)}
                      className={`block px-4 py-2 text-sm hover:bg-white/5 transition-colors ${isActive(href) ? "text-[#1fa4a1]" : "text-white/70 hover:text-white"}`}
                    >
                      {t(`nav.gallery_sub.${key}` as any)}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/news" className={navLink("/news")}>{t("nav.news")}</Link>
          <Link href="/contact" className={navLink("/contact")}>{t("nav.contact")}</Link>
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
          <Link href="/" className={mobileLink("/")} onClick={() => setMobileOpen(false)}>{t("nav.home")}</Link>
          <Link href="/about" className={mobileLink("/about")} onClick={() => setMobileOpen(false)}>{t("nav.about")}</Link>

          {/* Projects */}
          <button className={mobileParentClass("/projects")} onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}>
            {t("nav.projects")}
            <svg className={`w-3 h-3 transition-transform ${mobileProjectsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileProjectsOpen && (
            <div className="pl-4 flex flex-col gap-1 border-l border-white/10 ml-1 mb-1">
              {[
                { href: "/projects/library", key: "library" },
                { href: "/projects/quotes", key: "quotes" },
                { href: "/projects/great-figures", key: "great_figures" },
                { href: "/projects/endangered-languages", key: "endangered" },
                { href: "/projects/131-books", key: "131books" },
                { href: "/projects/university", key: "university" },
              ].map(({ href, key }) => (
                <Link key={href} href={href} className={mobileSubLink(href)} onClick={() => setMobileOpen(false)}>
                  {t(`nav.projects_sub.${key}` as any)}
                </Link>
              ))}
            </div>
          )}

          {/* Gallery */}
          <button className={mobileParentClass("/gallery")} onClick={() => setMobileGalleryOpen(!mobileGalleryOpen)}>
            {t("nav.gallery")}
            <svg className={`w-3 h-3 transition-transform ${mobileGalleryOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileGalleryOpen && (
            <div className="pl-4 flex flex-col gap-1 border-l border-white/10 ml-1 mb-1">
              {[
                { href: "/gallery/videos", key: "videos" },
                { href: "/gallery/audios", key: "audios" },
                { href: "/gallery/photos", key: "photos" },
              ].map(({ href, key }) => (
                <Link key={href} href={href} className={mobileSubLink(href)} onClick={() => setMobileOpen(false)}>
                  {t(`nav.gallery_sub.${key}` as any)}
                </Link>
              ))}
            </div>
          )}

          <Link href="/news" className={mobileLink("/news")} onClick={() => setMobileOpen(false)}>{t("nav.news")}</Link>
          <Link href="/contact" className={mobileLink("/contact")} onClick={() => setMobileOpen(false)}>{t("nav.contact")}</Link>
        </div>
      )}
    </header>
  );
}
