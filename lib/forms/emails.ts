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
