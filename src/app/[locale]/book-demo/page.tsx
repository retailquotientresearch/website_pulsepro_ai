"use client";

import React from 'react';
import CalendlyWidget from '@/components/CalendlyWidget';
import { useTranslations } from 'next-intl';

export default function BookDemoPage() {
  const t = useTranslations('bookDemo');


  return (
    <main className="bg-[#FFFFEB] font-inter overflow-hidden">
      
      {/* Main Content - Optimized Layout - No Scrolling */}
      <div className="h-screen flex items-center justify-center py-24">
        <div className="max-w-[1600px] mx-auto px-6 w-full h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center w-full">
            
            {/* Left Column - Demo Information (1/3 width) - Vertically Centered */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {t('heroTitle')}
                </h1>
                <p className="text-base text-gray-700">
                  {t('heroIntro')}
                </p>
              </div>
            </div>

            {/* Right Column - Calendly Booking Widget (2/3 width - double width) */}
            <div className="lg:col-span-2 h-[calc(100vh-12rem)]">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 h-full flex flex-col overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex-shrink-0">
                  <h2 className="text-xl font-bold text-gray-900 text-center">
                    {t('form.submit')}
                  </h2>
                  <p className="text-sm text-gray-600 text-center mt-1">
                    {t('subtitle')}
                  </p>
                </div>
                
                {/* Calendly Widget - Full height, no scrolling */}
                <div className="flex-1 overflow-hidden">
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
