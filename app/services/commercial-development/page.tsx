import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Store, TrendingUp, Building2, Users } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SiteImage } from "@/components/site-image"

export default function CommercialDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-28">
        <div className="absolute inset-0 z-0">
          <SiteImage
            src="/regnara-commercial.jpg"
            alt="Commercial Property Development"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d3d]/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="page-eyebrow mb-3">Our Services</p>
            <h1 className="page-title-inverse mb-6 text-balance">
              Commercial Property Development
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Shops, offices, showrooms, and retail complexes at prime Lucknow locations with high footfall and strong ROI
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title mb-6">Premium Commercial Spaces for Business Growth</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Regnara Realty develops high-quality commercial properties at strategic locations in Lucknow —
                  designed to help businesses grow and investors earn strong rental yields and capital appreciation.
                </p>
                <p>
                  From ground-floor retail shops and showrooms to modern office complexes, our commercial developments
                  are built with superior construction quality, ample parking, and excellent visibility.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  "Retail shops and showrooms in high-traffic locations",
                  "Office spaces with modern infrastructure",
                  "Mixed-use complexes with retail and commercial floors",
                  "Ample car parking and loading/unloading areas",
                  "High-speed internet and power backup",
                  "Strong rental income and appreciation potential",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#c9a961] flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <SiteImage src="/regnara-commercial.jpg" alt="Regnara Commercial Development" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="section-title mb-12 text-center">Commercial Property Types</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Store, title: "Retail Shops", desc: "High-visibility ground floor units ideal for retail businesses, brands, and showrooms" },
              { icon: Building2, title: "Office Spaces", desc: "Modern, well-serviced office floors for corporate, SME, and startup clients" },
              { icon: Users, title: "Commercial Complexes", desc: "Multi-floor mixed-use developments combining retail and commercial office spaces" },
              { icon: TrendingUp, title: "Investment Units", desc: "Pre-leased commercial units offering immediate rental income and capital growth" },
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
          <h2 className="text-4xl font-bold mb-4">Invest in Commercial Real Estate with Regnara</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Explore our commercial developments and secure a high-yield property in Lucknow&apos;s growth zones.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-[#c9a961] hover:bg-[#b8913e] text-white rounded-full" asChild>
              <Link href="/contact">Get Details</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0a3d3d] rounded-full" asChild>
              <Link href="/projects/commercial">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}


