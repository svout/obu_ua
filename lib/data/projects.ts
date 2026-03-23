import type { ProjectStage, ProjectSummary } from '@/features/projects/types'

export const allProjects: ProjectSummary[] = [
  {
    id: '1',
    title: 'Kombuba',
    description:
      'Strategic Market Entry Analysis for Beverage Industry Product',
    body:
      'As a Strategy Analyst, I collaborated with an international team to develop a kids’ probiotic beverage brand produced in Poland and entering the UK market. My work focused on country and market analysis, including CAGE and PESTEL frameworks, SWOT analysis, TAM/SAM/SOM market modelling, consumer behaviour assessment, and the development of an Agile Market Entry Plan to support data-driven launch strategy. The project was part of the Marketing and Strategies for SMEs course at EDHEC Business School, where we presented our findings to Suzannah Doyle (founder of Ginebri Gin) and submitted the final work for academic evaluation.',
    author: 'Nazarii Husar',
    stage: 'Research',
    tags: ['Marketing', 'Strategic Analysis', 'Market Entry'],
    lookingForTeam: false,
    likes: 0,
    images: ['/images/projects/kombuba1.png', '/images/projects/kombuba2.png'],
  },
  {
    id: '2',
    title: 'AI Project Intelligence',
    description:
      'AI operating system for teams that turns fragmented project data into real-time insights, risks, and actions.',
    body:
      'Project Intelligence is an AI operating system for teams that sits above your existing tools — analyzing tasks, meetings, and communication to surface risks, highlight progress, and guide your next actions automatically. Modern teams already use powerful tools like Jira, Slack, Notion, and video meetings to manage their work, but the reality is that critical information remains fragmented across these systems. Important context gets lost between conversations, decisions made in meetings are not reflected in tasks, and project managers are forced to manually reconstruct the state of the project from scattered signals. As a result, risks are often detected too late, teams become misaligned, and execution slows down. Project Intelligence addresses this problem by introducing a continuous AI layer that observes and understands everything happening within a project. Instead of relying on manual updates or static dashboards, the system processes meeting transcripts, task changes, and communication flows to build a real-time understanding of project health. It connects decisions to execution, identifies blockers as they emerge, and detects patterns that would otherwise go unnoticed. The system doesn’t just collect data — it interprets it. It understands when a task is at risk based on dependencies, when communication breakdowns are affecting delivery, and when teams are drifting away from priorities. Based on this understanding, it surfaces clear, actionable insights that help teams respond faster and make better decisions without additional overhead. Over time, Project Intelligence builds a memory of the project, tracking how decisions evolve, how issues are resolved, and how the team operates. This creates a continuously improving feedback loop, where the system becomes more accurate and more valuable as the project progresses. Rather than adding another tool to the stack, Project Intelligence transforms the entire workflow into a unified, intelligent system — shifting teams from manually managing tasks to truly understanding how their projects operate.',
    author: 'Ivan Kovalchuk',
    stage: 'MVP',
    tags: ['AI', 'Project Management', 'Productivity', 'Software', 'Web App'],
    lookingForTeam: false,
    likes: 0,
    images: ['/images/projects/ai-pm1.png', '/images/projects/ai-pm2.png', '/images/projects/ai-pm3.png', '/images/projects/ai-pm4.png', '/images/projects/ai-pm5.png', '/images/projects/ai-pm6.png'],
  },

  {
    id: '3',
  title: 'UniCollab',
  description:
    'A mobile app for students to find interesting project for collaboration',
  body:
    'UniCollab is a mobile app for students to find interesting project for collaboration. The app is built with React Native and uses the Expo platform. The app is available on the App Store and Google Play.',
  author: 'Ivan Kovalchuk',
  stage: 'MVP',
  tags: ['EdTech', 'Mobile', 'React Native'],
  lookingForTeam: true,
  likes: 0,
  images: ['/images/projects/uni-app.png', '/images/projects/uni-app1.png', '/images/projects/uni-app2.png', '/images/projects/uni-app3.png', '/images/projects/uni-app4.png', '/images/projects/uni-app5.png'],
},
]

export function getProjectById(id: string): ProjectSummary | undefined {
  return allProjects.find((p) => p.id === id)
}

export function getAllProjectIds(): string[] {
  return allProjects.map((p) => p.id)
}

export const projectStageFilters: Array<ProjectStage | 'All'> = [
  'All',
  'Startup',
  'MVP',
  'Idea',
  'Research',
]
