import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'PulsePro.ai Privacy Policy — how we collect, use, store, and protect your personal data. Your privacy matters to us.',
  robots: { index: true, follow: false },
  alternates: {
    canonical: 'https://www.pulsepro.ai/en/privacy-policy',
  },
}

export default function PrivacyPolicyLayout({ children }: { children: ReactNode }) {
  return children
}
