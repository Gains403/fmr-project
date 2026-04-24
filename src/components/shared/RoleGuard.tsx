"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/store/useAuthStore"

export default function RoleGuard({
  role,
  children,
}: {
  role: "patient" | "doctor" | "pharmacy" | "lab"
  children: React.ReactNode
}) {
  const router = useRouter()
  const user = useAuthStore((state) => state.user)

  useEffect(() => {
    if (!user) {
      router.push("/login")
      return
    }

    if (user.role !== role) {
      router.push(`/${user.role}`)
    }
  }, [user, role, router])

  if (!user) return null

  return <>{children}</>
}