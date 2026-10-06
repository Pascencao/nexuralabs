import type { Metadata, Viewport } from "next";
import SiteShell from "@/components/SiteShell";
import { baseMetadata, siteViewport } from "@/lib/i18n/metadata";

export const metadata: Metadata = baseMetadata("en");
export const viewport: Viewport = siteViewport;

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
