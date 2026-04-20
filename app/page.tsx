"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Building2,
  MapPin,
  Shield,
  Clock,
  Star,
  ChevronRight,
  Phone,
  Mail,
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
} from "lucide-react"
import { useState } from "react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

const services = [
  {
    icon: Building2,
    title: "Residential Apartments",
    description:
      "Modern, high-quality residential apartments designed for comfortable and premium living with smart layouts and lifestyle-enhancing amenities.",
    href: "/services/residential-development",
    image: "/regnara-hero-apartments.jpg",
  },
  {
    icon: MapPin,
    title: "Township & Plot Development",
    description:
      "Well-planned township projects and residential plots with proper infrastructure, road connectivity, and strong future appreciation potential.",
    href: "/services/township-development",
    image: "/regnara-township.jpg",
  },
  {
    icon: Building2,
    title: "Commercial Properties",
    description:
      "Commercial spaces, shops, offices, and retail complexes in prime locations ensuring high footfall and strong return on investment.",
    href: "/services/commercial-development",
    image: "/regnara-commercial.jpg",
  },
  {
    icon: Shield,
    title: "Joint Venture (JV)",
    description:
      "We partner with landowners through transparent joint venture models to develop land into profitable real estate projects with mutual growth.",
    href: "/services/joint-venture",
    image: "/regnara-investment.jpg",
  },
  {
    icon: Star,
    title: "Investment Solutions",
    description:
      "Expert guidance for investors to identify high-potential properties and projects, maximizing returns while minimizing risk.",
    href: "/services/investment-solutions",
    image: "/regnara-construction-site.jpg",
  },
  {
    icon: Clock,
    title: "Project Management",
    description:
      "Professional consultancy including project planning, budgeting, legal guidance, and execution strategies for real estate developments.",
    href: "/services/project-management",
    image: "/regnara-about-team.jpg",
  },
]

const whyChooseUs = [
  {
    title: "Superior Construction Quality",
    description:
      "High-quality materials, modern techniques, and strict quality control ensure durable and long-lasting developments.",
  },
  {
    title: "Timely Project Delivery",
    description:
      "We are committed to completing projects within promised timelines, ensuring reliability and customer satisfaction.",
  },
  {
    title: "Transparency & Trust",
    description:
      "Complete transparency in pricing, documentation, and processes, building strong trust with customers and investors.",
  },
  {
    title: "Strategic Locations",
    description:
      "We select locations with high growth potential, ensuring better connectivity and strong future value appreciation.",
  },
  {
    title: "High Investment Potential",
    description:
      "Our projects are planned to deliver excellent returns, making them ideal for both homebuyers and investors.",
  },
  {
    title: "Legal Compliance & Safety",
    description:
      "All projects follow proper legal procedures, RERA compliance, and regulatory approvals ensuring a safe investment.",
  },
]

const testimonials = [
  {
    quote:
      "My experience with Regnara Realty Developers has been excellent. Their team is highly professional, transparent, and committed to delivering quality. From booking to site visit, everything was handled smoothly. I feel confident investing with them.",
    name: "Business Owner",
    company: "Sharma Enterprises",
  },
  {
    quote:
      "Regnara Realty stands out for its modern planning and customer-focused approach. Their project location and future growth potential impressed me the most. I appreciate their honest communication and timely updates.",
    name: "Senior Manager",
    company: "ICICI Bank",
  },
  {
    quote:
      "Investing with Regnara Realty Developers has been a great decision. Their team guided me properly and provided clear information at every step. I see strong value appreciation in the future.",
    name: "Director",
    company: "Singh Infrastructure Pvt. Ltd.",
  },
]

const stats = [
  { value: "100+", label: "Happy Families" },
  { value: "10+", label: "Projects Delivered" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "RERA Compliant" },
]

