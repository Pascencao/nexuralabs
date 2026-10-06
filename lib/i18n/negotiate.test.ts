import { test } from "node:test";
import assert from "node:assert/strict";
import { preferredLocale, shouldRedirectToEnglish } from "./negotiate.ts";

test("preferredLocale elige el idioma con mayor q", () => {
  assert.equal(preferredLocale("en-US,en;q=0.9,es;q=0.8"), "en");
  assert.equal(preferredLocale("es-AR,es;q=0.9,en;q=0.8"), "es");
  assert.equal(preferredLocale("en;q=0.5,es;q=0.7"), "es");
});

test("preferredLocale ignora idiomas que no son es/en", () => {
  assert.equal(preferredLocale("pt-BR,pt;q=0.9,en;q=0.8"), "en");
  assert.equal(preferredLocale("fr-FR,de;q=0.8"), null);
});

test("preferredLocale ante empate se queda con el primero", () => {
  assert.equal(preferredLocale("en,es"), "en");
});

test("preferredLocale ignora q=0 y valores vacíos", () => {
  assert.equal(preferredLocale("en;q=0,es;q=0.5"), "es");
  assert.equal(preferredLocale(""), null);
  assert.equal(preferredLocale(null), null);
  assert.equal(preferredLocale(undefined), null);
});

test("shouldRedirectToEnglish: página en español, sin cookie, navegador en inglés", () => {
  assert.equal(
    shouldRedirectToEnglish({ isSpanishPage: true, cookieLocale: undefined, acceptLanguage: "en-US,en;q=0.9" }),
    true,
  );
});

test("shouldRedirectToEnglish: con cookie nunca redirige", () => {
  for (const cookieLocale of ["es", "en"]) {
    assert.equal(
      shouldRedirectToEnglish({ isSpanishPage: true, cookieLocale, acceptLanguage: "en-US" }),
      false,
    );
  }
});

test("shouldRedirectToEnglish: navegador en español o sin Accept-Language no redirige", () => {
  assert.equal(
    shouldRedirectToEnglish({ isSpanishPage: true, cookieLocale: undefined, acceptLanguage: "es-AR,es;q=0.9" }),
    false,
  );
  assert.equal(
    shouldRedirectToEnglish({ isSpanishPage: true, cookieLocale: undefined, acceptLanguage: null }),
    false,
  );
});

test("shouldRedirectToEnglish: páginas que no son en español no redirigen", () => {
  assert.equal(
    shouldRedirectToEnglish({ isSpanishPage: false, cookieLocale: undefined, acceptLanguage: "en-US" }),
    false,
  );
});
