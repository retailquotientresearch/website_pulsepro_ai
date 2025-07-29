'use client'

import { useTranslations } from 'next-intl'
import { Card, CardContent, CardTitle } from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { AnimatedCard } from '@/components/ui/AnimatedCard'

export default function WhyChooseUs() {
  const t = useTranslations('whyChooseUs')
  const differentiators = [
    {
      icon: 'ri-flashlight-line',
      color: 'bg-gradient-to-br from-yellow-400 to-orange-500'
    },
    {
      icon: 'ri-checkbox-circle-line',
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
    },
    {
      icon: 'ri-brain-line',
      color: 'bg-gradient-to-br from-amber-500 to-orange-600'
    },
    {
      icon: 'ri-refresh-line',
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600'
    },
    {
      icon: 'ri-shield-check-line',
      color: 'bg-gradient-to-br from-orange-600 to-red-700'
    },
    {
      icon: 'ri-rocket-line',
      color: 'bg-gradient-to-br from-red-500 to-orange-700'
    }
  ]

  return (
    <Section 
      className="bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-black text-black dark:text-white relative overflow-hidden"
      padding="xl"
    >
      {/* Background decorative elements using orange gradient theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-yellow-400/35 to-orange-400/30 dark:from-yellow-400/20 dark:to-orange-400/18 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-40 w-64 h-64 bg-gradient-to-tr from-yellow-300/30 to-orange-500/35 dark:from-yellow-400/18 dark:to-orange-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-500/50 dark:bg-amber-400/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-yellow-400/45 to-orange-400/35 dark:from-yellow-500/25 dark:to-orange-400/20 rounded-full blur-2xl"></div>
      </div>
      <Container className="relative z-10">
        <div className="text-center mb-16">
          {/* Tagline */}
          <div className="inline-block mb-4">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-orange-600 dark:text-yellow-300 font-semibold">
                <i className="ri-star-line text-orange-600 dark:text-yellow-400 text-xl font-bold mr-2"></i>
                {t('tagline')}
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            What Makes PulsePro <span className="bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 bg-clip-text text-transparent font-extrabold drop-shadow-sm">Different</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here&apos;s what sets us <span className="bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 bg-clip-text text-transparent font-bold drop-shadow-sm">apart</span> from other inspection platforms
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {differentiators.map((item, index) => (
            <AnimatedCard
              key={index}
              delay={index * 120}
              direction="up"
            >
              <Card 
                className="bg-white/90 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-600 group transform hover:rotate-2 hover:scale-105 hover:shadow-2xl transition-all duration-300 origin-bottom-right shadow-sm"
              >
              <CardContent className="text-center p-6 md:p-8">
                <div className={`w-14 h-14 md:w-16 md:h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <i className={`${item.icon} text-xl md:text-2xl text-white`}></i>
                </div>
                <CardTitle className="text-gray-900 dark:text-white text-lg md:text-xl font-semibold mb-3">
                  {t(`items.${index}.title`)}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                  {t(`items.${index}.description`)}
                </p>
              </CardContent>
            </Card>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </Section>
  )
}