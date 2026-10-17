"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import HubShell from "@/components/landing/hub/HubShell";
import HubFaq from "@/components/landing/hub/HubFaq";
import HubContact from "@/components/landing/hub/HubContact";
import HubLeadForm from "@/components/landing/hub/HubLeadForm";
import ScoreConsole from "@/components/landing/hub/ScoreConsole";
import TrackLandingView from "@/components/landing/hub/TrackLandingView";
import { Container, HeroText, OfferStrip, Section, SectionHead } from "@/components/landing/hub/ui";
import { track } from "@/lib/analytics/track";

const FORM_ID = "reservar";

export default function RigiSuppliersLanding() {
  const { dict, locale } = useLanguage();
  const r = dict.landings.rigiSuppliers;
  const caseStudy = dict.cases.items[0];
  const formHref = `#${FORM_ID}`;
  const chartRows = r.areas.items.map((area, i) => ({
    label: area.name,
    score: r.hero.chart.scores[i] ?? 0,
  }));

  return (
    <HubShell links={r.nav.links} cta={r.nav.cta} ctaHref={formHref}>
      <TrackLandingView landing="rigi-proveedores" />

      <section id="top" className="hub-grid border-b border-[#1C2534]">
        <Container className="flex flex-wrap items-center gap-14 pb-[72px] pt-14 sm:pt-[88px]">
          <HeroText
            eyebrow={r.hero.eyebrow}
            titleLines={r.hero.titleLines}
            titleHighlight={r.hero.titleHighlight}
            lead={r.hero.lead}
            primaryCta={r.hero.primaryCta}
            primaryHref={formHref}
            onPrimaryClick={() => track({ name: "click_hablemos", location: "landing_hero" })}
            secondaryCta={r.hero.secondaryCta}
            secondaryHref="#areas"
            checks={r.hero.checks}
          />
          <ScoreConsole
            locale={locale}
            windowTitle={r.hero.chart.windowTitle}
            title={r.hero.chart.title}
            tag={r.hero.chart.tag}
            scaleLabel={r.hero.chart.scaleLabel}
            rows={chartRows}
          />
        </Container>
        <OfferStrip items={r.offer} />
      </section>

      <Section id="por-que" bg="paper">
        <div className="flex flex-col gap-14">
          <SectionHead tone="light" eyebrow={r.why.eyebrow} title={r.why.title} intro={r.why.intro} />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
            {r.why.items.map((item) => (
              <div key={item.name} className="flex flex-col gap-2.5 border-t-2 border-hub-ink pt-5">
                <h3 className="m-0 font-display text-xl font-bold">{item.name}</h3>
                <p className="m-0 text-[15px] leading-[1.55] text-hub-paper-muted">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="m-0 max-w-[820px] rounded-[14px] border border-hub-paper-line bg-white px-6 py-5 text-base leading-[1.55]">
            {r.why.note}
          </p>
        </div>
      </Section>

      <Section id="areas" bg="paper" className="border-t border-hub-paper-line">
        <div className="flex flex-col gap-14">
          <SectionHead tone="light" eyebrow={r.areas.eyebrow} title={r.areas.title} />
          <ol className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-5">
            {r.areas.items.map((area, i) => (
              <li key={area.name} className="flex flex-col gap-4 rounded-[22px] border border-hub-paper-line bg-white p-7">
                <span aria-hidden="true" className="font-display text-[56px] font-extrabold leading-[0.9]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 font-display text-[22px] font-bold">{area.name}</h3>
                <p className="m-0 text-[15px] leading-[1.55] text-hub-paper-muted">{area.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section id="que-recibis" bg="grid">
        <div className="flex flex-col gap-14">
          <SectionHead tone="dark" eyebrow={r.deliverables.eyebrow} title={r.deliverables.title} />
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
            {r.deliverables.items.map((item, i) => (
              <li
                key={item.name}
                className={`flex flex-col gap-3.5 rounded-[20px] p-[26px] ${
                  i === r.deliverables.items.length - 1
                    ? "border border-dashed border-hub-line-2 bg-transparent"
                    : "border border-[#243042] bg-hub-surface"
                }`}
              >
                <h3 className="m-0 font-display text-[22px] font-bold text-white">{item.name}</h3>
                <p className="m-0 text-[15px] leading-[1.55] text-hub-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="como-funciona" bg="ink" className="border-t border-hub-line">
        <div className="flex flex-col gap-14">
          <SectionHead tone="dark" eyebrow={r.process.eyebrow} title={r.process.title} />
          <ol className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
            {r.process.steps.map((step, i) => {
              const pct = ((i + 1) / r.process.steps.length) * 100;
              return (
                <li
                  key={step.name}
                  className="flex flex-col gap-3.5 rounded-[20px] border border-[#243042] bg-hub-surface p-[26px]"
                >
                  <span className="font-plex-mono text-[13px] text-hub-amber">
                    {r.process.stepLabel} {i + 1}
                  </span>
                  <div aria-hidden="true" className="h-1.5 overflow-hidden rounded-md bg-hub-line">
                    <div className="h-full rounded-md bg-hub-amber" style={{ width: `${pct}%` }} />
                  </div>
                  <h3 className="m-0 font-display text-[22px] font-bold text-white">{step.name}</h3>
                  <p className="m-0 text-[15px] leading-[1.55] text-hub-muted">{step.description}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </Section>

      <Section id="para-quien" bg="paper">
        <div className="flex flex-col gap-10">
          <SectionHead tone="light" eyebrow={r.audience.eyebrow} title={r.audience.title} />
          <ul className="flex flex-wrap gap-2.5">
            {r.audience.items.map((item) => (
              <li
                key={item}
                className="inline-flex min-h-[44px] items-center rounded-full border border-[#C9CDD3] bg-white px-5 py-2.5 text-base text-hub-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="antecedente" bg="amber">
        <div className="flex flex-col gap-12">
          <SectionHead tone="amber" eyebrow={r.precedent.eyebrow} title={r.precedent.title} intro={r.precedent.intro} />
          <dl className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] border-t-2 border-hub-ink">
            {caseStudy.results.map((result) => (
              <div key={result.label} className="flex flex-col-reverse justify-end gap-2.5 pb-2 pr-6 pt-7">
                <dt className="text-[15px] leading-[1.45] text-[#2E2410]">{result.label}</dt>
                <dd className="font-display text-[clamp(44px,5vw,64px)] font-extrabold leading-none tracking-[-0.03em]">
                  {result.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="m-0 font-plex-mono text-[13px] font-normal tracking-[0.08em] text-[#3D2A00]">
                {r.precedent.problemLabel.toUpperCase()}
              </h3>
              <p className="m-0 text-base leading-[1.55] text-[#2E2410]">{caseStudy.problem}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="m-0 font-plex-mono text-[13px] font-normal tracking-[0.08em] text-[#3D2A00]">
                {r.precedent.solutionLabel.toUpperCase()}
              </h3>
              <p className="m-0 text-base leading-[1.55] text-[#2E2410]">{caseStudy.solution}</p>
            </div>
          </div>
          <p className="m-0 text-[13px] text-[#3D2A00]">{caseStudy.client}</p>
        </div>
      </Section>

      <HubFaq copy={r.faq} contactHref={formHref} />

      <HubContact id={FORM_ID} copy={r.contact}>
        <HubLeadForm origin="rigi-proveedores" submitLabel={r.contact.submit} successMessage={r.contact.success} />
      </HubContact>
    </HubShell>
  );
}
