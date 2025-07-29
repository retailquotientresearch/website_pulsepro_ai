"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { useTranslations } from "next-intl";

export default function ClientSurprises() {
  const t = useTranslations("clientSurprises");

  const surpriseFeatures = [
    {
      title: t("surprises.0.title"),
      description: t("surprises.0.description"),
      icon: "ri-line-chart-fill",
      iconBg: "bg-gradient-to-tl from-yellow-400 to-orange-500",
    },
    {
      title: t("surprises.1.title"),
      description: t("surprises.1.description"),
      icon: "ri-mail-fill",
      iconBg: "bg-gradient-to-br from-orange-600 via-red-500 to-yellow-600",
    },
    {
      title: t("surprises.2.title"),
      description: t("surprises.2.description"),
      icon: "ri-focus-3-fill",
      iconBg: "bg-gradient-to-r from-yellow-400 to-orange-600",
    },
    {
      title: t("surprises.3.title"),
      description: t("surprises.3.description"),
      icon: "ri-smartphone-fill",
      iconBg: "bg-gradient-to-bl from-amber-500 via-orange-400 to-red-500",
    },
    {
      title: t("surprises.4.title"),
      description: t("surprises.4.description"),
      icon: "ri-error-warning-fill",
      iconBg: "bg-gradient-to-t from-red-600 to-yellow-400",
    },
    {
      title: t("surprises.5.title"),
      description: t("surprises.5.description"),
      icon: "ri-graduation-cap-fill",
      iconBg: "bg-gradient-to-br from-orange-500 to-red-600",
    },
  ];

  return (
    <Section className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Background decorative elements using orange gradient theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-yellow-400/40 to-orange-400/35 dark:from-yellow-400/25 dark:to-orange-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-40 w-64 h-64 bg-gradient-to-tr from-yellow-300/35 to-orange-500/40 dark:from-yellow-400/20 dark:to-orange-400/25 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-500/50 dark:bg-amber-400/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-yellow-400/45 to-orange-400/40 dark:from-yellow-500/25 dark:to-orange-400/20 rounded-full blur-2xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          {/* Tagline */}
          <div className="inline-block mb-4">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
              <i className="ri-star-line text-orange-600 dark:text-yellow-400 text-xl font-bold"></i>
              <span className="text-orange-600 dark:text-yellow-300 font-semibold">
                {t("tagline")}
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {t("title.part1")} <br />
            <span className="bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 bg-clip-text text-transparent font-extrabold drop-shadow-sm">
              {t("title.part2")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {surpriseFeatures.map((feature, index) => (
            <AnimatedCard
              key={index}
              delay={index * 150}
              direction="up"
              className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl p-8 border border-gray-200 dark:border-gray-600 transform hover:rotate-2 hover:scale-105 hover:shadow-2xl transition-all duration-300 origin-bottom-right shadow-lg"
            >
              <div
                className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6`}
              >
                <i className={`${feature.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}