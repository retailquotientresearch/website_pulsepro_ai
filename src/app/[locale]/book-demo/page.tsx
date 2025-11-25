"use client";

import React from 'react';
import CalendlyWidget from '@/components/CalendlyWidget';
import { useTranslations } from 'next-intl';

export default function BookDemoPage() {
  const t = useTranslations('bookDemo');


  return (
  <main className="bg-[#FDF6E9] font-inter min-h-screen">
      
      {/* Main Content - Vertically Centered */}
      <div className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Demo Information */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  {t('heroTitle')}
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  {t('heroIntro')}
                </p>
                
                {/* ...feature list removed... */}
              </div>

              {/* Removed benefits section as requested */}
            </div>

            {/* Right Column - Calendly Booking Widget */}
            <div className="lg:pl-8">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 text-center">
                    {t('form.submit')}
                  </h2>
                  <p className="text-gray-600 text-center mt-2">
                    {t('subtitle')}
                  </p>
                </div>
                
                {/* Calendly Widget - vertically centered within its container */}
                <div className="flex items-center justify-center h-[58vh] sm:h-[60vh] md:h-[62vh] lg:h-[65vh] xl:h-[68vh] min-h-[360px] max-h-[640px]">
                  <CalendlyWidget height={520} />
                </div>
                {/* Removed fallback link */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
