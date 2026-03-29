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
  /** Arabic overrides — merged when locale === 'ar' */
  ar?: {
    industry?: string
    companyProfile?: string
    region?: string
    headline?: string
    challenge?: string
    solution?: string
    result?: string
    stats?: CaseStudyStat[]
    icpLabel?: string
  }
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
    ar: {
      industry: 'الأغذية والمشروبات',
      companyProfile: 'مشغّل مطابخ سحابية متعدد العلامات',
      region: 'جنوب آسيا',
      headline: 'التحضير لتدقيق سلامة الغذاء البلدي: من 3 أيام إلى 45 دقيقة',
      challenge: 'مع أكثر من 500 مطبخ موزعة على علامات تجارية متعددة، كانت فرق سلامة الغذاء تتابع امتثال HACCP عبر الملفات والجداول. كل تدقيق بلدي كان يُفجّر سباقًا ماراثونيًا لمدة 3 أيام لجمع الأدلة — وكانت السجلات في أغلب الأحيان ناقصة أو مُخطئة في إيداعها أو مفقودة تمامًا.',
      solution: 'نشرت PULSE قوائم تحقق HACCP عبر ثلاثة تنسيقات مطابخ في غضون ساعة واحدة. تُسجَّل قراءات درجات الحرارة وضوابط مسببات الحساسية وفحوصات النظافة الآن مع صور إلزامية وطوابع GPS على كل إدخال. تتراكم السجلات تلقائيًا، موقَّعة بالكامل ومُفهرسة.',
      result: 'حين وصل مفتش صحة بلدي دون إشعار مسبق، أنتج مدير سلامة الغذاء 18 شهرًا من السجلات الرقمية في دقائق. اكتمل التدقيق في 45 دقيقة. صفر حالات فشل في التفتيش منذ النشر.',
      stats: [
        { label: 'وقت التحضير للتدقيق', value: '45 دقيقة', note: 'كان 3 أيام' },
        { label: 'مطابخ على PULSE', value: '+500' },
        { label: 'تفتيشات فاشلة بعد النشر', value: '0' },
      ],
      icpLabel: 'PULSE للأغذية والمشروبات',
    },
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
    ar: {
      industry: 'التجزئة',
      companyProfile: 'مجموعة أزياء بـ 150 متجرًا',
      region: 'جنوب آسيا',
      headline: 'الامتثال الأسبوعي للمتاجر: من متابعة عشوائية إلى 87% اكتمالًا في 30 يومًا',
      challenge: 'لم يكن لدى فريق عمليات التجزئة طريقة متسقة لإجراء تدقيقات امتثال الطرح البصري عبر 150 متجرًا. كان مديرو المناطق يقضون ثلاثة أيام في الأسبوع ملاحقين مديري المتاجر هاتفيًا بعد كل دورة تدقيق. وكانت المشكلات ذاتها تتكرر دون محاسبة.',
      solution: 'بُنيت قائمة تحقق امتثال الطرح البصري ونُشرت لجميع المتاجر في فترة بعد الظهر. كل عنصر فاشل يولّد تلقائيًا إجراءً تصحيحيًا مُسندًا مع موعد نهائي. يرى مديرو المناطق نسبة الاكتمال لحظيًا — مع تصعيد تلقائي للإجراءات المتأخرة.',
      result: 'أتمّ 87% من المتاجر تدقيقها الأسبوعي بحلول الجمعة في الشهر الأول. انخفض وقت إغلاق الإجراءات التصحيحية بمقدار 3 أضعاف. المنسّق الذي كان يقضي ثلاثة أيام ملاحقًا إتمام التدقيقات بات يقضي 30 دقيقة مراجعًا لوحة بيانات.',
      stats: [
        { label: 'معدل إتمام التدقيق الأسبوعي', value: '87%', note: 'خلال 30 يومًا' },
        { label: 'أسرع في إغلاق الإجراءات التصحيحية', value: '3×' },
        { label: 'متاجر على PULSE', value: '150' },
      ],
      icpLabel: 'PULSE للتجزئة',
    },
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
    ar: {
      industry: 'الضيافة',
      companyProfile: 'مجموعة فنادق دولية',
      region: '+80 عقارًا حول العالم',
      headline: 'تحقيقات شكاوى الضيوف المرتبطة بإخفاقات المعايير: انخفضت 50% في 6 أشهر',
      challenge: 'كانت عمليات تدقيق معايير العلامة التجارية تسير عبر مزيج من الجداول والبريد الإلكتروني وملاحظات مديري العقارات. لم تصل مشكلات الجودة إلى مدير المجموعة إلا بعد شكوى ضيف أو تقرير متسوق سري — وبحلول ذلك الوقت يكون الضرر قد وقع.',
      solution: 'جُهّزت قائمة تحقق معايير العلامة التجارية المؤلفة من 60 نقطة مرة واحدة ونُشرت لكل عقار. يُجري كل مدير عام الجولة ذاتها بالجدول ذاته. تُظهر لوحة جودة المجموعة جميع العقارات في عرض واحد لحظي.',
      result: 'انخفضت تحقيقات شكاوى الضيوف المرتبطة بإخفاقات المعايير بنسبة 50% في الأشهر الستة الأولى. جرى تحديد العقارات ذات المشكلات المزمنة ودعمها خلال أيام من النشر — لا اكتشافها بعد أشهر في تقرير متسوق سري.',
      stats: [
        { label: 'تحقيقات الشكاوى المرتبطة بالمعايير', value: '−50%', note: 'في 6 أشهر' },
        { label: 'عقارات على PULSE', value: '+80' },
        { label: 'نقاط قائمة معايير العلامة', value: '60' },
      ],
      icpLabel: 'PULSE للضيافة',
    },
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
    ar: {
      industry: 'البناء والسلامة المهنية',
      companyProfile: 'مقاول بنية تحتية',
      region: 'الشرق الأوسط، 14 موقعًا نشطًا',
      headline: 'التحقيق في حوادث العمل: من 2-3 أيام ملاحقة للأوراق إلى أقل من ساعتين',
      challenge: 'كان مدير السلامة المهنية يُشرف على 14 موقع بناء نشطًا، كثير منها بلا إنترنت موثوق. كان امتثال المقاولين الفرعيين غير مرئي — سجلات التفتيش الموقعي كانت ورقية، مبعثرة بين خمسة فرق من المقاولين، وناقصة في أغلب الأحيان حين تصل إلى مكتب السلامة.',
      solution: 'نشرت PULSE قوائم تحقق للتفتيش تعمل دون اتصال لجميع فرق الموقع. تُتمّ سجلات اجتماعات السلامة وجولات رصد المخاطر وفحوصات امتثال المقاولين على الهاتف مع وسم GPS والتقاط الصور — وتتزامن تلقائيًا عند عودة الاتصال.',
      result: 'حين وقع حادث مُستوجب للإبلاغ، استُخرج تاريخ تفتيش الموقع الكامل وقُدّم للجهات التنظيمية في أقل من ساعتين. سابقًا كانت العملية ذاتها تستغرق 2-3 أيام. صفر سجلات تفتيش مفقودة منذ النشر.',
      stats: [
        { label: 'وقت التحقيق في الحوادث', value: '< ساعتين', note: 'كان 2-3 أيام' },
        { label: 'مواقع بناء نشطة', value: '14' },
        { label: 'سجلات تفتيش مفقودة', value: '0' },
      ],
      icpLabel: 'PULSE للبناء',
    },
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
    ar: {
      industry: 'الرعاية الصحية',
      companyProfile: 'مستشفى متعدد التخصصات',
      region: 'الهند، 400 سرير',
      headline: 'التحضير لأدلة تجديد اعتماد NABH: من 3 أيام إلى 3 ساعات',
      challenge: 'كان فريق الجودة يحتفظ بسجلات الامتثال في ملفات وجداول بيانات موزعة على الأجنحة وغرف العمليات والمختبرات. كان تجديد اعتماد NABH تمريناً لمدة 3 أيام كل عام — استخراج سجلات وتسوية ثغرات وتجميع حزم أدلة يدويًا تحت ضغط المواعيد.',
      solution: 'انتقلت جولات نظافة الأجنحة اليومية وفحوصات مكافحة العدوى وسجلات صيانة المعدات الطبية إلى PULSE. كل انحراف يولّد تلقائيًا إجراءً تصحيحيًا بموعد نهائي 4 ساعات. تتراكم السجلات كأرشيف رقمي موقَّع ومُوقَّت وقابل للبحث.',
      result: 'في تجديد اعتماد NABH التالي، جُمّعت حزمة الأدلة في 3 ساعات بدلًا من 3 أيام. بات فريق الجودة يُشغّل مراقبة امتثال مستمرة بدلًا من تمرين إطفاء حرائق سنوي.',
      stats: [
        { label: 'التحضير لأدلة NABH', value: '3 ساعات', note: 'كان 3 أيام' },
        { label: 'أسرّة المستشفى', value: '400' },
        { label: 'مهلة الإجراء التصحيحي', value: '4 ساعات' },
      ],
      icpLabel: 'PULSE للرعاية الصحية',
    },
  },
]
