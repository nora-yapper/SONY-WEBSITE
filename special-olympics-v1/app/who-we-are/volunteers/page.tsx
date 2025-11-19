import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function VolunteersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/20 z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="World-Class Volunteers"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance">World-Class Volunteers</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Special Olympics New York attracts volunteers from all walks of life, all year 'round. These dedicated
              supporters make our local, regional and state competitions and programs possible.
            </p>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-12 text-center">
            <div className="text-6xl md:text-8xl font-bold text-primary mb-4">21,000</div>
            <p className="text-xl text-gray-700">New York volunteers are active annually</p>
          </div>
        </div>
      </section>

      {/* The Roles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">The Roles</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-4">Event Service Volunteers</h3>
                  <p className="text-gray-700">Work with set-up and take down of ceremonies, among other activities</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-4">Sport-Specific Service Volunteers</h3>
                  <p className="text-gray-700">Support the running of competitions and the experience of athletes</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-4">Fans in the Stands</h3>
                  <p className="text-gray-700">Cheer for traveling athletes</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-4">Social Ambassadors</h3>
                  <p className="text-gray-700">Capture and share the moment</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link href="/get-involved/volunteer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Register to become a Volunteer today!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
