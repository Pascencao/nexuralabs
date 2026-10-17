import { test } from "node:test";
import assert from "node:assert/strict";
import {
  NEED_OPTIONS,
  cleanUtm,
  validateChecklist,
  validateCompanyLead,
  validateContact,
  validateSupplierLead,
} from "./validate.ts";

const validContact = {
  name: "Ana Pérez",
  email: "ana@empresa.com",
  need: "ai",
  message: "Queremos ordenar la posventa.",
};

test("NEED_OPTIONS lista las 7 opciones en orden", () => {
  assert.deepEqual(
    [...NEED_OPTIONS],
    ["processes", "software", "ai", "ai-rescue", "rigi-supplier", "rigi-company", "other"],
  );
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

const rigiBase = {
  name: "Ana Pérez",
  company: "Metalúrgica Sur",
  role: "Gerenta de operaciones",
  email: "ana@metalurgicasur.com",
  phone: "+54 9 341 555-1234",
  privacy: true,
};

test("validateSupplierLead acepta datos válidos", () => {
  const result = validateSupplierLead({ ...rigiBase, sector: "metalworking", channel: "whatsapp" });
  assert.equal(result.ok, true);
});

test("validateSupplierLead marca obligatorios, opciones y privacidad", () => {
  assert.deepEqual(validateSupplierLead({}), {
    ok: false,
    errors: {
      name: "required",
      company: "required",
      role: "required",
      email: "required",
      phone: "required",
      privacy: "consent",
      sector: "choice",
      channel: "choice",
    },
  });
});

test("validateSupplierLead exige privacy === true (no un string)", () => {
  const result = validateSupplierLead({ ...rigiBase, privacy: "true", sector: "other", channel: "email" });
  assert.equal(!result.ok && result.errors.privacy, "consent");
});

test("validación de teléfono", () => {
  for (const phone of ["abc", "12345", "+54 (341) 555-12a4", "1".repeat(16)]) {
    const result = validateSupplierLead({ ...rigiBase, phone, sector: "other", channel: "call" });
    assert.equal(!result.ok && result.errors.phone, "phone", phone);
  }
  for (const phone of ["3415551234", "+54 9 341 555-1234", "(0341) 555 1234"]) {
    const result = validateSupplierLead({ ...rigiBase, phone, sector: "other", channel: "call" });
    assert.equal(result.ok, true, phone);
  }
});

test("validateCompanyLead acepta datos válidos y deduplica sistemas", () => {
  const result = validateCompanyLead({ ...rigiBase, systems: ["erp", "fleet", "erp"], goal: "Ver la flota" });
  assert.equal(result.ok, true);
  if (result.ok) assert.deepEqual(result.data.systems, ["erp", "fleet"]);
});

test("validateCompanyLead exige al menos un sistema conocido y el texto", () => {
  const empty = validateCompanyLead({ ...rigiBase, systems: [], goal: "" });
  assert.equal(!empty.ok && empty.errors.systems, "choice");
  assert.equal(!empty.ok && empty.errors.goal, "required");
  const unknown = validateCompanyLead({ ...rigiBase, systems: ["erp", "hack"], goal: "Algo" });
  assert.equal(!unknown.ok && unknown.errors.systems, "choice");
});

test("cleanUtm conserva solo las 3 claves, recortadas y sin control", () => {
  assert.deepEqual(
    cleanUtm({ utm_source: " linkedin ", utm_medium: "a\nb", utm_campaign: "x".repeat(150), other: "z" }),
    { utm_source: "linkedin", utm_medium: "ab", utm_campaign: "x".repeat(100) },
  );
  assert.deepEqual(cleanUtm(null), {});
  assert.deepEqual(cleanUtm({ utm_source: 42 }), {});
});


test("validateCompanyLead: teléfono opcional, pero si viene se valida", () => {
  const noPhone = validateCompanyLead({ ...rigiBase, phone: "", systems: ["erp"], goal: "Ver todo" });
  assert.equal(noPhone.ok, true);
  const badPhone = validateCompanyLead({ ...rigiBase, phone: "abc", systems: ["erp"], goal: "Ver todo" });
  assert.equal(!badPhone.ok && badPhone.errors.phone, "phone");
});

test("validateCompanyLead acepta 'unsure' como sistema", () => {
  const result = validateCompanyLead({ ...rigiBase, systems: ["unsure"], goal: "No sabemos" });
  assert.equal(result.ok, true);
});
