"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { FieldShell, inputClass } from "@/components/forms/Field";
import { useFormSubmit } from "@/components/forms/useFormSubmit";
import { track } from "@/lib/analytics/track";
import { ROUTES } from "@/lib/i18n/routes";
import {
  CONTACT_CHANNELS,
  SUPPLIER_SECTORS,
  SYSTEM_OPTIONS,
  UTM_KEYS,
  validateCompanyLead,
  validateSupplierLead,
  type FieldError,
  type RigiOrigin,
  type Utm,
} from "@/lib/forms/validate";

type Values = {
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  sector: string;
  channel: string;
  systems: string[];
  goal: string;
  privacy: boolean;
};
type Field = keyof Values;
type FormErrors = Partial<Record<Field, FieldError>>;

const EMPTY: Values = {
  name: "",
  company: "",
  role: "",
  email: "",
  phone: "",
  sector: "",
  channel: "",
  systems: [],
  goal: "",
  privacy: false,
};

const FIELD_ORDER: Record<RigiOrigin, Field[]> = {
  "rigi-proveedores": ["name", "company", "role", "email", "phone", "sector", "channel", "privacy"],
  "rigi-empresas": ["name", "company", "role", "email", "phone", "systems", "goal", "privacy"],
};

function validate(origin: RigiOrigin, values: Values) {
  return origin === "rigi-proveedores"
    ? validateSupplierLead(values)
    : validateCompanyLead(values);
}

/** Lee utm_source, utm_medium y utm_campaign de la URL actual. */
function readUtm(): Utm {
  const params = new URLSearchParams(window.location.search);
  const utm: Utm = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key)?.trim();
    if (value) utm[key] = value.slice(0, 100);
  }
  return utm;
}

/**
 * Formulario de las landings RIGI. Envía a /api/contact (mismo destino que el de la home)
 * con el campo oculto `origen` y las UTM de la URL.
 */
