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
  type Need,
} from "@/lib/forms/validate";

type Field = keyof ContactInput;

const FIELD_ORDER: Field[] = ["name", "email", "need", "message"];
const EMPTY: ContactInput = { name: "", email: "", need: "", message: "" };

/** `defaultNeed` preselecciona "¿Qué querés resolver?" (lo usan las landings). */
export default function ContactForm({ defaultNeed }: { defaultNeed?: Need } = {}) {
  const { dict, locale } = useLanguage();
  const f = dict.contact.form;
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<ContactInput>({ ...EMPTY, need: defaultNeed ?? "" });
  const [errors, setErrors] = useState<Errors<ContactInput>>({});
  const [website, setWebsite] = useState("");
  const { status, serverErrors, submit } = useFormSubmit<Errors<ContactInput>>("/api/contact");
  const successRef = useRef<HTMLDivElement>(null);

  // Al reemplazar el formulario por el mensaje de éxito, el foco pasa al mensaje
  // (si no, queda en <body> y el lector de pantalla puede no anunciarlo).
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
      <div
        ref={successRef}
        role="status"
        tabIndex={-1}
        className="rounded-2xl bg-white p-8 text-left shadow-card focus:outline-none"
      >
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
