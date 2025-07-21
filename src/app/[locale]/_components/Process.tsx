'use client'

import { Card, CardContent, CardTitle } from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { useTranslations } from 'next-intl'

export default function Process() {
  const t = useTranslations('process')

  const steps = [
    {
      number: '01',
      title: t('steps.0.title'),
      description: t('steps.0.description'),
      icon: 'ri-settings-line'
    },
    {
      number: '02', 
      title: t('steps.1.title'),
      description: t('steps.1.description'),
      icon: 'ri-palette-line'
    },
    {
      number: '03',
      title: t('steps.2.title'),
      description: t('steps.2.description'),
      icon: 'ri-smartphone-line'
    },
    {
      number: '04',
      title: t('steps.3.title'),
      description: t('steps.3.description'),
      icon: 'ri-file-chart-line'
    },
    {
      number: '05',
      title: t('steps.4.title'),
      description: t('steps.4.description'),
      icon: 'ri-line-chart-line'
    }
  ]

  return (
    <Section className="bg-white dark:bg-gray-900" padding="xl">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="text-center group transform hover:rotate-2 hover:scale-105 hover:shadow-2xl transition-all duration-300 origin-bottom-right relative bg-white dark:bg-gray-800"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black dark:bg-gray-600/70 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {step.number}
              </div>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-black dark:bg-gray-900/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${step.icon} text-xl text-white dark:text-gray-300`}></i>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}