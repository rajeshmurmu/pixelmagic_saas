import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, HelpCircle, X } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { constructMetadata } from "@/lib/metadata"
import { PageLayout } from "@/components/page-layout"
import { Metadata } from "next"


export const metadata: Metadata = constructMetadata({
    title: "Pricing Plans",
    description:
        "Choose the perfect plan for your needs. Flexible pricing options for individuals, professionals, and enterprise teams.",
    keywords: ["pricing", "subscription", "plans", "AI image editing pricing"],
    canonical: "/pricing",
})

export default function PricingPage() {
    // Structured data for pricing
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "PixelMagic AI Image Editing",
        description: "AI-powered image editing tools",
        offers: {
            "@type": "AggregateOffer",
            offerCount: 3,
            lowPrice: "0",
            highPrice: "99",
            priceCurrency: "USD",
            offers: [
                {
                    "@type": "Offer",
                    name: "Free Plan",
                    price: "0",
                    priceCurrency: "USD",
                    description: "For casual users",
                },
                {
                    "@type": "Offer",
                    name: "Pro Plan",
                    price: "19",
                    priceCurrency: "USD",
                    description: "For professionals",
                },
                {
                    "@type": "Offer",
                    name: "Enterprise Plan",
                    price: "99",
                    priceCurrency: "USD",
                    description: "For teams",
                },
            ],
        },
    }
    return (
        <PageLayout structuredData={structuredData}>

            <div className="flex min-h-screen flex-col">
                <main className="flex-1">
                    {/* Hero Section */}
                    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <Badge variant="outline" className="w-fit mx-auto">
                                        Pricing
                                    </Badge>
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                        Choose the Perfect Plan for Your Needs
                                    </h1>
                                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Flexible pricing options to suit your needs, from individual creators to enterprise teams.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Pricing Toggle */}
                    <section className="w-full py-12">
                        <div className="container px-4 md:px-6">
                            <Tabs defaultValue="monthly" className="w-full max-w-3xl mx-auto">
                                <div className="flex justify-center mb-8">
                                    <TabsList>
                                        <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
                                        <TabsTrigger value="annual">Annual Billing (Save 20%)</TabsTrigger>
                                    </TabsList>
                                </div>

                                {/* Monthly Pricing */}
                                <TabsContent value="monthly">
                                    <div className="grid md:grid-cols-3 gap-6">
                                        {/* Free Plan */}
                                        <Card className="flex flex-col">
                                            <CardHeader>
                                                <CardTitle className="text-2xl">Free</CardTitle>
                                                <p className="text-muted-foreground">For casual users</p>
                                            </CardHeader>
                                            <CardContent className="flex-1">
                                                <div className="mb-4">
                                                    <span className="text-4xl font-bold">$0</span>
                                                    <span className="text-muted-foreground">/month</span>
                                                </div>
                                                <ul className="space-y-2 mb-6">
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
                                                    <li className="flex items-center text-muted-foreground">
                                                        <X className="mr-2 h-4 w-4" />
                                                        <span>Advanced features</span>
                                                    </li>
                                                    <li className="flex items-center text-muted-foreground">
                                                        <X className="mr-2 h-4 w-4" />
                                                        <span>Priority support</span>
                                                    </li>
                                                </ul>
                                            </CardContent>
                                            <CardFooter>
                                                <Button variant="outline" className="w-full">
                                                    Get Started
                                                </Button>
                                            </CardFooter>
                                        </Card>

                                        {/* Pro Plan */}
                                        <Card className="flex flex-col border-primary relative">
                                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0">
                                                <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                                            </div>
                                            <CardHeader>
                                                <CardTitle className="text-2xl">Pro</CardTitle>
                                                <p className="text-muted-foreground">For professionals</p>
                                            </CardHeader>
                                            <CardContent className="flex-1">
                                                <div className="mb-4">
                                                    {/* <span className="text-4xl font-bold">$19</span> */}
                                                    <span className="text-4xl font-bold">$5</span>
                                                    <span className="text-muted-foreground">/month</span>
                                                </div>
                                                <ul className="space-y-2 mb-6">
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
                                                        <span>Advanced features</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Priority support</span>
                                                    </li>
                                                </ul>
                                            </CardContent>
                                            <CardFooter>
                                                <Button className="w-full">Subscribe Now</Button>
                                            </CardFooter>
                                        </Card>

                                        {/* Enterprise Plan */}
                                        <Card className="flex flex-col">
                                            <CardHeader>
                                                <CardTitle className="text-2xl">Enterprise</CardTitle>
                                                <p className="text-muted-foreground">For teams</p>
                                            </CardHeader>
                                            <CardContent className="flex-1">
                                                <div className="mb-4">
                                                    {/* <span className="text-4xl font-bold">$99</span> */}
                                                    <span className="text-4xl font-bold">$15</span>
                                                    <span className="text-muted-foreground">/month</span>
                                                </div>
                                                <ul className="space-y-2 mb-6">
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
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Custom branding</span>
                                                    </li>
                                                </ul>
                                            </CardContent>
                                            <CardFooter>
                                                <Button variant="outline" className="w-full">
                                                    Contact Sales
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </TabsContent>

                                {/* Annual Pricing */}
                                <TabsContent value="annual">
                                    <div className="grid md:grid-cols-3 gap-6">
                                        {/* Free Plan */}
                                        <Card className="flex flex-col">
                                            <CardHeader>
                                                <CardTitle className="text-2xl">Free</CardTitle>
                                                <p className="text-muted-foreground">For casual users</p>
                                            </CardHeader>
                                            <CardContent className="flex-1">
                                                <div className="mb-4">
                                                    <span className="text-4xl font-bold">$0</span>
                                                    <span className="text-muted-foreground">/month</span>
                                                </div>
                                                <ul className="space-y-2 mb-6">
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
                                                    <li className="flex items-center text-muted-foreground">
                                                        <X className="mr-2 h-4 w-4" />
                                                        <span>Advanced features</span>
                                                    </li>
                                                    <li className="flex items-center text-muted-foreground">
                                                        <X className="mr-2 h-4 w-4" />
                                                        <span>Priority support</span>
                                                    </li>
                                                </ul>
                                            </CardContent>
                                            <CardFooter>
                                                <Button variant="outline" className="w-full">
                                                    Get Started
                                                </Button>
                                            </CardFooter>
                                        </Card>

                                        {/* Pro Plan */}
                                        <Card className="flex flex-col border-primary relative">
                                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0">
                                                <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                                            </div>
                                            <CardHeader>
                                                <CardTitle className="text-2xl">Pro</CardTitle>
                                                <p className="text-muted-foreground">For professionals</p>
                                            </CardHeader>
                                            <CardContent className="flex-1">
                                                <div className="mb-4">
                                                    <span className="text-4xl font-bold">$4</span>
                                                    <span className="text-muted-foreground">/month</span>
                                                </div>
                                                <p className="text-sm text-muted-foreground mb-4">Billed annually ($48/year)</p>
                                                <ul className="space-y-2 mb-6">
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
                                                        <span>Advanced features</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Priority support</span>
                                                    </li>
                                                </ul>
                                            </CardContent>
                                            <CardFooter>
                                                <Button className="w-full">Subscribe Now</Button>
                                            </CardFooter>
                                        </Card>

                                        {/* Enterprise Plan */}
                                        <Card className="flex flex-col">
                                            <CardHeader>
                                                <CardTitle className="text-2xl">Enterprise</CardTitle>
                                                <p className="text-muted-foreground">For teams</p>
                                            </CardHeader>
                                            <CardContent className="flex-1">
                                                <div className="mb-4">
                                                    {/* <span className="text-4xl font-bold">$79</span> */}
                                                    <span className="text-4xl font-bold">$12</span>
                                                    <span className="text-muted-foreground">/month</span>
                                                </div>
                                                <p className="text-sm text-muted-foreground mb-4">Billed annually ($144/year)</p>
                                                <ul className="space-y-2 mb-6">
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
                                                    <li className="flex items-center">
                                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                        <span>Custom branding</span>
                                                    </li>
                                                </ul>
                                            </CardContent>
                                            <CardFooter>
                                                <Button variant="outline" className="w-full">
                                                    Contact Sales
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </section>

                    {/* Feature Comparison */}
                    <section className="w-full py-12 bg-muted/50">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                                <h2 className="text-3xl font-bold">Compare Features</h2>
                                <p className="text-muted-foreground max-w-[800px]">
                                    See which plan is right for you with our detailed feature comparison.
                                </p>
                            </div>
                            <div className="overflow-x-auto">
                                <Table className="w-full border-collapse">
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[300px]">Feature</TableHead>
                                            <TableHead className="text-center">Free</TableHead>
                                            <TableHead className="text-center">Pro</TableHead>
                                            <TableHead className="text-center">Enterprise</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">Monthly image edits</TableCell>
                                            <TableCell className="text-center">5</TableCell>
                                            <TableCell className="text-center">100</TableCell>
                                            <TableCell className="text-center">Unlimited</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Background Remover</TableCell>
                                            <TableCell className="text-center">
                                                <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Generative Fill</TableCell>
                                            <TableCell className="text-center">
                                                <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Image Enhancer</TableCell>
                                            <TableCell className="text-center">
                                                <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Generative Extract</TableCell>
                                            <TableCell className="text-center">
                                                <X className="h-5 w-5 text-muted-foreground mx-auto" />
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Advanced editing tools</TableCell>
                                            <TableCell className="text-center">
                                                <X className="h-5 w-5 text-muted-foreground mx-auto" />
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Batch processing</TableCell>
                                            <TableCell className="text-center">
                                                <X className="h-5 w-5 text-muted-foreground mx-auto" />
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Export quality</TableCell>
                                            <TableCell className="text-center">Standard</TableCell>
                                            <TableCell className="text-center">High</TableCell>
                                            <TableCell className="text-center">Ultra HD</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">API access</TableCell>
                                            <TableCell className="text-center">
                                                <X className="h-5 w-5 text-muted-foreground mx-auto" />
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <X className="h-5 w-5 text-muted-foreground mx-auto" />
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Custom branding</TableCell>
                                            <TableCell className="text-center">
                                                <X className="h-5 w-5 text-muted-foreground mx-auto" />
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <X className="h-5 w-5 text-muted-foreground mx-auto" />
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Support</TableCell>
                                            <TableCell className="text-center">Email</TableCell>
                                            <TableCell className="text-center">Priority</TableCell>
                                            <TableCell className="text-center">Dedicated</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="w-full py-12 md:py-24">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                                <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                                <p className="text-muted-foreground max-w-[800px]">
                                    Find answers to common questions about our pricing and plans.
                                </p>
                            </div>
                            <div className="mx-auto max-w-3xl">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Can I change plans at any time?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes, you can upgrade, downgrade, or cancel your plan at any time. If you upgrade, the new plan will
                                            take effect immediately. If you downgrade, the change will take effect at the end of your current
                                            billing cycle.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>How do image credits work?</AccordionTrigger>
                                        <AccordionContent>
                                            Each plan comes with a monthly allocation of image edits. One image edit is counted each time you
                                            process an image with any of our tools. Unused edits do not roll over to the next month. For the
                                            Enterprise plan, you have unlimited edits.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                                        <AccordionContent>
                                            We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and for Enterprise
                                            customers, we can also arrange bank transfers or invoicing.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>Is there a free trial for paid plans?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes, we offer a 7-day free trial for our Pro plan. You can try all the features without any
                                            commitment. We&apos;ll send you a reminder before your trial ends, and you won&apos;t be charged if you cancel
                                            before the trial period is over.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-5">
                                        <AccordionTrigger>What happens if I exceed my monthly limit?</AccordionTrigger>
                                        <AccordionContent>
                                            If you reach your monthly limit of image edits, you can either upgrade to a higher plan or purchase
                                            additional credits. Additional credits are available in packs of 20, 50, or 100 edits and never
                                            expire.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-6">
                                        <AccordionTrigger>
                                            Do you offer discounts for non-profits or educational institutions?
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            Yes, we offer special pricing for non-profit organizations, educational institutions, and students.
                                            Please contact our sales team with verification of your status to learn more about our discount
                                            programs.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </section>

                    {/* Enterprise Section */}
                    <section className="w-full py-12 md:py-24 bg-muted/50">
                        <div className="container px-4 md:px-6">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4">
                                    <Badge variant="outline">Enterprise Solutions</Badge>
                                    <h2 className="text-3xl font-bold">Need a Custom Solution?</h2>
                                    <p className="text-muted-foreground">
                                        Our Enterprise plan is flexible and can be tailored to your organization&apos;s specific needs. Get in
                                        touch with our sales team to discuss custom pricing, volume discounts, and special requirements.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                                            <span>Custom integration with your existing workflows</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                                            <span>Dedicated account manager</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                                            <span>Volume-based discounts</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                                            <span>Custom feature development</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                                            <span>On-premise deployment options</span>
                                        </li>
                                    </ul>
                                    <div className="pt-4">
                                        <Button size="lg">Contact Sales</Button>
                                    </div>
                                </div>
                                <div className="bg-background rounded-lg p-8 shadow-lg">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <HelpCircle className="h-5 w-5 text-primary" />
                                            <h3 className="text-xl font-bold">Need help choosing?</h3>
                                        </div>
                                        <p>
                                            Our team is ready to help you find the perfect plan for your needs. Schedule a free consultation
                                            with one of our product specialists.
                                        </p>
                                        <div className="pt-2">
                                            <Button variant="outline" className="w-full">
                                                Schedule a Demo
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="w-full py-12 md:py-24">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                        Ready to Transform Your Images?
                                    </h2>
                                    <p className="max-w-[900px] text-muted-foreground md:text-xl">
                                        Join thousands of creators and businesses using PixelMagic to enhance their visual content.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                                    <Button size="lg">Get Started for Free</Button>
                                    <Button size="lg" variant="outline">
                                        View All Features
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </PageLayout>
    )
}

