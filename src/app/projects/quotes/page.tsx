"use client";

import { useI18n } from "@/lib/i18n";

export default function Quotes() {
  const { t } = useI18n();

  return (
    <>
      <section className="relative py-32 bg-black border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,#c9a84c12,transparent)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase mb-4">
            {t("projects.quotes.label")}
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6">
            {t("projects.quotes.title")}
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            {t("projects.quotes.intro")}
          </p>
        </div>
      </section>

      <section className="py-28 bg-white text-black">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-black/60 text-lg leading-relaxed mb-12">{t("projects.quotes.body")}</p>
          <div className="border border-black/10 rounded-2xl p-8">
            <p className="text-xs font-medium tracking-widest uppercase text-[#a07c30] mb-3">
              {t("projects.quotes.pdf_label")}
            </p>
            <p className="text-black/50 text-sm">{t("projects.quotes.pdf_note")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
