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
    title: "Image Enhancer - PixelMagic",
    description: "Transform low-quality images into high-definition with our AI-powered image enhancer.",
    keywords: [
        "image enhancer",
        "AI image enhancement",
        "photo enhancement",
        "image quality improvement",
        "AI tools",
        "image editing tools",
    ],
    canonical: "https://pixelmagic.ai/tools/image-enhancer",
    image: "https://pixelmagic.ai/images/image-enhancer-preview.png",
    noIndex: false,
})

export default function ImageEnhancerPage() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Image Enhancer",
        description: "Transform low-quality images into high-definition with our AI-powered image enhancer.",
        url: "https://pixelmagic.ai/tools/image-enhancer",
        mainEntity: {
            "@type": "WebPageElement",
            name: "Image Enhancer",
            description: "Transform low-quality images into high-definition with our AI-powered image enhancer.",
            image: "https://pixelmagic.ai/images/image-enhancer-preview.png",
            potentialAction: {
                "@type": "Action",
                name: "Try It Now",
                target: "https://pixelmagic.ai/tools/image-enhancer",
            },
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
                    <h1 className="text-3xl font-bold">Image Enhancer</h1>
                </div>

                <div className="grid gap-12">
                    {/* Hero Section */}
                    <section className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <Badge variant="outline">AI-Powered</Badge>
                            <h2 className="text-3xl font-bold tracking-tight">Transform Low-Quality Images into High-Definition</h2>
                            <p className="text-muted-foreground text-lg">
                                Our AI-powered image enhancer automatically improves image quality, fixes lighting issues, reduces noise,
                                and enhances details to make your photos look their best.
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
                                    <p className="text-muted-foreground">Image Enhancer Preview</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How It Works */}
                    <section className="space-y-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold">How It Works</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Our advanced AI model has been trained on millions of images to understand what makes a photo look great.
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
                                            Upload any image that needs enhancement, regardless of its current quality.
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
                                        <h3 className="text-xl font-bold">AI Processing</h3>
                                        <p className="text-muted-foreground">
                                            Our AI analyzes and enhances multiple aspects of your image simultaneously.
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
                                        <h3 className="text-xl font-bold">Download Result</h3>
                                        <p className="text-muted-foreground">
                                            Download your enhanced image in high resolution, ready to use or share.
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

                    {/* Enhancement Features */}
                    <section className="space-y-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold">Enhancement Features</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Our AI enhancer improves multiple aspects of your images simultaneously.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="text-center space-y-4">
                                        <div className="rounded-full bg-primary/10 p-3 mx-auto">
                                            <svg
                                                className="h-6 w-6 text-primary"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold">Resolution Upscaling</h3>
                                        <p className="text-muted-foreground">
                                            Increase image resolution without losing quality, perfect for printing or large displays.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <div className="text-center space-y-4">
                                        <div className="rounded-full bg-primary/10 p-3 mx-auto">
                                            <svg
                                                className="h-6 w-6 text-primary"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold">Lighting Correction</h3>
                                        <p className="text-muted-foreground">
                                            Fix underexposed or overexposed images with intelligent lighting adjustment.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <div className="text-center space-y-4">
                                        <div className="rounded-full bg-primary/10 p-3 mx-auto">
                                            <svg
                                                className="h-6 w-6 text-primary"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold">Detail Enhancement</h3>
                                        <p className="text-muted-foreground">
                                            Sharpen and enhance fine details to make your images crisp and clear.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <div className="text-center space-y-4">
                                        <div className="rounded-full bg-primary/10 p-3 mx-auto">
                                            <svg
                                                className="h-6 w-6 text-primary"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold">Color Correction</h3>
                                        <p className="text-muted-foreground">
                                            Optimize color balance and vibrancy for more appealing and natural-looking images.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Use Cases */}
                    <section className="space-y-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold">Use Cases</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Our image enhancer is perfect for a variety of applications.
                            </p>
                        </div>
                        <Tabs defaultValue="old" className="w-full">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                                <TabsTrigger value="old">Old Photos</TabsTrigger>
                                <TabsTrigger value="low">Low Light</TabsTrigger>
                                <TabsTrigger value="social">Social Media</TabsTrigger>
                                <TabsTrigger value="professional">Professional</TabsTrigger>
                            </TabsList>
                            <TabsContent value="old" className="mt-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="grid md:grid-cols-2 gap-6 items-center">
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-bold">Restore Old Photos</h3>
                                                <p className="text-muted-foreground">
                                                    Breathe new life into old, faded, or damaged photos by enhancing their quality and restoring
                                                    lost details.
                                                </p>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Restore faded colors</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Enhance lost details</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Reduce scratches and damage</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                                                <p className="text-muted-foreground">Old Photo Example</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="low" className="mt-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="grid md:grid-cols-2 gap-6 items-center">
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-bold">Fix Low Light Photos</h3>
                                                <p className="text-muted-foreground">
                                                    Rescue photos taken in poor lighting conditions by brightening, reducing noise, and enhancing
                                                    details.
                                                </p>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Brighten dark images</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Reduce noise and grain</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Improve visibility of details</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                                                <p className="text-muted-foreground">Low Light Example</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="social" className="mt-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="grid md:grid-cols-2 gap-6 items-center">
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-bold">Social Media Content</h3>
                                                <p className="text-muted-foreground">
                                                    Make your social media posts stand out with professionally enhanced images that catch attention.
                                                </p>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Enhance colors for eye-catching posts</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Improve clarity and sharpness</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Create professional-looking content</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                                                <p className="text-muted-foreground">Social Media Example</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="professional" className="mt-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="grid md:grid-cols-2 gap-6 items-center">
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-bold">Professional Photography</h3>
                                                <p className="text-muted-foreground">
                                                    Take your professional photography to the next level with AI-powered enhancements.
                                                </p>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Perfect product photography</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Enhance real estate images</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Improve portfolio quality</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                                                <p className="text-muted-foreground">Professional Example</p>
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
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Got questions? We&apos;ve got answers.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-bold mb-2">How much can image quality be improved?</h3>
                                    <p className="text-muted-foreground">
                                        Our AI can significantly improve most images, but results vary depending on the original quality.
                                        Extremely low-resolution or heavily damaged images may see more modest improvements.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-bold mb-2">Can I control the enhancement settings?</h3>
                                    <p className="text-muted-foreground">
                                        Yes, our advanced mode allows you to adjust parameters like sharpness, brightness, contrast, and color
                                        enhancement to achieve your desired look.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-bold mb-2">Will enhancement fix blurry images?</h3>
                                    <p className="text-muted-foreground">
                                        Our AI can improve slightly blurry images by enhancing edges and details, but it cannot fully recover
                                        information that isn&apos;t present in the original image.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-bold mb-2">What resolution can I upscale to?</h3>
                                    <p className="text-muted-foreground">
                                        You can upscale images up to 4x their original resolution while maintaining quality, making small
                                        images suitable for printing or large displays.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="bg-muted rounded-lg p-8 text-center">
                        <div className="max-w-2xl mx-auto space-y-6">
                            <h2 className="text-3xl font-bold">Ready to Transform Your Images?</h2>
                            <p className="text-muted-foreground text-lg">
                                Join thousands of photographers and creators who use our AI tools to enhance their visual content.
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

