"use client"

import { useState } from "react"
import hospitals from "@/data/hospitals.json"
import { getInsights } from "@/lib/healthInsights"

export default function HospitalsPage() {
  const [search, setSearch] = useState("")

  const filtered = hospitals.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">

      {/* SEARCH BAR */}
      <div className="sticky top-16 z-40 bg-gray-50 pb-3">

        <input
          type="text"
          placeholder="Search hospitals..."
          className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* LIST */}
      <div className="space-y-4">

        {filtered.map((h) => {
          const insight = getInsights(h.type)

          return (
            <div
              key={h.id}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition"
            >

              <h2 className="font-semibold text-lg">{h.name}</h2>

              <div className="text-sm text-gray-600 mt-2 space-y-1">

                <p>📍 {h.distance} away</p>

                <p className={
                  insight.cost === "Low"
                    ? "text-green-600"
                    : "text-red-600"
                }>
                  💰 {insight.cost} cost
                </p>

                <p>⏱️ {insight.waitTime} wait time</p>
                <p>👥 {insight.crowd}</p>

              </div>

              {/* ACTIONS */}
              <div className="flex gap-2 mt-4">

                <button className="flex-1 bg-green-600 text-white py-2 rounded-lg">
                  View Details
                </button>

                <button
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${h.name}`
                    )
                  }
                  className="flex-1 border py-2 rounded-lg"
                >
                  Directions
                </button>

              </div>

            </div>
          )
        })}

      </div>

    </div>
  )
}