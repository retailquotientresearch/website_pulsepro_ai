import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about PULSE — pricing, features, security, integrations, data export, onboarding, and getting started with our inspection platform.',
  openGraph: {
    title: 'FAQ | PULSE',
    description:
      'Everything you need to know about PULSE. From pricing and security to onboarding and integrations.',
    url: 'https://www.pulsepro.ai/en/faq',
  },
  alternates: {
    canonical: 'https://www.pulsepro.ai/en/faq',
    languages: {
      en: 'https://www.pulsepro.ai/en/faq',
      ar: 'https://www.pulsepro.ai/ar/faq',
    },
  },
}

interface Concern {
  question: string
  answer: string
}

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function FaqPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('commonWorries')

  // Raw concerns array from translations
  const concerns = t.raw('concerns') as Concern[]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: concerns.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero */}
        <section className="bg-[#FFFFEB] dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
              Help Center
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about PULSE. Can&apos;t find your answer?{' '}
              <Link
                href="/en/book-demo"
                className="text-green-700 dark:text-green-400 underline underline-offset-2 hover:no-underline"
              >
                Talk to our team
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ list */}
        <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <div className="space-y-0 divide-y divide-gray-200 dark:divide-gray-700">
            {concerns.map((item, index) => (
              <details
                key={index}
                className="group py-6 cursor-pointer"
              >
                <summary className="flex items-center justify-between gap-4 list-none">
                  <h2 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
                    {item.question}
                  </h2>
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-gray-500 group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-[#FFFFEB] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Book a free 30-minute demo and our team will walk you through everything.
            </p>
            <Link
              href="/en/book-demo"
              className="inline-block bg-[#16803C] hover:bg-[#14703A] text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200"
            >
              Book a Free Demo
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
