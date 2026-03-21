import { PageHero } from '@/components/sections/PageHero'
import { PartnershipSection } from '@/components/sections/PartnershipSection'

export default function PartnershipPage() {
  return (
    <div className="pt-20">
      <PageHero
        title="Partnership"
        highlight="Opportunities"
        subtitle="Collaborate with Oxford Brookes Ukrainian Society to support events, projects, and our community."
      />
      <PartnershipSection />
    </div>
  )
}
