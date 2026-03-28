"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { Link } from "@/i18n/navigation";
import { ROUTES, EXTERNAL_LINKS } from "@/config/links";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";

export default function MobileMenu() {
  const t = useTranslations('navigation');
  
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
  <button aria-label="Open menu" className="min-[1350px]:hidden w-10 h-10 flex items-center justify-center">
          <Menu className="text-[#1A1A1A]" size={24} />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetTitle hidden>{t('mobileMenuTitle')}</SheetTitle>
        <SheetDescription hidden>
          {t('mobileMenuDescription')}
        </SheetDescription>
        <div className="px-4 py-4">
          <nav className="flex flex-col gap-3 text-base font-medium text-gray-700">
            <Link
              href={ROUTES.features}
              className="block w-full py-2 hover:text-[#1A7D3D] transition-colors"
              onClick={handleMenuClose}
            >
              {t("features")}
            </Link>
            <Link
              href={ROUTES.howItWorks}
              className="block w-full py-2 hover:text-[#1A7D3D] transition-colors"
              onClick={handleMenuClose}
            >
              {t("howItWorks")}
            </Link>
            {/* Solutions expandable section */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 hover:text-[#1A7D3D] transition-colors"
                onClick={() => setSolutionsOpen(o => !o)}
              >
                <span>Solutions</span>
                <svg className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {solutionsOpen && (
                <div className="pl-4 flex flex-col gap-0.5 mt-1">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 pt-1 pb-0.5">By Industry</p>
                  <Link href={ROUTES.icpRetail} className="block py-1.5 text-sm text-gray-600 hover:text-[#1A7D3D] transition-colors" onClick={handleMenuClose}>
                    Retail & QSR
                  </Link>
                  <Link href={ROUTES.icpFoodBeverage} className="block py-1.5 text-sm text-gray-600 hover:text-[#1A7D3D] transition-colors" onClick={handleMenuClose}>
                    Food & Beverage
                  </Link>
                  <Link href={ROUTES.icpConstruction} className="block py-1.5 text-sm text-gray-600 hover:text-[#1A7D3D] transition-colors" onClick={handleMenuClose}>
                    Construction & Infrastructure
                  </Link>
                  <Link href={ROUTES.icpHospitality} className="block py-1.5 text-sm text-gray-600 hover:text-[#1A7D3D] transition-colors" onClick={handleMenuClose}>
                    Hotels & Hospitality
                  </Link>
                  <Link href={ROUTES.icpHealthcare} className="block py-1.5 text-sm text-gray-600 hover:text-[#1A7D3D] transition-colors" onClick={handleMenuClose}>
                    Healthcare & Diagnostics
                  </Link>
                  <div className="my-1.5 border-t border-gray-200" />
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 pb-0.5">By Feature</p>
                  <Link href={ROUTES.featureTraining} className="block py-1.5 text-sm text-gray-600 hover:text-[#1A7D3D] transition-colors" onClick={handleMenuClose}>
                    Training Management
                  </Link>
                  <Link href={ROUTES.featureTasks} className="block py-1.5 text-sm text-gray-600 hover:text-[#1A7D3D] transition-colors" onClick={handleMenuClose}>
                    Corrective Actions
                  </Link>
                  <Link href={ROUTES.featureAttendance} className="block py-1.5 text-sm text-gray-600 hover:text-[#1A7D3D] transition-colors" onClick={handleMenuClose}>
                    Attendance Tracking
                  </Link>
                  <Link href={ROUTES.featureAnnouncements} className="block py-1.5 text-sm text-gray-600 hover:text-[#1A7D3D] transition-colors" onClick={handleMenuClose}>
                    Operations Announcements
                  </Link>
                </div>
              )}
            </div>

            <Link
              href={ROUTES.pricing}
              className="block w-full py-2 hover:text-[#1A7D3D] transition-colors"
              onClick={handleMenuClose}
            >
              {t("pricing")}
            </Link>
            <Link
              href={ROUTES.enterpriseEssentials}
              className="block w-full py-2 hover:text-[#1A7D3D] transition-colors"
              onClick={handleMenuClose}
            >
              {t('enterpriseEssentials')}
            </Link>
            <a
              href={ROUTES.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 hover:text-[#1A7D3D] transition-colors"
              onClick={handleMenuClose}
            >
              {t('blog', { default: 'Blog' })}
            </a>
            <Link
              href={ROUTES.bookDemo}
              className="block w-full py-2 hover:text-[#1A7D3D] transition-colors"
              onClick={handleMenuClose}
            >
              {t("bookDemo")}
            </Link>

            <div className="pt-4 mt-2 border-t border-gray-200 space-y-2">
              <a
                href={EXTERNAL_LINKS.signIn}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-[#1A7D3D] text-center py-3 px-4 rounded-lg border border-[#1A7D3D]/30 bg-white hover:bg-gray-50 hover:border-[#166534] hover:text-[#166534] transition-colors font-medium"
                onClick={handleMenuClose}
              >
                {t('signIn')}
              </a>
              <a
                href={EXTERNAL_LINKS.register}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#1A7D3D] text-white text-center py-3 px-4 rounded-lg hover:bg-[#166534] transition-colors font-medium"
                onClick={handleMenuClose}
              >
                {t('getStarted')}
              </a>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
