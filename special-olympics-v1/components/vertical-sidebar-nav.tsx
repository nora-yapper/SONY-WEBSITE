"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Heart,
  Trophy,
  Menu,
  X,
  Calendar,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SubItem {
  label: string;
  href: string;
}

interface NavItem {
  id: string;
  label: string;
  href?: string;
  icon?: any;
  subitems?: SubItem[];
}

const navItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    id: "who-we-are",
    label: "Who We Are",
    icon: Users,
    subitems: [
      { label: "Our Athletes", href: "/who-we-are/athletes" },
      { label: "Staff/Board", href: "/who-we-are/staff-board" },
      { label: "Regions", href: "/regions" },
      { label: "Strategic Plan", href: "#" }, // Missing page
    ],
  },
  {
    id: "get-involved",
    label: "Get Involved",
    icon: Heart,
    subitems: [
      { label: "Volunteers", href: "/get-involved/volunteer" },
      { label: "Coaches", href: "/get-involved/become-a-coach" },
      { label: "Athletes", href: "/competition/become-an-athlete" },
      { label: "Other Ways", href: "#" }, // Missing page
    ],
  },
  {
    id: "programs",
    label: "Programs",
    icon: Trophy,
    subitems: [
      { label: "Young Athletes", href: "#" }, // Missing page
      { label: "Athlete Leadership Council", href: "#" }, // Missing page
      { label: "Unified Champion Schools", href: "/unified-champion-schools" },
      { label: "Health and Wellness", href: "#" }, // Missing page
      { label: "Law Enforcement Torch Run", href: "#" }, // Missing page
    ],
  },
];

const bottomNavItems: NavItem[] = [
  {
    id: "calendar",
    label: "Calendar",
    href: "#", // Missing page
    icon: Calendar,
  },
  {
    id: "donate",
    label: "Donate",
    href: "/donate",
    icon: null,
  },
];

