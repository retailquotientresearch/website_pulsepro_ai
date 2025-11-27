"use client";

import { useInView } from "@/hooks/useInView";
import {useTranslations, useMessages} from "next-intl";

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
  titleColor?: string;
  descColor?: string;
  shadowClass?: string;
}

// Mobile feature set will be built from i18n messages
function getEnterpriseFeatures(messages: any): EnterpriseFeature[] {
  const mobile = messages?.enterpriseEssentials?.mobileFeatures ?? [];
  const defaults: Omit<EnterpriseFeature, "title" | "description">[] = [
    { icon: "fa-user-shield", size: "medium", position: { top: "0px", left: "5%", transform: "rotate(-3deg)" }, bgColor: "#F3F0FF", iconColor: "text-purple-600", zIndex: 25 },
    { icon: "fa-shield-halved", size: "small", position: { top: "45px", right: "6%", transform: "rotate(4deg)" }, bgColor: "#EFF6FF", iconColor: "text-blue-600", zIndex: 20 },
    { icon: "fa-users-cog", size: "small", position: { top: "120px", left: "8%", transform: "rotate(-5deg)" }, bgColor: "#ECFDF5", iconColor: "text-emerald-600", zIndex: 18 },
    { icon: "fa-certificate", size: "small", position: { top: "125px", right: "8%", transform: "rotate(6deg)" }, bgColor: "#FFFBEB", iconColor: "text-amber-600", zIndex: 17 },
    { icon: "fa-chart-line", size: "medium", position: { top: "210px", left: "6%", transform: "rotate(2deg)" }, bgColor: "#ECFDF5", iconColor: "text-emerald-600", zIndex: 22 },
    { icon: "fa-rocket", size: "medium", position: { top: "215px", right: "6%", transform: "rotate(-2deg)" }, bgColor: "#F3F0FF", iconColor: "text-purple-600", zIndex: 21 },
    { icon: "fa-server", size: "large", position: { top: "310px", left: "50%", transform: "translate(-50%,0) rotate(1deg)" }, bgColor: "gradient", iconColor: "text-purple-500", zIndex: 30 },
    { icon: "fa-globe", size: "small", position: { top: "460px", left: "10%", transform: "rotate(-3deg)" }, bgColor: "#FFFBEB", iconColor: "text-amber-600", zIndex: 16 },
    { icon: "fa-plug", size: "small", position: { top: "465px", right: "10%", transform: "rotate(3deg)" }, bgColor: "#EFF6FF", iconColor: "text-blue-600", zIndex: 16 },
    { icon: "fa-file-lines", size: "small", position: { top: "545px", left: "15%", transform: "rotate(-4deg)" }, bgColor: "#ECFDF5", iconColor: "text-emerald-600", zIndex: 14 },
    { icon: "fa-exclamation-triangle", size: "small", position: { top: "550px", right: "15%", transform: "rotate(4deg)" }, bgColor: "#FDF2F8", iconColor: "text-pink-600", zIndex: 14 },
    { icon: "fa-database", size: "small", position: { top: "630px", left: "50%", transform: "translate(-50%,0) rotate(-2deg)" }, bgColor: "#F3F0FF", iconColor: "text-purple-600", zIndex: 13 }
  ];
  return mobile.slice(0, 12).map((m: any, i: number) => ({
    title: m.title,
    description: m.description,
    ...defaults[i]
  }));
}

