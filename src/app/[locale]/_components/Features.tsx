"use client";

import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";
import { Card, CardContent, CardTitle } from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { useState } from "react";

const featureConfig = [
  {
    icon: "ri-camera-fill",
    iconTwo: <span>📸</span>,
    gradient: "bg-gradient-to-tr from-gray-400 to-gray-700",
    descriptionOneIcon: "ri-check-double-line",
    btnIcon: "ri-video-on-ai-line",
    linkIcon: "ri-message-2-fill",
  },
  {
    icon: "ri-file-pdf-2-fill",
    iconTwo: <span>📄</span>,
    gradient: "bg-gradient-to-bl from-black via-gray-600 to-gray-800",
    descriptionOneIcon: "ri-check-double-line",
    descriptionTwoIcon: "ri-check-double-line",
    descriptionThreeIcon: "ri-lock-password-fill",
  },
  {
    icon: "ri-notification-fill",
    iconTwo: <span>⏰</span>,
    gradient: "bg-gradient-to-r from-gray-500 to-gray-900",
    descriptionOneIcon: "ri-check-double-line",
    descriptionTwoIcon: "ri-check-double-line",
    linkIcon: "ri-message-2-fill",
  },
  {
    icon: "ri-calendar-schedule-fill",
    iconTwo: <span>🗓️</span>,
    gradient: "bg-gradient-to-tl from-slate-800 via-gray-500 to-gray-300",
    descriptionOneIcon: "ri-check-double-line",
    descriptionTwoIcon: "ri-check-double-line",
    descriptionThreeIcon: "ri-inbox-2-fill",
  },
  {
    icon: "ri-brush-fill",
    iconTwo: <span>🎨</span>,
    gradient: "bg-gradient-to-b from-gray-600 to-black",
    descriptionOneIcon: "ri-check-double-line",
    descriptionTwoIcon: "ri-check-double-line",
    descriptionThreeIcon: "ri-image-2-fill",
  },
  {
    icon: "ri-team-fill",
    iconTwo: <span>🧑‍💼</span>,
    gradient: "bg-gradient-to-br from-gray-300 via-gray-600 to-gray-800",
    descriptionOneIcon: "ri-check-double-line",
    descriptionTwoIcon: "ri-check-double-line",
    descriptionThreeIcon: "ri-lock-star-fill",
  },
  {
    icon: "ri-line-chart-fill",
    iconTwo: <span>📊</span>,
    gradient: "bg-gradient-to-t from-gray-800 to-gray-400",
    descriptionOneIcon: "ri-check-double-line",
    descriptionTwoIcon: "ri-check-double-line",
    descriptionThreeIcon: "ri-line-chart-fill",
  },
  {
    icon: "ri-wifi-off-fill",
    iconTwo: <span>📴</span>,
    gradient: "bg-gradient-to-br from-slate-500 via-gray-700 to-black",
    descriptionOneIcon: "ri-check-double-line",
    descriptionTwoIcon: "ri-check-double-line",
    descriptionThreeIcon: "ri-rocket-2-fill",
  },
  {
    icon: "ri-database-fill",
    iconTwo: <span>📝</span>,
    gradient: "bg-gradient-to-l from-gray-900 to-gray-500",
    descriptionOneIcon: "ri-check-double-line",
    descriptionTwoIcon: "ri-check-double-line",
  },
  {
    icon: "ri-list-check",
    iconTwo: <span>🎯</span>,
    gradient: "bg-gradient-to-tr from-gray-700 via-gray-400 to-gray-600",
    descriptionOneIcon: "ri-check-double-line",
    descriptionTwoIcon: "ri-check-double-line",
    descriptionThreeIcon: "ri-tools-fill",
  },
];

