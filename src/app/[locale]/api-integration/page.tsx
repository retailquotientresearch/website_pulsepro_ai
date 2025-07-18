"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function APIIntegrationPage() {
  const t = useTranslations("apiIntegration");
  return (
    <main>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 relative overflow-hidden">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-40 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {t("hero.title")}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t("hero.subtitle")}
              </p>
            </div>

            {/* Right side - Hero Illustration */}
            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <Image
                  src="/images/api-integration.png"
                  alt="API Integration - Connect your existing applications with Pulse"
                  width={500}
                  height={400}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Data Analytics Section */}
      <Section className="py-16 bg-white dark:bg-gray-900">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Illustration */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-xs">
                <Image
                  src="/images/data-analytics.png"
                  alt="Data Analytics Dashboard - See and understand your data better"
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {t("dataAnalytics.title")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t("dataAnalytics.description")}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Automation Section */}
      <Section className="py-16 bg-gray-50 dark:bg-gray-800">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {t("automation.title")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t("automation.description")}
              </p>
            </div>

            {/* Right side - Illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xs">
                <Image
                  src="/images/automation.png"
                  alt="Automation - Giving new definition to automation with Pulse"
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Team Extension Section */}
      <Section className="py-16 bg-white dark:bg-gray-900">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Illustration */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-xs">
                <Image
                  src="/images/team-collaboration.png"
                  alt="Team Collaboration - Extend the automation to your teams"
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {t("teamExtension.title")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t("teamExtension.description")}
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
