'use client'

import { useState, useMemo } from 'react'
import { Link } from '@/i18n/navigation'
import { EXTERNAL_LINKS, ROUTES } from '@/config/links'

type Method = 'paper' | 'spreadsheet' | 'tool'

const METHOD_TIME: Record<Method, number> = {
  paper: 45,
  spreadsheet: 30,
  tool: 20,
}

const METHOD_LABELS: Record<Method, string> = {
  paper: 'Paper / Manual',
  spreadsheet: 'Spreadsheet',
  tool: 'Another tool',
}

const PULSEPRO_TIME = 10        // mins per inspection
const INSPECTOR_HOURLY = 50     // USD — conservative avg
const PRICE_PER_USER = 18       // USD/user/month (annual plan)

function formatCurrency(n: number) {
  if (n >= 1000000) return '$' + (n / 1000000).toFixed(1) + 'M'
  if (n >= 1000) return '$' + Math.round(n / 1000) + 'K'
  return '$' + Math.round(n).toLocaleString()
}

function Slider({
  label, value, min, max, step = 1, onChange, suffix = '',
}: {
  label: string; value: number; min: number; max: number; step?: number; onChange: (v: number) => void; suffix?: string
}) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div>
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-lg font-bold text-[#16803C]">{value.toLocaleString()}{suffix}</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #16803C ${pct}%, #e5e7eb ${pct}%)`,
          }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>{min.toLocaleString()}</span>
        <span>{max.toLocaleString()}{suffix}</span>
      </div>
    </div>
  )
}

function StatCard({ label, value, sub, highlight = false }: { label: string; value: string; sub?: string; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl p-5 text-center ${highlight ? 'bg-[#16803C] text-white' : 'bg-white border border-gray-200'}`}>
      <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${highlight ? 'text-green-200' : 'text-gray-500'}`}>{label}</p>
      <p className={`text-2xl md:text-3xl font-extrabold ${highlight ? 'text-white' : 'text-gray-900'}`}>{value}</p>
      {sub && <p className={`text-xs mt-1 ${highlight ? 'text-green-200' : 'text-gray-400'}`}>{sub}</p>}
    </div>
  )
}

export default function ROICalculator({ compact = false }: { compact?: boolean }) {
  const [sites, setSites] = useState(20)
  const [inspectors, setInspectors] = useState(10)
  const [inspectionsPerSite, setInspectionsPerSite] = useState(4)
  const [method, setMethod] = useState<Method>('spreadsheet')

  const results = useMemo(() => {
    const totalInspectionsPerMonth = sites * inspectionsPerSite
    const timeSavedPerInspection = METHOD_TIME[method] - PULSEPRO_TIME   // mins
    const hoursSavedPerMonth = (timeSavedPerInspection * totalInspectionsPerMonth) / 60
    const hoursSavedPerYear = hoursSavedPerMonth * 12
    const costSavedPerYear = hoursSavedPerYear * INSPECTOR_HOURLY
    const pulseProCostPerYear = inspectors * PRICE_PER_USER * 12
    const netSavings = costSavedPerYear - pulseProCostPerYear
    const roiPct = pulseProCostPerYear > 0 ? Math.round((netSavings / pulseProCostPerYear) * 100) : 0
    const paybackDays = costSavedPerYear > 0 ? Math.round((pulseProCostPerYear / costSavedPerYear) * 365) : 0
    return {
      hoursSavedPerMonth: Math.round(hoursSavedPerMonth),
      costSavedPerYear: Math.round(costSavedPerYear),
      pulseProCostPerYear: Math.round(pulseProCostPerYear),
      netSavings: Math.round(netSavings),
      roiPct,
      paybackDays,
    }
  }, [sites, inspectors, inspectionsPerSite, method])

  return (
    <div className={`w-full ${compact ? '' : 'max-w-5xl mx-auto'}`}>
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Inputs */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 space-y-7 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">Your current operation</h3>

          <Slider label="Number of sites / locations" value={sites} min={1} max={500} onChange={setSites} />
          <Slider label="Number of inspectors" value={inspectors} min={1} max={200} onChange={setInspectors} />
          <Slider label="Inspections per site per month" value={inspectionsPerSite} min={1} max={30} onChange={setInspectionsPerSite} />

          <div>
            <p className="text-sm font-medium text-gray-700 mb-3">Current inspection method</p>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(METHOD_LABELS) as Method[]).map(m => (
                <button
                  key={m}
                  onClick={() => setMethod(m)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                    method === m
                      ? 'bg-[#16803C] text-white border-[#16803C]'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-[#16803C] hover:text-[#16803C]'
                  }`}
                >
                  {METHOD_LABELS[m]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <StatCard
              label="Hours saved / month"
              value={results.hoursSavedPerMonth.toLocaleString() + ' hrs'}
            />
            <StatCard
              label="Cost saved / year"
              value={formatCurrency(results.costSavedPerYear)}
              sub={`at $${INSPECTOR_HOURLY}/hr avg`}
            />
            <StatCard
              label="PULSE investment"
              value={formatCurrency(results.pulseProCostPerYear)}
              sub="per year"
            />
            <StatCard
              label="Payback period"
              value={results.paybackDays + ' days'}
              sub="to break even"
            />
          </div>

          <StatCard
            label="Net savings per year"
            value={formatCurrency(results.netSavings)}
            sub={`${results.roiPct.toLocaleString()}% ROI on your PULSE investment`}
            highlight
          />

          <div className="flex flex-col sm:flex-row gap-3 mt-1">
            <a
              href={EXTERNAL_LINKS.register}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-[#16803C] hover:bg-[#14703A] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
            >
              Start saving — free trial
            </a>
            <Link
              href={ROUTES.bookDemo}
              className="flex-1 text-center border border-[#16803C] text-[#16803C] hover:bg-[#16803C]/5 font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
            >
              Book a demo
            </Link>
          </div>

          <p className="text-xs text-gray-400 text-center">
            Based on {sites} sites × {inspectionsPerSite} inspections/month.
            Time savings vs {METHOD_LABELS[method].toLowerCase()}: {METHOD_TIME[method] - PULSEPRO_TIME} min/inspection.
          </p>
        </div>
      </div>
    </div>
  )
}
