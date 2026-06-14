"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

type Section = { heading: string; body: string; img?: string };

export default function EndangeredLanguages() {
  const { t, tRaw } = useI18n();
  const sections = tRaw("projects.endangered.sections") as Section[];

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-black border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,#1fa4a112,transparent)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#1fa4a1] text-sm font-medium tracking-widest uppercase mb-4">
            {t("projects.endangered.label")}
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6">
            {t("projects.endangered.title")}
          </h1>
        </div>
      </section>

      {/* Hero image banner */}
      <div className="relative w-full h-56 md:h-72 overflow-hidden bg-zinc-900">
        <Image
          src="/images/endangered/hero.png"
          alt="Tehlikedeki Türk Dilleri"
          fill
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
      </div>

      {/* Sections */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-0">
          {sections.map((s, i) => {
            const hasImg = !!s.img;
            const imgRight = i % 2 === 0; // even → image on right, odd → image on left
            return (
              <div
                key={i}
                className="py-14 border-b border-white/10 last:border-0"
              >
                {hasImg ? (
                  <div className={`flex flex-col ${imgRight ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center`}>
                    {/* Text */}
                    <div className="flex-1">
                      <h2 className="text-white font-semibold text-2xl mb-4">{s.heading}</h2>
                      <p className="text-white/50 leading-relaxed">{s.body}</p>
                    </div>
                    {/* Image */}
                    <div className="w-full md:w-72 shrink-0 rounded-xl overflow-hidden bg-white/5">
                      <Image
                        src={s.img!}
                        alt={s.heading}
                        width={288}
                        height={220}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="max-w-3xl">
                    <h2 className="text-white font-semibold text-2xl mb-4">{s.heading}</h2>
                    <p className="text-white/50 leading-relaxed">{s.body}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
