import { AlertTriangle, MessageSquare } from "lucide-react";
import IllustrativeTag from "@/components/landing/rigi/IllustrativeTag";

type ConsoleCopy = {
  windowTitle: string;
  kpis: { label: string; value: string }[];
  alertsTitle: string;
  alerts: string[];
  assistantTitle: string;
  question: string;
  answer: string;
};

/** Maqueta de la consola del hub: KPIs, alertas y chat del asistente. Siempre con la leyenda de ejemplo. */
export default function ConsoleMockup({ copy, illustrative }: { copy: ConsoleCopy; illustrative: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl bg-ink-dark shadow-card-hover">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-3">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          </span>
          <span className="text-sm font-semibold text-white">{copy.windowTitle}</span>
        </div>
        <IllustrativeTag tone="dark">{illustrative}</IllustrativeTag>
      </div>

      <div className="grid gap-4 p-5 sm:p-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <dl className="grid grid-cols-2 gap-3">
            {copy.kpis.map((kpi) => (
              <div key={kpi.label} className="flex flex-col-reverse rounded-xl bg-white/5 p-4">
                <dt className="mt-1 text-xs text-white/70">{kpi.label}</dt>
                <dd className="text-2xl font-bold tabular-nums text-white">{kpi.value}</dd>
              </div>
            ))}
          </dl>

          <div className="rounded-xl bg-white/5 p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-white">
              <AlertTriangle size={16} aria-hidden="true" className="text-gold" />
              {copy.alertsTitle}
            </p>
            <ul className="mt-3 space-y-2">
              {copy.alerts.map((alert) => (
                <li key={alert} className="flex gap-2 text-sm text-white/80">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {alert}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col rounded-xl bg-white/5 p-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-white">
            <MessageSquare size={16} aria-hidden="true" className="text-gold" />
            {copy.assistantTitle}
          </p>
          <div className="mt-4 space-y-3">
            <p className="ml-auto max-w-[90%] rounded-2xl rounded-br-sm bg-gold px-4 py-2.5 text-sm text-ink-dark">
              {copy.question}
            </p>
            <p className="max-w-[90%] rounded-2xl rounded-bl-sm bg-white px-4 py-2.5 text-sm text-ink">
              {copy.answer}
            </p>
          </div>
        </div>
      </div>

      <figcaption className="sr-only">{illustrative}</figcaption>
    </figure>
  );
}
