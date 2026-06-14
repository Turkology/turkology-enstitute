"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/lib/i18n";

export type SanityAudio = {
  _id: string;
  title: string;
  artist: string;
  region: string;
  duration: string;
  audioFileUrl?: string;
  audioUrl?: string;
  src?: string;
  order: number;
};

export default function AudiosClient({ audios }: { audios: SanityAudio[] }) {
  const { t } = useI18n();

  const [playing, setPlaying] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => { setCurrentTime(audio.currentTime); setProgress(audio.duration ? audio.currentTime / audio.duration : 0); };
    const onMeta = () => setDuration(audio.duration);
    const onEnd  = () => { setPlaying(null); setProgress(0); setCurrentTime(0); };
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnd);
    return () => { audio.removeEventListener("timeupdate", onTime); audio.removeEventListener("loadedmetadata", onMeta); audio.removeEventListener("ended", onEnd); };
  }, []);

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  const handlePlay = (i: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing === i) {
      audio.paused ? audio.play() : audio.pause();
      setPlaying(audio.paused ? null : i);
    } else {
      audio.src = audios[i].audioFileUrl ?? audios[i].audioUrl ?? audios[i].src ?? "";
      audio.currentTime = 0;
      setProgress(0); setCurrentTime(0); setDuration(0);
      audio.play();
      setPlaying(i);
    }
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>, i: number) => {
    if (playing !== i) return;
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * audio.duration;
  };

  return (
    <>
      <audio ref={audioRef} />

      <section className="relative py-32 bg-black border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,#1fa4a112,transparent)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#1fa4a1] text-sm font-medium tracking-widest uppercase mb-4">
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
            {audios.map((audio, i) => {
              const isPlaying = playing === i;
              return (
                <div
                  key={audio._id}
                  className={`py-4 border-b border-white/10 px-2 -mx-2 transition-colors ${isPlaying ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"}`}
                >
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handlePlay(i)}
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isPlaying ? "bg-[#1fa4a1] text-black" : "bg-white/10 text-white hover:bg-[#1fa4a1] hover:text-black"}`}
                    >
                      {isPlaying ? (
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
                        </svg>
                      ) : (
                        <svg className="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      )}
                    </button>

                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium truncate transition-colors ${isPlaying ? "text-[#1fa4a1]" : "text-white"}`}>
                        {audio.title}
                      </p>
                      <p className="text-white/40 text-xs truncate">{audio.artist} · {audio.region}</p>
                    </div>

                    <p className="text-white/30 text-xs font-mono shrink-0">
                      {isPlaying ? fmt(currentTime) : audio.duration}
                    </p>
                  </div>

                  {isPlaying && (
                    <div
                      className="mt-3 mx-12 h-1 bg-white/10 rounded-full cursor-pointer"
                      onClick={e => seek(e, i)}
                    >
                      <div
                        className="h-full bg-[#1fa4a1] rounded-full transition-all"
                        style={{ width: `${progress * 100}%` }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
