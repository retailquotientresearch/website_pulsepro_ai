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
      iconBg: "bg-gradient-to-tl from-gray-300 to-gray-600",
    },
    {
      title: t("surprises.1.title"),
      description: t("surprises.1.description"),
      icon: "ri-mail-fill",
      iconBg: "bg-gradient-to-br from-black via-gray-500 to-gray-700",
    },
    {
      title: t("surprises.2.title"),
      description: t("surprises.2.description"),
      icon: "ri-focus-3-fill",
      iconBg: "bg-gradient-to-r from-gray-400 to-gray-900",
    },
    {
      title: t("surprises.3.title"),
      description: t("surprises.3.description"),
      icon: "ri-smartphone-fill",
      iconBg: "bg-gradient-to-bl from-slate-600 via-gray-400 to-gray-800",
    },
    {
      title: t("surprises.4.title"),
      description: t("surprises.4.description"),
      icon: "ri-error-warning-fill",
      iconBg: "bg-gradient-to-t from-gray-900 to-gray-300",
    },
    {
      title: t("surprises.5.title"),
      description: t("surprises.5.description"),
      icon: "ri-graduation-cap-fill",
      iconBg: "bg-gradient-to-br from-gray-500 to-black",
    },
  ];

  return (
    <Section className="py-20 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100/30 to-gray-200/20 dark:from-gray-900/50 dark:to-gray-800/50"></div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          {/* Tagline */}
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 dark:from-gray-600 dark:via-gray-500 dark:to-gray-400 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-2">
              <i className="ri-star-line text-gray-600 dark:text-gray-400 text-xl font-bold"></i>
              <span className="text-gray-700 dark:text-gray-300 font-semibold">
                {t("tagline")}
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {t("title.part1")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-400 to-black dark:from-slate-400 dark:via-slate-200 dark:to-slate-600 font-extrabold drop-shadow-sm">
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