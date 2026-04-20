import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Shield, Clock, TrendingUp, Users, Leaf, Award, MapPin } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

const reasons = [
  {
    icon: Award,
    title: "Quality Construction",
    description:
      "We use only the best materials, proven construction methods, and rigorous quality checks at every stage — ensuring your property stands strong for generations.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "We value your time and investment. Every project is planned with precision and delivered within committed timelines without compromising quality or safety.",
  },
  {
    icon: Shield,
    title: "Transparent Dealings",
    description:
      "Full transparency in pricing, legal documentation, and project updates. No hidden costs, no surprises — just honest communication throughout your journey.",
  },
  {
    icon: TrendingUp,
    title: "High Investment Returns",
    description:
      "Our properties are located in prime, high-growth areas of Lucknow with strong appreciation potential — ensuring maximum ROI for homebuyers and investors alike.",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description:
      "Strategically selected locations with excellent connectivity, infrastructure, and amenities — making every Regnara property a smart and valuable choice.",
  },
  {
    icon: Users,
    title: "Customer-First Approach",
    description:
      "We are with you from your first inquiry to final possession and beyond. Our dedicated team ensures a seamless, supportive experience at every step.",
  },
  {
    icon: CheckCircle2,
    title: "Legal Clarity",
    description:
      "All projects are fully RERA compliant with clear titles, transparent documentation, and legal support — giving you complete peace of mind.",
  },
  {
    icon: Leaf,
    title: "Sustainable Development",
    description:
      "We design eco-friendly, energy-efficient properties with green spaces, rainwater harvesting, and sustainable features for a better tomorrow.",
  },
]

const stats = [
  { value: "500+", label: "Happy Families" },
  { value: "10+", label: "Projects Delivered" },
  { value: "100%", label: "RERA Compliant" },
  { value: "5+", label: "Years of Excellence" },
]

export default function WhyRegnaraPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 lg:px-8 py-24 pt-40">
        <div className="max-w-6xl mx-auto">
          <h1 className="page-title mb-4 text-balance">Why Choose Regnara Realty?</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Quality construction, timely delivery, and trusted relationships — the pillars that make Regnara Realty
            the preferred choice for homebuyers and investors across Lucknow.
          </p>

          <div className="relative h-[400px] rounded-lg overflow-hidden mb-16">
            <Image src="/regnara-hero-apartments.jpg" alt="Why Choose Regnara Realty" fill className="object-cover" />
            <div className="absolute inset-0 bg-primary/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center text-white">
                    <div className="text-4xl font-bold text-[#c9a961] mb-1">{stat.value}</div>
                    <div className="text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {reasons.map((reason, i) => {
              const Icon = reason.icon
              return (
                <Card key={i} className="border-2 border-[#c9a961]/20 hover:border-[#c9a961] transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#c9a961]" />
                      </div>
                      <h3 className="card-title">{reason.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card className="border-2 border-[#c9a961] bg-[#c9a961]/5">
            <CardContent className="p-12 text-center">
              <h2 className="section-title mb-4">
                Ready to Find Your Dream Home or Investment Property?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied families and investors who have trusted Regnara Realty for their property
                needs. Let&apos;s turn your vision into reality.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" asChild>
                  <Link href="/contact">Book a Site Visit</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/projects/residential">Explore Projects</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}


