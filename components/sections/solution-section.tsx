import LandingSection from "@/components/ui/landing-section";

const pillars = [
  {
    title: "Web",
    lines: [
      "Plataforma completa de streaming",
      "Usuarios, perfiles y suscripciones",
    ],
  },
  {
    title: "Smart TV",
    lines: [
      "Experiencia de living (Android TV)",
      "Consumo multiplataforma",
    ],
  },
  {
    title: "Mobile",
    lines: ["Apps iOS y Android", "Notificaciones y engagement"],
  }
];

export default function SolutionSection() {
  return (
    <LandingSection id="solucion">
      <div className="mx-auto max-w-3xl text-center" data-aos="fade-up" data-aos-duration="450">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexura-violet">
          Solución
        </p>
        <h2 className="mt-4 font-inter text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Tu propio ecosistema de streaming
        </h2>
        <p className="mt-5 text-lg text-nexura-muted">
          Un producto coherente en cada pantalla, pensado para escala y negocio.
        </p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
          <div
            key={p.title}
            data-aos="fade-up"
            data-aos-duration="450"
            data-aos-delay={i * 90}
            className="flex h-full flex-col rounded-2xl border border-nexura-border bg-nexura-surface p-8 shadow-card transition duration-300 hover:scale-[1.02] hover:border-nexura-muted/30 hover:shadow-card-hover"
          >
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>
            <ul className="mt-6 space-y-3 text-nexura-muted">
              {p.lines.map((line) => (
                <li key={line} className="flex gap-2 text-[15px] leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-nexura-turquoise/80" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </LandingSection>
  );
}
