import { Container } from "@/components/landing/hub/ui";
import type { HubContactCopy } from "@/lib/i18n/types";

/** Cierre: texto y 3 pasos a la izquierda, formulario blanco a la derecha. */
export default function HubContact({
  id,
  copy,
  children,
}: {
  id: string;
  copy: HubContactCopy;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="hub-grid bg-hub-ink">
      <Container className="flex flex-wrap items-start gap-14 py-20 sm:py-28">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-6">
          <p className="font-plex-mono text-[13px] tracking-[0.08em] text-hub-amber">{copy.eyebrow}</p>
          <h2 className="m-0 font-display text-[clamp(40px,5.4vw,68px)] font-extrabold leading-[0.98] tracking-[-0.03em] text-white">
            {copy.title}
          </h2>
          <p className="m-0 max-w-[480px] text-lg leading-[1.55] text-hub-muted">{copy.body}</p>
          <ol className="mt-2 flex flex-col gap-3.5">
            {copy.steps.map((step, i) => (
              <li key={step} className="flex items-center gap-3.5 text-[15px] text-[#D5DCE6]">
                <span className="w-7 font-plex-mono text-hub-amber">{String(i + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
        <div className="min-w-0 flex-[1_1_520px]">{children}</div>
      </Container>
    </section>
  );
}
