"use client"

import { useEffect, useState, useRef } from "react"

interface TypeWriterProps {
    text: string
    delay?: number
    className?: string
    onComplete?: () => void
}

export function TypeWriter({ text, delay = 100, className, onComplete }: TypeWriterProps) {
    const [displayText, setDisplayText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showCursor, setShowCursor] = useState(true)
    const completedRef = useRef(false)

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex])
                setCurrentIndex(prev => prev + 1)
            }, delay)
            return () => clearTimeout(timeout)
        } else if (!completedRef.current) {
            // Typing complete - trigger callback only once
            completedRef.current = true
            onComplete?.()
            // Hide cursor after typing is complete
            const timeout = setTimeout(() => {
                setShowCursor(false)
            }, 500)
            return () => clearTimeout(timeout)
        }
    }, [currentIndex, text, delay, onComplete])

    return (
        <span className={className}>
            {displayText}
            {showCursor && (
                <span className="animate-pulse text-primary">|</span>
            )}
        </span>
    )
}
