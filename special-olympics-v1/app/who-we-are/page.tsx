import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        data-section="who-we-are-hero"
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
  <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/20 z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Special Olympics athletes"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance">This Is Who We Are</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Competitive sports breed common ground. Athletes, coaches and the people who support them come together for
            the love of a sport or the thrill of a game.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section data-section="who-we-are-mission" className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Through Special Olympics New York, though, everyone is included. Athletes with intellectual disabilities
              have the opportunity to challenge themselves in fair and even competition. Win or lose, they develop their
              own character, make friends and find unknown wells of determination within themselves.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              If you're a fan of unity, acceptance, empowerment, dignity, pride and fun, you're a fan of Special
              Olympics New York.
            </p>
            <p className="text-2xl font-bold text-primary mt-8">You're one of us.</p>
          </div>

          {/* Mission Section */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide year-round sports training and athletic competition in a variety of Olympic-style sports for
              children and adults with intellectual disabilities, giving them continuing opportunities to develop
              physical fitness, demonstrate courage, experience joy and participate in a sharing of gifts, skills and
              friendship with their families, other Special Olympics athletes and the community.
            </p>
          </div>

          {/* History Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">History of Special Olympics in New York</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Eunice Kennedy Shriver founded Special Olympics in 1968. Just one year later, Dorothy Buehring Phillips
              inaugurated the program in New York—and the state sent its first delegation of athletes and coaches to the
              Northeast Regional Special Olympics competition in Boston, Mass. Special Olympics New York was
              incorporated in 1970 with Phillips as its first State Director. In June 1970, Rochester hosted the first
              State Summer Games. Today, Special Olympics New York is the largest program in the United States and one
              of the largest in the world.
            </p>
          </div>
        </div>
      </section>

      {/* Links Grid */}
      <section data-section="who-we-are-team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link href="/who-we-are/athletes">
              <Card className="bg-white border border-gray-200 hover:border-red-500 transition-all duration-300 h-full group">
                <CardContent className="p-8">
                  <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Athletes"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Athletes</h3>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/who-we-are/families">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 h-full group">
                <CardContent className="p-8">
                  <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Families"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Families</h3>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/who-we-are/volunteers">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 h-full group">
                <CardContent className="p-8">
                  <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Volunteers"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteers</h3>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/who-we-are/partners">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 h-full group">
                <CardContent className="p-8">
                  <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Partners"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Partners</h3>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/who-we-are/staff-board">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 h-full group">
                <CardContent className="p-8">
                  <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Staff & Board"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Staff & Board</h3>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
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
