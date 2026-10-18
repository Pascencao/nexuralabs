import { NextResponse } from "next/server";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { contactNotification, rigiNotification, type EmailContent } from "@/lib/forms/emails";
import { readJsonBody } from "@/lib/forms/http";
import { isLikelyBot } from "@/lib/forms/spam";
import {
  cleanUtm,
  validateCompanyLead,
  validateContact,
  validateSupplierLead,
} from "@/lib/forms/validate";
import { MAIL_TO, MailerNotConfiguredError, sendMail } from "@/lib/mailer";

export async function POST(request: Request) {
  const parsed = await readJsonBody(request);
  if (!parsed.ok) return NextResponse.json({ ok: false }, { status: parsed.status });
  const { body } = parsed;

  // A los bots les respondemos "ok" sin enviar nada, para no darles pistas.
  if (isLikelyBot({ honeypot: body.website, elapsedMs: body.elapsedMs })) {
    return NextResponse.json({ ok: true });
  }

  const locale: Locale = typeof body.locale === "string" && isLocale(body.locale) ? body.locale : "es";
  const date = new Date();
  let email: EmailContent;
  let replyTo: string;

  // Las landings RIGI mandan `origen` y usan sus propios campos; el resto es el formulario de la home.
  if (body.origen === "rigi-proveedores") {
    const result = validateSupplierLead(body);
    if (!result.ok) return NextResponse.json({ ok: false, errors: result.errors }, { status: 400 });
    email = rigiNotification(
      { origin: body.origen, input: result.data },
      { locale, date, utm: cleanUtm(body.utm) },
    );
    replyTo = result.data.email;
  } else if (body.origen === "rigi-empresas") {
    const result = validateCompanyLead(body);
    if (!result.ok) return NextResponse.json({ ok: false, errors: result.errors }, { status: 400 });
    email = rigiNotification(
      { origin: body.origen, input: result.data },
      { locale, date, utm: cleanUtm(body.utm) },
    );
    replyTo = result.data.email;
  } else if (body.origen !== undefined) {
    return NextResponse.json({ ok: false }, { status: 400 });
  } else {
    const result = validateContact(body);
    if (!result.ok) return NextResponse.json({ ok: false, errors: result.errors }, { status: 400 });
    email = contactNotification(result.data, { locale, date });
    replyTo = result.data.email;
  }

  try {
    await sendMail({ to: MAIL_TO, replyTo, ...email });
  } catch (error) {
    console.error("[api/contact]", error);
    const status = error instanceof MailerNotConfiguredError ? 500 : 502;
    return NextResponse.json({ ok: false }, { status });
  }

  return NextResponse.json({ ok: true });
}
