"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/store/useAuthStore"

export default function Register() {
  const router = useRouter()
  const setUser = useAuthStore((state) => state.setUser)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("patient")

  const handleRegister = async () => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        role,
      }),
    })

    if (!res.ok) {
      alert("Registration failed")
      return
    }

    const user = await res.json()

    // store user in Zustand
    setUser(user)

    // redirect based on role
    router.push(`/${user.role}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-sm space-y-4 bg-white p-6 rounded-xl shadow">

        <h1 className="text-2xl font-bold text-green-700">
          Create Account
        </h1>

        {/* Email */}
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Role selector */}
        <select
          className="w-full border rounded-md p-2"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
          <option value="pharmacy">Pharmacy</option>
          <option value="lab">Lab</option>
        </select>

        {/* Submit */}
        <Button
          className="w-full bg-green-600 hover:bg-green-700"
          onClick={handleRegister}
        >
          Register
        </Button>

      </div>
    </div>
  )
}