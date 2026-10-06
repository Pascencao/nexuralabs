import { test } from "node:test";
import assert from "node:assert/strict";
import { MAX_BODY_BYTES, readJsonBody } from "./http.ts";

function post(body: string): Request {
  return new Request("http://localhost/api/x", { method: "POST", body });
}

test("readJsonBody devuelve el objeto JSON", async () => {
  assert.deepEqual(await readJsonBody(post('{"a":1}')), { ok: true, body: { a: 1 } });
});

test("readJsonBody rechaza JSON inválido o que no es objeto", async () => {
  for (const body of ["{", "[]", "null", '"x"', "3", ""]) {
    assert.deepEqual(await readJsonBody(post(body)), { ok: false, status: 400 }, body);
  }
});

test("readJsonBody rechaza bodies de más de 10 KB", async () => {
  assert.equal(MAX_BODY_BYTES, 10_000);
  const big = JSON.stringify({ a: "x".repeat(MAX_BODY_BYTES) });
  assert.deepEqual(await readJsonBody(post(big)), { ok: false, status: 413 });
});
