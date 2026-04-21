import LandingSection from "@/components/ui/landing-section";
import { GPU_HOVER } from "@/lib/interaction-classes";
import { scrollRevealClass } from "@/lib/scroll-reveal";

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
      <div className={`mx-auto max-w-3xl text-center ${scrollRevealClass(0)}`}>
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
            className={`flex h-full flex-col rounded-2xl border border-nexura-border bg-nexura-surface p-8 shadow-card ${GPU_HOVER} ${scrollRevealClass(i + 1)}`}
          >
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>
            <div className="nexura-pillar-lines">
              {p.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </LandingSection>
  );
}
