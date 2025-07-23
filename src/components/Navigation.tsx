import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import Button from "./ui/Button";
import Container from "./ui/Container";

export default function Navigation() {
  const t = useTranslations("navigation");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <Container>
        <div className="flex items-center justify-between h-20 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-14 w-36 lg:w-44 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/images/pulse-black.png"
                alt="PulsePro.ai"
                width={1184}
                height={372}
                className="dark:hidden h-9 lg:h-10 w-auto object-contain"
                priority
              />
              <Image
                src="/images/pulse-white.png"
                alt="PulsePro.ai"
                width={1184}
                height={372}
                className="hidden dark:block h-9 lg:h-10 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative group">
              <button className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors duration-200 font-medium relative pb-1 group-hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-black dark:after:bg-white after:transition-all after:duration-300 after:ease-out after:w-0">
                {t("features")}
              </button>
              
              {/* Features Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-surface rounded-lg shadow-lg border border-border py-2 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                <Link
                  href="/api-integration"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-colors duration-150"
                >
                  {t("apiIntegration")}
                </Link>
              </div>
            </div>
            <Link
              href="/pricing"
              className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors duration-200 font-medium relative pb-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-black dark:after:bg-white after:transition-all after:duration-300 after:ease-out after:w-0"
            >
              {t("pricing")}
            </Link>
            <Link
              href="/integrations"
              className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors duration-200 font-medium relative pb-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-black dark:after:bg-white after:transition-all after:duration-300 after:ease-out after:w-0"
            >
              {t("integrations")}
            </Link>
            <div className="relative group">
              <button className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors duration-200 font-medium relative pb-1 group-hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-black dark:after:bg-white after:transition-all after:duration-300 after:ease-out after:w-0">
                {t("support")}
              </button>
              
              {/* Support Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-surface rounded-lg shadow-lg border border-border py-2 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                <Link
                  href="/demo"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-colors duration-150"
                >
                  {t("bookDemo")}
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-colors duration-150"
                >
                  {t("contactUs")}
                </Link>
                <Link
                  href="/faq"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-colors duration-150"
                >
                  {t("faqs")}
                </Link>
                <Link
                  href="/support"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-colors duration-150"
                >
                  {t("supportCenter")}
                </Link>
              </div>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            <div className="hidden lg:flex items-center space-x-2">
              <LanguageSwitcher />
              <ThemeToggle />

              <Button
                variant="ghost"
                className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {t("signIn")}
              </Button>

              <Button size="sm">{t("getStarted")}</Button>
            </div>

            {/* Mobile controls - always visible */}
            <div className="flex lg:hidden items-center space-x-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>

            <MobileMenu />
          </div>
        </div>
      </Container>
    </nav>
  );
}
