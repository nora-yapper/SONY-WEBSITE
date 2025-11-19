import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/20 z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Volunteer Opportunities"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance">Opportunities For Everyone</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Special Olympics New York attracts volunteers from all walks of life, all year 'round. These dedicated
              supporters make our local, regional and state competitions and programs possible.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Become Involved By Volunteering Today!</h2>
            <p className="text-lg text-gray-700 mb-6">
              No matter which volunteer role you choose, each has a game changing impact on the athletes of Special
              Olympics New York.
            </p>
            <p className="text-gray-700">
              Contact us at{" "}
              <a href="mailto:volunteer@nyso.org" className="text-red-600 hover:underline">
                volunteer@nyso.org
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8 md:p-12">
                <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
                  "I started as a day-of volunteer, unaware of just how much Special Olympics would inspire me and
                  change my life for the better. Volunteers across the state come back year after year because working
                  with the athletes really gives our lives a sense of purpose and community. If you're considering
                  becoming a volunteer, I can attest that not only will you not regret it, you'll wonder why you didn't
                  do it sooner!"
                </blockquote>
                <p className="text-gray-900 font-bold">- Jill Warner</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Read More About Our Volunteer Roles
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="event-volunteers"
              className="bg-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-xl font-bold text-gray-900 hover:text-red-600">
                Event Volunteers
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                <p className="mb-6">
                  <strong>Class C –</strong> A short-term opportunity that involves providing assistance at a
                  competition or event, but not necessarily in close contact with our Special Olympics New York
                  athletes. Volunteers aged 13 to 15 must be accompanied by an adult and we welcome any age to become
                  our "fans in the stands."
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-6">
                    <h4 className="text-gray-900 font-bold mb-2">Day of Volunteer</h4>
                    <p className="text-sm mb-2">
                      <span className="text-red-600">Class C</span>
                    </p>
                    <p className="mb-2">
                      During competition, volunteers perform short-term tasks associated with conducting competitions
                      (i.e., timer, scorekeeper, escort, etc.)
                    </p>
                    <p className="text-sm mb-3">
                      <strong>Commitment:</strong> Half day to full day shifts.
                    </p>
                    <Link href="https://portals.specialolympics.org/" target="_blank">
                      <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                        Create Profile
                      </Button>
                    </Link>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h4 className="text-gray-900 font-bold mb-2">Official</h4>
                    <p className="text-sm mb-2">
                      <span className="text-red-600">Class C</span>
                    </p>
                    <p className="mb-2">
                      Serve as a referee, official, or judge at competitions. Please note that this role requires
                      training and/or certification in a specific sport.
                    </p>
                    <p className="text-sm mb-3">
                      <strong>Commitment:</strong> Commitment ranges from a few hours to at least 1 full day at
                      competition.
                    </p>
                    <Link href="https://specialolympicsnynearyou.org/inquire-about-us/" target="_blank">
                      <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="coaches" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold text-gray-900 hover:text-red-600">Coaches</AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                <p className="mb-6">
                  <strong>Class A –</strong> A long-term opportunity that involves having close physical contact and
                  supervision of Special Olympics New York athletes on a regular basis. These Class A volunteers are in
                  a position of authority and must be at least 16 year old.
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-6">
                    <h4 className="text-gray-900 font-bold mb-2">Coach</h4>
                    <p className="text-sm mb-2">
                      <span className="text-red-600">Class A</span>
                    </p>
                    <p className="mb-2">
                      Work directly with athletes to improve their skills in specific Special Olympics sports.
                    </p>
                    <p className="text-sm mb-3">
                      <strong>Commitment:</strong> Participation is seasonal for each sport - the usual commitment is
                      two hours per week for a minimum of eight weeks. Travels to games.
                    </p>
                    <Link href="/get-involved/become-a-coach">
                      <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                        Become a Coach
                      </Button>
                    </Link>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h4 className="text-gray-900 font-bold mb-2">Sport Assistant</h4>
                    <p className="text-sm mb-2">
                      <span className="text-red-600">Class A</span>
                    </p>
                    <p className="mb-2">
                      Assist coaches during practice. Sport Assistants can also be chaperones, venue captains and event
                      organizers.
                    </p>
                    <p className="text-sm mb-3">
                      <strong>Commitment:</strong> Participation is seasonal for each sport - the usual commitment is
                      two hours per week for a minimum of eight weeks. Can travel to games.
                    </p>
                    <Link href="/get-involved/become-a-coach">
                      <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                        Become a Coach
                      </Button>
                    </Link>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="more-opportunities"
              className="bg-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-xl font-bold text-gray-900 hover:text-red-600">
                More Opportunities
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                <p className="leading-relaxed mb-4">
                  Volunteers can also help in additional roles such as: joining our Impact Club, becoming a community
                  level Unified partner, or helping as a sports director, providing medical assistance, or participating
                  in fundraising & media relations or even as taking the charge as a committee member. Student
                  internships are also available and encouraged.
                </p>
                <Link href="https://specialolympicsnynearyou.org/inquire-about-us/" target="_blank">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">Inquire here</Button>
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Register CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Register to Volunteer</h2>
            <Link href="https://portals.specialolympics.org/" target="_blank">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                Create Your Volunteer Profile
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
