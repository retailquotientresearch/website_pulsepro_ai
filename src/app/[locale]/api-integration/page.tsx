import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { EXTERNAL_LINKS, ROUTES } from "@/config/links";
import Container from "@/components/ui/Container";

interface PageProps {
  params: Promise<{ locale: string }>;
}

// ── Capability groups exposed via MCP ────────────────────────────────────────
const mcpCapabilities = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.7}>
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" strokeLinecap="round" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 12h6M9 16h4" strokeLinecap="round" />
      </svg>
    ),
    label: "Inspections",
    color: "text-[#16803C] bg-[#DCFCE7]",
    tools: ["List inspections with filters", "Full inspection report detail"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.7}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Corrective Actions",
    color: "text-orange-700 bg-orange-50",
    tools: ["List & filter actions", "Action details & timeline", "Overdue summary"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.7}>
        <path d="M7 8h10M7 12h6" strokeLinecap="round" />
        <path d="M3 6a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" />
      </svg>
    ),
    label: "Tickets & Issues",
    color: "text-blue-700 bg-blue-50",
    tools: ["List tickets by status", "Issue detail & history"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.7}>
        <path d="M3 18l4-8 4 4 4-6 4 4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="19" cy="6" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
    label: "Location Analytics",
    color: "text-purple-700 bg-purple-50",
    tools: ["Location scores", "Recurring failures by checklist", "Sites failing a question"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.7}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M14 17h4M16 15v4" strokeLinecap="round" />
      </svg>
    ),
    label: "Summaries",
    color: "text-[#16803C] bg-[#DCFCE7]",
    tools: ["Actions by user / location", "Tickets by user / location", "Checklist library"],
  },
];

const samplePrompts = [
  "Which locations had the most overdue corrective actions last month?",
  "Show recurring failures in our food safety checklist across all sites.",
  "Give me a summary of open tickets for the Dubai region.",
  "What are the lowest-scoring sites in Q1 and what's failing?",
];

