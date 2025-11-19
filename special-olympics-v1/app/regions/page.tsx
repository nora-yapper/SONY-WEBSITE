import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function RegionsPage() {
  const regions = [
    {
      name: "Capital",
      slug: "capital-district",
      counties:
        "Albany, Columbia, Fulton, Greene, Hamilton, Montgomery, Rensselaer, Saratoga, Schenectady, Schoharie, Warren, Washington",
    },
    {
      name: "Central New York",
      slug: "central",
      counties: "Cayuga, Herkimer, Jefferson, Lewis, Madison, Oneida, Onondaga, Oswego",
    },
    {
      name: "Genesee Region",
      slug: "genesee",
      counties: "Chemung, Genesee, Livingston, Monroe, Ontario, Schuyler, Seneca, Steuben, Wayne, Wyoming, Yates",
    },
    {
      name: "Hudson Valley",
      slug: "hudson-valley",
      counties: "Dutchess, Orange, Putnam, Rockland, Sullivan, Ulster, Westchester",
    },
    {
      name: "Long Island",
      slug: "long-island",
      counties: "Nassau, Suffolk",
    },
    {
      name: "New York City",
      slug: "new-york-city",
      counties: "Bronx, Brooklyn, Manhattan, Queens, Staten Island",
    },
    {
      name: "North Country",
      slug: "north-country",
      counties: "Clinton, Essex, Franklin, St. Lawrence",
    },
    {
      name: "Southern Tier",
      slug: "southern-tier",
      counties: "Broome, Chenango, Cortland, Delaware, Otsego, Tioga, Tompkins",
    },
    {
      name: "Western New York",
      slug: "western",
      counties: "Allegany, Cattaraugus, Chautauqua, Erie, Niagara, Orleans",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Find Your Region"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">Find Your Region</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              From our headquarters in Albany, Special Olympics New York coordinates events throughout nine regions of
              the state.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Find your region below for contact information to become an athlete, coach, volunteer or become a sponsor.
            </p>
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Regions</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {regions.map((region) => (
              <Card key={region.slug} className="bg-white/5 backdrop-blur-sm border-white/10 h-full">
                <CardContent className="p-8">
                  <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&query=${region.name} New York region`}
                      alt={region.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{region.name}</h3>
                  <p className="text-sm text-gray-400">{region.counties}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">New York State Regions Map</h2>
              <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-800">
                <Image
                  src="/placeholder.svg?height=600&width=1000"
                  alt="New York State Regions Map"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
