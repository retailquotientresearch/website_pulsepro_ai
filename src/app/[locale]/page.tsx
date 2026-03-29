import type { Metadata } from 'next'
import { setRequestLocale } from "next-intl/server";
import Hero from "./_components/Hero";

const BASE_URL = 'https://www.pulsepro.ai'

export const metadata: Metadata = {
  title: { absolute: 'PULSE — Enterprise Inspection Platform' },
  description: 'PULSE helps enterprises manage inspections, corrective actions, and field teams across 100,000+ sites. Mobile-first. Up and running in 24 hours.',
  openGraph: {
    title: 'PULSE — Enterprise Inspection Platform',
    description: 'Manage inspections, corrective actions, and field teams across 100,000+ sites. Mobile-first. Up and running in 24 hours.',
    url: `${BASE_URL}/en`,
  },
  twitter: {
    title: 'PULSE — Enterprise Inspection Platform',
    description: 'Manage inspections, corrective actions, and field teams across 100,000+ sites.',
  },
  alternates: {
    canonical: `${BASE_URL}/en`,
    languages: {
      en: `${BASE_URL}/en`,
      ar: `${BASE_URL}/ar`,
      'x-default': `${BASE_URL}/en`,
    },
  },
}
import TrustedBy from "./_components/TrustedBy";
import CustomerHighlights from "./_components/CustomerHighlights";
import CommonWorries from "./_components/CommonWorries";
import CallToAction from "./_components/CallToAction";
import EverythingYoureLookingFor from "./_components/EverythingYoureLookingFor";
import ChaosToClarity from "./_components/ChaosToClarity";
import BeforeAfterPulse from "./_components/BeforeAfterPulse";
import AIIntelligenceLayer from "./_components/AIIntelligenceLayer";
import EnterpriseEssentials from "./_components/EnterpriseEssentials";
import IndustrySolutions from "./_components/IndustrySolutions";
import HowItWorks from "./how-it-works/page";
import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/config/links";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);

  return (
  <main className="min-h-screen bg-[#FFFFEB] overflow-x-hidden">
      {/* Section 1: Hero */}
      <Hero />
      
  {/* Section 2: Trusted by Enterprise Networks */}
  <TrustedBy />

  {/* Section 2b: Featured customer highlights */}
  <CustomerHighlights />

  {/* Section 3: Reels-like Showcase */}
  <EverythingYoureLookingFor />
      
      {/* Section 4: Your Concerns, Already Solved */}
      <CommonWorries/>

     
  {/* Section 5: Chaos to Clarity visual */}
  <ChaosToClarity />

  {/* Section 5b: Before vs After table */}
  <BeforeAfterPulse />

  {/* Section 7: Built for your industry */}
  <IndustrySolutions />

   {/* Section 7b: AI Intelligence Layer */}
      <AIIntelligenceLayer />

   {/* Section 8: Enterprise Essentials */}
      <EnterpriseEssentials />

      {/* ROI teaser strip */}
      <section className="bg-white border-y border-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-lg font-bold text-gray-900">Wondering if PULSE pays for itself?</p>
            <p className="text-gray-500 text-sm mt-1">Most teams see ROI in under 30 days. See your numbers in 30 seconds.</p>
          </div>
          <Link
            href={ROUTES.roiCalculator}
            className="flex-shrink-0 bg-[#16803C] hover:bg-[#14703A] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors whitespace-nowrap"
          >
            Calculate my ROI →
          </Link>
        </div>
      </section>

      {/* Section 8: Call to Action */}
      <CallToAction />

      {/* Section 9: How it Works */}
      <HowItWorks />
    </main>
  );
}
