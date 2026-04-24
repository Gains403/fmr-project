import RoleGuard from "@/components/shared/RoleGuard"
import PatientHero from "@/components/patient/PatientHero"

export default function PatientPage() {
  return (
    <RoleGuard role="patient">
      <div className="space-y-6">
        <PatientHero />
      </div>
    </RoleGuard>
  )
}