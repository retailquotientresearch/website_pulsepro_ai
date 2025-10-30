"use client";

import { cn } from "../../../lib/utils";
import { Fragment, useEffect, useRef, useState } from "react";

type ScatterIcon = { icon: string; size: number; rotate: number; x: string; y: string; tone?: "red" | "amber" | "slate" };

const CHAOS_ICONS: ScatterIcon[] = [
  { icon: "ri-apps-2-fill", size: 52, rotate: -18, x: "8%", y: "10%", tone: "red" },
  { icon: "ri-file-paper-fill", size: 64, rotate: 22, x: "36%", y: "6%", tone: "amber" },
  { icon: "ri-file-excel-2-fill", size: 58, rotate: -8, x: "20%", y: "30%", tone: "red" },
  { icon: "ri-file-text-fill", size: 48, rotate: 32, x: "4%", y: "60%", tone: "amber" },
  { icon: "ri-database-2-fill", size: 42, rotate: -26, x: "46%", y: "48%", tone: "red" },
  { icon: "ri-mail-fill", size: 56, rotate: 14, x: "28%", y: "72%", tone: "amber" },
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

function PhoneMock({ onScreenSize }: { onScreenSize?: (size: PhoneSize) => void }) {
  // Little CSS-driven pulse on mount
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [scaledWidth, setScaledWidth] = useState<number>();
  const [scaledHeight, setScaledHeight] = useState<number>();
  const [loaded, setLoaded] = useState(false);
  const [src, setSrc] = useState<string>(
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
        setScaledHeight(h);
        onScreenSize?.({ width: w, height: h });
      }
      setLoaded(true);
    }
  }, [src]);

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
        className={cn("block h-auto transition-opacity duration-300", loaded ? "opacity-100" : "opacity-0")}
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
              setScaledHeight(h);
              onScreenSize?.({ width: w, height: h });
            }
          } finally {
            setLoaded(true);
          }
        }}
        onError={() => {
          // Keep the src unchanged; surface in console for debugging instead of swapping images
          // eslint-disable-next-line no-console
          console.error("Failed to load image:", src);
          setLoaded(true);
        }}
      />
    </div>
  );
}

export default function ChaosToClarity() {
  // Build a single continuous track with chaos icons followed by clarity icons
  // Simpler: dedicated chaos and clarity strips, each repeated for seamless loop
  const REPEAT = 2;
  const chaosStrip = Array.from({ length: REPEAT }).flatMap(() => CHAOS_ICONS);
  const clarityStrip = Array.from({ length: REPEAT }).flatMap(() => STREAMLINED_ICONS);

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
      const isMd = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(min-width: 768px)").matches;
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
    const numWaves =2; // Number of wave cycles visible at once
    const waveFrequency = numWaves * Math.PI * 2; // Multiple complete waves
    
    // Base wave pattern - multiple small waves
    const multipleWaves = Math.sin(t * waveFrequency) * depth * 0.4;
    
    // Flow convergence: waves flow from edges (0 and 1) toward center (0.5)
    const distanceFromCenter = Math.abs(t - 0.5); // 0 at center, 0.5 at edges
    const convergenceFlow = Math.sin(distanceFromCenter * Math.PI) * depth * 0.6;
    
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
                filter: `brightness(${1 + Math.abs(offset) / (ampParam * 2)})` // Brighten cards at flow peaks
              }}
            >
              <i className={cn("text-4xl md:text-5xl", item.icon, tone)} aria-hidden="true" />
              <span className="sr-only">{item.icon.replace(/ri-|-/g, " ")}</span>
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
                filter: `brightness(${1 + Math.abs(offset) / (ampParam * 2)})` // Brighten cards at flow peaks
              }}
            >
              <i className={cn("text-4xl md:text-5xl", item.icon, tone)} aria-hidden="true" />
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
                filter: `brightness(${1 + Math.abs(offset) / (ampParam * 2)})` // Brighten cards at flow peaks
              }}
            >
              <i className={cn("text-4xl md:text-5xl text-black dark:text-gray-800", icon)} aria-hidden="true" />
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
                filter: `brightness(${1 + Math.abs(offset) / (ampParam * 2)})` // Brighten cards at flow peaks
              }}
            >
              <i className={cn("text-4xl md:text-5xl text-black dark:text-gray-800", icon)} aria-hidden="true" />
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
  <section className="relative overflow-hidden py-0 md:py-0 bg-[#FDF6E9]">
      {/* Replace scattered chaos with synchronized strip system */}

  <div className="full-bleed relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            From chaos to clarity
          </h2>
          <p className="mt-3 text-base md:text-lg text-muted-foreground">
            Watch your messy data flow seamlessly through PulsePro and emerge as clean, actionable insights.
          </p>
        </div>

  <div className="flex flex-col lg:flex-row items-stretch gap-0">
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
          <div className="lg:order-2 order-3 m-0 p-0 w-fit flex-none shrink-0 self-center relative">
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
      </div>
    </section>
  );
}
