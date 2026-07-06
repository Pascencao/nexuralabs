"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export default function Header() {
  const { dict, locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#problema", label: dict.header.links.problem },
    { href: "/#servicios", label: dict.header.links.services },
    { href: "/#sobre-mi", label: dict.header.links.about },
    { href: "/#contacto", label: dict.header.links.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-5 sm:px-8">
        <a href="/#inicio" className="text-lg font-bold tracking-tight text-ink">
          NEXURA<span className="text-gold">LABS</span>
        </a>

        <nav aria-label={dict.header.navAria} className="hidden items-center gap-8 lg:flex">
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

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageToggle
            locale={locale}
            setLocale={setLocale}
            aria={dict.header.languageSwitcherAria}
          />
          <a
            href="/#contacto"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas transition-colors hover:bg-gold"
          >
            {dict.header.cta}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
          aria-label={dict.header.navAria}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/5 bg-canvas px-5 pb-6 pt-2 lg:hidden">
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
              setLocale={setLocale}
              aria={dict.header.languageSwitcherAria}
            />
            <a
              href="/#contacto"
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
  setLocale,
  aria,
}: {
  locale: "es" | "en";
  setLocale: (l: "es" | "en") => void;
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
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
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
