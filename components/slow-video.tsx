"use client"

interface SlowVideoProps {
    src: string
    playbackRate?: number
}

export function SlowVideo({ src, playbackRate = 0.5 }: SlowVideoProps) {
    return (
        <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="w-full h-full object-cover"
            ref={(el) => {
                if (el) el.playbackRate = playbackRate
            }}
        />
    )
}

