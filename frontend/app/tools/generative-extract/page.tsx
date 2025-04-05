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
    title: "Generative Extract - PixelMagic",
    description: "Extract and isolate objects from images with precision using our advanced AI detection.",
    keywords: [
        "Generative Extract",
        "AI tools",
        "image editing tools",
        "object extraction",
        "image enhancement",
    ],
    canonical: "https://pixelmagic.ai/tools/generative-extract",
    image: "https://pixelmagic.ai/tools/generative-extract/preview.png",
    noIndex: false,
})

export default function GenerativeExtractPage() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Generative Extract",
        description: "Extract and isolate objects from images with precision using our advanced AI detection.",
        url: "https://pixelmagic.ai/tools/generative-extract",
        mainEntity: {
            "@type": "WebPageElement",
            name: "Generative Extract Tool",
            description: "Extract and isolate objects from images with precision using our advanced AI detection.",
            image: "https://pixelmagic.ai/tools/generative-extract/preview.png",
            potentialAction: {
                "@type": "UseAction",
                target: "https://pixelmagic.ai/tools/generative-extract",
                name: "Try Generative Extract Now",
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
                    <h1 className="text-3xl font-bold">Generative Extract</h1>
                </div>

                <div className="grid gap-12">
                    {/* Hero Section */}
                    <section className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <Badge variant="outline">AI-Powered</Badge>
                            <h2 className="text-3xl font-bold tracking-tight">Extract Objects with Precision</h2>
                            <p className="text-muted-foreground text-lg">
                                Our AI-powered generative extract tool can identify and isolate objects from images with incredible
                                precision, making it easy to use elements in new compositions or designs.
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
                                    <p className="text-muted-foreground">Generative Extract Preview</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How It Works */}
                    <section className="space-y-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold">How It Works</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Our advanced AI model can identify objects in images and extract them with pixel-perfect precision.
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
                                        <p className="text-muted-foreground">Upload any image containing objects you want to extract.</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="text-center space-y-4">
                                        <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                                            <span className="text-xl font-bold text-primary">2</span>
                                        </div>
                                        <h3 className="text-xl font-bold">Select Object</h3>
                                        <p className="text-muted-foreground">
                                            Click on the object you want to extract or use our smart selection tools.
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
                                            Download your extracted object with a transparent background, ready to use.
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
                                Our generative extract tool is perfect for a variety of creative applications.
                            </p>
                        </div>
                        <Tabs defaultValue="design" className="w-full">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                                <TabsTrigger value="design">Graphic Design</TabsTrigger>
                                <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
                                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                                <TabsTrigger value="personal">Personal Projects</TabsTrigger>
                            </TabsList>
                            <TabsContent value="design" className="mt-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="grid md:grid-cols-2 gap-6 items-center">
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-bold">Graphic Design</h3>
                                                <p className="text-muted-foreground">
                                                    Extract elements from images for use in graphic design projects, creating collages, or designing
                                                    marketing materials.
                                                </p>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Create composite images</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Extract design elements</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Build creative collages</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                                                <p className="text-muted-foreground">Design Example</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="ecommerce" className="mt-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="grid md:grid-cols-2 gap-6 items-center">
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-bold">E-commerce</h3>
                                                <p className="text-muted-foreground">
                                                    Extract products from images to create consistent product catalogs with clean backgrounds and
                                                    professional presentation.
                                                </p>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Create consistent product images</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Build product catalogs</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Showcase products on different backgrounds</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                                                <p className="text-muted-foreground">E-commerce Example</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="marketing" className="mt-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="grid md:grid-cols-2 gap-6 items-center">
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-bold">Marketing</h3>
                                                <p className="text-muted-foreground">
                                                    Extract elements from images to create eye-catching marketing materials, social media posts, and
                                                    advertisements.
                                                </p>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Create social media graphics</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Design banner ads</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Build promotional materials</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                                                <p className="text-muted-foreground">Marketing Example</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="personal" className="mt-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="grid md:grid-cols-2 gap-6 items-center">
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-bold">Personal Projects</h3>
                                                <p className="text-muted-foreground">
                                                    Extract elements from personal photos for creative projects, scrapbooking, or digital art.
                                                </p>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Create digital scrapbooks</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Make custom photo collages</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Design personalized gifts</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                                                <p className="text-muted-foreground">Personal Project Example</p>
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
                                    <h3 className="text-xl font-bold mb-2">How accurate is the object extraction?</h3>
                                    <p className="text-muted-foreground">
                                        Our AI is trained on millions of images and can accurately detect and extract objects with pixel-level
                                        precision. It works best with clear subjects and good contrast between the object and background.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-bold mb-2">Can I extract multiple objects from one image?</h3>
                                    <p className="text-muted-foreground">
                                        Yes, you can extract multiple objects from a single image. Our tool allows you to select and extract
                                        objects one by one or use our batch selection feature to extract multiple objects simultaneously.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-bold mb-2">What file formats are supported for extracted objects?</h3>
                                    <p className="text-muted-foreground">
                                        Extracted objects can be downloaded as PNG files with transparent backgrounds, or as layered PSD files
                                        for advanced editing in Photoshop. We also support SVG export for certain types of objects.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-bold mb-2">Can I fine-tune the extraction results?</h3>
                                    <p className="text-muted-foreground">
                                        Yes, our advanced editor allows you to refine the extraction by adjusting the selection, smoothing
                                        edges, or manually editing the mask for perfect results even with complex objects.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Advanced Features */}
                    <section className="space-y-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold">Advanced Features</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Our generative extract tool includes powerful features for professional results.
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
                                        <h3 className="text-xl font-bold">Smart Selection</h3>
                                        <p className="text-muted-foreground">
                                            AI-powered object detection automatically identifies and selects objects in your image.
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
                                                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold">Edge Refinement</h3>
                                        <p className="text-muted-foreground">
                                            Automatically smooths and refines edges for professional-looking results.
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
                                                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold">Batch Processing</h3>
                                        <p className="text-muted-foreground">
                                            Extract multiple objects from multiple images in one go to save time.
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
                                        <h3 className="text-xl font-bold">Background Replacement</h3>
                                        <p className="text-muted-foreground">
                                            Instantly place extracted objects on new backgrounds of your choice.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="bg-muted rounded-lg p-8 text-center">
                        <div className="max-w-2xl mx-auto space-y-6">
                            <h2 className="text-3xl font-bold">Ready to Extract Objects with Precision?</h2>
                            <p className="text-muted-foreground text-lg">
                                Join thousands of designers and creators who use our AI tools to streamline their workflow.
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

