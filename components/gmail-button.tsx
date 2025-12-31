"use client"

import { Button } from "@/components/ui/button"
import { EnvelopeIcon } from "@phosphor-icons/react"

export function GmailButton() {
    return (
        <a
            href="https://mail.google.com/mail/?view=cm&to=mirzafarisy@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="fixed top-6 right-6 z-50"
        >
            <Button size="sm" className="gap-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                <EnvelopeIcon className="w-5 h-5" />
            </Button>
        </a>
    )
}