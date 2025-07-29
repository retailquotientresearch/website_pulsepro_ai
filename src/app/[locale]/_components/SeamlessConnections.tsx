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
      color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    },
    {
      name: 'Microsoft Teams',
      icon: 'ri-microsoft-line',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
    },
    {
      name: 'Google Workspace',
      icon: 'ri-google-line',
      color: 'bg-gradient-to-br from-amber-500 to-orange-600',
    },
    {
      name: 'Zapier',
      icon: 'ri-flashlight-line',
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
    },
    {
      name: 'Salesforce',
      icon: 'ri-cloud-line',
      color: 'bg-gradient-to-br from-orange-600 to-red-700',
    },
    {
      name: 'QuickBooks',
      icon: 'ri-calculator-line',
      color: 'bg-gradient-to-br from-red-500 to-orange-700',
    }
  ]

  return (
    <Section className="bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-950 dark:via-gray-900 dark:to-black relative overflow-hidden" padding="xl">
      {/* Background decorative elements using orange gradient theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-yellow-400/25 to-orange-400/20 dark:from-yellow-400/15 dark:to-orange-400/12 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-40 w-64 h-64 bg-gradient-to-tr from-yellow-300/20 to-orange-500/25 dark:from-yellow-400/12 dark:to-orange-400/15 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-500/30 dark:bg-amber-400/20 rounded-full blur-2xl"></div>
      </div>
      <Container className="relative z-10">
        <div className="text-center mb-16">
          {/* Tagline */}
          <div className="inline-block mb-4">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-orange-600 dark:text-yellow-300 font-semibold">
                <i className="ri-plug-line text-orange-600 dark:text-yellow-400 text-xl font-bold mr-2"></i>
                Seamless Connections
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            We <span className="bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 bg-clip-text text-transparent font-extrabold drop-shadow-sm">Play Well</span> With Others
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Seamlessly connect with your existing <span className="bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 bg-clip-text text-transparent font-bold drop-shadow-sm">tools and workflow</span>
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