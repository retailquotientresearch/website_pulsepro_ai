import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Image from 'next/image'

interface CustomIllustration {
  mainIcon: string
  topRightIcon: string
  bottomLeftIcon: string
}

interface HeroSectionProps {
  title: string
  subtitle?: string
  imageSrc?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  customIllustration?: CustomIllustration
}

export default function HeroSection({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  imageWidth = 500,
  imageHeight = 400,
  customIllustration
}: HeroSectionProps) {
  // Ensure we always provide an alt text; fall back to title if none supplied
  const effectiveAlt = imageAlt || title;
  return (
    <Section className='pt-32 pb-16 relative overflow-hidden'>
      {/* Background matching the landing page design */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-200 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900'></div>

      <Container className='relative z-10'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* Left side - Content */}
          <div className='text-center lg:text-left'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight'>
              {title}
            </h1>
            {subtitle && (
              <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed'>
                {subtitle}
              </p>
            )}
          </div>

          {/* Right side - Illustration */}
          <div className='flex justify-center lg:justify-end order-first lg:order-last'>
            <div className='relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[5/4]'>
              {customIllustration ? (
                <div className='w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl flex items-center justify-center shadow-xl'>
                  <div className='relative'>
                    <div className='w-32 h-32 bg-gradient-to-br from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600 rounded-2xl flex items-center justify-center mb-4'>
                      <i
                        className={`${customIllustration.mainIcon} text-5xl text-white dark:text-gray-800`}
                      ></i>
                    </div>
                    <div className='absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-700 dark:from-gray-300 dark:to-gray-500 rounded-full flex items-center justify-center'>
                      <i
                        className={`${customIllustration.topRightIcon} text-lg text-white dark:text-gray-800`}
                      ></i>
                    </div>
                    <div className='absolute -bottom-3 -left-3 w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-700 rounded-full flex items-center justify-center'>
                      <i
                        className={`${customIllustration.bottomLeftIcon} text-base text-white dark:text-gray-200`}
                      ></i>
                    </div>
                  </div>
                </div>
              ) : (
                <Image
                  src={imageSrc!}
                  alt={effectiveAlt}
                  width={imageWidth}
                  height={imageHeight}
                  className='w-full h-full object-contain'
                  priority
                  loading='eager'
                  sizes='(max-width: 640px) 384px, (max-width: 768px) 448px, 512px'
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
