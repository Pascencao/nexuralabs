"use client";

import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export default function Faq() {
  const { dict } = useLanguage();
  const faq = dict.faq;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section id="faq" className="bg-canvas py-20 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold">{faq.kicker}</p>
        <h2 className="mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">{faq.title}</h2>

        <div className="mt-12 max-w-3xl divide-y divide-ink/10 rounded-2xl bg-white shadow-card">
          {faq.items.map((item) => (
            <details key={item.q} className="group px-6 sm:px-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg py-5 text-left text-base font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown
                  aria-hidden="true"
                  size={20}
                  className="shrink-0 text-muted transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="pb-6 text-base text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
