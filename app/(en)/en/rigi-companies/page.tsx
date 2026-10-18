import type { Metadata } from "next";
import RigiCompaniesLanding from "@/components/landing/RigiCompaniesLanding";
import { buildMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildMetadata("rigiEmpresas", "en");

export default function Page() {
  return <RigiCompaniesLanding />;
}
