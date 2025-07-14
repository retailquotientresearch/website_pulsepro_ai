import Hero from './_components/Hero'
import Features from './_components/Features'
import Testimonials from './_components/Testimonials'
import FAQ from './_components/FAQ'
import Integrations from './_components/Integrations'
import Process from './_components/Process'
import Differentiators from './_components/Differentiators'
import CTA from './_components/CTA'
import Footer from './_components/Footer'

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
      <Integrations />
      <Process />
      <Differentiators />
      <Footer />
    </main>
  )
}