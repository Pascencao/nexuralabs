import LandingSection from "@/components/ui/landing-section";
import { GPU_HOVER } from "@/lib/interaction-classes";
import { scrollRevealClass } from "@/lib/scroll-reveal";

const bullets = [
  "Modelo de suscripción (ingreso recurrente)",
  "Comercio en tiempo real dentro del contenido",
  "Marketplace integrado",
  "Activaciones con sponsors y eventos",
];

export default function MonetizationSection() {
  return (
    <LandingSection id="diferencial">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className={scrollRevealClass(0)}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexura-rose">
            Diferencial
          </p>
          <h2 className="mt-4 font-inter text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Pensalo para monetizar, no es solo streaming.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-nexura-muted">
            Mostrá producto en vivo, botón de compra y suscripciones donde la atención ya
            está: en la pantalla de reproducción.
          </p>
        </div>
        <ul className="space-y-4">
          {bullets.map((b, i) => (
            <li
              key={b}
              className={`rounded-2xl border border-nexura-border bg-nexura-bg/60 p-5 shadow-card backdrop-blur-sm ${GPU_HOVER} ${scrollRevealClass(i + 1)}`}
            >
              <p className="text-[15px] font-medium text-white">{b}</p>
            </li>
          ))}
        </ul>
      </div>
    </LandingSection>
  );
}
