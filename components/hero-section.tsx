"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { TypeWriter } from "@/components/type-writer"
import { siteConfig } from "@/lib/site-config"
import { MapPinIcon } from "@phosphor-icons/react"

export function HeroSection() {
    const [showContent, setShowContent] = useState(false)

    return (
        <section className="hero-section relative overflow-hidden rounded-xl border bg-card p-6 sm:p-10">
            {/* Enhanced gradient overlays */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-primary/10" />
            <div className="pointer-events-none absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative">
                {/* Badges - hidden initially, appear after typing */}
                <div className={`flex flex-wrap items-center gap-2 mb-4 transition-all duration-300 ${showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '50ms' }}>
                    <Badge variant="secondary">
                        <MapPinIcon data-icon="inline-start" />
                        {siteConfig.location}
                    </Badge>
                    {siteConfig.availability ? (
                        <Badge variant="secondary">{siteConfig.availability}</Badge>
                    ) : null}
                </div>

                <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                    <TypeWriter
                        text={`${siteConfig.name}.`}
                        delay={150}
                        onComplete={() => setShowContent(true)}
                    />
                </h1>

                {/* Description - slides from left with delay */}
                <p className={`text-muted-foreground mt-3 max-w-2xl text-sm/relaxed sm:text-base/relaxed transition-all duration-300 ${showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '150ms' }}>
                    {siteConfig.headline}
                </p>

                {/* GitHub link - slides from left with more delay */}
                <p className={`mt-3 text-sm/relaxed transition-all duration-300 ${showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '250ms' }}>
                    Check out my{" "}
                    <a
                        href="https://github.com/Mirza42069"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary font-medium underline-offset-4 hover:underline"
                    >
                        GitHub
                    </a>
                </p>
            </div>
        </section>
    )
}
