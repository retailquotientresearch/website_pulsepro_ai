import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inspection Management Features',
  description:
    'Custom checklists, real-time analytics, corrective actions, digital signatures, geolocation tagging, and automated workflows — explore all PULSE features for enterprise field teams.',
  openGraph: {
    title: 'Inspection Management Features | PULSE',
    description:
      'Everything your field team needs: custom checklists, corrective actions, analytics, and integrations. Built for enterprises managing 100+ locations.',
    url: 'https://www.pulsepro.ai/en/features',
  },
  twitter: {
    title: 'Inspection Management Features | PULSE',
    description: 'Everything your field team needs: custom checklists, corrective actions, analytics, and integrations. Built for enterprises managing 100+ locations.',
  },
  alternates: {
    canonical: 'https://www.pulsepro.ai/en/features',
    languages: {
      en: 'https://www.pulsepro.ai/en/features',
      ar: 'https://www.pulsepro.ai/ar/features',
    },
  },
}

export default function FeaturesLayout({ children }: { children: ReactNode }) {
  return children
}
