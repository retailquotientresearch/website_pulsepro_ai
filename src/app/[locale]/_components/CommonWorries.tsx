"use client";

import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

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
    <Section className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-950 dark:to-gray-900">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 dark:from-gray-700 dark:via-gray-600 dark:to-gray-500 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
              <span className="text-gray-700 dark:text-gray-300 font-semibold">
                <i className="ri-question-line text-gray-600 dark:text-gray-400 text-xl font-bold mr-2"></i>
                {t("tagline")}
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("title.part1")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-400 to-black dark:from-slate-400 dark:via-slate-200 dark:to-slate-600 font-extrabold drop-shadow-sm">
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
              className={`grid md:grid-cols-2 gap-6 md:gap-8 items-center ${worry.gradient} rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-gray-600 shadow-sm`}
            >
              <div className="flex flex-col md:flex-row md:items-center text-center md:text-left space-y-3 md:space-y-0">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                  <i className="ri-question-line text-white text-xl"></i>
                </div>
                <div className="md:ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-0">
                    {worry.question}
                  </h3>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center text-center md:text-left space-y-3 md:space-y-0">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-300 dark:to-gray-500 rounded-2xl flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                  <i className="ri-check-line text-white dark:text-gray-800 text-xl"></i>
                </div>
                <div className="md:ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    {worry.answer}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{worry.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all border border-gray-200 dark:border-gray-600 shadow-sm flex items-center gap-2 mx-auto">
            <i className="ri-list-check text-lg"></i>
            {t("seeAllButton")}
          </button>
        </div>
      </Container>
    </Section>
  );
}
