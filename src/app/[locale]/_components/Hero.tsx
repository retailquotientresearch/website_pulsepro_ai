'use client'

import { useTranslations } from 'next-intl'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <Section 
      className="h-[85vh] flex items-center justify-center relative overflow-hidden"
      padding="xl"
    >
      {/* Enhanced gradient background matching the design */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-40 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-300/40 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-300/30 rounded-full blur-2xl"></div>
      </div>
      
      <Container className="relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          
          {/* Main heading with better typography */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
            {t('title')}
          </h1>
          
          {/* Subtitle with better spacing */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            {t('subtitle')}
          </p>
          
          {/* CTA Buttons matching the design */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-200 shadow-lg flex items-center gap-3">
              <i className="ri-play-fill text-2xl"></i>
              See It In Action
            </Button>
            <Button 
              variant="secondary" 
              className="bg-white hover:bg-purple-50 text-purple-600 px-10 py-4 rounded-full text-lg font-medium border border-purple-300 transition-all duration-200 flex items-center gap-3"
            >
              <i className="ri-phone-fill text-xl"></i>
              Book a Demo
            </Button>
          </div>
          
        </div>
      </Container>
    </Section>
  )
}