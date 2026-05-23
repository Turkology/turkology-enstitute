"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function Photos() {
  const { t, tRaw } = useI18n();
  const photos = tRaw("gallery.photos") as { caption: string; location: string; img: string }[];

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
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
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
    </>
  );
}
