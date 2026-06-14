"use client";

import { useI18n } from "@/lib/i18n";

export default function Gallery() {
  const { t, tRaw } = useI18n();
  const audios = tRaw("gallery.audios") as { title: string; region: string; duration: string }[];
  const photos = tRaw("gallery.photos") as { caption: string }[];

  return (
    <>
      <section className="relative py-32 bg-black border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,#1fa4a112,transparent)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#1fa4a1] text-sm font-medium tracking-widest uppercase mb-4">
            {t("gallery.label")}
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6">
            {t("gallery.title")}
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            {t("gallery.subtitle")}
          </p>
        </div>
      </section>

      {/* Videos */}
      <section className="py-20 bg-zinc-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-[#1fa4a1] mb-8">
            {t("gallery.videos_label")}
          </p>
          <a
            href="https://www.youtube.com/@TurkologyInstitute"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 text-white/70 text-sm hover:border-white/40 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
            </svg>
            {t("gallery.youtube_cta")}
          </a>
        </div>
      </section>

      {/* Audios */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-[#1fa4a1] mb-8">
            {t("gallery.audios_label")}
          </p>
          <div className="flex flex-col gap-0">
            {audios.map((audio, i) => (
              <div key={i} className="flex items-center justify-between py-5 border-b border-white/10">
                <div>
                  <p className="text-white text-sm font-medium">{audio.title}</p>
                  <p className="text-white/40 text-xs mt-0.5">{audio.region}</p>
                </div>
                <span className="text-white/30 text-xs font-mono">{audio.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-[#1fa4a1] mb-8">
            {t("gallery.photos_label")}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {photos.map((photo, i) => (
              <div key={i} className="aspect-video bg-white/5 rounded-xl flex items-end p-4 border border-white/10">
                <p className="text-white/40 text-xs">{photo.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
