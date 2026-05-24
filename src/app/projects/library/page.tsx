"use client";

import { useState } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

type Book = {
  title: string; author: string; year: string;
  publisher: string; pages: string; lang: string; img: string;
};

export default function Library() {
  const { t, tRaw } = useI18n();
  const books = tRaw("projects.library.books") as Book[];
  const [selected, setSelected] = useState<Book | null>(null);

  return (
    <>
      <section className="relative py-32 bg-black border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,#1fa4a112,transparent)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#1fa4a1] text-sm font-medium tracking-widest uppercase mb-4">
            {t("projects.library.label")}
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6">
            {t("projects.library.title")}
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            {t("projects.library.intro")}
          </p>
        </div>
      </section>

      <section className="bg-zinc-950 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-[#1fa4a1] py-8">
            {t("projects.library.books_label")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {books.map((book, i) => (
              <div
                key={i}
                className="flex gap-4 bg-zinc-950 p-4 hover:bg-zinc-900 transition-colors group cursor-pointer"
                onClick={() => setSelected(book)}
              >
                {book.img && (
                  <div className="shrink-0 w-20 self-stretch">
                    <div className="relative w-full h-full min-h-[100px] rounded overflow-hidden bg-white/5">
                      <Image src={book.img} alt={book.title} fill className="object-cover" />
                    </div>
                  </div>
                )}
                <div className="flex flex-col justify-center gap-1.5 min-w-0">
                  <p className="text-white text-sm font-medium leading-snug group-hover:text-[#1fa4a1] transition-colors">{book.title}</p>
                  <p className="text-white/40 text-xs">{book.author}</p>
                  <p className="text-white/50 text-xs">{book.publisher}</p>
                  <p className="text-white/30 text-xs">{book.year} · {book.pages} · {book.lang}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl max-w-sm w-full flex flex-col overflow-hidden relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 z-10 text-white/60 hover:text-white bg-black/50 rounded-full p-1 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {selected.img && (
              <div className="relative w-full aspect-[3/4]">
                <Image src={selected.img} alt={selected.title} fill className="object-cover" />
              </div>
            )}

            <div className="flex flex-col gap-3 p-5">
              <h2 className="text-white font-semibold text-base leading-snug">{selected.title}</h2>
              <div className="flex flex-col gap-1.5">
                <p className="text-white/50 text-sm">{selected.author}</p>
                <p className="text-white/40 text-sm">{selected.publisher}</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/60">{selected.year}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/60">{selected.pages}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/60">{selected.lang}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
