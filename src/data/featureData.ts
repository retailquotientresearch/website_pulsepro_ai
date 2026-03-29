import { type ICPData } from '@/data/icpData'

export const FEATURE_DATA: Record<string, ICPData> = {
  training: {
    slug: 'training-management-software',
    industry: 'multi-site',
    badge: 'Training Management',
    headline: 'Train your teams on the exact gaps your inspections find.',
    subheadline:
      'Inspection findings without follow-up training are just paperwork. PULSE connects your audit results directly to employee training — closing the loop between what you find and what your team learns.',
    painPointsSubheadline:
      'These are the training problems every multi-site operations team faces. PULSE was built to eliminate them.',
    featuresSubheadline:
      'Training that connects to your inspections — not a standalone tool your team has to remember to use.',
    painPoints: [
      {
        title: 'Training isn\'t tied to inspection findings',
        description:
          'You find the same issues in audits week after week. Without a direct link between findings and training, teams keep repeating the same mistakes — because no one followed up.',
      },
      {
        title: 'No proof of training completion',
        description:
          'Paper sign-in sheets get lost. Verbal confirmations can\'t be audited. When a regulator or client asks who completed what training and when, you have no verifiable record.',
      },
      {
        title: 'Training records are scattered across systems',
        description:
          'HR has one system. Operations has another. Neither talks to your audit data. Connecting the dots manually is slow, error-prone, and nobody does it consistently.',
      },
    ],
    features: [
      {
        title: 'Assign training directly from inspection findings',
        description:
          'When an inspection flags a recurring issue, assign a training module to the responsible team — right from the same platform. The finding and the fix stay connected.',
      },
      {
        title: 'Digital completion records with timestamps',
        description:
          'Every training completion is logged with the user, date, time, and location. Searchable, exportable, and ready for any audit — no chasing paper sign-ins.',
      },
      {
        title: 'Track completion across every site',
        description:
          'See which locations have completed mandatory training and which haven\'t. Filter by role, site, or module. Follow up with one click.',
      },
    ],
    stats: [
      { value: '60%', label: 'reduction in repeat inspection failures' },
      { value: '100%', label: 'digital, auditable training records' },
      { value: '24 hrs', label: 'from sign-up to first training assigned' },
    ],
    clients: [
      { name: 'Tim Hortons', logo: '/images/clients/Tim_hortons.png' },
      { name: 'Rebel Foods', logo: '/images/clients/Rebel_foods.png' },
      { name: 'Accor', logo: '/images/clients/Accor.png' },
    ],
    libraryUrl: 'https://library.pulsepro.ai/checklist/industries/',
    libraryLabel: 'free training and compliance checklists',
    metaTitle: 'Training Management Software — Link Training to Inspections | PULSE',
    metaDescription:
      'PULSE connects inspection findings directly to employee training. Assign modules from audit results, track completion digitally, and prove compliance across every site. Up in 24 hours.',
    canonicalSlug: 'training-management-software',
    ar: {
      badge: 'إدارة التدريب',
      headline: 'درّب فرقك على الثغرات التي تكتشفها تفتيشاتك تحديدًا.',
      subheadline: 'نتائج التفتيش دون متابعة تدريبية ليست سوى أوراق. PULSE تربط نتائج تدقيقك مباشرةً بتدريب الموظفين — لإغلاق الحلقة بين ما تجده وما يتعلمه فريقك.',
      painPointsSubheadline: 'هذه هي مشكلات التدريب التي تواجهها كل فرق عمليات متعددة المواقع. PULSE بُنيت للقضاء عليها.',
      featuresSubheadline: 'تدريب مرتبط بتفتيشاتك — وليس أداة مستقلة يجب على فريقك تذكّر استخدامها.',
      painPoints: [
        { title: 'التدريب غير مرتبط بنتائج التفتيش', description: 'تجد المشكلات ذاتها في التدقيق أسبوعًا بعد أسبوع. دون رابط مباشر بين النتائج والتدريب، يكرر الفريق الأخطاء ذاتها — لأن أحدًا لم يتابع.' },
        { title: 'لا دليل على إتمام التدريب', description: 'تضيع قوائم التوقيع الورقية. التأكيدات الشفهية لا يمكن تدقيقها. حين يسأل مدقق أو عميل عمن أتم ماذا ومتى، لا يوجد سجل قابل للتحقق.' },
        { title: 'سجلات التدريب مبعثرة عبر أنظمة مختلفة', description: 'نظام الموارد البشرية لديه نظامه. العمليات لديها نظام آخر. لا يتحدث أي منهما إلى بيانات التدقيق. ربط النقاط يدويًا بطيء ومعرض للخطأ ولا أحد يفعله باستمرار.' },
      ],
      features: [
        { title: 'إسناد التدريب مباشرةً من نتائج التفتيش', description: 'حين يُعلم تفتيش عن مشكلة متكررة، أسند وحدة تدريبية للفريق المسؤول — من المنصة ذاتها. تبقى النتيجة والحل مترابطَين.' },
        { title: 'سجلات الإتمام الرقمية مع طوابع زمنية', description: 'كل إتمام تدريب يُسجَّل مع المستخدم والتاريخ والوقت والموقع. قابل للبحث والتصدير وجاهز لأي تدقيق — دون ملاحقة قوائم التوقيع الورقية.' },
        { title: 'تابع الإتمام عبر كل موقع', description: 'اطّلع على أي المواقع أتمّت التدريب الإلزامي وأيها لم تفعل. صفّ حسب الدور أو الموقع أو الوحدة. تابع بنقرة واحدة.' },
      ],
      libraryLabel: 'قوائم تحقق مجانية للتدريب والامتثال',
      stats: [
        { value: '60%', label: 'تقليص في إخفاقات التفتيش المتكررة' },
        { value: '100%', label: 'سجلات تدريب رقمية قابلة للتدقيق' },
        { value: '24 ساعة', label: 'من التسجيل إلى أول تدريب مُسند' },
      ],
    },
  },

  tasks: {
    slug: 'corrective-action-software',
    industry: 'multi-site',
    badge: 'Corrective Action & Task Management',
    headline: 'Every finding becomes a tracked task. Nothing falls through.',
    subheadline:
      'Inspection findings only matter if someone fixes them. PULSE turns every audit issue into an assigned, deadline-tracked corrective action — with proof of closure.',
    painPointsSubheadline:
      'These are the corrective action problems that haunt every operations team. PULSE was built to eliminate them.',
    featuresSubheadline:
      'Corrective actions that live where your inspections live — not in a separate tool nobody checks.',
    painPoints: [
      {
        title: 'Findings get logged but never resolved',
        description:
          'Issues surface in audits, get written up, and then disappear. Without automatic task creation and ownership, the same problems appear in the next inspection — and the one after that.',
      },
      {
        title: 'No accountability for who owns what',
        description:
          'When a corrective action isn\'t assigned to a specific person with a deadline, it belongs to everyone and gets done by no one. Accountability needs to be built into the system.',
      },
      {
        title: 'You can\'t prove issues were actually fixed',
        description:
          'A manager marks something resolved. But without photo evidence and a digital sign-off, you have no way to verify the fix — and neither does your auditor or client.',
      },
    ],
    features: [
      {
        title: 'Auto-create tasks from inspection findings',
        description:
          'Every failed checklist item can instantly generate an assigned corrective action with a due date and responsible owner. No manual handoff. No dropped issues.',
      },
      {
        title: 'Deadline tracking with escalation',
        description:
          'Assignees get reminders as deadlines approach. Overdue tasks escalate to managers automatically. Nothing stays open because someone forgot.',
      },
      {
        title: 'Photo evidence and digital sign-off on closure',
        description:
          'Completing a task requires photo proof and a digital signature. Every closure is timestamped and permanently attached to the original inspection finding.',
      },
    ],
    stats: [
      { value: '3×', label: 'faster corrective action closure' },
      { value: '100%', label: 'of findings tracked to resolution' },
      { value: '24 hrs', label: 'from sign-up to first task assigned' },
    ],
    clients: [
      { name: 'Fichtner', logo: '/images/clients/Fichtner.png' },
      { name: 'Tim Hortons', logo: '/images/clients/Tim_hortons.png' },
      { name: 'Rebel Foods', logo: '/images/clients/Rebel_foods.png' },
    ],
    libraryUrl: 'https://library.pulsepro.ai/checklist/industries/',
    libraryLabel: 'free corrective action and audit checklists',
    metaTitle: 'Corrective Action Software — Close Every Inspection Finding | PULSE',
    metaDescription:
      'PULSE auto-creates corrective actions from inspection findings, tracks them to resolution with photo proof, and escalates overdue tasks. Up and running in 24 hours.',
    canonicalSlug: 'corrective-action-software',
    ar: {
      badge: 'الإجراءات التصحيحية وإدارة المهام',
      headline: 'كل نتيجة تصبح مهمة مُتابعة. لا شيء يسقط.',
      subheadline: 'نتائج التفتيش مهمة فقط إذا أصلحها أحد. PULSE تحوّل كل مشكلة في التدقيق إلى إجراء تصحيحي مُسند ومُتابع حتى الإغلاق — مع دليل.',
      painPointsSubheadline: 'هذه هي مشكلات الإجراءات التصحيحية التي تطارد كل فريق عمليات. PULSE بُنيت للقضاء عليها.',
      featuresSubheadline: 'إجراءات تصحيحية تعيش حيث تعيش تفتيشاتك — لا في أداة منفصلة لا يتحقق منها أحد.',
      painPoints: [
        { title: 'النتائج تُسجَّل لكنها لا تُحلّ أبدًا', description: 'تظهر المشكلات في التدقيق، تُكتب، ثم تختفي. دون إنشاء مهام تلقائي وملكية واضحة، تظهر المشكلات ذاتها في التفتيش التالي — والذي يليه.' },
        { title: 'لا محاسبة على من يملك ماذا', description: 'حين لا يُسند إجراء تصحيحي لشخص بعينه مع موعد نهائي، فهو ملك الجميع ولا يُنجزه أحد. المحاسبة يجب أن تكون مبنية في النظام.' },
        { title: 'لا يمكنك إثبات أن المشكلات حُلّت فعلًا', description: 'مدير يُحدّد شيئًا كـ"محلول". لكن دون صورة دليل وتوقيع رقمي، لا طريقة للتحقق من الإصلاح — لا أنت ولا مدققك ولا عميلك.' },
      ],
      features: [
        { title: 'إنشاء مهام تلقائي من نتائج التفتيش', description: 'كل بند فاشل في القائمة يمكن أن يولّد فورًا إجراءً تصحيحيًا مُسندًا مع تاريخ استحقاق ومالك مسؤول. لا تسليم يدوي. لا مشكلات تُهمَل.' },
        { title: 'تتبع المواعيد مع تصعيد تلقائي', description: 'يتلقى المسؤولون تذكيرات مع اقتراب المواعيد. تُصعَّد المهام المتأخرة للمديرين تلقائيًا. لا شيء يبقى مفتوحًا لأن أحدًا نسي.' },
        { title: 'دليل مصور وتوقيع رقمي عند الإغلاق', description: 'إتمام مهمة يتطلب دليلًا مصورًا وتوقيعًا رقميًا. كل إغلاق مُؤرَّخ ومُلحق بشكل دائم بنتيجة التفتيش الأصلية.' },
      ],
      libraryLabel: 'قوائم تحقق مجانية للإجراءات التصحيحية والتدقيق',
      stats: [
        { value: '3×', label: 'إغلاق أسرع للإجراءات التصحيحية' },
        { value: '100%', label: 'من النتائج مُتابعة حتى الحل' },
        { value: '24 ساعة', label: 'من التسجيل إلى أول مهمة مُسندة' },
      ],
    },
  },

  attendance: {
    slug: 'attendance-tracking-software',
    industry: 'field operations',
    badge: 'Attendance Tracking',
    headline: 'Know exactly who was on site — and when.',
    subheadline:
      'Paper sign-in sheets and verbal check-ins create compliance gaps and disputes. PULSE gives your distributed workforce a digital attendance record tied to the inspections they run.',
    painPointsSubheadline:
      'These are the attendance and accountability problems every distributed operations team faces. PULSE was built to eliminate them.',
    featuresSubheadline:
      'Attendance tied to your operations workflow — not a separate HR system that nobody syncs.',
    painPoints: [
      {
        title: 'Paper sign-ins can\'t be verified',
        description:
          'Anyone can sign a sheet. Without a digital, GPS-confirmed check-in, you have no way to prove who was actually present — which matters when something goes wrong on site.',
      },
      {
        title: 'Attendance data is disconnected from operations',
        description:
          'Your HR system tracks who showed up. Your ops system tracks what got inspected. Connecting the two requires manual effort that rarely happens — leaving a gap in your audit trail.',
      },
      {
        title: 'Disputes with no record to fall back on',
        description:
          'A contractor claims they completed a shift. A manager says they didn\'t. Without a timestamped, GPS-confirmed digital record, there\'s nothing definitive to refer back to.',
      },
    ],
    features: [
      {
        title: 'GPS-confirmed digital check-in',
        description:
          'Team members check in and out on mobile. Every record is timestamped and GPS-tagged — confirming they were physically on site, not just marking attendance remotely.',
      },
      {
        title: 'Attendance linked to inspection records',
        description:
          'See who was on site when each inspection was completed. The attendance record and the audit trail are connected — giving you a complete picture of every shift.',
      },
      {
        title: 'Reports across all sites in one view',
        description:
          'Track attendance across every location from a single dashboard. Filter by date, site, role, or individual. Export for payroll, compliance, or client reporting.',
      },
    ],
    stats: [
      { value: '100%', label: 'GPS-verified digital attendance records' },
      { value: '60%', label: 'faster attendance reporting' },
      { value: '24 hrs', label: 'from sign-up to first check-in tracked' },
    ],
    clients: [
      { name: 'Green Resources', logo: '/images/clients/Green_Resources.png' },
      { name: 'Fichtner', logo: '/images/clients/Fichtner.png' },
      { name: 'Travel Food Services', logo: '/images/clients/travel_food_services.png' },
    ],
    libraryUrl: 'https://library.pulsepro.ai/checklist/industries/',
    libraryLabel: 'free site operations and compliance checklists',
    metaTitle: 'Attendance Tracking Software — GPS-Verified Field Team Check-ins | PULSE',
    metaDescription:
      'PULSE tracks field team attendance with GPS-confirmed digital check-ins, ties attendance to inspection records, and gives you a single dashboard across all sites. Up in 24 hours.',
    canonicalSlug: 'attendance-tracking-software',
    ar: {
      badge: 'تتبع الحضور',
      headline: 'اعرف بالضبط من كان في الموقع — ومتى.',
      subheadline: 'قوائم التوقيع الورقية والتحقق الشفهي تخلق ثغرات في الامتثال ونزاعات. PULSE تمنح قوتك العاملة الموزعة سجل حضور رقميًا مرتبطًا بالتفتيشات التي تُجريها.',
      painPointsSubheadline: 'هذه هي مشكلات الحضور والمساءلة التي تواجهها كل فرق العمليات الموزعة. PULSE بُنيت للقضاء عليها.',
      featuresSubheadline: 'حضور مرتبط بسير عملياتك — لا بنظام موارد بشرية منفصل لا أحد يزامنه.',
      painPoints: [
        { title: 'قوائم التوقيع الورقية لا يمكن التحقق منها', description: 'أي شخص يمكنه التوقيع. دون تسجيل دخول رقمي مُؤكَّد GPS، لا طريقة لإثبات من كان حاضرًا فعلًا — وهذا مهم حين يحدث خطأ.' },
        { title: 'بيانات الحضور منفصلة عن العمليات', description: 'نظام الموارد البشرية يتتبع من حضر. نظام العمليات يتتبع ما فُتِّش. ربطهما يتطلب جهدًا يدويًا نادرًا ما يحدث — مما يترك ثغرة في مسار التدقيق.' },
        { title: 'نزاعات دون سجل مرجعي', description: 'مقاول يؤكد إتمام وردية. مدير يقول لم يفعل. دون سجل رقمي مُؤكَّد بطابع زمني وGPS، لا شيء قاطع للرجوع إليه.' },
      ],
      features: [
        { title: 'تسجيل دخول رقمي مُؤكَّد GPS', description: 'يسجل أفراد الفريق دخولهم وخروجهم عبر الهاتف. كل سجل مُؤرَّخ ومُحدد جغرافيًا — للتأكيد على وجودهم الفعلي في الموقع، لا مجرد تسجيل الحضور عن بُعد.' },
        { title: 'الحضور مرتبط بسجلات التفتيش', description: 'اطّلع على من كان في الموقع حين أُتمَّ كل تفتيش. سجل الحضور ومسار التدقيق مترابطان — يمنحانك صورة كاملة عن كل وردية.' },
        { title: 'تقارير عبر كل المواقع في عرض واحد', description: 'تابع الحضور عبر كل موقع من لوحة قيادة واحدة. صفّ حسب التاريخ أو الموقع أو الدور أو الفرد. صدّر للرواتب أو الامتثال أو تقارير العملاء.' },
      ],
      libraryLabel: 'قوائم تحقق مجانية لعمليات الموقع والامتثال',
      stats: [
        { value: '100%', label: 'سجلات حضور رقمية مُؤكَّدة GPS' },
        { value: '60%', label: 'تقارير حضور أسرع' },
        { value: '24 ساعة', label: 'من التسجيل إلى أول تسجيل دخول مُتابع' },
      ],
    },
  },

  announcements: {
    slug: 'operations-announcements-software',
    industry: 'multi-location',
    badge: 'Operations Communications',
    headline: 'SOP changes reach every location — instantly.',
    subheadline:
      'When standards change, email gets ignored and posters go unread. PULSE pushes announcements directly to your frontline teams, tracks who\'s read them, and links them to the checklists they affect.',
    painPointsSubheadline:
      'These are the communications failures that create compliance gaps in multi-location operations. PULSE was built to eliminate them.',
    featuresSubheadline:
      'Announcements that live inside your operations platform — seen by the people doing the work, not buried in an inbox.',
    painPoints: [
      {
        title: 'SOP updates don\'t reach the frontline',
        description:
          'HQ sends an email. The manager reads it — maybe. The team on the floor never hears about it. Six weeks later an audit reveals the old procedure is still being followed.',
      },
      {
        title: 'No proof that teams have read critical notices',
        description:
          'You can send an announcement. You can\'t prove it was read. When a compliance issue arises, you need a record showing that teams were informed and acknowledged the update.',
      },
      {
        title: 'Communications are disconnected from operations',
        description:
          'Announcements go to email. Inspections run in a different tool. Training happens somewhere else. Teams have to switch between systems — and most of the time, they don\'t.',
      },
    ],
    features: [
      {
        title: 'Push announcements to every site instantly',
        description:
          'Publish an announcement once. It appears for every relevant team member across every location — in the same app they use for inspections and tasks. No email required.',
      },
      {
        title: 'Read receipts and acknowledgement tracking',
        description:
          'See exactly who has read each announcement and who hasn\'t. Send reminders to unread recipients. Maintain a permanent record of acknowledgement for compliance purposes.',
      },
      {
        title: 'Link announcements to checklists and tasks',
        description:
          'Updated a procedure? Link the announcement directly to the relevant checklist so teams see the change in context — right before they run the inspection it affects.',
      },
    ],
    stats: [
      { value: '100%', label: 'read-receipt tracked communications' },
      { value: '3×', label: 'faster SOP rollout across locations' },
      { value: '24 hrs', label: 'from sign-up to first announcement sent' },
    ],
    clients: [
      { name: 'Accor', logo: '/images/clients/Accor.png' },
      { name: 'Tim Hortons', logo: '/images/clients/Tim_hortons.png' },
      { name: 'South Beach Hotels', logo: '/images/clients/south_beach.png' },
    ],
    libraryUrl: 'https://library.pulsepro.ai/checklist/industries/',
    libraryLabel: 'free operations and compliance checklists',
    metaTitle: 'Operations Announcements Software — SOP Rollouts with Read Receipts | PULSE',
    metaDescription:
      'PULSE pushes SOP updates to every location, tracks who\'s read them with acknowledgement records, and links announcements to the checklists they affect. Up in 24 hours.',
    canonicalSlug: 'operations-announcements-software',
    ar: {
      badge: 'التواصل التشغيلي',
      headline: 'تصل تحديثات الإجراءات إلى كل موقع — فورًا.',
      subheadline: 'حين تتغير المعايير، تُتجاهَل رسائل البريد الإلكتروني والملصقات لا تُقرأ. PULSE تدفع الإعلانات مباشرةً إلى فرقك الأمامية، تتابع من قرأها، وتربطها بقوائم التحقق التي تؤثر عليها.',
      painPointsSubheadline: 'هذه هي إخفاقات التواصل التي تخلق ثغرات في الامتثال في عمليات متعددة المواقع. PULSE بُنيت للقضاء عليها.',
      featuresSubheadline: 'إعلانات تعيش داخل منصة عملياتك — يراها الناس الذين يؤدون العمل، لا مدفونة في صندوق بريد.',
      painPoints: [
        { title: 'تحديثات الإجراءات لا تصل للخطوط الأمامية', description: 'يُرسل المقر الرئيسي بريدًا إلكترونيًا. المدير يقرأه — ربما. الفريق في الميدان لا يسمع بالأمر أبدًا. بعد ستة أسابيع، يكشف التدقيق أن الإجراء القديم لا يزال مُتبَّعًا.' },
        { title: 'لا دليل أن الفرق قرأت الإشعارات الحرجة', description: 'يمكنك إرسال إعلان. لا يمكنك إثبات أنه قُرئ. حين تنشأ مشكلة امتثال، تحتاج سجلًا يُثبت أن الفرق أُبلِغت واعترفت بالتحديث.' },
        { title: 'التواصل منفصل عن العمليات', description: 'الإعلانات تذهب للبريد الإلكتروني. التفتيشات تجري في أداة مختلفة. التدريب يحدث في مكان آخر. يجب على الفرق التنقل بين الأنظمة — وفي معظم الأوقات، لا يفعلون.' },
      ],
      features: [
        { title: 'ادفع الإعلانات لكل موقع فورًا', description: 'انشر إعلانًا مرة واحدة. يظهر لكل عضو في الفريق المعني عبر كل موقع — في نفس التطبيق المستخدم للتفتيش والمهام. لا بريد إلكتروني مطلوب.' },
        { title: 'إيصالات القراءة وتتبع الإقرار', description: 'اطّلع بالضبط على من قرأ كل إعلان ومن لم يفعل. أرسل تذكيرات للمستلمين الذين لم يقرؤوا. احتفظ بسجل دائم للإقرار لأغراض الامتثال.' },
        { title: 'ربط الإعلانات بقوائم التحقق والمهام', description: 'هل حدّثت إجراءً؟ ارتبط الإعلان مباشرةً بقائمة التحقق ذات الصلة حتى يرى الفريق التغيير في السياق — قبل إجراء التفتيش الذي يؤثر عليه مباشرةً.' },
      ],
      libraryLabel: 'قوائم تحقق مجانية للعمليات والامتثال',
      stats: [
        { value: '100%', label: 'تواصل مُتابَع بإيصالات قراءة' },
        { value: '3×', label: 'نشر أسرع للإجراءات عبر المواقع' },
        { value: '24 ساعة', label: 'من التسجيل إلى أول إعلان مُرسَل' },
      ],
    },
  },
}
