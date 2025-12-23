"use client"

import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "@phosphor-icons/react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("theme")
    if (stored === "light") {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    if (isAnimating) return

    setIsAnimating(true)

    // Step 1: Fade out cards
    document.body.classList.add("cards-hidden")

    // Step 2: After cards fade out, change theme
    setTimeout(() => {
      const newIsDark = !isDark
      setIsDark(newIsDark)

      if (newIsDark) {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
      }
    }, 400)

    // Step 3: After theme changes, fade cards back in
    setTimeout(() => {
      document.body.classList.remove("cards-hidden")
    }, 600)

    // Reset animation state
    setTimeout(() => {
      setIsAnimating(false)
    }, 1000)
  }

  return (
    <button
      onClick={toggleTheme}
      disabled={isAnimating}
      className="fixed top-6 left-6 z-50 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {/* Switch track */}
      <div className="relative w-12 h-6 rounded-full">
        {/* Switch thumb */}
        <div
          className={`absolute top-0.5 w-5 h-5 rounded-full bg-primary transition-all duration-300 flex items-center justify-center ${isDark ? "left-0.5" : "left-[calc(100%-22px)]"
            }`}
        >
          {isDark ? (
            <MoonIcon size={12} className="text-primary-foreground" weight="fill" />
          ) : (
            <SunIcon size={12} className="text-primary-foreground" weight="fill" />
          )}
        </div>
      </div>
    </button>
  )
}

