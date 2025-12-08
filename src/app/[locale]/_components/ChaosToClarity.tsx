"use client";

import { cn } from "../../../lib/utils";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from 'next-intl';
import Image from "next/image";

type ScatterIcon = {
  icon: string;
  size: number;
  rotate: number;
  x: string;
  y: string;
  tone?: "red" | "amber" | "slate";
};

type StoryPair = {
  problem: {
    text: string;
    icon: string;
  };
  solution: {
    text: string;
    icon: string;
  };
};

const CHAOS_ICONS: ScatterIcon[] = [
  {
    icon: "/images/icons/one_drive.png",
    size: 52,
    rotate: -18,
    x: "8%",
    y: "10%",
    tone: "red",
  },
  {
    icon: "ri-file-paper-fill",
    size: 64,
    rotate: 22,
    x: "36%",
    y: "6%",
    tone: "amber",
  },
  {
    icon: "ri-file-excel-2-fill",
    size: 58,
    rotate: -8,
    x: "20%",
    y: "30%",
    tone: "red",
  },
  {
    icon: "/images/icons/whats_app.png",
    size: 48,
    rotate: 32,
    x: "4%",
    y: "60%",
    tone: "amber",
  },
  {
    icon: "/images/icons/paper.png",
    size: 42,
    rotate: -26,
    x: "46%",
    y: "48%",
    tone: "red",
  },
  {
    icon: "/images/icons/one_drive.png",
    size: 56,
    rotate: 14,
    x: "28%",
    y: "72%",
    tone: "amber",
  },
];

const STREAMLINED_ICONS: string[] = [
  "ri-dashboard-2-fill",
  "ri-bar-chart-2-fill",
  "ri-pie-chart-2-fill",
  "ri-line-chart-fill",
  "ri-check-line",
  "ri-sparkling-fill",
];

type PhoneSize = { width: number; height: number };

