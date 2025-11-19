import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-20 sm:py-32">
          <div className="mb-6 flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-primary/80">Authentic Champions</p>
          </div>

          <h1 className="mt-3 text-center text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-balance">
            <span className="block text-white">DISCOVER AND UNLEASH</span>
            <span className="block text-primary drop-shadow-[0_0_20px_rgba(227,30,36,0.35)]">THE CHAMPION WITHIN</span>
          </h1>

          <p className="mt-8 max-w-3xl text-center text-xl text-gray-300 text-pretty leading-relaxed">
            Special Olympics New York provides inclusive opportunities for people with intellectual disabilities to
            discover and unleash the champion within. Our athletes experience the thrill of competing in authentic
            sports.
          </p>

          <div className="mt-12 w-full max-w-5xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border-4 border-white/10">
              <Image
                src="/placeholder.svg?height=800&width=1400"
                alt="Special Olympics athletes celebrating"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="rounded-full bg-primary px-10 py-7 text-lg font-semibold text-white hover:bg-primary/90 hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <Link href="/competition/become-an-athlete">Become an Athlete</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-2 border-white px-10 py-7 text-lg font-semibold text-white hover:bg-white hover:text-black transition-all bg-transparent"
            >
              <Link href="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
