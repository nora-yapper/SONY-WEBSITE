"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Heart, Users, Trophy, MapPin, ChevronDown, GraduationCap, Handshake, UsersRound } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"

export function SiteHeader() {
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false)
  const [getInvolvedOpen, setGetInvolvedOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)

  const whoWeAreLinks = [
    {
      href: "/who-we-are",
      label: "About Us",
      icon: Users,
      description: "Learn about our mission and impact",
    },
    {
      href: "/who-we-are/athletes",
      label: "Athletes",
      icon: Trophy,
      description: "For our amazing athletes",
    },
    {
      href: "/who-we-are/families",
      label: "Families",
      icon: Heart,
      description: "Support for families",
    },
    {
      href: "/who-we-are/volunteers",
      label: "Volunteers",
      icon: Handshake,
      description: "Our dedicated volunteers",
    },
    {
      href: "/who-we-are/partners",
      label: "Partners",
      icon: UsersRound,
      description: "Our valued partners",
    },
    {
      href: "/who-we-are/staff-board",
      label: "Staff & Board",
      icon: Users,
      description: "Meet our leadership team",
    },
  ]

  const getInvolvedLinks = [
    {
      href: "/get-involved",
      label: "Get Involved",
      icon: Heart,
      description: "Ways to make a difference",
    },
    {
      href: "/get-involved/volunteer",
      label: "Volunteer",
      icon: Handshake,
      description: "Join our team of volunteers",
    },
    {
      href: "/get-involved/become-a-coach",
      label: "Become a Coach",
      icon: Users,
      description: "Coach our athletes",
    },
  ]

  const programsLinks = [
    {
      href: "/competition",
      label: "Competition",
      icon: Trophy,
      description: "Sports competitions and events",
    },
    {
      href: "/competition/sports-offered",
      label: "Sports Offered",
      icon: Trophy,
      description: "All available sports",
    },
    {
      href: "/competition/become-an-athlete",
      label: "Become an Athlete",
      icon: Users,
      description: "Join as an athlete",
    },
    {
      href: "/unified-champion-schools",
      label: "Unified Champion Schools",
      icon: GraduationCap,
      description: "School programs",
    },
  ]

  const links = [{ href: "/regions", label: "Regions", icon: MapPin }]

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <Trophy className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold tracking-tight text-white">Special Olympics NY</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm text-white/90 lg:flex">
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="gap-4">
                {/* Who We Are Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="bg-transparent text-white/90 hover:text-primary data-[state=open]:text-primary
                               hover:bg-transparent focus:bg-transparent
                               data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent
                               data-[active=true]:bg-transparent"
                  >
                    Who We Are
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-2 p-3 bg-gray-950/95 backdrop-blur-xl border border-gray-800 rounded-lg">
                      {whoWeAreLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="group relative flex items-start gap-3 rounded-xl p-3 transition-all
                                         hover:bg-white/5 hover:ring-1 hover:ring-primary/60
                                         hover:shadow-[0_0_0_1px_rgba(227,30,36,0.25),0_0_20px_rgba(227,30,36,0.15)]
                                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                            >
                              <link.icon className="h-5 w-5 text-primary mt-0.5 shrink-0 group-hover:text-primary/80" />
                              <div>
                                <div className="text-sm font-medium text-white group-hover:text-primary">
                                  {link.label}
                                </div>
                                <p className="text-xs text-gray-400 mt-0.5">{link.description}</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Get Involved Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="bg-transparent text-white/90 hover:text-primary data-[state=open]:text-primary
                               hover:bg-transparent focus:bg-transparent
                               data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent
                               data-[active=true]:bg-transparent"
                  >
                    Get Involved
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-2 p-3 bg-gray-950/95 backdrop-blur-xl border border-gray-800 rounded-lg">
                      {getInvolvedLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="group relative flex items-start gap-3 rounded-xl p-3 transition-all
                                         hover:bg-white/5 hover:ring-1 hover:ring-primary/60
                                         hover:shadow-[0_0_0_1px_rgba(227,30,36,0.25),0_0_20px_rgba(227,30,36,0.15)]
                                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                            >
                              <link.icon className="h-5 w-5 text-primary mt-0.5 shrink-0 group-hover:text-primary/80" />
                              <div>
                                <div className="text-sm font-medium text-white group-hover:text-primary">
                                  {link.label}
                                </div>
                                <p className="text-xs text-gray-400 mt-0.5">{link.description}</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Programs Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="bg-transparent text-white/90 hover:text-primary data-[state=open]:text-primary
                               hover:bg-transparent focus:bg-transparent
                               data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent
                               data-[active=true]:bg-transparent"
                  >
                    Programs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-2 p-3 bg-gray-950/95 backdrop-blur-xl border border-gray-800 rounded-lg">
                      {programsLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="group relative flex items-start gap-3 rounded-xl p-3 transition-all
                                         hover:bg-white/5 hover:ring-1 hover:ring-primary/60
                                         hover:shadow-[0_0_0_1px_rgba(227,30,36,0.25),0_0_20px_rgba(227,30,36,0.15)]
                                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                            >
                              <link.icon className="h-5 w-5 text-primary mt-0.5 shrink-0 group-hover:text-primary/80" />
                              <div>
                                <div className="text-sm font-medium text-white group-hover:text-primary">
                                  {link.label}
                                </div>
                                <p className="text-xs text-gray-400 mt-0.5">{link.description}</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex gap-3">
            <Button
              asChild
              variant="outline"
              className="border-gray-600 bg-gray-800/50 text-white rounded-lg px-5 py-2
                         hover:bg-gray-700/50 hover:border-gray-500 transition-all"
            >
              <Link href="/donate">Donate</Link>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="liquid-glass border-gray-800 p-0 w-64 flex flex-col">
                {/* Brand Header */}
                <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-800">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold tracking-tight text-white text-base">Special Olympics NY</span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                  {/* Who We Are Collapsible */}
                  <Collapsible open={whoWeAreOpen} onOpenChange={setWhoWeAreOpen}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-900 hover:text-primary transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                          <Users className="h-4 w-4" />
                        </span>
                        <span className="text-sm">Who We Are</span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-gray-400 transition-transform ${whoWeAreOpen ? "rotate-180" : ""}`}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="flex flex-col bg-gray-900/50 border-l-2 border-primary/30 ml-4">
                        {whoWeAreLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-center gap-3 pl-8 pr-4 py-2.5 hover:bg-gray-900 hover:text-primary transition-colors"
                          >
                            <link.icon className="h-4 w-4 text-primary/70" />
                            <span className="text-sm">{link.label}</span>
                          </Link>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Get Involved Collapsible */}
                  <Collapsible open={getInvolvedOpen} onOpenChange={setGetInvolvedOpen}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-900 hover:text-primary transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                          <Heart className="h-4 w-4" />
                        </span>
                        <span className="text-sm">Get Involved</span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-gray-400 transition-transform ${getInvolvedOpen ? "rotate-180" : ""}`}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="flex flex-col bg-gray-900/50 border-l-2 border-primary/30 ml-4">
                        {getInvolvedLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-center gap-3 pl-8 pr-4 py-2.5 hover:bg-gray-900 hover:text-primary transition-colors"
                          >
                            <link.icon className="h-4 w-4 text-primary/70" />
                            <span className="text-sm">{link.label}</span>
                          </Link>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Programs Collapsible */}
                  <Collapsible open={programsOpen} onOpenChange={setProgramsOpen}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-900 hover:text-primary transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                          <Trophy className="h-4 w-4" />
                        </span>
                        <span className="text-sm">Programs</span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-gray-400 transition-transform ${programsOpen ? "rotate-180" : ""}`}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="flex flex-col bg-gray-900/50 border-l-2 border-primary/30 ml-4">
                        {programsLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-center gap-3 pl-8 pr-4 py-2.5 hover:bg-gray-900 hover:text-primary transition-colors"
                          >
                            <link.icon className="h-4 w-4 text-primary/70" />
                            <span className="text-sm">{link.label}</span>
                          </Link>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-primary transition-colors"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                        <MapPin className="h-4 w-4" />
                      </span>
                      <span className="text-sm">{l.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* CTA Button at Bottom */}
                <div className="mt-auto border-t border-gray-800 p-4">
                  <Button
                    asChild
                    className="w-full border-gray-600 bg-gray-800/50 text-white rounded-lg px-5 py-2.5
                               hover:bg-gray-700/50 transition-all"
                  >
                    <Link href="/donate">Donate</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
