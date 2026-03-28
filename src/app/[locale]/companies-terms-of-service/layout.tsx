import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'PULSE Terms of Service — the terms and conditions for using the PULSE enterprise inspection management platform.',
  robots: { index: true, follow: false },
  alternates: {
    canonical: 'https://www.pulsepro.ai/en/companies-terms-of-service',
  },
}

export default function TermsLayout({ children }: { children: ReactNode }) {
  return children
}
