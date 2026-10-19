import { test } from "node:test";
import assert from "node:assert/strict";
import {
  LANDING_KEYS,
  ROUTES,
  pageKeyFromPath,
  alternatePath,
  homeAnchor,
  isLandingPath,
  isHubPath,
} from "./routes.ts";

test("ROUTES define la home, privacidad y términos en ambos idiomas", () => {
  assert.deepEqual(ROUTES.home, { es: "/", en: "/en" });
  assert.deepEqual(ROUTES.privacy, { es: "/privacy", en: "/en/privacy" });
  assert.deepEqual(ROUTES.terms, { es: "/terms", en: "/en/terms" });
});

test("pageKeyFromPath reconoce rutas en español e inglés", () => {
  assert.deepEqual(pageKeyFromPath("/"), { key: "home", locale: "es" });
  assert.deepEqual(pageKeyFromPath("/en"), { key: "home", locale: "en" });
  assert.deepEqual(pageKeyFromPath("/en/terms"), { key: "terms", locale: "en" });
  assert.deepEqual(pageKeyFromPath("/privacy"), { key: "privacy", locale: "es" });
});

test("pageKeyFromPath ignora la barra final", () => {
  assert.deepEqual(pageKeyFromPath("/en/"), { key: "home", locale: "en" });
  assert.deepEqual(pageKeyFromPath("/privacy/"), { key: "privacy", locale: "es" });
});

test("pageKeyFromPath devuelve null para rutas desconocidas", () => {
  assert.equal(pageKeyFromPath("/no-existe"), null);
  assert.equal(pageKeyFromPath("/en/no-existe"), null);
});

test("alternatePath devuelve la página equivalente en el otro idioma", () => {
  assert.equal(alternatePath("/", "en"), "/en");
  assert.equal(alternatePath("/en", "es"), "/");
  assert.equal(alternatePath("/privacy", "en"), "/en/privacy");
  assert.equal(alternatePath("/en/terms", "es"), "/terms");
});

test("alternatePath cae en la home del idioma destino si la ruta no existe", () => {
  assert.equal(alternatePath("/no-existe", "en"), "/en");
  assert.equal(alternatePath("/en/no-existe", "es"), "/");
});

test("homeAnchor arma anclas de la home por idioma", () => {
  assert.equal(homeAnchor("es", "contacto"), "/#contacto");
  assert.equal(homeAnchor("en", "contacto"), "/en#contacto");
});

test("ROUTES incluye las landings con slugs traducidos", () => {
  assert.deepEqual(ROUTES.iaPosventa, { es: "/ia-posventa", en: "/en/ai-after-sales" });
  assert.deepEqual(ROUTES.rescateIa, { es: "/rescate-ia", en: "/en/ai-rescue" });
  assert.deepEqual(ROUTES.rigi, { es: "/rigi", en: "/en/rigi" });
  assert.deepEqual(ROUTES.rigiProveedores, { es: "/rigi-proveedores", en: "/en/rigi-suppliers" });
  assert.deepEqual(ROUTES.rigiEmpresas, { es: "/rigi-empresas", en: "/en/rigi-companies" });
  assert.deepEqual([...LANDING_KEYS], ["iaPosventa", "rescateIa"]);
});

test("alternatePath traduce los slugs de las landings", () => {
  assert.equal(alternatePath("/ia-posventa", "en"), "/en/ai-after-sales");
  assert.equal(alternatePath("/en/ai-rescue/", "es"), "/rescate-ia");
  assert.deepEqual(pageKeyFromPath("/en/ai-after-sales"), { key: "iaPosventa", locale: "en" });
});

test("isLandingPath reconoce solo las landings", () => {
  assert.equal(isLandingPath("/ia-posventa"), true);
  assert.equal(isLandingPath("/en/ai-rescue"), true);
  assert.equal(isLandingPath("/"), false);
  assert.equal(isLandingPath("/en/privacy"), false);
  assert.equal(isLandingPath("/no-existe"), false);
});

test("isHubPath reconoce solo las landings RIGI", () => {
  assert.equal(isHubPath("/rigi"), true);
  assert.equal(isHubPath("/en/rigi"), true);
  assert.equal(isHubPath("/rigi-proveedores"), true);
  assert.equal(isHubPath("/en/rigi-companies"), true);
  assert.equal(isHubPath("/rescate-ia"), false);
  assert.equal(isHubPath("/"), false);
});
