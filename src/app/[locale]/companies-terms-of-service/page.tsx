'use client'

import { useTranslations } from 'next-intl'

export default function CompaniesTermsOfServicePage() {
  const t = useTranslations('companiesTermsOfService')
  
  return (
    <main className="min-h-screen bg-[#FFFFEB] overflow-x-hidden">
      {/* Hero */}
      <section className="bg-[#FFFFEB] pt-28 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-['Poppins',sans-serif] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#111111]">
              {t('hero.title')}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-700">{t('hero.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Main content card */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-green-200 shadow-lg p-6 md:p-10">
            {/* Last update */}
            <div className="mb-8 pb-6 border-b border-green-200">
              <p className="text-sm text-gray-500">{t('lastUpdate')}</p>
            </div>

            {/* Intro paragraphs */}
            <section className="mb-12">
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('intro.paragraph1')}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('intro.paragraph2')}
              </p>
            </section>

            {/* 1. Definitions */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#111111] mb-6">{t('definitions.title')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('definitions.intro')}</p>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: t.raw('definitions.pulseApp') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('definitions.pulseData') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('definitions.pulseNotice') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('definitions.pulsePlatform') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('definitions.workRequest') }} />
              </div>
            </section>

            {/* 2. THE SERVICES */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#111111] mb-6">{t('services.title')}</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: t.raw('services.grantOfAccess') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('services.workRequests') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('services.directHires') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('services.accounts') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('services.accountRequirements') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('services.textMessaging') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('services.restrictions') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('services.thirdParty') }} />
              </div>
            </section>

            {/* 3. FEES AND PAYMENT */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#111111] mb-6">{t('fees.title')}</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: t.raw('fees.engagementFees') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('fees.contractorPayments') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('fees.lateCancellation') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('fees.taxes') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('fees.gratuity') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('fees.latePayment') }} />
              </div>
            </section>

            {/* 4. IP OWNERSHIP */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#111111] mb-6">{t('ipOwnership.title')}</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: t.raw('ipOwnership.ownership') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('ipOwnership.suggestions') }} />
              </div>
            </section>

            {/* 5. CONFIDENTIALITY */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#111111] mb-6">{t('confidentiality.title')}</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: t.raw('confidentiality.definition') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('confidentiality.protection') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('confidentiality.exceptions') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('confidentiality.workRequests') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('confidentiality.disclosure') }} />
              </div>
            </section>

            {/* 6. DISCLAIMERS */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#111111] mb-6">{t('disclaimers.title')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t('disclaimers.content')}
              </p>
            </section>

            {/* 7. LIMITATION OF LIABILITY */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#111111] mb-6">{t('liability.title')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t('liability.content')}
              </p>
            </section>

            {/* 8. RELATIONSHIPS BETWEEN PULSE, CONTRACTORS AND CUSTOMERS; INSURANCE */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#111111] mb-6">{t('relationships.title')}</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: t.raw('relationships.contractors') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('relationships.documentation') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('relationships.pulseCustomer') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('relationships.classification') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('relationships.insurance') }} />
              </div>
            </section>

            {/* 9. TERMINATION */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#111111] mb-6">{t('termination.title')}</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: t.raw('termination.term') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('termination.terminationClause') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('termination.effect') }} />
              </div>
            </section>

            {/* 10. MISCELLANEOUS */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#111111] mb-6">{t('miscellaneous.title')}</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: t.raw('miscellaneous.law') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('miscellaneous.severability') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('miscellaneous.assignment') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('miscellaneous.notices') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('miscellaneous.waiver') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('miscellaneous.entireAgreement') }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw('miscellaneous.modifications') }} />
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
