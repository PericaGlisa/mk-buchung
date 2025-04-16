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
  title: "MK Buchung | Professionelle Terminbuchung für Salons",
  description:
    "Intelligente Terminbuchung für Ihren Salon. Vereinfachen Sie Ihren Alltag mit besserer Organisation und Struktur.",
  metadataBase: new URL("https://mkbuchung.de"),
  openGraph: {
    title: "MK Buchung | Professionelle Terminbuchung für Salons",
    description:
      "Intelligente Terminbuchung für Ihren Salon. Vereinfachen Sie Ihren Alltag mit besserer Organisation und Struktur.",
    url: "https://mkbuchung.de",
    siteName: "MK Buchung",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "MK Buchung - Terminbuchung für Salons",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MK Buchung | Professionelle Terminbuchung für Salons",
    description:
      "Intelligente Terminbuchung für Ihren Salon. Vereinfachen Sie Ihren Alltag mit besserer Organisation und Struktur.",
    images: ["/images/og-image.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/favicon.svg" }],
  },
  generator: 'MK Buchung'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans bg-black text-white`} suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'