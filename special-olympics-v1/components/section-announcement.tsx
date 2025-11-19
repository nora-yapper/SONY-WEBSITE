"use client"

import { useEffect, useState } from "react"

export function SectionAnnouncement() {
  const [currentSection, setCurrentSection] = useState<string>("")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let lastSection = ""

    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]")
      let foundSection = ""

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 150 && rect.bottom >= 150) {
          foundSection = section.getAttribute("data-section") || ""
        }
      })

      if (foundSection && foundSection !== lastSection) {
        lastSection = foundSection
        setCurrentSection(foundSection)
        setIsVisible(true)

        // Hide after 2 seconds
        setTimeout(() => {
          setIsVisible(false)
        }, 2000)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const formatSectionName = (section: string) => {
    return section
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  if (!isVisible || !currentSection) return null

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40 pointer-events-none animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="bg-gray-900/95 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 shadow-lg">
        <p className="text-sm font-medium text-gray-300">
          You are now entering{" "}
          <span className="text-primary font-bold uppercase tracking-wide">({formatSectionName(currentSection)})</span>{" "}
          section
        </p>
      </div>
    </div>
  )
}
