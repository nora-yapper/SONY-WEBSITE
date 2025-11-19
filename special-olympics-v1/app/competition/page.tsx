import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function CompetitionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        data-section="competition-hero"
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/20 z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Thrilling Competition"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance">Thrilling Competition</h1>
        </div>
      </section>

      {/* Main Content */}
      <section data-section="competition-about" className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              For athletes of all abilities, competition is an opportunity to challenge themselves, measure their
              progress and test their skills.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The fundamental difference in Special Olympics New York competitions is that athletes of all ability
              levels are encouraged to participate. Competitions are structured so that athletes compete with others of
              similar ability.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              And while every athlete will not win, each athlete will be recognized for his or her participation, no
              matter where he or she places.
            </p>
          </div>
        </div>
      </section>

      {/* Advancement Section */}
      <section data-section="competition-advancement" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Advancement</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Athletes are assigned to divisions within each sport based on ability, prior competition performance,
                age and gender. Ideally, each division at a contest is made up of three to eight competitors or teams,
                although this is not always possible.
              </p>
              <p className="text-lg leading-relaxed">
                The primary focus in creating divisions is to provide Special Olympics New York athletes with quality
                competition. This also gives the athletes the opportunity to learn the life changing lessons found in
                competitive sports.
              </p>
              <p className="text-lg leading-relaxed">
                Local, regional and super regional events in New York State are open to all athletes with unlimited
                allocations.
              </p>
              <p className="text-lg leading-relaxed">
                For state, national and world games, quotas determine how many athletes advance to the next level of
                competition. If the number of eligible athletes exceeds the quota, athletes and teams are selected to
                advance based on recent finishes at lower level competitions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="https://specialolympicsny.smugmug.com" target="_blank">
                <Button variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-100 bg-transparent">
                  Photo Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section data-section="competition-get-involved" className="py-20 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Get Involved</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/competition/sports-offered">
              <Card className="bg-white border border-gray-200 hover:border-red-500 transition-all duration-300 h-full group">
                <CardContent className="p-8">
                  <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Sports Offered"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Sports Offered</h3>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Learn More</Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/competition/become-an-athlete">
              <Card className="bg-white border border-gray-200 hover:border-red-500 transition-all duration-300 h-full group">
                <CardContent className="p-8">
                  <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Become an Athlete"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Become an Athlete</h3>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Learn More</Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/get-involved/become-a-coach">
              <Card className="bg-white border border-gray-200 hover:border-red-500 transition-all duration-300 h-full group">
                <CardContent className="p-8">
                  <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Become a Coach"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Become a Coach</h3>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Learn More</Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
