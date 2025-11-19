import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function UnifiedSportsSection() {
  return (
    <section className="relative py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-2xl glass-border bg-neutral-900 p-2 overflow-hidden group">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=500&width=800"
                alt="Unified Sports in schools"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 mb-4">
              <Users className="h-4 w-4 text-red-400" />
              <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">Community</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">Everyone deserves to play!</h2>
            <p className="text-gray-300 text-lg mb-6 text-pretty leading-relaxed">
              If you don't have this in your school, you should! Unified Sports promotes inclusion by bringing people
              with and without intellectual disabilities together as teammates.
            </p>
            <Button
              asChild
              className="rounded-full bg-red-600 px-8 py-6 text-base font-semibold text-white hover:bg-red-700 hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <Link href="/unified-champion-schools">Inspire Greatness ~ Get Involved</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
