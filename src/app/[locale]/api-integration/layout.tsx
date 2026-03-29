import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'API & Integrations',
  description:
    'Connect PULSE to your existing systems. REST APIs, webhooks, and native integrations with popular enterprise tools including SAP Ariba, AWS, and more.',
  openGraph: {
    title: 'API & Integrations | PULSE',
    description:
      'REST APIs, webhooks, and native integrations. Connect PULSE to ERP, CMMS, BI tools, and custom workflows.',
    url: 'https://www.pulsepro.ai/en/api-integration',
  },
  twitter: {
    title: 'API & Integrations | PULSE',
    description: 'REST APIs, webhooks, and native integrations. Connect PULSE to ERP, CMMS, BI tools, and custom workflows.',
  },
  alternates: {
    canonical: 'https://www.pulsepro.ai/en/api-integration',
    languages: {
      en: 'https://www.pulsepro.ai/en/api-integration',
      ar: 'https://www.pulsepro.ai/ar/api-integration',
    },
  },
}

export default function ApiIntegrationLayout({ children }: { children: ReactNode }) {
  return children
}
