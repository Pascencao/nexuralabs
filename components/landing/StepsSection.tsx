import Kicker from "@/components/Kicker";
import MethodSteps from "@/components/MethodSteps";

/** Sección con título, una timeline de pasos (3 o 4) y una nota opcional al pie. */
export default function StepsSection({
  id,
  kicker,
  title,
  steps,
  note,
}: {
  id: string;
  kicker: string;
  title: string;
  steps: { name: string; description: string }[];
  note?: string;
}) {
  return (
    <section id={id} className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <Kicker>{kicker}</Kicker>
        <h2 className="mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
        <div className="mt-14">
          <MethodSteps label={title} steps={steps} />
        </div>
        {note && <p className="mt-12 text-base font-semibold text-ink">{note}</p>}
      </div>
    </section>
  );
}
