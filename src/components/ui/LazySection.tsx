import { ReactNode, Suspense } from 'react'
import { useInView } from '@/hooks/useInView'

interface LazySectionProps {
  children: ReactNode
  fallback?: ReactNode
  className?: string
}

export function LazySection({ children, fallback, className = '' }: LazySectionProps) {
  const { ref, isInView } = useInView({ 
    threshold: 0.05, 
    triggerOnce: true,
    rootMargin: '100px' // Start loading 100px before the section comes into view
  })

  return (
    <div ref={ref} className={className}>
      {isInView ? (
        <Suspense fallback={fallback || <div className="h-96 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg" />}>
          {children}
        </Suspense>
      ) : (
        <div className="h-96" /> // Placeholder to maintain layout
      )}
    </div>
  )
}