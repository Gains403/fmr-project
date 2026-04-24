import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function POST(req: Request) {
  try {
    const { email, password, role } = await req.json()

    const filePath = path.join(process.cwd(), "data", "users.json")
    const users = JSON.parse(fs.readFileSync(filePath, "utf-8") || "[]")

    const exists = users.find((u: any) => u.email === email)

    if (exists) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      )
    }

    const newUser = {
      id: Date.now().toString(),
      email,
      password,
      role,
    }

    users.push(newUser)

    fs.writeFileSync(filePath, JSON.stringify(users, null, 2))

    return NextResponse.json(newUser, { status: 200 })
  } catch (err) {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    )
  }
}