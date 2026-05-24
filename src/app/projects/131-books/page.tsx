"use client";

import { useI18n } from "@/lib/i18n";

export default function Books131() {
  const { t, tRaw } = useI18n();
  const sections = tRaw("projects.books131.sections") as { heading: string; body: string }[];

  return (
    <>
      <section className="relative py-32 bg-black border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,#1fa4a112,transparent)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#1fa4a1] text-sm font-medium tracking-widest uppercase mb-4">
            {t("projects.books131.label")}
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6">
            {t("projects.books131.title")}
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            {t("projects.books131.intro")}
          </p>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-12">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-white font-semibold text-xl mb-3">{s.heading}</h2>
              <p className="text-white/50 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
