"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function APIIntegrationPage() {
  const t = useTranslations("apiIntegration");
  return (
    <main>
      {/* Hero Section */}
      <HeroSection 
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        imageSrc="/images/api-integration.png"
        imageAlt="API Integration - Connect your existing applications with Pulse"
        imageWidth={500}
        imageHeight={500}
      />

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
