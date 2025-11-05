"use client";

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';

// Simple icon components
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CogIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function FeaturesPage() {
  const t = useTranslations('featuresPage');
  const [currentlyOpen, setCurrentlyOpen] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    if (currentlyOpen === index) {
      setCurrentlyOpen(null);
      return;
    }
    setCurrentlyOpen(index);
  };

  const openFeatureModal = (title: string, description: string) => {
    // For now, just log the feature click
    console.log('Feature clicked:', title, description);
    // In a real implementation, you would open a modal or navigate to the feature
    alert(`Feature: ${title}\n\n${description}\n\nThis would normally open the feature in the platform.`);
  };

  const categories = [
    {
      id: 1,
      key: 'noLimits',
      features: ['unlimitedChecklists', 'unlimitedPhotos', 'unlimitedStorage', 'unlimitedSchedules']
    },
    {
      id: 2,
      key: 'mobile',
      features: ['simpleInterface', 'offlineCapture', 'attachEvidenceFast', 'guidedFlows']
    },
    {
      id: 3,
      key: 'reliableData',
      features: ['geoTagging', 'geoFencing', 'conditionalQuestions', 'inputRestrictions']
    },
    {
      id: 4,
      key: 'shareReadyReports',
      features: ['pdfReports', 'excelExports', 'missedCallAnalytics', 'oneClickShare']
    },
    {
      id: 5,
      key: 'makerChecker',
      features: ['multiLevelReview', 'digitalSignatures', 'verificationPhotos', 'rejectionReasons']
    },
    {
      id: 6,
      key: 'trackActions',
      features: ['createActionsFromAudits', 'dueDatesReminders', 'escalations', 'linkConvertToTicket']
    },
    {
      id: 7,
      key: 'ticketsAndMaintenance',
      features: ['departmentRouting', 'priorityLevelsSLAs', 'reassignment', 'closureProof']
    },
    {
      id: 8,
      key: 'reminders',
      features: ['builtInAlerts', 'escalationAlerts', 'roleSiteTargeting', 'editableMessageContent']
    },
    {
      id: 9,
      key: 'systemScoring',
      features: ['weightedScores', 'passFailLogic', 'gradingBands', 'zeroToleranceItems']
    },
    {
      id: 10,
      key: 'ecosystem',
      features: ['openAPIsWebhooks', 'biConnectors', 'ticketingIntegrations', 'singleSignOn']
    },
    {
      id: 11,
      key: 'customization',
      features: ['customBranding', 'reportBranding', 'terminologyFit', 'permissionsByRole']
    }
  ];

  useEffect(() => {
    // Initialize first accordion open
    setCurrentlyOpen(1);
  }, []);

  return (
    <main className="bg-[#FDF6E9] font-inter min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[#FDF6E9] py-16 mt-16">{/* Added mt-16 for nav spacing */}
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{t('hero.title')}</h1>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200 mb-6 max-w-2xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6 font-light">
              {t('hero.description')}
            </p>
            
            {/* Tip Box */}
            <div className="bg-green-50 rounded-xl p-5 mb-6 border border-green-200">
              <p className="text-gray-800 font-medium">
                {t('hero.tipBox')}
              </p>
            </div>
            
            {/* Footer Stats */}
            <div className="text-base sm:text-lg text-gray-600 font-medium border-t border-green-200 pt-6">
              <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-x-6 gap-y-2">
                <span className="flex items-center justify-center w-full sm:w-auto text-center">
                  <CheckCircleIcon className="w-5 h-5 mr-2 text-[var(--brand-green)]" />
                  {t('hero.stats.features.value')} {t('hero.stats.features.label')}
                </span>
                <span className="flex items-center justify-center w-full sm:w-auto text-center">
                  <CogIcon className="w-5 h-5 mr-2 text-[var(--brand-green)]" />
                  {t('hero.stats.customizable.value')} {t('hero.stats.customizable.label')}
                </span>
                <span className="flex items-center justify-center w-full sm:w-auto text-center">
                  <ClockIcon className="w-5 h-5 mr-2 text-[var(--brand-green)]" />
                  {t('hero.stats.availability.value')} {t('hero.stats.availability.label')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Accordion */}
      <section className="py-16 bg-[#FDF6E9]">
        <div className="max-w-6xl mx-auto px-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="accordion-item bg-white border border-green-200 rounded-lg mb-4 overflow-hidden shadow-sm"
            >
              <div
                className="accordion-header p-8 cursor-pointer hover:bg-green-50 transition-colors"
                onClick={() => toggleAccordion(category.id)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                      {t(`categories.${category.key}.title`)}
                    </h2>
                    <p className="text-gray-600 italic">
                      {t(`categories.${category.key}.subtitle`)}
                    </p>
                  </div>
                  <ChevronDownIcon
                    className={`w-6 h-6 text-gray-400 transition-transform ${
                      currentlyOpen === category.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>
              
              {currentlyOpen === category.id && (
                <div className="accordion-content">
                  <div className="px-8 pb-8 border-t border-green-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-8">
                      {category.features.map((feature, index) => {
                        const isFirstColumn = index < Math.ceil(category.features.length / 2);
                        return (
                          <div key={feature} className={`space-y-6 ${isFirstColumn ? '' : ''}`}>
                            <div>
                              <h3
                                className="font-medium text-gray-800 hover:text-green-700 cursor-pointer transition-colors"
                                onClick={() =>
                                  openFeatureModal(
                                    t(`categories.${category.key}.features.${feature}.title`),
                                    t(`categories.${category.key}.features.${feature}.description`)
                                  )
                                }
                              >
                                {t(`categories.${category.key}.features.${feature}.title`)}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                                {t(`categories.${category.key}.features.${feature}.description`)}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Special note for trackActions category */}
                    {category.key === 'trackActions' && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-6">
                        <p className="text-green-800 text-xs">
                          <strong>Note:</strong> {t(`categories.${category.key}.note`)}
                        </p>
                      </div>
                    )}  
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
