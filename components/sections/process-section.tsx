import LandingSection from "@/components/ui/landing-section";

const steps = [
  "Análisis de oportunidad y estrategia",
  "Definición del MVP",
  "Desarrollo e integración",
  "Lanzamiento y escalabilidad",
];

export default function ProcessSection() {
  return (
    <LandingSection id="proceso">
      <div className="mx-auto max-w-3xl text-center" data-aos="fade-up" data-aos-duration="450">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexura-turquoise">
          Cómo trabajamos
        </p>
        <h2 className="mt-4 font-inter text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          De la idea al lanzamiento
        </h2>
      </div>
      <ol className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
        {steps.map((label, i) => (
          <li
            key={label}
            data-aos="fade-up"
            data-aos-duration="450"
            data-aos-delay={i * 80}
            className="flex gap-4 rounded-2xl border border-nexura-border bg-nexura-surface/80 p-6 shadow-card transition duration-300 hover:scale-[1.02] hover:border-nexura-muted/30 hover:shadow-card-hover"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-nexura-border bg-nexura-bg text-sm font-semibold text-nexura-turquoise">
              {i + 1}
            </span>
            <p className="pt-1 text-[15px] font-medium leading-relaxed text-white">{label}</p>
          </li>
        ))}
      </ol>
    </LandingSection>
  );
}
