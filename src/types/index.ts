// 🔐 USER ROLES
export type Role = "patient" | "doctor" | "pharmacy" | "lab"


// 👤 USER MODEL (AUTH)
export type User = {
  id: string
  email: string
  password: string
  role: Role
}


// 🤖 AI TRIAGE RESPONSE
export type TriageResult = {
  urgency: "low" | "medium" | "emergency"
  recommendation: string
  route: "pharmacy" | "doctor" | "lab" | "hospital"
}


// 💊 PHARMACY MODEL
export type Pharmacy = {
  id: string
  name: string
  location: string
  drugs: string[]
}


// 🧪 LAB MODEL
export type Lab = {
  id: string
  name: string
  location: string
  tests: string[]
}