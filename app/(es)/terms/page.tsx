import type { Metadata } from "next";
import { TermsOfService } from "@/components/TermsOfService";
import { buildMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildMetadata("terms", "es");

export default function Page() {
  return <TermsOfService />;
}
