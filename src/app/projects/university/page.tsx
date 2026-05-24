"use client";

import { useI18n } from "@/lib/i18n";

type Section = {
  heading?: string;
  body?: string;
  items?: string[];
  body2?: string;
};

export default function University() {
  const { t, tRaw } = useI18n();
  const sections = tRaw("projects.university.sections") as Section[];

  return (
    <>
      <section className="relative py-32 bg-black border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,#1fa4a112,transparent)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#1fa4a1] text-sm font-medium tracking-widest uppercase mb-4">
            {t("projects.university.label")}
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6">
            {t("projects.university.title")}
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            {t("projects.university.intro")}
          </p>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-0">
          {sections.map((s, i) => (
            <div key={i} className="py-12 border-b border-white/10 last:border-0">
              {s.heading && (
                <h2 className="text-white font-semibold text-2xl mb-6">{s.heading}</h2>
              )}
              {s.body && s.body.split("\n\n").map((para, j) => (
                <p key={j} className="text-white/50 leading-relaxed mb-4 last:mb-0">{para}</p>
              ))}
              {s.items && (
                <ul className="mt-5 flex flex-col gap-3">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-white/50 text-sm leading-relaxed">
                      <span className="text-[#1fa4a1] mt-0.5 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {s.body2 && (
                <p className="text-white/50 leading-relaxed mt-5">{s.body2}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
