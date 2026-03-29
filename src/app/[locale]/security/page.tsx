import { getTranslations, setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ROUTES } from '@/config/links'
import Container from '@/components/ui/Container'

interface PageProps {
  params: Promise<{ locale: string }>
}

const securityPillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.7}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'AWS Infrastructure',
    detail: 'Hosted exclusively on Amazon Web Services (ap-south-1). Defense-first design with single-use, isolated systems.',
    color: 'text-orange-700 bg-orange-50',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.7}>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Encryption',
    detail: 'AES-256 at rest on AWS RDS. SSL/TLS in transit for all communication — internal and external.',
    color: 'text-[#16803C] bg-[#DCFCE7]',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.7}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Network Protection',
    detail: 'Private VPC with default-deny firewall. Approved ports only. 2FA enforced for all console access.',
    color: 'text-blue-700 bg-blue-50',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.7}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" />
      </svg>
    ),
    title: 'Access Control',
    detail: 'Least-privilege IAM policies. Customer data logically isolated by tenant. Access revoked on termination.',
    color: 'text-purple-700 bg-purple-50',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.7}>
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Monitoring & Logging',
    detail: 'Write-only centralised logs retained for 1 year. Immutable event streams. All systems monitored continuously.',
    color: 'text-[#16803C] bg-[#DCFCE7]',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.7}>
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Pen Testing',
    detail: 'Regular vulnerability assessments. Proactive patch management. Client-led security testing supported.',
    color: 'text-red-700 bg-red-50',
  },
]

const certBadges = [
  { src: '/images/iso-27001.png', alt: 'ISO/IEC 27001' },
  { src: '/images/aicpa-soc.jpeg', alt: 'SOC 2 — AICPA' },
  { src: '/images/fr-certification.jpeg', alt: 'FR Certification' },
  { src: '/images/icons8-aws-logo-480.png', alt: 'Amazon Web Services' },
]

export default async function SecurityPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('security')

  const sections = t.raw('sections') as { title: string; paragraphs: string[] }[]

  return (
    <main className="min-h-screen bg-[#FFFFEB] overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="bg-[#0D1117] text-white pt-32 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#16803C] bg-[#16803C]/15 px-3 py-1 rounded-full mb-5">
              Trust & Security
            </span>
            <h1 className="font-['Poppins',sans-serif] text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              {t('hero.title')}
            </h1>
            <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>

            {/* Key stats */}
            <div className="mt-10 flex flex-wrap justify-center gap-8">
              {[
                { value: '99.99%', label: 'Uptime' },
                { value: 'AES-256', label: 'Encryption at rest' },
                { value: 'SSL/TLS', label: 'All connections' },
                { value: 'ISO 27001', label: 'AWS infrastructure' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-extrabold text-[#16803C]">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Certification badges ── */}
      <section className="bg-white border-b border-gray-100 py-8">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs text-gray-400 uppercase tracking-widest text-center mb-6">
              Infrastructure Certifications &amp; Compliance
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {certBadges.map((badge) => (
                <div key={badge.alt} className="flex flex-col items-center gap-2">
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={72}
                    height={72}
                    className="object-contain h-16 w-auto"
                  />
                  <span className="text-xs text-gray-400">{badge.alt}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Security pillars ── */}
      <section className="py-16 bg-[#FFFFEB]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-['Poppins',sans-serif] text-2xl md:text-3xl font-bold text-[#111111]">
              Built security-first, not security-bolted-on
            </h2>
            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
              Every layer of the PULSE stack — from infrastructure to application — is designed around security principles, not retrofitted after the fact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {securityPillars.map((pillar) => (
              <div key={pillar.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className={`flex items-center justify-center w-11 h-11 rounded-xl mb-4 ${pillar.color}`}>
                  {pillar.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{pillar.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Detailed sections ── */}
      <section className="bg-white py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 pb-6 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="font-['Poppins',sans-serif] text-xl font-bold text-gray-900">
                  Full Security Details
                </h2>
                <p className="text-xs text-gray-400 mt-1">{t('lastUpdate')}</p>
              </div>
            </div>

            {/* Intro */}
            <div className="mb-10 space-y-3">
              {(t.raw('intro.paragraphs') as string[]).map((p, idx) => (
                <p key={idx} className="text-gray-600 leading-relaxed text-sm">{p}</p>
              ))}
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((sec, idx) => (
                <div key={idx} className="border-l-2 border-gray-100 pl-5">
                  <h3 className="font-semibold text-gray-900 mb-3 text-base">{sec.title}</h3>
                  <div className="space-y-2">
                    {sec.paragraphs.map((para, pidx) => (
                      <p key={pidx} className="text-gray-600 text-sm leading-relaxed">{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Contact CTA ── */}
      <section className="bg-[#0D1117] py-14">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-['Poppins',sans-serif] text-xl font-bold text-white mb-2">
              {t('contact.title')}
            </h2>
            <p className="text-gray-400 text-sm mb-5">{t('contact.content')}</p>
            <a
              href={`mailto:${t('contact.email')}`}
              className="inline-flex items-center gap-2 bg-[#16803C] hover:bg-[#14703A] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              {t('contact.email')}
            </a>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-gray-500">
                For enterprise security reviews, penetration testing coordination, or compliance documentation requests,{' '}
                <Link href={ROUTES.bookDemo} className="text-gray-300 underline hover:text-white">
                  book a call with our team.
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>

    </main>
  )
}
