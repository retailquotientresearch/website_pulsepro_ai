import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  background?: 'default' | 'gray' | 'gradient'
}

export default function Section({ 
  children, 
  className,
  padding = 'lg',
  background = 'default'
}: SectionProps) {
  const paddings = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  }
  
  const backgrounds = {
    default: 'bg-white dark:bg-gray-900',
    gray: 'bg-gray-50 dark:bg-gray-800',
    gradient: 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-purple-900/20'
  }
  
  return (
    <section className={cn(paddings[padding], backgrounds[background], className)}>
      {children}
    </section>
  )
}