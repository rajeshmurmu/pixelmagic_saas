import './globals.css';
import type { Metadata } from 'next';
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from 'sonner';



// Note: The following metadata is for SEO and can be customized as needed.
// You can add more metadata properties like keywords, author, etc.
const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: 'ImageAI - AI-Powered Image Manipulation Tools',
  description: 'Professional AI-powered image manipulation tools for background removal, generative fill, image enhancement, and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}