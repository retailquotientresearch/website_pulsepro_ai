"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import MobileMenu from "./MobileMenu";

export default function Navigation() {
  const t = useTranslations('navigation');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDF6E9]/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="/images/pulse-black.png"
              alt="Pulse Logo"
              className="h-8 lg:h-10 w-auto group-hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-700">
            <Link
              href="/features"
              className="hover:text-[#1A7D3D] transition-colors"
            >
              {t('features')}
            </Link>
            <Link
              href="/api-integration"
              className="hover:text-[#1A7D3D] transition-colors"
            >
              {t('apiIntegration')}
            </Link>
            <Link
              href="/pricing"
              className="hover:text-[#1A7D3D] transition-colors"
            >
              {t('pricing')}
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <a
              href="https://ng-app.pulsepro.ai/register"
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
