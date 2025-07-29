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

      {/* Background decorative elements using grayscale */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-yellow-400/60 to-orange-400/50 dark:from-yellow-400/40 dark:to-orange-400/35 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-40 w-64 h-64 bg-gradient-to-tr from-yellow-300/50 to-orange-500/60 dark:from-yellow-400/35 dark:to-orange-400/40 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-500/70 dark:bg-amber-400/50 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-yellow-400/65 to-orange-400/55 dark:from-yellow-500/45 dark:to-orange-400/35 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-t from-orange-400/55 to-yellow-400/45 dark:from-orange-500/35 dark:to-yellow-400/30 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 left-1/3 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-b from-yellow-400/50 to-orange-400/40 dark:from-yellow-400/30 dark:to-orange-400/25 rounded-full blur-3xl"></div>
      </div>

      {/* Floating UI elements - one at each corner using grayscale theme with metallic shine */}
      {/* Top left - Rocket */}
      {/* <div className="absolute top-16 sm:top-16 left-16 sm:left-16 animate-bounce">
        <div className="w-12 h-12 bg-gradient-to-br from-gray-800 via-gray-700 to-black dark:from-gray-200 dark:via-gray-100 dark:to-gray-400 backdrop-blur-sm rounded-full rotate-12 opacity-90 shadow-lg flex items-center justify-center hover:opacity-100 hover:shadow-xl transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-tr before:from-white/20 before:to-transparent before:rounded-full before:opacity-60">
          <i className="ri-rocket-fill text-white dark:text-gray-800 text-xl relative z-10"></i>
        </div>
      </div> */}
      {/* Top right - Flashlight */}
      {/* <div
        className="absolute top-16 sm:top-16 right-16 sm:right-16 animate-bounce"
        style={{ animationDelay: "0.5s", animationDuration: "2s" }}
      >
        <div className="w-12 h-12 bg-gradient-to-bl from-orange-500 via-red-500 to-yellow-600 dark:from-orange-400 dark:via-red-400 dark:to-yellow-500 backdrop-blur-sm rounded-full opacity-85 shadow-md flex items-center justify-center transform transition-transform hover:scale-110 hover:opacity-100 hover:shadow-lg before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:rounded-full before:opacity-50">
          <i className="ri-flashlight-fill text-white dark:text-gray-800 text-xl relative z-10"></i>
        </div>
      </div> */}
      {/* Bottom left - Star */}
      {/* <div
        className="absolute bottom-16 sm:bottom-16 left-16 sm:left-16 animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "2.5s" }}
      >
        <div className="w-12 h-12 bg-gradient-to-tr from-yellow-500 via-orange-500 to-red-600 dark:from-yellow-400 dark:via-orange-400 dark:to-red-500 backdrop-blur-sm rounded-full rotate-45 opacity-80 shadow-sm flex items-center justify-center transform transition-transform hover:scale-110 hover:opacity-100 hover:shadow-md before:absolute before:inset-0 before:bg-gradient-to-bl before:from-white/25 before:to-transparent before:rounded-full before:opacity-40">
          <i className="ri-star-fill text-white dark:text-gray-800 -rotate-45 text-xl relative z-10"></i>
        </div>
      </div> */}
      {/* Bottom right - Check */}
      {/* <div
        className="absolute bottom-16 sm:bottom-16 right-16 sm:right-16 animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "1.8s" }}
      >
        <div className="w-12 h-12 bg-gradient-to-tl from-black via-gray-800 to-gray-900 dark:from-gray-100 dark:via-white dark:to-gray-300 backdrop-blur-sm rounded-full opacity-85 shadow-md flex items-center justify-center transform transition-transform hover:scale-110 hover:opacity-100 hover:shadow-lg before:absolute before:inset-0 before:bg-gradient-to-tr before:from-white/30 before:to-transparent before:rounded-full before:opacity-70">
          <i className="ri-check-fill text-white dark:text-gray-800 text-xl relative z-10"></i>
        </div>
      </div> */}

      {/* Additional geometrical shapes using grayscale with subtle metallic shine - hidden on mobile to avoid text overlap */}
      <div
        className="absolute top-1/3 left-8 animate-bounce hidden md:block"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="w-5 h-5 bg-gradient-to-br from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500 rounded-full opacity-60 hover:opacity-80 transition-opacity shadow-sm before:absolute before:inset-0 before:bg-gradient-to-tr before:from-white/30 before:to-transparent before:rounded-full"></div>
      </div>
      <div
        className="absolute top-1/2 right-8 animate-bounce hidden md:block"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="w-6 h-6 bg-gradient-to-tl from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500 rounded-full opacity-50 hover:opacity-70 transition-opacity shadow-sm before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/25 before:to-transparent before:rounded-full"></div>
      </div>
      <div
        className="absolute bottom-1/3 left-12 animate-bounce hidden md:block"
        style={{ animationDelay: "2.5s" }}
      >
        <div className="w-4 h-4 bg-gradient-to-tr from-gray-700 to-gray-800 dark:from-gray-300 dark:to-gray-400 rounded-full opacity-70 hover:opacity-90 transition-opacity shadow-sm before:absolute before:inset-0 before:bg-gradient-to-bl before:from-white/20 before:to-transparent before:rounded-full"></div>
      </div>
      <div
        className="absolute top-20 right-1/3 animate-bounce hidden md:block"
        style={{ animationDelay: "3s" }}
      >
        <div className="w-5 h-5 bg-gradient-to-bl from-amber-400 to-yellow-600 dark:from-amber-300 dark:to-yellow-500 rounded-full opacity-40 hover:opacity-60 transition-opacity shadow-sm before:absolute before:inset-0 before:bg-gradient-to-tr before:from-white/35 before:to-transparent before:rounded-full"></div>
      </div>

      {/* Additional floating shapes at bottom off-center with metallic shine - hidden on mobile */}
      <div
        className="absolute bottom-1/4 left-1/4 animate-bounce hidden md:block"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-6 h-6 bg-gradient-to-br from-red-400 to-pink-500 dark:from-red-300 dark:to-pink-400 rounded-full opacity-50 hover:opacity-70 transition-opacity shadow-sm before:absolute before:inset-0 before:bg-gradient-to-tr before:from-white/25 before:to-transparent before:rounded-full before:opacity-60"></div>
      </div>
      <div
        className="absolute bottom-1/3 right-1/4 animate-bounce hidden md:block"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-4 h-4 bg-gradient-to-tl from-red-500 to-orange-600 dark:from-red-400 dark:to-orange-500 rounded-full opacity-60 hover:opacity-80 transition-opacity shadow-sm before:absolute before:inset-0 before:bg-gradient-to-bl before:from-white/20 before:to-transparent before:rounded-full before:opacity-50"></div>
      </div>
      <div
        className="absolute bottom-20 left-2/3 animate-bounce hidden md:block"
        style={{ animationDelay: "2.8s" }}
      >
        <div className="w-5 h-5 bg-gradient-to-tr from-amber-500 to-red-600 dark:from-amber-400 dark:to-red-500 rounded-full opacity-45 hover:opacity-65 transition-opacity shadow-sm before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/30 before:to-transparent before:rounded-full before:opacity-70"></div>
      </div>

      {/* Additional floating shapes at top off-center towards left with metallic shine - hidden on mobile */}
      <div
        className="absolute top-1/4 left-1/5 animate-bounce hidden md:block"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="w-6 h-6 bg-gradient-to-bl from-yellow-400 to-amber-600 dark:from-yellow-300 dark:to-amber-500 rounded-full opacity-55 hover:opacity-75 transition-opacity shadow-sm before:absolute before:inset-0 before:bg-gradient-to-tr before:from-white/25 before:to-transparent before:rounded-full before:opacity-55"></div>
      </div>
      <div
        className="absolute top-24 left-1/4 animate-bounce hidden md:block"
        style={{ animationDelay: "4s" }}
      >
        <div className="w-5 h-5 bg-gradient-to-r from-orange-600 to-yellow-500 dark:from-orange-500 dark:to-yellow-400 rounded-full opacity-40 hover:opacity-60 transition-opacity shadow-sm before:absolute before:inset-0 before:bg-gradient-to-tl before:from-white/35 before:to-transparent before:rounded-full before:opacity-65"></div>
      </div>

      <Container className="relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Tagline */}
          <div className="mb-8 mt-8 sm:mt-4 flex items-center justify-center">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
              <i className="ri-rocket-2-line text-orange-600 dark:text-yellow-400 text-xl font-bold rotate-45"></i>
              <span className="text-orange-600 dark:text-yellow-300 font-medium text-lg">
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
            <span className="bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 bg-clip-text text-transparent font-bold drop-shadow-sm">
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
