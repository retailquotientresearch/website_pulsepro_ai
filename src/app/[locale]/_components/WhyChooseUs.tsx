'use client'

import { Card, CardContent, CardTitle } from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

export default function WhyChooseUs() {
  const differentiators = [
    {
      title: 'Lightning Quick Setup',
      description: 'Get started in minutes, not weeks. Our streamlined onboarding gets you up and running fast.',
      icon: 'ri-flashlight-line',
      color: 'bg-gradient-to-br from-gray-500 to-gray-700'
    },
    {
      title: 'Comprehensive Check',
      description: 'Complete inspection coverage with customizable checklists and automated workflows.',
      icon: 'ri-checkbox-circle-line',
      color: 'bg-gradient-to-br from-gray-600 to-gray-800'
    },
    {
      title: 'Smart Analytics',
      description: 'AI-powered insights that help you identify patterns and optimize your inspection process.',
      icon: 'ri-brain-line',
      color: 'bg-gradient-to-br from-gray-700 to-black'
    },
    {
      title: 'Real-time Sync',
      description: 'Instant synchronization across all devices and team members for seamless collaboration.',
      icon: 'ri-refresh-line',
      color: 'bg-gradient-to-br from-gray-600 to-gray-900'
    },
    {
      title: 'Compliance Ready',
      description: 'Built-in compliance features that ensure you meet industry standards and regulations.',
      icon: 'ri-shield-check-line',
      color: 'bg-gradient-to-br from-gray-800 to-black'
    },
    {
      title: 'Scalable Growth',
      description: 'Grows with your business from single inspector to enterprise-level inspection teams.',
      icon: 'ri-rocket-line',
      color: 'bg-gradient-to-br from-gray-500 to-gray-800'
    }
  ]

  return (
    <Section 
      className="bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-black text-black dark:text-white"
      padding="xl"
    >
      <Container>
        <div className="text-center mb-16">
          {/* Tagline */}
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 dark:from-gray-600 dark:via-gray-500 dark:to-gray-400 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
              <span className="text-gray-700 dark:text-gray-300 font-semibold">
                <i className="ri-star-line text-gray-600 dark:text-gray-400 text-xl font-bold mr-2"></i>
                Why Choose Us
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            What Makes PulsePro Different
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here&apos;s what sets us apart from other inspection platforms
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {differentiators.map((item, index) => (
            <Card 
              key={index} 
              className="bg-white/90 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-600 group transform hover:rotate-2 hover:scale-105 hover:shadow-2xl transition-all duration-300 origin-bottom-right shadow-sm"
            >
              <CardContent className="text-center p-6 md:p-8">
                <div className={`w-14 h-14 md:w-16 md:h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <i className={`${item.icon} text-xl md:text-2xl text-white`}></i>
                </div>
                <CardTitle className="text-gray-900 dark:text-white text-lg md:text-xl font-semibold mb-3">
                  {item.title}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}