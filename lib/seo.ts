import { Metadata } from "next"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://regnararealty.com"

interface GenerateMetadataProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  pathname: string
  ogType?: "website" | "article" | "business.business"
  author?: string
}

export function generateMetadataHelper({
  title,
  description,
  keywords = [],
  image = "/og-image.jpg",
  pathname,
  ogType = "website",
  author,
}: GenerateMetadataProps): Metadata {
  const url = `${baseUrl}${pathname}`
  const fullTitle = `${title} | Regnara Infra`

  return {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      "construction",
      "infrastructure",
      "real estate",
      "Dehradun",
      "building",
    ],
    canonical: url,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: ogType,
      locale: "en_US",
      url,
      title: fullTitle,
      description,
      siteName: "Regnara Infra",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
    authors: author ? [{ name: author }] : undefined,
  }
}

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Regnara Infra",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      "Trusted construction and infrastructure development company",
    address: {
      "@type": "PostalAddress",
      streetAddress: "L-90 Maruti Vihar, Raipur",
      addressLocality: "Dehradun",
      addressRegion: "Uttarakhand",
      postalCode: "248008",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        telephone: "+91-9855665557",
        email: "info@regnararealty.com",
      },
      {
        "@type": "ContactPoint",
        contactType: "Regional Office",
        telephone: "+91-9855665557",
        email: "uk@regnararealty.com",
      },
    ],
    sameAs: [
      "https://www.facebook.com/regnararealty",
      "https://www.linkedin.com/company/regnararealty",
      "https://www.instagram.com/regnararealty",
    ],
    areaServed: "IN",
    serviceType: [
      "Construction Services",
      "Real Estate Development",
      "Infrastructure Development",
    ],
  }
}

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Regnara Infra",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Regnara Infra",
    image: `${baseUrl}/logo.png`,
    description:
      "Professional construction and infrastructure development company",
    address: {
      "@type": "PostalAddress",
      streetAddress: "L-90 Maruti Vihar, Raipur",
      addressLocality: "Dehradun",
      addressRegion: "Uttarakhand",
      postalCode: "248008",
      addressCountry: "IN",
    },
    telephone: "+91-9855665557",
    email: "info@regnararealty.com",
    url: baseUrl,
    priceRange: "₹₹₹",
    areaServed: ["Uttarakhand", "India"],
  }
}
