'use client'

import { useTranslations } from 'next-intl'

// Type definitions for privacy policy data structures
interface DisclosureType {
  type: string
  content?: string
  intro?: string
  items?: string[]
}

interface CcpaRequest {
  type: string
  intro?: string
  items?: string[]
  note?: string
  content?: string
}

interface AnalyticsProvider {
  name: string
  description: string
  links?: string[]
  info?: string[]
}

interface CicdTool {
  name: string
  provider?: string
  description?: string
  descriptions?: string[]
  link?: string
}

interface RemarketingService {
  name: string
  provider?: string
  info?: string[]
}

interface PaymentProcessor {
  name: string
  info: string
}

export default function PrivacyPolicyPage() {
  const t = useTranslations('privacyPolicy')
  return (
    <>
    <main className="min-h-screen bg-[#FFFFEB] overflow-x-hidden">
      {/* Hero - aligned with home page style */}
      <section className="bg-[#FFFFEB] pt-28 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-['Poppins',sans-serif] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#111111]">
              {t('hero.title')}
            </h1>
            {t('hero.subtitle') && (
              <p className="mt-4 text-lg md:text-xl text-gray-700">{t('hero.subtitle')}</p>
            )}
          </div>
        </div>
      </section>

      {/* Content wrapper matching home page card aesthetic */}
      <section className="py-8 md:py-12">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-2xl border border-green-200 shadow-lg p-6 md:p-10'>
              {/* Effective Date */}
              <div className='mb-8 pb-6 border-b border-green-200'>
                <p className='text-sm text-gray-500'>
                  {t('effectiveDate')}
                </p>
              </div>

              {/* 1. Introduction */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>
                  {t('sections.introduction.title')}
                </h2>
                {t.raw('sections.introduction.paragraphs').map((para: string, idx: number) => (
                  <p key={idx} className='text-gray-700 leading-relaxed mb-4'>
                    {para}
                  </p>
                ))}
              </section>

              {/* 2. Definitions */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>
                  {t('sections.definitions.title')}
                </h2>
                <div className='space-y-4'>
                  {t.raw('sections.definitions.items').map((item: {term: string, definition: string}, idx: number) => (
                    <div key={idx}>
                      <p className='text-gray-700 leading-relaxed'>
                        <strong>{item.term}</strong> {item.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 3. Information Collection and Use */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>
                  {t('sections.informationCollection.title')}
                </h2>
                <p className='text-gray-700 leading-relaxed'>
                  {t('sections.informationCollection.content')}
                </p>
              </section>

              {/* 4. Types of Data Collected */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>
                  {t('sections.typesOfData.title')}
                </h2>

                {/* Personal Data */}
                <h3 className='text-xl font-semibold text-[#111111] mb-4'>
                  {t('sections.typesOfData.personalData.subtitle')}
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  {t('sections.typesOfData.personalData.intro')}
                </p>
                <div className='pl-6 text-gray-700 space-y-2 mb-4'>
                  {t.raw('sections.typesOfData.personalData.items').map((item: string, idx: number) => (
                    <p key={idx}>({String.fromCharCode(97 + idx)}) {item}</p>
                  ))}
                </div>
                <p className='text-gray-700 leading-relaxed mb-8'>
                  {t('sections.typesOfData.personalData.outro')}{' '}
                  <a
                    href='mailto:hello@pulsepro.ai'
                    className='text-[#1A7D3D] underline decoration-2 underline-offset-2'
                  >
                    hello@pulsepro.ai
                  </a>
                  .
                </p>

                {/* Usage Data */}
                <h3 className='text-xl font-semibold text-[#111111] mb-4'>
                  {t('sections.typesOfData.usageData.subtitle')}
                </h3>
                {t.raw('sections.typesOfData.usageData.paragraphs').map((para: string, idx: number) => (
                  <p key={idx} className='text-gray-700 leading-relaxed mb-4'>
                    {para}
                  </p>
                ))}

                {/* Location Data */}
                <h3 className='text-xl font-semibold text-[#111111] mb-4 mt-8'>
                  {t('sections.typesOfData.locationData.subtitle')}
                </h3>
                {t.raw('sections.typesOfData.locationData.paragraphs').map((para: string, idx: number) => (
                  <p key={idx} className='text-gray-700 leading-relaxed mb-4'>
                    {para}
                  </p>
                ))}

                {/* Tracking Cookies */}
                <h3 className='text-xl font-semibold text-[#111111] mb-4 mt-8'>
                  {t('sections.typesOfData.trackingCookies.subtitle')}
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  {t('sections.typesOfData.trackingCookies.intro')}
                </p>
                {t.raw('sections.typesOfData.trackingCookies.paragraphs').map((para: string, idx: number) => (
                  <p key={idx} className='text-gray-700 leading-relaxed mb-4'>
                    {para}
                  </p>
                ))}
                <div className='pl-6 text-gray-700 space-y-2 mb-8'>
                  {t.raw('sections.typesOfData.trackingCookies.cookieTypes').map((type: string, idx: number) => (
                    <p key={idx}>({String.fromCharCode(97 + idx)}) {type}</p>
                  ))}
                </div>

                {/* Other Data */}
                <h3 className='text-xl font-semibold text-[#111111] mb-4'>
                  {t('sections.typesOfData.otherData.subtitle')}
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  {t('sections.typesOfData.otherData.content')}
                </p>
              </section>

              {/* 5. Use of Data */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>
                  {t('sections.useOfData.title')}
                </h2>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  {t('sections.useOfData.intro')}
                </p>
                <div className='pl-6 text-gray-700 space-y-2'>
                  {t.raw('sections.useOfData.purposes').map((purpose: string, idx: number) => (
                    <p key={idx}>({String.fromCharCode(97 + idx)}) {purpose}</p>
                  ))}
                </div>
              </section>

              {/* 6. Retention of Data */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>
                  {t('sections.retentionOfData.title')}
                </h2>
                {t.raw('sections.retentionOfData.paragraphs').map((para: string, idx: number) => (
                  <p key={idx} className='text-gray-700 leading-relaxed mb-4'>
                    {para}
                  </p>
                ))}
              </section>

              {/* 7. Transfer of Data */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>
                  {t('sections.transferOfData.title')}
                </h2>
                {t.raw('sections.transferOfData.paragraphs').map((para: string, idx: number) => (
                  <p key={idx} className='text-gray-700 leading-relaxed mb-4'>
                    {para}
                  </p>
                ))}
              </section>

              {/* 8. Disclosure of Data */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>
                  {t('sections.disclosureOfData.title')}
                </h2>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  {t('sections.disclosureOfData.intro')}
                </p>
                <div className='space-y-6'>
                  {t.raw('sections.disclosureOfData.disclosureTypes').map((disclosure: DisclosureType, idx: number) => (
                    <div key={idx}>
                      <h3 className='text-lg font-semibold text-[#111111] mb-2'>
                        {disclosure.type}
                      </h3>
                      {disclosure.content && (
                        <p className='text-gray-700 leading-relaxed'>
                          {disclosure.content}
                        </p>
                      )}
                      {disclosure.intro && (
                        <p className='text-gray-700 leading-relaxed mb-2'>
                          {disclosure.intro}
                        </p>
                      )}
                      {disclosure.items && (
                        <ul className='list-disc pl-6 text-gray-700 space-y-1'>
                          {disclosure.items.map((item: string, itemIdx: number) => (
                            <li key={itemIdx}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* 9. Security of Data */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>
                  {t('sections.securityOfData.title')}
                </h2>
                <p className='text-gray-700 leading-relaxed'>
                  {t('sections.securityOfData.content')}
                </p>
              </section>

              {/* 10. GDPR Rights */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>
                  {t('sections.gdprRights.title')}
                </h2>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  {t('sections.gdprRights.intro')}
                </p>
                {t.raw('sections.gdprRights.paragraphs').map((para: string, idx: number) => (
                  <p key={idx} className='text-gray-700 leading-relaxed mb-4'>
                    {para.includes('hello@pulsepro.ai') ? (
                      <>
                        {para.split('hello@pulsepro.ai')[0]}
                        <a
                          href='mailto:hello@pulsepro.ai'
                          className='text-[#1A7D3D] underline decoration-2 underline-offset-2'
                        >
                          hello@pulsepro.ai
                        </a>
                        {para.split('hello@pulsepro.ai')[1]}
                      </>
                    ) : para}
                  </p>
                ))}
                <div className='pl-6 text-gray-700 space-y-2 mb-4'>
                  {t.raw('sections.gdprRights.rights').map((right: string, idx: number) => (
                    <p key={idx}>({String.fromCharCode(97 + idx)}) {right}</p>
                  ))}
                </div>
                {t.raw('sections.gdprRights.outro').map((para: string, idx: number) => (
                  <p key={idx} className='text-gray-700 leading-relaxed mb-4'>
                    {para}
                  </p>
                ))}
              </section>

              {/* 11. CalOPPA Rights */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>
                  {t('sections.caloppaRights.title')}
                </h2>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  {t('sections.caloppaRights.intro')}
                </p>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  {t('sections.caloppaRights.agreement')}
                </p>
                <div className='pl-6 text-gray-700 space-y-2 mb-6'>
                  {t.raw('sections.caloppaRights.agreements').map((agreement: string, idx: number) => (
                    <p key={idx}>
                      ({String.fromCharCode(97 + idx)}) {agreement.includes('hello@pulsepro.ai') ? (
                        <>
                          {agreement.split('hello@pulsepro.ai')[0]}
                          <a
                            href='mailto:hello@pulsepro.ai'
                            className='text-[#1A7D3D] underline decoration-2 underline-offset-2'
                          >
                            hello@pulsepro.ai
                          </a>
                          {agreement.split('hello@pulsepro.ai')[1]}
                        </>
                      ) : agreement}
                    </p>
                  ))}
                </div>
                <h3 className='text-lg font-semibold text-[#111111] mb-4'>
                  {t('sections.caloppaRights.dntPolicy.title')}
                </h3>
                {t.raw('sections.caloppaRights.dntPolicy.paragraphs').map((para: string, idx: number) => (
                  <p key={idx} className='text-gray-700 leading-relaxed mb-4'>
                    {para}
                  </p>
                ))}
              </section>

              {/* 12. CCPA Rights */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>
                  {t('sections.ccpaRights.title')}
                </h2>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  {t('sections.ccpaRights.intro')}
                </p>
                <div className='pl-6 text-gray-700 space-y-4 mb-6'>
                  {t.raw('sections.ccpaRights.requests').map((request: CcpaRequest, idx: number) => (
                    <div key={idx}>
                      <p className='font-semibold mb-2'>
                        ({String.fromCharCode(97 + idx)}) {request.type}
                      </p>
                      {request.intro && <p className='pl-4 mb-2'>{request.intro}</p>}
                      {request.items && (
                        <div className='pl-4 space-y-1'>
                          {request.items.map((item: string, itemIdx: number) => (
                            <p key={itemIdx}>
                              ({['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii'][itemIdx]}) {item}
                            </p>
                          ))}
                        </div>
                      )}
                      {request.note && <p className='mt-2'>{request.note}</p>}
                      {request.content && <p className='pl-4'>{request.content}</p>}
                    </div>
                  ))}
                </div>
                {t.raw('sections.ccpaRights.notes').map((note: string, idx: number) => (
                  <p key={idx} className='text-gray-700 leading-relaxed mb-4'>
                    {note.includes('hello@pulsepro.ai') ? (
                      <>
                        {note.split('hello@pulsepro.ai')[0]}
                        <a
                          href='mailto:hello@pulsepro.ai'
                          className='text-[#1A7D3D] underline decoration-2 underline-offset-2'
                        >
                          hello@pulsepro.ai
                        </a>
                        {note.split('hello@pulsepro.ai')[1]}
                      </>
                    ) : note}
                  </p>
                ))}
              </section>

              {/* 13. Service Providers */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>
                  {t('sections.serviceProviders.title')}
                </h2>
                {t.raw('sections.serviceProviders.paragraphs').map((para: string, idx: number) => (
                  <p key={idx} className='text-gray-700 leading-relaxed mb-4'>
                    {para}
                  </p>
                ))}
              </section>

              {/* 14. Analytics */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>
                  {t('sections.analytics.title')}
                </h2>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  {t('sections.analytics.intro')}
                </p>
                <div className='space-y-6'>
                  {t.raw('sections.analytics.providers').map((provider: AnalyticsProvider, idx: number) => (
                    <div key={idx} className='bg-green-50 p-6 rounded-xl border border-green-200'>
                      <h3 className='text-xl font-semibold text-[#111111] mb-4'>
                        {provider.name}
                      </h3>
                      <p className='text-gray-700 leading-relaxed mb-4'>
                        {provider.description}
                      </p>
                      {provider.links && provider.links.map((link: string, linkIdx: number) => (
                        <p key={linkIdx} className='text-gray-700 leading-relaxed mb-4'>
                          {link}
                        </p>
                      ))}
                      {provider.info && provider.info.map((info: string, infoIdx: number) => (
                        <p key={infoIdx} className='text-gray-700 leading-relaxed mb-4'>
                          {info}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </section>

              {/* 15. CI/CD Tools */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>
                  {t('sections.cicdTools.title')}
                </h2>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  {t('sections.cicdTools.intro')}
                </p>
                <div className='space-y-6'>
                  {t.raw('sections.cicdTools.tools').map((tool: CicdTool, idx: number) => (
                    <div key={idx} className='bg-green-50 p-6 rounded-xl border border-green-200'>
                      <h3 className='text-xl font-semibold text-[#111111] mb-4'>
                        {tool.name}
                      </h3>
                      {tool.provider && (
                        <p className='text-gray-700 leading-relaxed mb-4'>
                          {tool.name} is provided by {tool.provider}.
                        </p>
                      )}
                      {tool.description && (
                        <p className='text-gray-700 leading-relaxed mb-4'>
                          {tool.description}
                        </p>
                      )}
                      {tool.descriptions && tool.descriptions.map((desc: string, descIdx: number) => (
                        <p key={descIdx} className='text-gray-700 leading-relaxed mb-4'>
                          {desc}
                        </p>
                      ))}
                      {tool.link && (
                        <p className='text-gray-700 leading-relaxed'>
                          {tool.link}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* 16. Advertising */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>
                  {t('sections.advertising.title')}
                </h2>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  {t('sections.advertising.intro')}
                </p>
                <div className='bg-green-50 p-6 rounded-xl border border-green-200'>
                  <h3 className='text-xl font-semibold text-[#111111] mb-4'>
                    {t('sections.advertising.provider.name')}
                  </h3>
                  <p className='text-gray-700 leading-relaxed mb-4'>
                    {t('sections.advertising.provider.description')}
                  </p>
                  <p className='text-gray-700 leading-relaxed'>
                    {t('sections.advertising.provider.optOut')}
                  </p>
                </div>
              </section>

              {/* 17. Behavioral Remarketing */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>
                  {t('sections.behavioralRemarketing.title')}
                </h2>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  {t('sections.behavioralRemarketing.intro')}
                </p>
                <div className='space-y-6'>
                  {t.raw('sections.behavioralRemarketing.services').map((service: RemarketingService, idx: number) => (
                    <div key={idx} className='bg-green-50 p-6 rounded-xl border border-green-200'>
                      <h3 className='text-xl font-semibold text-[#111111] mb-4'>
                        {service.name}
                      </h3>
                      {service.provider && (
                        <p className='text-gray-700 leading-relaxed mb-4'>
                          {service.name} remarketing service is provided by {service.provider}.
                        </p>
                      )}
                      {service.info && service.info.map((info: string, infoIdx: number) => (
                        <p key={infoIdx} className='text-gray-700 leading-relaxed mb-4'>
                          {info}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </section>

              {/* 18. Payments */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>
                  {t('sections.payments.title')}
                </h2>
                {t.raw('sections.payments.intro').map((para: string, idx: number) => (
                  <p key={idx} className='text-gray-700 leading-relaxed mb-4'>
                    {para}
                  </p>
                ))}
                <div className='space-y-6'>
                  {t.raw('sections.payments.processors').map((processor: PaymentProcessor, idx: number) => (
                    <div key={idx} className='bg-green-50 p-6 rounded-xl border border-green-200'>
                      <h3 className='text-xl font-semibold text-[#111111] mb-4'>
                        {processor.name}
                      </h3>
                      <p className='text-gray-700 leading-relaxed'>
                        {processor.info}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 19. Links to Other Sites */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>
                  {t('sections.linksToOtherSites.title')}
                </h2>
                {t.raw('sections.linksToOtherSites.paragraphs').map((para: string, idx: number) => (
                  <p key={idx} className='text-gray-700 leading-relaxed mb-4'>
                    {para}
                  </p>
                ))}
              </section>

              {/* 20. Children's Privacy */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>
                  {t('sections.childrensPrivacy.title')}
                </h2>
                {t.raw('sections.childrensPrivacy.paragraphs').map((para: string, idx: number) => (
                  <p key={idx} className='text-gray-700 leading-relaxed mb-4'>
                    {para}
                  </p>
                ))}
              </section>

              {/* 21. Changes to Policy */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>
                  {t('sections.changesToPolicy.title')}
                </h2>
                {t.raw('sections.changesToPolicy.paragraphs').map((para: string, idx: number) => (
                  <p key={idx} className='text-gray-700 leading-relaxed mb-4'>
                    {para}
                  </p>
                ))}
              </section>

              {/* 22. Contact Us */}
              <section className='mb-8'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>
                  {t('sections.contactUs.title')}
                </h2>
                <div className='bg-green-50 p-6 rounded-xl border border-green-200'>
                  <p className='text-gray-700 leading-relaxed mb-4'>
                    {t('sections.contactUs.intro')}
                  </p>
                  <div className='text-gray-800 space-y-2'>
                    <p>
                      {t('sections.contactUs.email').split('hello@pulsepro.ai')[0]}{' '}
                      <a
                        href='mailto:hello@pulsepro.ai'
                        className='text-[#1A7D3D] underline decoration-2 underline-offset-2'
                      >
                        hello@pulsepro.ai
                      </a>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
      </section>
    </main>
    </>
  );
}
