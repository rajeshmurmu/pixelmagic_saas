import type React from "react"

import Script from "next/script"
import SiteHeader from "./site-header"
import SiteFooter from "./site-footer"

interface PageLayoutProps {
    children: React.ReactNode
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    structuredData?: Record<string, any>
}

export function PageLayout({ children, structuredData }: PageLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            {structuredData && (
                <Script
                    id="structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            )}
            <SiteHeader />
            <main className="container mx-auto flex-1">{children}</main>
            <SiteFooter />
        </div>
    )
}

