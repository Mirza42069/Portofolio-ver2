"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { siteConfig, Project } from "@/lib/site-config"
import {
  ArrowUpRightIcon,
  GithubLogoIcon,
  MapPinIcon,
} from "@phosphor-icons/react/ssr"
import { useState, useRef } from "react"

function VideoButton({ project }: { project: Project }) {
  const [showVideo, setShowVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoEnd = () => {
    setShowVideo(false)
  }

  const handleLiveClick = () => {
    setShowVideo(true)
  }

  if (!project.video) return null

  return (
    <>
      <Button size="sm" onClick={handleLiveClick}>
        Live
        <ArrowUpRightIcon data-icon="inline-end" />
      </Button>

      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setShowVideo(false)}>
          <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <video
              ref={videoRef}
              src={project.video}
              autoPlay
              controls
              className="w-full rounded-lg"
              onEnded={handleVideoEnd}
            />
          </div>
        </div>
      )}
    </>
  )
}

function SectionHeading({
  title,
  description,
  action,
}: {
  title: string
  description?: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div className="space-y-1">
        <h2 className="text-sm font-medium flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
          {title}
        </h2>
        {description ? (
          <p className="text-muted-foreground text-xs max-w-prose">
            {description}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  )
}

export default function Page() {
  return (
    <div className="min-h-dvh">
      <main className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
        <section className="relative overflow-hidden rounded-xl border bg-card p-6 sm:p-10">
          {/* Enhanced gradient overlays */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-primary/10" />
          <div className="pointer-events-none absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="border border-primary/20">
                <MapPinIcon data-icon="inline-start" />
                {siteConfig.location}
              </Badge>
              {siteConfig.availability ? (
                <Badge variant="secondary">{siteConfig.availability}</Badge>
              ) : null}
            </div>

            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {siteConfig.name}.
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl text-sm/relaxed sm:text-base/relaxed">
              {siteConfig.headline}
            </p>
            <p className="mt-3 text-sm/relaxed">
              Reach me at{" "}
              <a
                href={siteConfig.url}
                className="text-primary font-medium underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>

            {siteConfig.links.github ? (
              <div className="mt-6">
                <Button asChild size="sm">
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GithubLogoIcon data-icon="inline-start" />
                    GitHub
                    <ArrowUpRightIcon data-icon="inline-end" />
                  </a>
                </Button>
              </div>
            ) : null}
          </div>
        </section>

        <Separator className="my-10" />

        <section id="projects" className="scroll-mt-28">
          <SectionHeading
            title="Projects"
            description="A few things I've built recently."
          />

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {siteConfig.projects.map((project) => (
              <Card key={project.name} className="border-l-2 border-l-primary/30">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {project.highlights?.length ? (
                    <ul className="text-xs/relaxed list-disc pl-4 space-y-1 marker:text-primary">
                      {project.highlights.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  ) : null}
                </CardContent>
                <CardFooter className="gap-2">
                  {project.video ? (
                    <VideoButton project={project} />
                  ) : project.links?.live ? (
                    <Button asChild size="sm">
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live
                        <ArrowUpRightIcon data-icon="inline-end" />
                      </a>
                    </Button>
                  ) : null}
                  {project.links?.repo ? (
                    <Button asChild variant="ghost" size="sm">
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Code
                        <ArrowUpRightIcon data-icon="inline-end" />
                      </a>
                    </Button>
                  ) : null}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-10" />

        <section id="experience" className="scroll-mt-28">
          <SectionHeading
            title="Experience"
            description="Where I've worked and what I focused on."
          />

          <div className="mt-4 grid gap-4">
            {siteConfig.experience.map((job) => (
              <Card key={`${job.role}-${job.company}`} className="border-l-2 border-l-primary/30">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <CardTitle>{job.role}</CardTitle>
                      <CardDescription>{job.company}</CardDescription>
                    </div>
                    <Badge variant="secondary">
                      {job.start} — {job.end ?? "Present"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-xs/relaxed">{job.summary}</p>
                  {job.bullets?.length ? (
                    <ul className="text-xs/relaxed list-disc pl-4 space-y-1 marker:text-primary">
                      {job.bullets.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
