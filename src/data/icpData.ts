export interface PainPoint {
  title: string
  description: string
}

export interface Feature {
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
}

export interface Client {
  name: string
  logo?: string
}

export interface ICPData {
  slug: string
  industry: string
  badge: string
  headline: string
  subheadline: string
  painPoints: PainPoint[]
  features: Feature[]
  stats: Stat[]
  clients: Client[]
  libraryUrl: string
  libraryLabel: string
  metaTitle: string
  metaDescription: string
  canonicalSlug: string
}

export const ICP_DATA: Record<string, ICPData> = {
  retail: {
    slug: 'inspection-software-for-retail',
    industry: 'Retail',
    badge: 'For Retail & QSR',
    headline: 'Every store, every standard, every time.',
    subheadline:
      'Retail chains lose revenue to inconsistent standards, slow corrective actions, and zero visibility across locations. PULSE fixes all three.',
    painPoints: [
      {
        title: 'Inconsistent standards across locations',
        description:
          'HQ sets the standards. Stores execute differently. Failed audits, customer complaints, and brand damage follow — and you only find out after the fact.',
      },
      {
        title: 'Corrective actions fall through the cracks',
        description:
          'Issues are found during inspections but never tracked to resolution. The same problems surface week after week with no accountability.',
      },
      {
        title: 'No real-time visibility across your network',
        description:
          "You find out a location is underperforming when a customer complains or a mystery shopper reports it — not before. That's too late.",
      },
    ],
    features: [
      {
        title: 'One standard, every location',
        description:
          'Build your audit template once. Deploy it across every store instantly. Every inspector sees the same checklist, every time.',
      },
      {
        title: 'Corrective actions that close themselves',
        description:
          'Every finding generates an assigned action with a deadline. Managers get reminders. Nothing gets dropped. You get proof of closure.',
      },
      {
        title: 'Live store compliance dashboard',
        description:
          'See every location\'s inspection score in one view. Filter by region, format, or manager. Know who\'s leading and who needs help — right now.',
      },
    ],
    stats: [
      { value: '60%', label: 'reduction in inspection time' },
      { value: '3×', label: 'faster corrective action closure' },
      { value: '24 hrs', label: 'from sign-up to first inspection' },
    ],
    clients: [
      { name: 'Tim Hortons', logo: '/images/clients/Tim_hortons.png' },
      { name: 'Rebel Foods', logo: '/images/clients/Rebel_foods.png' },
    ],
    libraryUrl: 'https://library.pulsepro.ai/checklist/industries/',
    libraryLabel: 'free retail & QSR audit checklists',
    metaTitle: 'Retail Inspection Software — Store Audit & Compliance | PULSE',
    metaDescription:
      'PULSE helps retail chains and QSR operators run consistent store audits, close corrective actions faster, and get real-time visibility across every location. Up in 24 hours.',
    canonicalSlug: 'inspection-software-for-retail',
  },

  'food-beverage': {
    slug: 'inspection-software-for-food-beverage',
    industry: 'Food & Beverage',
    badge: 'For Food & Beverage',
    headline: 'Pass every food safety audit — the first time.',
    subheadline:
      'Food safety failures cost brands millions and destroy trust overnight. PULSE gives your team the tools to get it right before the auditor arrives.',
    painPoints: [
      {
        title: 'Regulatory compliance is getting harder',
        description:
          'FSSAI, HACCP, ISO 22000 — requirements are complex and constantly updated. Paper-based systems can\'t keep pace and can\'t prove compliance under scrutiny.',
      },
      {
        title: 'Manual records don\'t hold up in audits',
        description:
          'Handwritten checklists get lost, altered, or disputed. When a regulator or customer asks for evidence, you need a tamper-proof digital record — not a binder.',
      },
      {
        title: 'Critical issues go unnoticed until it\'s too late',
        description:
          'Temperature deviations, hygiene lapses, and cross-contamination risks surface in paper reports days after they occur. By then, the damage is done.',
      },
    ],
    features: [
      {
        title: 'Prebuilt HACCP & food safety checklists',
        description:
          'Start with ready-made templates for FSSAI, ISO 22000, and HACCP compliance — or build your own. Deployed to every site in minutes.',
      },
      {
        title: 'Photo evidence on every finding',
        description:
          'Inspectors capture photos directly in the app. Every finding has a timestamp, GPS tag, and photo attached — automatically, with no extra steps.',
      },
      {
        title: 'Real-time alerts on critical failures',
        description:
          'When a temperature check or hygiene protocol fails, the right manager gets notified immediately — not in the next weekly report.',
      },
    ],
    stats: [
      { value: '60%', label: 'faster food safety audits' },
      { value: '100%', label: 'digital, tamper-proof records' },
      { value: '24 hrs', label: 'from sign-up to first inspection' },
    ],
    clients: [
      { name: 'Rebel Foods', logo: '/images/clients/Rebel_foods.png' },
      { name: 'Tim Hortons', logo: '/images/clients/Tim_hortons.png' },
      { name: 'Travel Food Services', logo: '/images/clients/travel_food_services.png' },
    ],
    libraryUrl: 'https://library.pulsepro.ai/checklist/industry/157/',
    libraryLabel: 'free food safety & HACCP checklists',
    metaTitle: 'Food Safety Inspection Software — HACCP & Audit Compliance | PULSE',
    metaDescription:
      'PULSE helps food & beverage operators run HACCP-compliant inspections, build tamper-proof audit records, and get real-time alerts on food safety failures. Up in 24 hours.',
    canonicalSlug: 'inspection-software-for-food-beverage',
  },

  construction: {
    slug: 'inspection-software-for-construction',
    industry: 'Construction',
    badge: 'For Construction & Infrastructure',
    headline: 'Zero incidents start with the right inspection.',
    subheadline:
      'Construction site safety is non-negotiable. PULSE gives HSE teams the tools to catch hazards early, close them fast, and prove compliance at every stage.',
    painPoints: [
      {
        title: 'Hazards are caught too late — or not at all',
        description:
          'Paper-based site inspections miss issues that structured digital checklists with mandatory photo evidence would flag before they become incidents.',
      },
      {
        title: 'Subcontractor compliance is invisible',
        description:
          "You're accountable for their safety record — but you have no real visibility into whether their teams are following your standards on site.",
      },
      {
        title: 'Incident reports take too long',
        description:
          'By the time a site incident reaches the HSE manager\'s desk, evidence is gone, timelines are unclear, and the regulatory window has narrowed.',
      },
    ],
    features: [
      {
        title: 'Mobile site inspections — online or offline',
        description:
          'Inspectors work on mobile in areas with no signal. Photos, findings, and signatures sync automatically the moment connectivity returns.',
      },
      {
        title: 'Subcontractor compliance tracking',
        description:
          'Assign checklists to subcontractor teams. Track completion, sign-off, and corrective actions. All evidence stored in one place.',
      },
      {
        title: 'Instant incident reporting with GPS',
        description:
          'Report and escalate incidents in real time — with GPS location, photos, and digital signatures captured on the spot.',
      },
    ],
    stats: [
      { value: '80%', label: 'faster site safety inspections' },
      { value: '100%', label: 'digital, GPS-tagged audit trail' },
      { value: '24 hrs', label: 'from sign-up to first inspection' },
    ],
    clients: [
      { name: 'Fichtner', logo: '/images/clients/Fichtner.png' },
      { name: 'Green Resources', logo: '/images/clients/Green_Resources.png' },
    ],
    libraryUrl: 'https://library.pulsepro.ai/checklist/industries/',
    libraryLabel: 'free construction safety & HSE checklists',
    metaTitle: 'Construction Site Inspection Software — HSE & Safety Audits | PULSE',
    metaDescription:
      'PULSE helps construction and infrastructure teams run digital site safety inspections, track subcontractor compliance, and report incidents instantly. Up in 24 hours.',
    canonicalSlug: 'inspection-software-for-construction',
  },

  hospitality: {
    slug: 'inspection-software-for-hospitality',
    industry: 'Hospitality',
    badge: 'For Hotels & Hospitality',
    headline: 'Five-star guest experience at every property.',
    subheadline:
      'One underperforming property can damage the reputation you\'ve built across your entire portfolio. PULSE gives hotel groups visibility and control at scale.',
    painPoints: [
      {
        title: 'Brand standards vary between properties',
        description:
          'What happens at one hotel — a dirty room, a missed service standard, a safety lapse — can destroy the brand trust you\'ve built across all of them.',
      },
      {
        title: 'Guest complaints surface problems you missed',
        description:
          'You find out a property failed its standards when the review goes live on TripAdvisor — not during your quality walk. That\'s the wrong order.',
      },
      {
        title: 'Staff compliance is impossible to verify remotely',
        description:
          'You can\'t be in every property every day. Without digital evidence, you can\'t know if your SOPs are actually being followed — or just being signed off.',
      },
    ],
    features: [
      {
        title: 'Brand standard checklists across every property',
        description:
          'Build your brand standards once. Deploy to every property instantly. Every GM runs the same inspection — with digital evidence attached.',
      },
      {
        title: 'Scheduled daily and pre-arrival checks',
        description:
          'Automate your inspection schedule. Housekeeping rounds, pre-arrival walkthroughs, and F&B checks run on time — every time.',
      },
      {
        title: 'Multi-property compliance dashboard',
        description:
          'See every property\'s score in one view. Drill into underperformers. Track improvement over time. All without leaving your desk.',
      },
    ],
    stats: [
      { value: '60%', label: 'reduction in inspection time' },
      { value: '100K+', label: 'sites managed on PULSE' },
      { value: '24 hrs', label: 'from sign-up to first inspection' },
    ],
    clients: [
      { name: 'Accor', logo: '/images/clients/Accor.png' },
      { name: 'South Beach Hotels', logo: '/images/clients/south_beach.png' },
    ],
    libraryUrl: 'https://library.pulsepro.ai/checklist/industries/',
    libraryLabel: 'free hotel & hospitality audit checklists',
    metaTitle: 'Hotel Inspection Software — Brand Standards & Compliance | PULSE',
    metaDescription:
      'PULSE helps hotel groups enforce brand standards, schedule property inspections, and get real-time compliance visibility across every location. Up in 24 hours.',
    canonicalSlug: 'inspection-software-for-hospitality',
  },

  healthcare: {
    slug: 'inspection-software-for-healthcare',
    industry: 'Healthcare',
    badge: 'For Healthcare & Diagnostics',
    headline: 'Compliance you can prove. Safety you can trust.',
    subheadline:
      'Healthcare facilities face strict regulatory requirements and zero tolerance for lapses. PULSE gives your team a digital audit trail that holds up under any scrutiny.',
    painPoints: [
      {
        title: 'Regulatory audits are unpredictable',
        description:
          'NABH, JCI, and state health authority inspections can arrive unannounced. Are your records ready to present — or scattered across binders and spreadsheets?',
      },
      {
        title: 'Infection control lapses are hard to catch',
        description:
          'Without systematic digital checks, hygiene protocols and sterilisation procedures are hard to verify consistently across wards, OTs, and labs.',
      },
      {
        title: 'Biomedical equipment records are scattered',
        description:
          'Maintenance logs for critical equipment are often paper-based, incomplete, or held by individual technicians. A missed service can mean a failed audit — or worse.',
      },
    ],
    features: [
      {
        title: 'Prebuilt healthcare compliance checklists',
        description:
          'Start with templates for NABH, infection control, biomedical equipment maintenance, ward rounds, and lab quality checks — all ready to deploy.',
      },
      {
        title: 'Tamper-proof digital audit trail',
        description:
          'Every inspection is timestamped, geotagged, and signed digitally. When the auditor arrives, your records are complete, searchable, and undeniable.',
      },
      {
        title: 'Corrective action management',
        description:
          'Every compliance gap generates an assigned corrective action with a deadline. Track resolution to closure — with evidence — for every finding.',
      },
    ],
    stats: [
      { value: '60%', label: 'faster compliance audits' },
      { value: '100%', label: 'tamper-proof digital records' },
      { value: '24 hrs', label: 'from sign-up to first inspection' },
    ],
    clients: [
      { name: 'Suburban Diagnostics' },
      { name: 'Dr Lal PathLabs' },
      { name: 'Progenesis IVF' },
    ],
    libraryUrl: 'https://library.pulsepro.ai/checklist/industries/',
    libraryLabel: 'free healthcare & clinical audit checklists',
    metaTitle: 'Healthcare Inspection Software — Clinical Compliance & Audits | PULSE',
    metaDescription:
      'PULSE helps hospitals, clinics, and diagnostic labs run NABH-compliant inspections, maintain tamper-proof records, and manage corrective actions. Up in 24 hours.',
    canonicalSlug: 'inspection-software-for-healthcare',
  },
}
