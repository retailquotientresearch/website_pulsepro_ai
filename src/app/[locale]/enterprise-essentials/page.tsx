import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

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
  <section id="hero-bar" className="relative bg-[#FDF6E9] editorial-grain py-24">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="text-center">
            <p className="text-[10px] text-gray-500 tracking-[0.25em] uppercase mb-6 font-medium">Enterprise-Grade Platform</p>
            <h1 className="text-[48px] font-semibold tracking-tight mb-4 text-gray-900">Enterprise Essentials</h1>
            <p className="text-[16px] text-gray-600 tracking-wide">Secure. Reliable. Built for scale.</p>
          </div>
        </div>
      </section>

      {/* Section 01: Security & Access */}
      <section id="security-access" className="relative py-12 bg-white">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="w-[12%] h-[1px] bg-[#DADADA] mb-12 mx-auto" />
          <div className="relative mb-8">
            <div className="mb-6">
              <span className="text-5xl font-extralight text-[#D1D1D1]">01</span>
            </div>
            <div>
              <h2 className="text-[22px] font-semibold text-gray-900 mb-2 tracking-tight">
                Security &{" "}
                <span className="relative inline-block">
                  Access
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E4B702]" />
                </span>
              </h2>
              <p className="text-[11px] text-gray-500 mb-8 mt-4 uppercase tracking-[0.12em] font-medium">
                Robust identity and access controls.
              </p>

              <div className="grid grid-cols-2 gap-x-20 gap-y-6">
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed">
                    <span className="font-medium">Single Sign-On (SSO):</span> Azure AD, Okta, Google
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Session & IP Controls</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Granular Permissions</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Multi-Factor Authentication</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">SOC 2 Aligned Practices</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed">
                    <span className="font-medium">Encryption Standards:</span> AES-256 at rest, TLS 1.2 in transit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Compliance & Governance */}
      <section id="compliance-governance" className="relative py-12 bg-white">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="w-[12%] h-[1px] bg-[#DADADA] mb-12 mx-auto" />
          <div className="relative mb-8">
            <div className="mb-6">
              <span className="text-5xl font-extralight text-[#D1D1D1]">02</span>
            </div>
            <div>
              <h2 className="text-[22px] font-semibold text-gray-900 mb-2 tracking-tight">
                Compliance &{" "}
                <span className="relative inline-block">
                  Governance
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E4B702]" />
                </span>
              </h2>
              <p className="text-[11px] text-gray-500 mb-8 mt-4 uppercase tracking-[0.12em] font-medium">
                Built-in compliance workflows and governance controls.
              </p>

              <div className="grid grid-cols-2 gap-x-20 gap-y-6">
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Data Retention Policies</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Access Logs</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Right-to-Erase Workflows</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed">
                    <span className="font-medium">Data Exportability:</span> CSV, XLS, API, SFTP
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Audit Trails</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: Deployment Options */}
      <section id="deployment-options" className="relative py-12 bg-white">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="w-[12%] h-[1px] bg-[#DADADA] mb-12 mx-auto" />
          <div className="relative mb-8">
            <div className="mb-6">
              <span className="text-5xl font-extralight text-[#D1D1D1]">03</span>
            </div>
            <div>
              <h2 className="text-[22px] font-semibold text-gray-900 mb-2 tracking-tight">
                Deployment{" "}
                <span className="relative inline-block">
                  Options
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E4B702]" />
                </span>
              </h2>
              <p className="text-[11px] text-gray-500 mb-8 mt-4 uppercase tracking-[0.12em] font-medium">Run Pulse your way.</p>

              <div className="bg-[#FDF6E9] border border-[#E8E5D8] rounded-[3px] p-6 mb-6">
                <p className="text-[16px] text-gray-700 leading-relaxed">
                  <span className="font-semibold">On-Premise or Any-Cloud Deployment:</span> AWS, Azure, GCP, OCI, custom cloud
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-20 gap-y-6">
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Customizable Deployment Workflows</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Secure Private Cloud Setups</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Enterprise-Grade Migration Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Performance & Scalability */}
      <section id="performance-scalability" className="relative py-12 bg-white">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="w-[12%] h-[1px] bg-[#DADADA] mb-12 mx-auto" />
          <div className="relative mb-8">
            <div className="mb-6">
              <span className="text-5xl font-extralight text-[#D1D1D1]">04</span>
            </div>
            <div>
              <h2 className="text-[22px] font-semibold text-gray-900 mb-2 tracking-tight">
                Performance at Enterprise{" "}
                <span className="relative inline-block">
                  Scale
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E4B702]" />
                </span>
              </h2>
              <p className="text-[11px] text-gray-500 mb-8 mt-4 uppercase tracking-[0.12em] font-medium">
                Engineered for heavy workloads and global operations.
              </p>

              <div className="grid grid-cols-2 gap-x-20 gap-y-6">
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">99.9% Uptime SLA</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">High Performance Engines</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Parallel Processing</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Query Optimization</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Auto-Scaling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 05: Data Governance */}
      <section id="data-governance" className="relative py-12 bg-white">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="w-[12%] h-[1px] bg-[#DADADA] mb-12 mx-auto" />
          <div className="relative mb-8">
            <div className="mb-6">
              <span className="text-5xl font-extralight text-[#D1D1D1]">05</span>
            </div>
            <div>
              <h2 className="text-[22px] font-semibold text-gray-900 mb-2 tracking-tight">
                Data{" "}
                <span className="relative inline-block">
                  Governance
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E4B702]" />
                </span>
              </h2>
              <p className="text-[11px] text-gray-500 mb-8 mt-4 uppercase tracking-[0.12em] font-medium">
                Full control over where and how your data is stored.
              </p>

              <div className="bg-[#FDF6E9] border border-[#E8E5D8] rounded-[3px] p-6 mb-6">
                <p className="text-[16px] text-gray-700 leading-relaxed">
                  <span className="font-semibold">Flexible Data Residency:</span> US, Europe, Middle East, UAE, APAC
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-20 gap-y-6">
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Custom Retention Policies</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Customer-Controlled Backups</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed">
                    <span className="font-medium">Encrypted Everywhere:</span> AES-256, TLS 1.2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 06: Integrations & Ecosystem */}
      <section id="integrations-ecosystem" className="relative py-12 bg-white">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="w-[12%] h-[1px] bg-[#DADADA] mb-12 mx-auto" />
          <div className="relative mb-8">
            <div className="mb-6">
              <span className="text-5xl font-extralight text-[#D1D1D1]">06</span>
            </div>
            <div>
              <h2 className="text-[22px] font-semibold text-gray-900 mb-2 tracking-tight">
                Integrations &{" "}
                <span className="relative inline-block">
                  Ecosystem
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E4B702]" />
                </span>
              </h2>
              <p className="text-[11px] text-gray-500 mb-8 mt-4 uppercase tracking-[0.12em] font-medium">
                Connect Pulse to your enterprise stack.
              </p>

              <div className="grid grid-cols-2 gap-x-20 gap-y-6">
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed">
                    <span className="font-medium">API Integration:</span> Open APIs, Power BI-ready
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Power BI Integration</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Webhooks</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">SharePoint / OneDrive Workflows</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">SFTP Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 07: Auditability & Monitoring */}
      <section id="auditability-monitoring" className="relative py-12 bg-white">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="w-[12%] h-[1px] bg-[#DADADA] mb-12 mx-auto" />
          <div className="relative mb-8">
            <div className="mb-6">
              <span className="text-5xl font-extralight text-[#D1D1D1]">07</span>
            </div>
            <div>
              <h2 className="text-[22px] font-semibold text-gray-900 mb-2 tracking-tight">
                Auditability &{" "}
                <span className="relative inline-block">
                  Monitoring
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E4B702]" />
                </span>
              </h2>
              <p className="text-[11px] text-gray-500 mb-8 mt-4 uppercase tracking-[0.12em] font-medium">
                Complete visibility into system activity.
              </p>

              <div className="grid grid-cols-2 gap-x-20 gap-y-6">
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Audit Logs</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed">
                    <span className="font-medium">System Monitoring:</span> uptime, errors, latency
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Export Logs</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Object-Level Audit Trails</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed">
                    <span className="font-medium">API Logs:</span> request history with timestamps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 08: Enterprise Services */}
      <section id="enterprise-services" className="relative py-12 bg-white">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="w-[12%] h-[1px] bg-[#DADADA] mb-12 mx-auto" />
          <div className="relative mb-8">
            <div className="mb-6">
              <span className="text-5xl font-extralight text-[#D1D1D1]">08</span>
            </div>
            <div>
              <h2 className="text-[22px] font-semibold text-gray-900 mb-2 tracking-tight">
                Enterprise Services &{" "}
                <span className="relative inline-block">
                  Support
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E4B702]" />
                </span>
              </h2>
              <p className="text-[11px] text-gray-500 mb-8 mt-4 uppercase tracking-[0.12em] font-medium">
                Dedicated assistance for your enterprise.
              </p>

              <div className="grid grid-cols-2 gap-x-20 gap-y-6">
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Dedicated Onboarding</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Dedicated CSM</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Go-Live in 24 Hours</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">24×7 Enterprise Support</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 font-light text-[16px]">—</span>
                  <p className="text-[16px] text-gray-700 leading-relaxed font-medium">Training & Enablement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer note (layout already renders global footer) */}
  <section id="footer-note" className="bg-[#FDF6E9] border-t border-[#E8E5D8] py-16">
        <div className="max-w-[820px] mx-auto px-8 text-center">
          <p className="text-[11px] text-gray-700 tracking-[0.18em] mb-3 font-semibold uppercase">
            Built for enterprises that demand reliability, control, and scale.
          </p>
          <p className="text-[10px] text-gray-400 tracking-[0.15em] uppercase">PulsePro.ai — Enterprise Essentials</p>
        </div>
      </section>
    </main>
  );
}
