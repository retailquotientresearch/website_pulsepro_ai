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
      color: 'bg-gradient-to-br from-gray-400 to-gray-700'
    },
    {
      icon: 'ri-checkbox-circle-line',
      color: 'bg-gradient-to-br from-gray-500 to-gray-800'
    },
    {
      icon: 'ri-brain-line',
      color: 'bg-gradient-to-br from-slate-500 to-gray-700'
    },
    {
      icon: 'ri-refresh-line',
      color: 'bg-gradient-to-br from-gray-600 to-gray-900'
    },
    {
      icon: 'ri-shield-check-line',
      color: 'bg-gradient-to-br from-gray-700 to-black'
    },
    {
      icon: 'ri-rocket-line',
      color: 'bg-gradient-to-br from-gray-600 to-gray-800'
    }
  ]

  return (
    <Section 
      className="bg-gradient-to-tr from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 text-black dark:text-white relative overflow-hidden"
      padding="xl"
    >
      <Container className="relative z-10">
        <div className="text-center mb-16">
          {/* Tagline */}
          <div className="mb-8 flex items-center justify-center">
            <div className="bg-white/80 dark:bg-gray-800 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
              <i className="ri-star-line text-gray-600 dark:text-gray-400 text-xl font-bold"></i>
              <span className="text-gray-600 dark:text-gray-300 font-medium text-lg">
                {t('tagline')}
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            What Makes PulsePro <span className="bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 bg-clip-text text-transparent font-extrabold drop-shadow-sm">Different</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here&apos;s what sets us <span className="font-bold">apart</span> from other inspection platforms
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