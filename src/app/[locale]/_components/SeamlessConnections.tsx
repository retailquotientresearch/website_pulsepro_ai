'use client'

import { useTranslations } from 'next-intl'
import { Card, CardContent, CardTitle } from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

export default function SeamlessConnections() {
  const t = useTranslations('seamlessConnections')

  const integrations = [
    {
      name: 'Slack',
      icon: 'ri-slack-line',
      color: 'bg-gradient-to-br from-gray-400 to-gray-600',
    },
    {
      name: 'Microsoft Teams',
      icon: 'ri-microsoft-line',
      color: 'bg-gradient-to-br from-gray-500 to-gray-700',
    },
    {
      name: 'Google Workspace',
      icon: 'ri-google-line',
      color: 'bg-gradient-to-br from-gray-600 to-gray-800',
    },
    {
      name: 'Zapier',
      icon: 'ri-flashlight-line',
      color: 'bg-gradient-to-br from-gray-500 to-gray-700',
    },
    {
      name: 'Salesforce',
      icon: 'ri-cloud-line',
      color: 'bg-gradient-to-br from-gray-500 to-gray-800',
    },
    {
      name: 'QuickBooks',
      icon: 'ri-calculator-line',
      color: 'bg-gradient-to-br from-gray-600 to-gray-900',
    }
  ]

  return (
    <Section className="bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-950 dark:via-gray-900 dark:to-black" padding="xl">
      <Container>
        <div className="text-center mb-16">
          {/* Tagline */}
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 dark:from-gray-700 dark:via-gray-600 dark:to-gray-500 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
              <span className="text-gray-700 dark:text-gray-300 font-semibold">
                <i className="ri-plug-line text-gray-600 dark:text-gray-400 text-xl font-bold mr-2"></i>
                Seamless Connections
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {integrations.map((integration, index) => (
            <Card 
              key={index} 
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