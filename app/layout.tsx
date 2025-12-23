import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google"

import { siteConfig } from "@/lib/site-config"
import { CustomCursor } from "@/components/custom-cursor"
import { ThemeToggle } from "@/components/theme-toggle"
import { GithubButton } from "@/components/github-button"

import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Portfolio",
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} — Portfolio`,
    description: siteConfig.description,
    siteName: `${siteConfig.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Portfolio`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} scroll-smooth dark`} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeToggle />
        <GithubButton />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
