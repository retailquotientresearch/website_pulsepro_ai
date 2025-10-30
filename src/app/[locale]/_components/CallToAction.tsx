'use client';

import { Check, Play, Calendar } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function CallToAction() {
  const t = useTranslations('callToAction');

  return (
  <section className="pt-12 md:pt-16 lg:pt-20 pb-0 bg-[#FDF6E9]">
      {/* Full-bleed wrapper matching the site's pattern */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="w-full rounded-t-[36px] md:rounded-t-[48px] lg:rounded-t-[64px] overflow-hidden bg-[#2A2A2A] px-4 sm:px-8 lg:px-16 py-20 md:py-24 lg:py-28 relative">
          
          {/* Green accent line at top matching CommonWorries */}
          <div className="absolute top-0 left-[36px] md:left-[48px] lg:left-[64px] right-[36px] md:right-[48px] lg:right-[64px] h-0.5 bg-[#1A7D3D]"></div>
          
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {t('title')}
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                {t('subtitle')}
              </p>
            </div>

            {/* Main content grid */}
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              
              {/* Left side - Benefits */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-[#FDF6E9] p-3 rounded-xl">
                    <Check className="w-6 h-6 text-[#2A2A2A]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t('whatIncluded')}</h3>
                </div>
                
                <div className="space-y-8 flex-1 flex flex-col justify-evenly">
                  {t.raw('features').map((feature: any, index: number) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-[#FDF6E9] rounded-full p-1.5 mt-1 flex-shrink-0">
                        <Check className="w-4 h-4 text-[#2A2A2A]" />
                      </div>
                      <div>
                        <p className="text-white font-semibold mb-1">{feature.title}</p>
                        <p className="text-gray-300 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - CTA */}
              <div className="flex flex-col justify-center">
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 text-center shadow-lg">
                  
                  {/* Pilot badge */}
                  <div className="inline-flex items-center gap-2 bg-[#1A7D3D]/10 border border-[#1A7D3D]/20 rounded-full px-4 py-2 mb-6">
                    <span className="text-sm font-medium text-[#1A7D3D]">{t('pilot.badge')}</span>
                  </div>
                  
                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="text-5xl md:text-6xl font-bold text-[#1A7D3D] mb-2">{t('pilot.price')}</div>
                    <div className="text-gray-600 mb-2">{t('pilot.duration')}</div>
                    <div className="text-sm text-gray-500">{t('pilot.then')}</div>
                  </div>
                  
                  {/* CTA Buttons - matching Hero component */}
                  <div className="space-y-4 mb-6">
                    <a
                      href="https://ng-app.pulsepro.ai/register"
                      className="w-full bg-[#1A7D3D] text-white font-medium rounded-full px-8 py-4 text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:bg-[#166534] flex items-center justify-center gap-3"
                    >
                      <Play className="w-5 h-5" />
                      {t('cta.primary')}
                    </a>
                    
                    <a
                      href="https://www.pulsepro.ai/pulse-watch-demo/"
                      className="w-full border-2 border-[#1A7D3D] text-[#1A7D3D] font-medium rounded-full px-8 py-4 text-lg transition-all hover:bg-[#1A7D3D]/5 flex items-center justify-center gap-3"
                    >
                      <Calendar className="w-5 h-5" />
                      {t('cta.secondary')}
                    </a>
                  </div>
                  
                  <p className="text-xs text-gray-500">
                    {t('pilot.disclaimer')}
                  </p>
                </div>
                
                {/* Stats matching Hero component */}
                <div className="flex items-center justify-center space-x-8 mt-8 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1A7D3D]">{t('stats.sites.value')}</div>
                    <div className="text-sm text-gray-300">{t('stats.sites.label')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1A7D3D]">{t('stats.setup.value')}</div>
                    <div className="text-sm text-gray-300">{t('stats.setup.label')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1A7D3D]">{t('stats.uptime.value')}</div>
                    <div className="text-sm text-gray-300">{t('stats.uptime.label')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}