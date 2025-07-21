import type { Metadata } from 'next'
import { TermsOfService } from '../../components/TermsOfService'

export const metadata: Metadata = {
  title: 'Terms of Service | NexuraLabs',
  description: 'Terms of service for NexuraLabs. Read our terms and conditions for using our technology services.',
  keywords: 'terms of service, terms and conditions, NexuraLabs, legal',
}

export default function TermsPage() {
  return <TermsOfService />
} 