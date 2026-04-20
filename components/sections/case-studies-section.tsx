import Image from "next/image";
import LandingSection from "@/components/ui/landing-section";

const cases = [
  {
    logo: "/images/TNT_Logo.svg",
    alt: "TNT",
    text: "Plataformas de streaming en vivo con alta concurrencia",
    /** Logos oscuros: se invierten para contraste sobre fondo #12121A */
    logoOnDark: true,
    width: 200,
    height: 56,
  },
  {
    logo: "/images/DGO-logo.png",
    alt: "DIRECTV GO",
    text: "Ecosistema multiplataforma de distribución de contenido",
    logoOnDark: false,
    width: 220,
    height: 64,
  },
  {
    logo: "/images/Warner_Bros.svg",
    alt: "Warner Bros.",
    text: "Integración de contenido y plataformas digitales (WarnerMedia)",
    logoOnDark: true,
    width: 120,
    height: 126,
  },
] as const;

export default function CaseStudiesSection() {
  return (
    <LandingSection id="casos">
      <div className="mx-auto max-w-3xl text-center" data-aos="fade-up" data-aos-duration="450">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexura-muted">
          Casos de éxito
        </p>
        <h2 className="mt-4 font-inter text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Experiencia comprobada en plataformas de streaming
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {cases.map((c, i) => (
          <article
            key={c.logo}
            data-aos="fade-up"
            data-aos-duration="450"
            data-aos-delay={i * 90}
            className="group rounded-2xl border border-nexura-border bg-nexura-surface p-8 text-center shadow-card transition duration-300 hover:scale-[1.02] hover:border-nexura-muted/30 hover:shadow-card-hover"
          >
            <div className="mb-6 flex min-h-[4.75rem] items-center justify-center px-2">
              <Image
                src={c.logo}
                alt={c.alt}
                width={c.width}
                height={c.height}
                className={`max-h-16 w-auto max-w-[min(100%,240px)] object-contain object-center ${
                  c.logoOnDark
                    ? "brightness-0 invert opacity-[0.92] transition-opacity duration-300 group-hover:opacity-100"
                    : "drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
                }`}
              />
            </div>
            <p className="text-sm leading-relaxed text-nexura-muted">{c.text}</p>
          </article>
        ))}
      </div>
    </LandingSection>
  );
}