export function VerticalSidebarNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({
    "who-we-are": false,
    "get-involved": false,
    programs: false,
  });

  const toggleDropdown = (id: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]");
      let currentSection = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = section.getAttribute("data-section") || "home";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const matchedItem = navItems.find((item) => {
      if (pathname === item.href) return true;
      if (item.subitems?.some((sub) => pathname === sub.href)) return true;
      return false;
    });
    if (matchedItem) {
      setActiveSection(matchedItem.id);
    }
  }, [pathname]);

  const scrollToSection = (sectionId: string, href?: string) => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-white text-gray-900 flex-col z-50 border-r border-gray-200">
        {/* Brand */}
        <div className="py-6 px-6 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-16 w-48 relative shrink-0">
              <Image
                src="/SONY_Logo.png"
                alt="Special Olympics NY"
                width={192}
                height={64}
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {navItems.map((item) => {
            const isActive =
              activeSection === item.id || pathname === item.href;
            const hasActiveSubitem = item.subitems?.some(
              (sub) => pathname === sub.href
            );
            const itemIsActive = isActive || hasActiveSubitem;
            const Icon = item.icon;
            const isOpen = openDropdowns[item.id];

            return (
              <div key={item.id} className="mb-2">
                {item.subitems ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      aria-expanded={isOpen}
                      aria-current={itemIsActive ? "page" : undefined}
                      className={`flex items-center justify-between gap-3 w-full px-4 py-3 rounded-lg transition-all duration-300
                        ${
                          itemIsActive
                            ? "bg-red-500 text-white border-l-4 border-red-500"
                            : "hover:bg-gray-100 text-gray-700 border-l-4 border-transparent"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        {Icon && <Icon className="h-5 w-5 shrink-0" />}
                        <span className="font-semibold text-sm uppercase tracking-wide">
                          {item.label}
                        </span>
                      </div>
                      {isOpen ? (
                        <ChevronDown className="h-4 w-4 shrink-0" />
                      ) : (
                        <ChevronRight className="h-4 w-4 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="flex flex-col gap-1 mt-2 pl-6">
                        {item.subitems.map((subitem) => (
                          <Link
                            key={subitem.label}
                            href={subitem.href}
                            className={`text-sm py-2 px-3 rounded transition-all duration-300 text-gray-700 hover:text-gray-900 hover:bg-gray-100 hover:pl-4 text-left
                              ${
                                pathname === subitem.href
                                  ? "bg-red-50 text-gray-900 font-semibold"
                                  : ""
                              }`}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-300 group
                      ${
                        isActive
                          ? "bg-red-500 text-white border-l-4 border-red-500"
                          : "hover:bg-gray-100 text-gray-700 border-l-4 border-transparent"
                      }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {Icon && <Icon className="h-5 w-5 shrink-0" />}
                    <span className="font-semibold text-sm uppercase tracking-wide">
                      {item.label}
                    </span>
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        <div className="border-t border-gray-200 p-4 space-y-2">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const isDonate = item.id === "donate";
            return (
              <Link
                key={item.id}
                href={item.href || "#"}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-300
                  ${
                    isDonate
                      ? "border border-red-500 text-red-600 hover:bg-red-50"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
              >
                {isDonate ? (
                  <div className="h-5 w-5 relative shrink-0">
                    <Image
                      src="/SONY_Icon.png"
                      alt="Donate"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                ) : Icon ? (
                  <Icon className="h-5 w-5 shrink-0" />
                ) : null}
                <span
                  className={`font-semibold text-sm uppercase tracking-wide ${
                    isDonate ? "text-red-600" : ""
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </aside>

      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          size="icon"
          className="bg-white/90 backdrop-blur-sm border border-gray-200 hover:bg-gray-100"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <aside className="lg:hidden fixed left-0 top-0 h-screen w-64 bg-white text-gray-900 flex flex-col z-50 border-r border-gray-200 animate-in slide-in-from-left duration-300">
            {/* Brand */}
            <div className="py-6 px-6 border-b border-gray-200">
              <Link
                href="/"
                className="flex items-center gap-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="h-16 w-48 relative shrink-0">
                  <Image
                    src="/SONY_Logo.png"
                    alt="Special Olympics NY"
                    width={192}
                    height={64}
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-4 px-3">
              {navItems.map((item) => {
                const isActive =
                  activeSection === item.id || pathname === item.href;
                const hasActiveSubitem = item.subitems?.some(
                  (sub) => pathname === sub.href
                );
                const itemIsActive = isActive || hasActiveSubitem;
                const Icon = item.icon;
                const isOpen = openDropdowns[item.id];

                return (
                  <div key={item.id} className="mb-2">
                    {item.subitems ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.id)}
                          aria-expanded={isOpen}
                          aria-current={itemIsActive ? "page" : undefined}
                          className={`flex items-center justify-between gap-3 w-full px-4 py-3 rounded-lg transition-all duration-300
                            ${
                              itemIsActive
                                ? "bg-red-500 text-white border-l-4 border-red-500"
                                : "hover:bg-gray-100 text-gray-700 border-l-4 border-transparent"
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            {Icon && <Icon className="h-5 w-5 shrink-0" />}
                            <span className="font-semibold text-sm uppercase tracking-wide">
                              {item.label}
                            </span>
                          </div>
                          {isOpen ? (
                            <ChevronDown className="h-4 w-4 shrink-0" />
                          ) : (
                            <ChevronRight className="h-4 w-4 shrink-0" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="flex flex-col gap-1 mt-2 pl-6">
                            {item.subitems.map((subitem) => (
                              <Link
                                key={subitem.label}
                                href={subitem.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-sm py-2 px-3 rounded transition-all duration-300 text-gray-700 hover:text-gray-900 hover:bg-gray-100 hover:pl-4 text-left
                                  ${
                                    pathname === subitem.href
                                      ? "bg-red-50 text-gray-900 font-semibold"
                                      : ""
                                  }`}
                              >
                                {subitem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-300
                          ${
                            isActive
                              ? "bg-red-500 text-white border-l-4 border-red-500"
                              : "hover:bg-gray-100 text-gray-700 border-l-4 border-transparent"
                          }`}
                      >
                        {Icon && <Icon className="h-5 w-5 shrink-0" />}
                        <span className="font-semibold text-sm uppercase tracking-wide">
                          {item.label}
                        </span>
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Bottom Navigation */}
            <div className="border-t border-gray-200 p-4 space-y-2">
              {bottomNavItems.map((item) => {
                const Icon = item.icon;
                const isDonate = item.id === "donate";
                return (
                  <Link
                    key={item.id}
                    href={item.href || "#"}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-300
                      ${
                        isDonate
                          ? "border border-red-500 text-red-600 hover:bg-red-50"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                  >
                    {isDonate ? (
                      <div className="h-5 w-5 relative shrink-0">
                        <Image
                          src="/SONY_Icon.png"
                          alt="Donate"
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </div>
                    ) : Icon ? (
                      <Icon className="h-5 w-5 shrink-0" />
                    ) : null}
                    <span
                      className={`font-semibold text-sm uppercase tracking-wide ${
                        isDonate ? "text-red-600" : ""
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </aside>
        </>
      )}
    </>
  );
}
