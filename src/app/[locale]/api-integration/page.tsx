"use client";

import { useTranslations } from "next-intl";
import React from "react";

// Local lightweight helpers to keep this page self-contained
const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Section: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => (
  <section className={`py-16 ${className}`}>{children}</section>
);

const AnimatedCard: React.FC<React.PropsWithChildren<{ delay?: number; direction?: "left" | "right" }>> = ({ children }) => (
  <div className="transition-all duration-300 will-change-transform">{children}</div>
);

const Hero: React.FC<{ title: string; subtitle?: string } & { customIllustration?: { mainIcon: string; topRightIcon: string; bottomLeftIcon: string } }>
  = ({ title, subtitle, customIllustration }) => (
  <Section className="pt-24 pb-12">
    <Container>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{subtitle}</p>
          )}
        </div>
        <div className="flex justify-center lg:justify-end order-first lg:order-last">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[5/4]">
            <div className="w-full h-full bg-white/70 dark:bg-gray-800/60 rounded-3xl flex items-center justify-center shadow-xl">
              <div className="relative">
                <div className="w-32 h-32 bg-gray-800 dark:bg-gray-600 rounded-2xl flex items-center justify-center mb-4">
                  <i className={`${customIllustration?.mainIcon ?? "ri-plug-line"} text-5xl text-white dark:text-gray-800`}></i>
                </div>
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gray-700 dark:bg-gray-500 rounded-full flex items-center justify-center">
                  <i className={`${customIllustration?.topRightIcon ?? "ri-links-line"} text-lg text-white dark:text-gray-800`}></i>
                </div>
                <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-gray-600 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <i className={`${customIllustration?.bottomLeftIcon ?? "ri-code-s-slash-line"} text-base text-white dark:text-gray-200`}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </Section>
);

export default function APIIntegrationPage() {
  const t = useTranslations("apiIntegration");
  return (
    <main className="min-h-screen bg-[#FFFFEB] overflow-x-hidden">
      {/* Hero Section */}
      <Hero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        customIllustration={{ mainIcon: "ri-plug-line", topRightIcon: "ri-links-line", bottomLeftIcon: "ri-code-s-slash-line" }}
      />

      {/* Data Analytics Section */}
      <Section className="py-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Illustration */}
            <AnimatedCard delay={200} direction="left">
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-sm">
                  <div className="w-80 h-80 mx-auto bg-white/70 rounded-3xl flex items-center justify-center shadow-xl">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gray-800 rounded-2xl flex items-center justify-center mb-4">
                        <i className="ri-bar-chart-line text-6xl text-white dark:text-gray-800"></i>
                      </div>
                      <div className="absolute -top-3 -right-3 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                        <i className="ri-database-2-line text-lg text-white dark:text-gray-800"></i>
                      </div>
                      <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
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
    <Section className="py-16">
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
          <div className="w-80 h-80 mx-auto bg-white/70 rounded-3xl flex items-center justify-center shadow-xl">
                    <div className="relative">
            <div className="w-32 h-32 bg-gray-800 rounded-2xl flex items-center justify-center mb-4">
                        <i className="ri-robot-line text-6xl text-white dark:text-gray-800"></i>
                      </div>
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                        <i className="ri-settings-3-line text-lg text-white dark:text-gray-800"></i>
                      </div>
            <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
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
    <Section className="py-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Illustration */}
            <AnimatedCard delay={1000} direction="left">
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-sm">
          <div className="w-80 h-80 mx-auto bg-white/70 rounded-3xl flex items-center justify-center shadow-xl">
                    <div className="relative">
            <div className="w-32 h-32 bg-gray-800 rounded-2xl flex items-center justify-center mb-4">
                        <i className="ri-team-line text-6xl text-white dark:text-gray-800"></i>
                      </div>
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                        <i className="ri-shield-check-line text-lg text-white dark:text-gray-800"></i>
                      </div>
            <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
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
