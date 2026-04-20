"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"
import { useState } from "react"
import { SiteImage } from "@/components/site-image"
import Image from "next/image"

const megaMenuContent = {
  about: {
    title: "Our Story",
    description:
      "Regnara Realty Developers Pvt. Ltd. is committed to delivering high-quality residential, commercial, and township projects across India — built on trust, transparency, and innovation.",
    cta: {
      label: "Discover Our Story",
      href: "/about/mission-vision",
    },
    sections: [
      {
        title: "Mission & Vision",
        description:
          "Creating Landmarks. Shaping the Future. Our mission is to deliver high-quality real estate that creates long-term value for customers and investors.",
        image: "/regnara-mission.jpg",
        href: "/about/mission-vision",
      },
      {
        title: "Leadership Team",
        description:
          "Our experienced leadership team drives every project with clarity, professionalism, and a relentless focus on quality and timely delivery.",
        image: "/regnara-about-team.jpg",
        href: "/about/leadership",
      },
      {
        title: "Why Regnara",
        description:
          "Quality construction, transparency, prime locations, and a customer-first approach — the reasons thousands trust Regnara Realty.",
        image: "/regnara-hero-apartments.jpg",
        href: "/about/why-regnara",
      },
    ],
  },
  projects: {
    title: "Our Projects",
    description:
      "From premium apartments and plotted townships to commercial complexes — explore our portfolio of landmark developments across Lucknow and beyond.",
    cta: {
      label: "View All Projects",
      href: "/projects/residential",
    },
    sections: [
      // {
      //   title: "Residential Apartments",
      //   description:
      //     "Modern high-rise and mid-rise apartment complexes designed for premium living with world-class amenities.",
      //   image: "/regnara-hero-apartments.jpg",
      //   href: "/projects/residential",
      // },
      {
        title: "Township & Plots",
        description:
          "Well-planned township developments and residential plots with proper infrastructure and strong appreciation potential.",
        image: "/regnara-township.jpg",
        href: "/projects/infrastructure",
      },
      {
        title: "Commercial Spaces",
        description:
          "Prime commercial properties, retail shops, and office complexes at strategic high-growth locations.",
        image: "/regnara-commercial.jpg",
        href: "/projects/commercial",
      },
    ],
  },
  services: {
    title: "Our Services",
    description:
      "End-to-end real estate development, investment solutions, and project management services delivered with professionalism and transparency.",
    cta: {
      label: "Explore All Services",
      href: "/services",
    },
    sections: [
      {
        title: "Apartment Development",
        description: "Modern residential apartments with quality construction, smart layouts, and lifestyle amenities.",
        image: "/regnara-hero-apartments.jpg",
        href: "/services/residential-development",
      },
      {
        title: "Township & Plot Development",
        description:
          "Planned township projects with road connectivity, infrastructure, and high growth potential.",
        image: "/regnara-plots.jpg",
        href: "/services/township-development",
      },
      {
        title: "Commercial Development",
        description:
          "Shops, offices, and retail complexes in prime locations ensuring high footfall and strong ROI.",
        image: "/regnara-commercial.jpg",
        href: "/services/commercial-development",
      },
      {
        title: "Joint Venture (JV)",
        description:
          "We partner with landowners through transparent JV models to develop profitable real estate projects.",
        image: "/regnara-investment.jpg",
        href: "/services/joint-venture",
      },
      {
        title: "Investment Solutions",
        description:
          "Expert guidance to help investors identify high-potential properties and maximize returns.",
        image: "/regnara-construction-site.jpg",
        href: "/services/investment-solutions",
      },
      {
        title: "Project Management",
        description:
          "Professional consultancy covering project planning, budgeting, legal guidance, and execution.",
        image: "/regnara-about-team.jpg",
        href: "/services/project-management",
      },
    ],
  },
  contact: {
    title: "Get in Touch",
    description:
      "Ready to invest or find your dream home? Reach out to our team for a consultation, site visit, or property inquiry.",
    cta: {
      label: "Contact Us Today",
      href: "/contact",
    },
    sections: [
      {
        title: "Property Inquiry",
        description: "Enquire about available units, pricing, floor plans, and payment plans.",
        image: "/regnara-apartment-interior.jpg",
        href: "/contact",
      },
      {
        title: "Visit Our Office",
        description:
          "Vrindavan Colony, Lucknow. Visit us Mon–Sat, 10 AM – 6:30 PM for project discussions.",
        image: "/regnara-office.jpg",
        href: "/contact",
      },
      {
        title: "Investor Relations",
        description:
          "Explore joint venture opportunities, investment options, and high-return real estate projects.",
        image: "/regnara-investment.jpg",
        href: "/contact",
      },
    ],
  },
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)

  return (
    <div
      onMouseLeave={() => {
        setActiveMegaMenu(null)
      }}
    >
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/logo1.png"
                  alt="Regnara Realty Developers"
                  width={80}
                  height={80}
                  className="h-16 w-auto"
                />
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-1">
              {[
                { id: "about", label: "About", href: "/about/mission-vision" },
                { id: "projects", label: "Projects", href: "/projects" },
                { id: "services", label: "Services", href: "/services" },
                { id: "contact", label: "Contact", href: "/contact" }
              ].map((item) => (
                <div key={item.id} className="relative" onMouseEnter={() => setActiveMegaMenu(item.id)}>
                  <Link
                    href={item.href}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium uppercase tracking-wide transition-all duration-200 ${activeMegaMenu === item.id
                      ? "bg-[#c9a44a] text-white"
                      : "text-[#0d2137] hover:bg-[#c9a44a]/10 hover:text-[#0d2137]"
                      }`}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <Button asChild className="ml-4 bg-[#c9a44a] hover:bg-[#b8913e] text-white rounded-full px-6">
                <Link href="/contact">Book a Site Visit</Link>
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <button
                className="text-[#0d2137] hover:text-[#c9a44a] transition-colors lg:hidden"
                aria-label="Menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 fixed top-24 left-0 right-0 z-40 shadow-lg">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {[
              { label: "About", href: "/about/mission-vision" },
              { label: "Projects", href: "/projects/residential" },
              { label: "Services", href: "/services" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#0d2137] uppercase tracking-wide hover:text-[#c9a44a] transition-colors py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 text-center bg-[#c9a44a] text-white rounded-full py-3 text-sm font-semibold uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Site Visit
            </Link>
          </div>
        </div>
      )}

      {activeMegaMenu && (
        <div className="fixed inset-0 z-40 pt-24 bg-white animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto">
          <button
            onClick={() => setActiveMegaMenu(null)}
            className="fixed top-28 right-8 w-10 h-10 rounded-full bg-[#c9a44a] hover:bg-[#0d2137] text-white flex items-center justify-center transition-colors shadow-lg z-50"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="container mx-auto px-4 lg:px-8 py-16">
            <div className="grid lg:grid-cols-4 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-4xl font-serif font-bold text-[#0d2137] mb-6 text-balance leading-tight">
                  {megaMenuContent[activeMegaMenu as keyof typeof megaMenuContent].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                  {megaMenuContent[activeMegaMenu as keyof typeof megaMenuContent].description}
                </p>
                <Button
                  asChild
                  className="inline-flex items-center gap-2 bg-[#c9a44a] hover:bg-[#b8913e] text-white rounded-full"
                  onClick={() => setActiveMegaMenu(null)}
                >
                  <Link href={megaMenuContent[activeMegaMenu as keyof typeof megaMenuContent].cta.href}>
                    <span>{megaMenuContent[activeMegaMenu as keyof typeof megaMenuContent].cta.label}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {megaMenuContent[activeMegaMenu as keyof typeof megaMenuContent].sections.map((section, idx) => (
                  <Link key={idx} href={section.href} className="group" onClick={() => setActiveMegaMenu(null)}>
                    <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                      <Image
                        src={section.image || "/placeholder.svg"}
                        alt={section.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-[#0d2137]/20 group-hover:bg-[#0d2137]/10 transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#0d2137] mb-2 group-hover:text-[#c9a44a] transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{section.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
