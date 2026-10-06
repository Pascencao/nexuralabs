import { isLocale } from "@/lib/i18n/config";
import { toGa, toPixel, type AnalyticsEvent } from "@/lib/analytics/events";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Envía el evento a GA4 y al píxel de Meta si están cargados.
 * Sin ID de GA4, con bloqueadores o en desarrollo, simplemente no hace nada.
 */
export function track(event: AnalyticsEvent): void {
  if (typeof window === "undefined") return;
  const lang = document.documentElement.lang;
  const locale = isLocale(lang) ? lang : "es";
  try {
    window.gtag?.("event", ...toGa(event, locale));
    window.fbq?.("track", ...toPixel(event));
  } catch {
    // La medición nunca debe romper la página.
  }
}
