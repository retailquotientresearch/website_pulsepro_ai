import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security & Compliance',
  description:
    'Enterprise-grade security: end-to-end encryption, SOC 2 compliance, role-based access control, audit trails, and 99.9% uptime SLA. Your inspection data is always safe.',
  openGraph: {
    title: 'Security & Compliance | PULSE',
    description:
      'SOC 2, data encryption, RBAC, full audit trails, and 99.9% uptime. Enterprise security built into every layer of PULSE.',
    url: 'https://www.pulsepro.ai/en/security',
  },
  alternates: {
    canonical: 'https://www.pulsepro.ai/en/security',
    languages: {
      en: 'https://www.pulsepro.ai/en/security',
      ar: 'https://www.pulsepro.ai/ar/security',
    },
  },
}

export default function SecurityLayout({ children }: { children: ReactNode }) {
  return children
}
