import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { buildMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildMetadata("home", "es");

export default function Page() {
  return <HomePage />;
}
