import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"

export default function BecomeACoachPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/20 z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Coaches Wanted"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance">Coaches Wanted!</h1>
        </div>
      </section>

      {/* Questions Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-6">
            <p className="text-2xl text-gray-700 leading-relaxed">Have sports had a major impact in your life?</p>
            <p className="text-2xl text-gray-700 leading-relaxed">
              Are you looking for a way to give back to the community while doing something you love?
            </p>
            <p className="text-2xl text-gray-700 leading-relaxed">
              Do you want to be part of a movement that changes lives?
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Are you ready to meet your mission?</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                In every corner of the state, there are thousands of athletes with intellectual disabilities waiting to
                discover the champion within.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Join our volunteer coaching ranks and you could be the reason their dreams come true.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://specialolympicsnynearyou.org/inquire-about-us/" target="_blank">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Inquire Here
                </Button>
              </Link>
              <Link href="https://youtu.be/IcmDpDYwtKA" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-500 text-red-600 hover:bg-red-50 bg-transparent"
                >
                  Meet the Coach of the Year
                </Button>
              </Link>
              <Link href="https://webinar.ringcentral.com/webinar/register/WN_N1KxyJCXR3KgGSoV7lYpJA" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-900 hover:bg-gray-100 bg-transparent"
                >
                  Attend a Virtual Open House
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Positions */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Meet your Mission: Become a Coach
          </h2>
          <p className="text-xl text-gray-700 mb-12 text-center">
            The following volunteer coaching positions are currently available:
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="coach" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold text-gray-900 hover:text-red-600">Coach</AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                <p className="leading-relaxed mb-4">
                  Volunteer coaches are a primary reason Special Olympics New York is able to provide its athletes with
                  the opportunity to play 22 sports throughout the year. Athletes train at every level, from sports
                  skills to authentic competition in local communities as well as across the state, nation and even the
                  world.
                </p>
                <p className="leading-relaxed mb-4">
                  Teamwork is the key to success! Special Olympics New York will work with you to build your coaching
                  team, or to add you to an existing club that needs help. Together with local staff, coaching teams
                  coordinate every aspect of a training club, from practices and competition to facilities, uniforms and
                  safety.
                </p>
                <p className="leading-relaxed">
                  Basic knowledge of the chosen sport and some coaching experience is preferred. Training will be
                  provided.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="sport-assistant"
              className="bg-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-xl font-bold text-gray-900 hover:text-red-600">
                Sport Assistant
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                <p className="leading-relaxed mb-4">
                  Coaches can spend much of their time on administrative tasks such as ensuring that athlete paperwork
                  is up to date, ordering uniforms or booking practice facilities. A Sport Assistant serves local
                  training clubs in this capacity so that the athlete experience is uninterrupted and coaches can
                  dedicate more time to athlete training.
                </p>
                <p className="leading-relaxed">No sports experience necessary. Office space can be provided.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="team-manager" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold text-gray-900 hover:text-red-600">
                Team Manager
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-4">
                <p className="leading-relaxed">
                  A Team Manager assumes the role and responsibilities of a Sport Assistant for a single training club,
                  only. No sports experience necessary.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8">
                <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=600&width=1000"
                    alt="Coaching video"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
