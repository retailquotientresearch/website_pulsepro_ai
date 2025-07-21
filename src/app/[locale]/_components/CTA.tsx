'use client'

import { useTranslations } from 'next-intl'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

export default function CTA() {
  const t = useTranslations('cta')

  return (
    <Section 
      className="bg-gradient-to-br from-gray-100 via-gray-100 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-black text-black dark:text-white"
      padding="xl"
    >
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-900 dark:text-gray-50 mb-8 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
          <Button 
            size="lg" 
            className="bg-white text-gray-900 hover:bg-gray-100 hover:text-black text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
          >
            {t('button')}
          </Button>
        </div>
      </Container>
    </Section>
  )
}