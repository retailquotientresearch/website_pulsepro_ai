'use client'

import { useTranslations } from 'next-intl'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

export default function CallToAction() {
  const t = useTranslations('callToAction')

  return (
    <Section 
      className="bg-gradient-to-br from-gray-400 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white relative overflow-hidden"
      padding="xl"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-gray-400/40 to-gray-600/30 dark:from-gray-600/30 dark:to-gray-500/25 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-40 w-64 h-64 bg-gradient-to-tr from-gray-300/40 to-gray-500/50 dark:from-gray-700/25 dark:to-gray-600/30 rounded-full blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-300 dark:to-gray-500 hover:from-gray-700 hover:to-black dark:hover:from-gray-200 dark:hover:to-gray-400 text-white dark:text-gray-800 text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-[1.02] border-0 transition-all duration-200"
          >
            {t('button')}
          </Button>
        </div>
      </Container>
    </Section>
  )
}