import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Enterprise Essentials",
  description: "Secure. Reliable. Built for scale.",
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function EnterpriseEssentialsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "enterpriseEssentials.page" });

  return (
    <main className="bg-white text-gray-900">
      {/* Styles from reference */}
      <style>{`
        ::-webkit-scrollbar { display: none; }
        .editorial-grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E");
        }
      `}</style>

  {/* Hero */}
  <section id="hero-bar" className="relative bg-[#FFFFEB] editorial-grain py-24">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="text-center">
    <p className="text-[10px] text-gray-500 tracking-[0.25em] uppercase mb-6 font-medium">{t("hero.barTag")}</p>
    <h1 className="text-[48px] font-semibold tracking-tight mb-4 text-gray-900">{t("hero.title")}</h1>
    <p className="text-[16px] text-gray-600 tracking-wide">{t("hero.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Section 01: Security & Access */}
      <section id="security-access" className="relative py-6 bg-white">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="w-[12%] h-[1px] bg-[#DADADA] mb-12 mx-auto" />
          <div className="relative mb-8">
            <div className="mb-6">
              <span className="text-5xl font-extralight text-[#D1D1D1]">{t("sections.securityAccess.number")}</span>
            </div>
            <div>
              <h2 className="text-[22px] font-semibold text-gray-900 mb-2 tracking-tight">
                {t("sections.securityAccess.title.part1")}{" "}
                <span className="relative inline-block">
                  {t("sections.securityAccess.title.highlight")}
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E4B702]" />
                </span>
              </h2>
              <p className="text-[11px] text-gray-500 mb-8 mt-4 uppercase tracking-[0.12em] font-medium">
                {t("sections.securityAccess.subtitle")}
              </p>
              <div className="grid grid-cols-2 gap-x-20 gap-y-6">
                {t.raw("sections.securityAccess.items").map((item: { text: string }, idx: number) => (
                  <div className="flex items-start gap-3" key={`security-item-${idx}`}>
                    <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                    <p className="text-[16px] text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Compliance & Governance */}
      <section id="compliance-governance" className="relative py-6 bg-white">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="w-[12%] h-[1px] bg-[#DADADA] mb-12 mx-auto" />
          <div className="relative mb-8">
            <div className="mb-6">
              <span className="text-5xl font-extralight text-[#D1D1D1]">{t("sections.complianceGovernance.number")}</span>
            </div>
            <div>
              <h2 className="text-[22px] font-semibold text-gray-900 mb-2 tracking-tight">
                {t("sections.complianceGovernance.title.part1")}{" "}
                <span className="relative inline-block">
                  {t("sections.complianceGovernance.title.highlight")}
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E4B702]" />
                </span>
              </h2>
              <p className="text-[11px] text-gray-500 mb-8 mt-4 uppercase tracking-[0.12em] font-medium">
                {t("sections.complianceGovernance.subtitle")}
              </p>
              <div className="grid grid-cols-2 gap-x-20 gap-y-6">
                {t.raw("sections.complianceGovernance.items").map((item: { text: string }, idx: number) => (
                  <div className="flex items-start gap-3" key={`compliance-item-${idx}`}>
                    <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                    <p className="text-[16px] text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: Deployment Options */}
      <section id="deployment-options" className="relative py-6 bg-white">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="w-[12%] h-[1px] bg-[#DADADA] mb-12 mx-auto" />
          <div className="relative mb-8">
            <div className="mb-6">
              <span className="text-5xl font-extralight text-[#D1D1D1]">{t("sections.deploymentOptions.number")}</span>
            </div>
            <div>
              <h2 className="text-[22px] font-semibold text-gray-900 mb-2 tracking-tight">
                {t("sections.deploymentOptions.title.part1")}{" "}
                <span className="relative inline-block">
                  {t("sections.deploymentOptions.title.highlight")}
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E4B702]" />
                </span>
              </h2>
              <p className="text-[11px] text-gray-500 mb-8 mt-4 uppercase tracking-[0.12em] font-medium">{t("sections.deploymentOptions.subtitle")}</p>

              <div className="bg-[#FDF6E9] border border-[#E8E5D8] rounded-[3px] p-6 mb-6">
                <p className="text-[16px] text-gray-700 leading-relaxed">{t("sections.deploymentOptions.banner")}</p>
              </div>

              <div className="grid grid-cols-2 gap-x-20 gap-y-6">
                {t.raw("sections.deploymentOptions.items").map((item: { text: string }, idx: number) => (
                  <div className="flex items-start gap-3" key={`deploy-item-${idx}`}>
                    <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                    <p className="text-[16px] text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Performance & Scalability */}
      <section id="performance-scalability" className="relative py-6 bg-white">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="w-[12%] h-[1px] bg-[#DADADA] mb-12 mx-auto" />
          <div className="relative mb-8">
            <div className="mb-6">
              <span className="text-5xl font-extralight text-[#D1D1D1]">{t("sections.performanceScalability.number")}</span>
            </div>
            <div>
              <h2 className="text-[22px] font-semibold text-gray-900 mb-2 tracking-tight">
                {t("sections.performanceScalability.title.part1")}{" "}
                <span className="relative inline-block">
                  {t("sections.performanceScalability.title.highlight")}
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E4B702]" />
                </span>
              </h2>
              <p className="text-[11px] text-gray-500 mb-8 mt-4 uppercase tracking-[0.12em] font-medium">
                {t("sections.performanceScalability.subtitle")}
              </p>
              <div className="grid grid-cols-2 gap-x-20 gap-y-6">
                {t.raw("sections.performanceScalability.items").map((item: { text: string }, idx: number) => (
                  <div className="flex items-start gap-3" key={`perf-item-${idx}`}>
                    <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                    <p className="text-[16px] text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 05: Data Governance */}
      <section id="data-governance" className="relative py-6 bg-white">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="w-[12%] h-[1px] bg-[#DADADA] mb-12 mx-auto" />
          <div className="relative mb-8">
            <div className="mb-6">
              <span className="text-5xl font-extralight text-[#D1D1D1]">{t("sections.dataGovernance.number")}</span>
            </div>
            <div>
              <h2 className="text-[22px] font-semibold text-gray-900 mb-2 tracking-tight">
                {t("sections.dataGovernance.title.part1")}{" "}
                <span className="relative inline-block">
                  {t("sections.dataGovernance.title.highlight")}
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E4B702]" />
                </span>
              </h2>
              <p className="text-[11px] text-gray-500 mb-8 mt-4 uppercase tracking-[0.12em] font-medium">
                {t("sections.dataGovernance.subtitle")}
              </p>
              <div className="bg-[#FDF6E9] border border-[#E8E5D8] rounded-[3px] p-6 mb-6">
                <p className="text-[16px] text-gray-700 leading-relaxed">{t("sections.dataGovernance.banner")}</p>
              </div>

              <div className="grid grid-cols-2 gap-x-20 gap-y-6">
                {t.raw("sections.dataGovernance.items").map((item: { text: string }, idx: number) => (
                  <div className="flex items-start gap-3" key={`data-item-${idx}`}>
                    <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                    <p className="text-[16px] text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 06: Integrations & Ecosystem */}
      <section id="integrations-ecosystem" className="relative py-6 bg-white">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="w-[12%] h-[1px] bg-[#DADADA] mb-12 mx-auto" />
          <div className="relative mb-8">
            <div className="mb-6">
              <span className="text-5xl font-extralight text-[#D1D1D1]">{t("sections.integrationsEcosystem.number")}</span>
            </div>
            <div>
              <h2 className="text-[22px] font-semibold text-gray-900 mb-2 tracking-tight">
                {t("sections.integrationsEcosystem.title.part1")}{" "}
                <span className="relative inline-block">
                  {t("sections.integrationsEcosystem.title.highlight")}
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E4B702]" />
                </span>
              </h2>
              <p className="text-[11px] text-gray-500 mb-8 mt-4 uppercase tracking-[0.12em] font-medium">
                {t("sections.integrationsEcosystem.subtitle")}
              </p>
              <div className="grid grid-cols-2 gap-x-20 gap-y-6">
                {t.raw("sections.integrationsEcosystem.items").map((item: { text: string }, idx: number) => (
                  <div className="flex items-start gap-3" key={`integrations-item-${idx}`}>
                    <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                    <p className="text-[16px] text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 07: Auditability & Monitoring */}
      <section id="auditability-monitoring" className="relative py-6 bg-white">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="w-[12%] h-[1px] bg-[#DADADA] mb-12 mx-auto" />
          <div className="relative mb-8">
            <div className="mb-6">
              <span className="text-5xl font-extralight text-[#D1D1D1]">{t("sections.auditabilityMonitoring.number")}</span>
            </div>
            <div>
              <h2 className="text-[22px] font-semibold text-gray-900 mb-2 tracking-tight">
                {t("sections.auditabilityMonitoring.title.part1")}{" "}
                <span className="relative inline-block">
                  {t("sections.auditabilityMonitoring.title.highlight")}
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E4B702]" />
                </span>
              </h2>
              <p className="text-[11px] text-gray-500 mb-8 mt-4 uppercase tracking-[0.12em] font-medium">
                {t("sections.auditabilityMonitoring.subtitle")}
              </p>
              <div className="grid grid-cols-2 gap-x-20 gap-y-6">
                {t.raw("sections.auditabilityMonitoring.items").map((item: { text: string }, idx: number) => (
                  <div className="flex items-start gap-3" key={`audit-item-${idx}`}>
                    <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                    <p className="text-[16px] text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 08: Enterprise Services */}
      <section id="enterprise-services" className="relative py-6 bg-white">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="w-[12%] h-[1px] bg-[#DADADA] mb-12 mx-auto" />
          <div className="relative mb-8">
            <div className="mb-6">
              <span className="text-5xl font-extralight text-[#D1D1D1]">{t("sections.enterpriseServices.number")}</span>
            </div>
            <div>
              <h2 className="text-[22px] font-semibold text-gray-900 mb-2 tracking-tight">
                {t("sections.enterpriseServices.title.part1")}{" "}
                <span className="relative inline-block">
                  {t("sections.enterpriseServices.title.highlight")}
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E4B702]" />
                </span>
              </h2>
              <p className="text-[11px] text-gray-500 mb-8 mt-4 uppercase tracking-[0.12em] font-medium">
                {t("sections.enterpriseServices.subtitle")}
              </p>
              <div className="grid grid-cols-2 gap-x-20 gap-y-6">
                {t.raw("sections.enterpriseServices.items").map((item: { text: string }, idx: number) => (
                  <div className="flex items-start gap-3" key={`service-item-${idx}`}>
                    <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                    <p className="text-[16px] text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer note (layout already renders global footer) */}
      <section id="footer-note" className="bg-white border-t border-[#DADADA] py-16">
        <div className="max-w-[820px] mx-auto px-8 text-center">
          <p className="text-[11px] text-gray-700 tracking-[0.18em] mb-3 font-semibold uppercase">
            {t("footer.title")}
          </p>
          <p className="text-[10px] text-gray-400 tracking-[0.15em] uppercase">{t("footer.subtitle")}</p>
        </div>
      </section>
    </main>
  );
}
