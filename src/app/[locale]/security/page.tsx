 'use client'

import { useTranslations } from 'next-intl'

export default function SecurityPage() {
  const t = useTranslations('security')

  return (
    <main className="min-h-screen bg-[#FFFFEB] overflow-x-hidden">
      {/* Hero */}
      <section className="bg-[#FFFFEB] pt-28 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-['Poppins',sans-serif] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#111111]">
              {t('hero.title')}
            </h1>
            {t('hero.subtitle') && (
              <p className="mt-4 text-lg md:text-xl text-gray-700">{t('hero.subtitle')}</p>
            )}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-2xl border border-green-200 shadow-lg p-6 md:p-10'>
            <div className='mb-8 pb-6 border-b border-green-200'>
              <p className='text-sm text-gray-500'>{t('lastUpdate')}</p>
            </div>

            {/* Intro */}
            <section className='mb-8'>
              {t.raw('intro.paragraphs').map((p: string, idx: number) => (
                <p key={idx} className='text-gray-700 leading-relaxed mb-4'>{p}</p>
              ))}
            </section>

            {/* Sections from content */}
            {t.raw('sections').map((sec: {title: string, paragraphs: string[]}, idx: number) => (
              <section key={idx} className='mb-12'>
                <h2 className='text-2xl font-bold text-[#111111] mb-6'>{sec.title}</h2>
                {sec.paragraphs.map((para: string, pidx: number) => (
                  <p key={pidx} className='text-gray-700 leading-relaxed mb-4'>{para}</p>
                ))}
              </section>
            ))}

            {/* Contact */}
            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-[#111111] mb-6'>{t('contact.title')}</h2>
              <div className='bg-green-50 p-6 rounded-xl border border-green-200'>
                <p className='text-gray-700 leading-relaxed mb-4'>{t('contact.content')}</p>
                <p className='text-gray-800'>
                  <a href={`mailto:${t('contact.email')}`} className='text-[#1A7D3D] underline decoration-2 underline-offset-2'>
                    {t('contact.email')}
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
