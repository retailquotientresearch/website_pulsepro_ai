import Hero from "./_components/Hero";
import Features from "./_components/Features";
import ClientSurprises from "./_components/ClientSurprises";
import CommonWorries from "./_components/CommonWorries";
import CallToAction from "./_components/CallToAction";
import SeamlessConnections from "./_components/SeamlessConnections";
import StepByStepProcess from "./_components/StepByStepProcess";
import WhyChooseUs from "./_components/WhyChooseUs";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Features />
      <ClientSurprises />
      <CommonWorries />
      <CallToAction />
      <SeamlessConnections />
      <StepByStepProcess />
      <WhyChooseUs />
    </main>
  );
}
