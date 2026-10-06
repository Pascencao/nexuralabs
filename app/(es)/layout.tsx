import type { Metadata, Viewport } from "next";
import SiteShell from "@/components/SiteShell";
import { baseMetadata, siteViewport } from "@/lib/i18n/metadata";

export const metadata: Metadata = baseMetadata("es");
export const viewport: Viewport = siteViewport;

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="es">{children}</SiteShell>;
}
