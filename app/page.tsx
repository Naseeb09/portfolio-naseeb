import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ExecutiveBento } from "@/components/executive-bento"
import { ProjectsSection } from "@/components/projects-section"
import { AchievementTimeline } from "@/components/achievement-timeline"
import { SideQuestGrid } from "@/components/side-quest-grid"
import { GlitchedTechSection } from "@/components/glitched-tech-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollProgress } from "@/components/scroll-progress"
import { FloatingParticles } from "@/components/floating-particles"

export default function Home() {
  return (
    <main className="min-h-screen bg-black grain cursor-none md:cursor-none">
      <CustomCursor />
      <ScrollProgress />
      <FloatingParticles />
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <ExecutiveBento />
        <ProjectsSection />
        <AchievementTimeline />
        <SideQuestGrid />
        <GlitchedTechSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
