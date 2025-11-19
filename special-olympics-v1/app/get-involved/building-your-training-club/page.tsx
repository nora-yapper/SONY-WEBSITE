import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Building2, Heart, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BuildingTrainingClubPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Athletes training together"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/20" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 mb-6 backdrop-blur-sm">
            <Trophy className="h-4 w-4 text-red-600" />
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">Training Clubs</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Let's Build a Training Club Together
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 text-pretty leading-relaxed">
            Join the Movement. Change Lives. Inspire Champions.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            We're looking for passionate coaches, welcoming facilities, and mission-driven sponsors to join us in
            creating more training opportunities for athletes with intellectual disabilities.
          </p>
        </div>
      </section>

      {/* Why Get Involved Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Get Involved?</h2>
            <p className="text-lg text-gray-700 text-pretty leading-relaxed">
              Thousands of New Yorkers with intellectual disabilities are waiting for the chance to train, compete, and
              grow as part of a Special Olympics team. With your support, we can launch new training clubs in
              communities that need them most.
            </p>
            <p className="text-lg text-gray-700 mt-4 text-pretty leading-relaxed">
              Whether you're an experienced coach, a facility owner, or a business leader ready to give back—you have
              the power to transform lives in partnership with us.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/SKkVrCunafI"
                  title="Building Your Training Club"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">See the Impact in Action</h3>
                <p className="text-gray-700 text-pretty">
                  Watch how training clubs are transforming lives and building inclusive communities across New York.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Make an Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Ways to Make an Impact</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Become a Coach */}
            <Card className="bg-white border border-gray-200 hover:border-red-500 transition-all">
              <CardContent className="p-8">
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Coach with athletes"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 mb-4">
                  <Trophy className="h-4 w-4 text-red-600" />
                  <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">Coach</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Become a Coach</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Share your love of sports, leadership, and inclusion. We provide education, training and support—no
                  prior experience required.
                </p>
              </CardContent>
            </Card>

            {/* Open Your Doors */}
            <Card className="bg-white border border-gray-200 hover:border-red-500 transition-all">
              <CardContent className="p-8">
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Sports facility"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 mb-4">
                  <Building2 className="h-4 w-4 text-red-600" />
                  <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">Facility</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Open Your Doors to Inclusion</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  From gyms and fields to pools and courts, your space could become a hub for year-round sports training
                  and an inclusive community.
                </p>
              </CardContent>
            </Card>

            {/* Sponsor a Club */}
            <Card className="bg-white border border-gray-200 hover:border-red-500 transition-all">
              <CardContent className="p-8">
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Athletes with equipment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 mb-4">
                  <Heart className="h-4 w-4 text-red-600" />
                  <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">Sponsor</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sponsor a Club</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our athletes never pay to play. Support equipment, uniforms, travel, and more. Your brand gets
                  recognized—and your impact lasts a lifetime.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Journey as a Champion for Inclusion?
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-pretty leading-relaxed">
              Fill out the form to start your journey as a champion for inclusion.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-red-600 px-8 py-6 text-lg font-semibold text-white hover:bg-red-700 hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <Link href="https://www.specialolympics-ny.org/tcsignup/" target="_blank" rel="noopener noreferrer">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
