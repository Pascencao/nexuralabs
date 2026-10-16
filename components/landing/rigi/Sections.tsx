import { Clock, Gauge } from "lucide-react";
import Kicker from "@/components/Kicker";
import CaseCard from "@/components/CaseCard";
import type { CaseStudy, NamedItem } from "@/lib/i18n/types";

/** Áreas numeradas (las 5 del examen 4.0). */
export function NumberedAreas({
  id,
  kicker,
  title,
  items,
}: {
  id: string;
  kicker: string;
  title: string;
  items: NamedItem[];
}) {
  return (
    <section id={id} className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <Kicker>{kicker}</Kicker>
        <h2 className="mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item, i) => (
            <li key={item.name} className="rounded-2xl bg-canvas p-6">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-bold text-canvas"
              >
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{item.name}</h3>
              <p className="mt-2 text-base text-muted">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Lista de ítems con texto destacado a la izquierda y contenido libre (gráfico) a la derecha. */
export function DeliverablesSection({
  id,
  kicker,
  title,
  items,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  items: NamedItem[];
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto grid max-w-site grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Kicker>{kicker}</Kicker>
          <h2 className="mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
          <ul className="mt-10 space-y-6">
            {items.map((item) => (
              <li key={item.name} className="border-l-2 border-gold pl-5">
                <h3 className="text-lg font-bold text-ink">{item.name}</h3>
                <p className="mt-1 text-base text-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        {children}
      </div>
    </section>
  );
}

/** Rubros a los que apunta el servicio, como etiquetas. */
export function AudienceList({
  id,
  kicker,
  title,
  items,
}: {
  id: string;
  kicker: string;
  title: string;
  items: string[];
}) {
  return (
    <section id={id} className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <Kicker>{kicker}</Kicker>
        <h2 className="mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
        <ul className="mt-10 flex flex-wrap gap-3">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-ink/15 bg-white px-5 py-2.5 text-base font-medium text-ink"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Un caso real de la home, presentado como antecedente. */
export function PrecedentSection({
  id,
  kicker,
  title,
  intro,
  item,
  labels,
}: {
  id: string;
  kicker: string;
  title: string;
  intro: string;
  item: CaseStudy;
  labels: { problem: string; solution: string; results: string };
}) {
  return (
    <section id={id} className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <Kicker>{kicker}</Kicker>
        <h2 className="mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
        <p className="mt-6 max-w-2xl text-lg text-muted">{intro}</p>
        <div className="mt-12">
          <CaseCard item={item} labels={labels} />
        </div>
      </div>
    </section>
  );
}

const VALUE_ICONS = [Clock, Gauge];

/** Propuesta de valor en dos bloques (Tiempo y Control). */
export function ValueBlocks({
  id,
  kicker,
  title,
  blocks,
}: {
  id: string;
  kicker: string;
  title: string;
  blocks: { name: string; title: string; description: string }[];
}) {
  return (
    <section id={id} className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <Kicker>{kicker}</Kicker>
        <h2 className="mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {blocks.map((block, i) => {
            const Icon = VALUE_ICONS[i];
            return (
              <article key={block.name} className="rounded-2xl bg-white p-8 shadow-card sm:p-10">
                <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-ink">
                  {Icon && (
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-ink-dark">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                  )}
                  {block.name}
                </p>
                <h3 className="mt-6 text-2xl font-bold text-ink">{block.title}</h3>
                <p className="mt-3 text-base text-muted">{block.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Antecedente de la industria con cifras públicas, nota al pie y fuentes enlazadas. */
export function ReferenceStats({
  id,
  kicker,
  title,
  intro,
  stats,
  footnote,
  sourcesLabel,
  sources,
}: {
  id: string;
  kicker: string;
  title: string;
  intro: string;
  stats: { value: string; label: string }[];
  footnote: string;
  sourcesLabel: string;
  sources: { name: string; url: string }[];
}) {
  return (
    <section id={id} className="bg-ink-dark py-20 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <Kicker tone="dark">{kicker}</Kicker>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="mt-6 max-w-2xl text-lg text-white/70">{intro}</p>

        <dl className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse justify-end border-t border-white/15 pt-6">
              <dt className="mt-2 text-sm text-white/70">{stat.label}</dt>
              <dd className="text-4xl font-bold tabular-nums text-gold">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-12 max-w-3xl text-sm text-white/70">{footnote}</p>
        <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70">
          <span>{sourcesLabel}:</span>
          {sources.map((source) => (
            <a
              key={source.url}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded text-white underline underline-offset-4 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              {source.name}
            </a>
          ))}
        </p>
      </div>
    </section>
  );
}
