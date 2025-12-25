"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Project } from "@/lib/site-config"
import { ArrowLeftIcon } from "@phosphor-icons/react"

// Blog content for each project
const projectContent: Record<string, {
    title: string
    intro: string
    images: string[]
    details: string
    liveUrl?: string
}> = {
    winnicode: {
        title: "Prototype News Web",
        intro: "A news website I built during my internship. It lets people read and manage news articles easily.",
        images: [
            "/winni1.jpg",
            "/winni2.jpg",
            "/winni3.jpg",
            "/winni4.jpg",
            "/winni5.jpg"
        ],
        details: "Built from scratch during my internship at PT. Winnicode Garuda Teknologi, this news app is my custom remake with a modern twist. I designed a clean, intuitive interface for browsing articles by category—no clutter, just smooth reading. The backend runs on MongoDB with a dedicated admin dashboard for managing content. Powered by Next.js, React, Swiper.js for carousels, a RESTful API, and Bootstrap, it's fully responsive across devices. Massive thanks to JavaScript Mastery's YouTube tutorial for teaching me the ropes!",
        liveUrl: "https://winni-project.vercel.app/"
    },
    gacha: {
        title: "Coming Soon",
        intro: "This project showcase is currently being prepared.",
        images: [],
        details: "Stay tuned! A detailed breakdown of this project's features, development process, and the technologies used will be available soon."
    }
}

export default function ProjectPageClient({ project }: { project: Project }) {
    const [scrolled, setScrolled] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    const content = projectContent[project.slug] || {
        title: "Coming Soon",
        intro: "This project page is being prepared.",
        images: [],
        details: "Check back soon for more details about this project."
    }

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
            {/* Fixed video background */}
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

            {/* Back button - centered at top */}
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

            {/* Content section */}
            <div className="relative z-10 pt-[100vh]">
                <div className="bg-background min-h-screen">
                    <div className="max-w-4xl mx-auto px-6 py-12">
                        {/* Title */}
                        <h1 className={`text-3xl font-bold tracking-tight sm:text-4xl text-left transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                            {content.title}
                        </h1>

                        {/* Intro description */}
                        <p className={`text-muted-foreground mt-4 text-lg text-left transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                            {content.intro}
                        </p>

                        {/* Live link if available */}
                        {content.liveUrl && (
                            <a
                                href={content.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={`inline-block mt-4 text-primary hover:underline underline-offset-4 transition-all duration-700 delay-150 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                            >
                                View Live Site →
                            </a>
                        )}

                        {/* Bento grid - 3 top, 2 bottom, tight connection */}
                        {content.images.length > 0 && (
                            <div className={`mt-10 rounded-md overflow-hidden transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                {/* Top row - 3 images */}
                                <div className="grid grid-cols-3 gap-1">
                                    {content.images.slice(0, 3).map((img, index) => (
                                        <div
                                            key={img}
                                            className="aspect-video overflow-hidden bg-card hover:opacity-90 transition-opacity duration-300"
                                        >
                                            <Image
                                                src={img}
                                                alt={`Screenshot ${index + 1}`}
                                                width={400}
                                                height={225}
                                                className={`w-full h-full object-cover ${index < 2 ? 'scale-[1.5]' : 'scale-[1.35]'}`}
                                            />
                                        </div>
                                    ))}
                                </div>
                                {/* Bottom row - 2 images */}
                                <div className="grid grid-cols-2 gap-1 mt-1">
                                    {content.images.slice(3, 5).map((img, index) => (
                                        <div
                                            key={img}
                                            className="aspect-video overflow-hidden bg-card hover:opacity-90 transition-opacity duration-300"
                                        >
                                            <Image
                                                src={img}
                                                alt={`Screenshot ${index + 4}`}
                                                width={500}
                                                height={280}
                                                className="w-full h-full object-cover scale-[1.35]"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Detailed description */}
                        <p className={`text-muted-foreground mt-10 text-left leading-relaxed text-base transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                            {content.details}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
