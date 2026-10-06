import { Check } from "lucide-react";
import Kicker from "@/components/Kicker";

/** Lista de capacidades con check, en una card, y una nota al pie. */
export default function FeatureList({
  id,
  kicker,
  title,
  items,
  note,
}: {
  id: string;
  kicker: string;
  title: string;
  items: string[];
  note: string;
}) {
  return (
    <section id={id} className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-site grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div>
          <Kicker>{kicker}</Kicker>
          <h2 className="mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
          <p className="mt-6 max-w-md text-base text-muted">{note}</p>
        </div>
        <ul className="space-y-5 rounded-2xl bg-canvas p-8 shadow-card">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-build text-white">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <span className="text-base text-ink/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
