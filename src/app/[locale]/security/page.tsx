'use client'

import HeroSection from '@/components/HeroSection'
import { AnimatedCard } from '@/components/ui/AnimatedCard'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface SecurityContent {
  infrastructure?: {
    title: string
    description: string
  }
  application?: {
    title: string
    description: string
  }
  database?: {
    title: string
    description: string
  }
  networkProtection?: {
    title: string
    description: string
  }
  description?: string
  features?: string[]
  sections?: {
    title: string
    description: string
  }[]
}

export default function SecurityPage() {
  const t = useTranslations('security')
  const [activeSection, setActiveSection] = useState('data-security')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const securitySections: {
    id: string
    icon: string
    title: string
    content: SecurityContent
  }[] = [
    {
      id: 'data-security',
      icon: 'ri-database-2-line',
      title: 'Data Security',
      content: {
        infrastructure: {
          title: 'Infrastructure',
          description:
            "All Pulse services are delivered with a 'layered' approach, ensuring that all areas are secure on any link. While our primary access point does the technical business delivery mechanisms, any impact affecting customer systems are covered by the safeguards that lie at the core of our systems and processes. Attacks are quickly countered by deploying security measures as they are needed for defense-in-depth scenarios."
        },
        application: {
          title: 'Application',
          description:
            'The Pulse application aims to use updated environment and messaging protocols in our AWS environment that result in consistent operational efficiency, security, and performance. AWS practices are implemented to maintain protection for the application and its data through restricted access to the data layers, and centralized data warehouses, as well as have been security-focused business applications from understanding core network architectures.'
        },
        database: {
          title: 'Database',
          description:
            'Pulse implements data in its access controlled AWS RDS Enterprise database outside its application. Customer data is stored in highly available server-side using AWS Prisma architecture, storage security and integrity. Continuous data backups are taken every 24 hours using appropriate. Controls ensure backups are regularly test and all application has.'
        },
        networkProtection: {
          title: 'Network Protection',
          description:
            "All Pulse's services are hosted inside a private virtual network using AWS, which provides comprehensive networking. Pulse's network operates alongside appropriate virtual private networks control security group, communications between servers and instances via firewalls controls and is segregated by controls all network devices in communication rules ensure the firewalls run controls. This technology continues to evolve and add network devices over time as it is network devices. We networks have a firewall in face of the network communications."
        }
      }
    },
    {
      id: 'network-protection',
      icon: 'ri-shield-line',
      title: 'Network Protection',
      content: {
        description:
          "All Pulse's services are hosted inside a private virtual network using AWS, which provides comprehensive networking. Pulse's network operates alongside appropriate virtual private networks control security group, communications between servers and instances via firewalls controls and is segregated by controls all network devices in communication rules ensure the firewalls run controls. This technology continues to evolve and add network devices over time as it is network devices. We networks have a firewall in face of the network communications."
      }
    },
    {
      id: 'penetration-testing',
      icon: 'ri-shield-check-line',
      title: 'Penetration and Vulnerability Testing',
      content: {
        description:
          'Pulse processes are designed to proactively remediate security risks. Pulse is verified of vulnerabilities through ethical and third-party testing from our systems and software gaps are identified. Also, vulnerability assessment is to be designed to identify all your security risk that allow them to get visibility. This privacy debris we or close ot get their data, and ensures systems are displaced with the latest patches, security fixes, and configuration and naming policies as mentioned. Also, issues may be logged including the application to run their feedback. This private debris are or issue is close by developers or all security to.'
      }
    },
    {
      id: 'privacy',
      icon: 'ri-lock-line',
      title: 'Privacy',
      content: {
        description:
          "At Pulse, we take your data and your privacy seriously. We're committed to protecting the privacy of the personal information you provide on our website. Personal data is handled in accordance with our Privacy Policy."
      }
    },
    {
      id: 'best-in-class',
      icon: 'ri-award-line',
      title: 'Best-in-Class Service',
      content: {
        description:
          "At everyone has, it's Pulse, as of this certificate, are expecting this functionality and ensuring that the impact of the available risk and resilient service. Our business risks the highest our incident response ability on our ability to our security and have full responsibility.",
        features: [
          'Our application has 99.99% uptime, the current status of our applications and any past incidents can be seen on our status page.',
          'Our employees follow incident response procedures carefully, and provide timely feedback sessions (and respective tests), to lesson why people and what they are happening in the future.',
          'To report security or privacy issues that affect Pulse or our web services, please contact security@pulsepro.ai.'
        ]
      }
    },
    {
      id: 'vulnerabilities',
      icon: 'ri-bug-line',
      title: 'Common Security Vulnerabilities',
      content: {
        sections: [
          {
            title: 'SQL and Other Injection Techniques',
            description:
              "All communication to our backend databases is conducted via sanitized entries that aren't used to any selected query-string into a business or new threat. Our application uses sanitized output from the database to prevent accidental injection or XSS displayed in subsequent."
          },
          {
            title: 'Cross Site Scripting',
            description:
              'Our security mechanisms are designed to prevent XSS attacks. We continuously run automated security scanning targeting we secure prevention mechanisms targeting our applications.'
          },
          {
            title: 'Authentication / Session Management',
            description:
              'All authentication credentials must be stored in an encrypted manner over SQL, and cookies are only accessible through HTTPS to ensure credentials are not compromised or shared.'
          },
          {
            title: 'Cross-Site Request Forgery',
            description:
              'CSRF attacks are out-of-box for Pulse App. This procedure is audited by an automated scanner that targets the endpoints into or automatic testing that ensures the original requests.'
          },
          {
            title: 'Security Configuration Management',
            description:
              'Pulse uses automated tooling configuration all servers and databases used in production, any changes in configuration as driven by policy through-controlled business process. All system configuration is driven by templates testing to ensure security processes can be audited.'
          },
          {
            title: 'Cryptographic Key Management',
            description:
              'All passwords provided by users are stored as a higher than average work factor that password tech to be hard to do-force from anyone. At the time end a key recovery system are likely to do future where.'
          }
        ]
      }
    }
  ]

  const menuItems = [
    { id: 'data-security', label: 'Data Security', icon: 'ri-database-2-line' },
    {
      id: 'network-protection',
      label: 'Network Protection',
      icon: 'ri-shield-line'
    },
    {
      id: 'penetration-testing',
      label: 'Penetration and Vulnerability Testing',
      icon: 'ri-shield-check-line'
    },
    { id: 'privacy', label: 'Privacy', icon: 'ri-lock-line' },
    {
      id: 'best-in-class',
      label: 'Best-in-Class Service',
      icon: 'ri-award-line'
    },
    {
      id: 'vulnerabilities',
      label: 'Common Security Vulnerabilities',
      icon: 'ri-bug-line'
    }
  ]

  const renderSectionContent = (section: (typeof securitySections)[0]) => {
    switch (section.id) {
      case 'data-security':
        return (
          <div className='space-y-8'>
            {/* Infrastructure Section */}
            <AnimatedCard delay={100} direction='up'>
              <div className='bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700'>
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  {t('infrastructure.title')}
                </h3>

                <div className='space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed'>
                  <p>{t('infrastructure.paragraph1')}</p>

                  <p>{t('infrastructure.paragraph2')}</p>

                  <p className='font-medium text-gray-700 dark:text-gray-200'>
                    {t('infrastructure.accreditedUnder')}
                  </p>

                  {/* Certification Images */}
                  <div className='flex items-center gap-6 py-4'>
                    <div className='w-20 h-20 relative'>
                      <Image
                        src='/images/iso-27001.png'
                        alt='ISO 27001 Certification'
                        width={80}
                        height={80}
                        className='object-contain'
                      />
                    </div>

                    <div className='w-20 h-20 relative'>
                      <Image
                        src='/images/fr-certification.jpeg'
                        alt='FR Certification'
                        width={80}
                        height={80}
                        className='object-contain'
                      />
                    </div>

                    <div className='w-20 h-20 relative'>
                      <Image
                        src='/images/aicpa-soc.jpeg'
                        alt='AICPA SOC Certification'
                        width={80}
                        height={80}
                        className='object-contain'
                      />
                    </div>
                  </div>

                  <p>
                    {t('infrastructure.awsCertifications')}{' '}
                    <a
                      href='https://aws.amazon.com/compliance/programs/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium underline decoration-2 underline-offset-2 transition-colors duration-200'
                    >
                      {t('infrastructure.here')}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </AnimatedCard>

            {/* Application Section */}
            <AnimatedCard delay={200} direction='up'>
              <div className='bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700'>
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  {t('application.title')}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                  {t('application.description')}
                </p>
              </div>
            </AnimatedCard>

            {/* Database Section */}
            <AnimatedCard delay={300} direction='up'>
              <div className='bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700'>
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  {t('database.title')}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                  {t('database.description')}
                </p>
              </div>
            </AnimatedCard>
          </div>
        )

      case 'network-protection':
        return (
          <div className='space-y-8'>
            {/* General Network Protection */}
            <AnimatedCard delay={100} direction='up'>
              <div className='bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700'>
                <div className='space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed'>
                  <p>{t('networkProtection.textOne')}</p>
                  <p>{t('networkProtection.textTwo')}</p>
                  <p>{t('networkProtection.textThree')}</p>
                </div>
              </div>
            </AnimatedCard>

            {/* Logging and Monitoring Section */}
            <AnimatedCard delay={200} direction='up'>
              <div className='bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700'>
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  {t('networkProtection.loggingMonitoring.title')}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                  {t('networkProtection.loggingMonitoring.description')}
                </p>
              </div>
            </AnimatedCard>

            {/* Data Resource Isolation Section */}
            <AnimatedCard delay={300} direction='up'>
              <div className='bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700'>
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  {t('networkProtection.dataResourceIsolation.title')}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                  {t('networkProtection.dataResourceIsolation.description')}
                </p>
              </div>
            </AnimatedCard>

            {/* Service Providers Section */}
            <AnimatedCard delay={400} direction='up'>
              <div className='bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700'>
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  {t('serviceProviders.title')}
                </h3>
                <div className='space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed'>
                  <p>{t('serviceProviders.paragraph1')}</p>
                  <p>{t('serviceProviders.paragraph2')}</p>
                  <p>{t('serviceProviders.paragraph3')}</p>
                </div>
              </div>
            </AnimatedCard>

            {/* Compliance Concerns Section */}
            <AnimatedCard delay={500} direction='up'>
              <div className='bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700'>
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  {t('complianceConcerns.title')}
                </h3>
                <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8'>
                  {t('complianceConcerns.subtitle')}
                </p>

                {/* PCI Compliance Section */}
                <div className='bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 mb-6'>
                  <div className='flex items-start gap-3'>
                    <div className='w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                      <i className='ri-shield-check-line text-white text-sm'></i>
                    </div>
                    <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                      {t('complianceConcerns.pciCompliance.title')}
                    </p>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className='bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800 mb-6'>
                  <div className='flex items-start gap-3'>
                    <div className='w-6 h-6 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                      <i className='ri-information-line text-white text-sm'></i>
                    </div>
                    <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                      {t('complianceConcerns.disclaimer')}
                    </p>
                  </div>
                </div>

                {/* EU Compliance */}
                <div className='bg-green-50 dark:bg-green-950/20 p-6 rounded-xl border border-green-200 dark:border-green-800'>
                  <div className='flex items-start gap-3'>
                    <div className='w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                      <i className='ri-global-line text-white text-sm'></i>
                    </div>
                    <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                      {t('complianceConcerns.euCompliance')}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* Data Access Section */}
            <AnimatedCard delay={600} direction='up'>
              <div className='bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700'>
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  {t('networkProtection.dataAccess.title')}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                  {t('networkProtection.dataAccess.description')}
                </p>
              </div>
            </AnimatedCard>

            {/* Data Security at Rest Section */}
            <AnimatedCard delay={700} direction='up'>
              <div className='bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700'>
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  {t('networkProtection.dataSecurityAtRest.title')}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                  {t('networkProtection.dataSecurityAtRest.description')}
                </p>
              </div>
            </AnimatedCard>

            {/* Data Security in Transit Section */}
            <AnimatedCard delay={800} direction='up'>
              <div className='bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700'>
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  {t('networkProtection.dataSecurityInTransit.title')}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                  {t('networkProtection.dataSecurityInTransit.description')}
                </p>
              </div>
            </AnimatedCard>
          </div>
        )

      case 'vulnerabilities':
        return (
          <div className='space-y-6'>
            {t
              .raw('vulnerabilities.sections')
              .map(
                (
                  vuln: { title: string; description: string },
                  index: number
                ) => (
                  <AnimatedCard
                    key={index}
                    delay={index * 100 + 100}
                    direction='up'
                  >
                    <div className='bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700'>
                      <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>
                        {vuln.title}
                      </h3>
                      <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                        {vuln.description}
                      </p>
                    </div>
                  </AnimatedCard>
                )
              )}
          </div>
        )

      case 'best-in-class':
        return (
          <div className='space-y-6'>
            <AnimatedCard delay={100} direction='up'>
              <div className='bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700'>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed mb-6'>
                  {t('bestInClass.description')}
                </p>
                <div className='space-y-4'>
                  {t
                    .raw('bestInClass.features')
                    .map((feature: string, index: number) => (
                      <div key={index} className='flex items-start gap-3'>
                        <div className='w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                          <i className='ri-check-line text-white text-sm'></i>
                        </div>
                        <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                          {index === 0 ? (
                            <>
                              {feature}{' '}
                              <a
                                href='https://pulsepro.statuspage.io/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-gray-900 dark:text-white underline'
                              >
                                {t('bestInClass.statusPage')}
                              </a>
                              .
                            </>
                          ) : (
                            <>
                              {feature}
                              {index === 3 && (
                                <>
                                  {' '}
                                  <a
                                    href='mailto:security@pulsepro.ai'
                                    className='text-gray-900 dark:text-white underline'
                                  >
                                    security@pulsepro.ai
                                  </a>
                                </>
                              )}
                              .
                            </>
                          )}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </AnimatedCard>
          </div>
        )

      case 'penetration-testing':
        return (
          <AnimatedCard delay={100} direction='up'>
            <div className='bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700'>
              <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                {t('penetrationTesting.description')}
              </p>
            </div>
          </AnimatedCard>
        )

      case 'privacy':
        return (
          <AnimatedCard delay={100} direction='up'>
            <div className='bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700'>
              <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                {t('privacy.description')}{' '}
                <Link
                  href='/privacy-policy'
                  className='text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium underline decoration-2 underline-offset-2 transition-colors duration-200'
                >
                  {t('privacy.privacyPolicyLink')}
                </Link>
                .
              </p>
            </div>
          </AnimatedCard>
        )

      default:
        return (
          <AnimatedCard delay={100} direction='up'>
            <div className='bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700'>
              <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                Content not available
              </p>
            </div>
          </AnimatedCard>
        )
    }
  }

  const getCurrentSection = () => {
    return (
      securitySections.find((section) => section.id === activeSection) ||
      securitySections[0]
    )
  }

  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        customIllustration={{
          mainIcon: 'ri-shield-check-line',
          topRightIcon: 'ri-lock-line',
          bottomLeftIcon: 'ri-secure-payment-line'
        }}
      />

      <Section className='py-12 md:py-16 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black'>
        <Container>
          {/* Main Introduction Text */}
          <div className='mb-8 md:mb-12'>
            <AnimatedCard delay={100} direction='up'>
              <div className='bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm'>
                <div className='prose prose-gray dark:prose-invert max-w-none'>
                  <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6'>
                    {t('intro.paragraph1')}
                  </p>

                  <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6'>
                    {t('intro.paragraph2')}
                  </p>

                  <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>
                    {t('intro.paragraph3')}{' '}
                    <a
                      href='mailto:security@pulsepro.ai'
                      className='text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium underline decoration-2 underline-offset-2 transition-colors duration-200'
                    >
                      security@pulsepro.ai
                    </a>
                    .
                  </p>
                </div>
              </div>
            </AnimatedCard>
          </div>

          <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
            {/* Mobile Menu Toggle */}
            <div className='md:hidden'>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className='w-full flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 mb-4'
              >
                <span className='font-semibold text-gray-900 dark:text-white'>
                  {menuItems.find((item) => item.id === activeSection)?.label}
                </span>
                <i
                  className={`ri-arrow-${
                    isMobileMenuOpen ? 'up' : 'down'
                  }-s-line text-gray-600 dark:text-gray-400`}
                ></i>
              </button>

              {isMobileMenuOpen && (
                <div className='bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 mb-6 sticky top-20 z-10'>
                  <div className='p-2 space-y-1'>
                    {menuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveSection(item.id)
                        }}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 text-left ${
                          activeSection === item.id
                            ? 'bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-100 dark:to-gray-200 text-white dark:text-gray-900'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <i className={`${item.icon} text-lg`}></i>
                        <span className='font-medium'>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Sidebar */}
            <div className='hidden md:block md:w-80 flex-shrink-0'>
              <div className='bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-2'>
                <div className='space-y-1'>
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center gap-3 p-4 rounded-lg transition-all duration-200 text-left ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-100 dark:to-gray-200 text-white dark:text-gray-900'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <i className={`${item.icon} text-xl`}></i>
                      <span className='font-medium'>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className='flex-1'>
              <div className='flex items-start gap-4 mb-8 md:mt-2'>
                <div className='w-12 h-12 min-w-12 min-h-12 flex-shrink-0 md:mt-2 bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 rounded-xl flex items-center justify-center'>
                  <i
                    className={`${
                      getCurrentSection().icon
                    } text-white dark:text-gray-900 text-xl`}
                  ></i>
                </div>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-0 mt-2'>
                  {getCurrentSection().title}
                </h2>
              </div>

              {renderSectionContent(getCurrentSection())}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}
