import type { Metadata } from 'next'
import { TermsOfService } from '../../components/TermsOfService'

export const metadata: Metadata = {
  title: "Términos del servicio",
  description:
    "Términos y condiciones de uso de los servicios de Nexura Labs.",
  keywords: ["términos de servicio", "Nexura Labs", "legal"],
  alternates: {
    canonical: "/terms",
    languages: {
      "es-AR": "/terms",
    },
  },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return <TermsOfService />
} 