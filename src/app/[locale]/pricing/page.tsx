"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Testimonials from "@/components/Testimonials";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

export default function PricingPage() {
  const t = useTranslations("pricing");
  const [activeTab, setActiveTab] = useState("yearly");
  const [expandedFAQs, setExpandedFAQs] = useState<Set<number>>(new Set());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleFAQ = (index: number) => {
    const newExpandedFAQs = new Set(expandedFAQs);
    if (newExpandedFAQs.has(index)) {
      newExpandedFAQs.delete(index);
    } else {
      newExpandedFAQs.add(index);
    }
    setExpandedFAQs(newExpandedFAQs);
  };

  return (
    <main>
      {/* Hero Section */}
      <Section className="pt-32 pb-12 relative overflow-hidden">
        {/* Enhanced gradient background matching the landing page design */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900"></div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-gray-400/60 to-gray-600/50 dark:from-gray-600/40 dark:to-gray-500/35 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-40 w-96 h-96 bg-gradient-to-tr from-gray-300/50 to-gray-500/60 dark:from-gray-700/35 dark:to-gray-600/40 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-gray-500/70 dark:bg-gray-600/50 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gray-400/65 dark:bg-gray-500/45 rounded-full blur-2xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Billing Toggle */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setActiveTab("monthly")}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === "monthly"
                      ? "bg-gradient-to-r from-gray-800 via-gray-700 to-black dark:from-gray-200 dark:via-gray-100 dark:to-gray-400 text-white dark:text-gray-800 shadow-lg"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
                  }`}
                >
                  {t("tabs.monthly")}
                </button>
                <button
                  onClick={() => setActiveTab("yearly")}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === "yearly"
                      ? "bg-gradient-to-r from-gray-800 via-gray-700 to-black dark:from-gray-200 dark:via-gray-100 dark:to-gray-400 text-white dark:text-gray-800 shadow-lg"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
                  }`}
                >
                  {t("tabs.yearly")}
                  <span className="ml-2 bg-gray-600 dark:bg-gray-400 text-white dark:text-gray-800 px-2 py-1 rounded-full text-xs">
                    {t("tabs.save")}
                  </span>
                </button>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              {t("hero.title.part1")}{" "}
              <span className="bg-gradient-to-r from-gray-800 via-gray-400 to-black dark:from-slate-400 dark:via-slate-200 dark:to-slate-600 bg-clip-text text-transparent">
                {t("hero.title.highlight")}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {t("hero.subtitle.part1")}{" "}
              <span className="relative">
                <span className="text-gray-600 dark:text-gray-300 font-bold">
                  {t("hero.subtitle.part2")}{" "}
                  <span className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-800 via-gray-400 to-black dark:from-slate-400 dark:via-slate-200 dark:to-slate-600 bg-clip-text text-transparent font-extrabold">
                    {isClient ? (activeTab === "yearly"
                      ? t("hero.price.yearly")
                      : t("hero.price.monthly")) : t("hero.price.yearly")}
                  </span>{" "}
                  {t("hero.subtitle.part3")}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-800 via-gray-400 to-black dark:from-slate-400 dark:via-slate-200 dark:to-slate-600 transform -skew-x-12"></span>
              </span>
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
              {t("hero.subtitle.part4")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="text-lg px-8 py-4">
                {t("hero.cta.primary")}
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                {t("hero.cta.secondary")}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section className="py-16 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Features Box */}
            <AnimatedCard delay={100} direction="up">
              <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border border-gray-200 dark:border-gray-700 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800/20 dark:to-gray-700/20 rounded-full transform translate-x-32 -translate-y-32"></div>

              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {t("features.title")}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {t("features.subtitle")}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600 text-white dark:text-gray-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {t("features.badge")}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {t
                    .raw("features.items")
                    .map((feature: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-200 rounded-full mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
              </div>
            </AnimatedCard>

            {/* Simple Pricing Badge */}
            <AnimatedCard delay={200} direction="up">
              <div className="text-center mb-16">
                <div className="inline-block bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600 text-white dark:text-gray-800 px-6 py-3 rounded-full mb-6 text-base font-semibold shadow-lg">
                  {t("plan.badge")}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {t("plan.title")}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {t("plan.subtitle")}
                </p>
              </div>
            </AnimatedCard>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16 auto-rows-fr">
              {t.raw("plan.features").map((feature: string, index: number) => (
                <AnimatedCard key={index} delay={index * 30 + 100} direction="up" className="h-full">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center relative hover:shadow-md transition-shadow duration-300 h-full flex flex-col justify-between min-h-[120px]">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600 rounded-full flex items-center justify-center mx-auto mb-3 flex-shrink-0">
                        <span className="text-white dark:text-gray-800 font-bold text-sm">✓</span>
                      </div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white leading-relaxed flex-grow flex items-center">
                        {feature}
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Customer Feedback Section */}
      <Section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black text-white relative overflow-hidden">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/60 to-gray-900/60 dark:from-gray-900/80 dark:to-black/80"></div>

        <Container className="relative z-10">
          <div className="max-w-6xl mx-auto">
            <AnimatedCard delay={100} direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                {t("feedback.title")}
              </h2>
            </AnimatedCard>

            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {t
                .raw("feedback.items")
                .map((feedback: string, index: number) => (
                  <AnimatedCard key={index} delay={index * 20 + 100} direction="up">
                    <div className="bg-gradient-to-br from-white/95 to-gray-100/80 dark:from-white/25 dark:to-gray-200/20 backdrop-blur-md rounded-2xl px-4 py-3 text-sm text-gray-800 dark:text-gray-200 border border-white/60 dark:border-white/40 hover:from-white/100 hover:to-gray-100/90 dark:hover:from-white/30 dark:hover:to-gray-200/25 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap">
                      {feedback}
                    </div>
                  </AnimatedCard>
                ))}
            </div>

            {/* FAQ Section */}
            <div className="space-y-4 mb-12">
              {t
                .raw("faq.items")
                .map(
                  (
                    faq: { question: string; answer: string },
                    index: number
                  ) => {
                    const isExpanded = expandedFAQs.has(index);
                    return (
                      <AnimatedCard key={index} delay={index * 50 + 100} direction="up">
                        <div className="bg-gradient-to-br from-white/85 to-gray-100/70 dark:from-white/12 dark:to-gray-200/8 backdrop-blur-md rounded-xl border border-white/50 dark:border-white/25 overflow-hidden hover:from-white/90 hover:to-gray-100/80 dark:hover:from-white/18 dark:hover:to-gray-200/12 transition-all duration-300 shadow-lg">
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-full px-4 sm:px-6 py-4 text-left hover:bg-gradient-to-r hover:from-white/20 hover:to-gray-100/20 dark:hover:from-white/5 dark:hover:to-gray-200/5 transition-all duration-200"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 pr-4 text-sm sm:text-base">
                              {faq.question}
                            </h3>
                            <span className="text-gray-600 dark:text-gray-400 text-xl transition-all duration-300">
                              {isExpanded ? "−" : "+"}
                            </span>
                          </div>
                        </button>
                        <div
                          className="overflow-hidden transition-all duration-300 ease-in-out"
                          style={{
                            maxHeight: isExpanded ? "200px" : "0px",
                          }}
                        >
                          <div className="px-4 sm:px-6 py-4 border-t border-white/30 dark:border-white/20 bg-gradient-to-r from-white/60 to-gray-100/60 dark:from-white/15 dark:to-gray-200/15">
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                        </div>
                        </AnimatedCard>
                    );
                  }
                )}
            </div>

            <AnimatedCard delay={200} direction="up">
              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-white text-gray-800 hover:bg-gray-50 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white text-lg px-8 py-4 font-semibold"
                >
                  {t("faq.cta")}
                </Button>
              </div>
            </AnimatedCard>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="py-16 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-950 dark:via-gray-900 dark:to-black">
        <Container>
          <div className="max-w-6xl mx-auto">
            <AnimatedCard delay={200} direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                {t("testimonials.title")}
              </h2>
            </AnimatedCard>

            <Testimonials />
          </div>
        </Container>
      </Section>

      {/* Support Section */}
      <Section className="py-16 bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <Container>
          <AnimatedCard delay={200} direction="up">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                {t("support.title")}
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("support.description")}
              </p>
            </div>
          </AnimatedCard>
        </Container>
      </Section>
    </main>
  );
}
