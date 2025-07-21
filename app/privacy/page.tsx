import type { Metadata } from 'next'
import { PrivacyPolicy } from '../../components/PrivacyPolicy'

export const metadata: Metadata = {
  title: 'Política de Privacidad | NexuraLabs',
  description: 'Política de privacidad de NexuraLabs. Conozca cómo recopilamos, utilizamos y protegemos su información personal.',
  keywords: 'política de privacidad, protección de datos, NexuraLabs, privacidad',
}

export default function PrivacyPage() {
  return <PrivacyPolicy />
} 