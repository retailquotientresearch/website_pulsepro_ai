import { getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/config/links";

const steps = [
  {
    key: "build",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="3" width="8" height="8" rx="1.5" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" />
        <path d="M17 13v8M13 17h8" strokeLinecap="round" />
      </svg>
    ),
    color: "text-[#16803C] bg-[#DCFCE7]",
    badge: "bg-[#16803C]",
  },
  {
    key: "schedule",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
        <circle cx="8" cy="15" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="12" cy="15" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="16" cy="15" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
    color: "text-blue-700 bg-blue-50",
    badge: "bg-blue-600",
  },
  {
    key: "execute",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M9 7h6M9 11h6M9 15h4" strokeLinecap="round" />
        <circle cx="17" cy="19" r="3.5" fill="white" stroke="currentColor" strokeWidth={1.5} />
        <path d="M15.5 19l1 1 2-2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
      </svg>
    ),
    color: "text-orange-700 bg-orange-50",
    badge: "bg-orange-500",
  },
  {
    key: "review",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    color: "text-purple-700 bg-purple-50",
    badge: "bg-purple-600",
  },
  {
    key: "insights",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path d="M3 18l4-8 4 4 4-6 4 4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="19" cy="5" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
    color: "text-[#16803C] bg-[#DCFCE7]",
    badge: "bg-[#16803C]",
  },
];

export default async function HowItWorksSection() {
  const t = await getTranslations("howItWorks");

  return (
    <section className="bg-[#FFFFEB] py-20 border-t border-black/5">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#16803C] bg-[#DCFCE7] px-3 py-1 rounded-full mb-4">
            {t("label")}
          </span>
          <h2 className="font-['Poppins',sans-serif] text-3xl md:text-4xl font-bold text-[#111111] leading-tight">
            {t("hero.title")}
          </h2>
          <p className="mt-3 text-gray-500 text-base leading-relaxed">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative flex flex-col md:flex-row items-start md:items-start gap-0 md:gap-0">
          {steps.map((step, i) => (
            <div key={step.key} className="flex flex-row md:flex-col items-start md:items-center flex-1 gap-4 md:gap-0">
              {/* Step card */}
              <div className="flex flex-col items-start md:items-center w-full md:px-3">
                {/* Badge + icon row */}
                <div className="relative flex items-center md:flex-col md:items-center gap-3 md:gap-0 w-full md:w-auto">
                  {/* Number badge */}
                  <div className={`flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full ${step.badge} text-white text-sm font-bold z-10`}>
                    {i + 1}
                  </div>

                  {/* Connector line — only on md+ between steps */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute left-[calc(50%+18px)] top-[18px] h-px w-full border-t-2 border-dashed border-gray-200 z-0" />
                  )}

                  {/* Icon bubble */}
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${step.color} md:mt-3`}>
                    {step.icon}
                  </div>
                </div>

                {/* Text */}
                <div className="md:text-center mt-2 md:mt-3 pb-8 md:pb-0">
                  <p className="font-semibold text-[#111111] text-sm leading-tight">
                    {t(`steps.${step.key}.title`)}
                  </p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed max-w-[140px] md:max-w-none">
                    {t(`steps.${step.key}.description`)}
                  </p>
                </div>
              </div>

              {/* Vertical connector on mobile */}
              {i < steps.length - 1 && (
                <div className="md:hidden absolute left-[17px] mt-9 h-8 border-l-2 border-dashed border-gray-200 z-0" />
              )}
            </div>
          ))}
        </div>

        {/* CTA link */}
        <div className="mt-10 text-center">
          <Link
            href={ROUTES.howItWorks}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#16803C] hover:text-[#14703A] transition-colors"
          >
            {t("seeFullWalkthrough")}
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
