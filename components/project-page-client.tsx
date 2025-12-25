"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Project } from "@/lib/site-config"
import { ArrowLeftIcon } from "@phosphor-icons/react"

export default function ProjectPageClient({ project }: { project: Project }) {
    const [scrolled, setScrolled] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 50)

        const handleScroll = () => {
            setScrolled(window.scrollY > 100)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            clearTimeout(timer)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="min-h-[200vh]">
            {/* Fixed video background - covers everything initially */}
            <div className="fixed inset-0 z-0">
                <div className="w-full h-full overflow-hidden">
                    <div className="scale-105 origin-center w-full h-full">
                        <video
                            src={project.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Back button - centered at top, appears on scroll */}
            <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <Link href="/">
                    <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                        <ArrowLeftIcon className="w-4 h-4" />
                        Back
                    </Button>
                </Link>
            </div>

            {/* Scroll indicator */}
            <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
                <div className="text-white/70 text-sm animate-bounce">Scroll down</div>
            </div>

            {/* Content section - slides up from bottom */}
            <div className="relative z-10 pt-[100vh]">
                <div className="bg-background min-h-screen">
                    {/* Container centered with left-justified text */}
                    <div className="max-w-2xl mx-auto px-8 py-12">
                        {/* Title - pan from left */}
                        <h1 className={`text-3xl font-bold tracking-tight sm:text-4xl text-left transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                            Coming soon
                        </h1>

                        {/* Description - pan from left with delay */}
                        <p className={`text-muted-foreground mt-4 text-lg text-left transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                            This project showcase is currently being crafted. Stay tuned for a detailed breakdown of the features and technologies used.
                        </p>

                        {/* Project name */}
                        <p className={`text-muted-foreground/70 mt-6 text-sm text-left transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                            {project.name}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
