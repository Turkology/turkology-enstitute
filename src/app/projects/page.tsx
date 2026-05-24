"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

const projectLinks = [
  { key: "library", href: "/projects/library" },
  { key: "great_figures", href: "/projects/great-figures" },
  { key: "endangered", href: "/projects/endangered-languages" },
  { key: "books131", href: "/projects/131-books" },
  { key: "quotes", href: "/projects/quotes" },
  { key: "university", href: "/projects/university" },
];

export default function Projects() {
  const { t } = useI18n();

  return (
    <>
      <section className="relative py-32 bg-black border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,#1fa4a112,transparent)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#1fa4a1] text-sm font-medium tracking-widest uppercase mb-4">
            {t("projects.page_label")}
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6">
            {t("projects.page_title")}
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            {t("projects.page_subtitle")}
          </p>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {projectLinks.map(({ key, href }) => (
            <Link key={key} href={href} className="bg-black p-8 hover:bg-zinc-900 transition-colors group">
              <h2 className="text-white font-medium mb-2 group-hover:text-[#1fa4a1] transition-colors">
                {t(`projects.${key}.title`)}
              </h2>
              <p className="text-white/40 text-sm leading-relaxed line-clamp-3">
                {t(`projects.${key}.intro`)}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