const megaMenuContent = {
  about: {
    title: "Our Story",
    description:
      "Regnara Realty Developers Pvt. Ltd. is committed to delivering high-quality real estate projects built on trust, transparency, and innovation.",
    cta: { label: "Our Story", href: "/about/mission-vision" },
    sections: [
      {
        title: "Mission & Vision",
        description: "Creating Landmarks. Shaping the Future.",
        image: "/regnara-mission.jpg",
        href: "/about/mission-vision",
      },
      {
        title: "Leadership",
        description: "Our experienced team drives quality and timely delivery.",
        image: "/regnara-about-team.jpg",
        href: "/about/leadership",
      },
      {
        title: "Why Regnara",
        description: "Quality, trust, and a customer-first approach.",
        image: "/regnara-hero-apartments.jpg",
        href: "/about/why-regnara",
      },
    ],
  },
  projects: {
    title: "Our Projects",
    description: "Premium apartments, townships, and commercial spaces across Lucknow.",
    cta: { label: "View All Projects", href: "/projects/residential" },
    sections: [
      {
        title: "Residential",
        description: "Modern high-rise apartment complexes.",
        image: "/regnara-hero-apartments.jpg",
        href: "/projects/residential",
      },
      {
        title: "Township & Plots",
        description: "Planned townships with full infrastructure.",
        image: "/regnara-township.jpg",
        href: "/projects/townships",
      },
      {
        title: "Commercial",
        description: "Prime commercial and retail spaces.",
        image: "/regnara-commercial.jpg",
        href: "/projects/commercial",
      },
    ],
  },
  services: {
    title: "Our Services",
    description: "End-to-end real estate development and investment solutions.",
    cta: { label: "All Services", href: "/services" },
    sections: [
      {
        title: "Apartment Development",
        description: "Premium residential apartments.",
        image: "/regnara-hero-apartments.jpg",
        href: "/services/residential-development",
      },
      {
        title: "Township Development",
        description: "Planned townships and plots.",
        image: "/regnara-plots.jpg",
        href: "/services/township-development",
      },
      {
        title: "Joint Venture",
        description: "Transparent JV partnerships.",
        image: "/regnara-investment.jpg",
        href: "/services/joint-venture",
      },
    ],
  },
  contact: {
    title: "Get in Touch",
    description: "Ready to invest or find your dream home? Reach out today.",
    cta: { label: "Contact Us", href: "/contact" },
    sections: [
      {
        title: "Property Inquiry",
        description: "Units, pricing and payment plans.",
        image: "/regnara-apartment-interior.jpg",
        href: "/contact",
      },
      {
        title: "Visit Our Office",
        description: "Vrindavan Colony, Lucknow.",
        image: "/regnara-office.jpg",
        href: "/contact",
      },
      {
        title: "Investor Relations",
        description: "JV and investment opportunities.",
        image: "/regnara-investment.jpg",
        href: "/contact",
      },
    ],
  },
}

