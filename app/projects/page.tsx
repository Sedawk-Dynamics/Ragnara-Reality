"use client"

import { PageWrapper } from "@/components/page-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, MapPin, Home, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projectCategories = [
  // {
  //   icon: Home,
  //   title: "Residential Developments",
  //   slug: "residential",
  //   description:
  //     "Modern housing complexes, luxury apartments, and affordable housing designed for comfortable living with world-class amenities.",
  //   image: "/mega-menu-residential.jpg",
  // },
  {
    icon: Building,
    title: "Commercial Buildings",
    slug: "commercial",
    description:
      "Prime commercial properties, retail spaces, and office complexes at strategic high-growth locations.",
    image: "/mega-menu-commercial.jpg",
  },
  {
    icon: MapPin,
    title: "Infrastructure Works",
    slug: "infrastructure",
    description:
      "Large scale infrastructure works, road networks, plotting, and township development projects.",
    image: "/mega-menu-infrastructure.jpg",
  },
]

export default function ProjectsPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/regnara-township.jpg"
            alt="Regnara Realty Projects"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a3d3d]/60 to-[#0a3d3d]/30" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">Our Projects</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of premium residential, commercial, and township developments across prime locations.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6 md:text-5xl">Explore by Category</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From crafting beautiful homes to building state-of-eart commercial spaces and planned townships, we deliver excellence in every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCategories.map((category) => {
              const Icon = category.icon
              return (
                <Link key={category.slug} href={`/projects/${category.slug}`} className="group">
                  <Card className="border-2 hover:border-[#c9a961] transition-all duration-300 overflow-hidden h-full">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="w-12 h-12 rounded-lg bg-[#c9a961] flex items-center justify-center mb-3">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{category.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground leading-relaxed mb-4">{category.description}</p>
                      <div className="flex items-center gap-2 text-[#c9a961] font-semibold group-hover:gap-3 transition-all">
                        <span>View Projects</span>
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

      {/* CTA section */}
      <section className="py-24 bg-[#0a3d3d]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Invest in Your Future</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Interested in one of our upcoming developments or looking for the perfect investment opportunity? Our team is here to guide you.
          </p>
          <Button size="lg" className="bg-[#c9a961] hover:bg-[#b8913e] text-white rounded-full px-8" asChild>
            <Link href="/contact">Contact Our Sales Team</Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  )
}

