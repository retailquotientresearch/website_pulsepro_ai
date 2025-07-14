import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'
import MobileMenu from './MobileMenu'
import Container from './ui/Container'

export default function Navigation() {
  const t = useTranslations('navigation')

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <Container>
        <div className="flex items-center justify-between h-20 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-14 w-44 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <Image
                src="/images/pulse-black.png"
                alt="PulsePro.ai"
                width={1184}
                height={372}
                className="dark:hidden h-12 w-auto object-contain"
                priority
              />
              <Image
                src="/images/pulse-white.png"
                alt="PulsePro.ai"
                width={1184}
                height={372}
                className="hidden dark:block h-12 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/features" 
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium"
            >
              {t('features')}
            </Link>
            <Link 
              href="/pricing" 
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium"
            >
              {t('pricing')}
            </Link>
            <Link 
              href="/integrations" 
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium"
            >
              {t('integrations')}
            </Link>
            <Link 
              href="/support" 
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium"
            >
              {t('support')}
            </Link>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-3">
              <LanguageSwitcher />
              <ThemeToggle />
              
              <button className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors duration-200">
                Sign In
              </button>
              
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </div>
            
            <MobileMenu />
          </div>
        </div>
      </Container>
    </nav>
  )
}