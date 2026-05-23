"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-zinc-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image src="/images/logo/logo.svg" alt="Turkology Institute" width={312} height={73} />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-4">{t("footer.tagline")}</p>
            <p className="text-white/30 text-xs">{t("footer.location")}</p>
            <a href="mailto:info@turkology.com.au" className="text-white/30 text-xs hover:text-[#c9a84c] transition-colors block mt-1">
              info@turkology.com.au
            </a>
          </div>

          {/* Institute */}
          <div>
            <p className="text-white text-xs font-medium uppercase tracking-widest mb-5">{t("footer.col_institute")}</p>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-white/40 hover:text-white transition-colors">{t("nav.home")}</Link>
              <Link href="/about" className="text-sm text-white/40 hover:text-white transition-colors">{t("nav.about")}</Link>
              <Link href="/news" className="text-sm text-white/40 hover:text-white transition-colors">{t("nav.news")}</Link>
              <Link href="/contact" className="text-sm text-white/40 hover:text-white transition-colors">{t("nav.contact")}</Link>
            </div>
          </div>

          {/* Projects */}
          <div>
            <p className="text-white text-xs font-medium uppercase tracking-widest mb-5">{t("footer.col_projects")}</p>
            <div className="flex flex-col gap-3">
              <Link href="/projects/library" className="text-sm text-white/40 hover:text-white transition-colors">{t("nav.projects_sub.library")}</Link>
              <Link href="/projects/quotes" className="text-sm text-white/40 hover:text-white transition-colors">{t("nav.projects_sub.quotes")}</Link>
              <Link href="/projects/great-figures" className="text-sm text-white/40 hover:text-white transition-colors">{t("nav.projects_sub.great_figures")}</Link>
              <Link href="/projects/endangered-languages" className="text-sm text-white/40 hover:text-white transition-colors">{t("nav.projects_sub.endangered")}</Link>
              <Link href="/projects/131-books" className="text-sm text-white/40 hover:text-white transition-colors">{t("nav.projects_sub.131books")}</Link>
              <Link href="/projects/university" className="text-sm text-white/40 hover:text-white transition-colors">{t("nav.projects_sub.university")}</Link>
            </div>
          </div>

          {/* Gallery + Social */}
          <div>
            <p className="text-white text-xs font-medium uppercase tracking-widest mb-5">{t("footer.col_gallery")}</p>
            <div className="flex flex-col gap-3 mb-8">
              <Link href="/gallery/photos" className="text-sm text-white/40 hover:text-white transition-colors">{t("nav.gallery_sub.photos")}</Link>
              <Link href="/gallery/videos" className="text-sm text-white/40 hover:text-white transition-colors">{t("nav.gallery_sub.videos")}</Link>
              <Link href="/gallery/audios" className="text-sm text-white/40 hover:text-white transition-colors">{t("nav.gallery_sub.audios")}</Link>
            </div>

            <p className="text-white text-xs font-medium uppercase tracking-widest mb-4">{t("footer.col_follow")}</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/turkologyinstitutesydney"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@TurkologyInstitute"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/20 text-xs">{t("footer.copyright")}</p>
          <p className="text-white/20 text-xs">turkology.com.au</p>
        </div>
      </div>
    </footer>
  );
}
