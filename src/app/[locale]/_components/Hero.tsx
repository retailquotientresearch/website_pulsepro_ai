"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <Section
      className="h-[85vh] flex items-center justify-center relative overflow-hidden"
      padding="xl"
    >
      {/* Enhanced gradient background following black/white theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900"></div>

      <Container className="relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Tagline */}
          <div className="mb-8 mt-8 sm:mt-4 flex items-center justify-center">
            <div className="bg-white/80 dark:bg-gray-900 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
              <i className="ri-rocket-2-line text-gray-600 dark:text-gray-400 text-xl font-bold rotate-45"></i>
              <span className="text-gray-600 dark:text-gray-300 font-medium text-lg">
                {t("tagline")}
              </span>
            </div>
          </div>

          {/* Main heading with gradient text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
            {t("title.part1")}{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 bg-clip-text text-transparent font-extrabold drop-shadow-sm">
              {t("title.highlight")}
            </span>{" "}
            {t("title.part2")}
          </h1>

          {/* Subtitle with gradient text for specific words */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            {t("subtitle.part1")}{" "}
            <span className="bg-clip-text font-bold">
              {t("subtitle.highlight")}
            </span>
          </p>

          {/* CTA Buttons following black/white theme */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="p-1 bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 rounded-full hover:scale-[1.02] transition-all duration-200">
              <Button
                size="lg"
                className="flex items-center gap-3 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-full hover:scale-[1.0]"
              >
                <i className="ri-play-fill text-2xl bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 bg-clip-text text-transparent"></i>
                {t("cta")}
              </Button>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-3 bg-white dark:bg-slate-900/90 border-2 border-gray-600 dark:border-white text-gray-700 hover:text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 dark:hover:text-gray-200 hover:border-gray-800 dark:hover:border-gray-300 transition-all hover:scale-[1.05] duration-200"
            >
              <i className="ri-phone-fill text-xl"></i>
              {t("secondaryCta")}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
