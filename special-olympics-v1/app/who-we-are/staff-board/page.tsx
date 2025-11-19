import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function StaffBoardPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/20 z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Meet Our Team"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance">Meet Our Team</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              While the free sports training and competition, in-school programming, athlete health initiatives and
              leadership training we provide rely heavily on the efforts of an army of volunteers and partners
              throughout the state, none would be possible without the guidance of our board and the dedication of our
              staff.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our experienced executive leaders help make Special Olympics New York one of the most trusted, successful
              and sustainable nonprofit organizations in the country.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Leadership</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-800">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Stacey Hengsterman"
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Stacey Hengsterman</h3>
                  <p className="text-primary">President & CEO</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-800">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Casey Vattimo"
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Casey Vattimo</h3>
                  <p className="text-gray-400 mb-2">Senior Vice President</p>
                  <p className="text-sm text-gray-500">External Relations</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-800">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Steve Fuller"
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Steve Fuller</h3>
                  <p className="text-gray-400 mb-2">Vice President</p>
                  <p className="text-sm text-gray-500">Program & Competition</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-800">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Ray Polikoski"
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ray Polikoski</h3>
                  <p className="text-gray-400 mb-2">Vice President</p>
                  <p className="text-sm text-gray-500">Finance & Administration</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-800">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Renee Snyder"
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Renee Snyder</h3>
                  <p className="text-gray-400 mb-2">Vice President</p>
                  <p className="text-sm text-gray-500">Development</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-800">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Diane Colonna"
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Diane Colonna</h3>
                  <p className="text-gray-400 mb-2">Vice President</p>
                  <p className="text-sm text-gray-500">Downstate Operations</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-800">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Nathan Johnson"
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nathan Johnson</h3>
                  <p className="text-gray-400 mb-2">Executive Director</p>
                  <p className="text-sm text-gray-500">Unified Sports</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Board of Directors</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Ceylane Meyers-Ruff", title: "Chair" },
              { name: "Kan Kotecha", title: "Vice Chair" },
              { name: "Adam Merino", title: "Treasurer" },
              { name: "Ani Mooney", title: "Secretary" },
              { name: "Paul Asaro", title: "Athlete" },
              { name: "Joseph Belluck", title: "" },
              { name: "Maricela Brea", title: "" },
              { name: "Kathy S. Brooks", title: "" },
              { name: "Dr. Abra Caroci", title: "" },
              { name: "Mitch Cohen", title: "" },
              { name: "Robert S. Cohen, Esq.", title: "" },
              { name: "Shaun Cuddeback", title: "" },
              { name: "Anishah Cumber-Taj, Esq.", title: "" },
              { name: "Frank Downing", title: "" },
              { name: "Andrew Guelcher", title: "" },
              { name: "Christina Foti", title: "" },
              { name: "Elias Lambros", title: "" },
              { name: "Kerri Neifeld", title: "" },
              { name: "Todd Nelson", title: "" },
              { name: "Gary Pierre", title: "" },
              { name: "Ron Ward", title: "Athlete & Statewide ALC Chair" },
            ].map((member, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                  {member.title && <p className="text-primary text-sm">{member.title}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
