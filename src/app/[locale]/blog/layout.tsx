import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights, best practices, and guides on inspection management, operational excellence, corrective actions, and field team productivity from the PulsePro.ai team.',
  openGraph: {
    title: 'Blog | PulsePro.ai',
    description:
      'Practical guides and insights on running efficient inspection programs, managing field teams, and driving operational excellence at scale.',
    url: 'https://www.pulsepro.ai/en/blog',
  },
  alternates: {
    canonical: 'https://www.pulsepro.ai/en/blog',
    languages: {
      en: 'https://www.pulsepro.ai/en/blog',
      ar: 'https://www.pulsepro.ai/ar/blog',
    },
  },
}

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children
}
