# Etapa C: formulario de contacto y checklist (plan de implementación)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Agregar a nexuralabs.agency un formulario de contacto de 4 campos y un bloque de checklist descargable. Los dos envían emails con Resend a través de Route Handlers de Next.

**Architecture:**
- **Lógica pura** (validación, anti-spam, armado de emails, lectura del body) en `lib/forms/`, sin imports de runtime entre módulos, para poder testearla con `node:test`.
- **Envío:** `lib/mailer.ts` envuelve Resend. Sin API key y fuera de producción, imprime el email en la consola en lugar de enviarlo.
- **Rutas:** `app/api/contact` y `app/api/checklist` son delgadas: parsean, filtran spam, validan y envían.
- **UI:** dos componentes cliente reutilizan un hook de envío (`useFormSubmit`) y un `FieldShell`.
- **PDF:** se genera una vez con pdfkit desde `content/checklist.json` y queda commiteado.

**Tech Stack:** Next.js 16.2.4 (App Router, Route Handlers), React 19.2, TypeScript 5, Tailwind 3.4 + `@tailwindcss/forms`, `resend` ^6.32.1, `pdfkit` ^0.20.2 (dev), `node:test`.

**Spec:** `docs/superpowers/specs/2026-10-06-etapa-c-conversion-design.md`

## Global Constraints

- Rama `feat/ia-aplicada`. **Nunca hacer push**: un push a `develop` despliega a producción.
- Paleta sin cambios: `ink #16233A`, `ink-dark #0F1B2D`, `muted #5B6472`, `canvas #F5F6F8`, `gold #AD8A52`, `ops #1B4D4A`, `build #8A5A2B`, `scale #463A66`. No se agregan colores. Los errores de formulario usan `build` (texto y borde).
- El copy ES/EN es exacto según este plan. No se normalizan comillas, signos ni flechas.
- No mencionar herramientas ni modelos en el copy, no inventar métricas.
- Las únicas dependencias nuevas son `resend` (dependency) y `pdfkit` (devDependency).
- Accesibilidad: cada campo con `<label>`, errores ligados con `aria-describedby` y `aria-invalid`, foco visible y estados anunciados con `role="status"` / `role="alert"`.
- Mobile-first, sin scroll horizontal a 375 px.
- Los módulos testeados con `node:test` (`lib/forms/validate.ts`, `spam.ts`, `emails.ts`, `http.ts`) **no importan otros módulos en runtime**. Solo usan `import type`, que se borra al ejecutar, porque Node exige extensiones y Next no las acepta.
- Commits terminan con el trailer `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
- `npm run build` puede reescribir `next-env.d.ts`. Hay que hacer `git checkout next-env.d.ts` antes de cada commit.

## File Structure

| Archivo | Responsabilidad |
|---|---|
| `lib/forms/validate.ts` (+ `.test.ts`) | `NEED_OPTIONS`, tipos de input y errores, `validateContact`, `validateChecklist` |
| `lib/forms/spam.ts` (+ `.test.ts`) | `MIN_FILL_MS`, `isLikelyBot` |
| `lib/forms/emails.ts` (+ `.test.ts`) | `escapeHtml`, `checklistPdfPath`, `contactNotification`, `checklistNotification`, `checklistDelivery` |
| `lib/forms/http.ts` (+ `.test.ts`) | `MAX_BODY_BYTES`, `readJsonBody` |
| `lib/mailer.ts` | `MAIL_FROM`, `MAIL_TO`, `MailerNotConfiguredError`, `sendMail` |
| `app/api/contact/route.ts` | POST de contacto |
| `app/api/checklist/route.ts` | POST del checklist |
| `components/forms/useFormSubmit.ts` | Hook cliente de envío y estados |
| `components/forms/Field.tsx` | `FieldShell`, `inputClass` |
| `components/ContactForm.tsx` | Formulario de contacto |
| `components/Contact.tsx` (mod) | Layout en 2 columnas con el formulario |
| `components/ChecklistOffer.tsx` | Bloque `#checklist` |
| `components/HomePage.tsx` (mod) | Monta `ChecklistOffer` entre `CaseStudies` y `About` |
| `lib/i18n/types.ts`, `es.ts`, `en.ts` (mod) | `contact.form`, `formErrors`, `checklist` |
| `content/checklist.json` | Contenido del checklist ES/EN |
| `scripts/build-checklist-pdf.mjs` | Genera los PDF |
| `public/downloads/checklist-ia-{es,en}.pdf` | PDF generados |
| `.env.example`, `.gitignore`, `README.md`, `package.json` (mod) | Configuración y documentación |

Nota respecto de la spec: el archivo `options.ts` se integra en `validate.ts` (constante `NEED_OPTIONS`), para no tener imports de runtime entre módulos testeados. También se agrega el código de error `tooShort`, con el mensaje ES "Es demasiado corto." / EN "That's too short.", que cubre los mínimos de longitud.

---

### Task 1: Validación y anti-spam (lógica pura, TDD)

**Files:**
- Create: `lib/forms/validate.ts`, `lib/forms/validate.test.ts`, `lib/forms/spam.ts`, `lib/forms/spam.test.ts`

**Interfaces:**
- Produces:
  - `NEED_OPTIONS: readonly ["processes","software","ai","ai-rescue","other"]` y `type Need`
  - `type FieldError = "required" | "email" | "choice" | "tooLong" | "tooShort"`
  - `type ContactInput = { name: string; email: string; need: string; message: string }`
  - `type ChecklistInput = { email: string; company: string }`
  - `type Errors<T> = Partial<Record<keyof T, FieldError>>`
  - `type ValidationResult<T> = { ok: true; data: T } | { ok: false; errors: Errors<T> }`
  - `validateContact(raw: Record<string, unknown>): ValidationResult<ContactInput>`
  - `validateChecklist(raw: Record<string, unknown>): ValidationResult<ChecklistInput>`
  - `MIN_FILL_MS = 2000`, `isLikelyBot(input: { honeypot: unknown; elapsedMs: unknown }): boolean`

- [ ] **Step 1: Escribir los tests de validación**

`lib/forms/validate.test.ts`:

```ts
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
```

- [ ] **Step 2: Escribir los tests de anti-spam**

`lib/forms/spam.test.ts`:

```ts
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
```

- [ ] **Step 3: Correr los tests y verificar que fallan**

Run: `npm test`
Expected: FAIL. `validate.test.ts` y `spam.test.ts` dan `ERR_MODULE_NOT_FOUND`, y los 18 tests existentes siguen pasando.

- [ ] **Step 4: Implementar `lib/forms/validate.ts`**

