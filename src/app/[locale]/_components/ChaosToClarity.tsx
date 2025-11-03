"use client";

import { cn } from "../../../lib/utils";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from 'next-intl';

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
    icon: "ri-apps-2-fill",
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
    icon: "ri-file-text-fill",
    size: 48,
    rotate: 32,
    x: "4%",
    y: "60%",
    tone: "amber",
  },
  {
    icon: "ri-database-2-fill",
    size: 42,
    rotate: -26,
    x: "46%",
    y: "48%",
    tone: "red",
  },
  {
    icon: "ri-mail-fill",
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

type Question = { id: number; text: string };

function PieChart({ segments, label }: { segments: { value: number; color: string }[]; label?: string }) {
  const total = segments.reduce((a, b) => a + b.value, 0) || 1;
  let acc = 0;
  const stops = segments
    .map((s) => {
      const start = (acc / total) * 100;
      acc += s.value;
      const end = (acc / total) * 100;
      return `${s.color} ${start}% ${end}%`;
    })
    .join(", ");
  const gradient = `conic-gradient(${stops})`;
  const primaryPct = Math.round((segments[0]?.value ?? 0) / total * 100);
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-3">
      <div className="relative">
        <div
          className="size-40 md:size-44 rounded-full shadow-sm"
          style={{ backgroundImage: gradient }}
          aria-label="Donut chart"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-24 md:size-28 rounded-full bg-white dark:bg-neutral-900 shadow-inner border border-border/50 flex items-center justify-center">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold">{primaryPct}%</div>
              <div className="text-[10px] md:text-xs text-muted-foreground">{label ?? "Primary"}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 flex-wrap justify-center">
        {segments.map((s, i) => (
          <div key={i} className="flex items-center gap-2 text-[11px] md:text-xs">
            <span className="inline-block size-2.5 rounded-sm" style={{ backgroundColor: s.color }} />
            <span className="text-muted-foreground">{Math.round((s.value / total) * 100)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Sparkline({ points }: { points: number[] }) {
  const max = Math.max(1, ...points);
  return (
    <div className="h-12 w-full flex items-end gap-1">
      {points.map((p, i) => (
        <div
          key={i}
          className="flex-1 bg-gradient-to-t from-blue-500/50 to-blue-400/70 rounded-t"
          style={{ height: `${Math.max(3, (p / max) * 100)}%` }}
        />
      ))}
    </div>
  );
}

function InsightList() {
  return (
  <div className="min-h-full w-full p-3 grid grid-cols-2 gap-3">
      <div className="rounded-lg bg-white/70 dark:bg-white/10 border border-border p-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-blue-500/15 text-blue-600 flex items-center justify-center">
            <i className="ri-clipboard-check-line text-base" />
          </div>
          <div className="text-[10px] text-muted-foreground">Inspections Completed</div>
        </div>
        <div className="mt-1 text-lg font-semibold">1,128</div>
        <div className="mt-2 h-1.5 w-full bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400" style={{ width: '76%' }} />
        </div>
      </div>
  <div className="rounded-lg bg-white/70 dark:bg-white/10 border border-border p-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-amber-500/15 text-amber-600 flex items-center justify-center">
            <i className="ri-file-list-3-line text-base" />
          </div>
          <div className="text-[10px] text-muted-foreground">Audits Scheduled</div>
        </div>
        <div className="mt-1 text-lg font-semibold">24</div>
        <div className="mt-2 h-1.5 w-full bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-400" style={{ width: '45%' }} />
        </div>
      </div>
  <div className="rounded-lg bg-white/70 dark:bg:white/10 border border-border p-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-emerald-500/15 text-emerald-600 flex items-center justify-center">
            <i className="ri-shield-check-line text-base" />
          </div>
          <div className="text-[10px] text-muted-foreground">Compliance Score</div>
        </div>
        <div className="mt-1 text-lg font-semibold">92%</div>
        <div className="mt-2 h-1.5 w-full bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-emerald-500 to-green-400" style={{ width: '92%' }} />
        </div>
      </div>
  <div className="rounded-lg bg-white/70 dark:bg-white/10 border border-border p-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-rose-500/15 text-rose-600 flex items-center justify-center">
            <i className="ri-time-line text-base" />
          </div>
          <div className="text-[10px] text-muted-foreground">Avg. Resolution</div>
        </div>
        <div className="mt-1 text-lg font-semibold">2.4 days</div>
        <div className="mt-2 h-1.5 w-full bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-rose-500 to-red-400" style={{ width: '40%' }} />
        </div>
      </div>
    </div>
  );
}

function DashboardPlaceholder() {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setIsSmall(mq.matches);
    update();
    mq.addEventListener ? mq.addEventListener('change', update) : mq.addListener(update);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', update) : mq.removeListener(update);
    };
  }, []);

  return (
    <div className="min-h-full w-full p-3 grid grid-rows-[auto_minmax(0,1fr)_auto] gap-3">
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-lg bg-white/70 dark:bg-white/10 border border-border p-3">
          <div className="text-[10px] text-muted-foreground">Active Users</div>
          <div className="text-lg font-semibold">1,248</div>
          <Sparkline points={[2, 3, 4, 3, 5, 6, 7]} />
        </div>
        <div className="rounded-lg bg-white/70 dark:bg-white/10 border border-border p-3">
          <div className="text-[10px] text-muted-foreground">Conversion</div>
          <div className="text-lg font-semibold">4.7%</div>
          <Sparkline points={[1, 2, 1, 3, 2, 4, 5]} />
        </div>
        <div className="rounded-lg bg-white/70 dark:bg-white/10 border border-border p-3">
          <div className="text-[10px] text-muted-foreground">Churn</div>
          <div className="text-lg font-semibold">1.2%</div>
          <Sparkline points={[3, 2, 2, 1, 2, 2, 1]} />
        </div>
      </div>
  <div className="rounded-lg bg-white/70 dark:bg-white/10 border border-border overflow-hidden">
        <InsightList />
      </div>
      <div className="rounded-lg bg-white/70 dark:bg-white/10 border border-border p-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <i className="ri-notification-3-line text-blue-600" />
          <span className="text-xs">3 alerts need attention</span>
        </div>
        <button className="text-xs px-2 py-1 rounded-md bg-blue-600 text-white">Review</button>
      </div>
    </div>
  );
}

function PhoneUI({ onScreenSize }: { onScreenSize?: (size: PhoneSize) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showDefault, setShowDefault] = useState(true);
  const [lastAnswer, setLastAnswer] = useState<"yes" | "no" | null>(null);

  const questions: Question[] = [
    { id: 1, text: "Do you segment your inspections and audits?" },
    { id: 2, text: "Do you automate audit follow-ups?" },
  ];

  useEffect(() => {
    const target = screenRef.current;
    if (!target) return;
    const ro = new (window as any).ResizeObserver((entries: any[]) => {
      for (const e of entries) {
        const { width, height } = e.contentRect || {};
        if (width && height) onScreenSize?.({ width: Math.round(width), height: Math.round(height) });
      }
    });
    ro.observe(target);
    const r = target.getBoundingClientRect();
    if (r.width && r.height) onScreenSize?.({ width: Math.round(r.width), height: Math.round(r.height) });
    return () => ro.disconnect();
  }, [onScreenSize]);

  const handleAnswer = (answer: "yes" | "no") => {
    setShowDefault(false);
    setLastAnswer(answer);
    // Alternate between the two questions
    setQuestionIndex((prev) => (prev + 1) % questions.length);
  };

  const handleHeaderClick = () => {
    setShowDefault(true);
  };

  const pieData = lastAnswer === "yes"
    ? [
        { value: 48, color: "#22c55e" },
        { value: 22, color: "#3b82f6" },
        { value: 18, color: "#f59e0b" },
        { value: 12, color: "#ef4444" },
      ]
    : [
        { value: 30, color: "#ef4444" },
        { value: 28, color: "#3b82f6" },
        { value: 22, color: "#22c55e" },
        { value: 20, color: "#f59e0b" },
      ];

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
          <div className="p-2">
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
              <div className="absolute inset-2 rounded-[22px] overflow-hidden">
                <div className="grid h-full w-full" style={{ gridTemplateRows: "auto 1fr auto" }}>
                  {/* Header 10% */}
                  <div
                    className="relative flex items-center justify-between px-3 border-b border-border/60 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 cursor-pointer select-none"
                    onClick={handleHeaderClick}
                    role="button"
                    aria-label="Show default dashboard"
                  >
                    <button className="inline-flex items-center justify-center size-8 rounded-md hover:bg-black/5 dark:hover:bg-white/5">
                      <i className="ri-menu-2-line text-lg" />
                    </button>
                    <div className="text-sm md:text-base font-semibold tracking-wide">PulsePro</div>
                    <div className="relative">
                      <button className="inline-flex items-center justify-center size-8 rounded-md hover:bg-black/5 dark:hover:bg-white/5 relative">
                        <i className="ri-notification-3-line text-lg" />
                        <span className="absolute -top-0.5 -right-0.5 inline-flex items-center justify-center text-[10px] leading-none size-4 rounded-full bg-red-600 text-white">3</span>
                      </button>
                    </div>
                  </div>

                  {/* Middle content grows and can scroll */}
                  <div className="relative bg-white/70 dark:bg-white/5 overflow-y-auto">
                    {showDefault ? (
                      <DashboardPlaceholder />
                    ) : questionIndex === 0 ? (
                      <PieChart segments={pieData} label={lastAnswer === "yes" ? "Yes" : "No"} />
                    ) : (
                      <InsightList />
                    )}
                  </div>

                  {/* Bottom 40%: Q&A */}
                  <div className="flex flex-col p-3 gap-2 bg-gradient-to-t from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950">
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Question</div>
                    <div className="text-base md:text-lg font-medium leading-snug">
                      {questions[questionIndex].text}
                    </div>
                    <div className="mt-1 flex items-center gap-3">
                      <button
                        onClick={() => handleAnswer("yes")}
                        className="flex-1 inline-flex items-center justify-center h-10 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-medium shadow-sm transition-colors"
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => handleAnswer("no")}
                        className="flex-1 inline-flex items-center justify-center h-10 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium shadow-sm transition-colors"
                      >
                        No
                      </button>
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
              <i
                className={cn("text-4xl md:text-5xl", item.icon, tone)}
                aria-hidden="true"
              />
              <span className="sr-only">
                {item.icon.replace(/ri-|-/g, " ")}
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
              <i
                className={cn("text-4xl md:text-5xl", item.icon, tone)}
                aria-hidden="true"
              />
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
      className="relative overflow-hidden py-0 md:py-0 bg-[#FDF6E9]"
    >
      {/* Replace scattered chaos with synchronized strip system */}

      <div className="full-bleed relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8 pt-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
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
                        "text-2xl md:text-3xl text-red-600 dark:text-red-400",
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
                        "text-2xl md:text-3xl text-green-600 dark:text-green-400",
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
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#FDF6E9] to-transparent z-10 pointer-events-none"></div>
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
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#FDF6E9] to-transparent z-10 pointer-events-none"></div>
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
