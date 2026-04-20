import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

const _playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-serif",
})
const _inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

// Base URL for canonical and OG tags
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://regnararealty.in"

export const metadata: Metadata = {
  title: "Regnara Realty Developers Pvt. Ltd. | Premium Real Estate | Lucknow",
  description:
    "Regnara Realty Developers Pvt. Ltd. — Building premium residential, commercial, and township projects in Lucknow, Uttar Pradesh. Quality construction, timely delivery, trusted relationships.",
  keywords: [
    "real estate developer Lucknow",
    "residential apartments Lucknow",
    "commercial property Lucknow",
    "township development UP",
    "Regnara Realty",
    "property investment Lucknow",
    "joint venture real estate",
    "luxury apartments Lucknow",
    "plots Lucknow",
    "RERA approved projects UP",
    "real estate company Lucknow",
  ],
  generator: "Next.js",
  applicationName: "Regnara Realty",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    title: "Regnara Realty Developers Pvt. Ltd. | Premium Real Estate | Lucknow",
    description: "Building premium residential, commercial, and township projects with quality, trust, and timely delivery.",
    siteName: "Regnara Realty",
    images: [
      {
        url: `${baseUrl}/luxury-residential-apartment-complex.jpg`,
        width: 1200,
        height: 630,
        alt: "Regnara Realty Premium Developments",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regnara Realty Developers Pvt. Ltd. | Premium Real Estate",
    description: "Building premium residential, commercial, and township projects in Lucknow.",
    creator: "@regnararealty",
    images: [`${baseUrl}/luxury-residential-apartment-complex.jpg`],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  category: "business",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": baseUrl,
    name: "Regnara Realty Developers Pvt. Ltd.",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/logo.png`,
      width: 200,
      height: 200,
    },
    description: "Premium real estate developer in Lucknow, Uttar Pradesh building residential, commercial and township projects.",
    sameAs: [
      "https://www.facebook.com/regnararealty",
      "https://www.instagram.com/regnararealty",
      "https://www.linkedin.com/company/regnararealty",
      "https://twitter.com/regnararealty",
      "https://www.youtube.com/@regnararealty",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "B-803, Block B, Neelkanth Dreamz, Vrindavan Colony",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      postalCode: "226029",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        email: "regnararealty@gmail.com",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
    areaServed: "IN",
    priceRange: "$$-$$$",
    knowsAbout: [
      "Residential Apartment Development",
      "Township & Plot Development",
      "Commercial Property Development",
      "Joint Venture Development",
      "Real Estate Investment",
    ],
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${baseUrl}/#localbusiness`,
    name: "Regnara Realty Developers Pvt. Ltd.",
    image: `${baseUrl}/logo.png`,
    description: "Premium real estate developer delivering high-quality residential, commercial and township projects in Lucknow.",
    url: baseUrl,
    email: "regnararealty@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "B-803, Block B, Neelkanth Dreamz, Vrindavan Colony",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      postalCode: "226029",
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 10:00-18:30",
  }

  return (
    <html lang="en" className={`scroll-smooth bg-background ${_inter.variable} ${_playfair.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#c9a44a" />
        <meta name="color-scheme" content="light" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

