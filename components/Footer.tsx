"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

export default function Footer() {
  const { dict } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-dark py-10">
      <div className="mx-auto flex max-w-site flex-col items-center gap-2 px-5 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <span className="text-sm font-bold tracking-tight text-white">
          NEXURA<span className="text-gold">LABS</span>
        </span>
        <span className="text-xs text-white/50">
          © {year} Nexuralabs. {dict.footer.rights}
        </span>
      </div>
    </footer>
  );
}
