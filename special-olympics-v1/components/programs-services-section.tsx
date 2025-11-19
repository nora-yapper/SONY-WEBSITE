import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Baby, Users, GraduationCap, Heart, Award } from "lucide-react";

export function ProgramsServicesSection() {
  const programs = [
    {
      title: "Young Athletes",
      icon: Baby,
      href: "#",
      description:
        "A sport-and-play introduction builds fundamental skills for children up to age seven while involving families and communities in early inclusive activity.",
    },
    {
      title: "Athlete Leadership Council",
      icon: Users,
      href: "#",
      description:
        "A structured leadership track equips experienced athletes to advise organizational decisions, represent peers, and take on public-facing roles.",
    },
    {
      title: "Unified Champion Schools",
      icon: GraduationCap,
      href: "/unified-champion-schools",
      description:
        "An inclusion-driven school model connects students with and without intellectual disabilities through shared sports and unified engagement.",
    },
    {
      title: "Health and Wellness",
      icon: Heart,
      href: "#",
      description:
        "A health initiative confronts unequal access and improves care quality for people with intellectual disabilities across the state.",
    },
    {
      title: "Law Enforcement Torch Run",
      icon: Award,
      href: "#",
      description:
        "A statewide partnership with law enforcement drives mission awareness, year-round volunteer support, and critical fundraising for free athlete programs.",
      fullWidth: true,
    },
  ];

  return (
    <section className="relative py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 uppercase tracking-tight">
          Programs and Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <Link
                key={program.title}
                href={program.href}
                className={program.fullWidth ? "md:col-span-2" : ""}
              >
                <Card className="p-8 !bg-gray-100 hover:!bg-gray-200 transition-all cursor-pointer h-full border-none">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black mb-2">
                        {program.title}
                      </h3>
                      <p className="text-gray-700 text-sm">
                        {program.description}
                      </p>
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
