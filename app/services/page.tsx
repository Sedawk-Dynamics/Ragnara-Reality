"use client"

import { PageWrapper } from "@/components/page-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Building2,
  MapPin,
  Handshake,
  TrendingUp,
  ClipboardList,
  Home,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { SiteImage } from "@/components/site-image"

const services = [
  {
    icon: Home,
    title: "Residential Apartment Development",
    slug: "residential-development",
    description:
      "Modern 2 BHK, 3 BHK, and 4 BHK apartments designed for premium living with world-class amenities, smart layouts, and high-quality construction.",
    image: "/regnara-hero-apartments.jpg",
  },
  {
    icon: MapPin,
    title: "Township & Plot Development",
    slug: "township-development",
    description:
      "Planned township developments and residential plots with proper road connectivity, infrastructure, green spaces, and strong appreciation potential.",
    image: "/regnara-township.jpg",
  },
  {
    icon: Building2,
    title: "Commercial Property Development",
    slug: "commercial-development",
    description:
      "Prime commercial properties, retail shops, showrooms, and office complexes at strategic high-growth locations ensuring high footfall and strong ROI.",
    image: "/regnara-commercial.jpg",
  },
  {
    icon: Handshake,
    title: "Joint Venture (JV) Development",
    slug: "joint-venture",
    description:
      "We partner with landowners through transparent, mutually beneficial JV models to develop profitable residential and commercial real estate projects.",
    image: "/regnara-investment.jpg",
  },
  {
    icon: TrendingUp,
    title: "Real Estate Investment Solutions",
    slug: "investment-solutions",
    description:
      "Expert guidance to help investors identify high-potential properties, understand market trends, and maximize returns on their real estate investments.",
    image: "/regnara-construction-site.jpg",
  },
  {
    icon: ClipboardList,
    title: "Project Management & Consultancy",
    slug: "project-management",
    description:
      "Professional consultancy covering project planning, budgeting, legal guidance, approvals, and end-to-end execution to ensure smooth delivery.",
    image: "/regnara-about-team.jpg",
  },
]

export default function ServicesPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SiteImage
            src="/regnara-hero-apartments.jpg"
            alt="Regnara Realty Services"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a3d3d]/60 to-[#0a3d3d]/30" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">Our Services</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            End-to-end real estate development, investment, and consultancy services built on quality, transparency, and trust
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6 md:text-5xl">Complete Real Estate Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Regnara Realty Developers Pvt. Ltd. offers a comprehensive range of real estate services — from premium
              residential apartments to township developments, commercial spaces, and investment opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                  <Card className="border-2 hover:border-[#c9a961] transition-all duration-300 overflow-hidden h-full">
                    <div className="relative h-64 overflow-hidden">
                      <SiteImage
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="w-12 h-12 rounded-lg bg-[#c9a961] flex items-center justify-center mb-3">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                      <div className="flex items-center gap-2 text-[#c9a961] font-semibold group-hover:gap-3 transition-all">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Regnara CTA */}
      <section className="py-24 bg-[#0a3d3d]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
                Strong Foundations, Brighter Futures
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Every service we offer is backed by years of expertise, a commitment to quality construction, and a
                customer-first approach. Whether you&apos;re buying your first home, investing in a property, or
                developing land — Regnara Realty is your trusted partner.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="bg-[#c9a961] hover:bg-[#b8913e] text-white rounded-full" asChild>
                  <Link href="/contact">Book a Free Consultation</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#0a3d3d] rounded-full"
                  asChild
                >
                  <Link href="/about/why-regnara">Why Choose Us</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "500+", label: "Happy Families" },
                { value: "10+", label: "Projects Delivered" },
                { value: "100%", label: "RERA Compliant" },
                { value: "Lucknow", label: "Prime Locations" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/10 border border-white/20 rounded-xl p-6 text-center backdrop-blur"
                >
                  <div className="text-3xl font-bold text-[#c9a961] mb-2">{stat.value}</div>
                  <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

