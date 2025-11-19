import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function AthletesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/20 z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Fierce Athletes"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance">Fierce Athletes</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Text with Modern Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Built on <span className="text-primary">Drive</span>, <span className="text-primary">Perseverance</span>, and <span className="text-primary">Confidence</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Special Olympics New York athletes represent the best of what competitive sports can offer—a training ground where determination is refined and confidence grows.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From our Young Athletes program for children up to age 7, through Unified Sports bringing together athletes of all abilities, to world-class competitions—our athletes compete on a level playing field with equal opportunity to succeed.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Athletes competing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-xl shadow-lg max-w-xs">
                <p className="text-4xl font-bold mb-2">48,000+</p>
                <p className="text-sm font-medium">Athletes participating annually</p>
              </div>
            </div>
          </div>

          {/* Skills & Impact Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Excellence</h3>
              <p className="text-gray-700">
                Fair competition with athletes of similar ability levels, recognizing and celebrating every achievement.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Growth</h3>
              <p className="text-gray-700">
                Skills developed through sports accompany athletes throughout life, building confidence and independence.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community & Belonging</h3>
              <p className="text-gray-700">
                Athletes find friendship, support, and a community that celebrates their potential and achievements.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Join?</h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Athletes develop skills, forge friendships, and discover what they're truly capable of achieving.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/competition/become-an-athlete">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8">
                  Become an Athlete
                </Button>
              </Link>
              <Link href="/get-involved/become-a-coach">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white bg-white font-semibold px-8"
                >
                  Become a Coach
                </Button>
              </Link>
              <Link href="https://specialolympicsnynearyou.org/" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white bg-white font-semibold px-8"
                >
                  Find a Club
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Athlete Showcase - Modern Testimonials */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Inspiration in Action</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Our athletes embody the spirit of determination, breaking barriers and setting new standards for what's possible.
              </p>
            </div>

            {/* Testimonial Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-video relative bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Athlete testimonial"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <p className="text-lg text-gray-700 italic mb-6">
                    "I proved my mom wrong. She cries every time she watches me skate and it makes me proud."
                  </p>
                  <p className="font-bold text-gray-900">Cori Piels</p>
                  <p className="text-sm text-gray-600">Figure Skating Athlete</p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-video relative bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Athlete testimonial"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <p className="text-lg text-gray-700 italic mb-6">
                    "Special Olympics gave me the confidence to be myself and know that I can do anything I set my mind to."
                  </p>
                  <p className="font-bold text-gray-900">Athlete Name</p>
                  <p className="text-sm text-gray-600">Track & Field Athlete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
