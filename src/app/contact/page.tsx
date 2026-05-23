"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export default function Contact() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/turkology", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="relative py-32 bg-black border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,#c9a84c12,transparent)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase mb-4">
            {t("contact.label")}
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-white/50">{t("contact.subtitle")}</p>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-2xl mx-auto px-6">
          <div className="mb-10 flex items-center gap-3">
            <span className="text-white/40 text-xs uppercase tracking-widest">{t("contact.email_label")}</span>
            <a href="mailto:info@turkology.com.au" className="text-[#c9a84c] text-sm hover:text-[#d4b86a] transition-colors">
              info@turkology.com.au
            </a>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white/50 text-xs mb-1">{t("contact.form_firstname")} *</label>
                <input name="firstName" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/50" />
              </div>
              <div>
                <label className="block text-white/50 text-xs mb-1">{t("contact.form_lastname")} *</label>
                <input name="lastName" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/50" />
              </div>
            </div>
            <div>
              <label className="block text-white/50 text-xs mb-1">{t("contact.form_email")} *</label>
              <input name="email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/50" />
            </div>
            <div>
              <label className="block text-white/50 text-xs mb-1">{t("contact.form_subject")}</label>
              <input name="subject" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/50" />
            </div>
            <div>
              <label className="block text-white/50 text-xs mb-1">{t("contact.form_message")}</label>
              <textarea name="message" rows={6} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/50 resize-none" placeholder={t("contact.form_message")} />
            </div>

            {status === "success" && (
              <p className="text-green-400 text-sm">{t("contact.form_success")}</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm">{t("contact.form_error")}</p>
            )}

            <button type="submit" className="self-start px-8 py-3 rounded-full bg-[#c9a84c] text-black font-medium text-sm hover:bg-[#d4b86a] transition-colors">
              {t("contact.form_submit")}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
