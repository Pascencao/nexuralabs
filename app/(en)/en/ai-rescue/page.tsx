import type { Metadata } from "next";
import RescueLanding from "@/components/landing/RescueLanding";
import { buildMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildMetadata("rescateIa", "en");

export default function Page() {
  return <RescueLanding />;
}
