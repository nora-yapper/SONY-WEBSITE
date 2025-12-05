"use client";

import { Heart, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Condensed columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: newsletter + social (condensed) */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              Stay Connected
            </h3>
            <form
              className="space-y-2"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter sign up"
            >
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className="flex-1 rounded border border-gray-300 px-3 py-2 text-sm bg-white"
                  />
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    className="flex-1 rounded border border-gray-300 px-3 py-2 text-sm bg-white"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="flex-1 rounded border border-gray-300 px-3 py-2 text-sm bg-white"
                />
                <button
                  type="submit"
                  className="rounded bg-red-500 text-white px-3 py-2 text-sm font-semibold hover:bg-red-600"
                >
                  Sign up
                </button>
              </div>
              <p className="text-xs text-gray-600">
                We will protect your privacy. By signing up you agree to receive
                emails from us.
              </p>
            </form>

            <div className="flex items-center gap-3 mt-4">
              {[
                { id: "x", icon: "twitter" },
                { id: "facebook", icon: "facebook" },
                { id: "instagram", icon: "instagram" },
                { id: "youtube", icon: "youtube" },
                { id: "linkedin", icon: "linkedin" },
                { id: "tiktok", icon: "tiktok" },
              ].map(({ id, icon }) => (
                <a
                  key={id}
                  href="#"
                  aria-label={id}
                  className="h-8 w-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <img
                    src={`/icons/${icon}.png`}
                    alt={id}
                    className="h-8 w-8"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: quick links (split into two sub-columns) */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Resource Library
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Financials & Annual Report
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Career Opportunities
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Media Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: contact, address, badges, copyright */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <a
                  href="mailto:info@specialolympics-ny.org"
                  className="hover:text-primary"
                >
                  info@specialolympics-ny.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>94 New Karner Road, Suite 208, Albany, NY 12203</span>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.guidestar.org/profile/23-7061382"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Candid Transparency"
              >
                <img
                  src="/images/candid.svg"
                  alt="Candid Transparency"
                  className="h-15 object-contain"
                />
              </a>
              <a
                href="https://www.charitynavigator.org/ein/237061382"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Charity Navigator"
              >
                <img
                  src="/images/charity.png"
                  alt="Charity Navigator"
                  className="h-15 object-contain"
                />
              </a>
              <a
                href="https://www.specialolympics-ny.org/who-we-are/staff-board/career-opportunities/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Top Work Places"
              >
                <img
                  src="/images/TopWorkPlaces.png"
                  alt="Top Work Places"
                  className="h-15 object-contain"
                />
              </a>
              <a
                href="https://www.specialolympics-ny.org/who-we-are/staff-board/career-opportunities/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EmployAbility"
              >
                <img
                  src="/images/EmployAbility.png"
                  alt="EmployAbility"
                  className="h-15 object-contain"
                />
              </a>
            </div>

            <p className="text-xs text-gray-600 mt-4">
              &copy; {new Date().getFullYear()} Special Olympics New York. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
