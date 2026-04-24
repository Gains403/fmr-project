import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  const filePath = path.join(process.cwd(), "data", "labs.json")
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8") || "[]")

  return NextResponse.json(data)
}

export async function POST(req: Request) {
  const body = await req.json()

  const filePath = path.join(process.cwd(), "data", "labs.json")
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8") || "[]")

  const newLab = {
    id: Date.now().toString(),
    name: body.name,
    location: body.location,
    tests: body.tests || [],
  }

  data.push(newLab)

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2))

  return NextResponse.json(newLab)
}