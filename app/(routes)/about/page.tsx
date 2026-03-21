import { PageHero } from '@/components/sections/PageHero'
import { MissionVision } from '@/components/sections/about/MissionVision'
import { AboutTimeline } from '@/components/sections/about/AboutTimeline'
import { AboutTeam } from '@/components/sections/about/AboutTeam'
import { AboutAchievements } from '@/components/sections/about/AboutAchievements'
import { aboutAchievements, aboutTeam, aboutTimeline } from '@/lib/data/about'

export default function AboutPage() {
  return (
    <div className="pt-20">
      <PageHero
        title="About"
        highlight="OBU UA"
        subtitle="Building bridges, celebrating culture, and creating opportunities for Ukrainian students at Oxford Brookes"
      />
      <MissionVision />
      <AboutAchievements achievements={aboutAchievements} />
      <AboutTeam members={aboutTeam} />
      <AboutTimeline items={aboutTimeline} />
    </div>
  )
}
