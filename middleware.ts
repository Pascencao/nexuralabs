import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, isLocale, negotiateLocale } from "@/lib/i18n/config";

const PUBLIC_FILE = /\.(?:ico|png|jpg|jpeg|gif|svg|webp|txt|xml|webmanifest|json)$/i;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  /** Raíz: la página `app/page.tsx` hace `redirect()`; aquí solo fijamos locale para `<html lang>`. */
  if (pathname === "/") {
    const preferred = negotiateLocale(
      request.headers.get("accept-language"),
      request.cookies.get(LOCALE_COOKIE)?.value,
    );
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-next-locale", preferred);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  if (!isLocale(first)) {
    const preferred = negotiateLocale(
      request.headers.get("accept-language"),
      request.cookies.get(LOCALE_COOKIE)?.value,
    );
    const url = request.nextUrl.clone();
    const rest = segments.length ? `/${segments.join("/")}` : "";
    url.pathname = `/${preferred}${rest}`;
    return NextResponse.redirect(url);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-next-locale", first);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  const cookieVal = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieVal !== first) {
    response.cookies.set(LOCALE_COOKIE, first, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
