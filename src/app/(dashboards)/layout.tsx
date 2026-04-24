"use client"

import Navbar from "@/components/layout/Navbar"
import MobileBottomNav from "@/components/layout/MobileBottomNav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      <main className="pt-10 pb-20 md:pb-10   mx-auto">
        {children}
      </main>

      <MobileBottomNav />

    </div>
  )
}