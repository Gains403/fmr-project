import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

// GET all doctors
export async function GET() {
  const filePath = path.join(process.cwd(), "data", "doctors.json")
  const doctors = JSON.parse(fs.readFileSync(filePath, "utf-8") || "[]")

  return NextResponse.json(doctors)
}

// ADD doctor (registration)
export async function POST(req: Request) {
  const body = await req.json()

  const filePath = path.join(process.cwd(), "data", "doctors.json")
  const doctors = JSON.parse(fs.readFileSync(filePath, "utf-8") || "[]")

  const newDoctor = {
    id: Date.now().toString(),
    name: body.name,
    specialty: body.specialty,
    location: body.location,
  }

  doctors.push(newDoctor)

  fs.writeFileSync(filePath, JSON.stringify(doctors, null, 2))

  return NextResponse.json(newDoctor)
}