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
    videoStyle?: string
    bentoLayout?: "1-1" | "1-2" | "3-2"
}> = {
    "money-drain": {
        title: "Money Drain",
        intro: "A minimalist money management web app with a modern dark aesthetic for tracking finances.",
        images: [
            "/moneydrain (1).png",
            "/moneydrain (3).png"
        ],
        details: "Built from scratch as a personal project, this money management web app is my minimalist take on tracking finances with a modern dark aesthetic. I designed a clean, distraction-free interface for logging expenses and income by category—no clutter, just smooth tracking. Data is stored locally with localStorage, featuring multiple account storage slots for flexible organization. Powered by Next.js 16, React 19, shadcn/ui components, Tailwind CSS 4, Radix UI primitives, and Tabler Icons, it's fully responsive across devices with dark/light mode support. Features include multi-currency support (IDR, JPY, USD) with automatic conversion, customizable categories, CSV export, and time-based filtering—all running entirely offline without a backend.",
        liveUrl: "https://moneydrain.vercel.app/",
        videoStyle: "object-top",
        bentoLayout: "1-1"
    },
    newsroom: {
        title: "Newsroom",
        intro: "A modern news app with a polished design for browsing and discovering articles by category.",
        images: [
            "/newsroom (1).png",
            "/newsroom (2).png",
            "/newsroom (3).png",
            "/newsroom (4).png",
            "/newsroom (5).png"
        ],
        details: "Built from scratch as a personal project, this news app is my custom creation with a modern, polished design. I crafted a sleek, intuitive interface for browsing and discovering articles by category—featuring a clean layout with seamless navigation. The backend is powered by Convex for real-time data synchronization, with a dedicated admin dashboard for creating and managing content. Powered by Next.js 16, React 19, Tailwind CSS 4, shadcn/ui components, tRPC for type-safe APIs, Clerk for authentication, and Radix UI for accessible interactions, it delivers a fully responsive experience across all devices. Built with TypeScript for rock-solid type safety and optimized for performance with modern tooling.",
        liveUrl: "https://newsroom-webnewsagain.vercel.app/"
    },
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
        details: "Built from scratch during my internship at PT. Winnicode Garuda Teknologi, this news app is my custom remake with a modern twist. I designed a clean, intuitive interface for browsing articles by category—no clutter, just smooth reading. The backend runs on MongoDB with a dedicated admin dashboard for managing content. Powered by Next.js, React, Swiper.js for carousels, a RESTful API, and Bootstrap, it's fully responsive across devices. Massive thanks to DStudio Technology's YouTube tutorial for teaching me the ropes!",
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
                            className={`w-full h-full object-cover ${content.videoStyle || ''}`}
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

                        {/* Bento grid - dynamic layout based on bentoLayout prop */}
                        {content.images.length > 0 && (
                            <div className={`mt-10 rounded-md overflow-hidden transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                {content.bentoLayout === "1-1" ? (
                                    /* Layout: 1 left, 1 right (side by side) */
                                    <div className="grid grid-cols-2 gap-1">
                                        {content.images.slice(0, 2).map((img, index) => (
                                            <div
                                                key={img}
                                                className="aspect-video overflow-hidden bg-card hover:opacity-90 transition-opacity duration-300"
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`Screenshot ${index + 1}`}
                                                    width={1920}
                                                    height={1080}
                                                    className="w-full h-full object-cover object-top scale-[3]"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ) : content.bentoLayout === "1-2" ? (
                                    /* Layout: 1 top, 2 bottom */
                                    <>
                                        <div className="grid grid-cols-1 gap-1">
                                            <div className="aspect-video overflow-hidden bg-card hover:opacity-90 transition-opacity duration-300">
                                                <Image
                                                    src={content.images[0]}
                                                    alt="Screenshot 1"
                                                    width={1920}
                                                    height={1080}
                                                    className="w-full h-full object-cover object-top scale-100"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-1 mt-1">
                                            {content.images.slice(1, 3).map((img, index) => (
                                                <div
                                                    key={img}
                                                    className="aspect-video overflow-hidden bg-card hover:opacity-90 transition-opacity duration-300"
                                                >
                                                    <Image
                                                        src={img}
                                                        alt={`Screenshot ${index + 2}`}
                                                        width={1920}
                                                        height={1080}
                                                        className="w-full h-full object-cover object-top scale-150"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    /* Default Layout: 3 top, 2 bottom */
                                    <>
                                        <div className="grid grid-cols-3 gap-1">
                                            {content.images.slice(0, 3).map((img, index) => (
                                                <div
                                                    key={img}
                                                    className="aspect-video overflow-hidden bg-card hover:opacity-90 transition-opacity duration-300"
                                                >
                                                    <Image
                                                        src={img}
                                                        alt={`Screenshot ${index + 1}`}
                                                        width={1920}
                                                        height={1080}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        {content.images.length > 3 && (
                                            <div className="grid grid-cols-2 gap-1 mt-1">
                                                {content.images.slice(3, 5).map((img, index) => (
                                                    <div
                                                        key={img}
                                                        className="aspect-video overflow-hidden bg-card hover:opacity-90 transition-opacity duration-300"
                                                    >
                                                        <Image
                                                            src={img}
                                                            alt={`Screenshot ${index + 4}`}
                                                            width={1920}
                                                            height={1080}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                )}
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
