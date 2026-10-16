import type { Metadata } from "next";
import RigiSuppliersLanding from "@/components/landing/RigiSuppliersLanding";
import { buildMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildMetadata("rigiProveedores", "es");

export default function Page() {
  return <RigiSuppliersLanding />;
}
