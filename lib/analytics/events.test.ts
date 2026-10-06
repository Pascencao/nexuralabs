import { test } from "node:test";
import assert from "node:assert/strict";
import { toGa, toPixel } from "./events.ts";

test("click_hablemos: GA4 con ubicación e idioma, píxel Contact", () => {
  const event = { name: "click_hablemos", location: "landing_hero" } as const;
  assert.deepEqual(toGa(event, "en"), ["click_hablemos", { page_locale: "en", location: "landing_hero" }]);
  assert.deepEqual(toPixel(event), ["Contact", {}]);
});

test("form_submit: GA4 con need, píxel Lead con content_category", () => {
  const event = { name: "form_submit", need: "ai-rescue" } as const;
  assert.deepEqual(toGa(event, "es"), ["form_submit", { page_locale: "es", need: "ai-rescue" }]);
  assert.deepEqual(toPixel(event), ["Lead", { content_category: "ai-rescue" }]);
});

test("download_checklist: GA4 solo con idioma, píxel CompleteRegistration", () => {
  const event = { name: "download_checklist" } as const;
  assert.deepEqual(toGa(event, "es"), ["download_checklist", { page_locale: "es" }]);
  assert.deepEqual(toPixel(event), ["CompleteRegistration", { content_name: "ai-readiness-checklist" }]);
});

test("view_case: GA4 con case_id, píxel ViewContent con content_ids", () => {
  const event = { name: "view_case", caseId: "posventa-whatsapp" } as const;
  assert.deepEqual(toGa(event, "es"), ["view_case", { page_locale: "es", case_id: "posventa-whatsapp" }]);
  assert.deepEqual(toPixel(event), ["ViewContent", { content_ids: ["posventa-whatsapp"] }]);
});
