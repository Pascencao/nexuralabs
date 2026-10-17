/** Opciones del select "¿Qué querés resolver?" (ids estables; las etiquetas viven en el diccionario). */
export const NEED_OPTIONS = [
  "processes",
  "software",
  "ai",
  "ai-rescue",
  "rigi-supplier",
  "rigi-company",
  "other",
] as const;
export type Need = (typeof NEED_OPTIONS)[number];

export type FieldError =
  | "required"
  | "email"
  | "choice"
  | "tooLong"
  | "tooShort"
  | "phone"
  | "consent";

/** Formularios de las landings RIGI. El valor viaja en el campo oculto `origen`. */
export const RIGI_ORIGINS = ["rigi-proveedores", "rigi-empresas"] as const;
export type RigiOrigin = (typeof RIGI_ORIGINS)[number];

export const SUPPLIER_SECTORS = [
  "capital-goods",
  "metalworking",
  "logistics",
  "engineering",
  "construction",
  "specialized-services",
  "other",
] as const;
export type SupplierSector = (typeof SUPPLIER_SECTORS)[number];

export const CONTACT_CHANNELS = ["whatsapp", "email", "call"] as const;
export type ContactChannel = (typeof CONTACT_CHANNELS)[number];

export const SYSTEM_OPTIONS = [
  "erp",
  "fleet",
  "plant",
  "hr",
  "logistics",
  "docs",
  "unsure",
] as const;
export type SystemOption = (typeof SYSTEM_OPTIONS)[number];

export const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign"] as const;
export type Utm = Partial<Record<(typeof UTM_KEYS)[number], string>>;

/** Campos comunes a los dos formularios RIGI. `privacy` es el checkbox de la política. */
type RigiBase = {
  name: string;
  company: string;
  role: string;
  email: string;
  privacy: boolean;
};
export type SupplierLeadInput = RigiBase & { phone: string; sector: string; channel: string };
export type CompanyLeadInput = RigiBase & { systems: string[]; goal: string };

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

/** Admite +, espacios, guiones y paréntesis; pide al menos 6 dígitos. */
function checkPhone(value: string): FieldError | undefined {
  if (!value) return "required";
  if (value.length > 30) return "tooLong";
  const digits = value.replace(/\D/g, "").length;
  return /^\+?[\d\s()-]+$/.test(value) && digits >= 6 && digits <= 15 ? undefined : "phone";
}

function checkChoice(value: string, options: readonly string[]): FieldError | undefined {
  return options.includes(value) ? undefined : "choice";
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

function rigiBase(raw: Record<string, unknown>): { data: RigiBase; errors: Errors<RigiBase> } {
  const data: RigiBase = {
    name: text(raw.name),
    company: text(raw.company),
    role: text(raw.role),
    email: text(raw.email),
    privacy: raw.privacy === true,
  };
  return {
    data,
    errors: {
      name: checkLength(data.name, { min: 2, max: 100, required: true }),
      company: checkLength(data.company, { min: 2, max: 120, required: true }),
      role: checkLength(data.role, { min: 2, max: 100, required: true }),
      email: checkEmail(data.email),
      privacy: data.privacy ? undefined : "consent",
    },
  };
}

export function validateSupplierLead(raw: Record<string, unknown>): ValidationResult<SupplierLeadInput> {
  const base = rigiBase(raw);
  const data: SupplierLeadInput = {
    ...base.data,
    phone: text(raw.phone),
    sector: text(raw.sector),
    channel: text(raw.channel),
  };
  return result(data, {
    ...base.errors,
    phone: checkPhone(data.phone),
    sector: checkChoice(data.sector, SUPPLIER_SECTORS),
    channel: checkChoice(data.channel, CONTACT_CHANNELS),
  });
}

export function validateCompanyLead(raw: Record<string, unknown>): ValidationResult<CompanyLeadInput> {
  const base = rigiBase(raw);
  const systems = Array.isArray(raw.systems)
    ? Array.from(new Set(raw.systems.filter((v): v is string => typeof v === "string")))
    : [];
  const data: CompanyLeadInput = { ...base.data, systems, goal: text(raw.goal) };
  const systemsOk =
    systems.length > 0 && systems.every((v) => (SYSTEM_OPTIONS as readonly string[]).includes(v));
  return result(data, {
    ...base.errors,
    systems: systemsOk ? undefined : "choice",
    goal: checkLength(data.goal, { min: 2, max: 2000, required: true }),
  });
}

/** UTM opcionales: solo strings, sin caracteres de control y con tope de largo. Nunca dan error. */
export function cleanUtm(raw: unknown): Utm {
  if (!raw || typeof raw !== "object") return {};
  const source = raw as Record<string, unknown>;
  const utm: Utm = {};
  for (const key of UTM_KEYS) {
    const value = text(source[key]).replace(/[\u0000-\u001f\u007f]/g, "").slice(0, 100);
    if (value) utm[key] = value;
  }
  return utm;
}
