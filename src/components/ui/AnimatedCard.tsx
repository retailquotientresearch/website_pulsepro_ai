import { useInView } from '@/hooks/useInView'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  className?: string
}

export function AnimatedCard({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}: AnimatedCardProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true })

  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return 'translate-y-8'
      case 'down': return '-translate-y-8'
      case 'left': return 'translate-x-8'
      case 'right': return '-translate-x-8'
      case 'fade': return ''
      default: return 'translate-y-8'
    }
  }

  const animationClasses = isInView
    ? 'opacity-100 translate-x-0 translate-y-0'
    : `opacity-0 ${getInitialTransform()}`

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animationClasses} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  )
}