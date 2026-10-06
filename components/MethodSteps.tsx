type Step = { name: string; description: string };

/** Clases literales para que Tailwind las genere; una columna por paso desde lg. */
const LG_COLS: Record<number, string> = { 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" };

/** Timeline numerada: vertical en móvil, horizontal (una columna por paso) desde lg. */
export default function MethodSteps({ label, steps }: { label: string; steps: Step[] }) {
  return (
    <ol aria-label={label} className={`grid gap-8 lg:gap-6 ${LG_COLS[steps.length] ?? "lg:grid-cols-4"}`}>
      {steps.map((step, i) => (
        <li key={step.name} className="relative flex gap-5 lg:flex-col lg:gap-0">
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute left-5 top-10 h-[calc(100%-0.5rem)] w-px bg-scale/30 lg:left-10 lg:top-5 lg:h-px lg:w-[calc(100%-1rem)]"
            />
          )}
          <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-scale text-sm font-bold text-white">
            {i + 1}
          </span>
          <div className="lg:mt-5">
            <h3 className="text-lg font-bold text-ink">{step.name}</h3>
            <p className="mt-2 text-base text-muted">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
