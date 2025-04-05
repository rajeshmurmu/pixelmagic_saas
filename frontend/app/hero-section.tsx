"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, ImageIcon } from 'lucide-react'
export default function HeroSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6 mx-auto ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <Badge variant="outline" className="w-fit">
                                    AI-Powered Image Editing
                                </Badge>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Transform Your Images with AI Magic
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    Powerful AI tools to remove backgrounds, enhance quality, and generate creative edits in seconds.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Button size="lg" asChild>
                                    <Link href="/tools">
                                        Try for Free
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="/tools">See Examples</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="relative w-full max-w-[500px] aspect-square rounded-lg overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 opacity-80 animate-pulse"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <ImageIcon className="h-24 w-24 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

