import { ReactNode } from 'react'
import { Metadata } from 'next'
import { ICP_DATA } from '@/data/icpData'

const d = ICP_DATA['construction']

export const metadata: Metadata = {
  title: d.metaTitle,
  description: d.metaDescription,
  openGraph: {
    title: d.metaTitle,
    description: d.metaDescription,
    url: `https://www.pulsepro.ai/en/${d.canonicalSlug}`,
  },
  alternates: {
    canonical: `https://www.pulsepro.ai/en/${d.canonicalSlug}`,
    languages: { en: `https://www.pulsepro.ai/en/${d.canonicalSlug}` },
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
