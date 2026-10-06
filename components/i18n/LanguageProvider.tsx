"use client";

import { createContext, useContext, useMemo } from "react";
import { LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { alternatePath } from "@/lib/i18n/routes";
import type { Dictionary } from "@/lib/i18n/types";

type LanguageContextValue = {
  locale: Locale;
  dict: Dictionary;
  /** Guarda la preferencia y navega a la página equivalente en `target`, conservando el #ancla. */
  switchLocale: (target: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function rememberLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax`;
}

export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      dict: getDictionary(locale),
      switchLocale: (target) => {
        rememberLocale(target);
        if (target === locale) return;
        const { pathname, hash } = window.location;
        window.location.assign(`${alternatePath(pathname, target)}${hash}`);
      },
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
