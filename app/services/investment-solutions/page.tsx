import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, TrendingUp, PiggyBank, LineChart, ShieldCheck } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SiteImage } from "@/components/site-image"

const investmentTypes = [
  {
    icon: TrendingUp,
    title: "Pre-Launch Investments",
    desc: "Invest early in upcoming Regnara projects at attractive pre-launch prices for maximum capital appreciation.",
  },
  {
    icon: PiggyBank,
    title: "Rental Income Properties",
    desc: "Invest in ready-to-rent residential or commercial units generating consistent monthly rental income.",
  },
  {
    icon: LineChart,
    title: "Plot Investments",
    desc: "Secure residential and commercial plots in high-growth Lucknow corridors for long-term appreciation.",
  },
  {
    icon: ShieldCheck,
    title: "RERA-Secured Investments",
    desc: "All Regnara investment opportunities are RERA registered, ensuring legal security and regulatory compliance.",
  },
]

export default function InvestmentSolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-28">
        <div className="absolute inset-0 z-0">
          <SiteImage
            src="/regnara-investment.jpg"
            alt="Real Estate Investment Solutions"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d3d]/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="page-eyebrow mb-3">Our Services</p>
            <h1 className="page-title-inverse mb-6 text-balance">
              Real Estate Investment Solutions
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Expert guidance to help investors identify high-potential properties and maximize returns in Lucknow&apos;s growing real estate market
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title mb-6">Grow Your Wealth Through Real Estate</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Lucknow&apos;s real estate market is experiencing rapid growth, driven by infrastructure expansion,
                  economic development, and rising demand. Regnara Realty helps investors capitalize on this growth
                  with carefully curated investment opportunities.
                </p>
                <p>
                  Our investment solutions team guides you through the entire process — from property selection and
                  due diligence to purchase, possession, and property management — ensuring your investment delivers
                  maximum returns.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  "Pre-launch pricing for maximum appreciation",
                  "High-rental-yield commercial and residential units",
                  "Market analysis and investment advisory",
                  "Portfolio diversification across property types",
                  "Assistance with home loans and financing",
                  "Transparent pricing with no hidden charges",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#c9a961] flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <SiteImage src="/regnara-investment.jpg" alt="Regnara Investment Solutions" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="section-title mb-12 text-center">Investment Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentTypes.map((item, i) => {
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

      {/* Why Invest in Lucknow */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-6">Why Invest in Lucknow Real Estate?</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Lucknow is one of India&apos;s fastest-growing cities with rapid infrastructure development, expanding metro
              connectivity, and rising economic activity — making it one of the top real estate investment destinations.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: "15-20%", label: "Annual Appreciation", desc: "In prime Lucknow locations" },
                { value: "4-6%", label: "Rental Yield", desc: "On commercial properties" },
                { value: "Growing", label: "Infrastructure", desc: "Metro, expressways & smart city projects" },
              ].map((item, i) => (
                <Card key={i} className="border-2 border-[#c9a961]/20">
                  <CardContent className="p-8 text-center">
                    <div className="text-3xl font-bold text-[#c9a961] mb-2">{item.value}</div>
                    <div className="text-lg font-bold text-primary mb-2">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-center text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Start Your Real Estate Investment Journey</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Speak to our investment advisory team today and explore the best opportunities in Lucknow.
          </p>
          <Button size="lg" className="bg-[#c9a961] hover:bg-[#b8913e] text-white rounded-full" asChild>
            <Link href="/contact">Talk to an Advisor</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}


