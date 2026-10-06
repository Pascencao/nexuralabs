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