```ts
/** Opciones del select "¿Qué querés resolver?" (ids estables; las etiquetas viven en el diccionario). */
export const NEED_OPTIONS = ["processes", "software", "ai", "ai-rescue", "other"] as const;
export type Need = (typeof NEED_OPTIONS)[number];

export type FieldError = "required" | "email" | "choice" | "tooLong" | "tooShort";

export type ContactInput = { name: string; email: string; need: string; message: string };
export type ChecklistInput = { email: string; company: string };

export type Errors<T> = Partial<Record<keyof T, FieldError>>;
export type ValidationResult<T> = { ok: true; data: T } | { ok: false; errors: Errors<T> };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const EMAIL_MAX = 254;

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function checkLength(
  value: string,
  { min, max, required }: { min: number; max: number; required: boolean },
): FieldError | undefined {
  if (!value) return required ? "required" : undefined;
  if (value.length < min) return "tooShort";
  if (value.length > max) return "tooLong";
  return undefined;
}

function checkEmail(value: string): FieldError | undefined {
  if (!value) return "required";
  if (value.length > EMAIL_MAX) return "tooLong";
  return EMAIL_RE.test(value) ? undefined : "email";
}

function result<T>(data: T, errors: Errors<T>): ValidationResult<T> {
  const clean = Object.fromEntries(
    Object.entries(errors).filter(([, code]) => code !== undefined),
  ) as Errors<T>;
  return Object.keys(clean).length > 0 ? { ok: false, errors: clean } : { ok: true, data };
}

export function validateContact(raw: Record<string, unknown>): ValidationResult<ContactInput> {
  const data: ContactInput = {
    name: text(raw.name),
    email: text(raw.email),
    need: text(raw.need),
    message: text(raw.message),
  };
  return result(data, {
    name: checkLength(data.name, { min: 2, max: 100, required: true }),
    email: checkEmail(data.email),
    need: (NEED_OPTIONS as readonly string[]).includes(data.need) ? undefined : "choice",
    message: checkLength(data.message, { min: 0, max: 2000, required: false }),
  });
}

export function validateChecklist(raw: Record<string, unknown>): ValidationResult<ChecklistInput> {
  const data: ChecklistInput = { email: text(raw.email), company: text(raw.company) };
  return result(data, {
    email: checkEmail(data.email),
    company: checkLength(data.company, { min: 2, max: 120, required: true }),
  });
}
```

- [ ] **Step 5: Implementar `lib/forms/spam.ts`**

```ts
/** Tiempo mínimo entre que se muestra el formulario y se envía; menos que esto es casi seguro un bot. */
export const MIN_FILL_MS = 2000;

export function isLikelyBot(input: { honeypot: unknown; elapsedMs: unknown }): boolean {
  if (input.honeypot !== undefined && input.honeypot !== null) {
    if (typeof input.honeypot !== "string" || input.honeypot.trim() !== "") return true;
  }
  const elapsed = input.elapsedMs;
  if (typeof elapsed !== "number" || !Number.isFinite(elapsed)) return true;
  return elapsed < MIN_FILL_MS;
}
```

- [ ] **Step 6: Correr los tests y verificar que pasan**

Run: `npm test`
Expected: `ℹ fail 0` y `ℹ pass 30`: los 18 existentes más 8 de validación y 4 de spam.

- [ ] **Step 7: Chequear tipos y commit**

Run: `npx tsc --noEmit`
Expected: sin salida.

```bash
git add lib/forms/validate.ts lib/forms/validate.test.ts lib/forms/spam.ts lib/forms/spam.test.ts
git commit -m "Add form validation and spam heuristics with tests

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 2: Armado de emails y lectura del body (lógica pura, TDD)

**Files:**
- Create: `lib/forms/emails.ts`, `lib/forms/emails.test.ts`, `lib/forms/http.ts`, `lib/forms/http.test.ts`

**Interfaces:**
- Consumes: los tipos `ContactInput` y `ChecklistInput` de `./validate` (solo `import type`), y `Locale` de `../i18n/config` (`import type`).
- Produces:
  - `type EmailContent = { subject: string; text: string; html: string }`
  - `escapeHtml(value: string): string`
  - `checklistPdfPath(locale: Locale): string` (`"/downloads/checklist-ia-es.pdf"`)
  - `contactNotification(input: ContactInput, ctx: { locale: Locale; date: Date }): EmailContent`
  - `checklistNotification(input: ChecklistInput, ctx: { locale: Locale; date: Date }): EmailContent`
  - `checklistDelivery(ctx: { locale: Locale; pdfUrl: string }): EmailContent`
  - `MAX_BODY_BYTES = 10_000`, `readJsonBody(request: Request): Promise<{ ok: true; body: Record<string, unknown> } | { ok: false; status: 400 | 413 }>`

- [ ] **Step 1: Escribir los tests de emails**

`lib/forms/emails.test.ts`:

```ts
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
```

- [ ] **Step 2: Escribir los tests de `readJsonBody`**

`lib/forms/http.test.ts`:

```ts
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
```

- [ ] **Step 3: Correr los tests y verificar que fallan**

Run: `npm test`
Expected: FAIL por `ERR_MODULE_NOT_FOUND` en `emails.ts` y `http.ts`. El resto pasa.

- [ ] **Step 4: Implementar `lib/forms/emails.ts`**

```ts
import type { Locale } from "../i18n/config";
import type { ChecklistInput, ContactInput } from "./validate";

export type EmailContent = { subject: string; text: string; html: string };

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function checklistPdfPath(locale: Locale): string {
  return `/downloads/checklist-ia-${locale}.pdf`;
}

/** Etiquetas en español para los avisos internos (Pablo los lee siempre en español). */
const NEED_LABEL_ES: Record<string, string> = {
  processes: "Ordenar procesos",
  software: "Construir software",
  ai: "Aplicar IA",
  "ai-rescue": "Rescatar un proyecto de IA",
  other: "Otro",
};

type Row = [label: string, value: string];

function rowsToText(rows: Row[]): string {
  return rows.map(([label, value]) => `${label}: ${value}`).join("\n");
}

