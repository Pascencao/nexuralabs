import { test } from "node:test";
import assert from "node:assert/strict";
import { MIN_FILL_MS, isLikelyBot } from "./spam.ts";

test("MIN_FILL_MS es 2 segundos", () => {
  assert.equal(MIN_FILL_MS, 2000);
});

test("isLikelyBot: humano con honeypot vacío y tiempo suficiente", () => {
  assert.equal(isLikelyBot({ honeypot: "", elapsedMs: 5000 }), false);
  assert.equal(isLikelyBot({ honeypot: undefined, elapsedMs: 2000 }), false);
});

test("isLikelyBot: honeypot con contenido", () => {
  assert.equal(isLikelyBot({ honeypot: "https://spam.example", elapsedMs: 5000 }), true);
  assert.equal(isLikelyBot({ honeypot: 1, elapsedMs: 5000 }), true);
});

test("isLikelyBot: envío demasiado rápido o sin tiempo", () => {
  assert.equal(isLikelyBot({ honeypot: "", elapsedMs: 500 }), true);
  assert.equal(isLikelyBot({ honeypot: "", elapsedMs: undefined }), true);
  assert.equal(isLikelyBot({ honeypot: "", elapsedMs: "5000" }), true);
  assert.equal(isLikelyBot({ honeypot: "", elapsedMs: Number.NaN }), true);
});
