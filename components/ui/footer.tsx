import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { SOCIAL_LINKS } from "@/lib/social";
import Logo from "./logo";

export default function Footer({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const base = `/${locale}`;

  return (
    <footer className="border-t border-nexura-border/80 bg-nexura-bg">
      <div className="mx-auto flex max-w-site flex-col gap-10 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between md:py-16">
        <div className="flex max-w-sm flex-col gap-4">
          <Link href={base} className="flex w-fit items-center gap-3">
            <Logo />
            <span className="text-sm font-semibold tracking-[0.14em] text-white">
              NEXURA LABS
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-nexura-muted">{dict.footer.blurb}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-nexura-muted">
            <Link href={`${base}/privacy`} className="link-nexura">
              {dict.meta.privacyTitle}
            </Link>
            <span aria-hidden className="text-nexura-border">
              ·
            </span>
            <Link href={`${base}/terms`} className="link-nexura">
              {dict.meta.termsTitle}
            </Link>
          </div>
        </div>
        <nav aria-label={dict.footer.socialNavAria}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-nexura-muted">
            {dict.footer.socialHeading}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="link-nexura"
                rel="noopener noreferrer"
                target="_blank"
              >
                {s.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
      <p className="mx-auto max-w-site border-t border-nexura-border/60 px-5 py-8 text-center text-xs text-nexura-muted sm:px-8">
        © {new Date().getFullYear()} Nexura Labs. {dict.footer.rights}
      </p>
    </footer>
  );
}