function PhoneUI({ onScreenSize }: { onScreenSize?: (size: PhoneSize) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = screenRef.current;
    if (!target) return;
    // Prefer native ResizeObserver when available, with proper typings
    if (typeof window !== 'undefined' && 'ResizeObserver' in window) {
      const ro = new ResizeObserver((entries: ResizeObserverEntry[]) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          if (width && height) {
            onScreenSize?.({ width: Math.round(width), height: Math.round(height) });
          }
        }
      });
      ro.observe(target);
      const r = target.getBoundingClientRect();
      if (r.width && r.height) onScreenSize?.({ width: Math.round(r.width), height: Math.round(r.height) });
      return () => ro.disconnect();
    }

    // Fallback: measure once if ResizeObserver isn't available
    const r = target.getBoundingClientRect();
    if (r.width && r.height) onScreenSize?.({ width: Math.round(r.width), height: Math.round(r.height) });
  }, [onScreenSize]);

  return (
    <div
      ref={containerRef}
      className="relative inline-block select-none"
      aria-label="Interactive phone"
    >
      {/* Phone body */}
      <div className="m-0 p-0">
        <div className="relative rounded-[34px] bg-black/90 shadow-xl border border-black/70">
          {/* Side buttons */}
          <div className="absolute -left-1 top-20 h-10 w-1.5 rounded-r bg-black/70" />
          <div className="absolute -left-1 top-36 h-16 w-1.5 rounded-r bg-black/70" />
          <div className="absolute -right-1 top-28 h-16 w-1.5 rounded-l bg-black/70" />
          {/* Bezel */}
          <div className="p-1">
            {/* Screen */}
            <div
        ref={screenRef}
        className="relative rounded-[26px] overflow-hidden bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 w-[280px] h-[560px] md:w-[320px] md:h-[640px]"
            >
              {/* Notch / Dynamic island */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/80 rounded-[16px]" />
              {/* Home indicator */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-black/20 dark:bg-white/20 rounded-full" />
              {/* Fake bottom navigation buttons */}
              <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 opacity-80">
                <div className="size-7 rounded-full bg-black/5 dark:bg-white/10 border border-border flex items-center justify-center">
                  <i className="ri-arrow-left-line text-[15px] text-neutral-700 dark:text-neutral-300" />
                </div>
                <div className="size-7 rounded-full bg-black/5 dark:bg-white/10 border border-border flex items-center justify-center">
                  <i className="ri-home-5-line text-[15px] text-neutral-700 dark:text-neutral-300" />
                </div>
                <div className="size-7 rounded-full bg-black/5 dark:bg-white/10 border border-border flex items-center justify-center">
                  <i className="ri-square-line text-[15px] text-neutral-700 dark:text-neutral-300" />
                </div>
              </div>
              {/* Actual content */}
              <div className="absolute inset-0 rounded-[26px] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-4 py-1 flex justify-between items-center text-sm">
                  <span className="font-medium text-white">9:41</span>
                  <div className="flex space-x-1 text-white/90">
                    <i className="ri-signal-wifi-line text-xs"></i>
                    <i className="ri-wifi-line text-xs"></i>
                    <i className="ri-battery-2-line text-xs"></i>
                  </div>
                </div>

                {/* App Header */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-4 py-3 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-lg font-bold">Control Dashboard</h1>
                      <p className="text-slate-300 text-xs">Live monitoring</p>
                    </div>
                    <div className="relative">
                      <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                        <i className="ri-notification-3-line text-sm"></i>
                      </div>
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-medium">3</span>
                    </div>
                  </div>
                </div>

                {/* Scrollable Content Area */}
                <div className="flex-1 bg-gray-50 overflow-y-auto" style={{ height: 'calc(100% - 170px)' }}>
                  {/* Key Metrics Grid */}
                  <div className="px-3 py-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                        <div className="text-2xl font-bold text-emerald-600">94%</div>
                        <div className="text-xs text-gray-600 font-medium">Completion</div>
                      </div>
                      <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                        <div className="text-2xl font-bold text-blue-600">142</div>
                        <div className="text-xs text-gray-600 font-medium">Active Issues</div>
                      </div>
                      <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                        <div className="text-2xl font-bold text-orange-600">2.4h</div>
                        <div className="text-xs text-gray-600 font-medium">Avg Response</div>
                      </div>
                      <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                        <div className="text-2xl font-bold text-purple-600">28</div>
                        <div className="text-xs text-gray-600 font-medium">Pending</div>
                      </div>
                    </div>
                  </div>

                  {/* Performance Chart */}
                  <div className="px-3 py-1">
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm">Performance Trend</h3>
                      <div className="h-32">
                        <svg width="100%" height="100%" viewBox="0 0 280 100" className="overflow-visible">
                          <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
                              <stop offset="100%" style={{ stopColor: '#1D4ED8', stopOpacity: 1 }} />
                            </linearGradient>
                          </defs>
                          <polyline
                            points="10,70 50,50 90,75 130,30 170,45 210,25 250,40"
                            fill="none"
                            stroke="url(#lineGradient)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {[10, 50, 90, 130, 170, 210, 250].map((x, i) => {
                            const y = [70, 50, 75, 30, 45, 25, 40][i];
                            return (
                              <circle
                                key={i}
                                cx={x}
                                cy={y}
                                r="3"
                                fill="#3B82F6"
                                className="drop-shadow-sm"
                              />
                            );
                          })}
                          <text x="10" y="90" fontSize="10" fill="#6B7280">Mon</text>
                          <text x="90" y="90" fontSize="10" fill="#6B7280">Wed</text>
                          <text x="170" y="90" fontSize="10" fill="#6B7280">Fri</text>
                          <text x="250" y="90" fontSize="10" fill="#6B7280">Sun</text>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Issue Distribution */}
                  <div className="px-3 py-1">
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm">Issue Distribution</h3>
                      <div className="h-32 flex items-center justify-center">
                        <div className="relative">
                          <svg width="120" height="120" viewBox="0 0 120 120">
                            <circle
                              cx="60"
                              cy="60"
                              r="45"
                              fill="none"
                              stroke="#EF4444"
                              strokeWidth="12"
                              strokeDasharray="28 252"
                              strokeDashoffset="0"
                              transform="rotate(-90 60 60)"
                            />
                            <circle
                              cx="60"
                              cy="60"
                              r="45"
                              fill="none"
                              stroke="#F97316"
                              strokeWidth="12"
                              strokeDasharray="67 213"
                              strokeDashoffset="-28"
                              transform="rotate(-90 60 60)"
                            />
                            <circle
                              cx="60"
                              cy="60"
                              r="45"
                              fill="none"
                              stroke="#EAB308"
                              strokeWidth="12"
                              strokeDasharray="108 172"
                              strokeDashoffset="-95"
                              transform="rotate(-90 60 60)"
                            />
                            <circle
                              cx="60"
                              cy="60"
                              r="45"
                              fill="none"
                              stroke="#22C55E"
                              strokeWidth="12"
                              strokeDasharray="137 143"
                              strokeDashoffset="-203"
                              transform="rotate(-90 60 60)"
                            />
                            <circle
                              cx="60"
                              cy="60"
                              r="25"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="px-3 py-1">
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm">Recent Activity</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <div className="flex-1">
                            <p className="text-xs text-gray-800 font-medium">Issue #1247 resolved</p>
                            <p className="text-xs text-gray-500">2 min ago</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <div className="flex-1">
                            <p className="text-xs text-gray-800 font-medium">New inspection added</p>
                            <p className="text-xs text-gray-500">8 min ago</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <div className="flex-1">
                            <p className="text-xs text-gray-800 font-medium">Report generated</p>
                            <p className="text-xs text-gray-500">15 min ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="px-3 py-2">
                    <div className="grid grid-cols-3 gap-2">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2 px-2 text-xs font-semibold flex flex-col items-center space-y-1 shadow-sm transition-colors">
                        <i className="ri-download-line text-sm"></i>
                        <span>Download Report</span>
                      </button>
                      <button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-3 px-2 text-xs font-semibold flex flex-col items-center space-y-1 shadow-sm transition-colors">
                        <i className="ri-task-line text-sm"></i>
                        <span>Follow-up</span>
                      </button>
                      <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-3 px-2 text-xs font-semibold flex flex-col items-center space-y-1 shadow-sm transition-colors">
                        <i className="ri-eye-line text-sm"></i>
                        <span>View Status</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="bg-gray-50 border-t border-gray-200 px-4 py-2">
                  <div className="flex justify-around">
                    <div className="text-center">
                      <div className="bg-gray-200 rounded-lg p-2 mb-1">
                        <i className="ri-home-line text-gray-400 text-sm"></i>
                      </div>
                      <p className="text-xs text-gray-400">Home</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-slate-800 rounded-lg p-2 mb-1">
                        <i className="ri-bar-chart-line text-white text-sm"></i>
                      </div>
                      <p className="text-xs text-slate-800 font-medium">Analytics</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-200 rounded-lg p-2 mb-1">
                        <i className="ri-clipboard-line text-gray-400 text-sm"></i>
                      </div>
                      <p className="text-xs text-gray-400">Tasks</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-200 rounded-lg p-2 mb-1">
                        <i className="ri-user-line text-gray-400 text-sm"></i>
                      </div>
                      <p className="text-xs text-gray-400">Profile</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ChaosToClarity() {
  const t = useTranslations('chaosToClarity');
  const storyPairs = t.raw('storyPairs') as StoryPair[];
  
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [showProblem, setShowProblem] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Story cycling logic
  useEffect(() => {
    if (!isInView) return;

    // Initial delay before starting
    const initialDelay = setTimeout(() => {
      setShowProblem(true);

      // Problem flows into phone
      const problemFlowDelay = setTimeout(() => {
        setShowProblem(false); // Problem disappears into phone

        // Solution pops out from phone
        const solutionDelay = setTimeout(() => {
          setShowSolution(true);

          // Solution fades away
          const solutionFadeDelay = setTimeout(() => {
            setShowSolution(false);

            // Move to next story
            setTimeout(() => {
              setCurrentStoryIndex((prev) => (prev + 1) % storyPairs.length);
            }, 700); // Wait for fade out animation
          }, 2500); // Solution display time

          return () => clearTimeout(solutionFadeDelay);
        }, 400); // Brief pause as problem enters phone

        return () => clearTimeout(solutionDelay);
      }, 2000); // Problem display + flow time

      return () => clearTimeout(problemFlowDelay);
    }, 1000); // Initial delay

    return () => clearTimeout(initialDelay);
  }, [currentStoryIndex, isInView, storyPairs.length]);

  // Build a single continuous track with chaos icons followed by clarity icons
  // Simpler: dedicated chaos and clarity strips, each repeated for seamless loop
  const REPEAT = 2;
  const chaosStrip = Array.from({ length: REPEAT }).flatMap(() => CHAOS_ICONS);
  const clarityStrip = Array.from({ length: REPEAT }).flatMap(
    () => STREAMLINED_ICONS
  );

  const chaosLen = chaosStrip.length;
  const clarityLen = clarityStrip.length;

  // Measure containers and compute an amplitude that guarantees cards stay within their container height
  const chaosContainerRef = useRef<HTMLDivElement>(null);
  const clarityContainerRef = useRef<HTMLDivElement>(null);
  const [chaosAmp, setChaosAmp] = useState<number>(0);
  const [clarityAmp, setClarityAmp] = useState<number>(0);
  const [phoneHeight, setPhoneHeight] = useState<number | null>(null);

  useEffect(() => {
    const computeAmp = (el: HTMLElement | null) => {
      if (!el) return 0;
      const h = el.clientHeight || 0;
      const isMd =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(min-width: 768px)").matches;
      // Card sizes mirror Tailwind classes: h-20 (80px) on base, md:h-24 (96px) on md+
      const cardH = isMd ? 96 : 80;
      // Smaller amplitude for multiple visible waves
      const maxAmp = Math.max(0, Math.floor((h - cardH) / 3) - 4); // Smaller waves for multiple cycles
      return maxAmp;
    };

    const recalc = () => {
      setChaosAmp(computeAmp(chaosContainerRef.current));
      setClarityAmp(computeAmp(clarityContainerRef.current));
    };

    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [phoneHeight]);

  const valley = (i: number, L: number, depth: number) => {
    if (L <= 1) return 0;
    const t = i / (L - 1); // 0..1
    // Create multiple smaller waves that flow from edges toward center
    const numWaves = 2; // Number of wave cycles visible at once
    const waveFrequency = numWaves * Math.PI * 2; // Multiple complete waves

    // Base wave pattern - multiple small waves
    const multipleWaves = Math.sin(t * waveFrequency) * depth * 0.4;

    // Flow convergence: waves flow from edges (0 and 1) toward center (0.5)
    const distanceFromCenter = Math.abs(t - 0.5); // 0 at center, 0.5 at edges
    const convergenceFlow =
      Math.sin(distanceFromCenter * Math.PI) * depth * 0.6;

    return multipleWaves + convergenceFlow;
  };

  const renderChaosStrip = (keyPrefix: string, ampParam: number) => (
    <div className="flex w-max items-center gap-9 animate-marquee-right">
      <div className="flex items-center gap-9">
        {chaosStrip.map((item, i) => {
          const offset = valley(i, chaosLen, ampParam); // Apply flowing curve
          const tilt = Math.sin((i / chaosLen) * Math.PI * 6) * 4; // More frequent, smaller rotations
          const tone =
            item.tone === "red"
              ? "text-red-500 drop-shadow-[0_2px_8px_rgba(239,68,68,0.3)]"
              : "text-amber-500 drop-shadow-[0_2px_8px_rgba(245,158,11,0.3)]";
          return (
            <div
              key={`${keyPrefix}-s1-${i}`}
              className="h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-white/70 dark:bg-white/10 border border-border flex items-center justify-center shadow-sm backdrop-blur-sm transition-transform duration-300"
              style={{
                transform: `translateY(${offset}px) rotate(${tilt}deg)`,
                filter: `brightness(${1 + Math.abs(offset) / (ampParam * 2)})`, // Brighten cards at flow peaks
              }}
            >
              {item.icon.startsWith('/') ? (
                <Image
                  src={item.icon}
                  alt={(item.icon.split('/').pop()?.replace(/\.[^/.]+$/, "") || "icon").replace(/[_-]/g, " ")}
                  width={72}
                  height={72}
                  className="w-16 h-16 md:w-18 md:h-18 object-contain"
                  style={{
                    filter: item.tone === "red" 
                      ? "drop-shadow(0 2px 8px rgba(239,68,68,0.3))" 
                      : "drop-shadow(0 2px 8px rgba(245,158,11,0.3))"
                  }}
                />
              ) : (
                <i
                  className={cn("text-4xl md:text-5xl", item.icon, tone)}
                  aria-hidden="true"
                />
              )}
              <span className="sr-only">
                {item.icon.startsWith('/') ? item.icon.split('/').pop()?.replace(/\.[^/.]+$/, "") : item.icon.replace(/ri-|-/g, " ")}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-9" aria-hidden="true">
        {chaosStrip.map((item, i) => {
          const offset = valley(i, chaosLen, ampParam); // Apply flowing curve
          const tilt = Math.sin((i / chaosLen) * Math.PI * 6) * 4; // More frequent, smaller rotations
          const tone =
            item.tone === "red"
              ? "text-red-500 drop-shadow-[0_2px_8px_rgba(239,68,68,0.3)]"
              : "text-amber-500 drop-shadow-[0_2px_8px_rgba(245,158,11,0.3)]";
          return (
            <div
              key={`${keyPrefix}-s2-${i}`}
              className="h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-white/70 dark:bg-white/10 border border-border flex items-center justify-center shadow-sm backdrop-blur-sm transition-transform duration-300"
              style={{
                transform: `translateY(${offset}px) rotate(${tilt}deg)`,
                filter: `brightness(${1 + Math.abs(offset) / (ampParam * 2)})`, // Brighten cards at flow peaks
              }}
            >
              {item.icon.startsWith('/') ? (
                <Image
                  src={item.icon}
                  alt={(item.icon.split('/').pop()?.replace(/\.[^/.]+$/, "") || "icon").replace(/[_-]/g, " ")}
                  width={72}
                  height={72}
                  className="w-16 h-16 md:w-18 md:h-18 object-contain"
                  style={{
                    filter: item.tone === "red" 
                      ? "drop-shadow(0 2px 8px rgba(239,68,68,0.3))" 
                      : "drop-shadow(0 2px 8px rgba(245,158,11,0.3))"
                  }}
                />
              ) : (
                <i
                  className={cn("text-4xl md:text-5xl", item.icon, tone)}
                  aria-hidden="true"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderClarityStrip = (keyPrefix: string, ampParam: number) => (
    <div className="flex w-max items-center gap-9 animate-marquee-right">
      <div className="flex items-center gap-9">
        {clarityStrip.map((icon, i) => {
          const offset = valley(i, clarityLen, ampParam); // Apply flowing curve (synchronized)
          const tilt = Math.sin((i / clarityLen) * Math.PI * 6) * 3; // More frequent, gentler rotations for organized output
          return (
            <div
              key={`${keyPrefix}-s1-${i}`}
              className="h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-white/70 dark:bg-white/10 border border-border flex items-center justify-center shadow-sm backdrop-blur-sm transition-transform duration-300"
              style={{
                transform: `translateY(${offset}px) rotate(${tilt}deg)`,
                filter: `brightness(${1 + Math.abs(offset) / (ampParam * 2)})`, // Brighten cards at flow peaks
              }}
            >
              <i
                className={cn(
                  "text-4xl md:text-5xl text-black dark:text-gray-800",
                  icon
                )}
                aria-hidden="true"
              />
              <span className="sr-only">{icon.replace(/ri-|-/g, " ")}</span>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-9" aria-hidden="true">
        {clarityStrip.map((icon, i) => {
          const offset = valley(i, clarityLen, ampParam); // Apply flowing curve (synchronized)
          const tilt = Math.sin((i / clarityLen) * Math.PI * 6) * 3; // More frequent, gentler rotations for organized output
          return (
            <div
              key={`${keyPrefix}-s2-${i}`}
              className="h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-white/70 dark:bg-white/10 border border-border flex items-center justify-center shadow-sm backdrop-blur-sm transition-transform duration-300"
              style={{
                transform: `translateY(${offset}px) rotate(${tilt}deg)`,
                filter: `brightness(${1 + Math.abs(offset) / (ampParam * 2)})`, // Brighten cards at flow peaks
              }}
            >
              <i
                className={cn(
                  "text-4xl md:text-5xl text-black dark:text-gray-800",
                  icon
                )}
                aria-hidden="true"
              />
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-0 md:py-0 bg-[#FFFFEB]"
      dir="ltr"
    >
      {/* Replace scattered chaos with synchronized strip system */}

      <div className="full-bleed relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8 pt-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-3 text-base md:text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-0 relative">
          {/* Problem Message Box - Left Side - Animates INTO phone */}
          <div className="hidden md:block absolute left-4 md:left-8 lg:left-12 top-[25%] -translate-y-1/2 z-20 w-[280px] md:w-[320px] pointer-events-none">
            <div
              className={cn(
                "transition-all duration-1000 ease-in-out",
                showProblem
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-[400px] scale-90"
              )}
            >
              <div className="bg-gradient-to-br from-red-50 to-amber-50 dark:from-red-950/30 dark:to-amber-950/30 border-2 border-red-300 dark:border-red-700 rounded-2xl p-4 md:p-5 shadow-2xl backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-red-500/20 dark:bg-red-500/30 flex items-center justify-center">
                    <i
                      className={cn(
                        "text-xl md:text-2xl text-red-600 dark:text-red-400",
                        storyPairs[currentStoryIndex].problem.icon
                      )}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-red-700 dark:text-red-400 uppercase tracking-wide mb-1">
                      Problem
                    </div>
                    <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 leading-snug">
                      {storyPairs[currentStoryIndex].problem.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Message Box - Right Side - Animates OUT OF phone */}
          <div className="hidden md:block absolute right-4 md:right-8 lg:right-12 top-[25%] -translate-y-1/2 z-20 w-[280px] md:w-[320px] pointer-events-none">
            <div
              className={cn(
                "transition-all duration-1000 ease-out",
                showSolution
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 -translate-x-[400px] scale-90"
              )}
            >
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 border-2 border-green-300 dark:border-green-700 rounded-2xl p-4 md:p-5 shadow-2xl backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-green-500/20 dark:bg-green-500/30 flex items-center justify-center">
                    <i
                      className={cn(
                        "text-xl md:text-2xl text-green-600 dark:text-green-400",
                        storyPairs[currentStoryIndex].solution.icon
                      )}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide mb-1">
                      Solution
                    </div>
                    <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 leading-snug">
                      {storyPairs[currentStoryIndex].solution.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transformation Arrow - Center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none hidden lg:block">
            <div
              className={cn(
                "transition-all duration-1000 ease-out",
                showProblem && showSolution
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90"
              )}
            >
              <svg
                width="120"
                height="60"
                viewBox="0 0 120 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-lg"
              >
                <defs>
                  <linearGradient
                    id="arrowGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
                <path
                  d="M10 30 L100 30 M90 20 L100 30 L90 40"
                  stroke="url(#arrowGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Left: chaos strip flowing INTO the phone */}
          <div className="hidden md:flex lg:order-1 order-1 self-stretch h-full items-stretch flex-1 min-w-0 relative">
            {/* Flowing gradient overlay to show flow direction */}
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#FFFFEB] to-transparent z-10 pointer-events-none"></div>
            <div
              ref={chaosContainerRef}
              className="w-full overflow-hidden py-6 h-[300px] sm:h-[340px] md:h-[380px] flex items-center relative"
              style={phoneHeight ? { height: `${phoneHeight}px` } : undefined}
            >
              {renderChaosStrip("left", chaosAmp)}
            </div>
          </div>

          {/* Center: phone mock with processing visualization */}
          <div className="lg:order-2 order-3 m-0 p-0 w-fit flex-none shrink-0 self-center relative z-30">
            {/* Add subtle glow effect to show data processing */}
            <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 to-transparent rounded-[40px] animate-pulse"></div>
            <PhoneUI onScreenSize={(s) => setPhoneHeight(s.height)} />
          </div>

          {/* Right: clarity strip flowing OUT of the phone */}
          <div className="hidden md:flex lg:order-3 order-2 self-stretch h-full items-stretch flex-1 min-w-0 relative">
            {/* Flowing gradient overlay to show flow direction */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#FFFFEB] to-transparent z-10 pointer-events-none"></div>
            <div
              ref={clarityContainerRef}
              className="w-full overflow-hidden py-6 h-[280px] sm:h-[320px] md:h-[360px] flex items-center relative"
              style={phoneHeight ? { height: `${phoneHeight}px` } : undefined}
            >
              {renderClarityStrip("right", clarityAmp)}
            </div>
          </div>
        </div>

        {/* Story Progress Indicator */}
        {/* <div className="flex justify-center items-center gap-2 py-8">
          {storyPairs.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentStoryIndex(index);
                setShowProblem(false);
                setShowSolution(false);
              }}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === currentStoryIndex
                  ? "w-8 bg-blue-600"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to story ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
