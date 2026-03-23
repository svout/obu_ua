import Hero from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { WhatWeDo } from '@/components/sections/WhatWeDo'
import { LatestContentPreview } from '@/components/sections/LatestContentPreview'
import { ProjectsPreview } from '@/components/sections/ProjectsPreview'
import { HomeCta } from '@/components/sections/HomeCta'
import { getLatestContent } from '@/lib/content'
import {
  homeFeaturedProjects,
  homeStats,
  whatWeDoCards,
} from '@/lib/data/home'

export default function HomePage() {
  const latestContent = getLatestContent(3)

  return (
    <>
      <Hero />
      <WhatWeDo cards={whatWeDoCards} />
      <LatestContentPreview items={latestContent} />
      <ProjectsPreview projects={homeFeaturedProjects} />
      <HomeCta />
    </>
  )
}
