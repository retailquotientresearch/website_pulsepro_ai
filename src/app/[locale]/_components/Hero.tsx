"use client";

import React, { useState, useEffect } from 'react';
import { EXTERNAL_LINKS, ROUTES } from '@/config/links';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
// import WorkflowDiagram from '@/components/WorkflowDiagram';

export default function Hero() {
  const [isClient, setIsClient] = useState(false);
  const t = useTranslations('hero');
  const tNav = useTranslations('navigation');

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full mt-16 lg:mt-20 scroll-mt-16 lg:scroll-mt-20 pt-12 pb-20 md:pt-24 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:h-[800px]"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start z-10">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          <span className="block text-[#111111]">{t('title.part1')}</span>
          <span className="block text-[#111111]">{t('title.part2')}</span>
          <span className="block text-[#16803C]">{t('title.part3')}</span>
          <span className="block text-[#16803C]">{t('title.part4')}</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href={EXTERNAL_LINKS.register}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#16803C] text-white rounded-full text-lg font-medium hover:bg-green-800 transition-all shadow-xl shadow-green-900/20 min-w-[180px] flex items-center justify-center"
          >
            {isClient ? <i className="fa-solid fa-play text-sm mr-2" /> : null}
            {tNav('getStarted')}
          </a>
          <Link
            href={ROUTES.bookDemo}
            className="px-8 py-4 bg-transparent border border-[#16803C] text-[#16803C] rounded-full text-lg font-medium hover:bg-[#16803C] hover:text-white transition-all min-w-[180px] flex items-center justify-center"
          >
            {isClient ? <i className="fa-solid fa-calendar text-sm mr-2" /> : null}
            {t('secondaryCta')}
          </Link>
        </div>
      </div>

      {/* Right Visual: Workflow Diagram (hidden on mobile) */}
      {/* <div className="hidden md:flex w-full md:w-1/2 relative h-full items-center justify-center">
        <div className="relative w-full max-w-[580px] h-[580px]">
          <WorkflowDiagram />
        </div>
      </div> */}
    </section>
  );
}
