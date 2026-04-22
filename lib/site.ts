const raw =
  typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL.trim()
    : "";

/** URL canónica del sitio (producción). Sobrescribible con NEXT_PUBLIC_SITE_URL. */
export const SITE_URL = (raw || "https://www.nexuralabs.com").replace(/\/$/, "");

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}
