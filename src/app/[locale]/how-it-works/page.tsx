import { getTranslations, setRequestLocale } from "next-intl/server";
import Container from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { EXTERNAL_LINKS, ROUTES } from "@/config/links";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const steps = [
  {
    key: "build",
    number: 1,
    accent: "#16803C",
    accentLight: "#DCFCE7",
    accentText: "text-[#16803C]",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.6}>
        <rect x="4" y="4" width="10" height="10" rx="2" />
        <rect x="18" y="4" width="10" height="10" rx="2" />
        <rect x="4" y="18" width="10" height="10" rx="2" />
        <path d="M23 18v10M18 23h10" strokeLinecap="round" />
      </svg>
    ),
    bullets: ["buildBullet1", "buildBullet2", "buildBullet3"],
  },
  {
    key: "schedule",
    number: 2,
    accent: "#2563EB",
    accentLight: "#EFF6FF",
    accentText: "text-blue-700",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.6}>
        <rect x="4" y="5" width="24" height="23" rx="3" />
        <path d="M21 3v5M11 3v5M4 13h24" strokeLinecap="round" />
        <circle cx="11" cy="20" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="16" cy="20" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="21" cy="20" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    bullets: ["scheduleBullet1", "scheduleBullet2", "scheduleBullet3"],
  },
  {
    key: "execute",
    number: 3,
    accent: "#EA580C",
    accentLight: "#FFF7ED",
    accentText: "text-orange-700",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.6}>
        <rect x="7" y="2" width="18" height="28" rx="3" />
        <path d="M12 9h8M12 14h8M12 19h5" strokeLinecap="round" />
        <circle cx="22" cy="26" r="4" fill="white" stroke="currentColor" strokeWidth={1.4} />
        <path d="M20 26l1.5 1.5L24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} />
      </svg>
    ),
    bullets: ["executeBullet1", "executeBullet2", "executeBullet3"],
  },
  {
    key: "review",
    number: 4,
    accent: "#7C3AED",
    accentLight: "#F5F3FF",
    accentText: "text-purple-700",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="16" cy="16" r="12" />
        <path d="M10 16l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bullets: ["reviewBullet1", "reviewBullet2", "reviewBullet3"],
  },
  {
    key: "insights",
    number: 5,
    accent: "#16803C",
    accentLight: "#DCFCE7",
    accentText: "text-[#16803C]",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.6}>
        <path d="M4 24l5-10 5 5 5-8 5 5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="25" cy="7" r="2.5" fill="currentColor" stroke="none" />
        <path d="M4 28h24" strokeLinecap="round" opacity="0.3" />
      </svg>
    ),
    bullets: ["insightsBullet1", "insightsBullet2", "insightsBullet3"],
  },
];

export default async function HowItWorksPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("howItWorks");

  return (
    <main className="min-h-screen bg-[#FFFFEB] overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 bg-[#FFFFEB]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#16803C] bg-[#DCFCE7] px-3 py-1 rounded-full mb-5">
              {t("label")}
            </span>
            <h1 className="font-['Poppins',sans-serif] text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] leading-tight tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-xl mx-auto">
              {t("hero.subtitle")}
            </p>

            {/* Timeline indicator */}
            <div className="mt-10 flex items-center justify-center gap-0">
              {steps.map((step, i) => (
                <div key={step.key} className="flex items-center">
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-full text-white text-xs font-bold"
                    style={{ backgroundColor: step.accent }}
                  >
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-8 h-px bg-gray-300 mx-0" />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-gray-400">{t("timelineLabel")}</p>
          </div>
        </Container>
      </section>

      {/* ── Steps ── */}
      <section className="py-8 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto space-y-6">
            {steps.map((step) => (
              <div
                key={step.key}
                className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{ backgroundColor: step.accent }}
                />

                <div className="p-8 pl-10">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                    {/* Icon + number */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-2">
                      <div
                        className="flex items-center justify-center w-14 h-14 rounded-xl"
                        style={{ backgroundColor: step.accentLight, color: step.accent }}
                      >
                        {step.icon}
                      </div>
                      <span
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: step.accent }}
                      >
                        {t("stepLabel")} {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="font-['Poppins',sans-serif] text-xl md:text-2xl font-bold text-[#111111] mb-2">
                        {t(`steps.${step.key}.title`)}
                      </h2>
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-5">
                        {t(`steps.${step.key}.description`)}
                      </p>

                      {/* Bullet points */}
                      <ul className="space-y-2">
                        {step.bullets.map((bulletKey) => (
                          <li key={bulletKey} className="flex items-start gap-2.5 text-sm text-gray-600">
                            <svg
                              className="w-4 h-4 mt-0.5 flex-shrink-0"
                              style={{ color: step.accent }}
                              viewBox="0 0 16 16"
                              fill="currentColor"
                            >
                              <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.78 6.22a.75.75 0 010 1.06l-4 4a.75.75 0 01-1.06 0l-2-2a.75.75 0 011.06-1.06L7.25 9.69l3.47-3.47a.75.75 0 011.06 0z" />
                            </svg>
                            {t(`steps.${step.key}.${bulletKey}`)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#111111] py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-['Poppins',sans-serif] text-3xl md:text-4xl font-bold text-white mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-gray-400 text-base mb-8 leading-relaxed">
              {t("cta.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={EXTERNAL_LINKS.register}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#16803C] hover:bg-[#14703A] text-white font-semibold px-8 py-4 rounded-xl text-sm transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                {t("cta.primary")}
              </a>
              <Link
                href={ROUTES.bookDemo}
                className="inline-flex items-center gap-2.5 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                {t("cta.secondary")}
              </Link>
            </div>

            {/* App download */}
            <div className="mt-8 flex flex-col items-center gap-3">
              <p className="text-xs text-gray-500">{t("cta.availableOn")}</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://apps.apple.com/us/app/pulse-audits-inspections/id1533113519"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 transition-colors"
                  aria-label="Download on the App Store"
                >
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <span className="text-xs text-white">App Store</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.innovative.pulsepro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 transition-colors"
                  aria-label="Get it on Google Play"
                >
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.31.17.66.24 1.02.19l11.83-11.83L12 8.09 3.18 23.76zm16.77-9.09L17.44 13l-2.41 2.41 2.41 2.41 2.51-1.41c.72-.4.72-1.57 0-1.74zM4.2.05C3.84 0 3.49.07 3.18.24L15.01 12.09 19.03 8.07 4.2.05zM3.18.24L.96 1.48C.35 1.88 0 2.52 0 3.23v17.54c0 .71.35 1.35.96 1.75l2.22 1.24L12.01 12 3.18.24z" />
                  </svg>
                  <span className="text-xs text-white">Google Play</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
