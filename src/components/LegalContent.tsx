import React from 'react'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

interface LegalContentBlock {
	type: 'paragraph' | 'heading' | 'list'
	level?: number // for heading levels h2-h4
	content?: string
	items?: string[]
}

interface LegalContentProps {
	blocks: LegalContentBlock[]
}

export default function LegalContent({ blocks }: LegalContentProps) {
	return (
		<Section className='py-8 md:py-12 bg-[#FDF6E9] dark:bg-gray-900'>
			<Container>
				<div className='prose max-w-none prose-headings:font-bold prose-h2:text-2xl md:prose-h2:text-3xl prose-h3:text-xl md:prose-h3:text-2xl prose-h4:text-lg md:prose-h4:text-xl prose-p:leading-relaxed prose-li:leading-relaxed text-[#111111] dark:text-gray-200 prose-a:text-[#1A7D3D] dark:prose-a:text-[#1A7D3D]'>
					{blocks.map((block, idx) => {
						switch (block.type) {
											case 'heading': {
												const tagName = `h${Math.min(Math.max(block.level || 2, 2), 4)}` as const
												return React.createElement(
													tagName,
													{ key: idx, className: 'scroll-mt-24' },
													block.content
												)
											}
							case 'paragraph':
								return <p key={idx}>{block.content}</p>
							case 'list':
								return (
									<ul key={idx} className='list-disc pl-6 space-y-1'>
										{block.items?.map((item, i) => (
											<li key={i}>{item}</li>
										))}
									</ul>
								)
							default:
								return null
						}
					})}
				</div>
			</Container>
		</Section>
	)
}
