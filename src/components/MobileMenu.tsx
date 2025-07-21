"use client";

import Button from "@/components/ui/Button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<'features' | 'support' | null>(null);
  const t = useTranslations("navigation");

  const toggleSection = (section: 'features' | 'support') => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
    setExpandedSection(null); // Reset expanded sections when menu closes
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => {
      setIsOpen(open);
      if (!open) setExpandedSection(null);
    }}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden border border-border"
          aria-label="Toggle menu"
        >
          <i
            className={`${
              isOpen ? "ri-close-line" : "ri-menu-line"
            } text-lg text-foreground`}
          ></i>
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="px-4 py-4 space-y-1">
          {/* Features Section */}
          <div className="space-y-0">
            <button
              onClick={() => toggleSection('features')}
              className="w-full flex items-center justify-between py-3 px-4 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
            >
              {t("features")}
              <i className={`ri-arrow-down-s-line text-lg transition-transform duration-200 ${
                expandedSection === 'features' ? 'rotate-180' : ''
              }`}></i>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandedSection === 'features' ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="space-y-1 pb-2">
                <Link
                  href="/features"
                  className="block py-2 px-6 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 text-sm"
                  onClick={handleMenuClose}
                >
                  {t("allFeatures")}
                </Link>
                <Link
                  href="/api-integration"
                  className="block py-2 px-6 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 text-sm"
                  onClick={handleMenuClose}
                >
                  {t("apiIntegration")}
                </Link>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <Link
            href="/pricing"
            className="block py-3 px-4 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
            onClick={handleMenuClose}
          >
            {t("pricing")}
          </Link>

          {/* Integrations */}
          <Link
            href="/integrations"
            className="block py-3 px-4 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
            onClick={handleMenuClose}
          >
            {t("integrations")}
          </Link>

          {/* Support Section */}
          <div className="space-y-0">
            <button
              onClick={() => toggleSection('support')}
              className="w-full flex items-center justify-between py-3 px-4 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
            >
              {t("support")}
              <i className={`ri-arrow-down-s-line text-lg transition-transform duration-200 ${
                expandedSection === 'support' ? 'rotate-180' : ''
              }`}></i>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandedSection === 'support' ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="space-y-1 pb-2">
                <Link
                  href="/demo"
                  className="block py-2 px-6 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 text-sm"
                  onClick={handleMenuClose}
                >
                  {t("bookDemo")}
                </Link>
                <Link
                  href="/contact"
                  className="block py-2 px-6 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 text-sm"
                  onClick={handleMenuClose}
                >
                  {t("contactUs")}
                </Link>
                <Link
                  href="/faq"
                  className="block py-2 px-6 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 text-sm"
                  onClick={handleMenuClose}
                >
                  {t("faqs")}
                </Link>
                <Link
                  href="/support"
                  className="block py-2 px-6 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 text-sm"
                  onClick={handleMenuClose}
                >
                  {t("supportCenter")}
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border space-y-3">
            <div className="flex items-center justify-between px-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Settings
              </span>
              <div className="flex items-center space-x-2">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>

            <Button
              variant="ghost"
              className="w-full justify-start text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Sign In
            </Button>
            <Button className="w-full" onClick={handleMenuClose}>
              Get Started
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
