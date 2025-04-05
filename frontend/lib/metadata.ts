import { Metadata } from "next";

export const siteConfig = {
  name: "PixelMagic",
  url: "https://pixelmagic.ai",
  description:
    "AI-powered image editing tools to remove backgrounds, enhance quality, and generate creative edits in seconds.",
  keywords: [
    "AI image editing",
    "background removal",
    "image enhancement",
    "generative fill",
    "object extraction",
  ],
  authors: [{ name: "PixelMagic Team" }],
  creator: "PixelMagic",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/pixelmagicai",
    github: "https://github.com/pixelmagicai",
  },
};

export type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  canonical?: string;
  noIndex?: boolean;
};

export function constructMetadata({
  title,
  description,
  keywords,
  image,
  canonical,
  noIndex,
}: SeoProps = {}): Metadata {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description: description || siteConfig.description,
    keywords: [...siteConfig.keywords, ...(keywords || [])],
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonical || undefined,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical || siteConfig.url,
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description: description || siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description: description || siteConfig.description,
      images: [image || siteConfig.ogImage],
      creator: siteConfig.links.twitter,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
