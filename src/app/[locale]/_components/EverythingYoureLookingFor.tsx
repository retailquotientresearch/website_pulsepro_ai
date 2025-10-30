"use client";

import Section from "@/components/ui/Section";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { cn } from "@/lib/utils";

type Reel = {
	title: string;
	image: string;
};

const REELS: Reel[] = [
	{ title: "Analytics", image: "/images/Analytics_card.png" },
	{ title: "Analytics", image: "/images/Analytics_card.png" },
	{ title: "Analytics", image: "/images/Analytics_card.png" },
	{ title: "Analytics", image: "/images/Analytics_card.png" },
	
	// { title: "UX Design #1", image: "/images/uxpilot-design-1761673550808.png" },
	// { title: "UX Design #2", image: "/images/uxpilot-design-1761673584821.png" },
	// { title: "UX Design #3", image: "/images/uxpilot-design-1761673602974.png" },
];

function ReelCard({ title, image, className = "" }: Reel & { className?: string }) {
	return (
		<div className={cn("w-full", className)}>
			{/* Media only: no borders, shadows, overlays, or hover effects */}
			<img
				src={image}
				alt={title}
				loading="lazy"
				className="block w-full h-auto object-contain object-center"
			/>
			{/* Simple caption below the image */}
			<p className="mt-2 text-[#111] text-sm sm:text-base font-medium tracking-wide text-center">
				{title}
			</p>
		</div>
	);
}

export default function EverythingYoureLookingFor() {
	return (
			<Section className="bg-[#FDF6E9] py-12 md:py-16 lg:py-20">
				<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="relative mb-10 sm:mb-12 lg:mb-14 text-center">
						{/* Soft green glow behind the title to match site accents */}
						<div className="pointer-events-none absolute -inset-x-10 -top-6 h-20 bg-gradient-to-r from-[#1A7D3D]/20 via-transparent to-[#1A7D3D]/20 blur-3xl"></div>
						<h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#111]">
							Everything you&apos;re 
							{' '}
							<span className="bg-gradient-to-r from-[#1A7D3D] to-[#1A7D3D]/70 bg-clip-text text-transparent">looking for</span>
						</h2>
					</div>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
					{REELS.map((reel, idx) => (
						<AnimatedCard key={reel.title} delay={idx * 80} direction="up">
							<ReelCard {...reel} />
						</AnimatedCard>
					))}
				</div>
			</div>
		</Section>
	);
}

