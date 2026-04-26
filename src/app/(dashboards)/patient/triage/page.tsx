import RoleGuard from "@/components/shared/RoleGuard"
import TriageIntro from "@/components/triage/TriageIntro"

export default function TriagePage() {
  return (
    <RoleGuard role="patient">
      <TriageIntro />
    </RoleGuard>
  )
}