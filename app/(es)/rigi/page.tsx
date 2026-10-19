import type { Metadata } from "next";
import RigiHubLanding from "@/components/landing/RigiHubLanding";
import { buildMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildMetadata("rigi", "es");

export default function Page() {
  return <RigiHubLanding />;
}
