import { getTranslations, setRequestLocale } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { Link } from '@/i18n/navigation';
import { ROUTES } from '@/config/links';

interface PageProps {
  params: Promise<{ locale: string }>;
}

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

type PriorityRow = { priority: string; def: string; response: string; resolution: string; color: string };
type TierRow = { tier: string; fn: string; scope: string };
type IdentityItem = { title: string; detail: string; badge: string };
type SecurityItem = { title: string; detail: string; icon: string };
type GovernanceItem = string;
type WhyItem = { num: string; title: string; detail: string };
type Phase = { phase: string; name: string; weeks: string; activities: string };

export default async function EnterpriseDeploymentPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('enterpriseDeploymentPage');

  // Raw array data from translations
  const trustBarItems = t.raw('trustBar') as string[];
  const optionAItems = t.raw('deployment.optionA.items') as string[];
  const optionBItems = t.raw('deployment.optionB.items') as string[];
  const tableRows = t.raw('deployment.table.rows') as string[][];
  const identityItems = t.raw('identity.items') as IdentityItem[];
  const securityItems = t.raw('security.items') as SecurityItem[];
  const priorities = t.raw('sla.priorities') as Omit<PriorityRow, 'color'>[];
  const tierItems = t.raw('sla.tiers.items') as TierRow[];
  const governanceItems = t.raw('sla.governance.items') as GovernanceItem[];
  const integrationRows = t.raw('integrations.rows') as string[][];
  const phases = t.raw('implementation.phases') as Phase[];
  const whyItems = t.raw('whyPulse.items') as WhyItem[];

  const priorityColors = [
    'text-red-600 bg-red-50 border-red-200',
    'text-orange-600 bg-orange-50 border-orange-200',
    'text-yellow-700 bg-yellow-50 border-yellow-200',
    'text-gray-600 bg-gray-50 border-gray-200',
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navigation />

      {/* ── Hero ── */}
      <section className="bg-[#0D1117] text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Tag>{t('hero.tag')}</Tag>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {t('hero.title')}<br />{t('hero.titleLine2')}
          </h1>
          <p className="mt-5 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ROUTES.bookDemo}
              className="bg-[#16803C] hover:bg-[#14703A] text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              {t('hero.cta1')}
            </Link>
            <Link
              href={ROUTES.enterpriseEssentials}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              {t('hero.cta2')}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="bg-[#111827] text-gray-400 py-5 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs font-medium uppercase tracking-widest">
            {trustBarItems.map((item) => (
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
            <Tag>{t('deployment.tag')}</Tag>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">{t('deployment.title')}</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">{t('deployment.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Option A */}
            <div className="border-2 border-[#16803C] rounded-2xl p-8 relative">
              <span className="absolute -top-3 left-6 bg-[#16803C] text-white text-xs font-semibold px-3 py-1 rounded-full">
                {t('deployment.optionA.badge')}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-1">{t('deployment.optionA.title')}</h3>
              <p className="text-sm text-gray-500 mb-6">{t('deployment.optionA.subtitle')}</p>
              <ul className="space-y-3">
                {optionAItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-gray-700">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Option B */}
            <div className="border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{t('deployment.optionB.title')}</h3>
              <p className="text-sm text-gray-500 mb-6">{t('deployment.optionB.subtitle')}</p>
              <ul className="space-y-3">
                {optionBItems.map((item) => (
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
                  <th className="text-left py-3 px-5 font-semibold text-gray-600 w-1/3">{t('deployment.table.col1')}</th>
                  <th className="text-left py-3 px-5 font-semibold text-[#16803C]">{t('deployment.table.col2')}</th>
                  <th className="text-left py-3 px-5 font-semibold text-gray-700">{t('deployment.table.col3')}</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map(([criterion, optA, optB], idx) => (
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
              <Tag>{t('identity.tag')}</Tag>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">
                {t('identity.title')}
              </h2>
              <p className="mt-3 text-gray-500 leading-relaxed">{t('identity.subtitle')}</p>
              <div className="mt-6 bg-[#FFFFEB] border border-green-200 rounded-xl p-5">
                <p className="text-sm text-gray-700 font-medium">{t('identity.note')}</p>
              </div>
            </div>

            <div className="space-y-4">
              {identityItems.map((item) => (
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
            <Tag>{t('security.tag')}</Tag>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">{t('security.title')}</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">{t('security.subtitle')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {securityItems.map((item) => (
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
              <Tag>{t('sla.tag')}</Tag>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">{t('sla.title')}</h2>
              <p className="mt-3 text-gray-500 leading-relaxed">{t('sla.subtitle')}</p>

              <div className="mt-8 space-y-4">
                {priorities.map((row, i) => (
                  <div key={row.priority} className={`rounded-xl border p-4 ${priorityColors[i]}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm">{row.priority}</span>
                    </div>
                    <p className="text-xs mb-2 opacity-80">{row.def}</p>
                    <div className="flex gap-6 text-xs font-medium">
                      <span>{t('sla.responseLabel')} <span className="font-bold">{row.response}</span></span>
                      <span>{t('sla.resolutionLabel')} <span className="font-bold">{row.resolution}</span></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {/* Uptime */}
              <div className="bg-[#0D1117] text-white rounded-2xl p-8 text-center">
                <p className="text-6xl font-extrabold text-[#16803C]">{t('sla.uptime.value')}</p>
                <p className="text-sm text-gray-400 mt-2 uppercase tracking-widest">{t('sla.uptime.label')}</p>
                <p className="text-xs text-gray-500 mt-3">{t('sla.uptime.note')}</p>
              </div>

              {/* Support tiers */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">{t('sla.tiers.title')}</p>
                </div>
                {tierItems.map((row, i) => (
                  <div key={row.tier} className={`px-5 py-4 ${i < tierItems.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <p className="text-sm font-semibold text-gray-900">{row.tier}</p>
                    <p className="text-xs text-[#16803C] font-medium">{row.fn}</p>
                    <p className="text-xs text-gray-500 mt-1">{row.scope}</p>
                  </div>
                ))}
              </div>

              {/* Governance */}
              <div className="bg-[#FFFFEB] border border-green-200 rounded-2xl p-5">
                <p className="text-sm font-semibold text-gray-900 mb-1">{t('sla.governance.title')}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {governanceItems.map((item) => (
                    <li key={item} className="flex gap-2"><Check />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ── Integrations ── */}
        <section className="py-10">
          <div className="text-center mb-10">
            <Tag>{t('integrations.tag')}</Tag>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">{t('integrations.title')}</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">{t('integrations.subtitle')}</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-3 px-5 font-semibold text-gray-600">{t('integrations.col1')}</th>
                  <th className="text-left py-3 px-5 font-semibold text-gray-600">{t('integrations.col2')}</th>
                  <th className="text-left py-3 px-5 font-semibold text-gray-600">{t('integrations.col3')}</th>
                </tr>
              </thead>
              <tbody>
                {integrationRows.map(([name, status, detail], idx) => (
                  <tr key={name} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="py-3 px-5 font-medium text-gray-800 border-b border-gray-100">{name}</td>
                    <td className="py-3 px-5 border-b border-gray-100">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${status === t('integrations.included') ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
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
            <Tag>{t('implementation.tag')}</Tag>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">{t('implementation.title')}</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">{t('implementation.subtitle')}</p>
          </div>

          <div className="space-y-3">
            {phases.map((row) => (
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
            <p className="text-sm text-amber-800">{t('implementation.optionBNote')}</p>
          </div>
        </section>

        <SectionDivider />

        {/* ── Why Pulse for enterprise IT ── */}
        <section className="py-10">
          <div className="text-center mb-10">
            <Tag>{t('whyPulse.tag')}</Tag>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">{t('whyPulse.title')}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyItems.map((item) => (
              <div key={item.num} className="rounded-2xl border border-gray-200 p-6">
                <span className="text-3xl font-extralight text-gray-300">{item.num}</span>
                <h3 className="font-bold text-gray-900 mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── MCP callout ── */}
      <section className="bg-[#FFFFEB] border-y border-black/5 py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#0D1117] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Icon */}
            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-[#16803C]/15 border border-[#16803C]/25">
              <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-[#16803C]" stroke="currentColor" strokeWidth={1.6}>
                <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.357 2.057l.183.088m-5.04-7.859V3.104m5.04 0c.248.023.496.05.744.082M19.5 4.5c-.69.386-1.396.74-2.115 1.058M5.25 4.5C5.94 4.886 6.646 5.24 7.365 5.558M12 12.75h.008v.008H12v-.008z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {/* Text */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#16803C]">AI-Ready by Default</span>
                <span className="bg-[#16803C]/20 text-[#16803C] text-xs font-bold px-2 py-0.5 rounded">MCP</span>
              </div>
              <h3 className="text-white font-bold text-lg md:text-xl mb-2">
                {t('mcpCallout.title')}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                {t('mcpCallout.subtitle')}
              </p>
            </div>
            {/* CTA */}
            <div className="flex-shrink-0">
              <Link
                href={ROUTES.apiIntegration}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors whitespace-nowrap"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0D1117] py-20 mt-10">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t('cta.title')}</h2>
          <p className="text-gray-400 mb-8">{t('cta.subtitle')}</p>
          <LeadCaptureForm
            source="enterprise-deployment"
            placeholder={t('cta.formPlaceholder')}
            buttonText={t('cta.formButton')}
            className="max-w-xl mx-auto"
          />
          <p className="mt-4 text-sm text-gray-400">
            {t('cta.footerOr')}{' '}
            <Link href={ROUTES.bookDemo} className="text-white underline hover:text-gray-200">
              {t('cta.footerLink')}
            </Link>{' '}
            {t('cta.footerSuffix')}
          </p>
        </div>
      </section>
    </main>
  );
}
