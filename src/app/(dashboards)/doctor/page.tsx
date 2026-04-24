import RoleGuard from "@/components/shared/RoleGuard"

export default function DoctorPage() {
  return (
    <RoleGuard role="doctor">
      <div>Doctor Dashboard</div>
    </RoleGuard>
  )
}