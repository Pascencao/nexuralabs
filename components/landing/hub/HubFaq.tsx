import { Eyebrow, H2, Section } from "@/components/landing/hub/ui";
import type { HubFaqCopy } from "@/lib/i18n/types";

/** Preguntas frecuentes (details/summary nativos) con datos estructurados FAQPage. */
export default function HubFaq({ copy, contactHref }: { copy: HubFaqCopy; contactHref: string }) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <Section id="faq" bg="paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="flex flex-wrap gap-14">
        <div className="flex flex-[1_1_320px] flex-col gap-[18px]">
          <Eyebrow tone="light">{copy.eyebrow}</Eyebrow>
          <H2 tone="light">{copy.title}</H2>
          <p className="m-0 text-base leading-[1.55] text-hub-paper-muted">
            {copy.more.before}
            <a href={contactHref} className="text-hub-amber-ink underline underline-offset-4">
              {copy.more.link}
            </a>
            {copy.more.after}
          </p>
        </div>
        <div className="flex min-w-0 flex-[2_1_560px] flex-col">
          {copy.items.map((item) => (
            <details key={item.q} className="border-t border-[#C9CDD3]">
              <summary className="flex min-h-[44px] cursor-pointer items-center justify-between gap-4 rounded py-6 font-display text-[21px] font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hub-amber-ink">
                {item.q}
                <span
                  aria-hidden="true"
                  className="hub-plus flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C9CDD3] transition-transform duration-200"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="m-0 pb-6 pr-14 text-base leading-[1.6] text-hub-paper-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
