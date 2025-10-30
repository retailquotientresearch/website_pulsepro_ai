'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Testimonials from '@/components/Testimonials'
import { AnimatedCard } from '@/components/ui/AnimatedCard'

export default function PricingPage() {
  const t = useTranslations('pricing')
  const [activeTab, setActiveTab] = useState('yearly')
  const [expandedFAQs, setExpandedFAQs] = useState<Set<number>>(new Set())
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const toggleFAQ = (index: number) => {
    const newExpandedFAQs = new Set(expandedFAQs)
    if (newExpandedFAQs.has(index)) {
      newExpandedFAQs.delete(index)
    } else {
      newExpandedFAQs.add(index)
    }
    setExpandedFAQs(newExpandedFAQs)
  }

  return (
    <main className='bg-[#FDF6E9]'>
      {/* Hero Section */}
      <Section className='bg-[#FDF6E9] pt-24 pb-12'>
        <Container>
          <div className='text-center max-w-4xl mx-auto'>
            {/* Billing Toggle */}
            <div className='flex justify-center mb-10'>
              <div className='inline-flex bg-white p-1.5 rounded-full shadow-lg border border-green-200'>
                <button
                  onClick={() => setActiveTab('monthly')}
                  className={`px-7 py-2.5 rounded-full font-semibold transition-all duration-200 ${
                    activeTab === 'monthly'
                      ? 'text-white shadow-md'
                      : 'hover:bg-green-50'
                  }`}
                  style={{
                    backgroundColor: activeTab === 'monthly' ? 'var(--brand-green)' : 'transparent',
                    color: activeTab === 'monthly' ? 'white' : 'var(--brand-green)'
                  }}
                >
                  {t('tabs.monthly')}
                </button>
                <button
                  onClick={() => setActiveTab('yearly')}
                  className={`px-7 py-2.5 rounded-full font-semibold transition-all duration-200 ${
                    activeTab === 'yearly'
                      ? 'text-white shadow-md'
                      : 'hover:bg-green-50'
                  }`}
                  style={{
                    backgroundColor: activeTab === 'yearly' ? 'var(--brand-green)' : 'transparent',
                    color: activeTab === 'yearly' ? 'white' : 'var(--brand-green)'
                  }}
                >
                  {t('tabs.yearly')}
                  <span className='ml-2 text-white px-2 py-0.5 rounded-full text-xs' style={{ backgroundColor: 'var(--brand-green)' }}>
                    {t('tabs.save')}
                  </span>
                </button>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight'>
              {t('hero.title.part1')}{' '}
              <span className='font-extrabold' style={{ color: 'var(--brand-green)' }}>
                {t('hero.title.highlight')}
              </span>
            </h1>

            <p className='text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed'>
              {t('hero.subtitle.part1')}{' '}
              <span className='relative inline-block'>
                <span className='text-gray-900 font-bold'>
                  {t('hero.subtitle.part2')}{' '}
                  <span className='text-4xl md:text-5xl lg:text-6xl font-extrabold' style={{ color: 'var(--brand-green)' }}>
                    {isClient
                      ? activeTab === 'yearly'
                        ? t('hero.price.yearly')
                        : t('hero.price.monthly')
                      : t('hero.price.yearly')}
                  </span>{' '}
                  {t('hero.subtitle.part3')}
                </span>
                <span className='absolute bottom-0 left-0 w-full h-1 -skew-x-12' style={{ backgroundColor: 'var(--brand-green)' }}></span>
              </span>
            </p>

            <p className='text-lg text-gray-600 mb-10'>
              {t('hero.subtitle.part4')}
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
              <a href="https://ng-app.pulsepro.ai/register" target="_blank" rel="noopener noreferrer">
                <Button
                  size='lg'
                  className='flex items-center gap-3 text-white rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 w-full'
                  style={{ backgroundColor: 'var(--brand-green)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-green-600)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-green)'}
                >
                  <i className='ri-rocket-fill text-2xl'></i>
                  {t('hero.cta.primary')}
                </Button>
              </a>
              <a href="https://www.pulsepro.ai/how-it-works/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant='outline'
                  size='lg'
                  className='flex items-center gap-3 bg-white border-2 rounded-full px-8 py-4 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-green-50 w-full'
                  style={{ 
                    borderColor: 'var(--brand-green)',
                    color: 'var(--brand-green)'
                  }}
                >
                  <i className='ri-phone-fill text-xl'></i>
                  {t('hero.cta.secondary')}
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section className='py-16 bg-[#FDF6E9]'>
        <Container>
          <div className='max-w-6xl mx-auto'>
            {/* Features Box */}
            <AnimatedCard delay={100} direction='up'>
              <div className='bg-white rounded-3xl shadow-xl p-6 md:p-8 lg:p-10 mb-16 border border-green-200'>
                <div className='flex flex-col lg:flex-row gap-8 items-start'>
                  {/* Left: Plan Details */}
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-4'>
                      <span className='text-white px-3 py-1 rounded-full text-xs font-semibold' style={{ backgroundColor: 'var(--brand-green)' }}>
                        {t('features.badge')}
                      </span>
                      <span className='text-xs font-medium border rounded-full px-3 py-1' style={{ color: 'var(--brand-green)', borderColor: 'var(--brand-green-300)' }}>Most Popular</span>
                    </div>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>
                      {t('features.title')}
                    </h2>
                    <p className='text-gray-600 mb-6'>
                      {t('features.subtitle')}
                    </p>

                    {/* Price */}
                    <div className='flex flex-wrap items-end gap-x-3 gap-y-2 mb-6'>
                      <span className='text-5xl md:text-6xl font-extrabold tracking-tight' style={{ color: 'var(--brand-green)' }}>
                        {isClient
                          ? activeTab === 'yearly'
                            ? t('hero.price.yearly')
                            : t('hero.price.monthly')
                          : t('hero.price.yearly')}
                      </span>
                      <span className='text-gray-500 font-medium'>per user</span>
                      <span className='text-sm font-semibold rounded-full px-2 py-1 border' style={{ color: 'var(--brand-green)', borderColor: 'var(--brand-green-300)' }}>
                        {activeTab === 'yearly' ? 'Billed Yearly' : 'Billed Monthly'}
                      </span>
                    </div>

                    {/* CTAs */}
                    <div className='flex flex-col sm:flex-row gap-3 mb-6'>
                      <a href="https://ng-app.pulsepro.ai/register" target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button
                          size='lg'
                          className='text-white rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 w-full justify-center'
                          style={{ backgroundColor: 'var(--brand-green)' }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-green-600)'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-green)'}
                        >
                          <i className='ri-rocket-fill text-xl'></i>
                          {t('hero.cta.primary')}
                        </Button>
                      </a>
                      <a href="https://www.pulsepro.ai/how-it-works/" target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button
                          variant='outline'
                          size='lg'
                          className='bg-white border-2 rounded-full px-8 py-4 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 hover:bg-green-50 w-full justify-center'
                          style={{ borderColor: 'var(--brand-green)', color: 'var(--brand-green)' }}
                        >
                          <i className='ri-phone-fill text-xl'></i>
                          {t('hero.cta.secondary')}
                        </Button>
                      </a>
                    </div>

                    {/* Quick perks */}
                    <div className='grid sm:grid-cols-2 gap-4'>
                      {t
                        .raw('features.items')
                        .map((feature: string, index: number) => (
                          <div key={index} className='flex items-start gap-3'>
                            <span className='inline-flex w-6 h-6 items-center justify-center rounded-full flex-shrink-0' style={{ backgroundColor: 'var(--brand-green-100)', color: 'var(--brand-green)' }}>
                              <i className='ri-check-line text-base'></i>
                            </span>
                            <span className='text-gray-700 text-sm'>
                              {feature}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Right: Plan Highlight Card */}
                  <div className='w-full lg:max-w-sm'>
                    <div className='rounded-2xl border border-green-200 bg-white p-6 shadow-sm'>
                      <h3 className='text-xl font-bold text-gray-900 mb-2'>What you get</h3>
                      <ul className='space-y-3 text-sm'>
                        {t
                          .raw('plan.features')
                          .slice(0, 6)
                          .map((f: string, i: number) => (
                            <li key={i} className='flex items-start gap-2'>
                              <i className='ri-checkbox-circle-fill mt-0.5' style={{ color: 'var(--brand-green)' }}></i>
                              <span className='text-gray-700'>{f}</span>
                            </li>
                          ))}
                      </ul>
                      <div className='mt-6 text-xs text-gray-500'>
                        And everything else in Pulse Pro.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* Simple Pricing Badge */}
            <AnimatedCard delay={200} direction='up'>
              <div className='text-center mb-16'>
                <div className='inline-block text-white px-6 py-3 rounded-full mb-6 text-base font-semibold shadow-lg' style={{ backgroundColor: 'var(--brand-green)' }}>
                  {t('plan.badge')}
                </div>
                <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  {t('plan.title')}
                </h3>
                <p className='text-lg text-gray-600'>
                  {t('plan.subtitle')}
                </p>
              </div>
            </AnimatedCard>

            {/* Feature Grid */}
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16'>
              {t.raw('plan.features').map((feature: string, index: number) => {
                // Define icons for different features
                const getFeatureIcon = (feature: string, index: number) => {
                  const lowerFeature = feature.toLowerCase();
                  if (lowerFeature.includes('unlimited data') || lowerFeature.includes('storage')) return 'ri-database-2-fill';
                  if (lowerFeature.includes('offline')) return 'ri-wifi-off-fill';
                  if (lowerFeature.includes('geo') || lowerFeature.includes('fencing')) return 'ri-map-pin-fill';
                  if (lowerFeature.includes('incident') || lowerFeature.includes('reporting')) return 'ri-alarm-warning-fill';
                  if (lowerFeature.includes('api')) return 'ri-code-s-slash-fill';
                  if (lowerFeature.includes('alert') || lowerFeature.includes('missed')) return 'ri-notification-3-fill';
                  if (lowerFeature.includes('ticket') || lowerFeature.includes('compliance')) return 'ri-ticket-2-fill';
                  if (lowerFeature.includes('custom') || lowerFeature.includes('report')) return 'ri-file-chart-fill';
                  if (lowerFeature.includes('analytics') || lowerFeature.includes('business')) return 'ri-line-chart-fill';
                  if (lowerFeature.includes('image') || lowerFeature.includes('upload')) return 'ri-image-fill';
                  if (lowerFeature.includes('export') || lowerFeature.includes('data export')) return 'ri-download-cloud-fill';
                  return 'ri-check-fill';
                };

                // Define gradient colors for variety
                const gradients = [
                  'from-green-400 to-green-600',
                  'from-blue-400 to-blue-600', 
                  'from-purple-400 to-purple-600',
                  'from-orange-400 to-orange-600',
                  'from-teal-400 to-teal-600',
                  'from-pink-400 to-pink-600',
                  'from-indigo-400 to-indigo-600',
                  'from-red-400 to-red-600'
                ];

                // Define asymmetric grid patterns - different sizes for visual interest
                const getCardSpan = (index: number) => {
                  const patterns = [
                    'col-span-2 row-span-2', // Large card
                    'col-span-1 row-span-1', // Regular card
                    'col-span-1 row-span-2', // Tall card
                    'col-span-2 row-span-1', // Wide card
                    'col-span-1 row-span-1', // Regular card
                    'col-span-1 row-span-1', // Regular card
                    'col-span-2 row-span-1', // Wide card
                    'col-span-1 row-span-2', // Tall card
                    'col-span-1 row-span-1', // Regular card
                    'col-span-2 row-span-2', // Large card
                    'col-span-1 row-span-1', // Regular card
                    'col-span-1 row-span-1'  // Regular card
                  ];
                  return patterns[index % patterns.length];
                };

                // Different padding based on card size
                const getPadding = (index: number) => {
                  const spanClass = getCardSpan(index);
                  if (spanClass.includes('row-span-2') && spanClass.includes('col-span-2')) return 'p-8'; // Large cards
                  if (spanClass.includes('row-span-2') || spanClass.includes('col-span-2')) return 'p-6'; // Medium cards
                  return 'p-4'; // Small cards
                };

                // Different icon sizes
                const getIconSize = (index: number) => {
                  const spanClass = getCardSpan(index);
                  if (spanClass.includes('row-span-2') && spanClass.includes('col-span-2')) return 'w-16 h-16 text-2xl'; // Large cards
                  if (spanClass.includes('row-span-2') || spanClass.includes('col-span-2')) return 'w-14 h-14 text-xl'; // Medium cards
                  return 'w-12 h-12 text-lg'; // Small cards
                };

                // Different text sizes
                const getTextSize = (index: number) => {
                  const spanClass = getCardSpan(index);
                  if (spanClass.includes('row-span-2') && spanClass.includes('col-span-2')) return 'text-lg font-bold'; // Large cards
                  if (spanClass.includes('row-span-2') || spanClass.includes('col-span-2')) return 'text-base font-semibold'; // Medium cards
                  return 'text-sm font-semibold'; // Small cards
                };

                return (
                  <AnimatedCard
                    key={index}
                    delay={index * 50 + 100}
                    direction='up'
                    className={`h-full ${getCardSpan(index)}`}
                  >
                    <div className={`bg-white rounded-2xl ${getPadding(index)} shadow-lg border border-green-200 text-center relative hover:shadow-xl hover:border-green-300 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col justify-center group overflow-hidden`}>
                      {/* Background decoration */}
                      <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-50 to-green-100 rounded-full -translate-y-8 translate-x-8 opacity-50 group-hover:scale-150 transition-transform duration-500'></div>
                      <div className='absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-green-50 to-green-100 rounded-full translate-y-6 -translate-x-6 opacity-30 group-hover:scale-125 transition-transform duration-500'></div>
                      
                      <div className='flex flex-col items-center relative z-10 space-y-3'>
                        <div className={`${getIconSize(index)} bg-gradient-to-br ${gradients[index % gradients.length]} rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          <i className={`${getFeatureIcon(feature, index)}`}></i>
                        </div>
                        <div className={`${getTextSize(index)} text-gray-900 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-center`}>
                          {feature}
                        </div>
                        
                        {/* Subtle shine effect */}
                        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-all duration-700'></div>
                      </div>
                    </div>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Customer Feedback Section */}
      <Section className='py-16 bg-[#FDF6E9]'>
        <Container>
          <div className='max-w-6xl mx-auto'>
            <AnimatedCard delay={100} direction='up'>
      <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
                {t('feedback.title')}
              </h2>
            </AnimatedCard>

            <div className='flex flex-wrap justify-center gap-3 mb-16'>
              {t
                .raw('feedback.items')
                .map((feedback: string, index: number) => (
                  <AnimatedCard
                    key={index}
                    delay={index * 20 + 100}
                    direction='up'
                  >
                    <div className='bg-white rounded-2xl px-4 py-3 text-sm text-gray-900 border border-green-200 hover:bg-green-50 hover:border-green-300 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1 whitespace-nowrap'>
                      {feedback}
                    </div>
                  </AnimatedCard>
                ))}
            </div>

            {/* FAQ Section */}
            <div className='space-y-4 mb-12'>
              {t
                .raw('faq.items')
                .map(
                  (
                    faq: { question: string; answer: string },
                    index: number
                  ) => {
                    const isExpanded = expandedFAQs.has(index)
                    return (
                      <AnimatedCard
                        key={index}
                        delay={index * 50 + 100}
                        direction='up'
                      >
                        <div className='bg-white rounded-xl border border-green-200 overflow-hidden hover:bg-green-50 hover:border-green-300 transition-all duration-300 shadow-sm hover:shadow-md'>
                          <button
                            onClick={() => toggleFAQ(index)}
                            className='w-full px-4 sm:px-6 py-4 text-left hover:bg-green-50 transition-all duration-200'
                          >
                            <div className='flex items-center justify-between'>
                              <h3 className='font-semibold text-gray-900 pr-4 text-sm sm:text-base'>
                                {faq.question}
                              </h3>
                              <span className='text-xl transition-all duration-300' style={{ color: 'var(--brand-green)' }}>
                                {isExpanded ? '−' : '+'}
                              </span>
                            </div>
                          </button>
                          <div
                            className='overflow-hidden transition-all duration-300 ease-in-out'
                            style={{
                              maxHeight: isExpanded ? '200px' : '0px'
                            }}
                          >
                            <div className='px-4 sm:px-6 py-4 border-t border-green-200 bg-white'>
                              <p className='text-gray-700 text-sm leading-relaxed'>
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </AnimatedCard>
                    )
                  }
                )}
            </div>

            <AnimatedCard delay={200} direction='up'>
              <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-8'>
                <a href="https://www.pulsepro.ai/how-it-works/" target="_blank" rel="noopener noreferrer">
                  <Button
                    size='lg'
                    className='flex items-center gap-3 text-white rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300'
                    style={{ backgroundColor: 'var(--brand-green)' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-green-600)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-green)'}
                  >
                    <i className='ri-play-fill text-2xl'></i>
                    {t('faq.cta')}
                  </Button>
                </a>
              </div>
            </AnimatedCard>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
  <Section className='py-16 bg-[#FDF6E9]'>
    <Container>
          <div className='max-w-6xl mx-auto'>
            <AnimatedCard delay={200} direction='up'>
      <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
                Don&apos;t just take our word for it
              </h2>
            </AnimatedCard>

            <Testimonials />
          </div>
        </Container>
      </Section>

      {/* Support Section */}
      <Section className='py-16 bg-[#FDF6E9]'>
        <Container>
          <AnimatedCard delay={200} direction='up'>
            <div className='text-center max-w-4xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900'>
                We&apos;re Here to <span style={{ color: 'var(--brand-green)' }}>Support You</span>
              </h2>
              <p className='text-xl text-gray-600 leading-relaxed'>
                {t('support.description')}
              </p>
            </div>
          </AnimatedCard>
        </Container>
      </Section>
    </main>
  )
}
