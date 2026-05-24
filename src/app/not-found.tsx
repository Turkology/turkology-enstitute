"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <p className="text-[#1fa4a1] text-sm font-medium tracking-widest uppercase mb-4">404</p>
      <h1 className="text-5xl font-semibold text-white mb-4">Page Not Found</h1>
      <p className="text-white/40 mb-10">The page you are looking for does not exist.</p>
      <Link href="/" className="px-8 py-3 rounded-full bg-[#1fa4a1] text-black font-medium text-sm hover:bg-[#25bcb9] transition-colors">
        {t("nav.home")}
      </Link>
    </div>
  );
}
