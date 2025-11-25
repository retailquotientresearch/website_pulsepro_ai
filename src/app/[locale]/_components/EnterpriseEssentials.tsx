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

// Clean layout with responsive spacing - compact on mobile, spread out on desktop
const enterpriseFeatures: EnterpriseFeature[] = [
  {
    title: "Single Sign-On",
    description: "Azure AD, Okta, Google",
    icon: "fa-user-shield",
    size: "medium",
    position: { top: "10px", left: "5%", transform: "rotate(-3deg)" },
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    zIndex: 25,
  },
  {
    title: "Role Permissions",
    description: "Granular access control",
    icon: "fa-users-cog",
    size: "small",
    position: { top: "15px", right: "5%", transform: "rotate(4deg)" },
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
    zIndex: 20,
  },
  {
    title: "Multi-Factor Auth",
    description: "Enhanced security",
    icon: "fa-shield-halved",
    size: "small",
    position: { top: "80px", left: "8%", transform: "rotate(-5deg)" },
    bgColor: "bg-gradient-to-br from-amber-50 to-amber-100",
    iconColor: "text-amber-600",
    zIndex: 15,
  },
  {
    title: "Audit Logs",
    description: "Complete tracking",
    icon: "fa-file-lines",
    size: "small",
    position: { top: "85px", right: "8%", transform: "rotate(6deg)" },
    bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
    iconColor: "text-orange-600",
    zIndex: 18,
  },
  {
    title: "99.9% Uptime",
    description: "High availability hosting",
    icon: "fa-chart-line",
    size: "large",
    position: {
      top: "140px",
      left: "50%",
      transform: "translate(-50%, 0) rotate(1deg)",
    },
    bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100",
    iconColor: "text-emerald-600",
    zIndex: 35,
  },
  {
    title: "Data Residency",
    description: "Global compliance",
    icon: "fa-globe",
    size: "medium",
    position: { top: "250px", left: "8%", transform: "rotate(-2deg)" },
    bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    iconColor: "text-indigo-600",
    zIndex: 22,
  },
  {
    title: "API Integration",
    description: "Connect tools",
    icon: "fa-plug",
    size: "medium",
    position: { top: "255px", right: "8%", transform: "rotate(3deg)" },
    bgColor: "bg-gradient-to-br from-rose-50 to-rose-100",
    iconColor: "text-rose-600",
    zIndex: 24,
  },
  {
    title: "Performance Scale",
    description: "Enterprise-grade",
    icon: "fa-rocket",
    size: "small",
    position: { top: "335px", left: "15%", transform: "rotate(-4deg)" },
    bgColor: "bg-gradient-to-br from-cyan-50 to-cyan-100",
    iconColor: "text-cyan-600",
    zIndex: 12,
  },
  {
    title: "Incident Tracking",
    description: "Real-time monitoring",
    icon: "fa-exclamation-triangle",
    size: "small",
    position: { top: "340px", right: "15%", transform: "rotate(5deg)" },
    bgColor: "bg-gradient-to-br from-red-50 to-red-100",
    iconColor: "text-red-600",
    zIndex: 14,
  },
  {
    title: "SOC 2 Certified",
    description: "Security compliance",
    icon: "fa-certificate",
    size: "medium",
    position: {
      top: "390px",
      left: "50%",
      transform: "translate(-50%, 0) rotate(-1deg)",
    },
    bgColor: "bg-gradient-to-br from-teal-50 to-teal-100",
    iconColor: "text-teal-600",
    zIndex: 16,
  },
];


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

  // Desktop grid columns grouped like the screenshot
  const desktopColumns: {
    heading: string;
    subheading: string;
    items: EnterpriseFeature[];
  }[] = [
    {
      heading: "Security & Access",
      subheading: "Robust controls for your organization.",
      items: [
        {
          title: "Single Sign-On",
          description: "Azure AD, Okta, Google",
          icon: "fa-key",
          size: "medium",
          position: { transform: "none" },
          bgColor: "bg-blue-100/50",
          iconColor: "text-blue-400",
          titleColor: "text-blue-900",
          descColor: "text-blue-700",
          shadowClass: "shadow-lg shadow-blue-500/5",
          zIndex: 1,
        },
        {
          title: "Multi-Factor Auth",
          description: "An extra layer of security.",
          icon: "fa-shield-halved",
          size: "medium",
          position: { transform: "none" },
          bgColor: "bg-yellow-100/50",
          iconColor: "text-yellow-400",
          titleColor: "text-yellow-900",
          descColor: "text-yellow-700",
          shadowClass: "shadow-lg shadow-yellow-500/5",
          zIndex: 1,
        },
        {
          title: "Role Permissions",
          description: "Granular access control.",
          icon: "fa-user-lock",
          size: "medium",
          position: { transform: "none" },
          bgColor: "bg-purple-100/50",
          iconColor: "text-purple-400",
          titleColor: "text-purple-900",
          descColor: "text-purple-700",
          shadowClass: "shadow-lg shadow-purple-500/5",
          zIndex: 1,
        },
        {
          title: "SOC 2 Certified",
          description: "Security compliance you can trust.",
          icon: "fa-certificate",
          size: "medium",
          position: { transform: "none" },
          bgColor: "bg-teal-100/50",
          iconColor: "text-teal-400",
          titleColor: "text-teal-900",
          descColor: "text-teal-700",
          shadowClass: "shadow-lg shadow-teal-500/5",
          zIndex: 1,
        },
      ],
    },
    {
  heading: "Reliability & Performance",
  subheading: "Built for scale and availability.",
      items: [
        {
          title: "99.9% Uptime",
          description: "High availability hosting.",
          icon: "fa-server",
          size: "medium",
          position: { transform: "none" },
          bgColor: "bg-green-100/50",
          iconColor: "text-green-400",
          titleColor: "text-green-900",
          descColor: "text-green-700",
          shadowClass: "shadow-lg shadow-green-500/5",
          zIndex: 1,
        },
        {
          title: "Performance Scale",
          description: "Handles enterprise workloads.",
          icon: "fa-gauge-high",
          size: "medium",
          position: { transform: "none" },
          bgColor: "bg-sky-100/50",
          iconColor: "text-sky-400",
          titleColor: "text-sky-900",
          descColor: "text-sky-700",
          shadowClass: "shadow-lg shadow-sky-500/5",
          zIndex: 1,
        },
        {
          title: "Data Residency",
          description: "Global compliance and control.",
          icon: "fa-globe",
          size: "medium",
          position: { transform: "none" },
          bgColor: "bg-indigo-100/50",
          iconColor: "text-indigo-400",
          titleColor: "text-indigo-900",
          descColor: "text-indigo-700",
          shadowClass: "shadow-lg shadow-indigo-500/5",
          zIndex: 1,
        },
      ],
    },
    {
  heading: "Operations & Integration",
  subheading: "Tools to streamline your workflow.",
      items: [
        {
          title: "Audit Logs",
          description: "Complete visibility of actions.",
          icon: "fa-clipboard-list",
          size: "medium",
          position: { transform: "none" },
          bgColor: "bg-orange-100/50",
          iconColor: "text-orange-400",
          titleColor: "text-orange-900",
          descColor: "text-orange-700",
          shadowClass: "shadow-lg shadow-orange-500/5",
          zIndex: 1,
        },
        {
          title: "API Integration",
          description: "Connect the tools you already use.",
          icon: "fa-plug",
          size: "medium",
          position: { transform: "none" },
          bgColor: "bg-pink-100/50",
          iconColor: "text-pink-400",
          titleColor: "text-pink-900",
          descColor: "text-pink-700",
          shadowClass: "shadow-lg shadow-pink-500/5",
          zIndex: 1,
        },
        {
          title: "Incident Tracking",
          description: "Monitor and respond to issues.",
          icon: "fa-triangle-exclamation",
          size: "medium",
          position: { transform: "none" },
          bgColor: "bg-rose-100/50",
          iconColor: "text-rose-400",
          titleColor: "text-rose-900",
          descColor: "text-rose-700",
          shadowClass: "shadow-lg shadow-rose-500/5",
          zIndex: 1,
        },
      ],
    },
  ];

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
