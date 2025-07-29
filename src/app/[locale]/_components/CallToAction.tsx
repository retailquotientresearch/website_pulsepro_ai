'use client'

import { useTranslations } from 'next-intl'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

export default function CallToAction() {
  const t = useTranslations('callToAction')

  return (
    <Section 
      className="bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black text-black dark:text-white relative overflow-hidden"
      padding="xl"
    >
      {/* Background decorative elements using orange gradient theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-yellow-400/50 to-orange-400/40 dark:from-yellow-400/30 dark:to-orange-400/25 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-40 w-64 h-64 bg-gradient-to-tr from-yellow-300/40 to-orange-500/50 dark:from-yellow-400/25 dark:to-orange-400/30 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-500/60 dark:bg-amber-400/40 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-yellow-400/55 to-orange-400/45 dark:from-yellow-500/35 dark:to-orange-400/25 rounded-full blur-2xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Look Good. <span className="bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 bg-clip-text text-transparent font-extrabold drop-shadow-sm">Get Noticed.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
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