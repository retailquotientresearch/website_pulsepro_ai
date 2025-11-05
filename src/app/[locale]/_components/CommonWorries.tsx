'use client';

import { useInView } from '@/hooks/useInView';
import { useTranslations } from 'next-intl';

interface Concern {
  question: string;
  answer: string;
}

// Generate different heights for variety - increased heights
const heights = ['h-56', 'h-64', 'h-60', 'h-68', 'h-52', 'h-66', 'h-58', 'h-62', 'h-54'];

function ConcernCard({ concern, index }: { concern: Concern; index: number }) {
  const height = heights[index % heights.length];
  
  return (
    <div className={`bg-[#FDF6E9] rounded-3xl p-6 w-[320px] mx-1 flex-shrink-0 flex flex-col items-center justify-center text-center ${height}`}>
      <div className="text-base md:text-lg font-medium text-gray-900 mb-3 leading-snug">
        {concern.question}
      </div>
      <div className="text-gray-700 leading-relaxed text-sm md:text-base">
        {concern.answer}
      </div>
    </div>
  );
}

function MarqueeRow({ concerns }: { concerns: Concern[] }) {
  return (
    <div className="relative overflow-hidden">
      <div 
        className="flex animate-marquee-left py-2 items-end"
        style={{ width: 'fit-content' }}
      >
        {/* First set */}
        {concerns.map((concern, index) => (
          <ConcernCard key={`first-${index}`} concern={concern} index={index} />
        ))}
        {/* Duplicate set for seamless loop */}
        {concerns.map((concern, index) => (
          <ConcernCard key={`second-${index}`} concern={concern} index={index + concerns.length} />
        ))}
      </div>
    </div>
  );
}

export default function CommonWorries() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const t = useTranslations('commonWorries');
  const concerns = t.raw('concerns') as Concern[];

  return (
  <section className="py-12 md:py-16 lg:py-20 bg-[#FDF6E9]">
      {/* Full-bleed wrapper with top curves only */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div ref={ref} className="w-full rounded-t-[36px] md:rounded-t-[48px] lg:rounded-t-[64px] overflow-hidden bg-[#034f46] px-4 sm:px-8 lg:px-16 py-20 md:py-24 lg:py-28 relative min-h-[70vh] md:min-h-[80vh]">
          {/* Top connector line (gradient overlay removed) */}
          <div className="absolute top-0 left-[36px] md:left-[48px] lg:left-[64px] right-[36px] md:right-[48px] lg:right-[64px] h-0.5 bg-[#1A7D3D]"></div>
          
          {/* Header */}
          <div className="text-center mb-12 px-4">
            <div className="max-w-5xl mx-auto relative">
              <div className="relative inline-block">
                <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-bold text-[#FDF6E9] mb-6 leading-tight">
                  {t('title.part1')}
                  <br />
                  <span className="text-[#FDF6E9]">
                    {t('title.part2')}
                  </span>
                </h2>
              </div>
              
              {/* Decorative SVG lines similar to Wispr Flow */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none opacity-40" 
                viewBox="0 0 800 400" 
                fill="none"
              >
                <path 
                  d="M200 80 L280 140" 
                  stroke="#1A7D3D" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  className={`transition-all duration-1000 ${isInView ? 'stroke-dasharray-none' : 'stroke-dasharray-[8,8]'}`}
                />
                <path 
                  d="M400 60 L480 120" 
                  stroke="#1A7D3D" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  className={`transition-all duration-1000 delay-200 ${isInView ? 'stroke-dasharray-none' : 'stroke-dasharray-[8,8]'}`}
                />
                <path 
                  d="M600 70 L680 130" 
                  stroke="#1A7D3D" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  className={`transition-all duration-1000 delay-400 ${isInView ? 'stroke-dasharray-none' : 'stroke-dasharray-[8,8]'}`}
                />
                <path 
                  d="M150 280 L230 340" 
                  stroke="#1A7D3D" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  className={`transition-all duration-1000 delay-600 ${isInView ? 'stroke-dasharray-none' : 'stroke-dasharray-[8,8]'}`}
                />
                <path 
                  d="M650 260 L730 320" 
                  stroke="#1A7D3D" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  className={`transition-all duration-1000 delay-800 ${isInView ? 'stroke-dasharray-none' : 'stroke-dasharray-[8,8]'}`}
                />
              </svg>
            </div>
          </div>

          {/* Single Marquee Row */}
          <div className="mb-8">
            <MarqueeRow concerns={concerns} />
          </div>

          {/* Bottom CTA cards similar to Wispr Flow */}
          {/* <div className="max-w-7xl mx-auto px-4 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-emerald-700 rounded-3xl p-8 text-white relative overflow-hidden group cursor-pointer hover:bg-emerald-600 transition-colors">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-3xl font-bold">99% faster setup</h3>
                    <svg 
                      className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                  <p className="text-lg opacity-90">
                    From Excel chaos to organized inspections in minutes.
                  </p>
                </div>
                <div className="flex items-center mt-8">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg font-bold">⚡</span>
                  </div>
                  <div>
                    <div className="font-semibold">Quick Setup</div>
                    <div className="text-sm opacity-75">No technical expertise needed</div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-700 rounded-3xl p-8 text-white relative overflow-hidden group cursor-pointer hover:bg-emerald-600 transition-colors">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-3xl font-bold">24/7 support included</h3>
                    <svg 
                      className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                  <p className="text-lg opacity-90">
                    Free training, onboarding, and ongoing support for your entire team.
                  </p>
                </div>
                <div className="flex items-center mt-8">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg font-bold">🎯</span>
                  </div>
                  <div>
                    <div className="font-semibold">Expert Support</div>
                    <div className="text-sm opacity-75">Training & onboarding included</div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
