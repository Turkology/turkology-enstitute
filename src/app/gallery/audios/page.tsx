"use client";

import { useI18n } from "@/lib/i18n";

export default function Audios() {
  const { t, tRaw } = useI18n();
  const audios = tRaw("gallery.audios") as { title: string; artist: string; region: string; duration: string }[];

  return (
    <>
      <section className="relative py-32 bg-black border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,#c9a84c12,transparent)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase mb-4">
            {t("gallery.label")}
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white">
            {t("gallery.audios_label")}
          </h1>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col gap-0">
            {audios.map((audio, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 py-5 border-b border-white/10 group hover:bg-white/[0.02] px-2 -mx-2 transition-colors items-center">
                <span className="col-span-1 text-white/20 text-xs font-mono">{String(i + 1).padStart(2, "0")}</span>
                <div className="col-span-5">
                  <p className="text-white text-sm font-medium group-hover:text-[#c9a84c] transition-colors">{audio.title}</p>
                  <p className="text-white/40 text-xs mt-0.5">{audio.artist}</p>
                </div>
                <p className="col-span-4 text-white/40 text-xs">{audio.region}</p>
                <p className="col-span-2 text-white/30 text-xs font-mono text-right">{audio.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
