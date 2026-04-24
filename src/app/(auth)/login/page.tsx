"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/store/useAuthStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Login() {
  const router = useRouter()

  // ✅ Zustand hook INSIDE component
  const setUser = useAuthStore((state) => state.setUser)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // ✅ async function
  const handleLogin = async () => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      })

      if (!res.ok) {
        alert("Invalid credentials")
        return
      }

      const user = await res.json()

      // ✅ store user
      setUser(user)

      // ✅ redirect based on role
      router.push(`/${user.role}`)

    } catch (err) {
      console.error(err)
      alert("Something went wrong")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">

      <div className="w-full max-w-sm space-y-4 bg-white p-6 rounded-xl shadow">

        <h1 className="text-xl font-bold text-green-700">
          Login
        </h1>

        <Input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          className="w-full bg-green-600 hover:bg-green-700"
          onClick={handleLogin}
        >
          Login
        </Button>

      </div>
    </div>
  )
}