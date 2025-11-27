"use client";

import { useInView } from "@/hooks/useInView";
import { useTranslations } from 'next-intl';

interface EnterpriseFeature {
  title: string;
  description: string;
  icon: string;
  size: "small" | "medium" | "large";
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform: string;
  };
  bgColor: string;
  iconColor: string;
  zIndex: number;
  // Optional styling overrides for grid layout (desktop)
  titleColor?: string;
  descColor?: string;
  shadowClass?: string;
}



function EnterpriseCard({
  feature,
  isInView,
  index,
  layout = "free",
}: {
  feature: EnterpriseFeature;
  isInView: boolean;
  index: number;
  layout?: "free" | "grid";
}) {
  const getFreeSizeClasses = (size: string) => {
    switch (size) {
      case "small":
        return "w-24 h-20 sm:w-32 sm:h-24 lg:w-40 lg:h-28 p-2 sm:p-3";
      case "large":
        return "w-40 h-32 sm:w-52 sm:h-40 lg:w-64 lg:h-44 p-3 sm:p-4";
      default:
        return "w-32 h-28 sm:w-40 sm:h-32 lg:w-48 lg:h-36 p-2.5 sm:p-3 lg:p-4";
    }
  };

  const getGridSizeClasses = (size: string) => {
    switch (size) {
      case "small":
  // Desktop grid sizing: auto height like reference
  return "w-full p-6";
      case "large":
  return "w-full p-6";
      default:
  return "w-full p-6";
    }
  };

  const baseClasses =
    layout === "free" ? getFreeSizeClasses(feature.size) : getGridSizeClasses(feature.size);

  const getDelay = (i: number) => `${i * 80}ms`;

  // No rotation in grid mode (keep clean, aligned look for desktop)
  const gridRotation = "0deg";

  const containerBase = `${layout === "free" ? "absolute" : "relative"} ${baseClasses} ${feature.bgColor} ${
    layout === "free" ? "rounded-xl border border-white/40" : "rounded-2xl border-0"
  } transition-all duration-600 ${
    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
  }`;

  if (layout === "grid") {
    return (
      <div
        className={`${containerBase} ${feature.shadowClass ?? "shadow-lg shadow-gray-500/5"} hover:-translate-y-1 ease-in-out group`}
        style={{
          zIndex: feature.zIndex,
          transitionDelay: isInView ? getDelay(index) : "0ms",
          boxShadow: undefined,
          transform: `rotate(${gridRotation})`,
        }}
      >
        <div className="h-full w-full flex items-center justify-between">
          <div className="pr-3">
            <div className={`text-base md:text-lg font-semibold leading-tight mb-1 ${feature.titleColor ?? "text-gray-900"}`}>
              {feature.title}
            </div>
            <div className={`text-sm md:text-base ${feature.descColor ?? "text-gray-700/90"}`}>
              {feature.description}
            </div>
          </div>
          {/* <div
            className={`flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-white/70 ${feature.iconColor} shadow-sm text-base opacity-90`}
          >
            <i className={`fa-solid ${feature.icon}`}></i>
          </div> */}
        </div>
      </div>
    );
  }

  // free layout (mobile scattered)
  return (
    <div
      className={`${containerBase} overflow-hidden cursor-pointer group`}
      style={{
        ...(layout === "free" ? (feature.position as React.CSSProperties) : {}),
        zIndex: feature.zIndex,
        transitionDelay: isInView ? getDelay(index) : "0ms",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08), 0 3px 8px rgba(0,0,0,0.04)",
        transform: feature.position.transform,
      }}
    >
      {layout === "free" && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3 rounded-sm bg-yellow-200/80 shadow-sm mix-blend-multiply rotate-[-2deg]" />
      )}

      <div className="h-full flex flex-col justify-between relative">
        <div className="flex items-center justify-between mb-2">
          {/* <div
            className={`w-6 h-6 sm:w-7 sm:h-7 ${feature.iconColor} rounded-full bg-white/70 shadow-sm flex items-center justify-center text-sm group-hover:scale-110 transition-transform duration-300`}
          >
            <i className={`fa-solid ${feature.icon}`}></i>
          </div> */}

          {feature.size === "large" && (
            <div className="hidden sm:flex space-x-1">
              <div className="w-1 h-1 bg-current opacity-30 rounded-full"></div>
              <div className="w-1 h-1 bg-current opacity-50 rounded-full"></div>
              <div className="w-1 h-1 bg-current opacity-70 rounded-full"></div>
            </div>
          )}
        </div>

        <div>
          <div className="text-sm md:text-base lg:text-lg font-bold text-gray-800 leading-tight mb-1 break-words">
            {feature.title}
          </div>

          {(feature.size === "medium" || feature.size === "large") && (
            <div className="text-xs sm:text-sm md:text-base text-gray-700 leading-snug opacity-90 break-words line-clamp-2 sm:line-clamp-none">
              {feature.description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function EnterpriseEssentials() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const t = useTranslations('enterpriseEssentials');
  const desktopTagline = t('subtitle');
  const mobileFeatures = (t.raw('mobileFeatures') as {title:string;description:string}[]) || [];
  const columns = (t.raw('columns') as {heading:string;subheading:string;items:{title:string;description:string}[]}[]) || [];

  return (
    <section className="py-12 sm:py-16 bg-[#FDF6E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-['Inter',sans-serif] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {desktopTagline}
          </p>
        </div>

        {/* Mobile layout - compact */}
        <div className="flex justify-center lg:hidden">
          <div className="relative w-full max-w-xs sm:max-w-md mx-auto h-[460px] sm:h-[480px]">
            {mobileFeatures.map((feature, index) => (
              <EnterpriseCard
                key={feature.title}
                feature={{
                  title: feature.title,
                  description: feature.description,
                  icon: '',
                  size: 'medium',
                  position: { transform: 'rotate(0deg)' },
                  bgColor: 'bg-gradient-to-br from-gray-50 to-gray-100',
                  iconColor: 'text-gray-600',
                  zIndex: 10
                }}
                isInView={isInView}
                index={index}
              />
            ))}
          </div>
        </div>

  {/* Desktop layout - 3 columns like the screenshot */}
  <div className="hidden lg:grid grid-cols-3 gap-8">
          {columns.map((col, cIdx) => (
      <div key={col.heading} className={`flex flex-col ${cIdx === 1 ? "md:mt-16" : ""}`}>
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">
                  {col.heading}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mt-1">
                  {col.subheading}
                </p>
              </div>
              <div className="space-y-4">
                {col.items.map((feature, i) => (
                  <EnterpriseCard
                    key={feature.title}
                    feature={{
                      title: feature.title,
                      description: feature.description,
                      icon: '',
                      size: 'medium',
                      position: { transform: 'none' },
                      bgColor: 'bg-white',
                      iconColor: 'text-gray-600',
                      zIndex: 1
                    }}
                    isInView={isInView}
                    index={cIdx * 10 + i}
                    layout="grid"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
