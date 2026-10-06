import { Resend } from "resend";

export type OutgoingMail = {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

export const MAIL_FROM = process.env.MAIL_FROM || "Nexura Labs <pablo@nexuralabs.agency>";
export const MAIL_TO = process.env.MAIL_TO || "pablo@nexuralabs.agency";

/** Falta RESEND_API_KEY en producción: es un error de configuración, no del usuario. */
export class MailerNotConfiguredError extends Error {}

let client: Resend | null = null;

/**
 * Envía un email con Resend. Sin RESEND_API_KEY fuera de producción no envía nada:
 * imprime el email en la consola para poder probar los formularios en local.
 */
export async function sendMail(mail: OutgoingMail): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV === "production") {
      throw new MailerNotConfiguredError("RESEND_API_KEY is not set");
    }
    console.info(
      "[mailer] RESEND_API_KEY no configurada; email no enviado:\n" +
        JSON.stringify({ from: MAIL_FROM, to: mail.to, replyTo: mail.replyTo, subject: mail.subject, text: mail.text }, null, 2),
    );
    return;
  }

  client ??= new Resend(apiKey);
  const { error } = await client.emails.send({
    from: MAIL_FROM,
    to: mail.to,
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
    replyTo: mail.replyTo,
  });
  if (error) throw new Error(`Resend: ${error.message}`);
}
