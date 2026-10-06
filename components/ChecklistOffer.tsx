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
