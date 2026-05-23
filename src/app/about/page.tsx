"use client";

import { useI18n } from "@/lib/i18n";

export default function About() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-black border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,#c9a84c12,transparent)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase mb-4">
            {t("about.hero_label")}
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6">
            {t("about.hero_title")}
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            {t("about.hero_subtitle")}
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-28 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#a07c30] mb-4">
              {t("about.founder_label")}
            </p>
            <h2 className="text-4xl font-semibold tracking-tight leading-tight">
              {t("about.founder_title")}
            </h2>
          </div>
          <p className="text-black/60 text-lg leading-relaxed">
            {t("about.founder_body")}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#c9a84c] mb-4">
              {t("about.mission_label")}
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-white leading-tight">
              {t("about.mission_title")}
            </h2>
          </div>
          <p className="text-white/50 text-lg leading-relaxed">
            {t("about.mission_body")}
          </p>
        </div>
      </section>
    </>
  );
}
