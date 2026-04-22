import type { Dictionary } from "@/lib/i18n/types";
import DeferredCalendarClient from "@/components/deferred-calendar-client";

export default function DeferredCalendar({
  calendar,
}: {
  calendar: Dictionary["calendar"];
}) {
  return <DeferredCalendarClient calendar={calendar} />;
}
