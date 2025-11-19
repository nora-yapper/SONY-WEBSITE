import { Button } from "@/components/ui/button"
import { Newspaper } from "lucide-react"
import Link from "next/link"

export function NewsSection() {
  return (
    <section className="relative py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 mb-4">
            <Newspaper className="h-4 w-4 text-red-400" />
            <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">Stay Updated</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest News</h2>
          <p className="text-gray-300 text-lg text-pretty leading-relaxed">
            Stay informed about our athletes, events, and the impact we're making across New York.
          </p>
        </div>
      </div>
    </section>
  )
}
