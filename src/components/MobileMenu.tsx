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

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button aria-label="Open menu" className="lg:hidden w-10 h-10 flex items-center justify-center">
          <Menu className="text-[#1A1A1A]" size={24} />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetTitle hidden>Navigation Menu</SheetTitle>
        <SheetDescription hidden>
          Access navigation links, features, pricing, and get started
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
            <Link
              href={ROUTES.pricing}
              className="block w-full py-2 hover:text-[#1A7D3D] transition-colors"
              onClick={handleMenuClose}
            >
              {t("pricing")}
            </Link>
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
