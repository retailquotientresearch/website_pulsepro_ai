"use client";

import React, { useState, useEffect } from 'react';
import { EXTERNAL_LINKS, ROUTES } from '@/config/links';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const [isClient, setIsClient] = useState(false);
  const t = useTranslations('hero');
  const tNav = useTranslations('navigation');

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
  <section className="bg-[#FDF6E9] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mt-10">
        
        {/* Hero Content - Single Column (Left section only) */}
        <div className="py-8 lg:py-0 flex items-center">
          
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* <div className="flex items-center space-x-3">
              {isClient ? (
                <i className="fa-solid fa-crosshairs text-[#1A7D3D] text-2xl lg:text-4xl"></i>
              ) : (
                <div className="w-6 h-6 lg:w-10 lg:h-10 bg-[#1A7D3D] rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 lg:w-5 lg:h-5 border-2 border-white rounded-full"></div>
                </div>
              )}
              <span className="text-[#1A7D3D] font-medium text-sm lg:text-lg">{t('tagline')}</span>
            </div> */}

            <div>
              <h1 className="font-['Poppins',sans-serif] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="text-[#111111]">{t('title.part1')}</span>
                <br />
                <span className="text-[#111111]">{t('title.part2')}</span>
                <br />
                <span className="text-[#1A7D3D]">{t('title.highlight')}</span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6">
              <a
                href={EXTERNAL_LINKS.register}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-[#1A7D3D] text-white font-medium rounded-full px-6 lg:px-8 py-2.5 lg:py-4 text-base md:text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:bg-[#166534]"
              >
                {isClient ? (
                  <i className="fa-solid fa-play text-xs lg:text-sm mr-2 lg:mr-3"></i>
                ) : (
                  <span className="w-0 h-0 border-l-[6px] lg:border-l-[8px] border-l-white border-t-[4px] lg:border-t-[5px] border-t-transparent border-b-[4px] lg:border-b-[5px] border-b-transparent mr-2 lg:mr-3"></span>
                )}
                {tNav('getStarted')}
              </a>
              <Link
                href={ROUTES.bookDemo}
                className="flex items-center border-2 border-[#1A7D3D] text-[#1A7D3D] font-medium rounded-full px-6 lg:px-8 py-2.5 lg:py-4 text-base md:text-lg transition-all hover:bg-[#1A7D3D]/5"
              >
                {isClient ? (
                  <i className="fa-solid fa-calendar text-xs lg:text-sm mr-2 lg:mr-3"></i>
                ) : (
                  <span className="w-3 h-3 lg:w-4 lg:h-4 bg-[#1A7D3D] rounded-sm mr-2 lg:mr-3"></span>
                )}
                {t('secondaryCta')}
              </Link>
            </div>

            {/* Stats - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:flex items-center space-x-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-xl md:text-2xl font-bold text-[#1A7D3D]">{t('stats.sitesManaged.value')}</div>
                <div className="text-sm md:text-base text-gray-500">{t('stats.sitesManaged.label')}</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-[#1A7D3D]">{t('stats.uptime.value')}</div>
                <div className="text-sm md:text-base text-gray-500">{t('stats.uptime.label')}</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-[#1A7D3D]">{t('stats.support.value')}</div>
                <div className="text-sm md:text-base text-gray-500">{t('stats.support.label')}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
