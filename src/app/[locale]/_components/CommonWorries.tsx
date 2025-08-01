"use client";

import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

export default function CommonWorries() {
  const t = useTranslations("commonWorries");

  const worries = [
    {
      question: t("worries.0.question"),
      answer: t("worries.0.answer"),
      description: t("worries.0.description"),
      gradient: "bg-gradient-to-r from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800",
    },
    {
      question: t("worries.1.question"),
      answer: t("worries.1.answer"),
      description: t("worries.1.description"),
      gradient: "bg-gradient-to-r from-gray-50 via-white to-gray-100 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700",
    },
    {
      question: t("worries.2.question"),
      answer: t("worries.2.answer"),
      description: t("worries.2.description"),
      gradient: "bg-gradient-to-r from-gray-100 via-gray-50 to-white dark:from-gray-800 dark:via-gray-700 dark:to-gray-800",
    },
  ];

  return (
    <Section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-950 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements using gradient theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-gray-300/30 to-gray-500/25 dark:from-gray-700/20 dark:to-gray-900/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-40 w-64 h-64 bg-gradient-to-tr from-gray-200/25 to-gray-400/30 dark:from-gray-800/15 dark:to-gray-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-gray-400/40 dark:bg-gray-700/25 rounded-full blur-2xl"></div>
      </div>
      <Container className="relative z-10">
        <div className="text-center mb-16">
          <div className="mb-8 flex items-center justify-center">
            <div className="bg-white/80 dark:bg-gray-800 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
              <i className="ri-question-line text-gray-600 dark:text-gray-400 text-xl font-bold"></i>
              <span className="text-gray-600 dark:text-gray-300 font-medium text-lg">
                {t("tagline")}
              </span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("title.part1")} <br />
            <span className="bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 bg-clip-text text-transparent font-extrabold drop-shadow-sm">
              {t("title.part2")}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="space-y-6">
          {worries.map((worry, index) => (
            <AnimatedCard
              key={index}
              delay={index * 200}
              direction="up"
              className={`grid md:grid-cols-2 gap-6 md:gap-8 items-center ${worry.gradient} rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-gray-600 shadow-sm`}
            >
              <div className="flex flex-col md:flex-row md:items-center text-center md:text-left space-y-3 md:space-y-0">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-800 rounded-2xl flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                  <i className="ri-question-line text-white text-xl"></i>
                </div>
                <div className="md:ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-0">
                    {worry.question}
                  </h3>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center text-center md:text-left space-y-3 md:space-y-0">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-800 rounded-2xl flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                  <i className="ri-check-line text-white text-xl"></i>
                </div>
                <div className="md:ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    {worry.answer}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{worry.description}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="p-1 bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 rounded-full hover:scale-[1.02] transition-all duration-200 mx-auto w-fit">
            <button className="bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold transition-all shadow-sm flex items-center gap-2">
              <i className="ri-list-check text-lg bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 bg-clip-text text-transparent"></i>
              {t("seeAllButton")}
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
