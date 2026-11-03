import type { Metadata } from "next";
import DiagnosticLanding from "@/components/landing/DiagnosticLanding";
import { buildMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildMetadata("rigiProveedores", "en");

export default function Page() {
  return <DiagnosticLanding origin="rigi-proveedores" />;
}
