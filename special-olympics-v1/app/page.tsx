import { Hero } from "@/components/hero"
import { AboutWhoWeAreSection } from "@/components/about-who-we-are-section"
import { WaysToGetInvolvedSection } from "@/components/ways-to-get-involved-section"
import { ProgramsServicesSection } from "@/components/programs-services-section"
import { FindYourRegionSection } from "@/components/find-your-region-section"
import { NewsEventsSnapshotSection } from "@/components/news-events-snapshot-section"
import { Footer } from "@/components/footer"

export const dynamic = "force-static"

export default function Page() {
  return (
    <main className="min-h-[100dvh]">
      <Hero />
      <AboutWhoWeAreSection />
      <WaysToGetInvolvedSection />
      <ProgramsServicesSection />
      <FindYourRegionSection />
      <NewsEventsSnapshotSection />
      <Footer />
    </main>
  )
}
