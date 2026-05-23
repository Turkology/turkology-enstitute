"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function Library() {
  const { t, tRaw } = useI18n();
  const books = tRaw("projects.library.books") as {
    title: string; author: string; year: string;
    publisher: string; pages: string; lang: string; img: string;
  }[];

  return (
    <>
      <section className="relative py-32 bg-black border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,#c9a84c12,transparent)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase mb-4">
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
          <p className="text-xs font-medium tracking-widest uppercase text-[#c9a84c] py-8">
            {t("projects.library.books_label")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {books.map((book, i) => (
              <div key={i} className="flex gap-4 bg-zinc-950 p-4 hover:bg-zinc-900 transition-colors group">
                {book.img && (
                  <div className="shrink-0 w-20 self-stretch">
                    <div className="relative w-full h-full min-h-[100px] rounded overflow-hidden bg-white/5">
                      <Image src={book.img} alt={book.title} fill className="object-cover" />
                    </div>
                  </div>
                )}
                <div className="flex flex-col justify-center gap-1.5 min-w-0">
                  <p className="text-white text-sm font-medium leading-snug group-hover:text-[#c9a84c] transition-colors">{book.title}</p>
                  <p className="text-white/40 text-xs">{book.author}</p>
                  <p className="text-white/50 text-xs">{book.publisher}</p>
                  <p className="text-white/30 text-xs">{book.year} · {book.pages} · {book.lang}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
