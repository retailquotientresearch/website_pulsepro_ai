"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations("testimonials");

  const surpriseFeatures = [
    {
      title: t("surprises.0.title"),
      description: t("surprises.0.description"),
      icon: "ri-line-chart-fill",
      iconBg: "bg-orange-500",
    },
    {
      title: t("surprises.1.title"),
      description: t("surprises.1.description"),
      icon: "ri-mail-fill",
      iconBg: "bg-blue-500",
    },
    {
      title: t("surprises.2.title"),
      description: t("surprises.2.description"),
      icon: "ri-focus-3-fill",
      iconBg: "bg-green-500",
    },
    {
      title: t("surprises.3.title"),
      description: t("surprises.3.description"),
      icon: "ri-smartphone-fill",
      iconBg: "bg-red-500",
    },
    {
      title: t("surprises.4.title"),
      description: t("surprises.4.description"),
      icon: "ri-error-warning-fill",
      iconBg: "bg-purple-500",
    },
    {
      title: t("surprises.5.title"),
      description: t("surprises.5.description"),
      icon: "ri-graduation-cap-fill",
      iconBg: "bg-gradient-to-br from-cyan-400 to-blue-500",
    },
  ];

  return (
    <Section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50"></div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          {/* Tagline */}
          <div className="inline-block mb-4">
            <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/30">
              <span className="text-white font-semibold">
                🌟 {t("tagline")}
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("title.part1")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              {t("title.part2")}
            </span>
          </h2>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {surpriseFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 transform hover:rotate-2 hover:scale-105 hover:shadow-2xl transition-all duration-300 origin-bottom-right"
            >
              <div
                className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6`}
              >
                <i className={`${feature.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-purple-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