function rowsToHtml(rows: Row[]): string {
  const cells = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#5B6472;vertical-align:top"><strong>${escapeHtml(label)}</strong></td>` +
        `<td style="padding:6px 0;color:#16233A;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join("");
  return `<table style="border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;font-size:14px">${cells}</table>`;
}

export function contactNotification(
  input: ContactInput,
  ctx: { locale: Locale; date: Date },
): EmailContent {
  const need = NEED_LABEL_ES[input.need] ?? input.need;
  const rows: Row[] = [
    ["Nombre", input.name],
    ["Email", input.email],
    ["Quiere resolver", need],
    ["Mensaje", input.message || "(sin mensaje)"],
    ["Idioma", ctx.locale],
    ["Fecha", ctx.date.toISOString()],
  ];
  return {
    subject: `Nuevo contacto web: ${input.name} (${need})`,
    text: rowsToText(rows),
    html: rowsToHtml(rows),
  };
}

export function checklistNotification(
  input: ChecklistInput,
  ctx: { locale: Locale; date: Date },
): EmailContent {
  const rows: Row[] = [
    ["Email", input.email],
    ["Empresa", input.company],
    ["Idioma", ctx.locale],
    ["Fecha", ctx.date.toISOString()],
  ];
  return {
    subject: `Nuevo lead checklist: ${input.company}`,
    text: rowsToText(rows),
    html: rowsToHtml(rows),
  };
}

const DELIVERY_COPY: Record<
  Locale,
  { subject: string; greeting: string; body: string; cta: string; closing: string; signature: string }
> = {
  es: {
    subject: "Tu checklist: ¿tu operación está lista para IA?",
    greeting: "Hola,",
    body: "Acá tenés el checklist con doce preguntas para revisar antes de invertir en IA:",
    cta: "Descargar el checklist (PDF)",
    closing: "Si querés charlarlo, respondé este mail y coordinamos veinte minutos sin costo.",
    signature: "Pablo Ascencao · Nexura Labs",
  },
  en: {
    subject: "Your checklist: Is your operation ready for AI?",
    greeting: "Hi,",
    body: "Here's the checklist with twelve questions to go through before investing in AI:",
    cta: "Download the checklist (PDF)",
    closing: "If you'd like to talk it through, reply to this email and we'll set up twenty free minutes.",
    signature: "Pablo Ascencao · Nexura Labs",
  },
};

export function checklistDelivery(ctx: { locale: Locale; pdfUrl: string }): EmailContent {
  const copy = DELIVERY_COPY[ctx.locale];
  const text = [copy.greeting, "", copy.body, ctx.pdfUrl, "", copy.closing, "", copy.signature].join("\n");
  const p = (content: string) =>
    `<p style="margin:0 0 16px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#16233A">${content}</p>`;
  const html =
    p(escapeHtml(copy.greeting)) +
    p(escapeHtml(copy.body)) +
    p(
      `<a href="${escapeHtml(ctx.pdfUrl)}" style="display:inline-block;padding:12px 20px;border-radius:999px;background:#16233A;color:#FFFFFF;text-decoration:none;font-weight:bold">${escapeHtml(copy.cta)}</a>`,
    ) +
    p(escapeHtml(copy.closing)) +
    p(escapeHtml(copy.signature));
  return { subject: copy.subject, text, html };
}
```

- [ ] **Step 5: Implementar `lib/forms/http.ts`**

```ts
/** Tope de tamaño del body de los formularios (bytes). */
export const MAX_BODY_BYTES = 10_000;

export type ParsedBody =
  | { ok: true; body: Record<string, unknown> }
  | { ok: false; status: 400 | 413 };

export async function readJsonBody(request: Request): Promise<ParsedBody> {
  const raw = await request.text();
  if (new TextEncoder().encode(raw).length > MAX_BODY_BYTES) return { ok: false, status: 413 };
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return { ok: false, status: 400 };
    }
    return { ok: true, body: parsed as Record<string, unknown> };
  } catch {
    return { ok: false, status: 400 };
  }
}
```

- [ ] **Step 6: Correr los tests y verificar que pasan**

Run: `npm test`
Expected: `ℹ fail 0` y `ℹ pass 39`: los 30 de antes más 6 de emails y 3 de http.

- [ ] **Step 7: Chequear tipos y commit**

Run: `npx tsc --noEmit`
Expected: sin salida.

```bash
git add lib/forms/emails.ts lib/forms/emails.test.ts lib/forms/http.ts lib/forms/http.test.ts
git commit -m "Add email builders and JSON body reader with tests

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 3: Mailer con Resend y rutas `/api/contact` y `/api/checklist`

**Files:**
- Modify: `package.json` / `package-lock.json` (con `npm install resend@^6.32.1`), `.gitignore`
- Create: `.env.example`, `lib/mailer.ts`, `app/api/contact/route.ts`, `app/api/checklist/route.ts`

**Interfaces:**
- Consumes: `readJsonBody` (`@/lib/forms/http`), `isLikelyBot` (`@/lib/forms/spam`), `validateContact` y `validateChecklist` (`@/lib/forms/validate`), `contactNotification`, `checklistNotification`, `checklistDelivery` y `checklistPdfPath` (`@/lib/forms/emails`), `isLocale` (`@/lib/i18n/config`), `absoluteUrl` (`@/lib/site`)
- Produces:
  - `POST /api/contact`, con body JSON `{ name, email, need, message, website, elapsedMs, locale }`
  - `POST /api/checklist`, con body JSON `{ email, company, website, elapsedMs, locale }`
  - Respuestas: `200 {ok:true}`, `400 {ok:false, errors?}`, `413 {ok:false}`, `500 {ok:false}` y `502 {ok:false}`

- [ ] **Step 1: Instalar `resend`**

Run: `npm install resend@^6.32.1`
Expected: `package.json` incluye `"resend": "^6.32.1"` en `dependencies`.

Antes de escribir el mailer, confirmar la firma de `emails.send` en `node_modules/resend/dist/index.d.ts` (`grep -n "replyTo" node_modules/resend/dist/*.d.ts | head`). El campo de respuesta es `replyTo`. Si en esta versión se llama distinto, usar ese nombre y anotarlo en el reporte.

- [ ] **Step 2: Agregar `.env.example` y cubrir los `.env` en `.gitignore`**

`.env.example`:

```
# Resend (https://resend.com): obligatoria en producción para enviar emails.
# Sin esta variable, en desarrollo los emails se imprimen en la consola.
RESEND_API_KEY=

# Remitente (el dominio tiene que estar verificado en Resend).
MAIL_FROM="Nexura Labs <pablo@nexuralabs.agency>"

# Destino de los avisos de contacto y de leads del checklist.
MAIL_TO=pablo@nexuralabs.agency
```

Agregar al final de `.gitignore`:

```
.env
.env*.local
```

- [ ] **Step 3: Crear `lib/mailer.ts`**

```ts
import { Resend } from "resend";

export type OutgoingMail = {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

export const MAIL_FROM = process.env.MAIL_FROM || "Nexura Labs <pablo@nexuralabs.agency>";
export const MAIL_TO = process.env.MAIL_TO || "pablo@nexuralabs.agency";

/** Falta RESEND_API_KEY en producción: es un error de configuración, no del usuario. */
export class MailerNotConfiguredError extends Error {}

let client: Resend | null = null;

/**
 * Envía un email con Resend. Sin RESEND_API_KEY fuera de producción no envía nada:
 * imprime el email en la consola para poder probar los formularios en local.
 */
export async function sendMail(mail: OutgoingMail): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV === "production") {
      throw new MailerNotConfiguredError("RESEND_API_KEY is not set");
    }
    console.info(
      "[mailer] RESEND_API_KEY no configurada; email no enviado:\n" +
        JSON.stringify({ from: MAIL_FROM, to: mail.to, replyTo: mail.replyTo, subject: mail.subject, text: mail.text }, null, 2),
    );
    return;
  }

  client ??= new Resend(apiKey);
  const { error } = await client.emails.send({
    from: MAIL_FROM,
    to: mail.to,
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
    replyTo: mail.replyTo,
  });
  if (error) throw new Error(`Resend: ${error.message}`);
}
```

- [ ] **Step 4: Crear `app/api/contact/route.ts`**

```ts
import { NextResponse } from "next/server";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { contactNotification } from "@/lib/forms/emails";
import { readJsonBody } from "@/lib/forms/http";
import { isLikelyBot } from "@/lib/forms/spam";
import { validateContact } from "@/lib/forms/validate";
import { MAIL_TO, MailerNotConfiguredError, sendMail } from "@/lib/mailer";

