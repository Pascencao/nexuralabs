"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { ROUTES } from "@/lib/i18n/routes";
import { PRIVACY } from "@/lib/legal/privacy";

export function PrivacyPolicy() {
  const { dict, locale } = useLanguage();
  const labels = dict.legal.privacy;
  const doc = PRIVACY[locale];
  const updatedOn = new Date(`${doc.updatedOn}T12:00:00Z`).toLocaleDateString(
    locale === "en" ? "en-US" : "es-AR",
    { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" },
  );

  return (
    <div className="min-h-screen bg-canvas pb-16 pt-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <article className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-card md:p-12">
          <header className="mb-10">
            <h1 className="text-3xl font-bold text-ink md:text-4xl">{labels.title}</h1>
            <p className="mt-3 text-sm text-muted">
              {labels.lastUpdated}: <time dateTime={doc.updatedOn}>{updatedOn}</time>
            </p>
            <p className="mt-6 text-base text-ink/80">{doc.intro}</p>
          </header>

          <div className="space-y-10">
            {doc.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
                <div className="mt-3 space-y-3">
                  {section.blocks.map((block, i) =>
                    typeof block === "string" ? (
                      <p key={i} className="text-base text-muted">
                        {block}
                      </p>
                    ) : (
                      <ul key={i} className="list-disc space-y-2 pl-6 text-base text-muted">
                        {block.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ),
                  )}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12">
            <a
              href={ROUTES.home[locale]}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-canvas transition-colors hover:bg-gold"
            >
              {labels.backHome}
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
