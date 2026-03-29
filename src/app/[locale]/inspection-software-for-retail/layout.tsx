import { ReactNode } from 'react'
import { Metadata } from 'next'
import { ICP_DATA } from '@/data/icpData'

const d = ICP_DATA['retail']

export const metadata: Metadata = {
  title: { absolute: d.metaTitle },
  description: d.metaDescription,
  openGraph: {
    title: d.metaTitle,
    description: d.metaDescription,
    url: `https://www.pulsepro.ai/en/${d.canonicalSlug}`,
  },
  twitter: {
    title: d.metaTitle,
    description: d.metaDescription,
  },
  alternates: {
    canonical: `https://www.pulsepro.ai/en/${d.canonicalSlug}`,
    languages: { en: `https://www.pulsepro.ai/en/${d.canonicalSlug}`, ar: `https://www.pulsepro.ai/ar/${d.canonicalSlug}` },
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
