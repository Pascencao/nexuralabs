import Kicker from "@/components/Kicker";
import RigiLeadForm from "@/components/landing/rigi/RigiLeadForm";
import type { RigiOrigin } from "@/lib/forms/validate";
import type { RigiFormCopy } from "@/lib/i18n/types";

/** Cierre de las landings RIGI: texto a la izquierda y formulario a la derecha, con el ancla del CTA. */
export default function RigiFormSection({
  id,
  origin,
  copy,
}: {
  id: string;
  origin: RigiOrigin;
  copy: RigiFormCopy;
}) {
  return (
    <section id={id} className="bg-ink-dark py-20 sm:py-28">
      <div className="mx-auto grid max-w-site grid-cols-1 items-start gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div>
          <Kicker tone="dark">{copy.kicker}</Kicker>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{copy.title}</h2>
          <p className="mt-6 max-w-md text-base text-white/70">{copy.body}</p>
        </div>
        <RigiLeadForm origin={origin} submitLabel={copy.submit} successMessage={copy.success} />
      </div>
    </section>
  );
}
