import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AboutSirSection } from "@/components/about-sir-section"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { CoordinatorsSection } from "@/components/coordinators-section"
import { GlimpsesSection } from "@/components/glimpses-section"
import { JourneySection } from "@/components/journey-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <AboutSirSection />
      <ServicesSection />
      <TeamSection />
      <CoordinatorsSection />
      <GlimpsesSection />
   
      <JourneySection />
      <ContactSection />
      <Footer />
    </main>
  )
}

