"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useI18n } from "@/lib/i18n";

type YoutubeVideo = { type: "youtube"; id: string; title: string };
type LocalVideo   = { type: "local";   src: string; title: string };
type Video = YoutubeVideo | LocalVideo;

function Thumbnail({ video, onClick }: { video: Video; onClick: () => void }) {
  return (
    <div
      className="group cursor-pointer rounded-xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-colors"
      onClick={onClick}
    >
      <div className="relative aspect-video bg-zinc-800 flex items-center justify-center overflow-hidden">
        {video.type === "youtube" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <video
            src={video.src + "#t=10"}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            preload="metadata"
            onLoadedMetadata={e => { e.currentTarget.currentTime = 10; }}
          />
        )}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center group-hover:bg-[#1fa4a1] transition-colors">
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white text-sm font-medium leading-snug group-hover:text-[#1fa4a1] transition-colors line-clamp-2">
          {video.title}
        </p>
      </div>
    </div>
  );
}

export default function Videos() {
  const { t, tRaw } = useI18n();
  const videos = tRaw("gallery.videos") as Video[];
  const [selected, setSelected] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const close = () => setSelected(null);
  const prev = useCallback(() => setSelected(i => i === null ? null : (i - 1 + videos.length) % videos.length), [videos.length]);
  const next = useCallback(() => setSelected(i => i === null ? null : (i + 1) % videos.length), [videos.length]);

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

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const current = selected !== null ? videos[selected] : null;

  return (
    <>
      <section className="relative py-32 bg-black border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,#1fa4a112,transparent)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#1fa4a1] text-sm font-medium tracking-widest uppercase mb-4">
            {t("gallery.label")}
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white">
            {t("gallery.videos_label")}
          </h1>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {videos.map((video, i) => (
              <Thumbnail key={i} video={video} onClick={() => setSelected(i)} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.youtube.com/@TurkologyInstitute"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1fa4a1] text-black font-medium text-sm hover:bg-[#25bcb9] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
              </svg>
              {t("gallery.youtube_cta")}
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {current !== null && selected !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative w-full md:max-w-5xl md:mx-16 flex-1 flex items-center justify-center px-4"
            onClick={e => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="w-full aspect-video">
              {current.type === "youtube" ? (
                <iframe
                  key={current.id}
                  src={`https://www.youtube.com/embed/${current.id}?autoplay=1`}
                  title={current.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                />
              ) : (
                <video
                  key={current.src}
                  src={current.src}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full rounded-xl"
                />
              )}
            </div>
          </div>

          <div
            className="w-full md:max-w-5xl px-4 py-5 flex flex-col items-center gap-1"
            onClick={e => e.stopPropagation()}
          >
            <p className="text-white font-medium text-center line-clamp-1">{current.title}</p>
            <div className="flex items-center gap-4 mt-2">
              <button onClick={prev} className="text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1.5 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <p className="text-white/30 text-xs">{selected + 1} / {videos.length}</p>
              <button onClick={next} className="text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1.5 transition-colors">
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
