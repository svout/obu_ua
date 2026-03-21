import type { AboutAchievement } from '@/lib/data/about'

export type AboutAchievementsProps = {
  achievements: AboutAchievement[]
}

export function AboutAchievements({ achievements }: AboutAchievementsProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-900 to-primary-950 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display mb-4 text-4xl text-white font-bold md:text-5xl">
            Our <span className="text-accent-400">Achievements</span>
          </h2>
          <p className="text-lg text-blue-100">Proud moments that define our community&apos;s impact</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="rounded-2xl border border-white/20 bg-white p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            >
              <div className="mb-4 text-5xl" aria-hidden>
                {achievement.icon}
              </div>
              <h3 className="font-display mb-2 text-xl font-bold">{achievement.title}</h3>
              <p className="text-primary-950">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
