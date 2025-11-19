import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function UnifiedChampionSchoolsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Unified Champion Schools"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">Unified Champion Schools</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              Special Olympics Unified Champion Schools is a comprehensive approach to promoting social inclusion and
              reducing bullying through intentionally planned and implemented activities affecting systems-wide change.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              The program brings together students with and without intellectual disabilities to participate in sports,
              leadership opportunities, and whole-school engagement activities.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Three Components</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">Unified Sports</h3>
                <p className="text-gray-300">
                  Teams comprised of students with and without intellectual disabilities training and competing
                  together.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">Inclusive Youth Leadership</h3>
                <p className="text-gray-300">
                  Student leaders plan and implement awareness and advocacy activities that promote social inclusion.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">Whole School Engagement</h3>
                <p className="text-gray-300">
                  School-wide activities and events that promote respect, dignity, and advocacy for people with
                  intellectual disabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Program Benefits</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Social Inclusion</h3>
                  <p className="text-gray-300">
                    Creates an environment where all students feel valued and included in school activities.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">💪</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Student Leadership</h3>
                  <p className="text-gray-300">
                    Develops leadership skills and empowers students to become advocates for inclusion.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Positive School Climate</h3>
                  <p className="text-gray-300">
                    Reduces bullying and creates a more positive, accepting school environment for all.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Bring Unified Champion Schools to Your School
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join hundreds of schools across New York State in creating a more inclusive environment for all
                students.
              </p>
              <Link href="https://specialolympicsnynearyou.org/inquire-about-us/" target="_blank">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Get Started Today
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
