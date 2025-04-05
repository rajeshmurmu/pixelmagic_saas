import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Upload, CheckCircle } from "lucide-react"
import { ToolsLayout } from "../tools-layout"
import { constructMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = constructMetadata({
    title: "Generative Fill - PixelMagic",
    description: "Expand your images or fill in missing areas with AI-generated content that matches perfectly.",
    keywords: [
        "Generative Fill",
        "AI Image Editing",
        "Image Expansion",
        "Object Removal",
        "Photo Restoration",
        "Creative Edits",
    ],
    canonical: "https://pixelmagic.ai/tools/generative-fill",
    image: "https://pixelmagic.ai/images/generative-fill.png",
    noIndex: false,
})

export default function GenerativeFillPage() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Generative Fill",
        description: "Expand your images or fill in missing areas with AI-generated content that matches perfectly.",
        url: "https://pixelmagic.ai/tools/generative-fill",
        mainEntity: {
            "@type": "ItemList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Generative Fill",
                    description: "Expand your images or fill in missing areas with AI-generated content that matches perfectly.",
                    url: "https://pixelmagic.ai/tools/generative-fill",
                },
            ],
        },
    }
    return (
        <ToolsLayout structuredData={structuredData}>
            <div className="container max-w-7xl mx-auto px-4 py-12">
                <div className="flex items-center gap-2 mb-8">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/tools">
                            <ArrowLeft className="h-4 w-4" />
                            <span className="sr-only">Back to home</span>
                        </Link>
                    </Button>
                    <h1 className="text-3xl font-bold">Generative Fill</h1>
                </div>

                <div className="grid gap-12">
                    {/* Hero Section */}
                    <section className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <Badge variant="outline">AI-Powered</Badge>
                            <h2 className="text-3xl font-bold tracking-tight">Expand Images or Fill Missing Areas</h2>
                            <p className="text-muted-foreground text-lg">
                                Our AI-powered generative fill tool can expand your images beyond their original boundaries or fill in
                                missing areas with content that matches the style and context of your image.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button size="lg">
                                    Try It Now
                                    <Upload className="ml-2 h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="lg">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                        <div className="bg-muted rounded-lg aspect-square flex items-center justify-center p-6">
                            <div className="relative w-full h-full">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <p className="text-muted-foreground">Generative Fill Preview</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How It Works */}
                    <section className="space-y-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold">How It Works</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Our advanced AI model analyzes your image and generates new content that seamlessly blends with the
                                existing elements.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="text-center space-y-4">
                                        <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                                            <span className="text-xl font-bold text-primary">1</span>
                                        </div>
                                        <h3 className="text-xl font-bold">Upload Your Image</h3>
                                        <p className="text-muted-foreground">
                                            Upload any image that you want to expand or fill in missing areas.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="text-center space-y-4">
                                        <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                                            <span className="text-xl font-bold text-primary">2</span>
                                        </div>
                                        <h3 className="text-xl font-bold">Select Area</h3>
                                        <p className="text-muted-foreground">
                                            Choose the area you want to expand or fill using our intuitive editor.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="text-center space-y-4">
                                        <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                                            <span className="text-xl font-bold text-primary">3</span>
                                        </div>
                                        <h3 className="text-xl font-bold">Generate & Download</h3>
                                        <p className="text-muted-foreground">
                                            Our AI generates the new content and you can download the complete image.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Try It Out */}
                    <section className="space-y-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold">Try It Out</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Upload your image and see the magic happen in seconds.
                            </p>
                        </div>
                        <Card className="border-dashed border-2">
                            <CardContent className="p-12">
                                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                    <div className="rounded-full bg-muted p-6">
                                        <Upload className="h-12 w-12 text-muted-foreground" />
                                    </div>
                                    <h3 className="text-xl font-bold">Upload Your Image</h3>
                                    <p className="text-muted-foreground max-w-md">
                                        Drag and drop your image here, or click to browse. Supports JPG, PNG, and WEBP formats up to 10MB.
                                    </p>
                                    <Button size="lg">Select Image</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Use Cases */}
                    <section className="space-y-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold">Use Cases</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Our generative fill tool is perfect for a variety of creative applications.
                            </p>
                        </div>
                        <Tabs defaultValue="expand" className="w-full">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                                <TabsTrigger value="expand">Image Expansion</TabsTrigger>
                                <TabsTrigger value="remove">Object Removal</TabsTrigger>
                                <TabsTrigger value="restore">Photo Restoration</TabsTrigger>
                                <TabsTrigger value="creative">Creative Edits</TabsTrigger>
                            </TabsList>
                            <TabsContent value="expand" className="mt-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="grid md:grid-cols-2 gap-6 items-center">
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-bold">Image Expansion</h3>
                                                <p className="text-muted-foreground">
                                                    Extend your images beyond their original boundaries to fit different aspect ratios or create
                                                    more space around your subject.
                                                </p>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Adapt images for different platforms</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Create space for text overlays</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Extend backgrounds for panoramic views</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                                                <p className="text-muted-foreground">Expansion Example</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="remove" className="mt-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="grid md:grid-cols-2 gap-6 items-center">
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-bold">Object Removal</h3>
                                                <p className="text-muted-foreground">
                                                    Remove unwanted objects from your photos and let our AI fill in the space naturally.
                                                </p>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Remove photobombers</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Clean up distracting elements</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Create cleaner compositions</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                                                <p className="text-muted-foreground">Removal Example</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="restore" className="mt-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="grid md:grid-cols-2 gap-6 items-center">
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-bold">Photo Restoration</h3>
                                                <p className="text-muted-foreground">
                                                    Restore damaged or incomplete photos by filling in missing areas with AI-generated content.
                                                </p>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Fix torn or damaged photos</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Restore old family photos</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Complete partial images</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                                                <p className="text-muted-foreground">Restoration Example</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="creative" className="mt-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="grid md:grid-cols-2 gap-6 items-center">
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-bold">Creative Edits</h3>
                                                <p className="text-muted-foreground">
                                                    Extend your creativity by adding AI-generated elements that blend seamlessly with your original
                                                    image.
                                                </p>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Create surreal compositions</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Extend scenes beyond reality</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Blend multiple environments</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                                                <p className="text-muted-foreground">Creative Example</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </section>

                    {/* FAQ */}
                    <section className="space-y-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Got questions? We&#39;ve got answers.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-bold mb-2">How realistic are the generated fills?</h3>
                                    <p className="text-muted-foreground">
                                        Our AI generates highly realistic content that matches the style, lighting, and context of your
                                        original image. Results are best when the area to be filled has clear context clues.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-bold mb-2">Can I control what gets generated?</h3>
                                    <p className="text-muted-foreground">
                                        Yes, you can provide guidance by selecting specific areas for generation and using our advanced
                                        options to specify the style or content you want to generate.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-bold mb-2">How much can I expand an image?</h3>
                                    <p className="text-muted-foreground">
                                        You can expand images up to 4x their original dimensions, though results are most realistic with
                                        moderate expansions (up to 2x).
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-bold mb-2">Will the generated content match my image perfectly?</h3>
                                    <p className="text-muted-foreground">
                                        Our AI strives for seamless integration, but results may vary depending on the complexity of your
                                        image. You can always make adjustments or regenerate if needed.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="bg-muted rounded-lg p-8 text-center">
                        <div className="max-w-2xl mx-auto space-y-6">
                            <h2 className="text-3xl font-bold">Ready to Expand Your Creative Possibilities?</h2>
                            <p className="text-muted-foreground text-lg">
                                Join thousands of creators who use our AI tools to push the boundaries of their visual content.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button size="lg">Try For Free</Button>
                                <Button variant="outline" size="lg">
                                    View Pricing
                                </Button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </ToolsLayout>
    )
}

