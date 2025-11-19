import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FindYourRegionSection() {
  const regions = [
    {
      name: "Capital District",
      counties:
        "Albany, Columbia, Greene, Rensselaer, Saratoga, Schenectady, Warren, Washington",
      color: "bg-red-600",
      textColor: "text-white",
      href: "/regions",
    },
    {
      name: "Central New York",
      counties:
        "Broome, Cayuga, Chenango, Cortland, Herkimer, Jefferson, Lewis, Madison, Oneida, Onondaga, Oswego, St. Lawrence, Tioga, Tompkins",
      color: "bg-red-600",
      textColor: "text-white",
      href: "/regions",
    },
    {
      name: "Genesee Region",
      counties:
        "Genesee, Livingston, Monroe, Ontario, Orleans, Seneca, Wayne, Wyoming, Yates",
      color: "bg-red-600",
      textColor: "text-white",
      href: "/regions",
    },
    {
      name: "Hudson Valley",
      counties:
        "Dutchess, Orange, Putnam, Rockland, Sullivan, Ulster, Westchester",
      color: "bg-blue-600",
      textColor: "text-white",
      href: "/regions",
    },
    {
      name: "Long Island",
      counties: "Nassau, Suffolk",
      color: "bg-blue-600",
      textColor: "text-white",
      href: "/regions",
    },
    {
      name: "New York City",
      counties: "Bronx, Kings, New York, Queens, Richmond",
      color: "bg-blue-600",
      textColor: "text-white",
      href: "/regions",
    },
    {
      name: "North Country",
      counties:
        "Clinton, Essex, Franklin, Fulton, Hamilton, Montgomery, Saratoga (Northern), Schoharie, Warren",
      color: "bg-black",
      textColor: "text-white",
      href: "/regions",
    },
    {
      name: "Southern Tier",
      counties: "Allegany, Cattaraugus, Chautauqua, Chemung, Schuyler, Steuben",
      color: "bg-gray-600",
      textColor: "text-white",
      href: "/regions",
    },
    {
      name: "Western New York",
      counties: "Erie, Niagara",
      color: "bg-gray-600",
      textColor: "text-white",
      href: "/regions",
    },
  ];

  return (
    <section className="relative py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 uppercase tracking-tight">
          Find Your Region
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regions.map((region) => (
            <Link key={region.name} href={region.href}>
              <Card
                className={`p-8 ${region.color} ${region.textColor} hover:opacity-90 transition-all cursor-pointer h-full border-none`}
              >
                <h3 className="text-2xl font-bold mb-4">{region.name}</h3>
                <p className="text-sm mb-6 opacity-90">{region.counties}</p>
                <Button
                  variant="outline"
                  className={`rounded-full ${
                    region.textColor === "text-black"
                      ? "border-white text-white hover:bg-white hover:text-black"
                      : "border-black text-black hover:bg-black hover:text-white"
                  }`}
                >
                  Learn More
                </Button>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
