import { notFound } from "next/navigation"
import { siteConfig } from "@/lib/site-config"
import ProjectPageClient from "@/components/project-page-client"

export function generateStaticParams() {
    return siteConfig.projects
        .filter((p) => p.video)
        .map((project) => ({
            slug: project.slug,
        }))
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const project = siteConfig.projects.find((p) => p.slug === slug)

    if (!project || !project.video) {
        notFound()
    }

    return <ProjectPageClient project={project} />
}
