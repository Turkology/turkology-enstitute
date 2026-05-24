"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import FlagMarquee from "@/components/FlagMarquee";

export default function Home() {
  const { t, tRaw } = useI18n();

  const milestones = tRaw("home.milestones") as { year: string; text: string; img: string }[];
  const projects = tRaw("home.projects") as { title: string; desc: string; href: string }[];
  const courses = tRaw("home.courses") as { title: string; desc: string }[];
  const objectives = tRaw("home.about_objectives") as string[];
  const inspirations = tRaw("home.inspirations") as { name: string; img: string; href: string }[];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/harita.png" alt="" className="w-full h-full object-contain opacity-[0.07]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,#1fa4a118,transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#1fa4a1] text-sm font-medium tracking-widest uppercase mb-6">
            {t("home.hero_label")}
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-tight mb-6">
            {t("home.hero_title")}
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("home.hero_subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="px-8 py-3 rounded-full bg-[#1fa4a1] text-black font-medium text-sm hover:bg-[#25bcb9] transition-colors"
            >
              {t("home.hero_cta_primary")}
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 rounded-full border border-white/20 text-white/70 font-medium text-sm hover:border-white/40 hover:text-white transition-colors"
            >
              {t("home.hero_cta_secondary")}
            </Link>
          </div>
        </div>

      </section>

      <FlagMarquee />

      {/* About */}
      <section className="py-28 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-[#178280] mb-4">
            {t("home.about_label")}
          </p>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
                {t("home.about_title")}
              </h2>
              <ul className="flex flex-col gap-3 mb-8">
                {objectives.map((obj, i) => (
                  <li key={i} className="flex gap-3 text-black/60 text-sm leading-relaxed">
                    <span className="text-[#178280] mt-0.5">—</span>
                    {obj}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#178280] hover:gap-3 transition-all"
              >
                {t("home.about_link")}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <p className="text-black/60 text-lg leading-relaxed">
              {t("home.about_body")}
            </p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-28 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-[#1fa4a1] mb-4">
            {t("home.milestones_label")}
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-16">
            {t("home.milestones_title")}
          </h2>
          <div className="flex flex-col gap-0">
            {milestones.map((m, i) => (
              <div key={i} className="py-5 border-b border-white/10 group">
                {/* Masaüstü */}
                <div className="hidden md:flex gap-6 items-center">
                  <span className="text-[#1fa4a1] font-mono text-sm w-14 shrink-0">{m.year}</span>
                  {m.img && (
                    <div className="w-64 h-64 shrink-0 rounded-lg overflow-hidden bg-white/5">
                      <Image src={m.img} alt={m.text} width={256} height={256} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <p className="text-white/60 group-hover:text-white transition-colors text-base">{m.text}</p>
                </div>
                {/* Mobil */}
                <div className="md:hidden flex gap-4 items-start">
                  <span className="text-[#1fa4a1] font-mono text-xs w-10 shrink-0 pt-1">{m.year}</span>
                  <div className="flex flex-col gap-2">
                    {m.img && (
                      <div className="w-[160px] h-[160px] rounded-lg overflow-hidden bg-white/5 shrink-0">
                        <Image src={m.img} alt={m.text} width={160} height={160} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <p className="text-white/60 text-sm leading-relaxed">{m.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-[#1fa4a1] mb-4">
            {t("home.projects_label")}
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-16">
            {t("home.projects_title")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {projects.map((p, i) => (
              <Link
                key={i}
                href={p.href}
                className="bg-black p-8 hover:bg-zinc-900 transition-colors group"
              >
                <h3 className="text-white font-medium mb-2 group-hover:text-[#1fa4a1] transition-colors">
                  {p.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-28 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-[#178280] mb-4">
            {t("home.courses_label")}
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
            {t("home.courses_title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((c, i) => (
              <div key={i} className="border border-black/10 rounded-2xl p-8">
                <div className="w-8 h-8 rounded-full bg-[#1fa4a1]/20 flex items-center justify-center mb-4">
                  <span className="text-[#178280] text-xs font-mono">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-semibold text-black mb-2">{c.title}</h3>
                <p className="text-black/50 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-black/40 text-sm mt-10 text-center italic">{t("home.courses_notice")}</p>
        </div>
      </section>

      {/* Inspirations */}
      <section className="py-28 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-[#1fa4a1] mb-4">
            {t("home.inspirations_label")}
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-16">
            {t("home.inspirations_title")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10">
            {inspirations.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-950 px-4 py-5 hover:bg-zinc-900 transition-colors flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-4"
              >
                <div className="w-20 h-20 shrink-0 rounded overflow-hidden bg-white/10 flex items-center justify-center">
                  <Image src={item.img} alt={item.name} width={80} height={80} className="w-full h-full object-contain p-1" />
                </div>
                <p className="text-white/60 text-sm text-center md:text-left">{item.name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-28 bg-black text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-[#1fa4a1] mb-4">
            {t("home.contact_label")}
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            {t("home.contact_title")}
          </h2>
          <p className="text-white/50 text-lg mb-10 leading-relaxed">
            {t("home.contact_body")}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-[#1fa4a1] text-black font-medium text-sm hover:bg-[#25bcb9] transition-colors"
          >
            {t("home.contact_cta")}
          </Link>
        </div>
      </section>
    </>
  );
}
