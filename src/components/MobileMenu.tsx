"use client";

import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/Sheet";
import { Link } from "@/i18n/navigation";
import { useState, useEffect } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="lg:hidden w-10 h-10 flex items-center justify-center">
          {isClient ? (
            <i className="fa-solid fa-bars text-xl text-[#1A1A1A]"></i>
          ) : (
            <div className="w-5 h-5">
              <div className="w-full h-0.5 bg-[#1A1A1A] mb-1"></div>
              <div className="w-full h-0.5 bg-[#1A1A1A] mb-1"></div>
              <div className="w-full h-0.5 bg-[#1A1A1A]"></div>
            </div>
          )}
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetTitle hidden>Navigation Menu</SheetTitle>
        <SheetDescription hidden>
          Access navigation links, features, pricing, and get started
        </SheetDescription>
        <div className="px-4 py-4 space-y-1">
          {/* Features */}
          <Link
            href="/#features"
            className="block py-3 px-4 text-gray-700 hover:text-[#1A7D3D] hover:bg-gray-100 rounded-lg transition-all duration-200 font-medium"
            onClick={handleMenuClose}
          >
            Features
          </Link>

          {/* Industries */}
          <Link
            href="/#industries"
            className="block py-3 px-4 text-gray-700 hover:text-[#1A7D3D] hover:bg-gray-100 rounded-lg transition-all duration-200 font-medium"
            onClick={handleMenuClose}
          >
            Industries
          </Link>

          {/* Pricing */}
          <Link
            href="/pricing"
            className="block py-3 px-4 text-gray-700 hover:text-[#1A7D3D] hover:bg-gray-100 rounded-lg transition-all duration-200 font-medium"
            onClick={handleMenuClose}
          >
            Pricing
          </Link>

          <div className="pt-4 border-t border-gray-200 space-y-3">
            <a
              href="https://ng-app.pulsepro.ai/register"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#1A7D3D] text-white text-center py-3 px-4 rounded-lg hover:bg-[#166534] transition-colors font-medium"
              onClick={handleMenuClose}
            >
              Get Started
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
