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
      <div className="absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-50 to-gray-300 dark:from-gray-900 dark:via-black dark:to-gray-800"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-gray-400/20 to-gray-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-40 w-96 h-96 bg-gradient-to-tr from-gray-300/15 to-gray-400/15 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-gray-400/25 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gray-300/20 rounded-full blur-2xl"></div>
      </div>
      
      {/* Floating UI elements - one at each corner */}
      {/* Top left - Rocket */}
      <div className="absolute top-16 left-16 animate-bounce">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 backdrop-blur-sm rounded-full rotate-12 opacity-80 shadow-lg flex items-center justify-center">
          <i className="ri-rocket-fill text-white text-xl"></i>
        </div>
      </div>
      {/* Top right - Flashlight */}
      <div className="absolute top-16 right-16 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2s'}}>
        <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 backdrop-blur-sm rounded-full opacity-80 shadow-md flex items-center justify-center transform transition-transform hover:scale-110">
          <i className="ri-flashlight-fill text-white text-xl"></i>
        </div>
      </div>
      {/* Bottom left - Star */}
      <div className="absolute bottom-16 left-16 animate-bounce" style={{animationDelay: '1s', animationDuration: '2.5s'}}>
        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 backdrop-blur-sm rounded-full rotate-45 opacity-70 shadow-sm flex items-center justify-center transform transition-transform hover:scale-110">
          <i className="ri-star-fill text-white -rotate-45 text-xl"></i>
        </div>
      </div>
      {/* Bottom right - Check */}
      <div className="absolute bottom-16 right-16 animate-bounce" style={{animationDelay: '2s', animationDuration: '1.8s'}}>
        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 backdrop-blur-sm rounded-full opacity-70 shadow-md flex items-center justify-center transform transition-transform hover:scale-110">
          <i className="ri-check-fill text-white text-xl"></i>
        </div>
      </div>
      
      {/* Additional geometrical shapes */}
      <div className="absolute top-1/3 left-8 animate-bounce" style={{animationDelay: '0.5s'}}>
        <div className="w-5 h-5 bg-blue-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-1/2 right-8 animate-bounce" style={{animationDelay: '1.5s'}}>
        <div className="w-6 h-6 bg-red-400 rounded-full opacity-50"></div>
      </div>
      <div className="absolute bottom-1/3 left-12 animate-bounce" style={{animationDelay: '2.5s'}}>
        <div className="w-4 h-4 bg-orange-400 rounded-full opacity-70"></div>
      </div>
      <div className="absolute top-20 right-1/3 animate-bounce" style={{animationDelay: '3s'}}>
        <div className="w-5 h-5 bg-amber-500 rounded-full opacity-40"></div>
      </div>
      
      <Container className="relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          
          {/* Tagline */}
          <div className="mb-8 flex items-center justify-center">
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-900/20 dark:via-gray-800 dark:to-blue-800/20 backdrop-blur-sm border border-blue-200 dark:border-blue-700 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
              <span className="text-lg">🚀</span>
              <span className="text-blue-700 dark:text-blue-300 font-medium">
                {t('tagline')}
              </span>
            </div>
          </div>
          
          {/* Main heading with gradient text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
            {t('title.part1')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
              {t('title.highlight')}
            </span>{' '}
            {t('title.part2')}
          </h1>
          
          {/* Subtitle with gradient text for specific words */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            {t('subtitle.part1')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent font-semibold">
              {t('subtitle.highlight')}
            </span>
          </p>
          
          {/* CTA Buttons matching the design */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] border-0">
              <i className="ri-play-fill text-2xl"></i>
              {t('cta')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="flex items-center gap-3 bg-white dark:bg-gray-900 border-2 border-gray-600 dark:border-gray-400 text-gray-700 hover:text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600/20 dark:hover:text-gray-300 hover:border-gray-700 dark:hover:border-gray-300 transition-all duration-200"
            >

              <i className="ri-phone-fill text-xl"></i>
              {t('secondaryCta')}
            </Button>
          </div>
          
        </div>
      </Container>
    </Section>
  )
}
