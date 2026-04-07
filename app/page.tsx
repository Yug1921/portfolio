import { HeroSection } from "@/components/hero-section"
import { CollaborateSection } from "@/components/collaborate-section"
import { SignalsSection } from "@/components/signals-section"
import { WorkSection } from "@/components/work-section"
import { GitHubActivitySection } from "@/components/github-activity-section"
import { EducationSection } from "@/components/education-section"
import { PrinciplesSection } from "@/components/principles-section"
import { ColophonSection } from "@/components/colophon-section"
import { SideNav } from "@/components/side-nav"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <SideNav />
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10">
        <HeroSection />
        <CollaborateSection />
        <SignalsSection />
        <PrinciplesSection />
        <WorkSection />
        <GitHubActivitySection />
        <EducationSection />
        <ColophonSection />
      </div>
    </main>
  )
}
