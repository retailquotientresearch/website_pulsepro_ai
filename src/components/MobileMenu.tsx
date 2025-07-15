'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/Button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('navigation')

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden border border-gray-200 dark:border-gray-700"
          aria-label="Toggle menu"
        >
          <i className={`${isOpen ? 'ri-close-line' : 'ri-menu-line'} text-lg text-gray-900 dark:text-white`}></i>
        </Button>
      </SheetTrigger>
      
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="px-4 py-4 space-y-2">
          <Link 
            href="/features" 
            className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            {t('features')}
          </Link>
          <Link 
            href="/pricing" 
            className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            {t('pricing')}
          </Link>
          <Link 
            href="/integrations" 
            className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            {t('integrations')}
          </Link>
          <Link 
            href="/support" 
            className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            {t('support')}
          </Link>
          
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
            <div className="flex items-center justify-between px-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">Settings</span>
              <div className="flex items-center space-x-2">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              className="w-full justify-start text-purple-600 dark:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Sign In
            </Button>
            <Button 
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}