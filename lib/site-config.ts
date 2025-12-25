export type Project = {
  name: string
  slug: string
  description: string
  tags: readonly string[]
  links?: {
    live?: string
    repo?: string
  }
  video?: string
  highlights?: readonly string[]
}

export type Experience = {
  role: string
  company: string
  start: string
  end?: string
  summary: string
  bullets?: readonly string[]
}

export type SiteConfig = {
  /** Used for SEO metadata. Update to your real domain when you have one. */
  url: string
  name: string
  headline: string
  location: string
  email: string
  description: string
  availability?: string
  links: {
    github?: string
  }
  projects: readonly Project[]
  experience: readonly Experience[]
}

export const siteConfig: SiteConfig = {
  url: "https://x.com/elonmusk",
  name: "Mirza",
  headline: "an amateur developer.",
  location: "Indonesia",
  email: "blomada@gmail.com",
  description:
    "A Next.js + TypeScript portfolio showcasing my projects and experience.",
  availability: "Open to opportunities",
  links: {
    github: "https://github.com/Mirza42069",
  },
  projects: [
    {
      name: "Winnicode News Website",
      slug: "winnicode",
      description:
        "A news website prototype built during my internship at PT. Winnicode Garuda Teknologi.",
      tags: [],
      video: "/website news.mp4",
      links: {
        repo: "https://github.com/Mirza42069/News-Website-Winni-Repo",
      },
    },
    {
      name: "Gacha Simulator",
      slug: "gacha",
      description:
        "A gacha game simulator that replicates pull mechanics from popular gacha games.",
      tags: [],
      video: "/Gacha Simulator Web.mp4",
      links: {
        repo: "https://github.com/Mirza42069/Gacha-Simulator",
      },
    },
    {
      name: "Benchmark Database for LLM",
      slug: "benchmark",
      description: "Thesis in progress...",
      tags: [],
      links: {
        repo: "https://github.com/Mirza42069/ChatBot-RAG-Comparison-Database",
      },
    },
  ],
  experience: [
    {
      role: "Software Engineer Intern",
      company: "PT. Winnicode Garuda Teknologi",
      start: "2025",
      end: "2025",
      summary:
        "Built a prototype news website as part of the internship program.",
    },
  ],
}
