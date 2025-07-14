'use client'

import { useTranslations } from 'next-intl'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

export default function CTA() {
  const t = useTranslations('cta')

  return (
    <Section 
      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
      padding="xl"
    >
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4"
          >
            {t('button')}
          </Button>
        </div>
      </Container>
    </Section>
  )
}