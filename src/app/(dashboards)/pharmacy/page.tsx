import RoleGuard from "@/components/shared/RoleGuard"

export default function PharmacyPage() {
  return (
    <RoleGuard role="pharmacy">
      <div>Pharmacy Dashboard</div>
    </RoleGuard>
  )
}