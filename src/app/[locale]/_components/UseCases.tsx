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
                        "px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border-2 sm:border-[3px] text-sm transition-all select-none",
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
                  {/* small illustrative card */}
                  <div className="mx-auto">
                    <div className="w-[300px] h-[180px] md:w-[360px] md:h-[210px] rounded-2xl border border-white/15 bg-gradient-to-br from-[#f0d7ff] via-[#f6e4ff] to-[#fbf0ff] p-4 shadow-[inset_0_0_40px_rgba(0,0,0,0.08)]">
                      <svg
                        viewBox="0 0 320 180"
                        className="w-full h-full"
                        aria-hidden="true"
                      >
                        <rect
                          x="14"
                          y="18"
                          width="292"
                          height="144"
                          rx="18"
                          fill="#111111"
                          opacity="0.1"
                        />
                        <rect
                          x="40"
                          y="44"
                          width="100"
                          height="16"
                          rx="8"
                          fill="#111111"
                          opacity="0.2"
                        />
                        <rect
                          x="40"
                          y="70"
                          width="180"
                          height="14"
                          rx="7"
                          fill="#111111"
                          opacity="0.15"
                        />
                        <rect
                          x="40"
                          y="92"
                          width="120"
                          height="14"
                          rx="7"
                          fill="#111111"
                          opacity="0.15"
                        />
                        <path
                          d="M48 130 C 88 110, 120 160, 170 132 S 260 120, 282 138"
                          stroke="#f0d7ff"
                          strokeWidth="6"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-[24px] sm:text-[28px] md:text-[34px] font-semibold font-sans text-center">
                    {current.title}
                  </h3>
                  <p className="text-white/90 text-base sm:text-lg md:text-xl leading-7 max-w-xl mx-auto">
                    {current.description}
                  </p>
                  <div className="mt-2">
                    <a
                      href={EXTERNAL_LINKS.register}
                      target="_blank"
                      className="inline-flex items-center rounded-xl bg-[#f0d7ff] text-black font-medium px-5 py-3 hover:brightness-95 transition-colors mx-auto"
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
