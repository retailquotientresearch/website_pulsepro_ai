'use client';

import { useInView } from '@/hooks/useInView';

interface Concern {
  question: string;
  answer: string;
}

const concerns: Concern[] = [
  {
    question: "Can I delete reports?",
    answer: "Yes. Reports can be deleted or archived anytime by authorized users."
  },
  {
    question: "Can I export the data in the format I want?",
    answer: "Yes. You can export all responses and analytics in Excel, CSV, or PDF formats."
  },
  {
    question: "Can I do bulk downloads of my PDF reports?",
    answer: "Yes. You can download multiple reports at once in just a few clicks."
  },
  {
    question: "Can I get training sessions to get started?",
    answer: "Absolutely. We offer complimentary onboarding sessions so your team is fully confident using PulsePro from Day 1."
  },
  {
    question: "Can I get training for my regional teams?",
    answer: "Yes, as many as you need. We believe software is only successful when it's actually used. We provide free training for all your teams—regional, zone-level, or field."
  },
  {
    question: "Can I get refresher sessions for old or new users?",
    answer: "Yes. We understand teams change, and users often need help with new features. We're happy to provide refresher sessions anytime—free of cost."
  },
  {
    question: "Can I email reports or summaries outside my organization?",
    answer: "Yes, and there's no extra cost. You can email reports, summaries, or PDFs to vendors, partners, or any external email address."
  },
  {
    question: "Do you support very lengthy templates—like 500 questions?",
    answer: "Yes. Many of our clients run templates with 500+ questions and attach 1,000+ photos. PulsePro is built to handle real-world inspection complexity."
  },
  {
    question: "Are you constantly updating the product with new features and AI?",
    answer: "Yes. Because we focus only on inspections, we're able to quickly adopt new technologies, including AI, and continuously improve the platform."
  },
  {
    question: "Will field users struggle or take more time than paper/Excel?",
    answer: "No. We know field users often work in customer-facing or time-sensitive environments like hotels, warehouses, and hospitals. PulsePro's mobile interface is ultra-simple and designed for fast use—even during hectic shifts."
  },
  {
    question: "Can I download reports of missed inspections to push my team?",
    answer: "Yes. You can download and share missed inspection summaries with just one click—perfect for driving completion and accountability."
  },
  {
    question: "Can I download graphs from Analytics for my internal presentations?",
    answer: "Yes. All charts and graphs are downloadable in image format (PNG) for quick use in your reports or presentations."
  },
  {
    question: "Do you support version control for templates?",
    answer: "Yes. You can clone, edit, and maintain multiple versions of a template—old data remains intact."
  },
  {
    question: "If I delete questions from a template, will old data be lost?",
    answer: "No. All past inspection responses are preserved in the system—even if the template is modified."
  },
  {
    question: "Can I create templates by uploading Excel files?",
    answer: "Yes. You can upload checklists in Excel format and turn them into working templates in minutes."
  },
  {
    question: "Can I upload all my sites in one go?",
    answer: "Yes. Upload all locations in bulk using a simple Excel upload—no need to enter them one by one."
  },
  {
    question: "Can I bulk edit or delete users, sites, or reports?",
    answer: "Yes. We offer bulk editing and bulk deletion tools for all major data elements."
  },
  {
    question: "Can I add people in CC when sharing reports?",
    answer: "Yes. You can automatically add stakeholders in CC to distribute reports to multiple recipients."
  }
];

// Generate different heights for variety - increased heights
const heights = ['h-56', 'h-64', 'h-60', 'h-68', 'h-52', 'h-66', 'h-58', 'h-62', 'h-54'];

function ConcernCard({ concern, index }: { concern: Concern; index: number }) {
  const height = heights[index % heights.length];
  
  return (
    <div className={`bg-[#FDF6E9] rounded-3xl p-6 w-[320px] mx-1 flex-shrink-0 flex flex-col items-center justify-center text-center ${height}`}>
      <div className="text-base font-medium text-gray-900 mb-3 leading-snug">
        {concern.question}
      </div>
      <div className="text-gray-700 leading-relaxed text-sm">
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

  return (
  <section className="py-12 md:py-16 lg:py-20 bg-[#FDF6E9]">
      {/* Full-bleed wrapper with top curves only */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div ref={ref} className="w-full rounded-t-[36px] md:rounded-t-[48px] lg:rounded-t-[64px] overflow-hidden bg-[#2A2A2A] px-4 sm:px-8 lg:px-16 py-20 md:py-24 lg:py-28 relative min-h-[70vh] md:min-h-[80vh]">
          {/* Green line connecting top curves */}
          <div className="absolute top-0 left-0 right-0 h-20 md:h-24 lg:h-28 bg-gradient-to-b from-[#1A7D3D]/30 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 left-[36px] md:left-[48px] lg:left-[64px] right-[36px] md:right-[48px] lg:right-[64px] h-0.5 bg-[#1A7D3D]"></div>
          
          {/* Header */}
          <div className="text-center mb-12 px-4">
            <div className="max-w-5xl mx-auto relative">
              <div className="relative inline-block">
                {/* Background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#1A7D3D]/20 via-transparent to-[#1A7D3D]/20 blur-3xl"></div>
                
                <h2 className="relative text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Your Concerns,
                  <br />
                  <span className="bg-gradient-to-r from-[#1A7D3D] to-[#1A7D3D]/70 bg-clip-text text-transparent">
                    Already Solved
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
