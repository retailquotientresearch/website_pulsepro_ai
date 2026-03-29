"use client";

import React from 'react';
import CalendlyWidget from '@/components/CalendlyWidget';
import { useTranslations } from 'next-intl';

export default function BookDemoPage() {
  const t = useTranslations('bookDemo');


  return (
    <main className="bg-[#FFFFEB] font-inter min-h-screen">

      {/* Desktop: single viewport, no scroll. Mobile: stacked, scrollable. */}
      <div className="lg:h-screen lg:overflow-hidden flex items-start lg:items-center justify-center pt-20 lg:pt-0">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 w-full lg:h-full lg:flex lg:items-center py-6 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-6 lg:gap-8 items-start lg:items-center w-full">

            {/* Left Column - Demo Information */}
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
                  {t('heroTitle')}
                </h1>
                <p className="text-sm sm:text-base text-gray-700">
                  {t('heroIntro')}
                </p>
              </div>

              {/* What you'll see */}
              <ul className="space-y-3">
                {[
                  'Set up your own checklist templates live',
                  'See the mobile inspection experience end-to-end',
                  'Assign corrective actions in real time',
                  'Explore analytics across locations',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <svg className="w-4 h-4 mt-0.5 text-[#16803C] shrink-0" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.78 6.22a.75.75 0 010 1.06l-4 4a.75.75 0 01-1.06 0l-2-2a.75.75 0 011.06-1.06L7.25 9.69l3.47-3.47a.75.75 0 011.06 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Trust stats */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { value: '100,000+', label: 'Sites managed' },
                  { value: '24 hrs', label: 'Go-live time' },
                  { value: '99.5%', label: 'Uptime SLA' },
                  { value: '30 min', label: 'Demo duration' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl border border-gray-200 px-4 py-3">
                    <p className="text-lg font-extrabold text-[#16803C]">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Client logos hint */}
              <p className="text-xs text-gray-400 pt-1">
                Trusted by teams at Accor Group, Royal Commission for AlUla, Tata Motors, and 500+ enterprise networks.
              </p>
            </div>

            {/* Right Column - Calendly Booking Widget */}
            {/* Mobile: fixed tall box. Desktop: fills remaining viewport height. */}
            <div className="h-[720px] sm:h-[780px] lg:h-[calc(100vh-8rem)] min-w-0">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 h-full flex flex-col overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex-shrink-0">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 text-center">
                    {t('form.submit')}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 text-center mt-1">
                    {t('subtitle')}
                  </p>
                </div>

                {/* Calendly Widget - scrollable on mobile to handle its 900px min-width */}
                <div className="flex-1 overflow-auto">
                  <CalendlyWidget height="100%" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
