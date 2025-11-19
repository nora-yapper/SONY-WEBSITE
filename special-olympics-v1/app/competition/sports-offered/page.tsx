import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"

export default function SportsOfferedPage() {
  const sports = [
    {
      id: "athletics",
      name: "Athletics",
      season: "Summer: March through June, with State Summer Games in June",
      governing: "USA Track & Field",
      governingUrl: "http://www.usatf.org",
      description:
        "The sport of athletics encourages athletes of all abilities and ages to compete at their optimum level. Through the track-and-field-based athletics training program, participants can develop total fitness to compete in any sport. As with all Special Olympics sports, athletics offers athletes the opportunity to learn through skill development and competitive settings and to be involved in large social settings.",
    },
    {
      id: "basketball",
      name: "Basketball",
      season: "Summer: March through June, with State Summer Games in June",
      governing: "National Federation of State High School Associations",
      governingUrl: "http://www.usabasketball.com",
      description:
        "Basketball is a one of the top sports at Special Olympics. Players take it up at all ages and at all abilities, from young players learning to handle the ball and keep it under control while dribbling to older, more experienced players who have the moves and know the strategies to play challenging ball.",
    },
    {
      id: "bocce",
      name: "Bocce",
      season: "Fall: July through September, with State Fall Games in October",
      governing: "World Bocce Association",
      governingUrl: "http://www.worldbocce.org",
      description:
        "Bocce is an Italian game. The basic principle of the sport is to roll a bocce ball closest to the target ball, which is called a pallina. Bocce as a Special Olympics sport provides people with special needs the opportunity to have social contact, develop physically and to gain self-confidence. Next to Soccer and Golf, Bocce is the third most participated sport in the world.",
    },
    {
      id: "bowling",
      name: "Bowling",
      season: "Summer: March through June, with State Summer Games in June",
      governing: "USA Bowling",
      governingUrl: "http://www.bowl.com",
      description:
        'Ten-pin Bowling commonly called "Bowling" in the US, is a competitive sport in which a player (the "bowler") rolls a bowling ball down a wooden or synthetic lane with the objective of scoring points by knocking down as many pins as possible. Bowling is considered to be among the most popular sport in the Special Olympics.',
    },
    {
      id: "cycling",
      name: "Cycling",
      season: "Fall: July through October, with State Fall Games in October",
      governing: "USA Cycling",
      governingUrl: "http://www.usacycling.org",
      description:
        "Cycling is a fascinating sport that requires good physical condition, balance, endurance and tactics. Special Olympics include time trial and road race events in different distances. Every athlete riding his/ hers bike aims at traveling at the best possible time and arrive at the finish line first.",
    },
    {
      id: "distance-running",
      name: "Distance Running",
      season: "Fall: July through October, with State Fall Games in October",
      governing: "USA Track & Field",
      governingUrl: "http://www.usatf.org",
      description:
        "The sport of athletics encourages athletes of all abilities and ages to compete at their optimum level. Through the track-and-field-based athletics training program, participants can develop total fitness to compete in any sport.",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Choose Your Sport"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">Choose Your Sport</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed">
              Showcase talents. Build skills. Develop character traits. Change stereotypes about people with
              intellectual abilities. These are just some of the opportunities provided by Special Olympics New York,
              through training and competition in 22 Olympic-style sports.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Participation is free to registered athletes. We cover the costs of insurance, facilities, equipment,
              uniforms, awards, housing and meals at events, and more. Special Olympics New York rules support the
              widest range of abilities possible, giving all athletes a level playing field.
            </p>
          </div>

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
          </div>
        </div>
      </section>

      {/* Sports List */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our 22 Sports</h2>

            <Accordion type="single" collapsible className="space-y-4">
              {sports.map((sport) => (
                <AccordionItem
                  key={sport.id}
                  value={sport.id}
                  className="bg-white/5 backdrop-blur-sm border-white/10 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-xl font-bold text-white hover:text-primary">
                    {sport.name}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4 space-y-4">
                    <p className="leading-relaxed">{sport.description}</p>
                    <div className="border-t border-white/10 pt-4 space-y-2">
                      <p>
                        <strong className="text-white">Season:</strong> {sport.season}
                      </p>
                      <p>
                        <strong className="text-white">Governing Body:</strong>{" "}
                        <a
                          href={sport.governingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {sport.governing}
                        </a>
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 mt-12">
              <CardContent className="p-8 text-center">
                <p className="text-gray-300 mb-4">
                  This is a sample of our sports. We offer 22 Olympic-style sports across three seasons.
                </p>
                <Link href="/competition/become-an-athlete">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    Get Started Today
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
