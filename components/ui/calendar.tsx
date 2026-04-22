import type { Dictionary } from "@/lib/i18n/types";

type CalendarCopy = Dictionary["calendar"];

export default function Calendar({ copy }: { copy: CalendarCopy }) {
  return (
    <section className="border-t border-nexura-border bg-nexura-surface/30">
      <div className="mx-auto max-w-site px-5 py-12 sm:px-8 md:py-16">
        <h2 className="mb-2 text-center font-inter text-xl font-semibold text-white md:text-2xl">
          {copy.title}
        </h2>
        <p className="mb-8 text-center text-sm text-nexura-muted">{copy.subtitle}</p>
        <div className="overflow-hidden rounded-2xl border border-nexura-border bg-nexura-bg shadow-card">
          <iframe
            title={copy.iframeTitle}
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2w8Ip_0eKiam4s0Zy2x7Ch1E3t4rcMoKGx19U9YGCbuutTiIvYXky4hNnbYbz9QOdGM0ZKj_cO?gv=true"
            style={{ border: 0 }}
            width="100%"
            height="600"
          />
        </div>
      </div>
    </section>
  );
}
