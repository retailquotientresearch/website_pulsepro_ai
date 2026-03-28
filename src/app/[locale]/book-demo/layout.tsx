import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Free Demo',
  description:
    'See PulsePro.ai in action. Book a free 30-minute demo with our team and discover how leading enterprises manage inspections across 100,000+ sites.',
  openGraph: {
    title: 'Book a Free Demo | PulsePro.ai',
    description:
      'Book a free 30-minute personalized demo. See how enterprises use PulsePro.ai to cut inspection time by 60% and close corrective actions 3x faster.',
    url: 'https://www.pulsepro.ai/en/book-demo',
  },
  alternates: {
    canonical: 'https://www.pulsepro.ai/en/book-demo',
    languages: {
      en: 'https://www.pulsepro.ai/en/book-demo',
      ar: 'https://www.pulsepro.ai/ar/book-demo',
    },
  },
}

export default function BookDemoLayout({ children }: { children: ReactNode }) {
  return children
}
