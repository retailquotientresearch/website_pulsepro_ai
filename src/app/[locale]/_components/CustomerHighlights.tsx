import React from 'react';
import { useTranslations } from 'next-intl';

export default function CustomerHighlights() {
  const t = useTranslations('customerHighlights');

  return (
    <section className="py-12 md:py-16 bg-[#FFFFEB]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-sm font-semibold text-[#16803C] uppercase tracking-widest mb-8">
          {t('eyebrow')}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Accor Group */}
          <div className="bg-[#0D1117] text-white rounded-2xl p-8 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-2xl font-bold">{t('accor.name')}</h3>
              <span className="shrink-0 bg-[#16803C] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                {t('accor.badge')}
              </span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {['Luxury', 'Premium', 'Midscale'].map((tier) => (
                <span
                  key={tier}
                  className="text-xs font-medium text-gray-400 border border-gray-600 rounded-full px-3 py-0.5"
                >
                  {tier}
                </span>
              ))}
            </div>
            <p className="text-gray-300 text-sm italic">{t('accor.brands')}</p>
            <div className="border-t border-gray-700 pt-4">
              <p className="text-gray-200 text-sm leading-relaxed">{t('accor.description')}</p>
            </div>
          </div>

          {/* Royal Commission */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-bold text-gray-900 leading-snug">{t('royalCommission.name')}</h3>
              <span className="shrink-0 bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                {t('royalCommission.badge')}
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{t('royalCommission.description')}</p>
            <div className="grid grid-cols-3 gap-3 pt-2 border-t border-gray-100">
              <div className="text-center">
                <p className="text-xl font-extrabold text-gray-900">100%</p>
                <p className="text-xs text-gray-500 mt-0.5">{t('royalCommission.stat1')}</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-extrabold text-gray-900">{t('royalCommission.stat2Value')}</p>
                <p className="text-xs text-gray-500 mt-0.5">{t('royalCommission.stat2')}</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-extrabold text-gray-900">{t('royalCommission.stat3Value')}</p>
                <p className="text-xs text-gray-500 mt-0.5">{t('royalCommission.stat3')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