export default function Features() {
  const t = useTranslations("features");
  const [selectedFeature, setSelectedFeature] = useState<number | null>(0);

  const handleFeatureClick = (index: number) => {
    setSelectedFeature(index);
  };

  return (
    <Section className="bg-gradient-to-br from-gray-200 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900" padding="xl">
      <Container>
        <div className="text-center mb-16">
          {/* Tagline */}
          <div className="mb-8 flex items-center justify-center ">
            <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900/20 dark:via-gray-800 dark:to-gray-700/20 rounded-full px-4 py-2 flex items-center gap-2 border border-gray-200 dark:border-gray-600">
              <span className="text-lg">🙋</span>
              <span className="text-gray-700 dark:text-gray-300 font-bold">
                {t("tagline")}
              </span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("title.part1")}
            <br />
            {t("title.part2")}{" "}
            <span className="bg-gradient-to-r from-gray-800 via-gray-400 to-black dark:from-slate-400 dark:via-slate-200 dark:to-slate-600 bg-clip-text text-transparent font-extrabold drop-shadow-sm">
              {t("title.highlight")}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("subtitle.part1")}{" "}
            <em className="font-bold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-slate-300 dark:to-slate-500 bg-clip-text text-transparent">{t("subtitle.highlight")}</em>{" "}
            {t("subtitle.part2")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mb-8">
          {featureConfig.map((feature, index) => {
            const isSelected = selectedFeature === index;

            return (
              <div key={index} className="relative">
                <Card
                  className={`group cursor-pointer transition-all duration-300 rounded-2xl border-0 shadow-md bg-white dark:bg-gray-800 ${
                    isSelected
                      ? "ring-2 ring-gray-600 dark:ring-gray-400 shadow-xl scale-105"
                      : "transform hover:rotate-2 hover:scale-105 hover:shadow-2xl transition-all duration-300 origin-bottom-right"
                  }`}
                  onClick={() => handleFeatureClick(index)}
                >
                  <CardContent className="flex items-center text-left p-4 h-20">
                    <div
                      className={`w-12 h-12 ${feature.gradient} rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                    >
                      <i className={`${feature.icon} text-lg text-white`}></i>
                    </div>
                    <CardTitle
                      className={`text-sm font-medium leading-tight ${
                        isSelected
                          ? "text-gray-800 dark:text-gray-200 font-semibold"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      {t(`items.${index}.title`)}
                    </CardTitle>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Show detailed card after the last card in the row */}
        {selectedFeature !== null && (
          <div className="w-full mt-8 z-10">
            <Card className="transition-all duration-300 animate-in slide-in-from-top-4 rounded-[2.5rem] border-0 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 border border-gray-200 dark:border-gray-600 shadow-lg">
              <CardContent className="p-6 md:p-8" key={selectedFeature}>
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div
                    className={`w-16 h-16 ${featureConfig[selectedFeature].gradient} rounded-2xl flex items-center justify-center animate-in zoom-in-50 duration-300`}
                  >
                    <i
                      className={`${featureConfig[selectedFeature].icon} text-2xl text-white`}
                    ></i>
                  </div>
                  <div className="flex-1 animate-in fade-in-0 slide-in-from-left-4 duration-500">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="text-lg">
                        {featureConfig[selectedFeature].iconTwo}
                      </span>
                      {t(`items.${selectedFeature}.title`)}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <p className="text-gray-700 dark:text-gray-200 flex items-start gap-2 leading-relaxed text-sm">
                        <i
                          className={`${featureConfig[selectedFeature].descriptionOneIcon} text-gray-600 dark:text-gray-400 text-sm mt-0.5 font-bold`}
                        ></i>
                        {t(`items.${selectedFeature}.descriptionOne`)}
                      </p>
                      {t.has(`items.${selectedFeature}.descriptionTwo`) && (
                        <p className="text-gray-700 dark:text-gray-200 flex items-start gap-2 leading-relaxed text-sm">
                          <i
                            className={`${featureConfig[selectedFeature].descriptionTwoIcon} text-gray-600 dark:text-gray-400 text-sm mt-0.5 font-bold`}
                          ></i>
                          {t(`items.${selectedFeature}.descriptionTwo`)}
                        </p>
                      )}
                      {t.has(`items.${selectedFeature}.descriptionThree`) && (
                        <p className="text-gray-700 dark:text-gray-200 flex items-start gap-2 leading-relaxed text-sm">
                          <i
                            className={`${featureConfig[selectedFeature].descriptionThreeIcon} text-gray-600 dark:text-gray-400 text-sm mt-0.5 font-bold`}
                          ></i>
                          {t(`items.${selectedFeature}.descriptionThree`)}
                        </p>
                      )}
                    </div>

                    {(t.has(`items.${selectedFeature}.btnText`) ||
                      t.has(`items.${selectedFeature}.linkText`)) && (
                      <div className="flex flex-col sm:flex-row gap-3 animate-in fade-in-0 slide-in-from-bottom-2 duration-700">
                        {t.has(`items.${selectedFeature}.btnText`) && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 font-medium text-xs md:text-sm shadow-md hover:shadow-lg transition-shadow duration-200 w-full md:w-auto justify-center md:justify-start"
                          >
                            <i
                              className={`${featureConfig[selectedFeature].btnIcon} text-gray-600 dark:text-gray-400 text-sm`}
                            ></i>
                            <span className="truncate">
                              {t(`items.${selectedFeature}.btnText`)}
                            </span>
                          </Button>
                        )}
                        {t.has(`items.${selectedFeature}.linkText`) && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800/30 hover:bg-gray-200 dark:hover:bg-gray-700/40 text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 font-medium text-xs md:text-sm transition-colors duration-200 w-full md:w-auto justify-center md:justify-start"
                          >
                            <i
                              className={`${featureConfig[selectedFeature].linkIcon} text-gray-600 dark:text-gray-400 text-sm`}
                            ></i>
                            <span className="truncate">
                              {t(`items.${selectedFeature}.linkText`)}
                            </span>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </Container>
    </Section>
  );
}
