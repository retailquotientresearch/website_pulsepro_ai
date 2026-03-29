import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { ROUTES, EXTERNAL_LINKS } from '@/config/links'
import Container from '@/components/ui/Container'
import { CASE_STUDIES } from '@/data/caseStudiesData'

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function CaseStudiesPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('caseStudies')

  return (
    <main className="min-h-screen bg-[#FFFFEB]">

      {/* ── Hero ── */}
      <section className="bg-[#0D1117] text-white pt-32 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#16803C] bg-[#16803C]/15 px-3 py-1 rounded-full mb-5">
              {t('hero.badge')}
            </span>
            <h1 className="font-['Poppins',sans-serif] text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              {t('hero.title')}
            </h1>
            <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <p className="mt-5 text-sm text-gray-500 italic">
              {t('hero.disclaimer')}
            </p>

            {/* Aggregate stats */}
            <div className="mt-10 flex flex-wrap justify-center gap-10">
              {[
                { value: '100,000+', label: t('hero.stat1') },
                { value: '5', label: t('hero.stat2') },
                { value: '24 hrs', label: t('hero.stat3') },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-extrabold text-[#16803C]">{s.value}</p>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Case studies grid ── */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {CASE_STUDIES.map((cs) => (
              <div
                key={cs.id}
                className={`bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col${cs.fullWidth ? ' md:col-span-2' : ''}`}
              >
                {/* Card header */}
                <div className="p-6 pb-5 border-b border-gray-100">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${cs.industryColor}`}>
                      {cs.industry}
                    </span>
                    <span className="text-xs text-gray-400 text-right leading-snug">{cs.companyProfile} · {cs.region}</span>
                  </div>
                  <h2 className="font-['Poppins',sans-serif] text-lg md:text-xl font-bold text-gray-900 leading-snug">
                    {cs.headline}
                  </h2>
                </div>

                {/* Stats strip */}
                <div className="grid grid-cols-3 divide-x divide-gray-100 bg-[#FFFFEB]">
                  {cs.stats.map((stat) => (
                    <div key={stat.label} className="px-4 py-4 text-center">
                      <p className="text-xl md:text-2xl font-extrabold text-[#16803C]">{stat.value}</p>
                      {stat.note && (
                        <p className="text-[10px] text-gray-400 mt-0.5">{stat.note}</p>
                      )}
                      <p className="text-[11px] text-gray-500 mt-1 leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Story */}
                <div className={`p-6 space-y-4 flex-1${cs.fullWidth ? ' md:grid md:grid-cols-3 md:gap-6 md:space-y-0' : ''}`}>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-1.5">
                      {t('card.challenge')}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-1.5">
                      {t('card.solution')}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-[#16803C] mb-1.5">
                      {t('card.result')}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">{cs.result}</p>
                  </div>
                </div>

                {/* Footer link */}
                <div className="px-6 pb-5 pt-2 border-t border-gray-100 mt-auto">
                  <Link
                    href={cs.icpRoute}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#16803C] hover:text-[#14703A] transition-colors"
                  >
                    {cs.icpLabel}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0D1117] py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-['Poppins',sans-serif] text-2xl md:text-3xl font-bold text-white mb-3">
              {t('cta.title')}
            </h2>
            <p className="text-gray-400 text-base mb-8 leading-relaxed">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={ROUTES.bookDemo}
                className="inline-flex items-center justify-center bg-[#16803C] hover:bg-[#14703A] text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-colors"
              >
                {t('cta.demo')}
              </Link>
              <a
                href={EXTERNAL_LINKS.register}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/20 text-white hover:bg-white/5 font-semibold px-7 py-3.5 rounded-xl text-sm transition-colors"
              >
                {t('cta.free')}
              </a>
            </div>
            <p className="mt-5 text-xs text-gray-500">
              {t('cta.note')}
            </p>
          </div>
        </Container>
      </section>

    </main>
  )
}
