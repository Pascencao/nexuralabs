import { test } from "node:test";
import assert from "node:assert/strict";
import { isBot, preferredLocale, shouldRedirectToEnglish } from "./negotiate.ts";

const CHROME_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36";
const IPHONE_UA =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1";
const FACEBOOK_UA = "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)";

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
    shouldRedirectToEnglish({ isSpanishPage: true, cookieLocale: undefined, acceptLanguage: "en-US,en;q=0.9", userAgent: CHROME_UA }),
    true,
  );
});

test("shouldRedirectToEnglish: con cookie nunca redirige", () => {
  for (const cookieLocale of ["es", "en"]) {
    assert.equal(
      shouldRedirectToEnglish({ isSpanishPage: true, cookieLocale, acceptLanguage: "en-US", userAgent: CHROME_UA }),
      false,
    );
  }
});

test("shouldRedirectToEnglish: navegador en español o sin Accept-Language no redirige", () => {
  assert.equal(
    shouldRedirectToEnglish({ isSpanishPage: true, cookieLocale: undefined, acceptLanguage: "es-AR,es;q=0.9", userAgent: CHROME_UA }),
    false,
  );
  assert.equal(
    shouldRedirectToEnglish({ isSpanishPage: true, cookieLocale: undefined, acceptLanguage: null, userAgent: CHROME_UA }),
    false,
  );
});

test("shouldRedirectToEnglish: páginas que no son en español no redirigen", () => {
  assert.equal(
    shouldRedirectToEnglish({ isSpanishPage: false, cookieLocale: undefined, acceptLanguage: "en-US", userAgent: CHROME_UA }),
    false,
  );
});

test("shouldRedirectToEnglish: bots y rastreadores nunca redirigen", () => {
  assert.equal(
    shouldRedirectToEnglish({ isSpanishPage: true, cookieLocale: undefined, acceptLanguage: "en-US", userAgent: FACEBOOK_UA }),
    false,
  );
  assert.equal(
    shouldRedirectToEnglish({ isSpanishPage: true, cookieLocale: undefined, acceptLanguage: "en-US", userAgent: CHROME_UA }),
    true,
  );
});

test("isBot detecta previsualizadores de enlaces y rastreadores", () => {
  for (const ua of [
    FACEBOOK_UA,
    "WhatsApp/2.23.20.0",
    "LinkedInBot/1.0 (compatible; Mozilla/5.0; Apache-HttpClient +http://www.linkedin.com)",
    "Slackbot-LinkExpanding 1.0 (+https://api.slack.com/robots)",
    "Twitterbot/1.0",
    "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  ]) {
    assert.equal(isBot(ua), true, ua);
  }
});

test("isBot no marca navegadores reales ni valores vacíos", () => {
  assert.equal(isBot(CHROME_UA), false);
  assert.equal(isBot(IPHONE_UA), false);
  assert.equal(isBot(null), false);
  assert.equal(isBot(undefined), false);
  assert.equal(isBot(""), false);
});
