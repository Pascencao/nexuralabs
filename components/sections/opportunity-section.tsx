import LandingSection from "@/components/ui/landing-section";
import { GPU_HOVER } from "@/lib/interaction-classes";
import { scrollRevealClass } from "@/lib/scroll-reveal";

const items = [
  "Suscripciones con ingresos recurrentes",
  "Live, VOD y shorts en una misma plataforma",
  "Comercio integrado dentro del contenido",
  "Monetización directa sin intermediarios",
];

export default function OpportunitySection() {
  return (
    <LandingSection id="oportunidad">
      <div className={`mx-auto max-w-3xl text-center ${scrollRevealClass(0)}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexura-turquoise">
          Oportunidad
        </p>
        <h2 className="mt-4 font-inter text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Convertí tu audiencia en un canal de ingresos directo
        </h2>
        <p className="mt-5 text-lg text-nexura-muted">
          Ingresos recurrentes, relación directa con el usuario y control real sobre datos
          y experiencia.
        </p>
      </div>
      <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
        {items.map((text, i) => (
          <div
            key={text}
            className={`rounded-2xl border border-nexura-border bg-nexura-surface/90 p-6 text-left shadow-card ${GPU_HOVER} ${scrollRevealClass(i + 1)}`}
          >
            <p className="text-[15px] leading-relaxed text-white">{text}</p>
          </div>
        ))}
      </div>
    </LandingSection>
  );
}