export default function Home() {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* ── NAVBAR ── */}
      <Navbar />

      {/* ── HERO ── */}
      <section id="hero" className="relative min-h-screen flex items-end pb-20 pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/regnara-hero-apartments.jpg"
            alt="Premium Regnara Realty developments"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2137]/85 via-[#0d2137]/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <p className="text-[#c9a44a] text-sm font-semibold uppercase tracking-widest mb-4">
              Regnara Realty Developers Pvt. Ltd.
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 text-balance leading-tight">
              Creating Landmarks. Shaping the Future.
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
              We build premium residential, commercial, and township projects across India — delivering quality,
              trust, and timely delivery in every development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-[#c9a44a] hover:bg-[#b8913e] text-white rounded-full px-8 py-6 text-base font-semibold">
                <Link href="/projects/residential">Explore Projects</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/50 text-white hover:bg-white hover:text-[#0d2137] rounded-full px-8 py-6 text-base font-semibold bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
            {stats.map((stat) => (
              <div key={stat.label} className="text-white">
                <p className="text-3xl md:text-4xl font-serif font-bold text-[#c9a44a]">{stat.value}</p>
                <p className="text-white/70 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TAGLINE STRIP ── */}
      <div className="bg-[#c9a44a] py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-[#0d2137]">
            {["Integrity", "Quality Excellence", "Timely Delivery", "Customer First", "Innovation"].map((val) => (
              <span key={val} className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0d2137]" />
                {val}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT SECTION ── */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/regnara-about-team.jpg"
                  alt="Regnara Realty team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#c9a44a] rounded-2xl p-8 shadow-xl hidden md:block">
                <p className="text-[#0d2137] font-serif font-bold text-4xl">5+</p>
                <p className="text-[#0d2137] font-semibold text-sm mt-1">Years of Excellence</p>
              </div>
            </div>
            <div>
              <p className="text-[#c9a44a] text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0d2137] mb-6 text-balance leading-tight">
                Strong Foundations, Brighter Futures
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Regnara Realty Developers Pvt. Ltd. is a dynamic and forward-looking real estate development company
                committed to delivering high-quality residential, commercial, and township projects across India. With
                a strong foundation built on trust, transparency, and innovation, the company aims to redefine modern
                urban living.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                At Regnara Realty, we focus on creating thoughtfully designed spaces that combine functionality,
                aesthetics, and long-term value. We believe that real estate is not just about buildings — it is about
                creating communities, enhancing lifestyles, and building lasting relationships.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Quality Construction",
                  "Timely Delivery",
                  "RERA Compliant Projects",
                  "Transparent Pricing",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#c9a44a] flex-shrink-0" />
                    <span className="text-sm text-[#0d2137] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="bg-[#0d2137] hover:bg-[#0d2137]/90 text-white rounded-full px-8">
                <Link href="/about/mission-vision" className="inline-flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS SECTION ── */}
      <section id="projects" className="py-24 bg-[#0d2137]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-[#c9a44a] text-sm font-semibold uppercase tracking-widest mb-3">Our Portfolio</p>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white text-balance leading-tight">
                Landmark Projects
              </h2>
            </div>
            <Button asChild variant="outline" className="border-[#c9a44a] text-[#c9a44a] hover:bg-[#c9a44a] hover:text-[#0d2137] rounded-full bg-transparent">
              <Link href="/projects/residential" className="inline-flex items-center gap-2">
                View All Projects <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Residential Apartments",
                subtitle: "Lucknow, Uttar Pradesh",
                image: "/regnara-hero-apartments.jpg",
                tag: "Residential",
                href: "/projects/residential",
              },
              {
                title: "Township Development",
                subtitle: "Lucknow Region, UP",
                image: "/regnara-township.jpg",
                tag: "Township",
                href: "/projects/townships",
              },
              {
                title: "Commercial Complex",
                subtitle: "Prime Location, Lucknow",
                image: "/regnara-commercial.jpg",
                tag: "Commercial",
                href: "/projects/commercial",
              },
            ].map((project) => (
              <Link key={project.title} href={project.href} className="group">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d2137]/90 via-[#0d2137]/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#c9a44a] text-[#0d2137] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {project.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-serif font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-white/70 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ── */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a44a] text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0d2137] mb-4 text-balance">
              Comprehensive Real Estate Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From residential apartments and township projects to commercial developments and joint ventures — we
              deliver end-to-end real estate solutions with quality and transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link key={service.title} href={service.href} className="group">
                  <div className="relative h-52 rounded-t-xl overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#0d2137]/40 group-hover:bg-[#0d2137]/25 transition-colors" />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-[#c9a44a] rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#0d2137]" />
                    </div>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-b-xl p-6 group-hover:border-[#c9a44a]/30 transition-colors shadow-sm">
                    <h3 className="text-lg font-semibold text-[#0d2137] mb-2 group-hover:text-[#c9a44a] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    <span className="inline-flex items-center gap-1 text-[#c9a44a] text-sm font-medium mt-4">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-[#faf7f2]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c9a44a] text-sm font-semibold uppercase tracking-widest mb-3">Why Choose Us</p>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0d2137] mb-6 text-balance leading-tight">
                Quality &bull; Trust &bull; Timely Delivery
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                We distinguish ourselves through superior construction quality, strategic location selection, complete
                transparency, and a customer-centric approach that extends from booking to possession and beyond.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#c9a44a]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-[#c9a44a]" />
                    </div>
                    <div>
                      <h3 className="text-[#0d2137] font-semibold text-sm mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[550px] rounded-2xl overflow-hidden">
                <Image
                  src="/regnara-apartment-interior.jpg"
                  alt="Premium Regnara Realty apartment interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 bg-[#0d2137] rounded-xl p-6 shadow-xl hidden md:flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-[#c9a44a] flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#0d2137]" />
                </div>
                <div className="text-white">
                  <p className="font-bold text-sm">RERA Registered</p>
                  <p className="text-white/60 text-xs">All Projects Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER MESSAGE ── */}
      <section className="py-24 bg-[#0d2137]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-[480px] rounded-2xl overflow-hidden">
                <Image
                  src="/regnara-founder.jpg"
                  alt="Founder & CEO, Regnara Realty Developers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#c9a44a] rounded-xl p-5 shadow-xl hidden md:block">
                <p className="text-[#0d2137] font-serif font-bold text-2xl leading-none">10+</p>
                <p className="text-[#0d2137] text-xs font-semibold mt-1">Projects Delivered</p>
              </div>
            </div>
            <div>
              <p className="text-[#c9a44a] text-sm font-semibold uppercase tracking-widest mb-3">
                Message from the Founder
              </p>
              <h2 className="text-4xl font-serif font-bold text-white mb-6 text-balance leading-tight">
                Building Trust, Delivering Excellence
              </h2>
              <div className="w-12 h-1 bg-[#c9a44a] mb-6" />
              <p className="text-white/70 leading-relaxed mb-6">
                &ldquo;Our journey is driven by a clear vision — to create spaces that are not just structures, but symbols
                of trust, quality, and modern living. We believe that real estate is more than construction; it is
                about shaping communities, fulfilling aspirations, and building long-term relationships.&rdquo;
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                &ldquo;At Regnara Realty, we are committed to delivering excellence in every project we undertake. Through
                transparency, innovation, and a customer-first approach, we aim to set new benchmarks in the real
                estate industry.&rdquo;
              </p>
              <div>
                <p className="text-white font-semibold font-serif text-lg">Founder &amp; CEO</p>
                <p className="text-[#c9a44a] text-sm">Regnara Realty Developers Pvt. Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <Image src="/regnara-testimonials-bg.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="text-[#c9a44a] text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0d2137] text-balance">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-[#c9a44a] text-[#c9a44a]" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#c9a44a]/15 flex items-center justify-center">
                    <span className="text-[#c9a44a] font-bold text-sm">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0d2137] text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="py-20 bg-[#c9a44a]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#0d2137] mb-2 text-balance">
                Ready to Find Your Dream Property?
              </h2>
              <p className="text-[#0d2137]/70 leading-relaxed">
                Get in touch with our team for a free consultation, site visit, and detailed pricing.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-[#0d2137] hover:bg-[#0d2137]/90 text-white rounded-full px-8 py-6 text-base font-semibold">
                <Link href="/contact" className="inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Contact Us
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#0d2137] text-[#0d2137] hover:bg-[#0d2137] hover:text-white rounded-full px-8 py-6 text-base font-semibold bg-transparent"
              >
                <Link href="mailto:regnararealty@gmail.com" className="inline-flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Send Email
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

