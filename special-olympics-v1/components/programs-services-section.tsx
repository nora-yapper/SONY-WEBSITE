import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Baby, Users, GraduationCap, Heart, Award } from "lucide-react"

export function ProgramsServicesSection() {
  const programs = [
    {
      title: "Young Athletes",
      icon: Baby,
      href: "#",
    },
    {
      title: "Athlete Leadership Council",
      icon: Users,
      href: "#",
    },
    {
      title: "Unified Champion Schools",
      icon: GraduationCap,
      href: "/unified-champion-schools",
    },
    {
      title: "Health and Wellness",
      icon: Heart,
      href: "#",
    },
    {
      title: "Law Enforcement Torch Run",
      icon: Award,
      href: "#",
      fullWidth: true,
    },
  ]

  return (
    <section className="relative py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 uppercase tracking-tight">
          Programs and Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => {
            const Icon = program.icon
            return (
              <Link key={program.title} href={program.href} className={program.fullWidth ? "md:col-span-2" : ""}>
                <Card className="p-12 bg-gray-200 hover:bg-gray-300 transition-all cursor-pointer h-full border-none flex items-center justify-center text-center">
                  <div>
                    <Icon className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-black">{program.title}</h3>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
