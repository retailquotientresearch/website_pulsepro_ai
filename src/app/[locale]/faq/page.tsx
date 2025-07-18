"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Image from "next/image";
import { useState } from "react";

export default function FAQPage() {
  const [expandedFAQs, setExpandedFAQs] = useState<Set<string>>(new Set());

  const toggleFAQ = (id: string) => {
    const newExpandedFAQs = new Set(expandedFAQs);
    if (newExpandedFAQs.has(id)) {
      newExpandedFAQs.delete(id);
    } else {
      newExpandedFAQs.add(id);
    }
    setExpandedFAQs(newExpandedFAQs);
  };

  const faqSections = [
    {
      id: "general",
      title: "EHS and Compliance Management Software - General",
      questions: [
        {
          id: "what-is-ehs",
          question: "What is EHS software?",
          answer:
            "EHS (Environment, Health, and Safety) software is a digital platform designed to help organizations manage their environmental, health, and safety compliance requirements, track incidents, manage audits, and ensure regulatory compliance across all operations.",
        },
        {
          id: "why-invest-ehs",
          question:
            "Why should I invest in EHS & compliance management software?",
          answer:
            "Investing in EHS software helps reduce compliance risks, streamline audit processes, improve workplace safety, ensure regulatory adherence, and ultimately protect your organization from costly fines and incidents while maintaining a safe work environment.",
        },
      ],
    },
    {
      id: "pulse-software",
      title: "Pulse Software",
      questions: [
        {
          id: "pulse-better",
          question:
            "How is Pulse better than other EHS software in the market?",
          answer:
            "Pulse focuses specifically on inspections and audits, offering specialized features like geo-tagged photos, customizable checklists, and seamless integration capabilities. Our focus on inspection excellence means you get better accuracy, faster deployment, and more intuitive workflows.",
        },
        {
          id: "pulse-offerings",
          question: "What are Pulse's biggest offerings?",
          answer:
            "Pulse offers comprehensive inspection management, customizable audit templates, real-time compliance tracking, automated reporting, mobile-first design, and seamless integration with existing systems. Our core strength lies in making inspections simple, accurate, and actionable.",
        },
        {
          id: "data-protection",
          question: "Does Pulse protect my data?",
          answer:
            "Yes, Pulse employs enterprise-grade security measures including end-to-end encryption, secure data centers, regular security audits, and compliance with industry standards like SOC 2 and GDPR to ensure your data remains protected at all times.",
        },
      ],
    },
    {
      id: "pulse-support",
      title: "Pulse Support",
      questions: [
        {
          id: "employee-training",
          question: "Will Pulse provide training to my employees?",
          answer:
            "Yes, Pulse provides comprehensive training programs including onboarding sessions, user guides, video tutorials, and ongoing support to ensure your team can effectively use the platform and maximize its benefits.",
        },
      ],
    },
    {
      id: "pulse-app",
      title: "Pulse App Specific",
      questions: [
        {
          id: "mobile-app",
          question: "Does Pulse mobile application exist?",
          answer:
            "Yes, Pulse offers native mobile applications for both iOS and Android platforms, allowing your team to conduct inspections, capture photos, and submit reports directly from their mobile devices, even when offline.",
        },
      ],
    },
    {
      id: "technical",
      title: "Technical",
      questions: [
        {
          id: "software-integration",
          question: "How do I integrate my current software with Pulse?",
          answer:
            "Pulse offers robust API integration capabilities and pre-built connectors for popular business systems. Our technical team provides dedicated support to ensure seamless integration with your existing workflow and data systems.",
        },
      ],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 relative overflow-hidden">
        {/* Enhanced gradient background matching the image */}
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-0 lg:mb-6 leading-tight">
                Frequently Asked Questions
              </h1>
            </div>

            {/* Right side - FAQ Illustration */}
            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <Image
                  src="/images/faq-illustration.png"
                  alt="FAQ Illustration - Two characters with question mark and exclamation mark"
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

      {/* FAQ Content */}
      <Section className="py-12 sm:py-16 bg-white dark:bg-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            {faqSections.map((section) => (
              <div key={section.id} className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700">
                  {section.title}
                </h2>

                <div className="space-y-3 sm:space-y-4">
                  {section.questions.map((faq) => {
                    const isExpanded = expandedFAQs.has(faq.id);
                    return (
                      <div
                        key={faq.id}
                        className="bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleFAQ(faq.id)}
                          className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base md:text-lg leading-tight">
                              {faq.question}
                            </h3>
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                                <span className="text-purple-600 dark:text-purple-400 text-lg sm:text-xl font-bold transition-transform duration-300">
                                  {isExpanded ? "−" : "+"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </button>

                        <div
                          className="overflow-hidden transition-all duration-300 ease-in-out"
                          style={{
                            maxHeight: isExpanded ? "300px" : "0px",
                          }}
                        >
                          <div className="px-4 sm:px-6 py-4 sm:py-5 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
