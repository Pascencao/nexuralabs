import { test } from "node:test";
import assert from "node:assert/strict";
import {
  checklistDelivery,
  checklistNotification,
  checklistPdfPath,
  contactNotification,
  escapeHtml,
} from "./emails.ts";

const date = new Date("2026-10-06T15:00:00.000Z");

test("escapeHtml escapa los 5 caracteres especiales", () => {
  assert.equal(escapeHtml(`<a href="x">Tom & 'Jerry'</a>`), "&lt;a href=&quot;x&quot;&gt;Tom &amp; &#39;Jerry&#39;&lt;/a&gt;");
});

test("checklistPdfPath devuelve el PDF del idioma", () => {
  assert.equal(checklistPdfPath("es"), "/downloads/checklist-ia-es.pdf");
  assert.equal(checklistPdfPath("en"), "/downloads/checklist-ia-en.pdf");
});

test("contactNotification arma asunto y cuerpo en español", () => {
  const email = contactNotification(
    { name: "Ana", email: "ana@empresa.com", need: "ai-rescue", message: "Hola" },
    { locale: "en", date },
  );
  assert.equal(email.subject, "Nuevo contacto web: Ana (Rescatar un proyecto de IA)");
  for (const part of ["Ana", "ana@empresa.com", "Rescatar un proyecto de IA", "Hola", "en", "2026-10-06T15:00:00.000Z"]) {
    assert.ok(email.text.includes(part), part);
  }
});

test("contactNotification indica mensaje vacío y escapa HTML", () => {
  const empty = contactNotification(
    { name: "Ana", email: "ana@empresa.com", need: "ai", message: "" },
    { locale: "es", date },
  );
  assert.ok(empty.text.includes("(sin mensaje)"));
  const xss = contactNotification(
    { name: "<script>", email: "ana@empresa.com", need: "ai", message: "<b>hi</b>" },
    { locale: "es", date },
  );
  assert.ok(!xss.html.includes("<script>"));
  assert.ok(xss.html.includes("&lt;script&gt;"));
  assert.ok(xss.html.includes("&lt;b&gt;hi&lt;/b&gt;"));
});

test("checklistNotification arma el aviso de lead", () => {
  const email = checklistNotification({ email: "ana@empresa.com", company: "Acme" }, { locale: "es", date });
  assert.equal(email.subject, "Nuevo lead checklist: Acme");
  assert.ok(email.text.includes("ana@empresa.com"));
  assert.ok(email.text.includes("Acme"));
});

test("checklistDelivery usa el idioma y el link al PDF", () => {
  const pdfUrl = "https://www.nexuralabs.agency/downloads/checklist-ia-en.pdf";
  const en = checklistDelivery({ locale: "en", pdfUrl });
  assert.equal(en.subject, "Your checklist: Is your operation ready for AI?");
  assert.ok(en.text.includes(pdfUrl));
  assert.ok(en.html.includes(`href="${pdfUrl}"`));
  const es = checklistDelivery({ locale: "es", pdfUrl: "https://x.test/a.pdf?a=1&b=2" });
  assert.equal(es.subject, "Tu checklist: ¿tu operación está lista para IA?");
  assert.ok(es.html.includes('href="https://x.test/a.pdf?a=1&amp;b=2"'));
});

test("los asuntos no llevan saltos de línea ni caracteres de control", () => {
  const contact = contactNotification(
    { name: "Ana\r\nBcc: x@y.com\tPérez", email: "ana@empresa.com", need: "ai", message: "" },
    { locale: "es", date },
  );
  assert.equal(contact.subject, "Nuevo contacto web: Ana Bcc: x@y.com Pérez (Aplicar IA)");
  const lead = checklistNotification({ email: "ana@empresa.com", company: "Acme\nCorp" }, { locale: "es", date });
  assert.equal(lead.subject, "Nuevo lead checklist: Acme Corp");
});
