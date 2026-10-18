"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { ROUTES } from "@/lib/i18n/routes";
import { HubLogo } from "@/components/landing/hub/HubNav";

export default function HubFooter() {
  const { dict, locale } = useLanguage();
  const year = new Date().getFullYear();
  const linkClass =
    "rounded text-hub-muted underline-offset-4 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hub-amber";

  return (
    <footer className="border-t border-[#1C2534] bg-[#070A0F]">
      <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-6 px-6 py-10 text-sm text-hub-subtle">
        <div className="flex flex-col gap-2">
          <span className="text-hub-text">
            <HubLogo />
          </span>
          <span>{dict.landings.hub.footerTagline}</span>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <a href="mailto:pablo@nexuralabs.agency" className={linkClass}>
            pablo@nexuralabs.agency
          </a>
          <a href={ROUTES.privacy[locale]} className={linkClass}>
            {dict.footer.privacy}
          </a>
          <a href={ROUTES.terms[locale]} className={linkClass}>
            {dict.footer.terms}
          </a>
          <span>© {year} Nexura Labs</span>
        </div>
      </div>
    </footer>
  );
}
