import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "MK Buchung | Professionelle Terminbuchung für Salons in Deutschland",
  description:
    "Professionelle Terminbuchungssoftware für Friseursalons in Deutschland. Optimieren Sie Ihre Terminplanung, reduzieren Sie No-Shows und steigern Sie Ihren Umsatz mit unserer intelligenten Buchungsplattform.",
  metadataBase: new URL("https://mkbuchung.de"),
  alternates: {
    canonical: "https://mkbuchung.de",
    languages: {
      'de-DE': 'https://mkbuchung.de'
    }
  },
  keywords: "Terminbuchung, Friseursalon Software, Online Terminvergabe, Salon Management, Friseur Terminkalender, Digitale Terminbuchung, Friseursalon App",
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
    title: "MK Buchung | Die führende Terminbuchungssoftware für Salons",
    description:
      "Revolutionieren Sie Ihre Salonverwaltung mit MK Buchung. Intelligente Terminplanung, automatische Erinnerungen und professionelles Kundenmanagement für Ihren Salon.",
    url: "https://mkbuchung.de",
    siteName: "MK Buchung",
    images: [
      {
        url: "https://mkbuchung.de/images/og-image-new.png",
        width: 1200,
        height: 630,
        alt: "MK Buchung - Innovative Terminbuchung für Salons",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MK Buchung | Smarte Terminbuchung für moderne Salons",
    description:
      "Entdecken Sie die fortschrittlichste Terminbuchungslösung für Ihren Salon. Effizient, kundenfreundlich und perfekt für den deutschen Markt optimiert.",
    images: ["https://mkbuchung.de/images/og-image-new.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'