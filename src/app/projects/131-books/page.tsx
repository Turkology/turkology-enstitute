"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

type Section = { heading: string; body: string };

export default function Books131() {
  const { t, tRaw } = useI18n();
  const sections = tRaw("projects.books131.sections") as Section[];

  return (
    <>
      {/* Hero */}
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

      {/* Atatürk photo + intro body */}
      <section className="bg-white text-black py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Photo */}
            <div className="w-full md:w-72 shrink-0">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/books131/ataturk.jpg"
                  alt="Atatürk"
                  width={288}
                  height={380}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            {/* Intro body */}
            <div className="flex-1 pt-2">
              <p className="text-black/70 text-lg leading-relaxed">
                {t("projects.books131.intro_body")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#1fa4a1] text-xs font-medium tracking-widest uppercase mb-10">
            {t("projects.books131.phases_label")}
          </p>
          <div className="flex flex-col gap-0">
            {sections.map((s, i) => (
              <div key={i} className="py-10 border-b border-white/10 last:border-0">
                <h2 className="text-white font-semibold text-xl mb-4">{s.heading}</h2>
                <p className="text-white/50 leading-relaxed">{s.body}</p>
                {/* Destek bölümüne iletişim linki */}
                {i === sections.length - 1 && (
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-[#1fa4a1] hover:gap-3 transition-all"
                  >
                    İletişime Geç
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
