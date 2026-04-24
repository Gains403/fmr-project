"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useAuthStore } from "@/store/useAuthStore"
import {
  User,
  Settings,
  History,
  Globe,
  LogOut,
} from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()

  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  const [open, setOpen] = useState(false)

  const tabs = [
    { href: "/patient", label: "Home" },
    { href: "/pharmacy", label: "Pharmacies" },
    { href: "/doctor", label: "Doctors" },
    { href: "/lab", label: "Labs" },
    { href: "/patient?ai=true", label: "AI Triage" },
  ]

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  return (
    <>
      {/* TOP NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 md:px-10 h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/patient" className="font-bold text-green-600 text-xl">
            FindMeRX
          </Link>

          {/* DESKTOP TABS */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {tabs.map((tab) => {
              const isActive = pathname === tab.href

              return (
                <Link key={tab.href} href={tab.href}>
                  <span
                    className={`relative transition ${
                      isActive
                        ? "text-green-600 font-semibold"
                        : "text-gray-600 hover:text-green-600"
                    }`}
                  >
                    {tab.label}

                    {isActive && (
                      <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-green-600 rounded" />
                    )}
                  </span>
                </Link>
              )
            })}
          </nav>

          {/* PROFILE ICON */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center shadow-md">
              <User size={16} />
            </div>
          </button>
        </div>
      </header>

      {/* DESKTOP DROPDOWN */}
      {open && (
        <div className="hidden md:block fixed right-4 top-16 w-56 bg-white rounded-xl shadow-xl z-50">

          {/* USER INFO */}
          <div className="p-3 text-sm text-gray-600">
            {user?.email || "Guest"}
          </div>

          <MenuItem icon={<User size={16} />} label="Profile" />
          <MenuItem icon={<Settings size={16} />} label="Settings" />
          <MenuItem icon={<History size={16} />} label="History" />
          <MenuItem icon={<Globe size={16} />} label="Language" />

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 text-red-500 hover:bg-red-50 text-sm"
          >
            <LogOut size={16} />
            Sign out
          </button>
        </div>
      )}

      {/* MOBILE SIDEBAR */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 flex">

          {/* BACKDROP */}
          <div
            className="flex-1 bg-black/30"
            onClick={() => setOpen(false)}
          />

          {/* SIDEBAR */}
          <div className="w-72 bg-white h-full p-5 shadow-2xl">

            {/* USER */}
            <div className="mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white shadow-md">
                <User />
              </div>

              <p className="mt-2 text-sm font-medium">
                {user?.email || "Guest"}
              </p>
            </div>

            {/* MENU */}
            <div className="space-y-2">
              <MobileItem icon={<User size={16} />} label="Profile" />
              <MobileItem icon={<Settings size={16} />} label="Settings" />
              <MobileItem icon={<History size={16} />} label="History" />
              <MobileItem icon={<Globe size={16} />} label="Language" />
            </div>

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              className="mt-6 w-full flex items-center gap-2 text-red-500"
            >
              <LogOut size={16} />
              Sign out
            </button>
          </div>
        </div>
      )}
    </>
  )
}

/* ---------------- HELPERS ---------------- */

function MenuItem({ icon, label }: any) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 cursor-pointer rounded-lg">
      {icon}
      {label}
    </div>
  )
}

function MobileItem({ icon, label }: any) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer">
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  )
}