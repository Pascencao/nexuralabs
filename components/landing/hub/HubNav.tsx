"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { ROUTES } from "@/lib/i18n/routes";
import { track } from "@/lib/analytics/track";

export function HubLogo() {
  return (
    <span className="font-display text-lg font-extrabold tracking-[0.02em]">
      NEXURA<span className="text-hub-amber">LABS</span>
    </span>
  );
}

/** Nav sticky de las landings RIGI. Bajo 720 px los links pasan a un menú desplegable. */
export default function HubNav({
  links,
  cta,
  ctaHref,
}: {
  links: { anchor: string; label: string }[];
  cta: string;
  ctaHref: string;
}) {
  const { dict, locale } = useLanguage();
  const [open, setOpen] = useState(false);
  const linkClass =
    "rounded text-sm text-hub-muted no-underline transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hub-amber";

  return (
    <header className="sticky top-0 z-50 border-b border-[#1C2534] bg-[rgba(10,14,20,.92)] backdrop-blur">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-3 px-4 py-3.5 sm:gap-4 sm:px-6">
        <a
          href={ROUTES.home[locale]}
          className="flex items-center gap-2.5 rounded text-hub-text no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hub-amber"
        >
          <span aria-hidden="true" className="flex h-7 w-7 items-center justify-center rounded-lg bg-hub-amber">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A0E14" strokeWidth="2.4" strokeLinecap="round">
              <path d="M4 18V6l16 12V6" />
            </svg>
          </span>
          <HubLogo />
        </a>

        <nav aria-label={dict.header.navAria} className="hidden flex-wrap gap-6 min-[720px]:flex">
          {links.map((link) => (
            <a key={link.anchor} href={`#${link.anchor}`} className={linkClass}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <div className="hidden min-[720px]:flex">
            <LanguageSwitch />
          </div>
          <a
            href={ctaHref}
            onClick={() => track({ name: "click_hablemos", location: "header" })}
            className="inline-flex min-h-[44px] items-center whitespace-nowrap rounded-full bg-hub-amber px-[18px] py-3 text-sm font-semibold text-hub-ink no-underline transition-colors hover:bg-[#FFD27A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {cta}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="hub-mobile-nav"
            aria-label={dict.landings.hub.menuLabel}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-hub-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hub-amber min-[720px]:hidden"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="hub-mobile-nav"
          aria-label={dict.header.navAria}
          className="flex flex-col border-t border-hub-line px-6 pb-4 pt-2 min-[720px]:hidden"
        >
          {links.map((link) => (
            <a
              key={link.anchor}
              href={`#${link.anchor}`}
              onClick={() => setOpen(false)}
              className="flex min-h-[44px] items-center rounded text-base text-hub-text no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hub-amber"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 border-t border-hub-line pt-2">
            <LanguageSwitch />
          </div>
        </nav>
      )}
    </header>
  );
}

function LanguageSwitch() {
  const { dict, locale, switchLocale } = useLanguage();
  return (
    <div
      role="group"
      aria-label={dict.header.languageSwitcherAria}
      className="flex items-center font-plex-mono text-xs text-hub-subtle"
    >
      {(["es", "en"] as const).map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span aria-hidden="true">·</span>}
          <button
            type="button"
            lang={l}
            aria-pressed={locale === l}
            onClick={() => switchLocale(l)}
            className={`min-h-[44px] rounded px-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hub-amber ${
              locale === l ? "text-hub-text" : "text-hub-subtle underline underline-offset-4 hover:text-hub-text"
            }`}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
