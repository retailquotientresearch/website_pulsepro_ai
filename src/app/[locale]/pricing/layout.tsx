import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing Plans',
  description:
    'Simple, transparent pricing from $22/month per user. 14-day free trial included. No setup fees. Annual plans save 18%. Enterprise pricing available.',
  openGraph: {
    title: 'Pricing Plans | PULSE',
    description:
      'Start for $22/user/month. 14-day free trial. No setup fees. Scale from 10 to 10,000 users. Enterprise pricing available.',
    url: 'https://www.pulsepro.ai/en/pricing',
  },
  alternates: {
    canonical: 'https://www.pulsepro.ai/en/pricing',
    languages: {
      en: 'https://www.pulsepro.ai/en/pricing',
      ar: 'https://www.pulsepro.ai/ar/pricing',
    },
  },
}

export default function PricingLayout({ children }: { children: ReactNode }) {
  return children
}
