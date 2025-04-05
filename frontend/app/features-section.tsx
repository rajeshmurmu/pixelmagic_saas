"use client"
import { Card, CardContent } from '@/components/ui/card'
import { ImageIcon, Layers, Sparkles, Wand2 } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { Badge } from '@/components/ui/badge'

const features = [
  {
    icon: <Layers className="h-6 w-6 text-primary" />,
    title: "Background Remover",
    description: "Remove backgrounds from images with a single click, perfect for product photos and portraits.",
    href: "/tools/background-remover",
  },
  {
    icon: <Wand2 className="h-6 w-6 text-primary" />,
    title: "Generative Fill",
    description: "Expand your images or fill in missing areas with AI-generated content that matches perfectly.",
    href: "/tools/generative-fill",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    title: "Image Enhancer",
    description: "Improve image quality, fix lighting, and enhance details automatically with our AI enhancer.",
    href: "/tools/image-enhancer",
  },
  {
    icon: <ImageIcon className="h-6 w-6 text-primary" />,
    title: "Generative Extract",
    description: "Extract and isolate objects from images with precision using our advanced AI detection.",
    href: "/tools/generative-extract",
  },
]

export default function FeaturesSection() {

  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  return (

    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background" suppressHydrationWarning>
      <div className="container px-4 md:px-6 mx-auto">

        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="w-fit mx-auto">
              Features
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful AI Tools</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our suite of AI-powered tools makes image editing faster and more intuitive than ever before.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">

          {isClient &&
            features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
              >
                <Link href={feature.href}>
                  <Card className="transform transition-all duration-300 hover:scale-105 h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className={`rounded-full bg-primary/10 p-3 ${hoveredFeature === index ? 'bg-primary text-primary-foreground' : 'bg-muted'}
                              transition-colors duration-300`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>

              </motion.div>
            )
            )}
        </div>

      </div>
    </section>
  )
}
