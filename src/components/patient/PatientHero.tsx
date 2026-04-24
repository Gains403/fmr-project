"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function PatientHero() {
  const router = useRouter()

  return (
    <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden">

      {/* BACKGROUND IMAGE (FULL COVER FIXED) */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage:
            "url('/images/FMR-PatientHero-BG.png')",
        }}
      />

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-10">

        <div className="md:w-1/2 w-full space-y-5">

          {/* MAIN HEADING */}
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            AI-powered healthcare navigation made simple
          </h1>

          {/* SUBTEXT */}
          <p className="text-gray-200 text-sm md:text-base">
            Instantly find pharmacies, doctors, labs and get AI-driven triage recommendations tailored to your symptoms.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3">

            <Button
              onClick={() => router.push("/patient?ai=true")}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-5"
            >
              Start AI Triage
            </Button>

            <Button
              variant="outline"
              onClick={() => router.push("/pharmacy")}
              className="text-white border-white/40 hover:bg-white/10"
            >
              Find Pharmacies
            </Button>

          </div>

        </div>

      </div>

    </section>
  )
}