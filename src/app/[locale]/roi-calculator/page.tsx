'use client'

import ROICalculator from '@/components/ROICalculator'
import { Link } from '@/i18n/navigation'
import { ROUTES } from '@/config/links'

export default function ROICalculatorPage() {
  return (
    <main className="min-h-screen bg-[#FFFFEB]">
      {/* Hero */}
      <section className="bg-[#FFFFEB] border-b border-gray-100 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
            ROI Calculator
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            How much does manual inspection cost you?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Adjust the sliders to match your operation. See your savings instantly — no email required.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-5xl mx-auto px-6 py-14 md:py-20">
        <ROICalculator />
      </section>

      {/* Assumptions note */}
      <section className="max-w-3xl mx-auto px-6 pb-10 text-center">
        <p className="text-xs text-gray-400">
          Assumptions: paper inspections take ~45 min, spreadsheets ~30 min, other tools ~20 min. PULSE averages 10 min.
          Inspector cost estimated at $50/hr. Actual results vary.
        </p>
      </section>

      {/* CTA strip */}
      <section className="bg-white border-t border-gray-100 py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Ready to realise these savings?
          </h2>
          <p className="text-gray-600 mb-8">
            Up and running in 24 hours. No IT required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ng-app.pulsepro.ai/register?plan=PROM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16803C] hover:bg-[#14703A] text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Start free trial
            </a>
            <Link
              href={ROUTES.bookDemo}
              className="border border-[#16803C] text-[#16803C] hover:bg-[#16803C]/5 font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Book a demo
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Managing 500+ sites?{' '}
            <Link href={ROUTES.bookDemo} className="text-[#16803C] underline underline-offset-2 hover:no-underline">
              Let&apos;s talk enterprise pricing.
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
