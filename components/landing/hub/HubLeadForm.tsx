"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useFormSubmit } from "@/components/forms/useFormSubmit";
import { ArrowIcon } from "@/components/landing/hub/ui";
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
  "rigi-empresas": ["name", "company", "role", "email", "systems", "goal", "privacy"],
};

const ERROR_TEXT = "text-[#B42318]";
const LABEL = "flex flex-col gap-1.5 text-[13px] font-semibold text-hub-ink";
const CONTROL =
  "w-full rounded-[10px] border bg-white px-3.5 py-3 font-plex text-[15px] font-normal text-hub-ink min-h-[46px] focus:border-hub-ink focus:outline-none focus:ring-2 focus:ring-[rgba(10,14,20,.2)]";

function controlClass(invalid: boolean) {
  return `${CONTROL} ${invalid ? "border-2 border-[#B42318]" : "border-[#C9CDD3]"}`;
}

function chipClass(on: boolean, invalid: boolean) {
  return `inline-flex min-h-[44px] cursor-pointer items-center rounded-full border px-4 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hub-amber-ink focus-visible:ring-offset-2 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-hub-amber-ink has-[:focus-visible]:ring-offset-2 ${
    on
      ? "border-hub-ink bg-hub-ink text-white"
      : invalid
        ? "border-[#B42318] bg-white text-[#2A3240]"
        : "border-[#C9CDD3] bg-white text-[#2A3240] hover:border-hub-ink"
  }`;
}

