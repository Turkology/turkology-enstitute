"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { useI18n } from "@/lib/i18n";

type Photo = { caption: string; location: string; img: string };

export default function Photos() {
  const { t, tRaw } = useI18n();
  const photos = tRaw("gallery.photos") as Photo[];
  const [selected, setSelected] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const close = () => setSelected(null);
  const prev = useCallback(() => setSelected(i => i === null ? null : (i - 1 + photos.length) % photos.length), [photos.length]);
  const next = useCallback(() => setSelected(i => i === null ? null : (i + 1) % photos.length), [photos.length]);

  useEffect(() => {
    if (selected === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected, prev, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <>
      <section className="relative py-32 bg-black border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,#c9a84c12,transparent)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase mb-4">
            {t("gallery.label")}
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white">
            {t("gallery.photos_label")}
          </h1>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => setSelected(i)}
              >
                <Image
                  src={photo.img}
                  alt={photo.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                  <p className="text-white/50 text-xs mt-0.5">{photo.location}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-white/20 text-xs mt-8 text-center">
            {t("gallery.subtitle")}
          </p>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image + swipe area */}
          <div
            className="relative w-full md:max-w-5xl md:mx-16 flex-1 flex items-center justify-center overflow-hidden"
            onClick={e => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="relative w-full h-full max-h-[75vh]">
              <Image
                src={photos[selected].img}
                alt={photos[selected].caption}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Caption + navigation */}
          <div
            className="w-full md:max-w-5xl px-4 py-5 flex flex-col items-center gap-1"
            onClick={e => e.stopPropagation()}
          >
            <p className="text-white font-medium text-center">{photos[selected].caption}</p>
            <p className="text-white/50 text-sm text-center">{photos[selected].location}</p>
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={prev}
                className="text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1.5 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <p className="text-white/30 text-xs">{selected + 1} / {photos.length}</p>
              <button
                onClick={next}
                className="text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1.5 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
