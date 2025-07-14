'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('navigation')

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 border border-gray-200 dark:border-gray-700"
        aria-label="Toggle menu"
      >
        <i className={`${isOpen ? 'ri-close-line' : 'ri-menu-line'} text-lg text-gray-900 dark:text-white`}></i>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg z-40">
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
              
              <button className="w-full py-3 px-4 text-purple-600 dark:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 text-left font-medium">
                Sign In
              </button>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}