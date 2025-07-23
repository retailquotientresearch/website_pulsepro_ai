"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import HeroSection from "@/components/HeroSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { useTranslations } from "next-intl";

export default function APIIntegrationPage() {
  const t = useTranslations("apiIntegration");
  return (
    <main>
      {/* Hero Section */}
      <HeroSection 
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        customIllustration={{
          mainIcon: "ri-plug-line",
          topRightIcon: "ri-links-line",
          bottomLeftIcon: "ri-code-s-slash-line"
        }}
      />

      {/* Data Analytics Section */}
      <Section className="py-16 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Illustration */}
            <AnimatedCard delay={200} direction="left">
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-sm">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl flex items-center justify-center shadow-xl">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-to-br from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600 rounded-2xl flex items-center justify-center mb-4">
                        <i className="ri-bar-chart-line text-6xl text-white dark:text-gray-800"></i>
                      </div>
                      <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-700 dark:from-gray-300 dark:to-gray-500 rounded-full flex items-center justify-center">
                        <i className="ri-database-2-line text-lg text-white dark:text-gray-800"></i>
                      </div>
                      <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-700 rounded-full flex items-center justify-center">
                        <i className="ri-line-chart-line text-base text-white dark:text-gray-200"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* Right side - Content */}
            <AnimatedCard delay={200} direction="right">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  {t("dataAnalytics.title")}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {t("dataAnalytics.description")}
                </p>
              </div>
            </AnimatedCard>
          </div>
        </Container>
      </Section>

      {/* Automation Section */}
      <Section className="py-16 bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <AnimatedCard delay={300} direction="left">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  {t("automation.title")}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {t("automation.description")}
                </p>
              </div>
            </AnimatedCard>

            {/* Right side - Illustration */}
            <AnimatedCard delay={300} direction="right">
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl flex items-center justify-center shadow-xl">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-to-br from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600 rounded-2xl flex items-center justify-center mb-4">
                        <i className="ri-robot-line text-6xl text-white dark:text-gray-800"></i>
                      </div>
                      <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-700 dark:from-gray-300 dark:to-gray-500 rounded-full flex items-center justify-center">
                        <i className="ri-settings-3-line text-lg text-white dark:text-gray-800"></i>
                      </div>
                      <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-700 rounded-full flex items-center justify-center">
                        <i className="ri-flashlight-line text-base text-white dark:text-gray-200"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </Container>
      </Section>

      {/* Team Extension Section */}
      <Section className="py-16 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Illustration */}
            <AnimatedCard delay={1000} direction="left">
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-sm">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl flex items-center justify-center shadow-xl">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-to-br from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600 rounded-2xl flex items-center justify-center mb-4">
                        <i className="ri-team-line text-6xl text-white dark:text-gray-800"></i>
                      </div>
                      <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-700 dark:from-gray-300 dark:to-gray-500 rounded-full flex items-center justify-center">
                        <i className="ri-shield-check-line text-lg text-white dark:text-gray-800"></i>
                      </div>
                      <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-700 rounded-full flex items-center justify-center">
                        <i className="ri-user-add-line text-base text-white dark:text-gray-200"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* Right side - Content */}
            <AnimatedCard delay={1200} direction="right">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  {t("teamExtension.title")}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {t("teamExtension.description")}
                </p>
              </div>
            </AnimatedCard>
          </div>
        </Container>
      </Section>
    </main>
  );
}
