import type { Metadata } from "next";
import DiagnosticLanding from "@/components/landing/DiagnosticLanding";
import { buildMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildMetadata("transformacionDigital", "es");

export default function Page() {
  return <DiagnosticLanding origin="transformacion-digital" />;
}
