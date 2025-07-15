"use client";

import Button from "@/components/ui/Button";
import { Card, CardContent, CardTitle } from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { useState } from "react";

const features = [
  {
    title: "Geo-tagged Photos",
    icon: "ri-camera-fill",
    iconTwo: <span>📸</span>,
    gradient: "bg-gradient-to-br from-pink-400 to-pink-600",
    descriptionOne: "Yes, we capture timestamp, lat/long, device details",
    descriptionOneIcon: "ri-check-double-line",
    btnText: "How it looks in-app",
    btnIcon: "ri-video-on-ai-line",
    linkText: "See how Brand X uses this for food safety audits",
    linkIcon: "ri-message-2-fill",
  },
  {
    title: "PDF Reports",
    icon: "ri-file-pdf-2-fill",
    iconTwo: <span>📄</span>,
    gradient: "bg-gradient-to-br from-purple-500 to-indigo-600",
    descriptionOne: "Auto-generated after each inspection",
    descriptionOneIcon: "ri-check-double-line",
    descriptionTwo: "Custom header/footer with your logo & cover letter option",
    descriptionTwoIcon: "ri-check-double-line",
    descriptionThree:
      "Password-protected PDFs available (like bank statements)",
    descriptionThreeIcon: "ri-lock-password-fill",
  },
  {
    title: "Reminders & Alerts",
    icon: "ri-notification-fill",
    iconTwo: <span>⏰</span>,
    gradient: "bg-gradient-to-br from-red-400 to-red-600",
    descriptionOne:
      "Push + email alerts for missed inspections, low scores, etc.",
    descriptionOneIcon: "ri-check-double-line",
    descriptionTwo: "Weekly digests for managers: missed audits, top issues",
    descriptionTwoIcon: "ri-check-double-line",
    linkText: "See sample reminder email",
    linkIcon: "ri-message-2-fill",
  },
  {
    title: "Scheduling",
    icon: "ri-calendar-schedule-fill",
    iconTwo: <span>🗓️</span>,
    gradient: "bg-gradient-to-br from-purple-500 to-indigo-600",
    descriptionOne: "Recurring, fixed-date, or bulk-upload schedules",
    descriptionOneIcon: "ri-check-double-line",
    descriptionTwo: "Exclude holidays or days of the week",
    descriptionTwoIcon: "ri-check-double-line",
    descriptionThree: "Upload Excel to auto-create 100s of schedules",
    descriptionThreeIcon: "ri-inbox-2-fill",
  },
  {
    title: "Custom Branding",
    icon: "ri-brush-fill",
    iconTwo: <span>🎨</span>,
    gradient: "bg-gradient-to-br from-pink-400 to-pink-600",
    descriptionOne: "Your logo on app, reports, and emails",
    descriptionOneIcon: "ri-check-double-line",
    descriptionTwo: "Custom color theme for your org",
    descriptionTwoIcon: "ri-check-double-line",
    descriptionThree: "Add cover letters to formalize your communications",
    descriptionThreeIcon: "ri-image-2-fill",
  },
  {
    title: "Roles & Permissions",
    icon: "ri-team-fill",
    iconTwo: <span>🧑‍💼</span>,
    gradient: "bg-gradient-to-br from-blue-400 to-blue-600",
    descriptionOne: "Your logo on app, reports, and emails",
    descriptionOneIcon: "ri-check-double-line",
    descriptionTwo: "View-only, editor, admin levels supported",
    descriptionTwoIcon: "ri-check-double-line",
    descriptionThree: "SOC 2 compliant permissions model",
    descriptionThreeIcon: "ri-lock-star-fill",
  },
  {
    title: "Dashboards & Analytics",
    icon: "ri-line-chart-fill",
    iconTwo: <span>📊</span>,
    gradient: "bg-gradient-to-br from-emerald-400 to-green-600",
    descriptionOne: "Grade-based dashboards with color-coded risks",
    descriptionOneIcon: "ri-check-double-line",
    descriptionTwo: "Compare auditors, sites, and scores over time",
    descriptionTwoIcon: "ri-check-double-line",
    descriptionThree: "Export to BI tools, Sheets, or CSV instantly",
    descriptionThreeIcon: "ri-line-chart-fill",
  },
  {
    title: "Offline Capability",
    icon: "ri-wifi-off-fill",
    iconTwo: <span>📴</span>,
    gradient: "bg-gradient-to-br from-orange-400 to-red-500",
    descriptionOne: "Works with zero network—even in basements",
    descriptionOneIcon: "ri-check-double-line",
    descriptionTwo: "Auto-syncs when back online",
    descriptionTwoIcon: "ri-check-double-line",
    descriptionThree: "Designed for fast loading, minimal memory use",
    descriptionThreeIcon: "ri-rocket-2-fill",
  },
  {
    title: "Unlimited Storage",
    icon: "ri-database-fill",
    iconTwo: <span>📝</span>,
    gradient: "bg-gradient-to-br from-purple-500 to-indigo-600",
    descriptionOne:
      "Your data stays exactly where it belongs—safe, intact, and accessible forever.",
    descriptionOneIcon: "ri-check-double-line",
    descriptionTwo: "No auto-deletion, no archiving limits, no hidden cutoffs.",
    descriptionTwoIcon: "ri-check-double-line",
  },
  {
    title: "Action Tracking",
    icon: "ri-list-check",
    iconTwo: <span>🎯</span>,
    gradient: "bg-gradient-to-br from-teal-400 to-cyan-600",
    descriptionOne: "Raise actions directly from checkpoints",
    descriptionOneIcon: "ri-check-double-line",
    descriptionTwo: "Assign owners, set deadlines, add priorities",
    descriptionTwoIcon: "ri-check-double-line",
    descriptionThree:
      "Integrate with Jira, Freshdesk, or your ticketing system",
    descriptionThreeIcon: "ri-tools-fill",
  },
];

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(0);

  const handleFeatureClick = (index: number) => {
    setSelectedFeature(index);
  };

  return (
    <Section className="bg-gray-50 dark:bg-gray-800" padding="xl">
      <Container>
        <div className="text-center mb-16">
          {/* Tagline */}
          <div className="mb-8 flex items-center justify-center ">
            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 dark:from-purple-900/30 dark:via-pink-900/20 dark:to-purple-800/30 rounded-full px-4 py-2 flex items-center gap-2">
              <span className="text-lg">🙋</span>
              <span className="text-purple-600 dark:text-purple-300 font-bold">
                What You&apos;re Looking For
              </span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            We&apos;ve got the basics, the bells,
            <br />
            and the{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              brainy stuff
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            But let&apos;s start with what <em className="font-bold">you</em>{" "}
            care about.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mb-8">
          {features.map((feature, index) => {
            const isSelected = selectedFeature === index;

            return (
              <div key={index} className="relative">
                <Card
                  className={`group cursor-pointer transition-all duration-300 rounded-2xl border-0 shadow-md bg-white dark:bg-gray-700 ${
                    isSelected
                      ? "ring-2 ring-purple-500 shadow-xl scale-105"
                      : "hover:scale-105 hover:shadow-xl"
                  }`}
                  onClick={() => handleFeatureClick(index)}
                >
                  <CardContent className="flex items-center text-left p-4 h-20">
                    <div
                      className={`w-12 h-12 ${feature.gradient} rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                    >
                      <i className={`${feature.icon} text-lg text-white`}></i>
                    </div>
                    <CardTitle className={`text-sm font-medium leading-tight ${
                      isSelected 
                        ? 'text-purple-700 dark:text-purple-300 font-semibold' 
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {feature.title}
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
            <Card className="transition-all duration-300 animate-in slide-in-from-top-4 rounded-[2.5rem] border-0 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 dark:from-purple-900/30 dark:via-pink-900/20 dark:to-purple-800/30">
              <CardContent
                className="p-6 md:p-8"
                key={selectedFeature}
              >
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div
                    className={`w-16 h-16 ${features[selectedFeature].gradient} rounded-2xl flex items-center justify-center animate-in zoom-in-50 duration-300`}
                  >
                    <i
                      className={`${features[selectedFeature].icon} text-2xl text-white`}
                    ></i>
                  </div>
                  <div className="flex-1 animate-in fade-in-0 slide-in-from-left-4 duration-500">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="text-lg">
                        {features[selectedFeature].iconTwo}
                      </span>
                      {features[selectedFeature].title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <p className="text-gray-700 dark:text-gray-200 flex items-start gap-2 leading-relaxed text-sm">
                        <i
                          className={`${features[selectedFeature].descriptionOneIcon} text-black dark:text-white text-sm mt-0.5 font-bold`}
                        ></i>
                        {features[selectedFeature].descriptionOne}
                      </p>
                      {features[selectedFeature].descriptionTwo && (
                        <p className="text-gray-700 dark:text-gray-200 flex items-start gap-2 leading-relaxed text-sm">
                          <i
                            className={`${features[selectedFeature].descriptionTwoIcon} text-black dark:text-white text-sm mt-0.5 font-bold`}
                          ></i>
                          {features[selectedFeature].descriptionTwo}
                        </p>
                      )}
                      {features[selectedFeature].descriptionThree && (
                        <p className="text-gray-700 dark:text-gray-200 flex items-start gap-2 leading-relaxed text-sm">
                          <i
                            className={`${features[selectedFeature].descriptionThreeIcon} text-black dark:text-white text-sm mt-0.5 font-bold`}
                          ></i>
                          {features[selectedFeature].descriptionThree}
                        </p>
                      )}
                    </div>

                    {(features[selectedFeature].btnText ||
                      features[selectedFeature].linkText) && (
                      <div className="flex flex-col sm:flex-row gap-3 animate-in fade-in-0 slide-in-from-bottom-2 duration-700">
                        {features[selectedFeature].btnText && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-black dark:text-white hover:text-gray-900 dark:hover:text-gray-200 font-medium text-xs md:text-sm shadow-md hover:shadow-lg transition-shadow duration-200 w-full md:w-auto justify-center md:justify-start"
                          >
                            <i
                              className={`${features[selectedFeature].btnIcon} text-purple-600 text-sm`}
                            ></i>
                            <span className="truncate">{features[selectedFeature].btnText}</span>
                          </Button>
                        )}
                        {features[selectedFeature].linkText && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex items-center gap-2 px-3 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 hover:bg-purple-200 dark:hover:bg-purple-800/40 text-purple-800 dark:text-purple-200 hover:text-purple-900 dark:hover:text-purple-100 font-medium text-xs md:text-sm transition-colors duration-200 w-full md:w-auto justify-center md:justify-start"
                          >
                            <i
                              className={`${features[selectedFeature].linkIcon} text-gray-600 dark:text-gray-400 text-sm`}
                            ></i>
                            <span className="truncate">{features[selectedFeature].linkText}</span>
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
