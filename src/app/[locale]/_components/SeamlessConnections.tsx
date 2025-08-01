'use client'

import { useTranslations } from 'next-intl'
import { Card, CardContent, CardTitle } from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { AnimatedCard } from '@/components/ui/AnimatedCard'

export default function SeamlessConnections() {
  const t = useTranslations('seamlessConnections')

  const integrations = [
    {
      name: 'Slack',
      icon: 'ri-slack-line',
      color: 'bg-gradient-to-br from-gray-400 to-gray-700',
    },
    {
      name: 'Microsoft Teams',
      icon: 'ri-microsoft-line',
      color: 'bg-gradient-to-br from-gray-500 to-gray-800',
    },
    {
      name: 'Google Workspace',
      icon: 'ri-google-line',
      color: 'bg-gradient-to-br from-gray-600 to-gray-900',
    },
    {
      name: 'Zapier',
      icon: 'ri-flashlight-line',
      color: 'bg-gradient-to-br from-slate-500 to-gray-700',
    },
    {
      name: 'Salesforce',
      icon: 'ri-cloud-line',
      color: 'bg-gradient-to-br from-gray-700 to-black',
    },
    {
      name: 'QuickBooks',
      icon: 'ri-calculator-line',
      color: 'bg-gradient-to-br from-gray-600 to-gray-800',
    }
  ]

  return (
    <Section className="bg-gradient-to-l from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden" padding="xl">
      <Container className="relative z-10">
        <div className="text-center mb-16">
          {/* Tagline */}
          <div className="mb-8 flex items-center justify-center">
            <div className="bg-white/80 dark:bg-gray-800 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
              <i className="ri-plug-line text-gray-600 dark:text-gray-400 text-xl font-bold"></i>
              <span className="text-gray-600 dark:text-gray-300 font-medium text-lg">
                {t('tagline')}
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            We <span className="bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 bg-clip-text text-transparent font-extrabold drop-shadow-sm">Play Well</span> With Others
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Seamlessly connect with your existing <span className="font-bold">tools and workflow</span>
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {integrations.map((integration, index) => (
            <AnimatedCard
              key={index}
              delay={index * 100}
              direction="up"
            >
              <Card 
                className="bg-white/90 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-600 text-center group transform hover:rotate-2 hover:scale-105 hover:shadow-2xl transition-all duration-300 origin-bottom-right shadow-sm"
              >
              <CardContent className="p-4 md:p-6">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 ${integration.color} shadow-sm`}>
                  <i className={`${integration.icon} text-lg md:text-2xl text-white`}></i>
                </div>
                <CardTitle className="text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                  {integration.name}
                </CardTitle>
              </CardContent>
            </Card>
            </AnimatedCard>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400">
            And many more integrations available...
          </p>
        </div>
      </Container>
    </Section>
  )
}