function validate(origin: RigiOrigin, values: Values) {
  return origin === "rigi-proveedores" ? validateSupplierLead(values) : validateCompanyLead(values);
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
export default function HubLeadForm({
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

  function toggleSystem(option: string) {
    const on = values.systems.includes(option);
    update("systems", on ? values.systems.filter((v) => v !== option) : [...values.systems, option]);
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

  function renderError(field: Field) {
    const code = errors[field];
    if (!code) return null;
    return (
      <span id={`rigi-${field}-error`} className={`text-[13px] font-medium ${ERROR_TEXT}`}>
        {dict.formErrors[code]}
      </span>
    );
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        role="status"
        tabIndex={-1}
        className="rounded-3xl bg-white p-9 text-hub-ink shadow-[0_40px_100px_rgba(0,0,0,.45)] focus:outline-none"
      >
        <p className="m-0 font-display text-2xl font-bold">{successMessage}</p>
      </div>
    );
  }

  const sending = status === "sending";
  const textField = (
    field: "name" | "company" | "role" | "email" | "phone",
    label: string,
    attrs: React.InputHTMLAttributes<HTMLInputElement>,
  ) => (
    <div className="flex flex-col gap-1.5">
      <label className={LABEL}>
        {label}
        <input
          {...a11y(field)}
          {...attrs}
          value={values[field]}
          onChange={(e) => update(field, e.target.value)}
          className={controlClass(Boolean(errors[field]))}
        />
      </label>
      {renderError(field)}
    </div>
  );

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      aria-busy={sending}
      className="flex flex-col gap-5 rounded-3xl bg-white p-6 text-hub-ink shadow-[0_40px_100px_rgba(0,0,0,.45)] sm:p-9"
    >
      <input type="hidden" name="origen" value={origin} />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
        {textField("name", f.fields.name, { type: "text", autoComplete: "name" })}
        {textField("company", f.fields.company, { type: "text", autoComplete: "organization" })}
        {textField("role", f.fields.role, { type: "text", autoComplete: "organization-title" })}
        {textField("email", isSupplier ? f.fields.workEmail : f.fields.email, {
          type: "email",
          autoComplete: "email",
        })}
        {isSupplier &&
          textField("phone", f.fields.phoneWhatsapp, { type: "tel", autoComplete: "tel", inputMode: "tel" })}
        {isSupplier && (
          <div className="flex flex-col gap-1.5">
          <label className={LABEL}>
            {f.fields.sector}
            <select
              {...a11y("sector")}
              value={values.sector}
              onChange={(e) => update("sector", e.target.value)}
              className={controlClass(Boolean(errors.sector))}
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
          </label>
          {renderError("sector")}
          </div>
        )}
      </div>

      {isSupplier ? (
        <fieldset className="m-0 flex flex-col gap-2.5 border-0 p-0">
          <legend className="mb-2.5 p-0 text-[13px] font-semibold">{f.fields.channel}</legend>
          <div className="flex flex-wrap gap-2">
            {CONTACT_CHANNELS.map((option, i) => {
              const id = i === 0 ? "rigi-channel" : `rigi-channel-${option}`;
              const on = values.channel === option;
              return (
                <label key={option} htmlFor={id} className={chipClass(on, Boolean(errors.channel))}>
                  <input
                    id={id}
                    type="radio"
                    name="channel"
                    value={option}
                    checked={on}
                    onChange={() => update("channel", option)}
                    aria-invalid={Boolean(errors.channel) || undefined}
                    aria-describedby={errors.channel ? "rigi-channel-error" : undefined}
                    className="sr-only"
                  />
                  {f.channelOptions[option]}
                </label>
              );
            })}
          </div>
          {renderError("channel")}
        </fieldset>
      ) : (
        <>
          <fieldset className="m-0 flex flex-col gap-2.5 border-0 p-0">
            <legend className="mb-2.5 p-0 text-[13px] font-semibold">{f.fields.systems}</legend>
            <div className="flex flex-wrap gap-2">
              {SYSTEM_OPTIONS.map((option, i) => {
                const on = values.systems.includes(option);
                return (
                  <button
                    key={option}
                    id={i === 0 ? "rigi-systems" : undefined}
                    type="button"
                    aria-pressed={on}
                    aria-describedby={errors.systems ? "rigi-systems-error" : undefined}
                    onClick={() => toggleSystem(option)}
                    className={chipClass(on, Boolean(errors.systems))}
                  >
                    {f.systemOptions[option]}
                  </button>
                );
              })}
            </div>
            {renderError("systems")}
          </fieldset>

          <div className="flex flex-col gap-1.5">
          <label className={LABEL}>
            {f.fields.goal}
            <textarea
              {...a11y("goal")}
              rows={4}
              value={values.goal}
              onChange={(e) => update("goal", e.target.value)}
              className={`${controlClass(Boolean(errors.goal))} resize-y`}
            />
          </label>
          {renderError("goal")}
          </div>
        </>
      )}

      <div className="flex flex-col gap-1">
        <label htmlFor="rigi-privacy" className="flex min-h-[44px] items-center gap-2.5 text-sm text-hub-paper-muted">
          <input
            id="rigi-privacy"
            name="privacy"
            type="checkbox"
            checked={values.privacy}
            onChange={(e) => update("privacy", e.target.checked)}
            aria-invalid={Boolean(errors.privacy) || undefined}
            aria-describedby={errors.privacy ? "rigi-privacy-error" : undefined}
            className="h-5 w-5 shrink-0 rounded border-[#C9CDD3] text-hub-ink focus:ring-2 focus:ring-[rgba(10,14,20,.2)]"
          />
          <span>
            {f.privacy.before}
            <a
              href={ROUTES.privacy[locale]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-hub-amber-ink underline underline-offset-4"
            >
              {f.privacy.link}
            </a>
            {f.privacy.after}
          </span>
        </label>
        {renderError("privacy")}
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
        <p role="alert" className={`m-0 text-sm font-medium ${ERROR_TEXT}`}>
          {f.error}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="inline-flex min-h-[56px] cursor-pointer items-center justify-center gap-2.5 rounded-full border-0 bg-hub-ink px-[26px] py-[18px] font-plex text-base font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hub-amber-ink focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {sending ? f.sending : submitLabel}
        <ArrowIcon className="text-hub-amber" />
      </button>
    </form>
  );
}
