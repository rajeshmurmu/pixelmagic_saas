import { Layers } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function SiteFooter() {
    return (
        <footer className="w-full border-t bg-background" aria-labelledby="footer-heading">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex items-center gap-2">
                    <Layers className="h-6 w-6" />
                    <span className="text-xl font-bold">PixelMagic</span>
                </div>
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-6">
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                        Terms
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                        Privacy
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                        Contact
                    </Link>
                </div>
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} PixelMagic. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
