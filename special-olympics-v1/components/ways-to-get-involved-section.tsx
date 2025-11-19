import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Users, Castle as Whistle, Trophy, Heart } from "lucide-react";

export function WaysToGetInvolvedSection() {
  const ways = [
    {
      title: "Become an Athlete",
      description: "Join our community and compete in Olympic-type sports",
      icon: Trophy,
      href: "/competition/become-an-athlete",
    },
    {
      title: "Become a Coach",
      description:
        "Guide and mentor our athletes to reach their full potential",
      icon: Whistle,
      href: "/get-involved/become-a-coach",
    },
    {
      title: "Join as a Volunteer",
      description:
        "Support our events, programs, and athletes in countless ways",
      icon: Users,
      href: "/get-involved/volunteer",
    },
    {
      title: "Other Ways to Get Involved",
      description:
        "Sponsor an event, host a fundraiser, become a Unified partner, join our committees, careers, and help us building training clubs",
      icon: Heart,
      href: "/get-involved",
    },
  ];

  return (
    <section className="relative py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 uppercase tracking-tight">
          Ways to Get Involved
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ways.map((way) => {
            const Icon = way.icon;
            return (
              <Link key={way.title} href={way.href}>
                <Card className="p-8 !bg-gray-100 hover:!bg-gray-200 transition-all cursor-pointer h-full border-none">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black mb-2">
                        {way.title}
                      </h3>
                      <p className="text-gray-700 text-sm">{way.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
