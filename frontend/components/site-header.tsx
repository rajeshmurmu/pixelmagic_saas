import { Layers } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'

export default function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2" aria-label="PixelMagic Home">
                        <Layers className="h-6 w-6" aria-hidden="true" />
                        <span className="text-xl font-bold">PixelMagic</span>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
                    <Link href="tools" className="text-sm font-medium hover:underline underline-offset-4">
                        Tools
                    </Link>
                    <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
                        Features
                    </Link>
                    <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
                        How It Works
                    </Link>
                    <Link href="pricing" className="text-sm font-medium hover:underline underline-offset-4">
                        Pricing
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <Button asChild>
                        <Link href="/signup">Get Started</Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
