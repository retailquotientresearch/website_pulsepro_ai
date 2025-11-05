"use client";

import React, { useState } from "react";
import { EXTERNAL_LINKS } from "@/config/links";
import { useTranslations } from "next-intl";

type UseCase = {
  key: string;
  label: string;
  title: string;
  description: string;
  image: string; // public/ path
};

// Note: Removed unused Chip helper

export default function UseCases() {
  const t = useTranslations("useCases");
  const useCaseItems = t.raw("useCaseItems") as UseCase[];

  const [active, setActive] = useState<string>("food-beverage");
  const current = useCaseItems.find((i) => i.key === active) ?? useCaseItems[0];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#FDF6E9]">
      {/* Full-bleed wrapper */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="w-full rounded-[36px] md:rounded-[48px] lg:rounded-[64px] overflow-hidden bg-[#111111] text-white px-4 sm:px-8 lg:px-16 py-12 md:py-16 lg:py-20 min-h-[60vh] sm:min-h-[68vh] lg:h-[80vh] flex items-center">
          <div className="max-w-[1200px] mx-auto h-full w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center h-full">
              {/* Left column: Title + Chips */}
              <div className="lg:col-span-6 xl:col-span-7">
                {/* <div className="max-w-3xl">
                  <h2 className="text-[42px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.05] font-serif tracking-tight [font-family:var(--font-fraunces)] text-center">
                    {t("title.part1")}
                    <br className="hidden sm:block" />{" "}
                    <span className="text-[#f0d7ff]">
                      {t("title.highlight")}
                    </span>
                  </h2>
                </div> */}
                <div className="mt-6"></div>
                <div
                  aria-label="Use case tabs"
                  role="tablist"
                  className="flex flex-wrap gap-x-3 gap-y-3 justify-center"
                >
                  {useCaseItems.map((item) => (
                    <button
                      key={item.key}
                      role="tab"
                      aria-selected={item.key === active}
                      onClick={() => setActive(item.key)}
                      className={[
                        "px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border-2 sm:border-[3px] text-sm md:text-base transition-all select-none",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f0d7ff]",
                        item.key === active
                          ? "bg-[#f0d7ff] text-black border-[#f0d7ff] -rotate-3 translate-y-[1px] shadow-[0_4px_0_0_rgba(0,0,0,0.25)]"
                          : "bg-transparent text-white/90 border-[#F0EEDA]/70 hover:border-white hover:bg-white/[0.04]",
                      ].join(" ")}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right content column – compact like reference (illustration + copy + CTA) */}
              <div
                className="lg:col-span-6 xl:col-span-5 justify-self-center self-center w-full max-w-[520px] text-center"
                role="tabpanel"
                aria-live="polite"
              >
                <div className="flex flex-col gap-5 md:gap-6">
                  {/* Aesthetic text card replacing image */}
                  <div className="mx-auto group">
                    <div className="w-[300px] h-[180px] md:w-[360px] md:h-[210px] rounded-3xl border-2 border-white/20 bg-gradient-to-br from-[#f0d7ff] via-[#f6e4ff] to-[#fbf0ff] p-6 shadow-[0_20px_70px_rgba(240,215,255,0.3)] relative overflow-hidden transition-all duration-700 group-hover:scale-105 group-hover:shadow-[0_30px_90px_rgba(240,215,255,0.4)]">
                      
                      {/* Animated background elements */}
                      <div className="absolute inset-0">
                        {/* Floating geometric shapes */}
                        <div className="absolute top-6 left-6 w-12 h-12 border-2 border-[#111111]/10 rounded-full animate-pulse"></div>
                        <div className="absolute top-4 right-8 w-6 h-6 bg-[#111111]/5 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                        <div className="absolute bottom-8 left-10 w-8 h-8 border border-[#111111]/8 rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
                        <div className="absolute bottom-6 right-6 w-16 h-3 bg-[#111111]/5 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                        
                        {/* Flowing curves */}
                        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 300 180">
                          <path 
                            d="M 20 40 Q 80 20 140 60 T 280 50" 
                            stroke="url(#gradient1)" 
                            strokeWidth="3" 
                            fill="none"
                            strokeLinecap="round"
                            className="animate-pulse"
                          />
                          <path 
                            d="M 40 120 Q 120 100 200 140 T 320 130" 
                            stroke="url(#gradient2)" 
                            strokeWidth="2" 
                            fill="none"
                            strokeLinecap="round"
                            className="animate-pulse"
                            style={{animationDelay: '0.8s'}}
                          />
                          <defs>
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#111111" stopOpacity="0.3"/>
                              <stop offset="100%" stopColor="#111111" stopOpacity="0.1"/>
                            </linearGradient>
                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#111111" stopOpacity="0.2"/>
                              <stop offset="100%" stopColor="#111111" stopOpacity="0.05"/>
                            </linearGradient>
                          </defs>
                        </svg>
                        
                        {/* Gradient overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20"></div>
                      </div>
                      
                      {/* Main content */}
                      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                        <div className="space-y-2">
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-tight tracking-tight">
                            Built for every
                          </h3>
                          <div className="flex items-center justify-center space-x-2">
                            <span className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">industry.</span>
                            <div className="w-2 h-2 bg-[#111111] rounded-full animate-pulse"></div>
                          </div>
                          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-[#111111]/70 mt-3 italic">
                            Tailored to yours.
                          </p>
                        </div>
                        
                        {/* Elegant bottom accent */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                          <div className="flex space-x-2">
                            <div className="w-8 h-1 bg-gradient-to-r from-transparent via-[#111111]/30 to-transparent rounded-full"></div>
                            <div className="w-3 h-1 bg-[#111111]/20 rounded-full"></div>
                            <div className="w-8 h-1 bg-gradient-to-r from-transparent via-[#111111]/30 to-transparent rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Subtle inner glow */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                  </div>

                  {/* <h3 className="text-[24px] sm:text-[28px] md:text-[34px] font-semibold font-sans text-center">
                    {current.title}
                  </h3> */}
                  <p className="text-white/90 text-base md:text-lg leading-7 max-w-xl mx-auto">
                    {current.description}
                  </p>
                  <div className="mt-2">
                    <a
                      href={EXTERNAL_LINKS.register}
                      target="_blank"
                      className="inline-flex items-center rounded-xl bg-[#f0d7ff] text-black font-medium px-5 py-3 text-base md:text-lg hover:brightness-95 transition-colors mx-auto"
                    >
                      {t("getStarted")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
