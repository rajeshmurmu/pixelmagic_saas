import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Upload, CheckCircle } from "lucide-react"
import { ToolsLayout } from "../tools-layout"
import type { Metadata } from "next"
import { constructMetadata } from "@/lib/metadata"

export const metadata: Metadata = constructMetadata({
  // title: "AI Image Editing Tools",
  // description: "Explore our suite of AI-powered tools designed to transform your images with just a few clicks.",
  // keywords: ["AI tools", "image editing tools", "background removal", "image enhancement"],
  // canonical: "/tools",
  title: "Background Remover - PixelMagic",
  description: "Remove backgrounds from images with our AI-powered background remover.",
  keywords: ["background remover", "AI tools", "image editing", "remove background", "image processing"],
  canonical: "/tools/background-remover",
  image: "https://yourwebsite.com/images/background-remover-preview.png",
  noIndex: false,
})

export default function BackgroundRemoverPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Background Remover",
    description: "Remove backgrounds from images with our AI-powered background remover.",
    url: "https://yourwebsite.com/tools/background-remover",
    mainEntity: {
      "@type": "WebPageElement",
      name: "Background Remover Tool",
      description: "An AI tool to remove backgrounds from images quickly and easily.",
      image: "https://yourwebsite.com/images/background-remover-preview.png",
      potentialAction: {
        "@type": "UseAction",
        target: "https://yourwebsite.com/tools/background-remover",
        name: "Try Background Remover",
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
          <h1 className="text-3xl font-bold">Background Remover</h1>
        </div>

        <div className="grid gap-12">
          {/* Hero Section */}
          <section className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <Badge variant="outline">AI-Powered</Badge>
              <h2 className="text-3xl font-bold tracking-tight">Remove Backgrounds in Seconds</h2>
              <p className="text-muted-foreground text-lg">
                Our AI-powered background remover automatically detects and removes backgrounds from your images with
                precision and speed. Perfect for product photography, portraits, and creative projects.
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
                  <p className="text-muted-foreground">Background Remover Preview</p>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our advanced AI model has been trained on millions of images to accurately detect and separate subjects
                from backgrounds.
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
                      Upload any image from your device or drag and drop it directly into our editor.
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
                      Our AI automatically detects the subject and removes the background in seconds.
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
                      Download your image with the background removed in PNG format with transparency.
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
                Our background remover is perfect for a variety of applications.
              </p>
            </div>
            <Tabs defaultValue="ecommerce" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
                <TabsTrigger value="portraits">Portraits</TabsTrigger>
                <TabsTrigger value="social">Social Media</TabsTrigger>
                <TabsTrigger value="design">Graphic Design</TabsTrigger>
              </TabsList>
              <TabsContent value="ecommerce" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold">E-commerce Product Photos</h3>
                        <p className="text-muted-foreground">
                          Create clean, professional product images with transparent backgrounds for your online store.
                          Increase conversion rates with consistent, high-quality product photos.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Consistent product presentation</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Professional look on any background</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Higher conversion rates</span>
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
              <TabsContent value="portraits" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Professional Portraits</h3>
                        <p className="text-muted-foreground">
                          Create professional headshots and portraits with clean backgrounds for LinkedIn profiles,
                          company websites, or personal branding.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Professional headshots</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Consistent team photos</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Personal branding</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                        <p className="text-muted-foreground">Portrait Example</p>
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
                          Create eye-catching social media posts by removing backgrounds and placing subjects on colorful
                          or themed backgrounds.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Engaging Instagram posts</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Creative TikTok content</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Consistent brand aesthetics</span>
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
              <TabsContent value="design" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Graphic Design Projects</h3>
                        <p className="text-muted-foreground">
                          Easily extract elements from images for use in graphic design projects, collages, and digital
                          art.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Digital collages</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Marketing materials</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Website design elements</span>
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
                  <h3 className="text-xl font-bold mb-2">What file formats are supported?</h3>
                  <p className="text-muted-foreground">
                    We support JPG, PNG, and WEBP formats. The maximum file size is 10MB.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">How accurate is the background removal?</h3>
                  <p className="text-muted-foreground">
                    Our AI is trained on millions of images and can accurately detect subjects in most cases. It works
                    best with clear subjects and contrasting backgrounds.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Can I edit the result after processing?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can fine-tune the results with our editor to perfect the edges or remove additional elements.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">What output formats are available?</h3>
                  <p className="text-muted-foreground">
                    You can download your processed images in PNG format with transparency, or JPG with a white
                    background.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-muted rounded-lg p-8 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold">Ready to Remove Backgrounds?</h2>
              <p className="text-muted-foreground text-lg">
                Join thousands of professionals who use our AI tools to enhance their visual content.
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

