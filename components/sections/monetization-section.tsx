import LandingSection from "@/components/ui/landing-section";

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
        <div data-aos="fade-up" data-aos-duration="450">
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
              data-aos="fade-up"
              data-aos-duration="450"
              data-aos-delay={80 + i * 70}
              className="rounded-2xl border border-nexura-border bg-nexura-bg/60 p-5 shadow-card backdrop-blur-sm transition duration-300 hover:scale-[1.02] hover:border-nexura-muted/30 hover:shadow-card-hover"
            >
              <p className="text-[15px] font-medium text-white">{b}</p>
            </li>
          ))}
        </ul>
      </div>
    </LandingSection>
  );
}
