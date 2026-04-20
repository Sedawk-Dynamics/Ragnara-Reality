import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Handshake, FileText, TrendingUp, Shield } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SiteImage } from "@/components/site-image"

const steps = [
  {
    step: "01",
    title: "Initial Discussion",
    desc: "Meet with our team to discuss your land, its potential, and your goals. We assess the site and share preliminary development concepts.",
  },
  {
    step: "02",
    title: "Feasibility & Agreement",
    desc: "We conduct a detailed feasibility study and present a transparent JV proposal with clear revenue sharing terms and timelines.",
  },
  {
    step: "03",
    title: "Legal & Documentation",
    desc: "Our legal team handles all documentation, title verification, and regulatory approvals to ensure a smooth and secure partnership.",
  },
  {
    step: "04",
    title: "Development & Handover",
    desc: "Regnara manages the entire construction, sales, and delivery process — ensuring quality output and timely possession for all parties.",
  },
]

export default function JointVenturePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-28">
        <div className="absolute inset-0 z-0">
          <SiteImage
            src="/regnara-investment.jpg"
            alt="Joint Venture Development"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d3d]/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="page-eyebrow mb-3">Our Services</p>
            <h1 className="page-title-inverse mb-6 text-balance">
              Joint Venture (JV) Development
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Partner with Regnara Realty to unlock the full potential of your land through transparent and profitable JV development
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title mb-6">Unlock the Potential of Your Land</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  If you own land and want to develop it profitably without the risks and complexities of managing a
                  real estate project yourself — a Joint Venture with Regnara Realty is the ideal solution.
                </p>
                <p>
                  We bring our development expertise, construction capabilities, marketing network, and financial
                  resources, while you contribute your land. Together, we create a mutually profitable project with
                  transparent terms and legally secure agreements.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  "Transparent revenue-sharing arrangements",
                  "Legally documented JV agreements",
                  "No upfront investment required from landowner",
                  "Regnara manages entire development process",
                  "Regular project updates and financial reporting",
                  "Clear timelines and possession commitments",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#c9a961] flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <SiteImage src="/regnara-construction-site.jpg" alt="Regnara Joint Venture" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* JV Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="section-title mb-12 text-center">Why Partner with Regnara?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Handshake, title: "Fair Partnership", desc: "Equitable and transparent terms that benefit both parties throughout the project" },
              { icon: FileText, title: "Legal Security", desc: "All agreements are fully documented and legally verified for your peace of mind" },
              { icon: TrendingUp, title: "Maximized Returns", desc: "Our development expertise ensures maximum value extraction from your land" },
              { icon: Shield, title: "Trusted Developer", desc: "Regnara&apos;s track record of quality delivery ensures your investment is in safe hands" },
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

      {/* Process */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="section-title mb-12 text-center">Our JV Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-5xl font-bold text-[#c9a961]/20 mb-4">{step.step}</div>
                <h3 className="card-title mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-center text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Own Land? Let&apos;s Build Together</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today to explore how a Joint Venture with Regnara Realty can unlock the full value of your land.
          </p>
          <Button size="lg" className="bg-[#c9a961] hover:bg-[#b8913e] text-white rounded-full" asChild>
            <Link href="/contact">Discuss JV Opportunity</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}


