import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Trinetra Techverse | Orbit Media - AI Digital Marketing Agency",
  description:
    "Leading AI-driven digital marketing agency offering political campaigning, website development, SEO, social media marketing, WhatsApp marketing, and comprehensive digital solutions. Transform your business with data-driven strategies.",
  keywords:
    "digital marketing agency,trinetra, tech, verse, orbit, media, trinetratechverse, trinetra techverse, AI marketing, political campaigning, website development, web design, SEO services, social media marketing, WhatsApp marketing, influencer marketing, video marketing, PPC advertising, corporate branding, Trinetra Techverse, Orbit Media, Mumbai digital marketing, gauriganj, amethi, website",
  authors: [{ name: "Trinetra Techverse" }],
  creator: "Trinetra Techverse",
  publisher: "Orbit Media",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://trinetra-techverse.com",
    siteName: "Trinetra Techverse - Orbit Media",
    title: "Trinetra Techverse | AI-Driven Digital Marketing Solutions",
    description:
      "Transform your business with AI-powered digital marketing, political campaigning, and website development services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trinetra Techverse - Orbit Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trinetra Techverse | AI Digital Marketing Agency",
    description: "Leading AI-driven digital marketing solutions for businesses and political campaigns.",
    images: ["/twitter-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  )
}
