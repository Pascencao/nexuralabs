"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import type { Dictionary } from "@/lib/i18n/types";

function CalendarLoading({ aria }: { aria: string }) {
  return (
    <section
      className="border-t border-nexura-border bg-nexura-surface/30"
      aria-busy="true"
      aria-label={aria}
    >
      <div className="mx-auto max-w-site px-5 py-12 sm:px-8 md:py-16">
        <div className="mx-auto mb-8 h-8 max-w-md animate-pulse rounded bg-nexura-border/60" />
        <div className="min-h-[600px] w-full animate-pulse rounded-2xl border border-nexura-border bg-nexura-bg/50" />
      </div>
    </section>
  );
}

export default function DeferredCalendarClient({
  calendar,
}: {
  calendar: Dictionary["calendar"];
}) {
  const CalendarDynamic = useMemo(
    () =>
      dynamic(() => import("@/components/ui/calendar"), {
        ssr: false,
        loading: () => <CalendarLoading aria={calendar.loadingAria} />,
      }),
    [calendar],
  );

  return <CalendarDynamic copy={calendar} />;
}
