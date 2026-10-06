import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE } from "@/lib/i18n/config";
import { shouldRedirectToEnglish } from "@/lib/i18n/negotiate";
import { ROUTES, pageKeyFromPath } from "@/lib/i18n/routes";

/**
 * Primera visita a una página en español con el navegador en inglés → versión en inglés.
 * La cookie de idioma (toggle o esta misma redirección) desactiva la redirección.
 * Los bots y previsualizadores de enlaces (WhatsApp, LinkedIn, Slack, etc.) nunca se redirigen.
 */
export function proxy(request: NextRequest) {
  const match = pageKeyFromPath(request.nextUrl.pathname);

  const redirect = shouldRedirectToEnglish({
    isSpanishPage: match?.locale === "es",
    cookieLocale: request.cookies.get(LOCALE_COOKIE)?.value,
    acceptLanguage: request.headers.get("accept-language"),
    userAgent: request.headers.get("user-agent"),
  });
  if (!match || !redirect) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = ROUTES[match.key].en;

  const response = NextResponse.redirect(url, 307);
  response.cookies.set(LOCALE_COOKIE, "en", {
    path: "/",
    maxAge: LOCALE_COOKIE_MAX_AGE,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|api|.*\\..*).*)"],
};
