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
