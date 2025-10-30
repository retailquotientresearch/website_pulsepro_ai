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

function PhoneMock({
  onScreenSize,
}: {
  onScreenSize?: (size: PhoneSize) => void;
}) {
  // Little CSS-driven pulse on mount
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [scaledWidth, setScaledWidth] = useState<number>();
  const [loaded, setLoaded] = useState(false);
  const [src] = useState<string>(
    "/images/ios-26-iphone-16-pro-take-a-screenshot-options.jpg"
  );
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("animate-scale-in");
    const t = setTimeout(() => el.classList.remove("animate-scale-in"), 600);
    return () => clearTimeout(t);
  }, []);

  // Ensure we handle the case where the image is already cached and onLoad doesn't fire
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (img.complete && img.naturalWidth > 0) {
      // Compute scaled width similarly to onLoad
      const nw = img.naturalWidth;
      const nh = img.naturalHeight;
      if (nw && Number.isFinite(nw)) {
        const w = Math.round(nw * 0.6);
        const h = Math.round(nh * 0.6);
        setScaledWidth(w);
        onScreenSize?.({ width: w, height: h });
      }
      setLoaded(true);
    }
  }, [src, onScreenSize]);

  return (
    <div
      ref={ref}
      className="relative inline-block"
      aria-label="PulsePro Mobile Interface"
    >
      <img
        ref={imgRef}
        src={src}
        alt="PulsePro mobile app screen"
        className={cn(
          "block h-auto transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0"
        )}
        loading="eager"
        decoding="async"
        style={scaledWidth ? { width: `${scaledWidth}px` } : undefined}
        onLoad={(e) => {
          try {
            const nw = e.currentTarget.naturalWidth;
            const nh = e.currentTarget.naturalHeight;
            if (nw && Number.isFinite(nw) && nh && Number.isFinite(nh)) {
              const w = Math.round(nw * 0.6);
              const h = Math.round(nh * 0.6);
              setScaledWidth(w);
              onScreenSize?.({ width: w, height: h });
            }
          } finally {
            setLoaded(true);
          }
        }}
        onError={() => {
          // Keep the src unchanged; surface in console for debugging instead of swapping images
          console.error("Failed to load image:", src);
          setLoaded(true);
        }}
      />
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
          <div className="absolute left-4 md:left-8 lg:left-12 top-[25%] -translate-y-1/2 z-20 w-[280px] md:w-[320px] pointer-events-none">
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
          <div className="absolute right-4 md:right-8 lg:right-12 top-[25%] -translate-y-1/2 z-20 w-[280px] md:w-[320px] pointer-events-none">
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
          <div className="lg:order-1 order-1 self-stretch h-full flex items-stretch flex-1 min-w-0 relative">
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
            <PhoneMock onScreenSize={(s) => setPhoneHeight(s.height)} />
          </div>

          {/* Right: clarity strip flowing OUT of the phone */}
          <div className="lg:order-3 order-2 self-stretch h-full flex items-stretch flex-1 min-w-0 relative">
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
        <div className="flex justify-center items-center gap-2 py-8">
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
        </div>
      </div>
    </section>
  );
}
