"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export default function Contact() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="relative py-32 bg-black border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,#1fa4a112,transparent)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#1fa4a1] text-sm font-medium tracking-widest uppercase mb-4">
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
            <a href="mailto:info@turkology.com.au" className="text-[#1fa4a1] text-sm hover:text-[#25bcb9] transition-colors">
              info@turkology.com.au
            </a>
          </div>

          {status === "success" ? (
            <div className="flex flex-col items-center gap-6 py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-[#1fa4a1]/15 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#1fa4a1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white text-lg font-medium">{t("contact.form_success")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/50 text-xs mb-1">{t("contact.form_firstname")} *</label>
                  <input name="firstName" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#1fa4a1]/50" />
                </div>
                <div>
                  <label className="block text-white/50 text-xs mb-1">{t("contact.form_lastname")} *</label>
                  <input name="lastName" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#1fa4a1]/50" />
                </div>
              </div>
              <div>
                <label className="block text-white/50 text-xs mb-1">{t("contact.form_email")} *</label>
                <input name="email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#1fa4a1]/50" />
              </div>
              <div>
                <label className="block text-white/50 text-xs mb-1">{t("contact.form_subject")}</label>
                <input name="subject" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#1fa4a1]/50" />
              </div>
              <div>
                <label className="block text-white/50 text-xs mb-1">{t("contact.form_message")}</label>
                <textarea name="message" rows={6} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#1fa4a1]/50 resize-none" placeholder={t("contact.form_message")} />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm">{t("contact.form_error")}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="self-start px-8 py-3 rounded-full bg-[#1fa4a1] text-black font-medium text-sm hover:bg-[#25bcb9] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "..." : t("contact.form_submit")}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
