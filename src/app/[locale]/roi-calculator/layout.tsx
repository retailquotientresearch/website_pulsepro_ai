import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ROI Calculator — See How Much You Save with PULSE',
  description:
    'Calculate your inspection ROI in 30 seconds. See how many hours you save, your cost reduction, and payback period when you switch to PULSE.',
  openGraph: {
    title: 'Inspection ROI Calculator | PULSE',
    description:
      'Enter your sites, inspectors, and current method. Instantly see hours saved, cost reduction, and payback period.',
    url: 'https://www.pulsepro.ai/en/roi-calculator',
  },
  alternates: {
    canonical: 'https://www.pulsepro.ai/en/roi-calculator',
    languages: {
      en: 'https://www.pulsepro.ai/en/roi-calculator',
      ar: 'https://www.pulsepro.ai/ar/roi-calculator',
    },
  },
}

export default function ROICalculatorLayout({ children }: { children: ReactNode }) {
  return children
}
