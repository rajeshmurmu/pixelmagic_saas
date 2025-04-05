import type React from "react"

import Script from "next/script"
import SiteFooter from "@/components/site-footer"
import { Sidebar } from "@/components/sidebar"

interface PageLayoutProps {
    children: React.ReactNode
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    structuredData?: Record<string, any>
}

export function ToolsLayout({ children, structuredData }: PageLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col bg-background">

            {structuredData && (
                <Script
                    id="structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            )}
            <div className="flex">
                <Sidebar />
                <main className="container mx-auto flex-1">{children}</main>
            </div>
            <SiteFooter />
        </div>
    )
}

