import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, MapPin, Trees, Route, Building } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SiteImage } from "@/components/site-image"

export default function TownshipDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-28">
        <div className="absolute inset-0 z-0">
          <SiteImage
            src="/regnara-township.jpg"
            alt="Township & Plot Development"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d3d]/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="page-eyebrow mb-3">Our Services</p>
            <h1 className="page-title-inverse mb-6 text-balance">
              Township & Plot Development
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Well-planned township developments and residential plots with proper infrastructure and strong appreciation potential
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title mb-6">Planned Communities for a Better Life</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Regnara Realty develops thoughtfully planned township projects and residential plot schemes in
                  Lucknow&apos;s high-growth corridors. Our townships are designed as complete self-sustaining
                  communities with excellent connectivity and infrastructure.
                </p>
                <p>
                  Each plot and township project comes with clear titles, RERA registration, proper road connectivity,
                  drainage, and essential utilities — making it a secure and appreciating investment.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  "Clearly demarcated residential and commercial plots",
                  "Wide internal roads with street lighting",
                  "Underground drainage and utility lines",
                  "Green parks and open spaces",
                  "RERA registered with clear title",
                  "Strong appreciation in high-growth locations",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#c9a961] flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <SiteImage src="/regnara-plots.jpg" alt="Regnara Township Development" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="section-title mb-12 text-center">Township Infrastructure</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Route, title: "Road Connectivity", desc: "Wide roads with proper surfacing and street lighting throughout the township" },
              { icon: MapPin, title: "Prime Locations", desc: "High-growth corridors in Lucknow with excellent connectivity to city centres" },
              { icon: Trees, title: "Green Spaces", desc: "Parks, walking tracks, and landscaped open spaces for healthy community living" },
              { icon: Building, title: "Essential Amenities", desc: "Schools, hospitals, markets, and commercial zones within close proximity" },
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
          <h2 className="text-4xl font-bold mb-4">Invest in a Plot or Township Project Today</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Secure your land investment in Lucknow&apos;s high-growth zones. Contact us for site visits and pricing.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-[#c9a961] hover:bg-[#b8913e] text-white rounded-full" asChild>
              <Link href="/contact">Enquire Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0a3d3d] rounded-full" asChild>
              <Link href="/projects/infrastructure">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

