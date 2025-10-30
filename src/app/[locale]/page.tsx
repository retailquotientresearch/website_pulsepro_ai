import { setRequestLocale } from "next-intl/server";
import Hero from "./_components/Hero";
import UseCases from "./_components/UseCases";
import TrustedBy from "./_components/TrustedBy";
import CommonWorries from "./_components/CommonWorries";          
import CallToAction from "./_components/CallToAction";  
import EverythingYoureLookingFor from "./_components/EverythingYoureLookingFor";
import ChaosToClarity from "./_components/ChaosToClarity";

// Placeholder components for future sections
function PlaceholderSection({ title, number, bgColor = "bg-gray-50" }: { title: string; number: number; bgColor?: string }) {
  return (
    <section className={`py-20 px-4 md:px-6 lg:px-8 ${bgColor}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Section {number}: {title}
        </h2>
        <p className="text-lg text-gray-600">
          This section will be implemented later. Placeholder content for now.
        </p>
      </div>
    </section>
  );
}

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-[#FDF6E9]">
      {/* Section 1: Hero */}
      <Hero />
      
  {/* Section 2: Trusted by Enterprise Networks */}
  <TrustedBy />

  {/* Section 3: Reels-like Showcase */}
  <EverythingYoureLookingFor />
      
      {/* Section 4: Your Concerns, Already Solved */}
      <CommonWorries/>

      {/* Section 5: Enterprise Essentials */}
      <PlaceholderSection title="Enterprise Essentials" number={5} bgColor="bg-[#FDF6E9]" />
      
  {/* Section 6: Use Cases / Industries */}
  <UseCases />

  {/* Section 6.5: Chaos to Clarity visual */}
  <ChaosToClarity />
  
    
      {/* Section 7: Call to Action */}
      <CallToAction />
    </main>
  );
}
