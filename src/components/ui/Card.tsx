import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'bordered' | 'shadow'
  padding?: 'sm' | 'md' | 'lg'
}

export default function Card({ 
  children, 
  className, 
  variant = 'default',
  padding = 'md'
}: CardProps) {
  const baseStyles = 'rounded-2xl transition-all duration-200'
  
  const variants = {
    default: 'bg-white dark:bg-gray-800',
    bordered: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    shadow: 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
  }
  
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  return (
    <div className={cn(baseStyles, variants[variant], paddings[padding], className)}>
      {children}
    </div>
  )
}