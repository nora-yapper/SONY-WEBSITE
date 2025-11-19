import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/20 z-10" />
        <Image src="/placeholder.svg?height=800&width=1600" alt="Our Partners" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance">Our Partners</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              As a partner, the positive benefits of your support reach far beyond the day of a single event.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              By supporting Special Olympics New York, you can change the lives and perceptions of your employees, your
              company, and the community.
            </p>
          </div>

          {/* Join Us CTA */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join Us as a Partner Today!</h2>
            <p className="text-lg text-gray-700 mb-8">
              Below are just a few ways you, your family, friends, co-workers and employees can benefit from a
              partnership with Special Olympics New York:
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
  <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-600 mb-6">Employee Engagement</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Customized Unified experience</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Lunch & Learn for employees to discuss DEI in the workplace</li>
                      <li>
                        Unified Sports experiences, such as bocce or basketball (we bring the athletes, the courts and
                        even lunch) for your employees and customers
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Volunteer Opportunities</h4>
                    <p>
                      Your employees can be side-by-side with our athletes at the next regional or statewide competition
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-600 mb-6">Impact</h3>
                <p className="text-gray-700 mb-4">
                  Your financial support will underwrite key items on and off the field/court:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Venues</li>
                  <li>Uniforms</li>
                  <li>Travel</li>
                  <li>Equipment</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-600 mb-6">Exposure</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Co-branded opportunities – events, programmatic initiatives, merchandise, etc.</li>
                  <li>Media opportunities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border border-gray-200">
            <CardContent className="p-8 md:p-12 text-center">
              <p className="text-lg text-gray-700 mb-6">
                For more information on how your company can partner with Special Olympics New York, please contact our
                Director of Development, Corporate Partnerships or call 518.388.0790.
              </p>
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" asChild>
                <a href="mailto:rbulman@nyso.org">Contact Us</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8 md:p-12">
                <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
                  "NYSID's organizational and staff support of Special Olympics New York has created a dynamic
                  partnership. We are proud to be in it to win it with Special Olympics NY's thousands of athletes
                  throughout New York State. Whether lending a hand at Games or donating new sports equipment, this team
                  effort connects individuals with disabilities to opportunities to compete, lead and inspire. We are
                  excited to be a part of it."
                </blockquote>
                <p className="text-gray-900 font-bold">- Maureen O'Brien</p>
                <p className="text-gray-600">President and CEO, NYSID</p>
                <p className="text-gray-600">Special Olympics New York Sponsor</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Thank You to Our Partners</h2>
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">$100K+</div>
              <p className="text-gray-700">Premier Partners</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">$50K+</div>
              <p className="text-gray-700">Gold Partners</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">$25K+</div>
              <p className="text-gray-700">Silver Partners</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
