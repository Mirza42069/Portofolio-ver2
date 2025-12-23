"use client"

import { useEffect, useRef, useState, ReactNode } from "react"

interface ScrollSectionProps {
    children: ReactNode
    className?: string
    id?: string
}

export function ScrollSection({ children, className = "", id }: ScrollSectionProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(true) // Start visible to prevent flash

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -20% 0px"
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            id={id}
            className={`transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-50"
                } ${className}`}
        >
            {children}
        </div>
    )
}
