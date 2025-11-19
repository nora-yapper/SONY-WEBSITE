import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function FamiliesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/20 z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Strong Families"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance">Strong Families</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              For the athletes of Special Olympics New York, families are the source of unending love and encouragement.
              They form the most caring, positive cheering squad and support team any athlete could hope to find.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              As the family member of a Special Olympics New York athlete, you have the opportunity to become a part of
              this extraordinary network. Become a coach of a sport you love or support the Young Athletes program for
              kids. Get an up-close view of your loved one's adventure as a volunteer at competitions. Or become the
              loudest fan in the stands.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whatever you choose, take the opportunity to share ideas, concerns and interests with other families. You
              may help someone else, learn about yourself or even discover that your family member with an intellectual
              disability has skills that you haven't seen yet.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
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
            <Link href="/get-involved/volunteer">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-200 text-gray-900 hover:bg-gray-100 bg-transparent"
              >
                Become a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=600" alt="Family support" fill className="object-cover" />
            </div>
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Family celebration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
