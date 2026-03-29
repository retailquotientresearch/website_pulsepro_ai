import { ReactNode } from 'react'
import { Metadata } from 'next'
import { ICP_DATA } from '@/data/icpData'

const d = ICP_DATA['healthcare']

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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pulsepro.ai/en' },
    { '@type': 'ListItem', position: 2, name: 'Healthcare Inspection Software', item: `https://www.pulsepro.ai/en/${d.canonicalSlug}` },
  ],
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}
