'use client'

import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { EXTERNAL_LINKS, ROUTES } from '@/config/links'
import { type ICPData } from '@/data/icpData'
import ROICalculator from '@/components/ROICalculator'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

export default function ICPPage({ data }: { data: ICPData }) {
  const t = useTranslations('icpPage')
  const locale = useLocale()
  // Merge Arabic overrides when locale is 'ar' and overrides exist
  const d = locale === 'ar' && data.ar ? { ...data, ...data.ar } : data
  return (
    <main className="min-h-screen bg-[#FFFFEB]">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-[#FFFFEB] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            {d.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            {d.headline}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            {d.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href={EXTERNAL_LINKS.register}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16803C] hover:bg-[#14703A] text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors"
            >
              {t('heroStartFree')}
            </a>
            <Link
              href={ROUTES.bookDemo}
              className="border-2 border-[#16803C] text-[#16803C] hover:bg-[#16803C]/5 font-semibold px-8 py-4 rounded-xl text-base transition-colors"
            >
              {t('heroBookDemo')}
            </Link>
          </div>

          {/* Client logos */}
          {d.clients.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-sm text-gray-400 font-medium">{t('trustedBy')}</span>
              {d.clients.map(client => (
                client.logo ? (
                  <div
                    key={client.name}
                    className="relative h-12 w-32 bg-white rounded-xl shadow-sm ring-1 ring-gray-100 flex items-center justify-center px-3"
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      sizes="128px"
                      className="object-contain p-2"
                    />
                  </div>
                ) : (
                  <span
                    key={client.name}
                    className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-xl shadow-sm"
                  >
                    {client.name}
                  </span>
                )
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────────────── */}
      <section className="bg-[#16803C]">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-3 gap-6 text-center">
          {d.stats.map(stat => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-extrabold text-white">{stat.value}</p>
              <p className="text-green-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Use case narrative + outcome quote ──────────────────────── */}
      {(d.narrative || d.outcomeQuote) && (
        <section className="py-16 bg-[#FFFFEB]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {d.narrative && (
                <div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#16803C] bg-[#16803C]/10 px-3 py-1 rounded-full mb-4">
                    {t('narrativeBadge')}
                  </span>
                  <p className="text-gray-700 text-lg leading-relaxed">{d.narrative}</p>
                </div>
              )}
              {d.outcomeQuote && (
                <blockquote className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <svg className="w-8 h-8 text-[#16803C] mb-4 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-700 text-base leading-relaxed mb-6">&ldquo;{d.outcomeQuote.text}&rdquo;</p>
                  <footer>
                    <p className="font-semibold text-gray-900 text-sm">{d.outcomeQuote.role}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{d.outcomeQuote.company}</p>
                  </footer>
                </blockquote>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Pain points ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {t('painPointsTitle')}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {d.painPointsSubheadline ?? `These are the problems every ${d.industry} operations team lives with. PULSE was built to eliminate them.`}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {d.painPoints.map((p, i) => (
              <div key={i} className="bg-[#FFFFEB] rounded-2xl p-6 border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-4 text-red-500 font-bold text-sm">
                  {i + 1}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How PULSE solves it ──────────────────────────────────────── */}
      <section className="py-20 bg-[#FFFFEB]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {t('featuresTitle')}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {d.featuresSubheadline ?? `Purpose-built for ${d.industry} operations — not a generic tool bolted onto your workflow.`}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {d.features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#16803C]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Free templates ───────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#FFFFEB] rounded-2xl border border-gray-200 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {t('freeTemplatesBadge')}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {t('libraryIntro')} {d.libraryLabel}
              </h3>
              <p className="text-gray-600 text-sm max-w-md">
                {t('libraryDownloadNote')}
              </p>
            </div>
            <a
              href={d.libraryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-[#16803C] hover:bg-[#14703A] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              {t('browseTemplates')}
            </a>
          </div>
        </div>
      </section>

      {/* ── ROI Calculator ───────────────────────────────────────────── */}
      <section className="py-20 bg-[#FFFFEB]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-3">
              {t('roiBadge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {t('roiTitle')}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              {t('roiSubtitle')}
            </p>
          </div>
          <ROICalculator compact />
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#16803C]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('ctaTitle')}
          </h2>
          <p className="text-green-100 text-lg mb-8">
            {t('ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={EXTERNAL_LINKS.register}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#16803C] hover:bg-gray-50 font-bold px-8 py-4 rounded-xl text-base transition-colors"
            >
              {t('startFreeTrial')}
            </a>
            <Link
              href={ROUTES.bookDemo}
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl text-base transition-colors"
            >
              {t('bookDemo')}
            </Link>
          </div>
          <p className="mt-6 text-green-200 text-sm">
            {t('enterpriseNote')}{' '}
            <Link href={ROUTES.bookDemo} className="text-white underline underline-offset-2 hover:no-underline">
              {t('enterpriseLink')}
            </Link>
          </p>
        </div>
      </section>

    </main>
  )
}
