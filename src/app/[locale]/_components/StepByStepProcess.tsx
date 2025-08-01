'use client'

import { Card, CardContent, CardTitle } from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { AnimatedCard } from '@/components/ui/AnimatedCard'
import { useTranslations } from 'next-intl'

export default function StepByStepProcess() {
  const t = useTranslations('stepByStepProcess')

  const steps = [
    {
      number: '01',
      title: t('steps.0.title'),
      description: t('steps.0.description'),
      icon: 'ri-settings-line',
      gradient: 'bg-gradient-to-br from-gray-400 to-gray-700'
    },
    {
      number: '02', 
      title: t('steps.1.title'),
      description: t('steps.1.description'),
      icon: 'ri-palette-line',
      gradient: 'bg-gradient-to-br from-gray-500 to-gray-800'
    },
    {
      number: '03',
      title: t('steps.2.title'),
      description: t('steps.2.description'),
      icon: 'ri-smartphone-line',
      gradient: 'bg-gradient-to-br from-slate-500 to-gray-700'
    },
    {
      number: '04',
      title: t('steps.3.title'),
      description: t('steps.3.description'),
      icon: 'ri-file-chart-line',
      gradient: 'bg-gradient-to-br from-gray-600 to-gray-900'
    },
    {
      number: '05',
      title: t('steps.4.title'),
      description: t('steps.4.description'),
      icon: 'ri-line-chart-line',
      gradient: 'bg-gradient-to-br from-gray-700 to-black'
    }
  ]

  return (
    <Section className="bg-gradient-to-bl from-gray-100 via-white to-gray-50 dark:from-black dark:via-gray-900 dark:to-gray-950 relative overflow-hidden" padding="xl">
      {/* Background decorative elements using gradient theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-gray-400/30 to-gray-600/25 dark:from-gray-600/18 dark:to-gray-800/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-40 w-64 h-64 bg-gradient-to-tr from-gray-300/25 to-gray-500/30 dark:from-gray-700/15 dark:to-gray-600/18 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-gray-500/40 dark:bg-gray-700/25 rounded-full blur-2xl"></div>
      </div>
      <Container className="relative z-10">
        <div className="text-center mb-16">
          {/* Tagline */}
          <div className="mb-8 flex items-center justify-center">
            <div className="bg-white/80 dark:bg-gray-800 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
              <i className="ri-route-line text-gray-600 dark:text-gray-400 text-xl font-bold"></i>
              <span className="text-gray-600 dark:text-gray-300 font-medium text-lg">
                {t('tagline')}
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            From Checklist to <span className="bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 bg-clip-text text-transparent font-extrabold drop-shadow-sm">Change</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our <span className="font-bold">streamlined process</span> gets you results fast
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <AnimatedCard
              key={index}
              delay={index * 150}
              direction="up"
            >
              <Card 
                className="text-center group transform hover:rotate-2 hover:scale-105 hover:shadow-2xl transition-all duration-300 origin-bottom-right relative bg-white/90 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-600 shadow-sm"
              >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-gray-500 to-gray-800 dark:from-gray-600 dark:to-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                {step.number}
              </div>
              <CardContent className="pt-6 p-4 md:p-6">
                <div className={`w-12 h-12 ${step.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm`}>
                  <i className={`${step.icon} text-xl text-white`}></i>
                </div>
                <CardTitle className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm leading-relaxed">
                  {step.description}
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