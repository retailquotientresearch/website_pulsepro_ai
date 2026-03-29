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

export interface OutcomeQuote {
  text: string
  role: string
  company: string
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
  /** Override the pain-points section sub-headline (defaults to generic copy using industry) */
  painPointsSubheadline?: string
  /** Override the features section sub-headline (defaults to generic copy using industry) */
  featuresSubheadline?: string
  /** A 1-2 sentence vivid scenario showing a real team using PULSE */
  narrative?: string
  /** Anonymised testimonial with a specific outcome metric */
  outcomeQuote?: OutcomeQuote
  /** Arabic content overrides — any field here replaces the English default when locale === 'ar' */
  ar?: {
    badge?: string
    headline?: string
    subheadline?: string
    painPointsSubheadline?: string
    featuresSubheadline?: string
    painPoints?: PainPoint[]
    features?: Feature[]
    libraryLabel?: string
    stats?: Stat[]
    narrative?: string
    outcomeQuote?: OutcomeQuote
  }
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
    narrative: "A VP Retail at a 200-store fashion chain deploys a planogram compliance checklist in an afternoon. By Friday, 87% of stores have completed it — and the remaining 13% have auto-assigned follow-up tasks waiting for their managers. The audit that used to take three days of coordinator chasing now closes itself.",
    outcomeQuote: {
      text: "We used to find out about VM compliance gaps when a district manager visited or a complaint came in. Now we know within hours of the inspection completing — and there's already a corrective action assigned before I open the report.",
      role: "Head of Retail Operations",
      company: "150-store fashion retail group",
    },
    libraryUrl: 'https://library.pulsepro.ai/checklist/industries/',
    libraryLabel: 'free retail & QSR audit checklists',
    metaTitle: 'Retail Inspection Software — Store Audit & Compliance | PULSE',
    metaDescription:
      'PULSE helps retail chains and QSR operators run consistent store audits, close corrective actions faster, and get real-time visibility across every location. Up in 24 hours.',
    canonicalSlug: 'inspection-software-for-retail',
    ar: {
      badge: 'للتجزئة والمطاعم السريعة',
      headline: 'كل متجر، كل معيار، في كل وقت.',
      subheadline: 'تخسر سلاسل التجزئة إيراداتها بسبب التفاوت في المعايير، وبطء الإجراءات التصحيحية، وانعدام الرؤية عبر المواقع. PULSE تحل الأمور الثلاثة.',
      painPointsSubheadline: 'هذه هي المشكلات التي تعيشها فرق عمليات التجزئة يوميًا. PULSE بُنيت للقضاء عليها.',
      featuresSubheadline: 'مُصممة لعمليات التجزئة تحديدًا — وليست أداة عامة مُلحقة بسير عملك.',
      painPoints: [
        { title: 'معايير غير متسقة عبر المواقع', description: 'يضع المقر الرئيسي المعايير. تُطبّقها الفروع بشكل مختلف. تتبعها عمليات التدقيق الفاشلة وشكاوى العملاء وأضرار العلامة التجارية — ولا تعرف بذلك إلا بعد فوات الأوان.' },
        { title: 'الإجراءات التصحيحية تضيع في الفراغ', description: 'تُرصد المشكلات خلال التفتيش لكن لا يُتابع حلّها. تظهر المشكلات ذاتها أسبوعًا بعد أسبوع دون محاسبة.' },
        { title: 'لا رؤية فورية عبر شبكتك', description: 'تعلم أن موقعًا ما يُقصّر حين يشكو عميل أو يُبلّغ متسوق سري — لا قبل ذلك. وهذا يأتي متأخرًا.' },
      ],
      features: [
        { title: 'معيار واحد لكل موقع', description: 'أنشئ قالب التدقيق مرة واحدة. انشره عبر كل متجر فورًا. يرى كل مفتش القائمة ذاتها في كل مرة.' },
        { title: 'إجراءات تصحيحية تُغلق نفسها', description: 'كل نتيجة تولّد إجراءً مُسندًا مع موعد نهائي. يتلقى المديرون تذكيرات. لا شيء يُهمَل. وتحصل على دليل الإغلاق.' },
        { title: 'لوحة مباشرة لامتثال الفروع', description: 'اطّلع على درجة التفتيش لكل موقع في عرض واحد. صفّ حسب المنطقة أو الشكل أو المدير. اعرف من يتصدر ومن يحتاج مساعدة — الآن.' },
      ],
      libraryLabel: 'قوائم تدقيق مجانية للتجزئة والمطاعم السريعة',
      stats: [
        { value: '60%', label: 'تقليص في وقت التفتيش' },
        { value: '3×', label: 'إغلاق أسرع للإجراءات التصحيحية' },
        { value: '24 ساعة', label: 'من التسجيل إلى أول تفتيش' },
      ],
      narrative: "تنشر نائبة رئيس العمليات في سلسلة أزياء تضم 200 متجر قائمة تحقق امتثال للطرح البصري في غضون ساعات. بحلول نهاية الأسبوع، أتمّ 87% من المتاجر التفتيش — وللـ 13% المتبقين مهام متابعة مُسندة تلقائيًا لمديريهم. عملية التدقيق التي كانت تستغرق ثلاثة أيام من المتابعة أصبحت تُغلق نفسها.",
      outcomeQuote: {
        text: "كنا نعلم بثغرات امتثال العرض البصري حين يزور مدير منطقة أو تصلنا شكوى. الآن نعلم في غضون ساعات من اكتمال التفتيش — وإجراء تصحيحي مُسند قبل أن أفتح التقرير.",
        role: "رئيس عمليات التجزئة",
        company: "سلسلة أزياء بـ 150 متجرًا",
      },
    },
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
    narrative: "A food safety manager at a 500-kitchen cloud food brand sets up HACCP checklists for three kitchen formats in an afternoon. Temperature logs, cross-contamination checks, and allergen controls are captured digitally — with photo evidence and GPS timestamps on every entry. When a municipality health inspector arrives unannounced, all records for the past 18 months load in seconds.",
    outcomeQuote: {
      text: "Our municipal food safety audit used to take the team three days to prepare for. The last one took 45 minutes because everything was already in the system, timestamped and signed.",
      role: "Food Safety Director",
      company: "Multi-brand cloud kitchen operator, 500+ kitchens",
    },
    libraryUrl: 'https://library.pulsepro.ai/checklist/industry/157/',
    libraryLabel: 'free food safety & HACCP checklists',
    metaTitle: 'Food Safety Inspection Software — HACCP & Audit Compliance | PULSE',
    metaDescription:
      'PULSE helps food & beverage operators run HACCP-compliant inspections, build tamper-proof audit records, and get real-time alerts on food safety failures. Up in 24 hours.',
    canonicalSlug: 'inspection-software-for-food-beverage',
    ar: {
      badge: 'للأغذية والمشروبات',
      headline: 'اجتز كل تدقيق لسلامة الغذاء — من المرة الأولى.',
      subheadline: 'إخفاقات سلامة الغذاء تكلف العلامات التجارية الملايين وتدمر الثقة بين عشية وضحاها. PULSE تمنح فريقك الأدوات اللازمة للحصول عليها بشكل صحيح قبل وصول المدقق.',
      painPointsSubheadline: 'هذه هي مشكلات سلامة الغذاء التي تواجهها كل فرق عمليات الأغذية والمشروبات. PULSE بُنيت للقضاء عليها.',
      featuresSubheadline: 'مُصممة لعمليات الأغذية والمشروبات تحديدًا — وليست أداة عامة مُلحقة بسير عملك.',
      painPoints: [
        { title: 'الامتثال التنظيمي يزداد صعوبةً', description: 'FSSAI وHACCP وISO 22000 — المتطلبات معقدة ومتجددة باستمرار. الأنظمة الورقية لا تواكب ذلك ولا تُثبت الامتثال عند التدقيق.' },
        { title: 'السجلات اليدوية لا تصمد في عمليات التدقيق', description: 'قوائم التحقق المكتوبة بخط اليد تضيع أو تُعدَّل أو يُطعن فيها. حين يطلب مدقق أو عميل دليلًا، تحتاج سجلًا رقميًا لا يمكن التلاعب به.' },
        { title: 'المشكلات الحرجة تمر دون أن يلاحظها أحد', description: 'تظهر انحرافات درجة الحرارة والثغرات الصحية ومخاطر التلوث في تقارير ورقية بعد أيام من حدوثها. حينئذٍ يكون الضرر قد وقع.' },
      ],
      features: [
        { title: 'قوائم تحقق HACCP وسلامة الغذاء الجاهزة', description: 'ابدأ بقوالب جاهزة لامتثال FSSAI وISO 22000 وHACCP — أو أنشئ قوالبك الخاصة. تُنشر على كل موقع خلال دقائق.' },
        { title: 'دليل مصور لكل نتيجة', description: 'يلتقط المفتشون الصور مباشرةً في التطبيق. كل نتيجة مرتبطة بطابع زمني وإحداثيات GPS وصورة — تلقائيًا ودون خطوات إضافية.' },
        { title: 'تنبيهات فورية عند الإخفاقات الحرجة', description: 'حين يفشل اختبار درجة الحرارة أو بروتوكول النظافة، يُبلَّغ المدير المعني فورًا — لا في التقرير الأسبوعي القادم.' },
      ],
      libraryLabel: 'قوائم تحقق مجانية لسلامة الغذاء وHACCP',
      stats: [
        { value: '60%', label: 'تدقيقات سلامة غذاء أسرع' },
        { value: '100%', label: 'سجلات رقمية محمية من التلاعب' },
        { value: '24 ساعة', label: 'من التسجيل إلى أول تفتيش' },
      ],
      narrative: "تُعد مديرة سلامة الغذاء في علامة طعام سحابي تضم 500 مطبخًا قوائم تحقق HACCP لثلاثة تنسيقات مطابخ في فترة بعد الظهر. تُسجَّل قراءات درجة الحرارة وفحوصات التلوث وضوابط مسببات الحساسية رقميًا — بأدلة مصورة وطوابع GPS لكل إدخال. حين يصل مفتش صحة بلدي دون إشعار، تظهر سجلات الـ 18 شهرًا الماضية في ثوانٍ.",
      outcomeQuote: {
        text: "كانت تدقيقات سلامة الغذاء البلدية تستغرق من فريقنا ثلاثة أيام للتحضير. الأخيرة أخذت 45 دقيقة لأن كل شيء كان في النظام، موثقًا بالتوقيت والتوقيع.",
        role: "مديرة سلامة الغذاء",
        company: "مشغّل مطابخ سحابية متعدد العلامات، 500+ مطبخ",
      },
    },
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
    narrative: "An HSE director at a major infrastructure contractor deploys daily site safety checklists to 14 active sites — some without internet. Inspectors complete toolbox talk records and hazard walks offline on their phones, syncing when they return to the site office. Every finding is GPS-tagged, timestamped, and auto-generates a corrective action for the responsible contractor.",
    outcomeQuote: {
      text: "When we had a RIDDOR-reportable incident, the investigation was done in under two hours because all the site inspection data was in one place and exportable. Before PULSE, that would have taken days and involved chasing paper records across five teams.",
      role: "Group HSE Manager",
      company: "Infrastructure contractor, 14 active sites",
    },
    libraryUrl: 'https://library.pulsepro.ai/checklist/industries/',
    libraryLabel: 'free construction safety & HSE checklists',
    metaTitle: 'Construction Site Inspection Software — HSE & Safety Audits | PULSE',
    metaDescription:
      'PULSE helps construction and infrastructure teams run digital site safety inspections, track subcontractor compliance, and report incidents instantly. Up in 24 hours.',
    canonicalSlug: 'inspection-software-for-construction',
    ar: {
      badge: 'للبناء والبنية التحتية',
      headline: 'الوصول لصفر حوادث يبدأ بالتفتيش الصحيح.',
      subheadline: 'سلامة مواقع البناء غير قابلة للتفاوض. PULSE تمنح فرق HSE الأدوات اللازمة لرصد المخاطر مبكرًا وإغلاقها بسرعة وإثبات الامتثال في كل مرحلة.',
      painPointsSubheadline: 'هذه هي مشكلات السلامة التي تعصف بفرق عمليات البناء. PULSE بُنيت للقضاء عليها.',
      featuresSubheadline: 'مُصممة لعمليات البناء والبنية التحتية تحديدًا — وليست أداة عامة مُلحقة بسير عملك.',
      painPoints: [
        { title: 'رصد المخاطر يأتي متأخرًا — أو لا يأتي', description: 'عمليات التفتيش الورقية تفوّت مشكلات كانت قوائم التحقق الرقمية مع صور إلزامية ستكتشفها قبل أن تتحول إلى حوادث.' },
        { title: 'امتثال المقاولين الفرعيين غير مرئي', description: 'أنت مسؤول عن سجلاتهم في السلامة — لكنك لا ترى إن كانت فرقهم تتبع معاييرك في الموقع.' },
        { title: 'تقارير الحوادث تستغرق وقتًا طويلًا', description: 'بحلول وصول حادثة موقع إلى مكتب مدير HSE، تكون الأدلة قد اختفت والجداول الزمنية غير واضحة والنافذة التنظيمية ضاقت.' },
      ],
      features: [
        { title: 'تفتيش موقعي بالهاتف — متصل أو غير متصل', description: 'يعمل المفتشون على الهاتف في مناطق بلا إشارة. تتزامن الصور والنتائج والتوقيعات تلقائيًا فور عودة الاتصال.' },
        { title: 'تتبع امتثال المقاولين الفرعيين', description: 'أسند قوائم التحقق لفرق المقاولين الفرعيين. تابع الإتمام والتوقيع والإجراءات التصحيحية. جميع الأدلة في مكان واحد.' },
        { title: 'تقارير الحوادث الفورية مع GPS', description: 'أبلِّغ عن الحوادث وصعّدها في الوقت الفعلي — مع موقع GPS وصور وتوقيعات رقمية ملتقطة في المكان.' },
      ],
      libraryLabel: 'قوائم تحقق مجانية للسلامة والبناء وHSE',
      stats: [
        { value: '80%', label: 'تفتيشات أمان موقع أسرع' },
        { value: '100%', label: 'مسار تدقيق رقمي مُحدد GPS' },
        { value: '24 ساعة', label: 'من التسجيل إلى أول تفتيش' },
      ],
      narrative: "ينشر مدير HSE في شركة بنية تحتية كبرى قوائم تفتيش السلامة اليومية على 14 موقعًا نشطًا — بعضها بلا إنترنت. يُتمّ المفتشون سجلات اجتماعات الأدوات وجولات المخاطر دون اتصال على هواتفهم، ويزامنونها عند العودة لمكاتب الموقع. كل نتيجة مُحددة GPS ومُوقَّتة وتولّد إجراءً تصحيحيًا للمقاول المسؤول.",
      outcomeQuote: {
        text: "حين وقع حادث مُبلَّغ عنه، انتهى التحقيق في أقل من ساعتين لأن بيانات تفتيش الموقع كانت في مكان واحد وقابلة للتصدير. قبل PULSE، كان ذلك يستغرق أيامًا بمطاردة سجلات ورقية بين خمسة فرق.",
        role: "مدير HSE المجموعاتي",
        company: "مقاول بنية تحتية، 14 موقعًا نشطًا",
      },
    },
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
    narrative: "A group quality director at an 80-property hotel group sets the brand standards inspection cadence once. Every property GM completes the same 60-point walkthrough on the same schedule — and the dashboard shows who's compliant and who isn't before the week ends. Issues that used to surface in guest reviews are now caught and closed internally.",
    outcomeQuote: {
      text: "We cut the number of guest complaint investigations linked to standards failures by close to half in six months. The team is catching issues before guests do now — which is exactly what a quality programme should do.",
      role: "VP Quality Assurance",
      company: "International hotel group, 80+ properties",
    },
    libraryUrl: 'https://library.pulsepro.ai/checklist/industries/',
    libraryLabel: 'free hotel & hospitality audit checklists',
    metaTitle: 'Hotel Inspection Software — Brand Standards & Compliance | PULSE',
    metaDescription:
      'PULSE helps hotel groups enforce brand standards, schedule property inspections, and get real-time compliance visibility across every location. Up in 24 hours.',
    canonicalSlug: 'inspection-software-for-hospitality',
    ar: {
      badge: 'للفنادق والضيافة',
      headline: 'تجربة ضيوف خمس نجوم في كل عقار.',
      subheadline: 'عقار واحد يُقصّر كفيل بتدمير سمعة بنيتها عبر محفظتك بأكملها. PULSE تمنح مجموعات الفنادق الرؤية والسيطرة على نطاق واسع.',
      painPointsSubheadline: 'هذه هي المشكلات التي تعصف بفرق عمليات الفنادق والضيافة. PULSE بُنيت للقضاء عليها.',
      featuresSubheadline: 'مُصممة لعمليات الفنادق والضيافة تحديدًا — وليست أداة عامة مُلحقة بسير عملك.',
      painPoints: [
        { title: 'معايير العلامة التجارية تتفاوت بين العقارات', description: 'ما يحدث في فندق واحد — غرفة متسخة، معيار خدمة مفقود، خلل أمني — يمكن أن يدمر ثقة العلامة التجارية التي بنيتها في جميعها.' },
        { title: 'شكاوى الضيوف تكشف مشكلات فاتتك', description: 'تعرف أن عقارًا أخفق في معاييره حين تُنشر المراجعة على TripAdvisor — لا خلال جولة الجودة. هذا الترتيب معكوس.' },
        { title: 'التحقق من امتثال الموظفين عن بُعد أمر مستحيل', description: 'لا يمكنك التواجد في كل عقار كل يوم. دون أدلة رقمية، لا تعرف إن كانت إجراءاتك التشغيلية المعيارية تُطبَّق فعلًا — أو تُوقَّع فحسب.' },
      ],
      features: [
        { title: 'قوائم تحقق معايير العلامة التجارية عبر كل عقار', description: 'أنشئ معاييرك مرة واحدة. انشرها على كل عقار فورًا. كل مدير عام يُجري التفتيش ذاته — مع دليل رقمي مُرفق.' },
        { title: 'جولات يومية ومراجعات ما قبل الوصول مجدولة', description: 'أتمِّت جدول التفتيش. تسير جولات التدبير المنزلي والمراجعات قبل الوصول وفحوصات الطعام في الوقت المحدد — في كل مرة.' },
        { title: 'لوحة امتثال متعددة العقارات', description: 'اطّلع على درجة كل عقار في عرض واحد. تعمق في المقصّرين. تابع التحسّن بمرور الوقت. كل ذلك دون مغادرة مكتبك.' },
      ],
      libraryLabel: 'قوائم تحقق مجانية للفنادق والضيافة',
      stats: [
        { value: '60%', label: 'تقليص في وقت التفتيش' },
        { value: '+100K', label: 'موقع مُدار على PULSE' },
        { value: '24 ساعة', label: 'من التسجيل إلى أول تفتيش' },
      ],
      narrative: "يضع مدير الجودة المجموعاتي في شركة تمتلك 80 عقارًا فندقيًا جدول تفتيش معايير العلامة التجارية مرة واحدة. كل مدير عام يُكمل الجولة التفصيلية ذات 60 نقطة بالجدول نفسه — واللوحة تُظهر من يمتثل ومن لا قبل نهاية الأسبوع. المشكلات التي كانت تظهر في مراجعات الضيوف باتت تُكتشف وتُعالج داخليًا.",
      outcomeQuote: {
        text: "خفّضنا تحقيقات شكاوى الضيوف المرتبطة بإخفاقات المعايير بنسبة تقترب من النصف في ستة أشهر. الفريق الآن يكتشف المشكلات قبل أن يفعل الضيوف — وهذا بالضبط ما يفترض ببرنامج الجودة تحقيقه.",
        role: "نائب رئيس ضمان الجودة",
        company: "مجموعة فنادق دولية، 80+ عقارًا",
      },
    },
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
    narrative: "An infection control lead at a 400-bed hospital runs daily ward hygiene rounds using PULSE. Every deviation auto-generates a corrective action assigned to the duty supervisor with a 4-hour resolution deadline. When the NABH inspection team arrives, 24 months of digitally signed inspection records are presented within minutes — fully indexed, searchable, and court-defensible.",
    outcomeQuote: {
      text: "Our last NABH renewal preparation took three hours. It used to take three days of the quality team pulling records from binders and spreadsheets. The evidence was already in the system.",
      role: "Quality & Compliance Manager",
      company: "Multi-speciality hospital, 400 beds",
    },
    libraryUrl: 'https://library.pulsepro.ai/checklist/industries/',
    libraryLabel: 'free healthcare & clinical audit checklists',
    metaTitle: 'Healthcare Inspection Software — Clinical Compliance & Audits | PULSE',
    metaDescription:
      'PULSE helps hospitals, clinics, and diagnostic labs run NABH-compliant inspections, maintain tamper-proof records, and manage corrective actions. Up in 24 hours.',
    canonicalSlug: 'inspection-software-for-healthcare',
    ar: {
      badge: 'للرعاية الصحية والتشخيص',
      headline: 'امتثال يمكنك إثباته. سلامة يمكنك الوثوق بها.',
      subheadline: 'تواجه منشآت الرعاية الصحية متطلبات تنظيمية صارمة وتسامحًا صفريًا مع الإخفاقات. PULSE تمنح فريقك مسار تدقيق رقميًا يصمد أمام أي تدقيق.',
      painPointsSubheadline: 'هذه هي مشكلات الامتثال التي تواجهها فرق الرعاية الصحية. PULSE بُنيت للقضاء عليها.',
      featuresSubheadline: 'مُصممة لعمليات الرعاية الصحية تحديدًا — وليست أداة عامة مُلحقة بسير عملك.',
      painPoints: [
        { title: 'عمليات التدقيق التنظيمية غير متوقعة', description: 'يمكن أن يصل مفتشو NABH وJCI والسلطات الصحية الحكومية دون إشعار. هل سجلاتك جاهزة للعرض — أم مبعثرة في ملفات وجداول بيانات؟' },
        { title: 'ثغرات مكافحة العدوى يصعب اكتشافها', description: 'دون فحوصات رقمية منهجية، يصعب التحقق من بروتوكولات النظافة وإجراءات التعقيم باستمرار عبر الأجنحة وغرف العمليات والمختبرات.' },
        { title: 'سجلات المعدات الطبية الحيوية مبعثرة', description: 'سجلات صيانة المعدات الحرجة غالبًا ورقية أو ناقصة أو بحوزة تقنيين بعينهم. خدمة فائتة قد تعني تدقيقًا فاشلًا — أو أسوأ من ذلك.' },
      ],
      features: [
        { title: 'قوائم تحقق الامتثال الصحي الجاهزة', description: 'ابدأ بقوالب لـ NABH ومكافحة العدوى وصيانة المعدات الطبية وجولات الأجنحة وفحوصات جودة المختبر — جميعها جاهزة للنشر.' },
        { title: 'مسار تدقيق رقمي محمي من التلاعب', description: 'كل تفتيش مُوقَّت بطابع زمني ومُحدد جغرافيًا وموقَّع رقميًا. حين يصل المدقق، سجلاتك كاملة وقابلة للبحث ولا يمكن الطعن فيها.' },
        { title: 'إدارة الإجراءات التصحيحية', description: 'كل ثغرة في الامتثال تولّد إجراءً تصحيحيًا مُسندًا مع موعد نهائي. تابع الحل حتى الإغلاق — مع الأدلة — لكل نتيجة.' },
      ],
      libraryLabel: 'قوائم تحقق مجانية للرعاية الصحية والتدقيق السريري',
      stats: [
        { value: '60%', label: 'تدقيقات امتثال أسرع' },
        { value: '100%', label: 'سجلات رقمية محمية من التلاعب' },
        { value: '24 ساعة', label: 'من التسجيل إلى أول تفتيش' },
      ],
      narrative: "تُجري مسؤولة مكافحة العدوى في مستشفى من 400 سرير جولات نظافة أجنحة يومية باستخدام PULSE. كل انحراف يولّد تلقائيًا إجراءً تصحيحيًا مُسندًا للمشرف المناوب بمهلة 4 ساعات. حين يصل فريق تفتيش NABH، تُقدَّم سجلات التفتيش الموقَّعة رقميًا لـ 24 شهرًا في دقائق — مفهرسة وقابلة للبحث وذات حجية قانونية.",
      outcomeQuote: {
        text: "استغرق تجديد اعتماد NABH الأخير ثلاث ساعات. كان يستغرق ثلاثة أيام من فريق الجودة لاستخراج السجلات من الملفات والجداول. الأدلة كانت في النظام.",
        role: "مدير الجودة والامتثال",
        company: "مستشفى متعدد التخصصات، 400 سرير",
      },
    },
  },
}
