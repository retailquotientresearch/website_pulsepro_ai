import React from 'react';
import { useTranslations } from 'next-intl';

const capabilities = [
  {
    key: 'auditFrequency',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    resultColor: 'text-[#16803C]',
    borderColor: 'border-green-200',
    iconBg: 'bg-green-50 text-[#16803C]',
  },
  {
    key: 'visualCompliance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    resultColor: 'text-purple-700',
    borderColor: 'border-purple-200',
    iconBg: 'bg-purple-50 text-purple-700',
  },
  {
    key: 'earlyDetection',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    resultColor: 'text-blue-700',
    borderColor: 'border-blue-200',
    iconBg: 'bg-blue-50 text-blue-700',
  },
  {
    key: 'leadershipInsights',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    resultColor: 'text-amber-700',
    borderColor: 'border-amber-200',
    iconBg: 'bg-amber-50 text-amber-700',
  },
];

export default function AIIntelligenceLayer() {
  const t = useTranslations('aiSection');

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#16803C]/10 text-[#16803C] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            {t('badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{t('title')}</h2>
          <p className="text-gray-500 max-w-xl mx-auto">{t('subtitle')}</p>
        </div>

        {/* Capability cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {capabilities.map((cap) => (
            <div
              key={cap.key}
              className={`rounded-2xl border ${cap.borderColor} bg-white p-6 flex flex-col gap-3`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cap.iconBg}`}>
                {cap.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-base">
                {t(`capabilities.${cap.key}.title`)}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t(`capabilities.${cap.key}.description`)}
              </p>
              <p className="text-sm mt-auto pt-2 border-t border-gray-100">
                <span className={`font-semibold ${cap.resultColor}`}>{t('resultLabel')} </span>
                <span className="text-gray-700">{t(`capabilities.${cap.key}.result`)}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
