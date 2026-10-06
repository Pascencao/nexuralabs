import { test } from "node:test";
import assert from "node:assert/strict";
import { NEED_OPTIONS, validateChecklist, validateContact } from "./validate.ts";

const validContact = {
  name: "Ana Pérez",
  email: "ana@empresa.com",
  need: "ai",
  message: "Queremos ordenar la posventa.",
};

test("NEED_OPTIONS lista las 5 opciones en orden", () => {
  assert.deepEqual([...NEED_OPTIONS], ["processes", "software", "ai", "ai-rescue", "other"]);
});

test("validateContact acepta datos válidos y recorta espacios", () => {
  const result = validateContact({ ...validContact, name: "  Ana Pérez  ", message: "" });
  assert.deepEqual(result, {
    ok: true,
    data: { name: "Ana Pérez", email: "ana@empresa.com", need: "ai", message: "" },
  });
});

test("validateContact marca obligatorios vacíos", () => {
  const result = validateContact({});
  assert.deepEqual(result, {
    ok: false,
    errors: { name: "required", email: "required", need: "choice" },
  });
});

test("validateContact valida formato de email", () => {
  for (const email of ["ana", "ana@", "ana@empresa", "ana @empresa.com", "ana@empresa.c"]) {
    const result = validateContact({ ...validContact, email });
    assert.equal(result.ok, false, email);
    if (!result.ok) assert.equal(result.errors.email, "email", email);
  }
});

test("validateContact controla longitudes", () => {
  const short = validateContact({ ...validContact, name: "A" });
  assert.equal(!short.ok && short.errors.name, "tooShort");
  const longName = validateContact({ ...validContact, name: "a".repeat(101) });
  assert.equal(!longName.ok && longName.errors.name, "tooLong");
  const longMessage = validateContact({ ...validContact, message: "a".repeat(2001) });
  assert.equal(!longMessage.ok && longMessage.errors.message, "tooLong");
  const longEmail = validateContact({ ...validContact, email: `${"a".repeat(250)}@x.com` });
  assert.equal(!longEmail.ok && longEmail.errors.email, "tooLong");
});

test("validateContact rechaza opciones desconocidas y tipos no string", () => {
  const unknown = validateContact({ ...validContact, need: "hack" });
  assert.equal(!unknown.ok && unknown.errors.need, "choice");
  const wrongType = validateContact({ ...validContact, name: 42 });
  assert.equal(!wrongType.ok && wrongType.errors.name, "required");
});

test("validateChecklist acepta email y empresa válidos", () => {
  assert.deepEqual(validateChecklist({ email: " ana@empresa.com ", company: "Acme" }), {
    ok: true,
    data: { email: "ana@empresa.com", company: "Acme" },
  });
});

test("validateChecklist marca errores", () => {
  assert.deepEqual(validateChecklist({ email: "x", company: "" }), {
    ok: false,
    errors: { email: "email", company: "required" },
  });
  const long = validateChecklist({ email: "ana@empresa.com", company: "a".repeat(121) });
  assert.equal(!long.ok && long.errors.company, "tooLong");
});
