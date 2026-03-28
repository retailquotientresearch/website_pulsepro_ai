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
  },
}
