'use client'

import { Link } from '@/i18n/navigation'
import { ROUTES } from '@/config/links'
import { useTranslations } from 'next-intl'

const INDUSTRIES = [
  { href: ROUTES.icpRetail,       labelKey: 'retail',       descKey: 'retailDesc',       icon: '🛒' },
  { href: ROUTES.icpFoodBeverage, labelKey: 'foodBeverage', descKey: 'foodBeverageDesc', icon: '🍽️' },
  { href: ROUTES.icpConstruction, labelKey: 'construction', descKey: 'constructionDesc', icon: '🏗️' },
  { href: ROUTES.icpHospitality,  labelKey: 'hospitality',  descKey: 'hospitalityDesc',  icon: '🏨' },
  { href: ROUTES.icpHealthcare,   labelKey: 'healthcare',   descKey: 'healthcareDesc',   icon: '🏥' },
]

export default function IndustrySolutions() {
  const t = useTranslations('industrySolutions')

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {t('badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t('title')}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INDUSTRIES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-[#FFFFEB] hover:bg-[#16803C] border border-gray-200 hover:border-[#16803C] rounded-2xl p-6 transition-all duration-200"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-gray-900 group-hover:text-white mb-1 transition-colors">
                {t(item.labelKey)}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-green-100 transition-colors leading-relaxed">
                {t(item.descKey)}
              </p>
              <span className="inline-block mt-4 text-[#16803C] group-hover:text-white text-sm font-medium transition-colors">
                {t('seeHow')}
              </span>
            </Link>
          ))}
          {/* Catch-all card */}
          <Link
            href={ROUTES.bookDemo}
            className="group bg-[#16803C] border border-[#16803C] rounded-2xl p-6 transition-all duration-200 hover:bg-[#14703A] flex flex-col justify-between"
          >
            <div>
              <div className="text-2xl mb-3">💬</div>
              <h3 className="font-bold text-white mb-1">{t('notOnList')}</h3>
              <p className="text-sm text-green-100 leading-relaxed">
                {t('notOnListDesc')}
              </p>
            </div>
            <span className="inline-block mt-4 text-white text-sm font-medium">
              {t('bookDemo')}
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
