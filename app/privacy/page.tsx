import type { Metadata } from 'next'
import { PrivacyPolicy } from '../../components/PrivacyPolicy'

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de Nexura Labs. Cómo recopilamos, utilizamos y protegemos tu información personal.",
  keywords: [
    "política de privacidad",
    "protección de datos",
    "Nexura Labs",
    "privacidad",
  ],
  alternates: {
    canonical: "/privacy",
    languages: {
      "es-AR": "/privacy",
    },
  },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return <PrivacyPolicy />
} 