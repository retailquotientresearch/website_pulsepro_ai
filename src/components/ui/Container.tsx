import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '6xl' | '7xl'
}

export default function Container({ 
  children, 
  className, 
  maxWidth = '7xl'
}: ContainerProps) {
  const maxWidths = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl'
  }
  
  return (
    <div className={cn('mx-auto px-4 sm:px-6 lg:px-8', maxWidths[maxWidth], className)}>
      {children}
    </div>
  )
}