import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import LanguageSwitcher from "@/components/language-switcher";
import Logo from "@/components/ui/logo";

const MEETING_URL = "https://calendar.app.google/xsCKdDtbHWRrH7tHA";

export default function SiteHeader({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const base = `/${locale}`;
  const links = [
    { href: `${base}#problema`, label: dict.header.links.problem },
    { href: `${base}#solucion`, label: dict.header.links.solution },
    { href: `${base}#diferencial`, label: dict.header.links.monetization },
    { href: `${base}#casos`, label: dict.header.links.experience },
    { href: `${base}#contacto`, label: dict.header.links.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-nexura-border/70 bg-nexura-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-site items-center justify-between gap-3 px-5 py-3 sm:gap-6 sm:px-8 sm:py-4">
        <Link
          href={base}
          className="flex min-h-[44px] min-w-0 shrink-0 items-center gap-3 py-1"
        >
          <Logo size={44} priority />
          <span className="font-inter text-sm font-semibold tracking-[0.14em] text-white">
            NEXURA LABS
          </span>
        </Link>
        <div className="flex min-w-0 flex-1 items-center justify-end gap-3 sm:gap-4 lg:gap-5">
          <nav
            className="hidden min-[450px]:flex min-[450px]:items-center min-[450px]:gap-5 lg:gap-7"
            aria-label={dict.header.navAria}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="link-nexura inline-flex min-h-[44px] items-center text-sm leading-snug"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher locale={locale} ariaLabel={dict.header.languageSwitcherAria} />
          <Link
            href={MEETING_URL}
            className="btn inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center bg-nexura-violet px-3 py-2.5 text-xs text-white shadow-card transition-transform duration-300 ease-out hover:scale-[1.02] sm:px-4 sm:text-sm"
          >
            {dict.header.schedule}
          </Link>
        </div>
      </div>
    </header>
  );
}
