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
    <main>
      {/* Hero Section */}
      <Section className='pt-32 pb-12 relative overflow-hidden'>
        <div className='absolute inset-0 bg-white dark:bg-black'></div>

        <Container className='relative z-10'>
          <div className='text-center max-w-4xl mx-auto'>
            {/* Billing Toggle */}
            <div className='flex justify-center mb-12'>
              <div className='inline-flex bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700'>
                <button
                  onClick={() => setActiveTab('monthly')}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === 'monthly'
                      ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  {t('tabs.monthly')}
                </button>
                <button
                  onClick={() => setActiveTab('yearly')}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === 'yearly'
                      ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  {t('tabs.yearly')}
                  <span className='ml-2 bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 text-white px-2 py-1 rounded-full text-xs'>
                    {t('tabs.save')}
                  </span>
                </button>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight'>
              {t('hero.title.part1')}{' '}
              <span className='bg-gradient-to-r from-gray-800 via-gray-500 to-gray-700 dark:from-gray-200 dark:via-gray-500 dark:to-gray-800 bg-clip-text text-transparent font-extrabold'>
                {t('hero.title.highlight')}
              </span>
            </h1>

            <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed'>
              {t('hero.subtitle.part1')}{' '}
              <span className='relative'>
                <span className='text-gray-600 dark:text-gray-300 font-bold'>
                  {t('hero.subtitle.part2')}{' '}
                  <span className='text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 bg-clip-text text-transparent font-extrabold drop-shadow-sm'>
                    {isClient
                      ? activeTab === 'yearly'
                        ? t('hero.price.yearly')
                        : t('hero.price.monthly')
                      : t('hero.price.yearly')}
                  </span>{' '}
                  {t('hero.subtitle.part3')}
                </span>
                <span className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 transform -skew-x-12'></span>
              </span>
            </p>

            <p className='text-lg text-gray-600 dark:text-gray-300 mb-12'>
              {t('hero.subtitle.part4')}
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-6 justify-center mb-16'>
              <div className='p-1 bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 rounded-full hover:scale-[1.02] transition-all duration-200'>
                <Button
                  size='lg'
                  className='flex items-center gap-3 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-full hover:scale-[1.0]'
                >
                  <i className='ri-rocket-fill text-2xl bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 bg-clip-text text-transparent'></i>
                  {t('hero.cta.primary')}
                </Button>
              </div>
              <Button
                variant='outline'
                size='lg'
                className='flex items-center gap-3 bg-white dark:bg-slate-900/90 border-2 border-gray-600 dark:border-white text-gray-700 hover:text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 dark:hover:text-gray-200 hover:border-gray-800 dark:hover:border-gray-300 transition-all hover:scale-[1.05] duration-200 text-lg px-8 py-4'
              >
                <i className='ri-phone-fill text-xl'></i>
                {t('hero.cta.secondary')}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section className='py-16 bg-gray-50 dark:bg-gray-950 relative overflow-hidden'>
        <Container className='relative z-10'>
          <div className='max-w-6xl mx-auto'>
            {/* Features Box */}
            <AnimatedCard delay={100} direction='up'>
              <div className='bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border border-gray-200 dark:border-gray-700 relative overflow-hidden'>
                <div className='relative'>
                  <div className='flex items-center justify-between mb-8'>
                    <div>
                      <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>
                        {t('features.title')}
                      </h2>
                      <p className='text-lg text-gray-600 dark:text-gray-300'>
                        {t('features.subtitle')}
                      </p>
                    </div>
                    <div className='bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg'>
                      {t('features.badge')}
                    </div>
                  </div>

                  <div className='grid md:grid-cols-2 gap-6'>
                    {t
                      .raw('features.items')
                      .map((feature: string, index: number) => (
                        <div key={index} className='flex items-center'>
                          <div className='w-2 h-2 bg-black dark:bg-white rounded-full mr-3'></div>
                          <span className='text-gray-700 dark:text-gray-300'>
                            {feature}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* Simple Pricing Badge */}
            <AnimatedCard delay={200} direction='up'>
              <div className='text-center mb-16'>
                <div className='inline-block bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full mb-6 text-base font-semibold shadow-lg'>
                  {t('plan.badge')}
                </div>
                <h3 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                  {t('plan.title')}
                </h3>
                <p className='text-lg text-gray-600 dark:text-gray-300'>
                  {t('plan.subtitle')}
                </p>
              </div>
            </AnimatedCard>

            {/* Feature Grid */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16 auto-rows-fr'>
              {t.raw('plan.features').map((feature: string, index: number) => (
                <AnimatedCard
                  key={index}
                  delay={index * 30 + 100}
                  direction='up'
                  className='h-full'
                >
                  <div className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center relative hover:shadow-md transition-shadow duration-300 h-full flex flex-col justify-between min-h-[120px]'>
                    <div className='flex flex-col items-center'>
                      <div className='w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-3 flex-shrink-0'>
                        <span className='text-white dark:text-black font-bold text-sm'>
                          ✓
                        </span>
                      </div>
                      <div className='text-sm font-medium text-gray-900 dark:text-white leading-relaxed flex-grow flex items-center'>
                        {feature}
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Customer Feedback Section */}
      <Section className='py-16 bg-white dark:bg-black text-gray-900 dark:text-white relative overflow-hidden'>
        <Container className='relative z-10'>
          <div className='max-w-6xl mx-auto'>
            <AnimatedCard delay={100} direction='up'>
              <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12'>
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
                    <div className='bg-white/90 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl px-4 py-3 text-sm text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1 whitespace-nowrap'>
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
                        <div className='bg-white/90 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-600 overflow-hidden hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-sm'>
                          <button
                            onClick={() => toggleFAQ(index)}
                            className='w-full px-4 sm:px-6 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200'
                          >
                            <div className='flex items-center justify-between'>
                              <h3 className='font-semibold text-gray-800 dark:text-gray-200 pr-4 text-sm sm:text-base'>
                                {faq.question}
                              </h3>
                              <span className='text-gray-600 dark:text-gray-400 text-xl transition-all duration-300'>
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
                            <div className='px-4 sm:px-6 py-4 border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50'>
                              <p className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed'>
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
                <div className='p-1 bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 rounded-full hover:scale-[1.02] transition-all duration-200'>
                  <Button
                    size='lg'
                    className='flex items-center gap-3 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-full hover:scale-[1.0]'
                  >
                    <i className='ri-play-fill text-2xl bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 dark:from-yellow-400 dark:via-orange-300 dark:to-red-400 bg-clip-text text-transparent'></i>
                    {t('faq.cta')}
                  </Button>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className='py-16 bg-gray-50 dark:bg-gray-950 relative overflow-hidden'>
        <Container className='relative z-10'>
          <div className='max-w-6xl mx-auto'>
            <AnimatedCard delay={200} direction='up'>
              <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12'>
                Don&apos;t just take our word for it
              </h2>
            </AnimatedCard>

            <Testimonials />
          </div>
        </Container>
      </Section>

      {/* Support Section */}
      <Section className='py-16 bg-white dark:bg-black relative overflow-hidden'>
        <Container className='relative z-10'>
          <AnimatedCard delay={200} direction='up'>
            <div className='text-center max-w-4xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white'>
                We&apos;re Here to{' '}
                <span className='text-black dark:text-white font-extrabold'>
                  Support You
                </span>
              </h2>
              <p className='text-xl text-gray-700 dark:text-gray-300 leading-relaxed'>
                {t('support.description')}
              </p>
            </div>
          </AnimatedCard>
        </Container>
      </Section>
    </main>
  )
}
