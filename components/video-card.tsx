"use client"

import Link from "next/link"
import { SlowVideo } from "./slow-video"

interface VideoCardProps {
    name: string
    slug: string
    video: string
    position: "left" | "right"
}

export function VideoCard({ name, slug, video, position }: VideoCardProps) {
    return (
        <Link
            href={`/projects/${slug}`}
            className="video-card relative rounded-xl overflow-hidden border border-primary/30 group transition-all duration-200 hover:scale-[1.01] hover:-translate-y-1 block cursor-pointer"
            data-position={position}
        >
            {/* Full video background - slightly zoomed to crop edges */}
            <div className="aspect-video overflow-hidden">
                <div className="scale-105 origin-center w-full h-full">
                    <SlowVideo src={video} />
                </div>
            </div>

            {/* Glass overlay with title on hover */}
            <div className="absolute inset-0 bg-background/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-foreground">{name}</h3>
            </div>
        </Link>
    )
}
