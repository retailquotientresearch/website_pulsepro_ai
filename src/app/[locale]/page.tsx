import Hero from "./_components/Hero";
import Features from "./_components/Features";
import ClientSurprises from "./_components/ClientSurprises";
import FAQ from "./_components/FAQ";
import Integrations from "./_components/Integrations";
import Process from "./_components/Process";
import Differentiators from "./_components/Differentiators";
import CTA from "./_components/CTA";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Features />
      <ClientSurprises />
      <FAQ />
      <CTA />
      <Integrations />
      <Process />
      <Differentiators />
    </main>
  );
}