export async function POST(request: Request) {
  const parsed = await readJsonBody(request);
  if (!parsed.ok) return NextResponse.json({ ok: false }, { status: parsed.status });
  const { body } = parsed;

  // A los bots les respondemos "ok" sin enviar nada, para no darles pistas.
  if (isLikelyBot({ honeypot: body.website, elapsedMs: body.elapsedMs })) {
    return NextResponse.json({ ok: true });
  }

  const result = validateContact(body);
  if (!result.ok) return NextResponse.json({ ok: false, errors: result.errors }, { status: 400 });

  const locale: Locale = typeof body.locale === "string" && isLocale(body.locale) ? body.locale : "es";
  const email = contactNotification(result.data, { locale, date: new Date() });

  try {
    await sendMail({ to: MAIL_TO, replyTo: result.data.email, ...email });
  } catch (error) {
    console.error("[api/contact]", error);
    const status = error instanceof MailerNotConfiguredError ? 500 : 502;
    return NextResponse.json({ ok: false }, { status });
  }

  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 5: Crear `app/api/checklist/route.ts`**

```ts
import { NextResponse } from "next/server";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { checklistDelivery, checklistNotification, checklistPdfPath } from "@/lib/forms/emails";
import { readJsonBody } from "@/lib/forms/http";
import { isLikelyBot } from "@/lib/forms/spam";
import { validateChecklist } from "@/lib/forms/validate";
import { MAIL_TO, MailerNotConfiguredError, sendMail } from "@/lib/mailer";
import { absoluteUrl } from "@/lib/site";

export async function POST(request: Request) {
  const parsed = await readJsonBody(request);
  if (!parsed.ok) return NextResponse.json({ ok: false }, { status: parsed.status });
  const { body } = parsed;

  if (isLikelyBot({ honeypot: body.website, elapsedMs: body.elapsedMs })) {
    return NextResponse.json({ ok: true });
  }

  const result = validateChecklist(body);
  if (!result.ok) return NextResponse.json({ ok: false, errors: result.errors }, { status: 400 });

  const locale: Locale = typeof body.locale === "string" && isLocale(body.locale) ? body.locale : "es";
  const delivery = checklistDelivery({ locale, pdfUrl: absoluteUrl(checklistPdfPath(locale)) });

  try {
    await sendMail({ to: result.data.email, replyTo: MAIL_TO, ...delivery });
  } catch (error) {
    console.error("[api/checklist] delivery", error);
    const status = error instanceof MailerNotConfiguredError ? 500 : 502;
    return NextResponse.json({ ok: false }, { status });
  }

  // El aviso interno no debe hacer fallar la entrega a la persona.
  try {
    await sendMail({ to: MAIL_TO, ...checklistNotification(result.data, { locale, date: new Date() }) });
  } catch (error) {
    console.error("[api/checklist] notification", error);
  }

  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 6: Chequear tipos y tests**

Run: `npx tsc --noEmit && npm test`
Expected: tsc sin salida y `ℹ fail 0`.

- [ ] **Step 7: Verificar las rutas con el servidor de desarrollo, sin `RESEND_API_KEY`**

`next start` corre con `NODE_ENV=production` y devolvería 500 sin clave. Por eso se usa `next dev`, en el puerto 3200 para no chocar con otros servidores:

```bash
pkill -f "next dev.*-p 3200"; (npx next dev -p 3200 > /tmp/nexura-dev.log 2>&1 &) ; sleep 8
```

```bash
J=(-H "Content-Type: application/json")
curl -s -o /dev/null -w "%{http_code}\n" "${J[@]}" -d '{"name":"Ana Pérez","email":"ana@empresa.com","need":"ai","message":"Hola","website":"","elapsedMs":5000,"locale":"es"}' localhost:3200/api/contact
curl -s "${J[@]}" -d '{"name":"A","email":"x","need":"zzz","website":"","elapsedMs":5000}' localhost:3200/api/contact
curl -s -o /dev/null -w "%{http_code}\n" "${J[@]}" -d '{"name":"Ana","email":"ana@empresa.com","need":"ai","website":"spam","elapsedMs":5000}' localhost:3200/api/contact
curl -s -o /dev/null -w "%{http_code}\n" "${J[@]}" -d '{"name":"Ana","email":"ana@empresa.com","need":"ai","website":"","elapsedMs":500}' localhost:3200/api/contact
curl -s -o /dev/null -w "%{http_code}\n" "${J[@]}" -d '{' localhost:3200/api/contact
python3 -c "import json;print(json.dumps({'a':'x'*20000}))" | curl -s -o /dev/null -w "%{http_code}\n" "${J[@]}" --data-binary @- localhost:3200/api/contact
curl -s -o /dev/null -w "%{http_code}\n" "${J[@]}" -d '{"email":"ana@empresa.com","company":"Acme","website":"","elapsedMs":5000,"locale":"en"}' localhost:3200/api/checklist
grep -c "\[mailer\]" /tmp/nexura-dev.log
grep -o "checklist-ia-en.pdf" /tmp/nexura-dev.log | head -1
pkill -f "next dev.*-p 3200"
```

Expected, en orden:
- `200`
- `{"ok":false,"errors":{"name":"tooShort","email":"email","need":"choice"}}`
- `200` (honeypot)
- `200` (demasiado rápido)
- `400`
- `413`
- `200`
- `3`: un `[mailer]` del contacto válido y dos del checklist (entrega y aviso). El honeypot y el envío rápido no imprimen nada.
- `checklist-ia-en.pdf`

- [ ] **Step 8: Commit**

```bash
git add package.json package-lock.json .gitignore .env.example lib/mailer.ts app/api/contact/route.ts app/api/checklist/route.ts
git commit -m "Add Resend mailer and contact/checklist API routes

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 4: Formulario de contacto en `#contacto`

**Files:**
- Modify: `lib/i18n/types.ts`, `lib/i18n/dictionaries/es.ts`, `lib/i18n/dictionaries/en.ts`, `components/Contact.tsx`
- Create: `components/forms/useFormSubmit.ts`, `components/forms/Field.tsx`, `components/ContactForm.tsx`

**Interfaces:**
- Consumes: `NEED_OPTIONS`, `Need`, `FieldError`, `ContactInput`, `Errors` y `validateContact` (`@/lib/forms/validate`); `POST /api/contact` (Task 3)
- Produces:
  - `useFormSubmit<TErrors>(endpoint: string, options?: { onSuccess?: (payload: Record<string, unknown>) => void }): { status: "idle" | "sending" | "success" | "error"; serverErrors: TErrors | null; submit: (payload: Record<string, unknown>) => Promise<void> }`
  - `FieldShell` (props `{ id, label, hint?, error?, children }`), `inputClass(invalid: boolean): string`
  - `dict.contact.form`, `dict.formErrors` (los reutiliza la Task 5)

- [ ] **Step 1: Tipos**

En `lib/i18n/types.ts`, agregar arriba del todo:

```ts
import type { FieldError, Need } from "@/lib/forms/validate";
```

Dentro del bloque `contact`, después de `linkedinLabel: string;`, agregar:

```ts
    form: {
      fields: { name: string; email: string; need: string; message: string };
      optional: string;
      needPlaceholder: string;
      needOptions: Record<Need, string>;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
```

Y después del bloque `contact` (antes de `footer`), agregar:

```ts
  formErrors: Record<FieldError, string>;
```

- [ ] **Step 2: Copy en español (`es.ts`)**

En `contact`, después de `linkedinLabel`:

```ts
    form: {
      fields: {
        name: "Nombre",
        email: "Email",
        need: "¿Qué querés resolver?",
        message: "Mensaje",
      },
      optional: "(opcional)",
      needPlaceholder: "Elegí una opción",
      needOptions: {
        processes: "Ordenar procesos",
        software: "Construir software",
        ai: "Aplicar IA",
        "ai-rescue": "Rescatar un proyecto de IA",
        other: "Otro",
      },
      submit: "Enviar",
      sending: "Enviando…",
      success: "¡Gracias! Te respondo en menos de 48 horas hábiles.",
      error: "No pudimos enviar el mensaje. Probá de nuevo o escribime a pablo@nexuralabs.agency.",
    },
```

Después del bloque `contact`:

```ts
  formErrors: {
    required: "Completá este campo.",
    email: "Revisá el email.",
    choice: "Elegí una opción.",
    tooLong: "Es demasiado largo.",
    tooShort: "Es demasiado corto.",
  },
```

- [ ] **Step 3: Copy en inglés (`en.ts`)**

En `contact`, después de `linkedinLabel`:

```ts
    form: {
      fields: {
        name: "Name",
        email: "Email",
        need: "What do you want to solve?",
        message: "Message",
      },
      optional: "(optional)",
      needPlaceholder: "Choose one",
      needOptions: {
        processes: "Fix processes",
        software: "Build software",
        ai: "Apply AI",
        "ai-rescue": "Rescue an AI project",
        other: "Something else",
      },
      submit: "Send",
      sending: "Sending…",
      success: "Thanks! I'll get back to you within 2 business days.",
      error: "We couldn't send your message. Try again or email me at pablo@nexuralabs.agency.",
    },
```

Después del bloque `contact`:

```ts
  formErrors: {
    required: "Please fill in this field.",
    email: "Please check your email.",
    choice: "Please choose one.",
    tooLong: "That's too long.",
    tooShort: "That's too short.",
  },
```

- [ ] **Step 4: Crear `components/forms/useFormSubmit.ts`**

```ts
"use client";

import { useEffect, useRef, useState } from "react";

export type SubmitStatus = "idle" | "sending" | "success" | "error";

/**
 * Envía un formulario como JSON a `endpoint` y expone su estado.
 * Agrega `elapsedMs` (tiempo desde el montaje) para el filtro anti-bots del servidor.
 * `onSuccess` queda para conectar los eventos de medición (etapa E).
 */
export function useFormSubmit<TErrors>(
  endpoint: string,
  options: { onSuccess?: (payload: Record<string, unknown>) => void } = {},
) {
  const mountedAt = useRef(0);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [serverErrors, setServerErrors] = useState<TErrors | null>(null);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  async function submit(payload: Record<string, unknown>): Promise<void> {
    setStatus("sending");
    setServerErrors(null);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, elapsedMs: Date.now() - mountedAt.current }),
      });
      const json: { ok?: boolean; errors?: TErrors } = await response.json().catch(() => ({}));
      if (response.ok && json.ok) {
        setStatus("success");
        options.onSuccess?.(payload);
        return;
      }
      if (response.status === 400 && json.errors) {
        setServerErrors(json.errors);
        setStatus("idle");
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return { status, serverErrors, submit };
}
```

- [ ] **Step 5: Crear `components/forms/Field.tsx`**

```tsx
/** Label + control + error accesible. El control recibe `id`, `aria-invalid` y `aria-describedby` desde afuera. */
export function FieldShell({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-ink">
        {label}
        {hint && <span className="ml-1 font-normal text-muted">{hint}</span>}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-build">
          {error}
        </p>
      )}
    </div>
  );
}

export function inputClass(invalid: boolean): string {
  return [
    "block w-full rounded-lg bg-white px-3.5 py-2.5 text-base text-ink",
    "placeholder:text-muted focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/20",
    invalid ? "border-2 border-build" : "border border-ink/20",
  ].join(" ");
}
```

- [ ] **Step 6: Crear `components/ContactForm.tsx`**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { FieldShell, inputClass } from "@/components/forms/Field";
import { useFormSubmit } from "@/components/forms/useFormSubmit";
import {
  NEED_OPTIONS,
  validateContact,
  type ContactInput,
  type Errors,
} from "@/lib/forms/validate";

type Field = keyof ContactInput;

const FIELD_ORDER: Field[] = ["name", "email", "need", "message"];
const EMPTY: ContactInput = { name: "", email: "", need: "", message: "" };

export default function ContactForm() {
  const { dict, locale } = useLanguage();
  const f = dict.contact.form;
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<ContactInput>(EMPTY);
  const [errors, setErrors] = useState<Errors<ContactInput>>({});
  const [website, setWebsite] = useState("");
  const { status, serverErrors, submit } = useFormSubmit<Errors<ContactInput>>("/api/contact");

  useEffect(() => {
    if (serverErrors) {
      setErrors(serverErrors);
      focusFirstError(serverErrors);
    }
    // focusFirstError solo usa refs; no hace falta como dependencia.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverErrors]);

  function focusFirstError(errs: Errors<ContactInput>) {
    const first = FIELD_ORDER.find((field) => errs[field]);
    if (first) formRef.current?.querySelector<HTMLElement>(`#contact-${first}`)?.focus();
  }

  function revalidate(field: Field, next: ContactInput) {
    const result = validateContact(next);
    setErrors((prev) => ({ ...prev, [field]: result.ok ? undefined : result.errors[field] }));
  }

  function update(field: Field, value: string) {
    const next = { ...values, [field]: value };
    setValues(next);
    if (errors[field]) revalidate(field, next);
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = validateContact(values);
    if (!result.ok) {
      setErrors(result.errors);
      focusFirstError(result.errors);
      return;
    }
    setErrors({});
    await submit({ ...result.data, website, locale });
  }

  function a11y(field: Field) {
    const invalid = Boolean(errors[field]);
    return {
      id: `contact-${field}`,
      name: field,
      "aria-invalid": invalid || undefined,
      "aria-describedby": invalid ? `contact-${field}-error` : undefined,
      onBlur: () => errors[field] && revalidate(field, values),
    };
  }

  const errorText = (field: Field) => {
    const code = errors[field];
    return code ? dict.formErrors[code] : undefined;
  };

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl bg-white p-8 text-left shadow-card">
        <p className="text-lg font-semibold text-ink">{f.success}</p>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      aria-busy={sending}
      className="space-y-5 rounded-2xl bg-white p-6 text-left shadow-card sm:p-8"
    >
      <FieldShell id="contact-name" label={f.fields.name} error={errorText("name")}>
        <input
          {...a11y("name")}
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          className={inputClass(Boolean(errors.name))}
        />
      </FieldShell>

      <FieldShell id="contact-email" label={f.fields.email} error={errorText("email")}>
        <input
          {...a11y("email")}
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputClass(Boolean(errors.email))}
        />
      </FieldShell>

      <FieldShell id="contact-need" label={f.fields.need} error={errorText("need")}>
        <select
          {...a11y("need")}
          value={values.need}
          onChange={(e) => update("need", e.target.value)}
          className={inputClass(Boolean(errors.need))}
        >
          <option value="" disabled>
            {f.needPlaceholder}
          </option>
          {NEED_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {f.needOptions[option]}
            </option>
          ))}
        </select>
      </FieldShell>

      <FieldShell
        id="contact-message"
        label={f.fields.message}
        hint={f.optional}
        error={errorText("message")}
      >
        <textarea
          {...a11y("message")}
          rows={4}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className={inputClass(Boolean(errors.message))}
        />
      </FieldShell>

      {/* Honeypot: invisible para personas y lectores de pantalla; los bots suelen completarlo. */}
      <div aria-hidden="true" className="sr-only">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-build">
          {f.error}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="inline-flex w-full items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink-dark transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {sending ? f.sending : f.submit}
      </button>
    </form>
  );
}
```

- [ ] **Step 7: Reescribir el layout de `components/Contact.tsx`**

```tsx
"use client";

