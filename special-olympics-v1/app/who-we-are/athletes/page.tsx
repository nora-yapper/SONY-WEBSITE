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
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Every competitive athlete, no matter what their abilities, shares certain qualities. Drive. Perseverance.
              Confidence. For athletes with intellectual disabilities, Special Olympics New York provides a training
              ground where those qualities are refined and given room to grow.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From the Young Athletes program for all children up to age 7, to Unified Sports that bring together
              athletes of all abilities, to credible competitions, Special Olympics New York athletes have the
              opportunity to compete on a level playing field.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Along the way, athletes develop skills that accompany them through every part of life, helping them set an
              example of what people with intellectual disabilities can really do.
            </p>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-12 text-center">
            <div className="text-6xl md:text-8xl font-bold text-primary mb-4">48,000</div>
            <p className="text-xl text-gray-700">New York athletes are involved annually</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/competition/become-an-athlete">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Become an Athlete
              </Button>
            </Link>
            <Link href="/get-involved/become-a-coach">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                Become a Coach
              </Button>
            </Link>
            <Link href="https://specialolympicsnynearyou.org/" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                Find a Training Club
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Athlete Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Our Athletes</h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              Every day, our athletes inspire us with their dedication, perseverance, and competitive spirit. They are
              the heart of Special Olympics New York.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
