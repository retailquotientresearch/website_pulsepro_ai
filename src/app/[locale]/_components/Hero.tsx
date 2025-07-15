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
      
      {/* Floating UI elements - one at each corner */}
      {/* Top left - Rocket */}
      <div className="absolute top-16 left-16 animate-bounce">
        <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full rotate-12 opacity-80 shadow-lg flex items-center justify-center">
          <i className="ri-rocket-fill text-purple-500 text-xl"></i>
        </div>
      </div>
      {/* Top right - Flashlight */}
      <div className="absolute top-16 right-16 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2s'}}>
        <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full opacity-80 shadow-md flex items-center justify-center transform transition-transform hover:scale-110">
          <i className="ri-flashlight-fill text-purple-500 text-xl"></i>
        </div>
      </div>
      {/* Bottom left - Star */}
      <div className="absolute bottom-16 left-16 animate-bounce" style={{animationDelay: '1s', animationDuration: '2.5s'}}>
        <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full rotate-45 opacity-70 shadow-sm flex items-center justify-center transform transition-transform hover:scale-110">
          <i className="ri-star-fill text-purple-500 -rotate-45 text-xl"></i>
        </div>
      </div>
      {/* Bottom right - Check */}
      <div className="absolute bottom-16 right-16 animate-bounce" style={{animationDelay: '2s', animationDuration: '1.8s'}}>
        <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full opacity-70 shadow-md flex items-center justify-center transform transition-transform hover:scale-110">
          <i className="ri-check-fill text-purple-500 text-xl"></i>
        </div>
      </div>
      
      {/* Additional geometrical shapes */}
      <div className="absolute top-1/3 left-8 animate-bounce" style={{animationDelay: '0.5s'}}>
        <div className="w-5 h-5 bg-pink-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-1/2 right-8 animate-bounce" style={{animationDelay: '1.5s'}}>
        <div className="w-6 h-6 bg-purple-400 rounded-full opacity-50"></div>
      </div>
      <div className="absolute bottom-1/3 left-12 animate-bounce" style={{animationDelay: '2.5s'}}>
        <div className="w-4 h-4 bg-blue-400 rounded-full opacity-70"></div>
      </div>
      <div className="absolute top-20 right-1/3 animate-bounce" style={{animationDelay: '3s'}}>
        <div className="w-5 h-5 bg-pink-500 rounded-full opacity-40"></div>
      </div>
      
      <Container className="relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          
          {/* Tagline */}
          <div className="mb-8 flex items-center justify-center">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
              <span className="text-lg">🚀</span>
              <span className="text-purple-600 dark:text-purple-300 font-medium">
                {t('tagline')}
              </span>
            </div>
          </div>
          
          {/* Main heading with gradient text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
            {t('title.part1')}{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('title.highlight')}
            </span>{' '}
            {t('title.part2')}
          </h1>
          
          {/* Subtitle with gradient text for specific words */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            {t('subtitle.part1')}{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
              {t('subtitle.highlight')}
            </span>
          </p>
          
          {/* CTA Buttons matching the design */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="flex items-center gap-3">
              <i className="ri-play-fill text-2xl"></i>
              {t('cta')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="flex items-center gap-3 bg-white dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-300"
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