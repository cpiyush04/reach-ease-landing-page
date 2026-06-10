import { GlowBackground } from '@/components/site/glow-background'
import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { ProblemSection } from '@/components/site/problem-section'
import { PlatformSection } from '@/components/site/platform-section'
import { WorkflowSection } from '@/components/site/workflow-section'
import { ProductSection } from '@/components/site/product-section'
import { UseCasesSection } from '@/components/site/use-cases-section'
import { AboutSection } from '@/components/site/about-section'
import { EarlyAccessSection } from '@/components/site/early-access-section'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <GlowBackground />
      <Navbar />
      <Hero />
      <ProblemSection />
      <PlatformSection />
      <WorkflowSection />
      <ProductSection />
      <UseCasesSection />
      <AboutSection />
      <EarlyAccessSection />
      <Footer />
    </main>
  )
}
