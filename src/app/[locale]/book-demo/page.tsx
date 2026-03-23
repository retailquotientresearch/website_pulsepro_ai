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
            <div className="space-y-4 lg:space-y-6">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
                  {t('heroTitle')}
                </h1>
                <p className="text-sm sm:text-base text-gray-700">
                  {t('heroIntro')}
                </p>
              </div>
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
