import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Trinetra Techverse | Orbit Media - AI Digital Marketing Agency",
  description:
    "One Stop Digital Marketing Service powered by AI. WhatsApp Marketing, Social Media, SEO, Influencer Marketing and more.",
  generator: "Trinetra Techverse",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
