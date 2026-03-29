export interface CaseStudyStat {
  label: string
  value: string
  note?: string
}

export interface CaseStudy {
  id: string
  industry: string
  industryColor: string
  companyProfile: string
  region: string
  headline: string
  challenge: string
  solution: string
  result: string
  stats: CaseStudyStat[]
  icpRoute: string
  icpLabel: string
  /** Set true to span full width in the grid (use on the last odd card) */
  fullWidth?: boolean
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cloud-kitchen-fb',
    industry: 'Food & Beverage',
    industryColor: 'bg-amber-100 text-amber-700',
    companyProfile: 'Multi-brand cloud kitchen operator',
    region: 'South Asia',
    headline: 'Municipal food safety audit preparation: 3 days → 45 minutes',
    challenge:
      'With 500+ kitchens across multiple brands, the food safety team tracked HACCP compliance through binders and spreadsheets. Each municipality audit triggered a 3-day sprint to compile evidence — records were often incomplete, misfiled, or simply missing.',
    solution:
      'PULSE deployed HACCP checklists across three kitchen formats in a single afternoon. Temperature logs, allergen controls, and hygiene checks are now captured with mandatory photo evidence and GPS timestamps on every entry. Records accumulate automatically, fully signed and indexed.',
    result:
      'When a municipality health inspector arrived unannounced, the food safety director produced 18 months of digital records within minutes. The audit cleared in 45 minutes. Zero failed inspections since deployment.',
    stats: [
      { label: 'Audit preparation time', value: '45 min', note: 'was 3 days' },
      { label: 'Kitchens on PULSE', value: '500+' },
      { label: 'Failed inspections post-deployment', value: '0' },
    ],
    icpRoute: '/inspection-software-for-food-beverage',
    icpLabel: 'PULSE for Food & Beverage',
  },
  {
    id: 'fashion-retail',
    industry: 'Retail',
    industryColor: 'bg-purple-100 text-purple-700',
    companyProfile: '150-store fashion retail group',
    region: 'South Asia',
    headline: 'Weekly store compliance: from ad-hoc chasing to 87% completion in 30 days',
    challenge:
      "The retail operations team had no consistent way to run planogram compliance and VM audits across 150 stores. District managers spent three days per week chasing store managers by phone after each audit cycle. The same issues recurred without accountability.",
    solution:
      'A planogram compliance checklist was built and deployed to all stores in an afternoon. Every failed item auto-generates an assigned corrective action with a deadline. District managers see completion in real time — with auto-escalation for overdue actions.',
    result:
      '87% of stores completed their weekly audit by Friday within the first month. Corrective action closure time dropped 3×. The coordinator who spent three days chasing audit completion now spends 30 minutes reviewing a dashboard.',
    stats: [
      { label: 'Weekly audit completion rate', value: '87%', note: 'within 30 days' },
      { label: 'Faster corrective action closure', value: '3×' },
      { label: 'Stores on PULSE', value: '150' },
    ],
    icpRoute: '/inspection-software-for-retail',
    icpLabel: 'PULSE for Retail',
  },
  {
    id: 'hotel-group',
    industry: 'Hospitality',
    industryColor: 'bg-blue-100 text-blue-700',
    companyProfile: 'International hotel group',
    region: '80+ properties worldwide',
    headline: 'Guest complaint investigations linked to standards failures: cut by 50% in 6 months',
    challenge:
      "Brand standards audits ran through a mix of spreadsheets, email, and property manager notes. Quality issues reached the group director only after a guest complaint or mystery shopper report — by then, the damage was already done.",
    solution:
      'A 60-point brand standards checklist was configured once and deployed to every property. Every GM runs the same walkthrough on the same cadence. The group quality dashboard shows all 80+ properties in one real-time view.',
    result:
      'Guest complaint investigations linked to standards failures dropped 50% in the first 6 months. Properties with chronic issues were identified and supported within days of deployment — not discovered months later in a mystery shopper report.',
    stats: [
      { label: 'Standards-linked complaint investigations', value: '−50%', note: 'in 6 months' },
      { label: 'Properties on PULSE', value: '80+' },
      { label: 'Brand standards checklist points', value: '60' },
    ],
    icpRoute: '/inspection-software-for-hospitality',
    icpLabel: 'PULSE for Hospitality',
  },
  {
    id: 'infrastructure-hse',
    industry: 'Construction & HSE',
    industryColor: 'bg-orange-100 text-orange-700',
    companyProfile: 'Infrastructure contractor',
    region: 'Middle East, 14 active sites',
    headline: 'RIDDOR incident investigation: from 2–3 days of chasing paper to under 2 hours',
    challenge:
      "The HSE director managed 14 active construction sites, many without reliable internet. Subcontractor compliance was invisible — site inspection records were kept on paper, scattered across five contractor teams, and routinely incomplete by the time they reached the HSE desk.",
    solution:
      'PULSE deployed offline-capable inspection checklists to all site teams. Toolbox talk records, hazard walks, and subcontractor compliance checks are completed on mobile with GPS tagging and photo capture — syncing automatically when connectivity returns.',
    result:
      'When a RIDDOR-reportable incident occurred, the complete site inspection history was extracted and presented to regulators in under 2 hours. Previously, the same process took 2–3 days. Zero lost inspection records since deployment.',
    stats: [
      { label: 'Incident investigation time', value: '< 2 hrs', note: 'was 2–3 days' },
      { label: 'Active construction sites', value: '14' },
      { label: 'Lost inspection records', value: '0' },
    ],
    icpRoute: '/inspection-software-for-construction',
    icpLabel: 'PULSE for Construction',
  },
  {
    id: 'hospital-nabh',
    industry: 'Healthcare',
    industryColor: 'bg-green-100 text-green-700',
    companyProfile: 'Multi-speciality hospital',
    region: 'India, 400 beds',
    headline: 'NABH renewal evidence preparation: 3 days → 3 hours',
    challenge:
      'The quality team maintained compliance records in binders and spreadsheets across wards, OTs, and labs. NABH renewal was a 3-day exercise every year — pulling records, reconciling gaps, and manually compiling evidence packages under deadline pressure.',
    solution:
      'Daily ward hygiene rounds, infection control checks, and biomedical equipment maintenance logs moved to PULSE. Every deviation auto-generates a corrective action with a 4-hour resolution deadline. Records accumulate as a signed, timestamped, searchable digital archive.',
    result:
      'At the next NABH renewal, the evidence package was assembled in 3 hours instead of 3 days. The quality team now runs continuous compliance monitoring rather than a once-a-year fire drill.',
    stats: [
      { label: 'NABH evidence preparation', value: '3 hrs', note: 'was 3 days' },
      { label: 'Hospital beds', value: '400' },
      { label: 'Corrective action SLA', value: '4 hrs' },
    ],
    icpRoute: '/inspection-software-for-healthcare',
    icpLabel: 'PULSE for Healthcare',
    fullWidth: true,
  },
]
