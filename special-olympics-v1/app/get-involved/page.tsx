import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function GetInvolvedPage() {
  return (
  <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        data-section="get-involved-hero"
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/20 z-10" />
        <Image src="/placeholder.svg?height=800&width=1600" alt="Get Involved" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance">Get Involved</h1>
        </div>
      </section>

      {/* Main Content */}
      <section data-section="get-involved-intro" className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Dozens of sports and programs run at any time—and they really do take the support of a village. More than
              100,000 athletes, coaches and volunteers, as well as family members and fans, make Special Olympics New
              York the extraordinary experience that it is.
            </p>
            <p className="text-2xl font-bold text-primary mt-8">How would you like to join our team?</p>
          </div>
        </div>
      </section>

      {/* Participate With Us Section */}
    <section data-section="get-involved-opportunities" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Participate With Us</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">Learn More</Button>
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
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">Learn More</Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/get-involved/volunteer">
              <Card className="bg-white border border-gray-200 hover:border-red-500 transition-all duration-300 h-full group">
                <CardContent className="p-8">
                  <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Volunteer"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer</h3>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">Learn More</Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/donate">
              <Card className="bg-white border border-gray-200 hover:border-red-500 transition-all duration-300 h-full group">
                <CardContent className="p-8">
                  <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Donate"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Donate</h3>
                  <Button
                    variant="outline"
                    className="w-full border-gray-200 text-primary hover:bg-red-50 bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
