'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
      </div>
    )
  }

  const toggleTheme = () => {
    // Always toggle between light and dark, ignoring system
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 border border-gray-200 dark:border-gray-700"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <i className="ri-sun-line text-lg text-gray-900 dark:text-white"></i>
      ) : (
        <i className="ri-moon-line text-lg text-gray-900 dark:text-white"></i>
      )}
    </button>
  )
}