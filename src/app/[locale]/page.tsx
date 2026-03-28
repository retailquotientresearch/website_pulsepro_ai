import { setRequestLocale } from "next-intl/server";
import Hero from "./_components/Hero";
import UseCases from "./_components/UseCases";
import TrustedBy from "./_components/TrustedBy";
import CommonWorries from "./_components/CommonWorries";
import CallToAction from "./_components/CallToAction";
import EverythingYoureLookingFor from "./_components/EverythingYoureLookingFor";
import ChaosToClarity from "./_components/ChaosToClarity";
import EnterpriseEssentials from "./_components/EnterpriseEssentials";
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

  {/* Section 3: Reels-like Showcase */}
  <EverythingYoureLookingFor />
      
      {/* Section 4: Your Concerns, Already Solved */}
      <CommonWorries/>

     
  {/* Section 5: Chaos to Clarity visual */}
  <ChaosToClarity />
      
  {/* Section 6: Use Cases / Industries */}
  <UseCases />

   {/* Section 7: Enterprise Essentials */}
      <EnterpriseEssentials />

      {/* ROI teaser strip */}
      <section className="bg-white border-y border-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-lg font-bold text-gray-900">Wondering if PulsePro.ai pays for itself?</p>
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
