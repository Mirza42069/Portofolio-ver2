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
import { VideoCard } from "@/components/video-card"
import { HeroSection } from "@/components/hero-section"
import { siteConfig } from "@/lib/site-config"
import {
  ArrowUpRightIcon,
} from "@phosphor-icons/react"

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
        <HeroSection />

        <Separator className="my-10" />

        <section id="experience" className="scroll-mt-28">
          <div data-fade="down">
            <SectionHeading
              title="Experience"
              description="Where I've worked and what I focused on."
            />
          </div>

          <div className="mt-4 grid gap-4">
            {siteConfig.experience.map((job) => (
              <Card key={`${job.role}-${job.company}`} className="border-l-2 border-l-primary/30" data-fade="down">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <CardTitle>{job.role}</CardTitle>
                      <CardDescription>{job.company}</CardDescription>
                    </div>
                    <Badge variant="secondary">
                      {job.end ? `${job.start} — ${job.end}` : job.start}
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

        <Separator className="my-10" />

        <section id="projects" className="scroll-mt-28">
          <div data-fade="left">
            <SectionHeading
              title="Projects"
              description="A few things I've built recently."
            />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {siteConfig.projects.map((project, index) => (
              project.video ? (
                <VideoCard
                  key={project.name}
                  name={project.name}
                  slug={project.slug}
                  video={project.video}
                  videoStyle={project.videoStyle}
                  position={index % 2 === 0 ? "left" : "right"}
                />
              ) : (
                <Card key={project.name} className="border-l-2 border-l-primary/30" data-position={index % 2 === 0 ? "left" : "right"}>
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {project.highlights?.length ? (
                      <ul className="text-xs/relaxed list-disc pl-4 space-y-1 marker:text-primary">
                        {project.highlights.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    ) : null}
                  </CardContent>
                  {project.links?.live ? (
                    <CardFooter className="gap-2">
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
                    </CardFooter>
                  ) : null}
                </Card>
              )
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
