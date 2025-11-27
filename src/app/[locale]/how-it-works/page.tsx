"use client";

import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { EXTERNAL_LINKS, ROUTES } from "@/config/links";
import { Link } from "@/i18n/navigation";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#FDF6E9] overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* How It Works Steps */}
      <StepsSection />
      
      {/* Call to Action */}
      <CtaSection />
    </main>
  );
}

function HeroSection() {
  const t = useTranslations('howItWorks');
  
  return (
    <section className="bg-[#FDF6E9] pt-32">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-['Poppins',sans-serif] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#111111] mb-6">
            {t('hero.title')}
          </h1>
        </div>
      </Container>
    </section>
  );
}

function StepsSection() {
  const t = useTranslations('howItWorks');
  
  const steps = [
    {
      number: 1,
      title: t('steps.capture.title'),
      description: t('steps.capture.description'),
      image: '/images/How_it_works_1.png',
      imageAlt: t('steps.capture.imageAlt')
    },
    {
      number: 2,
      title: t('steps.verify.title'),
      description: t('steps.verify.description'),
      image: '/images/How_it_works_2.png',
      imageAlt: t('steps.verify.imageAlt')
    },
    {
      number: 3,
      title: t('steps.report.title'),
      description: t('steps.report.description'),
      image: '/images/How_it_works_3.png',
      imageAlt: t('steps.report.imageAlt')
    },
    {
      number: 4,
      title: t('steps.improve.title'),
      description: t('steps.improve.description'),
      image: '/images/How_it_works_4.png',
      imageAlt: t('steps.improve.imageAlt')
    }
  ];

  return (
    <section className="bg-[#FDF6E9] py-16 lg:py-24">
      <Container>
        <div className="space-y-24 lg:space-y-32">
          {steps.map((step, index) => (
            <div key={step.number} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#1A7D3D] text-white font-bold text-xl rounded-full">
                    {step.number}
                  </div>
                  {/* <span className="text-[#1A7D3D] font-medium text-base md:text-lg">
                    {t('steps.badge')} {step.number}
                  </span> */}
                </div>
                
                <h2 className="font-['Poppins',sans-serif] text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight">
                  {step.title}
                </h2>
                
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    width={400}
                    height={600}
                    className="w-full h-auto object-contain"
                    priority={index < 2}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CtaSection() {
  const t = useTranslations('howItWorks');
  
  return (
    <section className="bg-[#FDF6E9] py-16 lg:py-24">
      <Container>
        <div className="text-center max-w-4xl mx-auto space-y-2">
          <h2 className="font-['Poppins',sans-serif] text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight">
            {t('cta.title')}
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {t('cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-6">
            <a
              href={EXTERNAL_LINKS.register}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#1A7D3D] text-white font-medium rounded-full px-8 py-4 text-base md:text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:bg-[#166534]"
            >
              <i className="fa-solid fa-play text-sm mr-3"></i>
              {t('cta.primary')}
            </a>
            
            <Link
              href={ROUTES.bookDemo}
              className="flex items-center border-2 border-[#1A7D3D] text-[#1A7D3D] font-medium rounded-full px-8 py-4 text-base md:text-lg transition-all hover:bg-[#1A7D3D]/5"
            >
              <i className="fa-solid fa-calendar text-sm mr-3"></i>
              {t('cta.secondary')}
            </Link>
          </div>

          {/* Store icons (image-only, enhanced) */}
          <TooltipProvider>
            <div className="flex flex-col items-center justify-center pt-5">
              <span className="text-sm text-gray-600">Available on</span>
              <div className="flex items-center justify-center gap-5 pt-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://apps.apple.com/us/app/pulse-audits-inspections/id1533113519"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download on the App Store"
                    className="group inline-flex h-14 w-14 items-center justify-center rounded-full bg-white border border-black/10 shadow-sm transition-colors duration-200 hover:border-[#1A7D3D] focus:outline-none focus:ring-2 focus:ring-[#1A7D3D]/30"
                  >
                      <Image src="/images/icons/apple.svg" alt="App Store" width={28} height={28} className="opacity-90 group-hover:opacity-100" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top" className="text-sm">
                  App Store
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.innovative.pulsepro"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get it on Google Play"
                    className="group inline-flex h-14 w-14 items-center justify-center rounded-full bg-white border border-black/10 shadow-sm transition-colors duration-200 hover:border-[#1A7D3D] focus:outline-none focus:ring-2 focus:ring-[#1A7D3D]/30"
                  >
                      <Image src="/images/icons/google-play.svg" alt="Google Play" width={28} height={28} className="opacity-90 group-hover:opacity-100" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top" className="text-sm">
                  Google Play
                </TooltipContent>
              </Tooltip>
              </div>
            </div>
          </TooltipProvider>
        </div>
      </Container>
    </section>
  );
}
