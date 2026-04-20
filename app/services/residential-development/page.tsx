import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Home, ShieldCheck, Layers, Wifi } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SiteImage } from "@/components/site-image"

export default function ResidentialDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-28">
        <div className="absolute inset-0 z-0">
          <SiteImage
            src="/regnara-hero-apartments.jpg"
            alt="Residential Apartment Development"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d3d]/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="page-eyebrow mb-3">Our Services</p>
            <h1 className="page-title-inverse mb-6 text-balance">
              Residential Apartment Development
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Modern 2 BHK, 3 BHK, and 4 BHK apartments designed for premium living with world-class amenities
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title mb-6">Creating Dream Homes in Lucknow</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Regnara Realty Developers, we specialize in creating residential apartments that combine comfort,
                  functionality, and modern aesthetics. Our projects are thoughtfully designed for families seeking a
                  premium lifestyle in Lucknow&apos;s most sought-after locations.
                </p>
                <p>
                  From smart floor plans and high-quality finishes to world-class amenities and green landscaping —
                  every Regnara apartment is built to enhance quality of life and deliver lasting value.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  "2 BHK, 3 BHK & 4 BHK configurations",
                  "Premium finishes with branded fittings",
                  "24/7 security and CCTV surveillance",
                  "Clubhouse, gym, and landscaped gardens",
                  "Ample car parking with designated spaces",
                  "100% RERA registered projects",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#c9a961] flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <SiteImage src="/regnara-hero-apartments.jpg" alt="Regnara Residential Apartments" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="section-title mb-12 text-center">World-Class Amenities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Home, title: "Smart Homes", desc: "Modular kitchens, premium flooring, and modern interiors" },
              { icon: ShieldCheck, title: "Gated Security", desc: "24/7 security, CCTV, and intercom systems" },
              { icon: Layers, title: "Common Areas", desc: "Clubhouse, gym, children&apos;s play area, and garden" },
              { icon: Wifi, title: "Modern Infrastructure", desc: "High-speed internet, power backup, and water supply" },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-[#c9a961]/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#c9a961]" />
                    </div>
                    <h3 className="card-title mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-center text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Book Your Dream Apartment?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Explore our ongoing residential projects in Lucknow and book a site visit today.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-[#c9a961] hover:bg-[#b8913e] text-white rounded-full" asChild>
              <Link href="/contact">Book a Site Visit</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0a3d3d] rounded-full" asChild>
              <Link href="/projects/residential">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}


