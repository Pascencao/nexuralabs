import ButtonPrimary from "@/components/ui/buttonPrimary";
import ButtonSecondary from "@/components/ui/buttonSecondary";
import StreamingMockup from "@/components/streaming-mockup";

const MEETING_URL = "https://calendar.app.google/xsCKdDtbHWRrH7tHA";

export default function HeroStreaming() {
  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div data-aos="fade-up" data-aos-duration="450">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-nexura-border bg-nexura-surface/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-nexura-muted">
              <span className="text-nexura-turquoise">●</span>
              Built for high-scale streaming platforms
            </p>
            <h1 className="font-inter text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]">
              Tené tu propia plataforma de streaming.{" "}
              <span className="text-nexura-turquoise">Controlá tu monetización.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-nexura-muted">
              Ayudamos a empresas de medios a pasar de depender de YouTube a operar su
              propia plataforma en Web, Mobile y Smart TV.{" "}
              <span className="text-white/90">Más allá de YouTube</span> con{" "}
              <span className="text-white/90">monetización directa</span> e{" "}
              <span className="text-white/90">ingresos recurrentes</span>.
            </p>
            <p className="mt-4 text-sm text-nexura-muted">
              Experiencia en plataformas como{" "}
              <span className="text-white/80">TNT</span>,{" "}
              <span className="text-white/80">DIRECTV GO</span> y{" "}
              <span className="text-white/80">WarnerMedia</span>.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonPrimary
                text="Agendar una reunión"
                href={MEETING_URL}
                icon
              />
              <ButtonSecondary text="Ver cómo trabajamos" href="#proceso" />
            </div>
          </div>

          <div
            className="relative"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="120"
          >
            <div className="animate-mockup-float will-change-transform">
              <StreamingMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
