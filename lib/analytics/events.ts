import type { Locale } from "../i18n/config";

/** Dónde está el botón "Hablemos" que se clickeó. */
export type CtaLocation = "header" | "hero" | "landing_hero";

export type AnalyticsEvent =
  | { name: "click_hablemos"; location: CtaLocation }
  | { name: "form_submit"; need: string }
  | { name: "download_checklist" }
  | { name: "view_case"; caseId: string };

export type PixelStandardEvent = "Contact" | "Lead" | "CompleteRegistration" | "ViewContent";

type Params = Record<string, string | string[]>;

/** Evento GA4: nombre y parámetros (todos llevan el idioma de la página). */
export function toGa(event: AnalyticsEvent, locale: Locale): [string, Params] {
  const base = { page_locale: locale };
  switch (event.name) {
    case "click_hablemos":
      return [event.name, { ...base, location: event.location }];
    case "form_submit":
      return [event.name, { ...base, need: event.need }];
    case "download_checklist":
      return [event.name, base];
    case "view_case":
      return [event.name, { ...base, case_id: event.caseId }];
  }
}

/** Evento estándar equivalente del píxel de Meta. */
export function toPixel(event: AnalyticsEvent): [PixelStandardEvent, Params] {
  switch (event.name) {
    case "click_hablemos":
      return ["Contact", {}];
    case "form_submit":
      return ["Lead", { content_category: event.need }];
    case "download_checklist":
      return ["CompleteRegistration", { content_name: "ai-readiness-checklist" }];
    case "view_case":
      return ["ViewContent", { content_ids: [event.caseId] }];
  }
}
