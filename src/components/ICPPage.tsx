'use client'

import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { EXTERNAL_LINKS, ROUTES } from '@/config/links'
import { type ICPData } from '@/data/icpData'
import ROICalculator from '@/components/ROICalculator'

export default function ICPPage({ data }: { data: ICPData }) {
  return (
    <main className="min-h-screen bg-[#FFFFEB]">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-[#FFFFEB] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            {data.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            {data.headline}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            {data.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href={EXTERNAL_LINKS.register}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16803C] hover:bg-[#14703A] text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors"
            >
              Start free — up in 24 hours
            </a>
            <Link
              href={ROUTES.bookDemo}
              className="border-2 border-[#16803C] text-[#16803C] hover:bg-[#16803C]/5 font-semibold px-8 py-4 rounded-xl text-base transition-colors"
            >
              Book a 30-min demo
            </Link>
          </div>

          {/* Client logos */}
          {data.clients.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-6">
              <span className="text-sm text-gray-400 font-medium">Trusted by</span>
              {data.clients.map(client => (
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
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────────────── */}
      <section className="bg-[#16803C]">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-3 gap-6 text-center">
          {data.stats.map(stat => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-extrabold text-white">{stat.value}</p>
              <p className="text-green-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pain points ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              We know what keeps you up at night
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              These are the problems every {data.industry} operations team lives with. PULSE was built to eliminate them.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {data.painPoints.map((p, i) => (
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
              Here&apos;s how PULSE solves it
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Purpose-built for {data.industry} operations — not a generic tool bolted onto your workflow.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {data.features.map((f, i) => (
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
                Free templates
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Get started with {data.libraryLabel}
              </h3>
              <p className="text-gray-600 text-sm max-w-md">
                Download as PDF or Excel, or import directly into PULSE and go digital in minutes. No account needed to browse.
              </p>
            </div>
            <a
              href={data.libraryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-[#16803C] hover:bg-[#14703A] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Browse free templates →
            </a>
          </div>
        </div>
      </section>

      {/* ── ROI Calculator ───────────────────────────────────────────── */}
      <section className="py-20 bg-[#FFFFEB]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-3">
              ROI Calculator
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              See what you save
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Adjust for your operation. Results update instantly.
            </p>
          </div>
          <ROICalculator compact />
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#16803C]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Up and running in 24 hours. No IT required. No long contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={EXTERNAL_LINKS.register}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#16803C] hover:bg-gray-50 font-bold px-8 py-4 rounded-xl text-base transition-colors"
            >
              Start free trial
            </a>
            <Link
              href={ROUTES.bookDemo}
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl text-base transition-colors"
            >
              Book a demo
            </Link>
          </div>
          <p className="mt-6 text-green-200 text-sm">
            Managing 500+ sites?{' '}
            <Link href={ROUTES.bookDemo} className="text-white underline underline-offset-2 hover:no-underline">
              Let&apos;s talk enterprise pricing.
            </Link>
          </p>
        </div>
      </section>

    </main>
  )
}
