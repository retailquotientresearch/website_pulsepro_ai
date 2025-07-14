'use client'

import { useTranslations } from 'next-intl'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

export default function Testimonials() {
  const t = useTranslations('testimonials')

  const testimonials = [
    {
      name: t('items.0.name'),
      role: t('items.0.role'),
      company: t('items.0.company'),
      content: t('items.0.content'),
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: t('items.1.name'),
      role: t('items.1.role'),
      company: t('items.1.company'),
      content: t('items.1.content'),
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: t('items.2.name'),
      role: t('items.2.role'),
      company: t('items.2.company'),
      content: t('items.2.content'),
      rating: 5,
      avatar: '👩‍🔧'
    }
  ]

  return (
    <Section 
      className="bg-gradient-to-br from-purple-600 to-purple-800 text-white"
      padding="xl"
    >
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white group hover:scale-105 transition-transform duration-300"
              variant="default"
            >
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-sm"></i>
                  ))}
                </div>
                <p className="text-purple-100 italic leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-purple-200">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-purple-300">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}