import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    const filePath = path.join(process.cwd(), "data", "users.json")
    const users = JSON.parse(fs.readFileSync(filePath, "utf-8") || "[]")

    const user = users.find(
      (u: any) => u.email === email && u.password === password
    )

    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      )
    }

    return NextResponse.json(user, { status: 200 })
  } catch (err) {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    )
  }
}