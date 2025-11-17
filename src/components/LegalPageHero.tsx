import React from 'react'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

interface LegalPageHeroProps {
	title: string
	subtitle?: string
	effectiveDate?: string
}

export default function LegalPageHero({
	title,
	subtitle,
	effectiveDate
}: LegalPageHeroProps) {
	return (
		<Section className='pt-24 pb-8 bg-[#FDF6E9] dark:bg-gray-900'>
			<Container>
				<div className='max-w-4xl'>
					<h1 className="font-['Poppins',sans-serif] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#111111] dark:text-white">
						{title}
					</h1>
					{subtitle && (
						<p className='mt-6 text-lg text-[#111111] dark:text-gray-300 leading-relaxed'>
							{subtitle}
						</p>
					)}
					{effectiveDate && (
						<p className='mt-4 text-sm font-medium text-[#1A7D3D] dark:text-[#1A7D3D]'>
							Effective date: {effectiveDate}
						</p>
					)}
				</div>
			</Container>
		</Section>
	)
}
