import type { LucideIcon } from "lucide-react";
import Kicker from "@/components/Kicker";

type Item = { name: string; description: string };

/** Clases literales para que Tailwind las genere. */
const LG_COLS: Record<number, string> = { 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" };

/** Sección de ítems con ícono (mismo patrón visual que "El problema" de la home). */
export default function IconList({
  id,
  kicker,
  title,
  intro,
  items,
  icons,
  note,
}: {
  id: string;
  kicker: string;
  title: string;
  intro?: string;
  items: Item[];
  icons: LucideIcon[];
  note?: string;
}) {
  return (
    <section id={id} className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <Kicker>{kicker}</Kicker>
        <h2 className="mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
        {intro && <p className="mt-6 max-w-2xl text-lg text-muted">{intro}</p>}

        <div
          className={`mt-14 grid gap-10 sm:grid-cols-2 sm:gap-8 ${LG_COLS[items.length] ?? "lg:grid-cols-4"}`}
        >
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.name}>
                {Icon && (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-canvas">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                )}
                <h3 className="mt-5 text-xl font-semibold text-ink">{item.name}</h3>
                <p className="mt-2 text-base text-muted">{item.description}</p>
              </div>
            );
          })}
        </div>
        {note && (
          <p className="mt-14 max-w-2xl border-l-2 border-gold pl-4 text-base text-ink">{note}</p>
        )}
      </div>
    </section>
  );
}
