'use client'

import { useTranslations } from 'next-intl'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

export default function CallToAction() {
  const t = useTranslations('callToAction')

  return (
    <Section 
      className="bg-gradient-to-t from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 text-black dark:text-white relative overflow-hidden"
      padding="xl"
    >
      
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Look Good. <span className="bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 bg-clip-text text-transparent font-extrabold drop-shadow-sm">Get Noticed.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 hover:from-yellow-600 hover:via-orange-500 hover:to-red-600 dark:hover:from-yellow-500 dark:hover:via-orange-400 dark:hover:to-red-500 text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-[1.02] border-0 transition-all duration-200"
          >
            {t('button')}
          </Button>
        </div>
      </Container>
    </Section>
  )
}