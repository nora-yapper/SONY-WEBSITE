import { Button } from "@/components/ui/button"
import { Trophy, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function TrainingClubsSection() {
  return (
    <section className="relative py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Build a Training Club */}
          <div className="relative rounded-2xl glass-border-enhanced bg-gradient-to-br from-gray-900/60 to-black/60 p-8 overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 mb-4">
                <Trophy className="h-4 w-4 text-red-400" />
                <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">Training</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                Build a Training Club With Us
              </h2>
              <p className="text-gray-300 mb-6 text-pretty leading-relaxed">
                We're seeking passionate coaches, inclusive facilities, and mission-driven sponsors to help us expand
                training opportunities for our athletes.
              </p>
              <Button
                asChild
                className="rounded-full bg-red-600 px-6 py-5 text-sm font-semibold text-white hover:bg-red-700 hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <Link href="/get-involved/building-your-training-club">Learn More</Link>
              </Button>
            </div>
            <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20">
              <Image src="/placeholder.svg?height=300&width=300" alt="Training" fill className="object-cover" />
            </div>
          </div>

          {/* Find Your Region */}
          <div className="relative rounded-2xl glass-border-enhanced bg-gradient-to-br from-gray-900/60 to-black/60 p-8 overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 mb-4">
                <MapPin className="h-4 w-4 text-red-400" />
                <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">Regions</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">Find Your Region</h2>
              <p className="text-gray-300 mb-6 text-pretty leading-relaxed">
                Curious about activities near you? Learn about sports, events and ways to get involved in each of our
                nine regions.
              </p>
              <Button
                asChild
                className="rounded-full bg-red-600 px-6 py-5 text-sm font-semibold text-white hover:bg-red-700 hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <Link href="/regions">Take a Look</Link>
              </Button>
            </div>
            <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20">
              <Image src="/placeholder.svg?height=300&width=300" alt="Regions" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
