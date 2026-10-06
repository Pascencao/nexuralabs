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
