import LandingSection from "@/components/ui/landing-section";
import { GPU_HOVER } from "@/lib/interaction-classes";
import { scrollRevealClass } from "@/lib/scroll-reveal";

const bullets = [
  "Los ingresos dependen de reglas externas",
  "Monetización limitada",
  "Sin relación directa con el usuario",
  "Sin control sobre los datos",
];

export default function ProblemSection() {
  return (
    <LandingSection id="problema">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className={`lg:col-span-5 ${scrollRevealClass(0)}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexura-violet">
            Problema
          </p>
          <h2 className="mt-4 font-inter text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tu audiencia crece pero no sabes quien son.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-nexura-muted">
            Sin control sobre tu audiencia, la monetización queda atada a terceros y al
            algoritmo.
          </p>
        </div>
        <ul className="grid gap-4 lg:col-span-7">
          {bullets.map((item, i) => (
            <li
              key={item}
              className={`rounded-2xl border border-nexura-border bg-nexura-surface p-6 shadow-card ${GPU_HOVER} ${scrollRevealClass(i + 1)}`}
            >
              <span className="text-sm font-medium text-white">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </LandingSection>
  );
}
