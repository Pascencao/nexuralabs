"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import type { Locale } from "@/lib/i18n/config";
import { ROUTES, homeAnchor, isLandingPath } from "@/lib/i18n/routes";

export default function Header() {
  const { dict, locale, switchLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "";

  // Landings: un solo mensaje y un solo CTA, sin menú de secciones.
  if (isLandingPath(pathname)) {
    return (
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-canvas/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-4 px-5 sm:px-8">
          <a href={ROUTES.home[locale]} className="text-lg font-bold tracking-tight text-ink">
            NEXURA<span className="text-gold">LABS</span>
          </a>
          <div className="flex items-center gap-3 sm:gap-4">
            <LanguageToggle
              locale={locale}
              onSelect={switchLocale}
              aria={dict.header.languageSwitcherAria}
            />
            <a
              href="#contacto"
              className="whitespace-nowrap rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-canvas transition-colors hover:bg-gold sm:px-5"
            >
              {dict.header.cta}
            </a>
          </div>
        </div>
      </header>
    );
  }

  const links = [
    { anchor: "problema", label: dict.header.links.problem },
    { anchor: "servicios", label: dict.header.links.services },
    { anchor: "ia", label: dict.header.links.ai },
    { anchor: "casos", label: dict.header.links.cases },
    { anchor: "sobre-mi", label: dict.header.links.about },
    { anchor: "contacto", label: dict.header.links.contact },
  ].map((link) => ({ href: homeAnchor(locale, link.anchor), label: link.label }));

  const contactHref = homeAnchor(locale, "contacto");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-5 sm:px-8">
        <a href={homeAnchor(locale, "inicio")} className="text-lg font-bold tracking-tight text-ink">
          NEXURA<span className="text-gold">LABS</span>
        </a>

        <nav aria-label={dict.header.navAria} className="hidden items-center gap-7 xl:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <LanguageToggle
            locale={locale}
            onSelect={switchLocale}
            aria={dict.header.languageSwitcherAria}
          />
          <a
            href={contactHref}
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas transition-colors hover:bg-gold"
          >
            {dict.header.cta}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-ink xl:hidden"
          aria-label={dict.header.navAria}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/5 bg-canvas px-5 pb-6 pt-2 xl:hidden">
          <nav aria-label={dict.header.navAria} className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-ink hover:bg-ink/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between gap-4">
            <LanguageToggle
              locale={locale}
              onSelect={switchLocale}
              aria={dict.header.languageSwitcherAria}
            />
            <a
              href={contactHref}
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full bg-ink px-5 py-2.5 text-center text-sm font-semibold text-canvas"
            >
              {dict.header.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function LanguageToggle({
  locale,
  onSelect,
  aria,
}: {
  locale: Locale;
  onSelect: (l: Locale) => void;
  aria: string;
}) {
  return (
    <div
      role="group"
      aria-label={aria}
      className="flex items-center rounded-full border border-ink/10 p-0.5 text-xs font-semibold"
    >
      {(["es", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => onSelect(l)}
          aria-pressed={locale === l}
          lang={l}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            locale === l ? "bg-ink text-canvas" : "text-muted hover:text-ink"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
