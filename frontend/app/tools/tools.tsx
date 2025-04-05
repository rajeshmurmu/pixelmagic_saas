"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ImageIcon, Layers, Sparkles, Wand2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
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

export default function Tools() {
    const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

    return (
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            {
                features.map((feature, index) => (
                    // <div key={feature.title}>
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
                    // </div>
                ))
            }
        </div>
    )
}