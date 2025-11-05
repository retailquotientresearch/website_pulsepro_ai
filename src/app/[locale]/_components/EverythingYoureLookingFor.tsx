"use client";

import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";
import {
  Bell,
  BarChart3,
  CheckSquare,
  Image as ImageIcon,
  MapPin,
  PenLine,
  CircleHelp,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type Reel = {
  title: string;
  image: string;
};

const REELS: Reel[] = [
  { title: "Analytics", image: "/images/Analytics_card.png" },
  { title: "Actions", image: "/images/Action_card.png" },
  { title: "Notifications", image: "/images/Notification_card.png" },
  { title: "Image Upload", image: "/images/Image_upload.png" },
  { title: "Signatures", image: "/images/Digital_signature.png" },
  { title: "Geo Check In", image: "/images/Geolocation.png" },
];

const REEL_ICONS: Record<string, LucideIcon> = {
  Analytics: BarChart3,
  Actions: CheckSquare,
  Notifications: Bell,
  "Image Upload": ImageIcon,
  Signatures: PenLine,
  "Geo Check In": MapPin,
  // Additional tiles (lavender badges only)
  "PDF Reports": PenLine,
  "Reminders & Alerts": Bell,
  Scheduling: CheckSquare,
  "Custom Branding": ImageIcon,
  "Offline Capability": MapPin,
};

// Lavender feature tiles list (includes existing REELS titles + requested additions)
const TILE_LABELS: string[] = [
  "Analytics",
  "Actions",
  "Notifications",
  "Image Upload",
  "Signatures",
  "Geo Check In",
  "PDF Reports",
  "Reminders & Alerts",
  "Scheduling",
  "Custom Branding",
  "Offline Capability",
];

function FeatureTile({ label }: { label: string }) {
  const Icon = REEL_ICONS[label] ?? CircleHelp;

  return (
    <Badge
      variant="outline"
      className="w-auto h-12 sm:h-12 rounded-full border-2 border-[#f0d7ff]/60 text-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-start px-4 sm:px-4 text-sm sm:text-sm font-semibold"
      style={{
        backgroundColor: "#f0d7ff",
        borderColor: "#e6c7ff",
      }}
    >
      <span className="inline-flex size-6 items-center justify-center rounded-full bg-white/90 border-2 border-white/60 text-gray-700 shadow-sm">
        <Icon className="size-3.5" aria-hidden="true" />
      </span>
      {label}
    </Badge>
  );
}

function PhoneWithStickyNote({ reel, index }: { reel: Reel; index: number }) {
  const Icon = REEL_ICONS[reel.title] ?? CircleHelp;

  // Sticky note colors with black borders
  const colors = [
    { bg: "#fef3c7", text: "#374151" }, // Yellow
    { bg: "#d1fae5", text: "#374151" }, // Green
    { bg: "#fce7f3", text: "#374151" }, // Pink
    { bg: "#dbeafe", text: "#374151" }, // Blue
    { bg: "#f3e8ff", text: "#374151" }, // Purple
    { bg: "#fed7d7", text: "#374151" }, // Red
  ];

  const color = colors[index % colors.length];
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
              className="px-4 py-2.5 lg:px-8 lg:py-5 rounded-md shadow-lg border-2 lg:border-4 border-black hover:shadow-xl transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: color.bg,
                filter:
                  "drop-shadow(1px 2px 3px rgba(0,0,0,0.2)) lg:drop-shadow(2px 4px 6px rgba(0,0,0,0.3))",
              }}
            >
              <div className="flex items-center gap-2 lg:gap-3">
                <span
                  className="inline-flex size-6 lg:size-10 items-center justify-center rounded-full border-2 lg:border-3 border-black"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                    color: color.text,
                  }}
                >
                  <Icon className="size-3.5 lg:size-6" aria-hidden="true" />
                </span>
                <span
                  className="font-bold text-sm lg:text-2xl whitespace-nowrap"
                  style={{
                    color: color.text,
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
              style={{ backgroundColor: "#f5f5f5" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EverythingYoureLookingFor() {
  const t = useTranslations("everythingYoureLookingFor");

  return (
    <section className="w-full bg-gradient-to-br from-[#FDF6E9] via-[#FEFBF3] to-[#F8F4E6] py-6 lg:py-8">
      <div className="w-full px-2 sm:px-4 lg:px-6">
        {/* Title */}
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-black leading-tight text-gray-900">
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
