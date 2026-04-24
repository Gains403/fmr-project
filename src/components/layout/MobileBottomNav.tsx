"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Hospital, Stethoscope, FlaskConical, Bot } from "lucide-react"

export default function MobileBottomNav() {
  const pathname = usePathname()

  const tabs = [
    { href: "/patient", icon: Home },
    { href: "/pharmacy", icon: Hospital },
    { href: "/doctor", icon: Stethoscope },
    { href: "/lab", icon: FlaskConical },
    { href: "/patient?ai=true", icon: Bot },
  ]

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg md:hidden flex justify-around py-3">

      {tabs.map((tab, i) => {
        const Icon = tab.icon
        const isActive = pathname === tab.href

        return (
          <Link key={i} href={tab.href}>
            <div
              className={`flex flex-col items-center transition ${
                isActive ? "text-green-600" : "text-gray-500"
              }`}
            >
              <Icon size={20} />
              <span
                className={`text-[10px] mt-1 ${
                  isActive ? "text-green-600" : "text-gray-400"
                }`}
              />
            </div>
          </Link>
        )
      })}

    </div>
  )
}