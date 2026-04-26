"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/store/useAuthStore"

export default function TriageIntro() {
  const router = useRouter()
  const user = useAuthStore((state) => state.user)

  return (
    <div className="flex flex-col items-center justify-end min-h-[70vh] text-center px-4 pb-16">

      <div className="space-y-4 max-w-md">

        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Hi, {user?.email?.split("@")[0] || "there"} 👋
        </h1>

        <p className="text-gray-500">
          Tell me how you're feeling — I’ll guide you to the right care.
        </p>

        <Button
          onClick={() => router.push("/patient/triage")}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-6 text-base"
        >
          + Start Symptom Assessment
        </Button>

      </div>

    </div>
  )
}