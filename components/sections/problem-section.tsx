import LandingSection from "@/components/ui/landing-section";

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
        <div className="lg:col-span-5" data-aos="fade-up" data-aos-duration="450">
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
              data-aos="fade-up"
              data-aos-duration="450"
              data-aos-delay={i * 80}
              className="rounded-2xl border border-nexura-border bg-nexura-surface p-6 shadow-card transition duration-300 hover:scale-[1.02] hover:border-nexura-muted/30 hover:shadow-card-hover"
            >
              <span className="text-sm font-medium text-white">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </LandingSection>
  );
}
