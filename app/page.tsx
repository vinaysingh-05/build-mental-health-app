import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { TrustSection } from '@/components/trust-section'
import { AboutSection } from '@/components/about-section'
import { FeaturesSection } from '@/components/features-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <Footer />
    </main>
  )
}