function EnterpriseCard({ feature, isInView, index, layout = "free" }: { feature: EnterpriseFeature; isInView: boolean; index: number; layout?: "free" | "grid" }) {
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
        return "w-full p-6";
      case "large":
        return "w-full p-6";
      default:
        return "w-full p-6";
    }
  };
  const baseClasses = layout === "free" ? getFreeSizeClasses(feature.size) : getGridSizeClasses(feature.size);
  const getDelay = (i: number) => `${i * 80}ms`;
  const gridRotation = "0deg";
  const containerBase = `${layout === "free" ? "absolute" : "relative"} ${baseClasses} ${layout === "free" ? "rounded-xl border border-white/40" : "rounded-2xl border-0"} transition-all duration-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;
  
  const getBackgroundStyle = (bgColor: string) => {
    if (bgColor === 'gradient') {
      return { background: 'linear-gradient(to bottom right, #F3F0FF, #FAF5FF, #EFF6FF)' };
    }
    return { backgroundColor: bgColor };
  };
  
  if (layout === "grid") {
    return (
      <div
        className={`${containerBase} ${feature.shadowClass ?? "shadow-lg shadow-gray-500/5"} hover:-translate-y-1 ease-in-out group`}
        style={{ ...getBackgroundStyle(feature.bgColor), zIndex: feature.zIndex, transitionDelay: isInView ? getDelay(index) : "0ms", transform: `rotate(${gridRotation})` }}
      >
        <div className="h-full w-full flex items-center justify-between">
          <div className="pr-3">
            <div className={`text-base md:text-lg font-semibold leading-tight mb-1 ${feature.titleColor ?? "text-gray-900"}`}>{feature.title}</div>
            <div className={`text-sm md:text-base ${feature.descColor ?? "text-gray-700/90"}`}>{feature.description}</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`${containerBase} overflow-hidden cursor-pointer group ${feature.bgColor === 'gradient' ? 'highlight-card' : ''}`}
      style={{ 
        ...getBackgroundStyle(feature.bgColor),
        ...(layout === "free" ? (feature.position as React.CSSProperties) : {}), 
        zIndex: feature.zIndex, 
        transitionDelay: isInView ? getDelay(index) : "0ms", 
        boxShadow: "0 8px 24px rgba(0,0,0,0.08), 0 3px 8px rgba(0,0,0,0.04)", 
        transform: feature.position.transform 
      }}
    >
      {layout === "free" && <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3 rounded-sm bg-yellow-200/80 shadow-sm mix-blend-multiply rotate-[-2deg]" />}
      <div className="h-full flex flex-col justify-between relative">
        <div className="flex items-center justify-between mb-2" />
        <div>
          <div className="text-sm md:text-base lg:text-lg font-bold text-gray-800 leading-tight mb-1 break-words">{feature.title}</div>
          {(feature.size === "medium" || feature.size === "large") && <div className="text-xs sm:text-sm md:text-base text-gray-700 leading-snug opacity-90 break-words line-clamp-2 sm:line-clamp-none">{feature.description}</div>}
        </div>
      </div>
    </div>
  );
}

export default function EnterpriseEssentials() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const t = useTranslations("enterpriseEssentials");
  const messages = useMessages();
  const desktopHeading = t("title");
  const desktopTagline = t("subtitle");
  // Build desktop columns from localized messages
  const columns = (messages as any)?.enterpriseEssentials?.columns ?? [];
  const desktopColumns = columns.map((col: any) => ({
    heading: col.heading,
    cards: col.items.map((item: any) => ({
      title: item.title,
      desc: item.description,
      // visual styling stays the same based on semantic grouping
      barColor:
        col.heading.toLowerCase().includes("security") || col.heading.toLowerCase().includes("الأمان")
          ? "bg-purple-400"
          : col.heading.toLowerCase().includes("reliability") || col.heading.toLowerCase().includes("الموثوقية")
          ? item.title.toLowerCase().includes("on-premise") || item.title.toLowerCase().includes("نشر")
            ? "bg-gradient-to-r from-purple-500 to-blue-500"
            : ["99.9", "uptime", "اتفاقية وقت تشغيل"].some((k) => item.title.toLowerCase().includes(k))
            ? "bg-emerald-400"
            : "bg-purple-400"
          : col.heading.toLowerCase().includes("integrations") || col.heading.toLowerCase().includes("التكامل")
          ? item.title.toLowerCase().includes("incident") || item.title.toLowerCase().includes("حوادث")
            ? "bg-pink-400"
            : item.title.toLowerCase().includes("api") || item.title.toLowerCase().includes("api")
            ? "bg-blue-400"
            : item.title.toLowerCase().includes("audit") || item.title.toLowerCase().includes("سجلات")
            ? "bg-emerald-400"
            : "bg-purple-400"
          : "bg-purple-400",
      bgColor:
        item.title.toLowerCase().includes("on-premise") || item.title.toLowerCase().includes("نشر")
          ? "gradient"
          : item.title.toLowerCase().includes("api")
          ? "#EFF6FF"
          : item.title.toLowerCase().includes("audit") || item.title.toLowerCase().includes("سجلات")
          ? "#ECFDF5"
          : item.title.toLowerCase().includes("incident") || item.title.toLowerCase().includes("حوادث")
          ? "#FDF2F8"
          : item.title.toLowerCase().includes("granular") || item.title.toLowerCase().includes("أذونات")
          ? "#ECFDF5"
          : item.title.toLowerCase().includes("soc")
          ? "#FFFBEB"
          : item.title.toLowerCase().includes("uptime") || item.title.includes("99.9")
          ? "#ECFDF5"
          : item.title.toLowerCase().includes("performance") || item.title.toLowerCase().includes("أداء")
          ? "#F3F0FF"
          : item.title.toLowerCase().includes("residency") || item.title.toLowerCase().includes("البيانات")
          ? "#FFFBEB"
          : item.title.toLowerCase().includes("sso") || item.title.toLowerCase().includes("تسجيل")
          ? "#F3F0FF"
          : "#F3F0FF",
      large:
        item.title.toLowerCase().includes("on-premise") || item.title.toLowerCase().includes("نشر")
    }))
  }));
  const enterpriseFeatures = getEnterpriseFeatures(messages);
  return (
  <section className="py-12 sm:py-16 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-20 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-800 mb-5 tracking-tight">{desktopHeading}</h2>
          <p className="text-lg md:text-xl text-gray-500 font-light max-w-3xl mx-auto">{desktopTagline}</p>
        </div>
        <div className="flex justify-center lg:hidden">
          <div className="relative w-full max-w-xs sm:max-w-md mx-auto h-[760px] sm:h-[800px]">
            {enterpriseFeatures.map((feature, index) => (
              <EnterpriseCard key={feature.title} feature={feature} isInView={isInView} index={index} />
            ))}
          </div>
        </div>
        {/* New desktop 3-column layout */}
        <div className="hidden lg:grid grid-cols-3 gap-16">
          {desktopColumns.map((col: { heading: string; cards: Array<{ title: string; desc: string; barColor: string; bgColor: string; large?: boolean }> }) => (
            <div key={col.heading} className="space-y-6">
              <div className="mb-10">
                <h3 className="text-lg font-medium text-gray-600 tracking-wide">{col.heading}</h3>
              </div>
              {col.cards.map((card: { title: string; desc: string; barColor: string; bgColor: string; large?: boolean }) => (
                <div
                  key={card.title}
                  className={`${card.large ? 'p-10 relative highlight-card scale-[1.08]' : 'p-8'} rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300`}
                  style={{
                    background: card.bgColor === 'gradient' 
                      ? 'linear-gradient(to bottom right, #F3F0FF, #FAF5FF, #EFF6FF)' 
                      : card.bgColor
                  }}
                >
                  <h4 className={`text-base ${card.large ? 'text-lg' : ''} font-semibold text-gray-800 mb-1`}>{card.title}</h4>
                  <div className={`${card.large ? 'w-20 h-[3px]' : 'w-16 h-[2px]'} ${card.barColor} mb-4`}></div>
                  <p className={`text-sm ${card.large ? 'text-gray-700' : 'text-gray-600'} leading-relaxed`}>{card.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
