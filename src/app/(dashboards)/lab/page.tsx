import RoleGuard from "@/components/shared/RoleGuard"

export default function LabPage() {
  return (
    <RoleGuard role="lab">
      <div>Lab Dashboard</div>
    </RoleGuard>
  )
}