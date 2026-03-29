import { setRequestLocale } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { Link } from '@/i18n/navigation';
import { ROUTES } from '@/config/links';

interface PageProps {
  params: Promise<{ locale: string }>;
}

// ── Section components (server, no state needed) ────────────────────────────

function SectionDivider() {
  return <div className="w-16 h-px bg-gray-200 mx-auto my-12" />;
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-[#16803C]/10 text-[#16803C] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
      {children}
    </span>
  );
}

function Check() {
  return (
    <svg className="w-4 h-4 text-[#16803C] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function EnterpriseDeploymentPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="bg-white min-h-screen">
      <Navigation />

      {/* ── Hero ── */}
      <section className="bg-[#0D1117] text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Tag>Enterprise Deployment</Tag>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Your cloud. Your rules.<br />Enterprise-grade, every time.
          </h1>
          <p className="mt-5 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            PULSE deploys on your terms — Pulse-managed AWS, or your own infrastructure on AWS, Azure,
            OCI, GCP, or on-premise. SSO, IAM, private subnets, and L1–L3 support included.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ROUTES.bookDemo}
              className="bg-[#16803C] hover:bg-[#14703A] text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Talk to our enterprise team
            </Link>
            <Link
              href={ROUTES.enterpriseEssentials}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Enterprise features overview →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="bg-[#111827] text-gray-400 py-5 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs font-medium uppercase tracking-widest">
            {['SOC2 Practices', 'SAML 2.0 / OAuth 2.0', '99.5% Uptime SLA', 'L1–L3 Support', 'Pen Test Support', 'Data Residency Control'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16803C]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">

        {/* ── Deployment Options ── */}
        <section className="py-20">
          <div className="text-center mb-12">
            <Tag>Deployment Models</Tag>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Two ways to deploy. Same platform. Full functionality.</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Both options deliver identical platform capabilities and are covered under the same enterprise SLA framework.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Option A */}
            <div className="border-2 border-[#16803C] rounded-2xl p-8 relative">
              <span className="absolute -top-3 left-6 bg-[#16803C] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Option A — Most Popular
              </span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-1">Pulse-Managed AWS</h3>
              <p className="text-sm text-gray-500 mb-6">Fully managed by the Pulse engineering team</p>
              <ul className="space-y-3">
                {[
                  'Dedicated AWS environment provisioned by Pulse',
                  'Multi-environment setup: Dev / Test / Production',
                  'High availability with auto-scaling (EKS)',
                  'Managed disaster recovery with cross-region backups',
                  'SSL, access controls, and security hardening included',
                  'AWS region configurable for data sovereignty',
                  'Zero IT burden on your team',
                  'Go-live in 10–12 weeks',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-gray-700">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Option B */}
            <div className="border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Your Cloud or On-Premise</h3>
              <p className="text-sm text-gray-500 mb-6">Deployed on your infrastructure, managed by your IT team</p>
              <ul className="space-y-3">
                {[
                  'Deploy on AWS, Azure, OCI, GCP, or private servers',
                  'Client manages their own infrastructure',
                  'Full data sovereignty — data never leaves your environment',
                  'Pulse provides deployment documentation and support',
                  'VPN / IP restriction controls configured to your network',
                  'Suitable for air-gapped or highly regulated environments',
                  'Aligns with existing IT governance and procurement',
                  'Timeline depends on client infrastructure readiness',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-gray-700">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Comparison table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-3 px-5 font-semibold text-gray-600 w-1/3">Criteria</th>
                  <th className="text-left py-3 px-5 font-semibold text-[#16803C]">Option A — Pulse AWS</th>
                  <th className="text-left py-3 px-5 font-semibold text-gray-700">Option B — Client Cloud / On-Prem</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Infrastructure Owner', 'Pulse manages dedicated AWS environment', 'Client manages own cloud or on-premise infrastructure'],
                  ['Setup Complexity', 'Lower — fully managed by Pulse team', 'Higher — requires client IT coordination'],
                  ['Hosting Responsibility', 'Pulse', 'Client'],
                  ['Data Sovereignty', 'AWS region configurable', 'Full client control'],
                  ['Supported Clouds', 'AWS (all regions)', 'AWS, Azure, OCI, GCP, or on-premise'],
                  ['Recommended For', 'Rapid deployment, minimal IT overhead', 'Existing cloud infra or strict data residency needs'],
                ].map(([criterion, optA, optB], idx) => (
                  <tr key={criterion} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="py-3.5 px-5 font-medium text-gray-800 border-b border-gray-100">{criterion}</td>
                    <td className="py-3.5 px-5 text-gray-600 border-b border-gray-100">{optA}</td>
                    <td className="py-3.5 px-5 text-gray-600 border-b border-gray-100">{optB}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <SectionDivider />

        {/* ── Identity & Access ── */}
        <section className="py-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <Tag>Identity & Access</Tag>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">
                Integrates with your existing identity stack
              </h2>
              <p className="mt-3 text-gray-500 leading-relaxed">
                PULSE connects to corporate identity systems out of the box — no custom development required.
                Standard SSO and IAM integrations are included in the implementation scope.
              </p>
              <div className="mt-6 bg-[#FFFFEB] border border-green-200 rounded-xl p-5">
                <p className="text-sm text-gray-700 font-medium">
                  SSO and IAM integration support is included at no additional charge in the standard implementation scope.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Single Sign-On (SSO)',
                  detail: 'SAML 2.0 and OAuth 2.0 compatible. Works with Okta, Azure AD, Google Workspace, Active Directory Federation Services, and any standards-compliant IdP.',
                  badge: 'SAML 2.0 / OAuth 2.0',
                },
                {
                  title: 'Identity & Access Management (IAM)',
                  detail: 'Role mapping from corporate directory. Users sync from your AD or IdP — no manual provisioning. Group-based access assignment supported.',
                  badge: 'OpenID Connect',
                },
                {
                  title: 'Role-Based Access Control (RBAC)',
                  detail: 'Granular permissions by module, site, and function. Configurable approval hierarchies. Field users, managers, and admins have distinct access scopes.',
                  badge: 'Granular RBAC',
                },
                {
                  title: 'MFA & VPN / IP Restriction',
                  detail: 'Multi-factor authentication enforced at login. VPN or IP allowlist controls can be configured for network-level access restriction.',
                  badge: 'MFA + Network Controls',
                },
              ].map((item) => (
                <div key={item.title} className="border border-gray-200 rounded-xl p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                    <span className="shrink-0 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-mono">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ── Security Standards ── */}
        <section className="py-10">
          <div className="text-center mb-12">
            <Tag>Security Standards</Tag>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">Hardened to enterprise standards</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Security is built into the architecture — not bolted on. Every deployment is hardened against
              enterprise security requirements from day one.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Encryption in Transit & at Rest',
                detail: 'SSL/TLS enforced via Application Load Balancer. Data encrypted at rest using AES-256 on RDS and object storage.',
                icon: '🔒',
              },
              {
                title: 'Private Network Architecture',
                detail: 'Database hosted in private VPC subnets. Application services accessible only through controlled ingress paths. No direct public database exposure.',
                icon: '🏗️',
              },
              {
                title: 'Secrets Management',
                detail: 'Credentials and API keys managed via AWS Secrets Manager or equivalent. No secrets stored in code or configuration files.',
                icon: '🗝️',
              },
              {
                title: 'SOC2 Practices',
                detail: 'Platform follows SOC2-aligned security controls covering access, availability, confidentiality, and change management.',
                icon: '📋',
              },
              {
                title: 'Penetration Testing Support',
                detail: 'Client-led security assessments and penetration tests supported. Pulse provides environment access and engineering cooperation during assessments.',
                icon: '🛡️',
              },
              {
                title: 'Audit Logs & Monitoring',
                detail: 'Full application audit trail. Infrastructure monitoring via CloudWatch and CloudTrail. Centralised logging via Fluentd for compliance and incident response.',
                icon: '📊',
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* ── SLA & Support ── */}
        <section className="py-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <Tag>SLA & Support</Tag>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">
                Structured L1–L3 support with defined response times
              </h2>
              <p className="mt-3 text-gray-500 leading-relaxed">
                Enterprise support is active from day one of go-live. A dedicated account manager
                oversees the engagement, with monthly service reviews and a formal change request process.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { priority: 'P1 — Critical', def: 'Platform unavailable / data loss risk', response: '1 hour', resolution: '4 hours', color: 'text-red-600 bg-red-50 border-red-200' },
                  { priority: 'P2 — High', def: 'Major functionality impaired', response: '4 hours', resolution: '1 business day', color: 'text-orange-600 bg-orange-50 border-orange-200' },
                  { priority: 'P3 — Medium', def: 'Non-critical issue affecting usability', response: '1 business day', resolution: '3 business days', color: 'text-yellow-700 bg-yellow-50 border-yellow-200' },
                  { priority: 'P4 — Low', def: 'General query / enhancement request', response: '2 business days', resolution: 'As agreed', color: 'text-gray-600 bg-gray-50 border-gray-200' },
                ].map((row) => (
                  <div key={row.priority} className={`rounded-xl border p-4 ${row.color}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm">{row.priority}</span>
                    </div>
                    <p className="text-xs mb-2 opacity-80">{row.def}</p>
                    <div className="flex gap-6 text-xs font-medium">
                      <span>Response: <span className="font-bold">{row.response}</span></span>
                      <span>Resolution: <span className="font-bold">{row.resolution}</span></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {/* Uptime */}
              <div className="bg-[#0D1117] text-white rounded-2xl p-8 text-center">
                <p className="text-6xl font-extrabold text-[#16803C]">99.5%</p>
                <p className="text-sm text-gray-400 mt-2 uppercase tracking-widest">Platform Availability</p>
                <p className="text-xs text-gray-500 mt-3">
                  Committed minimum for Option A (Pulse-managed AWS). Planned maintenance communicated at least 72 hours in advance.
                </p>
              </div>

              {/* Support tiers */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Support Tiers</p>
                </div>
                {[
                  { tier: 'L1 — Service Desk', fn: 'First Contact Resolution', scope: 'User queries, account management, access issues, ticket creation' },
                  { tier: 'L2 — Technical', fn: 'Application Support', scope: 'Platform config issues, integration queries, workflow troubleshooting' },
                  { tier: 'L3 — Engineering', fn: 'Product Engineering', scope: 'Bug fixes, environment-level issues, security incidents, release deployment' },
                ].map((row, i) => (
                  <div key={row.tier} className={`px-5 py-4 ${i < 2 ? 'border-b border-gray-100' : ''}`}>
                    <p className="text-sm font-semibold text-gray-900">{row.tier}</p>
                    <p className="text-xs text-[#16803C] font-medium">{row.fn}</p>
                    <p className="text-xs text-gray-500 mt-1">{row.scope}</p>
                  </div>
                ))}
              </div>

              {/* Governance */}
              <div className="bg-[#FFFFEB] border border-green-200 rounded-2xl p-5">
                <p className="text-sm font-semibold text-gray-900 mb-1">Service Governance</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex gap-2"><Check />Dedicated account manager</li>
                  <li className="flex gap-2"><Check />Monthly service review reports</li>
                  <li className="flex gap-2"><Check />Formal change request process</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ── Integrations ── */}
        <section className="py-10">
          <div className="text-center mb-10">
            <Tag>Enterprise Integrations</Tag>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">Integrates with your enterprise IT ecosystem</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Standard enterprise integrations are included in the implementation scope at no additional charge.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-3 px-5 font-semibold text-gray-600">Integration</th>
                  <th className="text-left py-3 px-5 font-semibold text-gray-600">Status</th>
                  <th className="text-left py-3 px-5 font-semibold text-gray-600">Details</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Single Sign-On (SSO)', 'Included', 'SAML 2.0 / OAuth 2.0 compatible'],
                  ['Identity & Access Management (IAM)', 'Included', 'Role mapping from corporate directory'],
                  ['RESTful API', 'Included', 'Full API documentation provided; all platform functions exposed'],
                  ['VPN / IP Restriction Controls', 'Included', 'Network-level access control for private deployments'],
                  ['Security Validation & Pen Testing', 'Included', 'Support for client-led security assessments'],
                  ['ERP / CMMS Integration', 'Additional', 'Quoted separately based on integration complexity'],
                  ['BI / Analytics Tool Integration', 'Additional', 'Data export and API available as standard; connector build quoted'],
                ].map(([name, status, detail], idx) => (
                  <tr key={name} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="py-3 px-5 font-medium text-gray-800 border-b border-gray-100">{name}</td>
                    <td className="py-3 px-5 border-b border-gray-100">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${status === 'Included' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                        {status}
                      </span>
                    </td>
                    <td className="py-3 px-5 text-gray-500 border-b border-gray-100">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <SectionDivider />

        {/* ── Implementation Timeline ── */}
        <section className="py-10">
          <div className="text-center mb-12">
            <Tag>Implementation</Tag>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">Structured, phase-based delivery</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              A 7-phase implementation methodology designed for minimal disruption and rapid user adoption.
              Timelines shown are for Option A (Pulse-managed AWS).
            </p>
          </div>

          <div className="space-y-3">
            {[
              { phase: '01', name: 'Project Initiation & Scoping', weeks: 'Week 1–2', activities: 'Project kickoff, stakeholder alignment, requirements confirmation, project plan finalisation' },
              { phase: '02', name: 'Environment Setup & Configuration', weeks: 'Week 2–4', activities: 'AWS environment provisioning, application deployment, multi-environment setup (Dev/Test/Prod), SSL and security configuration' },
              { phase: '03', name: 'Platform Configuration', weeks: 'Week 3–6', activities: 'Site/location hierarchy, user and role setup, workflow configuration, checklist and form build, notification rules, report setup' },
              { phase: '04', name: 'Integration & Security Validation', weeks: 'Week 5–7', activities: 'SSO/IAM integration setup, API integration setup, VPN/IP restrictions, security testing and validation' },
              { phase: '05', name: 'User Acceptance Testing (UAT)', weeks: 'Week 7–9', activities: 'UAT execution, defect resolution, sign-off, performance and stability testing' },
              { phase: '06', name: 'Training & Onboarding', weeks: 'Week 9–10', activities: 'Administrator training, end-user training, training material delivery, mobile app enablement' },
              { phase: '07', name: 'Go-Live & Hypercare', weeks: 'Week 10–12', activities: 'Production deployment, go-live support, hypercare period monitoring, handover to steady-state support' },
            ].map((row) => (
              <div key={row.phase} className="flex gap-5 items-start rounded-xl border border-gray-100 bg-gray-50/50 p-5">
                <span className="text-3xl font-extralight text-gray-300 w-8 shrink-0">{row.phase}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="font-semibold text-gray-900 text-sm">{row.name}</h3>
                    <span className="text-xs text-[#16803C] font-semibold bg-green-50 px-2.5 py-0.5 rounded-full shrink-0">{row.weeks}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{row.activities}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-800">
              <strong>Option B note:</strong> Timeline for client-cloud deployments may extend further based on infrastructure readiness, internal approvals, and cross-team coordination. All phases depend on client IT, security, and project management teams.
            </p>
          </div>
        </section>

        <SectionDivider />

        {/* ── Why Pulse for enterprise IT ── */}
        <section className="py-10">
          <div className="text-center mb-10">
            <Tag>Why PULSE</Tag>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">What enterprise IT teams get</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { num: '01', title: 'Purpose-Built Platform', detail: 'Designed exclusively for operational management — not adapted from a generic project tool. Less configuration overhead, faster time-to-value.' },
              { num: '02', title: 'Real AWS Enterprise Infrastructure', detail: 'EKS-based, Kubernetes-orchestrated, with HPA auto-scaling and RDS on private subnets. The same stack used for Tata Motors, Accor, and public sector deployments.' },
              { num: '03', title: 'Cloud-Portable Architecture', detail: 'Same containerised application stack deploys identically on AWS EKS, Azure AKS, OCI OKE, or GKE. No cloud lock-in.' },
              { num: '04', title: 'Transparent Commercials', detail: 'All-inclusive pricing: implementation, hosting, licensing, and support clearly itemised. No hidden fees or integration surcharges for standard SSO/IAM.' },
              { num: '05', title: 'Security-First by Design', detail: 'SSL/TLS everywhere, RBAC enforced at the API layer, secrets in vault, pen test support, SOC2-aligned controls. Not an afterthought.' },
              { num: '06', title: 'Continuous Product Investment', detail: 'All standard platform enhancements and new features are automatically available during the subscription — no upgrade fees, no version lock.' },
            ].map((item) => (
              <div key={item.num} className="rounded-2xl border border-gray-200 p-6">
                <span className="text-3xl font-extralight text-gray-300">{item.num}</span>
                <h3 className="font-bold text-gray-900 mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

      </div>{/* end max-w container */}

      {/* ── CTA ── */}
      <section className="bg-[#0D1117] py-20 mt-10">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to discuss your deployment requirements?
          </h2>
          <p className="text-gray-400 mb-8">
            Share your infrastructure, SSO provider, and compliance requirements. Our enterprise team will scope a deployment plan specific to your environment.
          </p>
          <LeadCaptureForm
            source="enterprise-deployment"
            placeholder="Enter your work email"
            buttonText="Talk to Enterprise Team"
            className="max-w-xl mx-auto"
          />
          <p className="mt-4 text-xs text-gray-600">
            Or{' '}
            <Link href={ROUTES.bookDemo} className="text-[#16803C] hover:underline">
              book a 30-minute demo
            </Link>{' '}
            with our solutions team.
          </p>
        </div>
      </section>
    </main>
  );
}
