import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { LOCALE_COOKIE, negotiateLocale } from "@/lib/i18n/config";

/**
 * Garantiza que `/` nunca quede sin ruta: redirección del servidor al locale
 * negociado (cookie o Accept-Language). Misma origen, sin 404.
 */
export default async function RootPage() {
  const [cookieStore, headerList] = await Promise.all([cookies(), headers()]);
  const locale = negotiateLocale(
    headerList.get("accept-language"),
    cookieStore.get(LOCALE_COOKIE)?.value,
  );
  redirect(`/${locale}`);
}
