"use client";

import Section from "@/components/ui/Section";
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
import { useTranslations } from 'next-intl';

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
};

function Tile({ label }: { label: string }) {
	return (
		<Badge
			variant="outline"
			className="w-auto h-10 sm:h-10 rounded-full border-slate-300/80 text-slate-800 bg-white/90 backdrop-blur px-5 sm:px-5 text-sm sm:text-sm font-medium shadow-sm hover:shadow transition-shadow flex items-center gap-2.5 justify-start"
		>
			{(() => {
				const Icon = REEL_ICONS[label] ?? CircleHelp;
				return (
					<span className="inline-flex size-6 items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-slate-700">
						<Icon className="size-3.5" aria-hidden="true" />
					</span>
				);
			})()}
			{label}
		</Badge>
	);
}

export default function EverythingYoureLookingFor() {
	const t = useTranslations('everythingYoureLookingFor');

	return (
			<Section className="bg-[#FDF6E9] py-12 md:py-16 lg:py-20">
				<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="relative mb-10 sm:mb-12 lg:mb-14 text-center">
						{/* Soft green glow behind the title to match site accents */}
						<div className="pointer-events-none absolute -inset-x-10 -top-6 h-20 bg-gradient-to-r from-[#1A7D3D]/20 via-transparent to-[#1A7D3D]/20 blur-3xl"></div>
						<h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#111]">
							{t('title.part1')}
							{' '}
							<span className="bg-gradient-to-r from-[#1A7D3D] to-[#1A7D3D]/70 bg-clip-text text-transparent">{t('title.highlight')}</span>
						</h2>
					</div>

				{/* Shared tile stack above images (show on < lg) */}
				<div className="mx-auto w-full max-w-md sm:max-w-lg mb-8 sm:mb-10 lg:hidden">
					<div className="flex flex-col items-center gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
						{REELS.map((reel) => (
							<Tile key={reel.title} label={reel.title} />
						))}
					</div>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 place-items-center">
		    {REELS.map((reel, idx) => {
						const side: 'left' | 'right' = idx % 2 === 0 ? 'left' : 'right'
						return (
							<AnimatedCard key={reel.title} delay={idx * 80} direction="up" className="m-0 p-0">
								<div className="relative group inline-block overflow-visible align-middle m-0 p-0">
									{/* Image */}
									<Image
										src={reel.image}
										alt={reel.title}
										width={640}
										height={400}
										className="block h-auto w-auto max-w-full object-contain drop-shadow-sm m-0 p-0"
										loading="lazy"
									/>

									{/* Curvy arrow with label on md+ (to avoid crowding on small) */}
									<CurvyArrowLabel
										id={`reel-${idx}`}
										label={reel.title}
										side={side}
										className="hidden lg:block"
									/>
								</div>
							</AnimatedCard>
						)
					})}
				</div>
			</div>
		</Section>
	);
}

type CurvyArrowLabelProps = {
	id: string
	label: string
	side?: 'left' | 'right'
	className?: string
}

function CurvyArrowLabel({ id, label, side = 'left', className = '' }: CurvyArrowLabelProps) {
	// Position elements just outside the image area, with a playful curved path
	const isLeft = side === 'left'
	const overlaySide = isLeft
		? 'absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[calc(100%+10px)]'
		: 'absolute top-1/2 right-0 -translate-y-1/2 translate-x-[calc(100%+10px)]'
	const labelPos = isLeft
		? 'left-0 -translate-x-2 sm:-translate-x-4'
		: 'right-0 translate-x-2 sm:translate-x-4'
	const labelJustify = isLeft ? 'items-start text-left' : 'items-end text-right'

	// Path bezier points within a 320x220 viewport, scaled by viewBox
	const pathId = `arrow-path-${id}`
	const markerId = `arrow-head-${id}`

	// Mirror horizontally for right side within the SVG coordinate system
	const svgGroupTransform = isLeft ? undefined : 'translate(320 0) scale(-1 1)'

	return (
		<div className={cn("pointer-events-none", overlaySide, "w-[320px] h-[220px]", className)} aria-hidden>
			{/* Position label bubble */}
			<div className={cn("absolute top-6", labelPos)}>
				<div className={cn("flex flex-col gap-2", labelJustify)}>
					<div className="pointer-events-auto inline-flex">
						<Badge
							variant="outline"
							className={cn(
								"rounded-full border-slate-300/70 bg-white/90 text-slate-900 shadow-sm backdrop-blur px-4 py-2",
								"hover:shadow-md transition-shadow duration-300"
							)}
						>
							{/* Icon bubble + label */}
							{(() => {
								const Icon = REEL_ICONS[label] ?? CircleHelp
								return (
									<span className="mr-2 inline-flex size-6 items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-slate-700">
										<Icon className="size-3.5" aria-hidden="true" />
									</span>
								)
							})()}
							<span className="font-medium">{label}</span>
						</Badge>
					</div>
				</div>
			</div>

			{/* Curved SVG arrow */}
			<svg
				className={cn("absolute top-1/2 left-0 -translate-y-1/2 w-[280px] h-[200px] -z-10")}
				viewBox="0 0 320 220"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="xMinYMin meet"
			>
				<defs>
					<marker id={markerId} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
						<path d="M 0 0 L 10 5 L 0 10 z" fill="#111111" />
					</marker>
				</defs>

				<g {...(svgGroupTransform ? { transform: svgGroupTransform } : {})}>
					{/* playful wavy curve */}
					<path
						id={pathId}
						d="M 10 30 C 80 20, 120 80, 160 70 S 260 120, 300 90"
						stroke="#111111"
						strokeWidth="3.5"
						strokeLinecap="round"
						strokeLinejoin="round"
						fill="none"
						markerEnd={`url(#${markerId})`}
						className="[stroke-dasharray:6_10] group-hover:[stroke-dashoffset:16] transition-[stroke-dashoffset] duration-500 ease-out"
					/>

					{/* subtle glow underlay */}
					<path
						d="M 10 30 C 80 20, 120 80, 160 70 S 260 120, 300 90"
						stroke="#00000022"
						strokeWidth="8"
						fill="none"
						className="blur-[1.5px]"
					/>
				</g>
			</svg>
		</div>
	)
}

