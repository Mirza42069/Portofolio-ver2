"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.getAttribute('role') === 'button'
            ) {
                setIsHovering(true)
            }
        }

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.getAttribute('role') === 'button'
            ) {
                setIsHovering(false)
            }
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseover', handleMouseOver)
        document.addEventListener('mouseout', handleMouseOut)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseover', handleMouseOver)
            document.removeEventListener('mouseout', handleMouseOut)
        }
    }, [])

    return (
        <div
            className="custom-cursor"
            style={{
                left: position.x,
                top: position.y,
                transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
                mixBlendMode: isHovering ? 'difference' : 'normal',
            }}
        />
    )
}
