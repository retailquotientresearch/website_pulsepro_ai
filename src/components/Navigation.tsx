"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import { ROUTES, EXTERNAL_LINKS } from "@/config/links";
import { useTranslations } from "next-intl";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale } from "next-intl";
import Image from "next/image";

export default function Navigation() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#FFFFEB]/95 backdrop-blur-md border-b-2 border-gray-300/60 shadow-sm ${isRTL ? 'direction-rtl' : ''}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={ROUTES.home} className="flex items-center group flex-shrink-0">
            <Image
              src="/images/pulse-black.png"
              alt="Pulse Logo"
              width={140}
              height={40}
              className="h-7 sm:h-8 w-auto group-hover:scale-105 transition-transform duration-200"
              priority
            />
          </Link>

          {/* Desktop Navigation - Shows on >=1350px */}
          <nav className={`hidden min-[1350px]:flex items-center ${isRTL ? 'space-x-reverse' : ''} gap-3 xl:gap-6 2xl:gap-8 text-sm lg:text-[15px] xl:text-base font-medium text-gray-700 flex-shrink-0`}>
            <Link
              href={ROUTES.features}
              className="hover:text-[#1A7D3D] transition-colors whitespace-nowrap"
            >
              {t('features')}
            </Link>
            <Link
              href={ROUTES.howItWorks}
              className="hover:text-[#1A7D3D] transition-colors whitespace-nowrap"
            >
              {t('howItWorks')}
            </Link>

            {/* Solutions dropdown */}
            <div className="relative group">
              <button className="hover:text-[#1A7D3D] transition-colors whitespace-nowrap flex items-center gap-1">
                {t('solutions')}
                <svg className="w-3.5 h-3.5 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block z-50">
                <div className="bg-white border border-gray-200 rounded-xl shadow-lg py-2 min-w-[260px]">
                  <p className="px-4 pt-1 pb-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-400">{t('byIndustry')}</p>
                  <Link href={ROUTES.icpRetail} className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFFFEB] hover:text-[#1A7D3D] transition-colors">
                    {t('industryRetail')}
                  </Link>
                  <Link href={ROUTES.icpFoodBeverage} className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFFFEB] hover:text-[#1A7D3D] transition-colors">
                    {t('industryFoodBeverage')}
                  </Link>
                  <Link href={ROUTES.icpConstruction} className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFFFEB] hover:text-[#1A7D3D] transition-colors">
                    {t('industryConstruction')}
                  </Link>
                  <Link href={ROUTES.icpHospitality} className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFFFEB] hover:text-[#1A7D3D] transition-colors">
                    {t('industryHospitality')}
                  </Link>
                  <Link href={ROUTES.icpHealthcare} className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFFFEB] hover:text-[#1A7D3D] transition-colors">
                    {t('industryHealthcare')}
                  </Link>
                  <div className="my-2 border-t border-gray-100" />
                  <p className="px-4 pb-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-400">{t('byFeature')}</p>
                  <Link href={ROUTES.featureTraining} className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFFFEB] hover:text-[#1A7D3D] transition-colors">
                    {t('featureTraining')}
                  </Link>
                  <Link href={ROUTES.featureTasks} className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFFFEB] hover:text-[#1A7D3D] transition-colors">
                    {t('featureTasks')}
                  </Link>
                  <Link href={ROUTES.featureAttendance} className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFFFEB] hover:text-[#1A7D3D] transition-colors">
                    {t('featureAttendance')}
                  </Link>
                  <Link href={ROUTES.featureAnnouncements} className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFFFEB] hover:text-[#1A7D3D] transition-colors">
                    {t('featureAnnouncements')}
                  </Link>
                  <div className="my-2 border-t border-gray-100" />
                  <p className="px-4 pb-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-400">{t('resources')}</p>
                  <Link href={ROUTES.caseStudies} className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFFFEB] hover:text-[#1A7D3D] transition-colors">
                    {t('caseStudies')}
                  </Link>
                  <Link href={ROUTES.roiCalculator} className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFFFEB] hover:text-[#1A7D3D] transition-colors">
                    {t('roiCalculator')}
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href={ROUTES.pricing}
              className="hover:text-[#1A7D3D] transition-colors whitespace-nowrap"
            >
              {t('pricing')}
            </Link>
            <Link
              href={ROUTES.enterpriseEssentials}
              className="hover:text-[#1A7D3D] transition-colors whitespace-nowrap"
            >
              {t('enterpriseEssentials')}
            </Link>
            <Link
              href={ROUTES.blog}
              className="hover:text-[#1A7D3D] transition-colors whitespace-nowrap"
            >
              {t('blog', { default: 'Blog' })}
            </Link>
            <Link
              href={ROUTES.bookDemo}
              className="hover:text-[#1A7D3D] transition-colors whitespace-nowrap"
            >
              {t('bookDemo')}
            </Link>
          </nav>

          {/* Right side actions */}
          <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} gap-2 sm:gap-3 flex-shrink-0`}>
            <LanguageSwitcher />
            <a
              href={EXTERNAL_LINKS.signIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-[1350px]:block text-[#1A7D3D] hover:text-[#166534] border border-[#1A7D3D]/30 hover:border-[#166534] px-3 xl:px-4 2xl:px-5 py-1.5 xl:py-2 rounded-full transition-colors font-medium bg-white/60 hover:bg-white text-sm xl:text-base whitespace-nowrap"
            >
              {t('signIn')}
            </a>
            <a
              href={EXTERNAL_LINKS.register}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-[1350px]:block bg-[#1A7D3D] text-white px-3 xl:px-5 2xl:px-6 py-1.5 xl:py-2 rounded-full hover:bg-[#166534] transition-colors font-medium text-sm xl:text-base whitespace-nowrap"
            >
              {t('getStarted')}
            </a>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
