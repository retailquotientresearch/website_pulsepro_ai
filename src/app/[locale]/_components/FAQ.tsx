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
      gradient: "bg-gradient-to-r from-purple-50 to-pink-50",
    },
    {
      question: t("worries.1.question"),
      answer: t("worries.1.answer"),
      description: t("worries.1.description"),
      gradient: "bg-gradient-to-r from-blue-50 to-purple-50",
    },
    {
      question: t("worries.2.question"),
      answer: t("worries.2.answer"),
      description: t("worries.2.description"),
      gradient: "bg-gradient-to-r from-green-50 to-teal-50",
    },
  ];

  return (
    <Section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3">
              <span className="text-purple-700 font-semibold">
                <i className="ri-question-line text-red-600 text-xl mr-2"></i>
                {t("tagline")}
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            {t("title.part1")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {t("title.part2")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="space-y-6">
          {worries.map((worry, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${worry.gradient} rounded-3xl p-8`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                  <i className="ri-question-line text-red-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-0">
                    🤔 {worry.question}
                  </h3>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-check-line text-green-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    ✅ {worry.answer}
                  </h3>
                  <p className="text-gray-600">{worry.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all">
            📋 {t("seeAllButton")}
          </button>
        </div>
      </Container>
    </Section>
  );
}
