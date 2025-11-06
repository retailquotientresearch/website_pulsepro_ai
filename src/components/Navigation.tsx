"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import { ROUTES, EXTERNAL_LINKS } from "@/config/links";
import { useTranslations } from "next-intl";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

export default function Navigation() {
  const t = useTranslations('navigation');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDF6E9]/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href={ROUTES.home} className="flex items-center group">
            <Image
              src="/images/pulse-black.png"
              alt="Pulse Logo"
              width={140}
              height={40}
              className="h-8 lg:h-10 w-auto group-hover:scale-105 transition-transform duration-200"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-base lg:text-lg font-medium text-gray-700">
            <Link
              href={ROUTES.features}
              className="hover:text-[#1A7D3D] transition-colors"
            >
              {t('features')}
            </Link>
            <Link
              href={ROUTES.howItWorks}
              className="hover:text-[#1A7D3D] transition-colors"
            >
              {t('howItWorks')}
            </Link>
            <Link
              href={ROUTES.pricing}
              className="hover:text-[#1A7D3D] transition-colors"
            >
              {t('pricing')}
            </Link>
            <a
              href={EXTERNAL_LINKS.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1A7D3D] transition-colors"
            >
              {t('blog', { default: 'Blog' })}
            </a>
            <Link
              href={ROUTES.bookDemo}
              className="hover:text-[#1A7D3D] transition-colors"
            >
              {t('bookDemo')}
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-3">
            <a
              href={EXTERNAL_LINKS.signIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block text-[#1A7D3D] hover:text-[#166534] border border-[#1A7D3D]/30 hover:border-[#166534] px-5 py-2 rounded-full transition-colors font-medium bg-white/60 hover:bg-white"
            >
              {t('signIn')}
            </a>
            <a
              href={EXTERNAL_LINKS.register}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block bg-[#1A7D3D] text-white px-6 py-2 rounded-full hover:bg-[#166534] transition-colors font-medium"
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
