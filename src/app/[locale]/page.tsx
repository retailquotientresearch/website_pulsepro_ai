import { setRequestLocale } from "next-intl/server";
import Hero from "./_components/Hero";
import UseCases from "./_components/UseCases";
import TrustedBy from "./_components/TrustedBy";
import CommonWorries from "./_components/CommonWorries";          
import CallToAction from "./_components/CallToAction";  
import EverythingYoureLookingFor from "./_components/EverythingYoureLookingFor";
import ChaosToClarity from "./_components/ChaosToClarity";
import EnterpriseEssentials from "./_components/EnterpriseEssentials";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);

  return (
  <main className="min-h-screen bg-[#FDF6E9] overflow-x-hidden">
      {/* Section 1: Hero */}
      <Hero />
      
  {/* Section 2: Trusted by Enterprise Networks */}
  <TrustedBy />

  {/* Section 3: Reels-like Showcase */}
  <EverythingYoureLookingFor />
      
      {/* Section 4: Your Concerns, Already Solved */}
      <CommonWorries/>

      {/* Section 5: Enterprise Essentials */}
      <EnterpriseEssentials />
      
  {/* Section 6: Use Cases / Industries */}
  <UseCases />

  {/* Section 6.5: Chaos to Clarity visual */}
  <ChaosToClarity />
  
    
      {/* Section 7: Call to Action */}
      <CallToAction />
    </main>
  );
}