import { Mail, Linkedin } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import Kicker from "@/components/Kicker";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  const { dict } = useLanguage();

  return (
    <section id="contacto" className="bg-ink-dark py-20 sm:py-28">
      <div className="mx-auto grid max-w-site items-start gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <Kicker tone="dark" className="justify-center lg:justify-start">
            {dict.contact.kicker}
          </Kicker>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{dict.contact.title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/70 lg:mx-0">{dict.contact.body}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="mailto:pablo@nexuralabs.agency"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40"
            >
              <Mail size={18} aria-hidden="true" />
              {dict.contact.emailLabel}
            </a>
            <a
              href="https://www.linkedin.com/company/nexuralabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40"
            >
              <Linkedin size={18} aria-hidden="true" />
              {dict.contact.linkedinLabel}
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
```

(El botón de email pasa de dorado a borde blanco, para que el CTA dorado principal de la sección sea el "Enviar" del formulario.)

- [ ] **Step 8: Chequear tipos, tests y build**

Run: `npx tsc --noEmit && npm test && npm run build`
Expected: tsc sin salida, `ℹ fail 0` y el build OK, con `ƒ /api/contact` y `ƒ /api/checklist` en la tabla de rutas.

- [ ] **Step 9: Verificar el render con el servidor de desarrollo**

```bash
pkill -f "next dev.*-p 3200"; (npx next dev -p 3200 > /tmp/nexura-dev.log 2>&1 &) ; sleep 8
curl -s localhost:3200/ | grep -o 'id="contact-[a-z]*"' | sort -u
curl -s localhost:3200/en | grep -o "What do you want to solve?\|Something else\|Send<" | sort -u
pkill -f "next dev.*-p 3200"
```
Expected: los ids `contact-email`, `contact-message`, `contact-name`, `contact-need` y `contact-website`, y en `/en` las tres cadenas en inglés.

- [ ] **Step 10: Commit**

```bash
git checkout next-env.d.ts 2>/dev/null
git add lib/i18n components/forms components/ContactForm.tsx components/Contact.tsx
git commit -m "Add contact form to the contact section

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 5: Bloque del checklist en la home

**Files:**
- Modify: `lib/i18n/types.ts`, `es.ts`, `en.ts`, `components/HomePage.tsx`
- Create: `components/ChecklistOffer.tsx`

**Interfaces:**
- Consumes: `useFormSubmit`, `FieldShell`, `inputClass` (Task 4); `validateChecklist`, `ChecklistInput`, `Errors` (Task 1); `dict.formErrors` (Task 4); `POST /api/checklist` (Task 3); `Kicker` (`@/components/Kicker`)
- Produces: `<ChecklistOffer />` (sin props; la etapa D lo reutiliza en las landings) y `dict.checklist`

- [ ] **Step 1: Tipo**

En `lib/i18n/types.ts`, después de `formErrors`:

```ts
  checklist: {
    kicker: string;
    title: string;
    intro: string;
    fields: { email: string; company: string };
    submit: string;
    sending: string;
    /** Contiene el token {email}. */
    success: string;
    error: string;
  };
```

- [ ] **Step 2: Copy en español (`es.ts`)**, después de `formErrors`

```ts
  checklist: {
    kicker: "Recurso gratis",
    title: "Checklist: ¿tu operación está lista para IA?",
    intro: "Doce preguntas para revisar antes de invertir en IA. Te lo mandamos por email en PDF.",
    fields: { email: "Email", company: "Empresa" },
    submit: "Enviame el checklist",
    sending: "Enviando…",
    success: "Listo. Te lo enviamos a {email}. Si no lo ves en unos minutos, revisá spam.",
    error: "No pudimos enviarlo. Probá de nuevo en un rato.",
  },
```

- [ ] **Step 3: Copy en inglés (`en.ts`)**, después de `formErrors`

```ts
  checklist: {
    kicker: "Free resource",
    title: "Checklist: Is your operation ready for AI?",
    intro: "Twelve questions to go through before investing in AI. We'll email you the PDF.",
    fields: { email: "Email", company: "Company" },
    submit: "Send me the checklist",
    sending: "Sending…",
    success: "Done. We've sent it to {email}. If you don't see it in a few minutes, check your spam folder.",
    error: "We couldn't send it. Please try again shortly.",
  },
```

- [ ] **Step 4: Crear `components/ChecklistOffer.tsx`**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import Kicker from "@/components/Kicker";
import { FieldShell, inputClass } from "@/components/forms/Field";
import { useFormSubmit } from "@/components/forms/useFormSubmit";
import { validateChecklist, type ChecklistInput, type Errors } from "@/lib/forms/validate";

type Field = keyof ChecklistInput;

const FIELD_ORDER: Field[] = ["email", "company"];
const EMPTY: ChecklistInput = { email: "", company: "" };

export default function ChecklistOffer() {
  const { dict, locale } = useLanguage();
  const c = dict.checklist;
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<ChecklistInput>(EMPTY);
  const [errors, setErrors] = useState<Errors<ChecklistInput>>({});
  const [website, setWebsite] = useState("");
  const [sentTo, setSentTo] = useState("");
  const { status, serverErrors, submit } = useFormSubmit<Errors<ChecklistInput>>("/api/checklist");

  useEffect(() => {
    if (serverErrors) {
      setErrors(serverErrors);
      focusFirstError(serverErrors);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverErrors]);

  function focusFirstError(errs: Errors<ChecklistInput>) {
    const first = FIELD_ORDER.find((field) => errs[field]);
    if (first) formRef.current?.querySelector<HTMLElement>(`#checklist-${first}`)?.focus();
  }

  function revalidate(field: Field, next: ChecklistInput) {
    const result = validateChecklist(next);
    setErrors((prev) => ({ ...prev, [field]: result.ok ? undefined : result.errors[field] }));
  }

  function update(field: Field, value: string) {
    const next = { ...values, [field]: value };
    setValues(next);
    if (errors[field]) revalidate(field, next);
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = validateChecklist(values);
    if (!result.ok) {
      setErrors(result.errors);
      focusFirstError(result.errors);
      return;
    }
    setErrors({});
    setSentTo(result.data.email);
    await submit({ ...result.data, website, locale });
  }

  function a11y(field: Field) {
    const invalid = Boolean(errors[field]);
    return {
      id: `checklist-${field}`,
      name: field,
      "aria-invalid": invalid || undefined,
      "aria-describedby": invalid ? `checklist-${field}-error` : undefined,
      onBlur: () => errors[field] && revalidate(field, values),
    };
  }

  const errorText = (field: Field) => {
    const code = errors[field];
    return code ? dict.formErrors[code] : undefined;
  };

  const sending = status === "sending";

  return (
    <section id="checklist" className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <div className="grid gap-10 rounded-2xl bg-white p-8 shadow-card sm:p-10 md:grid-cols-2 md:items-center">
          <div>
            <Kicker>{c.kicker}</Kicker>
            <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">{c.title}</h2>
            <p className="mt-4 text-base text-muted">{c.intro}</p>
          </div>

          {status === "success" ? (
            <p role="status" className="text-lg font-semibold text-ink">
              {c.success.replace("{email}", sentTo)}
            </p>
          ) : (
            <form ref={formRef} onSubmit={onSubmit} noValidate aria-busy={sending} className="space-y-5">
              <FieldShell id="checklist-email" label={c.fields.email} error={errorText("email")}>
                <input
                  {...a11y("email")}
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={inputClass(Boolean(errors.email))}
                />
              </FieldShell>

              <FieldShell id="checklist-company" label={c.fields.company} error={errorText("company")}>
                <input
                  {...a11y("company")}
                  type="text"
                  autoComplete="organization"
                  value={values.company}
                  onChange={(e) => update("company", e.target.value)}
                  className={inputClass(Boolean(errors.company))}
                />
              </FieldShell>

              <div aria-hidden="true" className="sr-only">
                <label htmlFor="checklist-website">Website</label>
                <input
                  id="checklist-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              {status === "error" && (
                <p role="alert" className="text-sm font-medium text-build">
                  {c.error}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-canvas transition-colors hover:bg-ink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {sending ? c.sending : c.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Montarlo en `components/HomePage.tsx`**

Agregar el import `import ChecklistOffer from "@/components/ChecklistOffer";` y montarlo entre `<CaseStudies />` y `<About />`:

```tsx
      <CaseStudies />
      <ChecklistOffer />
      <About />
```

- [ ] **Step 6: Chequear tipos, tests y build**

Run: `npx tsc --noEmit && npm test && npm run build`
Expected: sin errores.

- [ ] **Step 7: Verificar el render**

```bash
pkill -f "next dev.*-p 3200"; (npx next dev -p 3200 > /tmp/nexura-dev.log 2>&1 &) ; sleep 8
curl -s localhost:3200/ | grep -o 'id="checklist[a-z-]*"' | sort -u
curl -s localhost:3200/en | grep -o "Is your operation ready for AI?\|Send me the checklist" | sort -u
pkill -f "next dev.*-p 3200"
```
Expected: `id="checklist"`, `id="checklist-company"`, `id="checklist-email"` e `id="checklist-website"`, y las dos cadenas en inglés.

- [ ] **Step 8: Commit**

```bash
git checkout next-env.d.ts 2>/dev/null
git add lib/i18n components/ChecklistOffer.tsx components/HomePage.tsx
git commit -m "Add checklist offer block to the home page

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 6: Contenido del checklist, PDFs y documentación

**Files:**
- Modify: `package.json` / `package-lock.json` (con `npm install -D pdfkit@^0.20.2`, script `build:checklist`), `README.md`
- Create: `content/checklist.json`, `scripts/build-checklist-pdf.mjs`, `public/downloads/checklist-ia-es.pdf`, `public/downloads/checklist-ia-en.pdf`

**Interfaces:**
- Produces: los PDF en `/downloads/checklist-ia-{es,en}.pdf`. Coinciden con `checklistPdfPath` de la Task 2.

- [ ] **Step 1: Instalar pdfkit y agregar el script**

Run: `npm install -D pdfkit@^0.20.2`

En `package.json` → `scripts`, después de `"test"`:

```json
    "build:checklist": "node scripts/build-checklist-pdf.mjs"
```

- [ ] **Step 2: Crear `content/checklist.json`**

```json
{
  "es": {
    "title": "Checklist: ¿tu operación está lista para IA?",
    "intro": "Si respondés «no» a varias, probablemente el primer paso no sea la IA sino ordenar el proceso. Eso también es avanzar.",
    "groups": [
      {
        "name": "Proceso",
        "questions": [
          "¿Podés describir el proceso que querés mejorar, paso a paso y de punta a punta?",
          "¿Sabés cuánto tiempo o dinero consume hoy, aunque sea aproximado?",
          "¿El proceso se hace igual cada vez, o depende de quién lo haga?"
        ]
      },
      {
        "name": "Datos",
        "questions": [
          "¿La información que usa ese proceso está escrita en algún lado (sistemas, documentos, manuales) y no solo en la cabeza de alguien?",
          "¿Podés acceder a esos datos sin pedir favores ni copiar a mano?",
          "¿Sabés qué datos son sensibles y quién puede verlos?"
        ]
      },
      {
        "name": "Equipo",
        "questions": [
          "¿Hay una persona responsable del proceso que pueda decir si una solución realmente funciona?",
          "¿El equipo que lo va a usar participa desde el principio?"
        ]
      },
      {
        "name": "Negocio",
        "questions": [
          "¿Tenés claro qué cambiaría si el proceso funcionara mejor (tiempos de respuesta, errores, ventas)?",
          "¿Definiste cómo vas a medir si funcionó?",
          "¿Tenés presupuesto para operar la solución todos los meses, no solo para construirla?"
        ]
      },
      {
        "name": "Riesgo",
        "questions": [
          "¿Sabés qué pasa si la IA se equivoca, y quién revisa los casos dudosos?"
        ]
      }
    ],
    "closing": "¿Más de tres «no»? Empecemos por un diagnóstico. Escribime: pablo@nexuralabs.agency · nexuralabs.agency"
  },
  "en": {
    "title": "Checklist: Is your operation ready for AI?",
    "intro": "If you answer “no” to several, the first step probably isn't AI but getting the process in order. That counts as progress too.",
    "groups": [
      {
        "name": "Process",
        "questions": [
          "Can you describe the process you want to improve, step by step, end to end?",
          "Do you know roughly how much time or money it takes today?",
          "Is it done the same way every time, or does it depend on who's doing it?"
        ]
      },
      {
        "name": "Data",
        "questions": [
          "Is the information it relies on written down somewhere (systems, documents, manuals), not just in someone's head?",
          "Can you get to that data without asking for favors or copying it by hand?",
          "Do you know which data is sensitive and who's allowed to see it?"
        ]
      },
      {
        "name": "Team",
        "questions": [
          "Is there someone who owns the process and can tell whether a solution actually works?",
          "Is the team that will use it involved from the start?"
        ]
      },
      {
        "name": "Business",
        "questions": [
          "Are you clear on what would change if the process worked better (response times, errors, sales)?",
          "Have you decided how you'll measure whether it worked?",
          "Do you have a monthly budget to run the solution, not just to build it?"
        ]
      },
      {
        "name": "Risk",
        "questions": [
          "Do you know what happens when the AI gets it wrong, and who reviews the unclear cases?"
        ]
      }
    ],
    "closing": "More than three “no”s? Let's start with a diagnosis. Write to me: pablo@nexuralabs.agency · nexuralabs.agency"
  }
}
```

- [ ] **Step 3: Crear `scripts/build-checklist-pdf.mjs`**

```js
// Genera public/downloads/checklist-ia-{es,en}.pdf a partir de content/checklist.json.
// Uso: npm run build:checklist (volver a correrlo si cambia el contenido).
import PDFDocument from "pdfkit";
import { createWriteStream, mkdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const content = JSON.parse(readFileSync(path.join(root, "content/checklist.json"), "utf8"));
const outDir = path.join(root, "public/downloads");
mkdirSync(outDir, { recursive: true });

const COLORS = { inkDark: "#0F1B2D", ink: "#16233A", muted: "#5B6472", gold: "#AD8A52" };
const MARGIN = 56;
const HEADER_HEIGHT = 72;
const BOX = 10;

function build(locale) {
  const c = content[locale];
  const file = path.join(outDir, `checklist-ia-${locale}.pdf`);
  const doc = new PDFDocument({
    size: "A4",
    margin: MARGIN,
    info: { Title: c.title, Author: "Nexura Labs" },
  });
  const done = new Promise((resolve, reject) => {
    const stream = createWriteStream(file);
    stream.on("finish", resolve);
    stream.on("error", reject);
    doc.pipe(stream);
  });
  const width = doc.page.width - MARGIN * 2;

  // Franja de marca.
  doc.rect(0, 0, doc.page.width, HEADER_HEIGHT).fill(COLORS.inkDark);
  doc
    .font("Helvetica-Bold")
    .fontSize(16)
    .fillColor("#FFFFFF")
    .text("NEXURA", MARGIN, 28, { continued: true })
    .fillColor(COLORS.gold)
    .text("LABS");

  // Título e intro.
  doc.font("Helvetica-Bold").fontSize(22).fillColor(COLORS.ink).text(c.title, MARGIN, HEADER_HEIGHT + 40, { width });
  doc.moveDown(0.6);
  doc.font("Helvetica").fontSize(11).fillColor(COLORS.muted).text(c.intro, { width, lineGap: 2 });

  // Grupos y preguntas con casilla.
  for (const group of c.groups) {
    doc.moveDown(1.2);
    const y = doc.y;
    doc.rect(MARGIN, y + 5, 18, 2).fill(COLORS.gold);
    doc.font("Helvetica-Bold").fontSize(12).fillColor(COLORS.ink).text(group.name.toUpperCase(), MARGIN + 26, y, {
      width: width - 26,
      characterSpacing: 0.6,
    });
    doc.moveDown(0.5);
    for (const question of group.questions) {
      const qy = doc.y;
      doc.lineWidth(1).strokeColor(COLORS.ink).rect(MARGIN, qy + 1.5, BOX, BOX).stroke();
      doc.font("Helvetica").fontSize(11).fillColor(COLORS.ink).text(question, MARGIN + 22, qy, {
        width: width - 22,
        lineGap: 2,
      });
      doc.moveDown(0.45);
    }
  }

  // Cierre.
  doc.moveDown(1);
  const ly = doc.y;
  doc.moveTo(MARGIN, ly).lineTo(MARGIN + width, ly).lineWidth(0.5).strokeColor(COLORS.muted).stroke();
  doc.moveDown(0.8);
  doc.font("Helvetica-Bold").fontSize(11).fillColor(COLORS.ink).text(c.closing, MARGIN, doc.y, { width, lineGap: 2 });

  doc.end();
  return done.then(() => file);
}

for (const locale of ["es", "en"]) {
  console.log("wrote", path.relative(root, await build(locale)));
}
```

- [ ] **Step 4: Generar los PDF y verificarlos**

Run: `npm run build:checklist`
Expected: las líneas `wrote public/downloads/checklist-ia-es.pdf` y `wrote public/downloads/checklist-ia-en.pdf`.

```bash
file public/downloads/*.pdf
for f in public/downloads/*.pdf; do python3 -c "import re,sys;print(sys.argv[1], len(re.findall(rb'/Type /Page[^s]', open(sys.argv[1],'rb').read())))" "$f"; done
```
Expected: los dos son `PDF document`, y el conteo de páginas da 1 en cada uno. Si da más, reportarlo en lugar de achicar el contenido. El controlador revisa los PDF visualmente.

- [ ] **Step 5: Documentar en `README.md`**

Agregar al final del archivo:

````markdown
## Formularios y emails

- `/api/contact` (formulario de contacto) y `/api/checklist` (checklist descargable) envían emails con [Resend](https://resend.com).
- Variables de entorno (ver `.env.example`): `RESEND_API_KEY` (obligatoria en producción), `MAIL_FROM`, `MAIL_TO`.
- En desarrollo, sin `RESEND_API_KEY`, los emails se imprimen en la consola del servidor en vez de enviarse.
- Anti-spam: campo honeypot `website` y rechazo de envíos en menos de 2 segundos (`lib/forms/spam.ts`).

## Checklist en PDF

El contenido vive en `content/checklist.json` (ES/EN). Después de editarlo:

```bash
npm run build:checklist   # regenera public/downloads/checklist-ia-{es,en}.pdf
```
````

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json content/checklist.json scripts/build-checklist-pdf.mjs public/downloads README.md
git commit -m "Add AI readiness checklist content and generated PDFs

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```
