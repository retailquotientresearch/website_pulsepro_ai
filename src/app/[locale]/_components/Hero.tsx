"use client";

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const [isClient, setIsClient] = useState(false);
  const t = useTranslations('hero');

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
  <section className="bg-[#FDF6E9] pt-20 pb-12 md:pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-120px)] py-8 lg:py-0">
          
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="flex items-center space-x-3">
              {isClient ? (
                <i className="fa-solid fa-crosshairs text-[#1A7D3D] text-2xl lg:text-4xl"></i>
              ) : (
                <div className="w-6 h-6 lg:w-10 lg:h-10 bg-[#1A7D3D] rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 lg:w-5 lg:h-5 border-2 border-white rounded-full"></div>
                </div>
              )}
              <span className="text-[#1A7D3D] font-medium text-sm lg:text-lg">{t('tagline')}</span>
            </div>

            <div>
              <h1 className="font-['Poppins',sans-serif] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-[#111111]">{t('title.part1')}</span>
                <br />
                <span className="text-[#111111]">{t('title.part2')}</span>
                <br />
                <span className="text-[#1A7D3D]">{t('title.highlight')}</span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6">
              <button className="flex items-center bg-[#1A7D3D] text-white font-medium rounded-full px-6 lg:px-8 py-2.5 lg:py-4 text-base lg:text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:bg-[#166534]">
                {isClient ? (
                  <i className="fa-solid fa-play text-xs lg:text-sm mr-2 lg:mr-3"></i>
                ) : (
                  <span className="w-0 h-0 border-l-[6px] lg:border-l-[8px] border-l-white border-t-[4px] lg:border-t-[5px] border-t-transparent border-b-[4px] lg:border-b-[5px] border-b-transparent mr-2 lg:mr-3"></span>
                )}
                {t('cta')}
              </button>
              <button className="flex items-center border-2 border-[#1A7D3D] text-[#1A7D3D] font-medium rounded-full px-6 lg:px-8 py-2.5 lg:py-4 text-base lg:text-lg transition-all hover:bg-[#1A7D3D]/5">
                {isClient ? (
                  <i className="fa-solid fa-calendar text-xs lg:text-sm mr-2 lg:mr-3"></i>
                ) : (
                  <span className="w-3 h-3 lg:w-4 lg:h-4 bg-[#1A7D3D] rounded-sm mr-2 lg:mr-3"></span>
                )}
                {t('secondaryCta')}
              </button>
            </div>

            {/* Stats - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:flex items-center space-x-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-[#1A7D3D]">{t('stats.sitesManaged.value')}</div>
                <div className="text-sm text-gray-500">{t('stats.sitesManaged.label')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#1A7D3D]">{t('stats.uptime.value')}</div>
                <div className="text-sm text-gray-500">{t('stats.uptime.label')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#1A7D3D]">{t('stats.support.value')}</div>
                <div className="text-sm text-gray-500">{t('stats.support.label')}</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10">
              {/* Main visual element */}
              <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-4 lg:p-8 shadow-2xl border border-white/50">
                <div className="aspect-square bg-gradient-to-br from-[#1A7D3D]/20 to-[#1A7D3D]/5 rounded-2xl flex items-center justify-center">
                  {isClient ? (
                    <i className="fa-solid fa-crosshairs text-[#1A7D3D] text-6xl lg:text-8xl opacity-60"></i>
                  ) : (
                    <div className="w-20 h-20 lg:w-32 lg:h-32 bg-[#1A7D3D] opacity-60 rounded-full flex items-center justify-center">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 border-4 lg:border-8 border-white rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-12 h-12 lg:w-20 lg:h-20 bg-[#1A7D3D] rounded-full opacity-80 z-0"></div>
            <div className="absolute -bottom-4 -left-4 lg:-bottom-8 lg:-left-8 w-8 h-8 lg:w-16 lg:h-16 bg-[#1A7D3D]/60 rounded-full z-0"></div>
            <div className="absolute top-1/4 -left-3 lg:-left-6 w-6 h-6 lg:w-12 lg:h-12 bg-[#1A7D3D]/40 rounded-full z-0"></div>
            <div className="absolute bottom-1/3 -right-1 lg:-right-2 w-4 h-4 lg:w-8 lg:h-8 bg-[#1A7D3D]/30 rounded-full z-0"></div>
            
            {/* Grid pattern - hidden on mobile */}
            <div className="hidden lg:block absolute inset-0 opacity-5">
              <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="border border-[#1A7D3D]"></div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
