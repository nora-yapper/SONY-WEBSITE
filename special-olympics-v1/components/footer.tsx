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
                "x",
                "facebook",
                "instagram",
                "youtube",
                "linkedin",
                "tiktok",
              ].map((id) => (
                <a
                  key={id}
                  href="#"
                  aria-label={id}
                  className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 text-xs hover:bg-gray-100"
                >
                  {id === "x" ? "X" : id[0].toUpperCase()}
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
              <div
                role="img"
                aria-label="Platinum Transparency 2025"
                className="w-24 h-12 rounded border border-gray-300 flex items-center justify-center bg-white text-xs text-gray-700"
              >
                Platinum Transparency 2025
              </div>
              <div
                role="img"
                aria-label="Charity Navigator"
                className="w-24 h-12 rounded border border-gray-300 flex items-center justify-center bg-white text-xs text-gray-700"
              >
                Charity Navigator
              </div>
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
