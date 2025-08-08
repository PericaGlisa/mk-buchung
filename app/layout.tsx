import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import deMessages from "@/messages/de.json"
import enMessages from "@/messages/en.json"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export async function generateMetadata(): Promise<Metadata> {
  // Default to German for server-side rendering
  const messages = deMessages
  
  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
    metadataBase: new URL("https://mkbuchung.de"),
    alternates: {
      canonical: "https://mkbuchung.de",
      languages: {
        'de-DE': 'https://mkbuchung.de',
        'en': 'https://mkbuchung.de?lang=en'
      }
    },
    keywords: messages.metadata.keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: messages.metadata.openGraph.title,
      description: messages.metadata.openGraph.description,
      url: "https://mkbuchung.de",
      siteName: "MK Buchung",
      images: [
        {
          url: "https://mkbuchung.de/images/og-image-final.png",
          width: 1200,
          height: 630,
          alt: messages.metadata.openGraph.imageAlt,
        },
      ],
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: messages.metadata.twitter.title,
      description: messages.metadata.twitter.description,
      images: ["https://mkbuchung.de/images/og-image-final.png"],
      site: "@mkbuchung",
      creator: "@mkbuchung"
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico" },
      ],
      apple: [{ url: "/favicon.svg" }],
    },
    generator: 'MK Buchung',
    authors: [{ name: 'MK Dienstleistung' }],
    applicationName: 'MK Buchung',
    referrer: 'origin-when-cross-origin',
    creator: 'MK Dienstleistung',
    publisher: 'MK Dienstleistung'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="alternate" hrefLang="de-DE" href="https://mkbuchung.de" />
        <link rel="canonical" href="https://mkbuchung.de" />
        <script type="application/ld+json" src="/structured-data.json" />
        <meta name="geo.region" content="DE" />
        <meta name="geo.placename" content="Frankfurt" />
        <meta name="geo.position" content="50.1109;8.6821" />
        <meta name="ICBM" content="50.1109, 8.6821" />
      </head>
      <body className={`${spaceGrotesk.variable} font-sans bg-black text-white`} suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'