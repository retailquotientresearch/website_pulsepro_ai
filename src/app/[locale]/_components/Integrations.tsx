'use client'

import { useTranslations } from 'next-intl'
import { Card, CardContent, CardTitle } from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

export default function Integrations() {
  const t = useTranslations('integrations')

  const integrations = [
    {
      name: 'Slack',
      icon: 'ri-slack-line',
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400'
    },
    {
      name: 'Microsoft Teams',
      icon: 'ri-microsoft-line',
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
    },
    {
      name: 'Google Workspace',
      icon: 'ri-google-line',
      color: 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400'
    },
    {
      name: 'Zapier',
      icon: 'ri-flashlight-line',
      color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400'
    },
    {
      name: 'Salesforce',
      icon: 'ri-cloud-line',
      color: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400'
    },
    {
      name: 'QuickBooks',
      icon: 'ri-calculator-line',
      color: 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400'
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <Card 
              key={index} 
              className="text-center group transform hover:rotate-2 hover:scale-105 hover:shadow-2xl transition-all duration-300 origin-bottom-right"
            >
              <CardContent>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 ${integration.color}`}>
                  <i className={`${integration.icon} text-2xl`}></i>
                </div>
                <CardTitle className="text-sm font-medium text-gray-900 dark:text-white">
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