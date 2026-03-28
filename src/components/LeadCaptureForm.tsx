'use client'

import { useState } from 'react'

interface LeadCaptureFormProps {
  source?: string
  variant?: 'light' | 'dark'
  placeholder?: string
  buttonText?: string
  className?: string
}

export default function LeadCaptureForm({
  source = 'website',
  variant = 'light',
  placeholder = 'Enter your work email',
  buttonText = 'Get Early Access',
  className = '',
}: LeadCaptureFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        const data = await res.json()
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMessage('Network error. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={`flex items-center justify-center gap-3 py-3 px-6 rounded-xl ${variant === 'dark' ? 'bg-green-900/30 text-green-300' : 'bg-green-50 text-green-700'} ${className}`}>
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="font-medium">You&apos;re on the list! We&apos;ll be in touch soon.</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          disabled={status === 'loading'}
          className={`flex-1 px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2 disabled:opacity-60 ${
            variant === 'dark'
              ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-green-500 focus:border-green-500'
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-green-500 focus:border-green-500'
          }`}
        />
        <button
          type="submit"
          disabled={status === 'loading' || !email}
          className="px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
          style={{ backgroundColor: 'var(--brand-green)' }}
          onMouseEnter={(e) => { if (!e.currentTarget.disabled) e.currentTarget.style.backgroundColor = 'var(--brand-green-600)' }}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-green)'}
        >
          {status === 'loading' ? 'Sending…' : buttonText}
        </button>
      </div>
      {status === 'error' && (
        <p className={`mt-2 text-xs ${variant === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
          {errorMessage}
        </p>
      )}
    </form>
  )
}
