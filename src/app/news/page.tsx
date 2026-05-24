"use client";

import Image from "next/image";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

type Article = { date: string; title: string; body: string; img?: string };

export default function News() {
  const { t, tRaw } = useI18n();
  const articles = tRaw("news.articles") as Article[];
  const [lightbox, setLightbox] = useState<string | null>(null);

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
                <div
                  className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 cursor-zoom-in group"
                  onClick={() => setLightbox(article.img!)}
                >
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <h2 className="text-white text-xl font-semibold mb-4">{article.title}</h2>
              <p className="text-white/50 leading-relaxed">{article.body}</p>
            </article>
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <Image
              src={lightbox}
              alt=""
              width={1200}
              height={800}
              className="w-full h-auto max-h-[90vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
