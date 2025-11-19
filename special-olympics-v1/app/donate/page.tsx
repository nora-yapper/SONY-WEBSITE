import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/20 z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Show Your Support"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance">Show Your Support</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Special Olympics New York relies on the financial contributions of individuals just like you—whether
              through cash donations, in-kind contributions, workplace matches or estate plans. You provide the
              opportunities for athletes across the state to realize their dreams.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Make a Difference Today</h2>
            <p className="text-lg text-gray-700 mb-8">
              Your donation helps provide free sports training, competition, health screenings, and leadership
              opportunities to thousands of athletes with intellectual disabilities across New York State.
            </p>
            <Link
              href="http://support.specialolympics.org/a/new-york?ms=IDMP_DB&utm_source=donatebtn&utm_medium=web&utm_campaign=IDMP"
              target="_blank"
            >
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-xl px-12 py-6">
                Donate Today!
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Your Impact</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-red-600 mb-4">48,000</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Athletes Served</h3>
                  <p className="text-gray-700">
                    Your donation helps provide year-round sports training and competition to thousands of athletes
                    across New York State.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-red-600 mb-4">22</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Olympic-Style Sports</h3>
                  <p className="text-gray-700">
                    Support enables us to offer a wide variety of sports programs throughout the year at no cost to
                    athletes and families.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-red-600 mb-4">21,000</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Active Volunteers</h3>
                  <p className="text-gray-700">
                    Your contribution helps coordinate and support our dedicated volunteer network across nine regions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-red-600 mb-4">100%</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Free to Athletes</h3>
                  <p className="text-gray-700">
                    All programming, including training, competition, uniforms, and travel, is provided at no cost to
                    athletes and families.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Ways to Give</h2>

          <div className="space-y-6">
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-600 mb-4">One-Time Donation</h3>
                <p className="text-gray-700 mb-4">
                  Make a single gift to support Special Olympics New York athletes and programs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Monthly Giving</h3>
                <p className="text-gray-700 mb-4">
                  Become a sustaining donor with automatic monthly contributions that provide ongoing support.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Corporate Partnerships</h3>
                <p className="text-gray-700 mb-4">
                  Partner with us to engage your employees and make a lasting impact in your community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Planned Giving</h3>
                <p className="text-gray-700 mb-4">Leave a lasting legacy through estate planning and planned gifts.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-600 mb-4">In-Kind Donations</h3>
                <p className="text-gray-700 mb-4">
                  Donate goods, services, or equipment to support our athletes and programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Every donation, no matter the size, helps change lives and create opportunities for athletes with
              intellectual disabilities.
            </p>
            <Link
              href="http://support.specialolympics.org/a/new-york?ms=IDMP_DB&utm_source=donatebtn&utm_medium=web&utm_campaign=IDMP"
              target="_blank"
            >
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-xl px-12 py-6">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
