'use client'

import { useState } from 'react'
import { usePathname } from '@/i18n/navigation'
import { Link } from '@/i18n/navigation'
import { useLocale } from 'next-intl'

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const locale = useLocale()

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 border border-gray-200 dark:border-gray-700"
        aria-label="Change language"
      >
        <i className="ri-global-line text-lg text-gray-900 dark:text-white"></i>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg w-32 py-2 z-50">
          <Link
            href={pathname}
            locale="en"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            English
          </Link>
          <Link
            href={pathname}
            locale="fr"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Français
          </Link>
          <Link
            href={pathname}
            locale="hi"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            हिन्दी
          </Link>
        </div>
      )}
    </div>
  )
}