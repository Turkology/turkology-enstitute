"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "@/locales/en.json";
import tr from "@/locales/tr.json";

type Locale = "en" | "tr";

const translations = { en, tr };

type NestedKeyOf<T> = T extends object
  ? { [K in keyof T]: K extends string ? `${K}` | `${K}.${NestedKeyOf<T[K]>}` : never }[keyof T]
  : never;

type TranslationKeys = NestedKeyOf<typeof en>;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tRaw: (key: string) => any;
  mounted: boolean;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "en" || saved === "tr") setLocale(saved);
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function changeLocale(l: Locale) {
    setLocale(l);
    localStorage.setItem("locale", l);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function tRaw(key: string): any {
    const keys = key.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[locale];
    for (const k of keys) {
      value = value?.[k];
    }
    return value ?? key;
  }

  function t(key: string): string {
    const value = tRaw(key);
    return typeof value === "string" ? value : key;
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale: changeLocale, t, tRaw, mounted }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}