export default function RigiLeadForm({
  origin,
  submitLabel,
  successMessage,
}: {
  origin: RigiOrigin;
  submitLabel: string;
  successMessage: string;
}) {
  const { dict, locale } = useLanguage();
  const f = dict.rigiForm;
  const isSupplier = origin === "rigi-proveedores";
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [website, setWebsite] = useState("");
  const [utm, setUtm] = useState<Utm>({});
  const { status, serverErrors, submit } = useFormSubmit<FormErrors>("/api/contact", {
    onSuccess: () => track({ name: "form_submit", need: origin }),
  });

  useEffect(() => {
    setUtm(readUtm());
  }, []);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  useEffect(() => {
    if (serverErrors) {
      setErrors(serverErrors);
      focusFirstError(serverErrors);
    }
    // focusFirstError solo usa refs; no hace falta como dependencia.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverErrors]);

  function focusFirstError(errs: FormErrors) {
    const first = FIELD_ORDER[origin].find((field) => errs[field]);
    if (first) formRef.current?.querySelector<HTMLElement>(`#rigi-${first}`)?.focus();
  }

  function revalidate(field: Field, next: Values) {
    const result = validate(origin, next);
    const nextError = result.ok ? undefined : (result.errors as FormErrors)[field];
    setErrors((prev) => ({ ...prev, [field]: nextError }));
  }

  function update<K extends Field>(field: K, value: Values[K]) {
    const next = { ...values, [field]: value };
    setValues(next);
    if (errors[field]) revalidate(field, next);
  }

  function toggleSystem(option: string, checked: boolean) {
    const systems = checked
      ? [...values.systems, option]
      : values.systems.filter((v) => v !== option);
    update("systems", systems);
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = validate(origin, values);
    if (!result.ok) {
      setErrors(result.errors as FormErrors);
      focusFirstError(result.errors as FormErrors);
      return;
    }
    setErrors({});
    await submit({ ...result.data, origen: origin, utm, website, locale });
  }

  function a11y(field: Field) {
    const invalid = Boolean(errors[field]);
    return {
      id: `rigi-${field}`,
      name: field,
      "aria-invalid": invalid || undefined,
      "aria-describedby": invalid ? `rigi-${field}-error` : undefined,
      onBlur: () => errors[field] && revalidate(field, values),
    };
  }

  const errorText = (field: Field) => {
    const code = errors[field];
    return code ? dict.formErrors[code] : undefined;
  };

  if (status === "success") {
    return (
      <div
        ref={successRef}
        role="status"
        tabIndex={-1}
        className="rounded-2xl bg-white p-8 text-left shadow-card focus:outline-none"
      >
        <p className="text-lg font-semibold text-ink">{successMessage}</p>
      </div>
    );
  }

  const sending = status === "sending";
  const textInput = (field: "name" | "company" | "role" | "email" | "phone", label: string, extra: React.InputHTMLAttributes<HTMLInputElement>) => (
    <FieldShell id={`rigi-${field}`} label={label} error={errorText(field)}>
      <input
        {...a11y(field)}
        {...extra}
        value={values[field]}
        onChange={(e) => update(field, e.target.value)}
        className={inputClass(Boolean(errors[field]))}
      />
    </FieldShell>
  );

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      aria-busy={sending}
      className="space-y-5 rounded-2xl bg-white p-6 text-left shadow-card sm:p-8"
    >
      <input type="hidden" name="origen" value={origin} />

      <div className="grid gap-5 sm:grid-cols-2">
        {textInput("name", f.fields.name, { type: "text", autoComplete: "name" })}
        {textInput("company", isSupplier ? f.fields.company : f.fields.companyOrProject, {
          type: "text",
          autoComplete: "organization",
        })}
        {textInput("role", f.fields.role, { type: "text", autoComplete: "organization-title" })}
        {textInput("email", isSupplier ? f.fields.workEmail : f.fields.email, {
          type: "email",
          autoComplete: "email",
        })}
        {textInput("phone", isSupplier ? f.fields.phoneWhatsapp : f.fields.phone, {
          type: "tel",
          autoComplete: "tel",
          inputMode: "tel",
        })}

        {isSupplier && (
          <FieldShell id="rigi-sector" label={f.fields.sector} error={errorText("sector")}>
            <select
              {...a11y("sector")}
              value={values.sector}
              onChange={(e) => update("sector", e.target.value)}
              className={inputClass(Boolean(errors.sector))}
            >
              <option value="" disabled>
                {f.sectorPlaceholder}
              </option>
              {SUPPLIER_SECTORS.map((option) => (
                <option key={option} value={option}>
                  {f.sectorOptions[option]}
                </option>
              ))}
            </select>
          </FieldShell>
        )}
      </div>

      {isSupplier ? (
        <ChoiceGroup
          field="channel"
          legend={f.fields.channel}
          error={errorText("channel")}
        >
          {CONTACT_CHANNELS.map((option, i) => (
            <ChoiceInput
              key={option}
              type="radio"
              field="channel"
              option={option}
              first={i === 0}
              invalid={Boolean(errors.channel)}
              checked={values.channel === option}
              onChange={() => update("channel", option)}
              label={f.channelOptions[option]}
            />
          ))}
        </ChoiceGroup>
      ) : (
        <>
          <ChoiceGroup field="systems" legend={f.fields.systems} error={errorText("systems")}>
            {SYSTEM_OPTIONS.map((option, i) => (
              <ChoiceInput
                key={option}
                type="checkbox"
                field="systems"
                option={option}
                first={i === 0}
                invalid={Boolean(errors.systems)}
                checked={values.systems.includes(option)}
                onChange={(checked) => toggleSystem(option, checked)}
                label={f.systemOptions[option]}
              />
            ))}
          </ChoiceGroup>

          <FieldShell id="rigi-goal" label={f.fields.goal} error={errorText("goal")}>
            <textarea
              {...a11y("goal")}
              rows={4}
              value={values.goal}
              onChange={(e) => update("goal", e.target.value)}
              className={inputClass(Boolean(errors.goal))}
            />
          </FieldShell>
        </>
      )}

      <div>
        <label htmlFor="rigi-privacy" className="flex items-start gap-3 text-sm text-ink">
          <input
            id="rigi-privacy"
            name="privacy"
            type="checkbox"
            checked={values.privacy}
            onChange={(e) => update("privacy", e.target.checked)}
            aria-invalid={Boolean(errors.privacy) || undefined}
            aria-describedby={errors.privacy ? "rigi-privacy-error" : undefined}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-ink/30 text-ink focus:ring-2 focus:ring-ink/20"
          />
          <span>
            {f.privacy.before}
            <a
              href={ROUTES.privacy[locale]}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-4 hover:text-gold"
            >
              {f.privacy.link}
            </a>
            {f.privacy.after}
          </span>
        </label>
        {errors.privacy && (
          <p id="rigi-privacy-error" className="mt-1.5 text-sm font-medium text-build">
            {errorText("privacy")}
          </p>
        )}
      </div>

      {/* Honeypot: invisible para personas y lectores de pantalla; los bots suelen completarlo. */}
      <div aria-hidden="true" className="sr-only">
        <label htmlFor="rigi-website">Website</label>
        <input
          id="rigi-website"
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
        {sending ? f.sending : submitLabel}
      </button>
    </form>
  );
}

function ChoiceGroup({
  field,
  legend,
  error,
  children,
}: {
  field: Field;
  legend: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-ink">{legend}</legend>
      <div className="mt-2 flex flex-wrap gap-2">{children}</div>
      {error && (
        <p id={`rigi-${field}-error`} className="mt-1.5 text-sm font-medium text-build">
          {error}
        </p>
      )}
    </fieldset>
  );
}

/** Opción de radio/checkbox con forma de "pill". La primera lleva el id del campo, para recibir el foco ante un error. */
function ChoiceInput({
  type,
  field,
  option,
  first,
  invalid,
  checked,
  onChange,
  label,
}: {
  type: "radio" | "checkbox";
  field: Field;
  option: string;
  first: boolean;
  invalid: boolean;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}) {
  const id = first ? `rigi-${field}` : `rigi-${field}-${option}`;
  return (
    <label
      htmlFor={id}
      className={`flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ink/30 ${
        checked ? "border-ink bg-ink text-canvas" : invalid ? "border-build text-ink" : "border-ink/20 text-ink hover:border-ink/40"
      }`}
    >
      <input
        id={id}
        type={type}
        name={field}
        value={option}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        aria-invalid={invalid || undefined}
        aria-describedby={invalid ? `rigi-${field}-error` : undefined}
        className="sr-only"
      />
      {label}
    </label>
  );
}
