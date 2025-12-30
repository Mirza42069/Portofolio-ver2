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
  videoStyle?: string
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
  headline: "an amateur fullstack developer.",
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
      name: "Money Drain",
      slug: "money-drain",
      description:
        "Built from scratch as a personal project, this money management web app is my minimalist take on tracking finances with a modern dark aesthetic. I designed a clean, distraction-free interface for logging expenses and income by category—no clutter, just smooth tracking. Data is stored locally with localStorage, featuring multiple account storage slots for flexible organization. Powered by Next.js 16, React 19, shadcn/ui components, Tailwind CSS 4, Radix UI primitives, and Tabler Icons, it's fully responsive across devices with dark/light mode support. Features include multi-currency support (IDR, JPY, USD) with automatic conversion, customizable categories, CSV export, and time-based filtering—all running entirely offline without a backend.",
      tags: [],
      video: "/money-drain.mp4",
      videoStyle: "object-top",
      links: {
        repo: "https://github.com/Mirza42069/Money-Drain",
      },
    },
    {
      name: "Newsroom",
      slug: "newsroom",
      description:
        "Built from scratch as a personal project, this news app is my custom creation with a modern, polished design. I crafted a sleek, intuitive interface for browsing and discovering articles by category—featuring a clean layout with seamless navigation. The backend is powered by Convex for real-time data synchronization, with a dedicated admin dashboard for creating and managing content. Powered by Next.js 16, React 19, Tailwind CSS 4, shadcn/ui components, tRPC for type-safe APIs, Clerk for authentication, and Radix UI for accessible interactions, it delivers a fully responsive experience across all devices. Built with TypeScript for rock-solid type safety and optimized for performance with modern tooling.",
      tags: [],
      video: "/newsroom.mp4",
      links: {
        repo: "https://github.com/Mirza42069/Newsroom",
      },
    },
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
