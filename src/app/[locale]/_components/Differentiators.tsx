'use client'

import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

export default function Differentiators() {
  const differentiators = [
    {
      title: 'Lightning Quick Setup',
      description: 'Get started in minutes, not weeks. Our streamlined onboarding gets you up and running fast.',
      icon: 'ri-flashlight-line',
      color: 'bg-yellow-500'
    },
    {
      title: 'Comprehensive Check',
      description: 'Complete inspection coverage with customizable checklists and automated workflows.',
      icon: 'ri-checkbox-circle-line',
      color: 'bg-green-500'
    },
    {
      title: 'Smart Analytics',
      description: 'AI-powered insights that help you identify patterns and optimize your inspection process.',
      icon: 'ri-brain-line',
      color: 'bg-blue-500'
    },
    {
      title: 'Real-time Sync',
      description: 'Instant synchronization across all devices and team members for seamless collaboration.',
      icon: 'ri-refresh-line',
      color: 'bg-purple-500'
    },
    {
      title: 'Compliance Ready',
      description: 'Built-in compliance features that ensure you meet industry standards and regulations.',
      icon: 'ri-shield-check-line',
      color: 'bg-red-500'
    },
    {
      title: 'Scalable Growth',
      description: 'Grows with your business from single inspector to enterprise-level inspection teams.',
      icon: 'ri-rocket-line',
      color: 'bg-orange-500'
    }
  ]

  return (
    <Section 
      className="bg-gradient-to-br from-purple-600 to-purple-800 text-white"
      padding="xl"
    >
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Makes PulsePro Different
          </h2>
          <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto">
            Here's what sets us apart from other inspection platforms
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white group hover:scale-105 transition-transform duration-300"
              variant="default"
            >
              <div className="text-center">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${item.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-purple-100 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}