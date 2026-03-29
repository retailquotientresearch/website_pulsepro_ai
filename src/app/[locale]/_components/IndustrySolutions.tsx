'use client'

import { Link } from '@/i18n/navigation'
import { ROUTES } from '@/config/links'

const industries = [
  {
    href: ROUTES.icpRetail,
    label: 'Retail & QSR',
    description: 'Consistent standards across every store, every shift.',
    icon: '🛒',
  },
  {
    href: ROUTES.icpFoodBeverage,
    label: 'Food & Beverage',
    description: 'Pass every food safety audit — the first time.',
    icon: '🍽️',
  },
  {
    href: ROUTES.icpConstruction,
    label: 'Construction',
    description: 'Zero incidents start with the right site inspection.',
    icon: '🏗️',
  },
  {
    href: ROUTES.icpHospitality,
    label: 'Hotels & Hospitality',
    description: 'Five-star guest experience at every property.',
    icon: '🏨',
  },
  {
    href: ROUTES.icpHealthcare,
    label: 'Healthcare',
    description: 'Compliance you can prove. Safety you can trust.',
    icon: '🏥',
  },
]

export default function IndustrySolutions() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Built for your industry
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            PULSE works the way your industry works
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Purpose-built for multi-site operations across five industries. See how teams like yours use PULSE.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-[#FFFFEB] hover:bg-[#16803C] border border-gray-200 hover:border-[#16803C] rounded-2xl p-6 transition-all duration-200"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-gray-900 group-hover:text-white mb-1 transition-colors">
                {item.label}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-green-100 transition-colors leading-relaxed">
                {item.description}
              </p>
              <span className="inline-block mt-4 text-[#16803C] group-hover:text-white text-sm font-medium transition-colors">
                See how it works →
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
              <h3 className="font-bold text-white mb-1">Not on the list?</h3>
              <p className="text-sm text-green-100 leading-relaxed">
                PULSE works for any multi-site operation that runs audits, checks, or compliance workflows.
              </p>
            </div>
            <span className="inline-block mt-4 text-white text-sm font-medium">
              Book a demo →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
