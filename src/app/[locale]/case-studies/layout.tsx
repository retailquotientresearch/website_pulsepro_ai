import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'caseStudies' })

  const canonical = `https://www.pulsepro.ai/case-studies`
  const canonicalAr = `https://www.pulsepro.ai/ar/case-studies`

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: {
      canonical,
      languages: {
        'en': canonical,
        'ar': canonicalAr,
        'x-default': canonical,
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      url: canonical,
      siteName: 'PULSE',
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      type: 'website',
    },
  }
}

export default async function CaseStudiesLayout({ children, params }: LayoutProps) {
  const { locale } = await params
  setRequestLocale(locale)
  return <>{children}</>
}
