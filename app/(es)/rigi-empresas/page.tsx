import type { Metadata } from "next";
import RigiCompaniesLanding from "@/components/landing/RigiCompaniesLanding";
import { buildMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildMetadata("rigiEmpresas", "es");

export default function Page() {
  return <RigiCompaniesLanding />;
}
