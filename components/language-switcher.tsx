"use client";

import { usePathname, useRouter } from "next/navigation";
import { LOCALE_COOKIE, locales, type Locale } from "@/lib/i18n/config";

function pathWithLocale(pathname: string, next: Locale) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] === "es" || segments[0] === "en") {
    segments[0] = next;
  } else {
    segments.unshift(next);
  }
  return `/${segments.join("/")}`;
}

export default function LanguageSwitcher({
  locale,
  ariaLabel,
}: {
  locale: Locale;
  ariaLabel: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className="flex shrink-0 items-center rounded-lg border border-nexura-border/80 bg-nexura-surface/50 p-0.5"
      role="group"
      aria-label={ariaLabel}
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => {
              if (code === locale) return;
              const nextPath = pathWithLocale(pathname, code);
              document.cookie = `${LOCALE_COOKIE}=${code};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
              router.push(nextPath);
            }}
            className={`min-h-[40px] min-w-[40px] rounded-md px-2.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
              active
                ? "bg-nexura-violet text-white shadow-sm"
                : "text-nexura-muted hover:text-white"
            }`}
            aria-current={active ? "true" : undefined}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