const compatibleTools = [
  { name: "Claude", icon: "✦", note: "Desktop & API" },
  { name: "Cursor", icon: "⌥", note: "IDE" },
  { name: "Windsurf", icon: "◈", note: "IDE" },
  { name: "Copilot", icon: "⚡", note: "GitHub" },
  { name: "Any MCP client", icon: "◎", note: "Open standard" },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function APIIntegrationPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("apiIntegration");

  return (
    <main className="min-h-screen bg-[#FFFFEB] overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="bg-[#FFFFEB] pt-32 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#16803C] bg-[#DCFCE7] px-3 py-1 rounded-full mb-5">
              {t("hero.label")}
            </span>
            <h1 className="font-['Poppins',sans-serif] text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] leading-tight tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="mt-5 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://github.com/retailquotientresearch/pulse-mcp-server"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#111111] hover:bg-black text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                View on GitHub
              </a>
              <Link
                href={ROUTES.bookDemo}
                className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
              >
                Get API Access
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── MCP Section ── */}
      <section className="bg-[#0D1117] py-20">
        <Container>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#16803C] animate-pulse" />
              <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">Model Context Protocol</span>
            </div>
            <h2 className="font-['Poppins',sans-serif] text-3xl md:text-4xl font-bold text-white leading-tight">
              {t("mcp.title")}
            </h2>
            <p className="mt-4 text-gray-400 text-base leading-relaxed">
              {t("mcp.subtitle")}
            </p>
          </div>

          {/* Capability grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {mcpCapabilities.map((cap) => (
              <div key={cap.label} className="bg-white/5 border border-white/8 rounded-2xl p-5 hover:bg-white/8 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`flex items-center justify-center w-9 h-9 rounded-lg ${cap.color}`}>
                    {cap.icon}
                  </div>
                  <span className="font-semibold text-white text-sm">{cap.label}</span>
                </div>
                <ul className="space-y-1.5">
                  {cap.tools.map((tool) => (
                    <li key={tool} className="flex items-start gap-2 text-xs text-gray-400">
                      <svg className="w-3 h-3 mt-0.5 text-[#16803C] shrink-0" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M10.293 3.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L4.586 7.586l4.293-4.293a1 1 0 011.414 0z" />
                      </svg>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Total tools callout */}
            <div className="bg-[#16803C]/15 border border-[#16803C]/30 rounded-2xl p-5 flex flex-col items-center justify-center text-center">
              <p className="text-4xl font-extrabold text-[#16803C]">16</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">Live MCP Tools</p>
              <p className="text-xs text-gray-500 mt-2">Querying real-time data from your PULSE environment</p>
            </div>
          </div>

          {/* Sample prompts */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xs text-gray-500 uppercase tracking-widest text-center mb-4">{t("mcp.promptsLabel")}</p>
            <div className="space-y-2">
              {samplePrompts.map((prompt) => (
                <div key={prompt} className="flex items-start gap-3 bg-white/4 border border-white/6 rounded-xl px-4 py-3">
                  <span className="text-[#16803C] text-sm mt-0.5 shrink-0">✦</span>
                  <p className="text-gray-300 text-sm italic">&ldquo;{prompt}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>

          {/* Code snippet */}
          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 text-center">{t("mcp.configLabel")}</p>
            <div className="bg-black/60 border border-white/10 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/8">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-gray-500">claude_desktop_config.json</span>
              </div>
              <pre className="p-5 text-xs text-gray-300 leading-relaxed overflow-x-auto">
{`{
  "mcpServers": {
    "pulse": {
      "url": "https://mcp-api.pulsepro.ai/mcp",
      "headers": {
        "X-API-Key": "your-pulse-api-key"
      }
    }
  }
}`}
              </pre>
            </div>
          </div>

          {/* Compatible tools */}
          <div className="text-center">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">{t("mcp.compatibleLabel")}</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {compatibleTools.map((tool) => (
                <div key={tool.name} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                  <span className="text-[#16803C] text-sm">{tool.icon}</span>
                  <span className="text-white text-xs font-medium">{tool.name}</span>
                  <span className="text-gray-500 text-xs">{tool.note}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://github.com/retailquotientresearch/pulse-mcp-server"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                View on GitHub
              </a>
              <Link
                href={ROUTES.bookDemo}
                className="inline-flex items-center gap-2 bg-[#16803C] hover:bg-[#14703A] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
              >
                Request API Access
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── REST API ── */}
      <section className="bg-white py-20 border-b border-gray-100">
        <Container>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-500 bg-gray-100 px-3 py-1 rounded-full mb-4">
                REST API
              </span>
              <h2 className="font-['Poppins',sans-serif] text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t("restApi.title")}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                {t("restApi.subtitle")}
              </p>
              <ul className="space-y-3">
                {(["inspections", "actions", "analytics", "users", "locations"] as const).map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#16803C] shrink-0" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.78 6.22a.75.75 0 010 1.06l-4 4a.75.75 0 01-1.06 0l-2-2a.75.75 0 011.06-1.06L7.25 9.69l3.47-3.47a.75.75 0 011.06 0z" />
                    </svg>
                    {t(`restApi.items.${item}`)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Code snippet */}
            <div className="bg-[#0D1117] rounded-2xl overflow-hidden border border-white/5">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/8">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-gray-500">REST API</span>
              </div>
              <pre className="p-5 text-xs text-gray-300 leading-relaxed overflow-x-auto">
{`GET /api/v1/inspections
Authorization: Bearer <token>

{
  "results": [...],
  "count": 1248,
  "next": "/api/v1/inspections?page=2"
}`}
              </pre>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Enterprise integrations ── */}
      <section className="bg-[#FFFFEB] py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-['Poppins',sans-serif] text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {t("enterprise.title")}
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">{t("enterprise.subtitle")}</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600 mb-8">
              {["SSO / SAML 2.0", "Azure AD", "Okta", "SAP Ariba", "Power BI", "Tableau", "ERP / CMMS"].map((item) => (
                <span key={item} className="bg-white border border-gray-200 rounded-full px-4 py-1.5 font-medium">{item}</span>
              ))}
            </div>
            <Link
              href={ROUTES.enterpriseDeployment}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#16803C] hover:text-[#14703A] transition-colors"
            >
              See the full enterprise deployment guide
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#111111] py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-['Poppins',sans-serif] text-2xl md:text-3xl font-bold text-white mb-3">
              {t("cta.title")}
            </h2>
            <p className="text-gray-400 mb-8">{t("cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={EXTERNAL_LINKS.register}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#16803C] hover:bg-[#14703A] text-white font-semibold px-7 py-3 rounded-xl text-sm transition-colors"
              >
                {t("cta.primary")}
              </a>
              <Link
                href={ROUTES.bookDemo}
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-7 py-3 rounded-xl text-sm transition-colors"
              >
                {t("cta.secondary")}
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}
