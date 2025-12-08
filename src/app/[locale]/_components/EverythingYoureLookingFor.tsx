"use client";

import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";
import {
  Bell,
  BarChart3,
  Check,
  Image as ImageIcon,
  MapPin,
  PenLine,
  FileText,
  BellDot,
  Calendar,
  Star,
  CloudOff,
  GitBranch,
  CircleHelp,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type Reel = { title: string; image: string };

// Icon mapping per requested specifications
// Analytics → graph bars
// Actions → checkmark
// Notifications → bell
// Image Upload → image frame
// Signatures → pen
// Geo Check-in → pin
// PDF → document icon
// Reminders → bell with small marker
// Scheduling → calendar
// Custom Branding → star
// Offline capability → offline/refresh symbol
// Workflows → branching symbol
const REEL_ICONS: Record<string, LucideIcon> = {
  Analytics: BarChart3,
  Actions: Check,
  Notifications: Bell,
  "Image Upload": ImageIcon,
  Signatures: PenLine,
  "Geo Check-in": MapPin,
  PDF: FileText,
  Reminders: BellDot,
  Scheduling: Calendar,
  "Custom Branding": Star,
  "Offline capability": CloudOff,
  Workflows: GitBranch,
};

// Lavender feature tiles list (includes existing REELS titles + requested additions)
// Will be loaded from translations
let TILE_LABELS: string[] = [];

function FeatureTile({ label }: { label: string }) {
  const Icon = REEL_ICONS[label] ?? CircleHelp;

  return (
    <Badge
      variant="outline"
      className="w-auto h-12 sm:h-12 rounded-full border-2 border-[#f0d7ff]/60 text-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-start px-4 sm:px-4 text-sm md:text-base font-semibold"
      style={{
        backgroundColor: "#f0d7ff",
        borderColor: "#e6c7ff",
      }}
    >
      <span className="inline-flex size-6 items-center justify-center rounded-full bg-white/90 border-2 border-white/60 text-gray-700 shadow-sm">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      {label}
    </Badge>
  );
}

function PhoneWithStickyNote({ reel, index }: { reel: Reel; index: number }) {
  const Icon = REEL_ICONS[reel.title] ?? CircleHelp;

  // Sticky note color palettes (cycle by index). Defaults are lavender.
  const palettes = [
    { bg: "#FDF3C8", border: "#F6E08B", text: "#1f2937", tape: "#f5f5f5" }, // soft yellow
    { bg: "#CCE8FF", border: "#9FD0FF", text: "#0f172a", tape: "#eef2ff" }, // light blue
    { bg: "#F0D7FF", border: "#E6C7FF", text: "#1f2937", tape: "#f5f5f5" }, // lavender (current)
    { bg: "#DFF6DD", border: "#BEE6BA", text: "#0f172a", tape: "#e9fbe8" }, // mint
    { bg: "#FFE2E2", border: "#FFC4C4", text: "#1f2937", tape: "#fff1f2" }, // blush
  ];
  const pillColor = palettes[index % palettes.length];
  const rotations = [-8, 5, -6, 7, -4, 6];
  const rotation = rotations[index % rotations.length];
  const isLeft = index % 2 === 0;

  return (
    <div className="relative group">
      {/* Phone Image - Made Bigger */}
      <div className="relative mx-auto w-full max-w-[280px] lg:max-w-[320px] xl:max-w-[360px] hover:scale-105 transition-transform duration-300">
        <Image
          src={reel.image}
          alt={reel.title}
          width={640}
          height={400}
          className="w-full h-auto object-contain drop-shadow-xl"
          loading="lazy"
        />

        {/* Sticky Note - Positioned on the center of the sides */}
        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 z-20",
            isLeft ? "-left-3 lg:-left-6" : "-right-3 lg:-right-6"
          )}
        >
          <div
            className="relative"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <div
              className="px-3.5 py-2 lg:px-6 lg:py-4 rounded-md shadow-lg border-2 lg:border-[3px] hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: pillColor.bg,
                borderColor: pillColor.border,
                filter:
                  "drop-shadow(1px 2px 3px rgba(0,0,0,0.18)) lg:drop-shadow(2px 4px 6px rgba(0,0,0,0.28))",
              }}
            >
              <div className="flex items-center gap-2 lg:gap-3">
                <span
                  className="inline-flex size-5 lg:size-8 items-center justify-center rounded-full border-2 lg:border-[3px]"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                    color: pillColor.text,
                    borderColor: pillColor.border,
                  }}
                >
                  <Icon className="size-3 lg:size-5" aria-hidden="true" />
                </span>
                <span
                  className="font-bold text-xs md:text-lg lg:text-xl whitespace-nowrap"
                  style={{
                    color: pillColor.text,
                    fontFamily: "ui-serif, Georgia, serif",
                  }}
                >
                  {reel.title}
                </span>
              </div>
            </div>

            {/* Paper tape effect for realistic sticky note */}
            <div
              className="absolute -top-1 lg:-top-2 left-1/2 -translate-x-1/2 w-8 lg:w-10 h-3 lg:h-4 rounded-sm opacity-60 border border-black"
              style={{ backgroundColor: pillColor.tape ?? "#f5f5f5" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EverythingYoureLookingFor() {
  const t = useTranslations("everythingYoureLookingFor");
  // Load tiles & reels from translation JSON (raw to preserve structure)
  TILE_LABELS = (t.raw('tiles') as string[]) || [];
  const REELS: Reel[] = (t.raw('reels') as Reel[]) || [];

  return (
    <section className="w-full bg-[#FFFFEB] py-6 lg:py-8">
      <div className="w-full px-2 sm:px-4 lg:px-6">
        {/* Title */}
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-gray-900">
            {t("title.part1")}{" "}
            <span className="bg-gradient-to-r from-[#1A7D3D] via-[#22A456] to-[#1A7D3D] bg-clip-text text-transparent">
              {t("title.highlight")}
            </span>
          </h2>
        </div>

        {/* Feature Tiles */}
        <div className="mb-8 lg:mb-12">
          {/* All breakpoints: centered, wrapping flex layout for lavender tiles */}
          <div className="mx-auto max-w-3xl flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
            {TILE_LABELS.map((label, idx) => (
              <AnimatedCard key={label} delay={idx * 60} direction="up">
                <FeatureTile label={label} />
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* Phone Mockups */}
        <div className="space-y-6 lg:space-y-8">
          {/* Desktop: 2 rows of 3 */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-8 xl:gap-12 mb-8">
              {REELS.slice(0, 3).map((reel, idx) => (
                <AnimatedCard key={reel.title} delay={idx * 100} direction="up">
                  <PhoneWithStickyNote reel={reel} index={idx} />
                </AnimatedCard>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-8 xl:gap-12">
              {REELS.slice(3).map((reel, idx) => (
                <AnimatedCard
                  key={reel.title}
                  delay={(idx + 3) * 100}
                  direction="up"
                >
                  <PhoneWithStickyNote reel={reel} index={idx + 3} />
                </AnimatedCard>
              ))}
            </div>
          </div>

          {/* Mobile: 3 rows of 2 */}
          <div className="lg:hidden space-y-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {REELS.slice(0, 2).map((reel, idx) => (
                <AnimatedCard key={reel.title} delay={idx * 80} direction="up">
                  <PhoneWithStickyNote reel={reel} index={idx} />
                </AnimatedCard>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {REELS.slice(2, 4).map((reel, idx) => (
                <AnimatedCard
                  key={reel.title}
                  delay={(idx + 2) * 80}
                  direction="up"
                >
                  <PhoneWithStickyNote reel={reel} index={idx + 2} />
                </AnimatedCard>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {REELS.slice(4).map((reel, idx) => (
                <AnimatedCard
                  key={reel.title}
                  delay={(idx + 4) * 80}
                  direction="up"
                >
                  <PhoneWithStickyNote reel={reel} index={idx + 4} />
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
