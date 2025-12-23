"use client"

import { SlowVideo } from "./slow-video"

interface VideoCardProps {
    name: string
    video: string
    position: "left" | "right"
}

export function VideoCard({ name, video, position }: VideoCardProps) {
    return (
        <div
            className="video-card relative rounded-xl overflow-hidden border border-primary/30 group transition-all duration-200 hover:scale-[1.01] hover:-translate-y-1"
            data-position={position}
        >
            {/* Full video background */}
            <div className="aspect-video">
                <SlowVideo src={video} />
            </div>

            {/* Glass overlay with title on hover */}
            <div className="absolute inset-0 bg-background/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-foreground">{name}</h3>
            </div>
        </div>
    )
}
