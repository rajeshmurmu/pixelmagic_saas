"use client"
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { useState } from 'react'

export default function TryOut() {
    const [activeTab, setActiveTab] = useState("background")

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 md:bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <Badge variant="outline" className="w-fit mx-auto">
                            Try It Out
                        </Badge>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">See the Magic in Action</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Experience our powerful AI tools with these interactive examples.
                        </p>
                    </div>
                </div>
                <div className="mx-auto max-w-4xl py-12">
                    <Tabs defaultValue={activeTab} className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="background" onClick={() => setActiveTab("background")}>Background Remover</TabsTrigger>
                            <TabsTrigger value="fill" onClick={() => setActiveTab("fill")}>Generative Fill</TabsTrigger>
                            <TabsTrigger value="enhance" onClick={() => setActiveTab("enhance")}>Image Enhancer</TabsTrigger>
                            <TabsTrigger value="extract" onClick={() => setActiveTab("extract")}>Generative Extract</TabsTrigger>
                        </TabsList>
                        <TabsContent value="background" className="mt-6">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                                        <p className="text-muted-foreground">Background Remover Demo</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="fill" className="mt-6">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                                        <p className="text-muted-foreground">Generative Fill Demo</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="enhance" className="mt-6">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                                        <p className="text-muted-foreground">Image Enhancer Demo</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="extract" className="mt-6">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                                        <p className="text-muted-foreground">Generative Extract Demo</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}
