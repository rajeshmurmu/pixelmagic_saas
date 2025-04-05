import type { Metadata } from "next"
import Tools from "./tools"
import { constructMetadata } from "@/lib/metadata"
// import { ToolsLayout } from "./tools-layout"
import { PageLayout as HomePageLayout } from "@/components/page-layout"

export const metadata: Metadata = constructMetadata({
  title: "AI Image Editing Tools",
  description: "Explore our suite of AI-powered tools designed to transform your images with just a few clicks.",
  keywords: ["AI tools", "image editing tools", "background removal", "image enhancement"],
  canonical: "/tools",
})
export default function ToolsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Background Remover",
        description: "Remove backgrounds from images with a single click",
        url: "https://pixelmagic.ai/tools/background-remover",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Generative Fill",
        description: "Expand your images or fill in missing areas with AI-generated content",
        url: "https://pixelmagic.ai/tools/generative-fill",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Image Enhancer",
        description: "Improve image quality, fix lighting, and enhance details automatically",
        url: "https://pixelmagic.ai/tools/image-enhancer",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Generative Extract",
        description: "Extract and isolate objects from images with precision",
        url: "https://pixelmagic.ai/tools/generative-extract",
      },
    ],
  }
  return (
    <>
      <HomePageLayout structuredData={structuredData}>
        <Tools />
      </HomePageLayout>
    </>
  )
}