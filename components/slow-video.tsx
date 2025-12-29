"use client"

import { useRef, useEffect } from "react"

interface SlowVideoProps {
    src: string
    playbackRate?: number
    className?: string
}

export function SlowVideo({ src, playbackRate = 0.5, className }: SlowVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = playbackRate
        }
    }, [playbackRate])

    return (
        <video
            ref={videoRef}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className={`w-full h-full object-cover ${className || ''}`}
        />
    )
}
