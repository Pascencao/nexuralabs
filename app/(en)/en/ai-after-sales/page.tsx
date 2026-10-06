import type { Metadata } from "next";
import PosventaLanding from "@/components/landing/PosventaLanding";
import { buildMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildMetadata("iaPosventa", "en");

export default function Page() {
  return <PosventaLanding />;
}
