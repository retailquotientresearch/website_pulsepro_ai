import React from 'react';
import { useTranslations } from 'next-intl';

const rows = ['auditExecution', 'evidenceDocumentation', 'issueResolution', 'visibilityControl', 'decisionMaking'];

export default function BeforeAfterPulse() {
  const t = useTranslations('beforeAfter');

  return (
    <section className="py-16 md:py-20 bg-[#FFFFEB]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{t('title')}</h2>
          <p className="text-gray-500">{t('subtitle')}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500 w-1/4 border-b border-gray-200">
                  {t('colArea')}
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-red-500 w-[37.5%] border-b border-gray-200">
                  {t('colBefore')}
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[#16803C] w-[37.5%] border-b border-gray-200">
                  {t('colAfter')}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={row}
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-[#FFFFEB]'}
                >
                  <td className="py-4 px-4 text-sm font-medium text-gray-800 border-b border-gray-100 align-top">
                    {t(`rows.${row}.area`)}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600 border-b border-gray-100 align-top">
                    <span className="flex gap-2">
                      <span className="text-red-400 mt-0.5 shrink-0">✕</span>
                      {t(`rows.${row}.before`)}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-700 border-b border-gray-100 align-top">
                    <span className="flex gap-2">
                      <span className="text-[#16803C] mt-0.5 shrink-0">✓</span>
                      {t(`rows.${row}.after`)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
