"use client";

import { useInView } from "@/hooks/useInView";

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

// Desktop positioning with more spacing for larger screens
const desktopFeatures: EnterpriseFeature[] = [
  {
    title: "Single Sign-On",
    description: "Azure AD, Okta, Google",
    icon: "fa-user-shield",
    size: "medium",
    position: { top: "0px", left: "2%", transform: "rotate(-4deg)" },
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    zIndex: 25,
  },
  {
    title: "Role Permissions",
    description: "Granular access control",
    icon: "fa-users-cog",
    size: "small",
    position: { top: "10px", right: "2%", transform: "rotate(6deg)" },
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
    zIndex: 20,
  },
  {
    title: "Multi-Factor Auth",
    description: "Enhanced security",
    icon: "fa-shield-halved",
    size: "small",
    position: { top: "90px", left: "5%", transform: "rotate(-8deg)" },
    bgColor: "bg-gradient-to-br from-amber-50 to-amber-100",
    iconColor: "text-amber-600",
    zIndex: 15,
  },
  {
    title: "Audit Logs",
    description: "Complete tracking",
    icon: "fa-file-lines",
    size: "small",
    position: { top: "100px", right: "5%", transform: "rotate(8deg)" },
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
      top: "160px",
      left: "50%",
      transform: "translate(-50%, 0) rotate(2deg)",
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
    position: { top: "300px", left: "5%", transform: "rotate(-3deg)" },
    bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    iconColor: "text-indigo-600",
    zIndex: 22,
  },
  {
    title: "API Integration",
    description: "Connect tools",
    icon: "fa-plug",
    size: "medium",
    position: { top: "310px", right: "5%", transform: "rotate(4deg)" },
    bgColor: "bg-gradient-to-br from-rose-50 to-rose-100",
    iconColor: "text-rose-600",
    zIndex: 24,
  },
  {
    title: "Performance Scale",
    description: "Enterprise-grade",
    icon: "fa-rocket",
    size: "small",
    position: { top: "400px", left: "20%", transform: "rotate(-6deg)" },
    bgColor: "bg-gradient-to-br from-cyan-50 to-cyan-100",
    iconColor: "text-cyan-600",
    zIndex: 12,
  },
  {
    title: "Incident Tracking",
    description: "Real-time monitoring",
    icon: "fa-exclamation-triangle",
    size: "small",
    position: { top: "410px", right: "20%", transform: "rotate(7deg)" },
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
      top: "480px",
      left: "50%",
      transform: "translate(-50%, 0) rotate(-2deg)",
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
}: {
  feature: EnterpriseFeature;
  isInView: boolean;
  index: number;
}) {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case "small":
        return "w-24 h-16 sm:w-28 sm:h-18 p-2";
      case "large":
        return "w-40 h-24 sm:w-48 sm:h-28 p-3";
      default:
        return "w-32 h-20 sm:w-36 sm:h-22 p-2 sm:p-3";
    }
  };

  const getDelay = (index: number) => `${index * 80}ms`;

  return (
    <div
      className={`absolute ${getSizeClasses(feature.size)} ${
        feature.bgColor
      } rounded-xl shadow-md border border-white/40 transition-all duration-600 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } hover:shadow-lg hover:scale-105 cursor-pointer group`}
      style={{
        ...feature.position,
        zIndex: feature.zIndex,
        transitionDelay: isInView ? getDelay(index) : "0ms",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.03)",
      }}
    >
      <div className="h-full flex flex-col justify-between relative">
        <div className="flex items-center justify-between mb-1">
          <div
            className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.iconColor} rounded-lg bg-white/70 shadow-sm flex items-center justify-center text-xs group-hover:scale-110 transition-transform duration-300`}
          >
            <i className={`fa-solid ${feature.icon}`}></i>
          </div>

          {feature.size === "large" && (
            <div className="hidden sm:flex space-x-1">
              <div className="w-1 h-1 bg-current opacity-30 rounded-full"></div>
              <div className="w-1 h-1 bg-current opacity-50 rounded-full"></div>
              <div className="w-1 h-1 bg-current opacity-70 rounded-full"></div>
            </div>
          )}
        </div>

        <div>
          <div className="text-xs sm:text-sm font-bold text-gray-800 leading-tight mb-1">
            {feature.title}
          </div>

          {(feature.size === "medium" || feature.size === "large") && (
            <div className="text-xs text-gray-600 leading-tight opacity-80">
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
  const desktopTagline =
    "From SSO to uptime, everything you need to run securely at enterprise scale.";
  const words = desktopTagline.split(" ").filter(Boolean);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#FDF6E9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-['Poppins',sans-serif] text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 transform -rotate-1">
            Enterprise Essentials
          </h2>
          {/* Mobile/tablet subheading (hidden on desktop) */}
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed lg:hidden">
            From SSO to uptime, everything you need to run securely at
            enterprise scale.
          </p>
        </div>

        {/* Mobile layout - compact */}
        <div className="flex justify-center lg:hidden">
          <div className="relative w-full max-w-xs sm:max-w-md mx-auto h-[460px] sm:h-[480px]">
            {enterpriseFeatures.map((feature, index) => (
              <EnterpriseCard
                key={feature.title}
                feature={feature}
                isInView={isInView}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Desktop layout - 70/30 split */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Left: 70% boxes area */}
          <div className="relative h-[560px] basis-[70%] min-w-0">
            {desktopFeatures.map((feature, index) => (
              <EnterpriseCard
                key={feature.title}
                feature={feature}
                isInView={isInView}
                index={index}
              />
            ))}
          </div>

          {/* Right: 30% vertical subheading */}
          <div className="basis-[30%] h-[560px] flex items-center justify-center">
            <div className="z-40 flex flex-col items-center">
              <span className="block w-px h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
              <div className="mt-2 flex flex-col items-center gap-1.5">
                {words.map((w, i) => (
                  <span
                    key={`${w}-${i}`}
                    className={
                      `select-none rounded-md border border-white/60 bg-white/70 px-2 py-1 text-[11px] font-semibold uppercase tracking-widest text-gray-800/80 shadow-sm backdrop-blur-sm transition-all duration-500 ` +
                      (isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6") +
                      (i % 2 === 0 ? " -rotate-1" : " rotate-1") +
                      " hover:scale-105 hover:shadow-md"
                    }
                    style={{ transitionDelay: isInView ? `${i * 60}ms` : "0ms" }}
                  >
                    {w}
                  </span>
                ))}
              </div>
              <span className="mt-2 block w-px h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
