"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: "#features", label: "Features" },
    
    { href: "#about us", label: "About us" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-500">FindMeRX</div>

        {/* Right side (links + auth + mobile toggle) */}
        <div className="flex items-center gap-6">
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-green-500 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Auth links */}
          <a
            href="/auth/signin"
            className="hidden md:inline text-gray-600 hover:text-green-500 font-medium"
          >
            Sign In
          </a>
          <Button
            asChild
            className="hidden md:inline bg-green-400 hover:bg-green-500 text-white"
          >
            <a href="/auth/register">Register</a>
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-6 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-green-500 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <a
              href="/auth/signin"
              className="text-gray-600 hover:text-green-500 font-medium"
              onClick={() => setOpen(false)}
            >
              Sign In
            </a>
            <Button
              asChild
              className="bg-green-400 hover:bg-green-500 text-white"
            >
              <a href="/auth/register">Register</a>
            </Button>
          </ul>
        </div>
      )}
    </header>
  )
}
