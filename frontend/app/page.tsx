import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"
import { constructMetadata } from "@/lib/metadata"
import { PageLayout } from "@/components/page-layout"
import HeroSection from "./hero-section"
import FeaturesSection from "./features-section"
import TryOut from "./try-out"


export const metadata: Metadata = constructMetadata({
  title: "AI-Powered Image Editing Tools",
  description:
    "Transform your images with AI magic. Remove backgrounds, enhance quality, and generate creative edits in seconds with our powerful AI tools.",
  keywords: ["AI image editing", "background removal", "image enhancement", "photo editing"],
})

export default function Home() {

  // Structured data for the homepage
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PixelMagic",
    url: "https://pixelmagic.ai",
    description:
      "AI-powered image editing tools to remove backgrounds, enhance quality, and generate creative edits in seconds.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://pixelmagic.ai/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }



  return (
    <PageLayout structuredData={structuredData}>
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />
      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline" className="w-fit mx-auto">
                Simple Process
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Transform your images in three simple steps with our intuitive platform.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="text-xl font-bold">Upload</h3>
              <p className="text-muted-foreground">
                Upload your image from your device, or drag and drop directly into the editor.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="text-xl font-bold">Edit</h3>
              <p className="text-muted-foreground">
                Choose from our AI tools to enhance, transform, or modify your image as needed.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="text-xl font-bold">Download</h3>
              <p className="text-muted-foreground">
                Download your edited image in high resolution, ready to use in your projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Try out */}
      <TryOut />

      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline" className="w-fit mx-auto">
                Pricing
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Choose Your Plan</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Flexible pricing options to suit your needs, from individual creators to enterprise teams.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <Card className="transform transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <p className="text-muted-foreground">For casual users</p>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="mb-6 flex-1 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>5 image edits per month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Basic tools access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Standard quality exports</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>
            <Card className="transform transition-all duration-300 hover:shadow-lg border-primary">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <Badge className="mb-2">Popular</Badge>
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-muted-foreground">For professionals</p>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="mb-6 flex-1 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>100 image edits per month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>All tools access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>High quality exports</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full">Subscribe Now</Button>
              </CardContent>
            </Card>
            <Card className="transform transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-muted-foreground">For teams</p>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="mb-6 flex-1 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Unlimited image edits</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>All tools access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Ultra HD exports</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 md:bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Images?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of creators and businesses using PixelMagic to enhance their visual content.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">
                Get Started for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}