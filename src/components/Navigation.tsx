import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { Button } from './ui/Button'
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
          <div className="flex items-center space-x-2">
            <div className="hidden lg:flex items-center space-x-2">
              <LanguageSwitcher />
              <ThemeToggle />
              
              <Button 
                variant="ghost" 
                className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
              >
                Sign In
              </Button>
              
              <Button size="sm">
                Get Started
              </Button>
            </div>
            
            <MobileMenu />
          </div>
        </div>
      </Container>
    </nav>
  )
}