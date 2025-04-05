"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Wand2, Eraser, Paintbrush, Image as ImageIcon, Layers } from "lucide-react"

const tools = [
  {
    name: "Background Remover",
    icon: Eraser,
    href: "/tools/background-remover",
  },
  {
    name: "Generative Fill",
    icon: Paintbrush,
    href: "/tools/generative-fill",
  },
  {
    name: "Image Enhancer",
    icon: Wand2,
    href: "/tools/image-enhancer",
  },
  {
    name: "Generative Extract",
    icon: ImageIcon,
    href: "/tools/generative-extract",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="border-r bg-muted/40 w-64 hidden md:block">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center gap-2">
          <Layers className="h-6 w-6" />
          <span className="font-semibold">PixelMagic</span>
        </Link>
      </div>
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <div className="space-y-1">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Tools
              </h2>
              <nav className="space-y-1">
                {tools.map((tool) => (
                  <Button
                    key={tool.href}
                    variant={pathname === tool.href ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start",
                      pathname === tool.href && "bg-secondary"
                    )}
                    asChild
                  >
                    <Link href={tool.href}>
                      <tool.icon className="mr-2 h-4 w-4" />
                      {tool.name}
                    </Link>
                  </Button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}