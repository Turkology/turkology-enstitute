"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

type Article = { date: string; title: string; body: string; img?: string };

export default function News() {
  const { t, tRaw } = useI18n();
  const articles = tRaw("news.articles") as Article[];

  return (
    <>
      <section className="relative py-32 bg-black border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,#1fa4a112,transparent)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#1fa4a1] text-sm font-medium tracking-widest uppercase mb-4">
            {t("news.label")}
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white">
            {t("news.title")}
          </h1>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-0">
          {articles.map((article, i) => (
            <article key={i} className="py-12 border-b border-white/10">
              <p className="text-[#1fa4a1] text-xs font-mono mb-4">{article.date}</p>
              {article.img && (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <h2 className="text-white text-xl font-semibold mb-4">{article.title}</h2>
              <p className="text-white/50 leading-relaxed">{article.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
