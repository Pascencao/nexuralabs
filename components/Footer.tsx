"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { ROUTES } from "@/lib/i18n/routes";

export default function Footer() {
  const { dict, locale } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-dark py-10">
      <div className="mx-auto flex max-w-site flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <span className="text-sm font-bold tracking-tight text-white">
          NEXURA<span className="text-gold">LABS</span>
        </span>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
          <nav aria-label={dict.footer.legalNavAria} className="flex items-center gap-5">
            <a
              href={ROUTES.privacy[locale]}
              className="rounded text-xs text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              {dict.footer.privacy}
            </a>
            <a
              href={ROUTES.terms[locale]}
              className="rounded text-xs text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              {dict.footer.terms}
            </a>
          </nav>
          <span className="text-xs text-white/50">
            © {year} Nexura Labs. {dict.footer.rights}
          </span>
        </div>
      </div>
    </footer>
  );
}
