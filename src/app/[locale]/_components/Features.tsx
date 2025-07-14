'use client'

import { useTranslations } from 'next-intl'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

export default function Features() {
  const t = useTranslations('features')

  const features = [
    {
      icon: 'ri-calendar-schedule-line',
      title: t('items.0.title'),
      description: t('items.0.description'),
      color: 'bg-blue-500'
    },
    {
      icon: 'ri-file-chart-line',
      title: t('items.1.title'),
      description: t('items.1.description'),
      color: 'bg-green-500'
    },
    {
      icon: 'ri-smartphone-line',
      title: t('items.2.title'),
      description: t('items.2.description'),
      color: 'bg-purple-500'
    },
    {
      icon: 'ri-team-line',
      title: t('items.3.title'),
      description: t('items.3.description'),
      color: 'bg-orange-500'
    },
    {
      icon: 'ri-dashboard-line',
      title: t('items.4.title'),
      description: t('items.4.description'),
      color: 'bg-pink-500'
    },
    {
      icon: 'ri-file-text-line',
      title: t('items.5.title'),
      description: t('items.5.description'),
      color: 'bg-indigo-500'
    }
  ]

  return (
    <Section className="bg-gray-50 dark:bg-gray-900" padding="xl">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              variant="shadow" 
              className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl border-0 bg-white dark:bg-gray-800"
              padding="lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <i className={`${feature.icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}