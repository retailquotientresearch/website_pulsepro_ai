"use client";

import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function FAQ() {
  const t = useTranslations("faq");

  const worries = [
    {
      question: t("worries.0.question"),
      answer: t("worries.0.answer"),
      description: t("worries.0.description"),
      gradient: "bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700",
    },
    {
      question: t("worries.1.question"),
      answer: t("worries.1.answer"),
      description: t("worries.1.description"),
      gradient: "bg-gradient-to-r from-blue-50 to-gray-50 dark:from-blue-900/20 dark:to-gray-800",
    },
    {
      question: t("worries.2.question"),
      answer: t("worries.2.answer"),
      description: t("worries.2.description"),
      gradient: "bg-gradient-to-r from-gray-100 to-blue-50 dark:from-gray-700 dark:to-blue-900/20",
    },
  ];

  return (
    <Section className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-blue-100 to-gray-100 dark:from-blue-900/30 dark:to-gray-800 rounded-full px-6 py-3 border border-blue-200 dark:border-blue-700">
              <span className="text-blue-700 dark:text-blue-300 font-semibold">
                <i className="ri-question-line text-orange-600 dark:text-orange-400 text-xl mr-2"></i>
                {t("tagline")}
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("title.part1")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
              {t("title.part2")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="space-y-6">
          {worries.map((worry, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${worry.gradient} rounded-3xl p-8 border border-gray-200 dark:border-gray-700`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center">
                  <i className="ri-question-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-0">
                    🤔 {worry.question}
                  </h3>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-check-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    ✅ {worry.answer}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{worry.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-100 to-gray-100 dark:from-blue-900/30 dark:to-gray-800 text-blue-700 dark:text-blue-300 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-200 hover:to-gray-200 dark:hover:from-blue-800/40 dark:hover:to-gray-700 transition-all border border-blue-200 dark:border-blue-700">
            📋 {t("seeAllButton")}
          </button>
        </div>
      </Container>
    </Section>
  );
}
