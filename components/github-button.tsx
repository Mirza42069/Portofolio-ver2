"use client"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { GithubLogoIcon } from "@phosphor-icons/react"

export function GithubButton() {
    if (!siteConfig.links.github) return null

    return (
        <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="fixed top-6 right-6 z-50"
        >
            <Button size="sm" className="gap-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                <GithubLogoIcon className="w-5 h-5" />
            </Button>
        </a>
    )
}
