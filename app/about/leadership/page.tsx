import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 lg:px-8 py-24 pt-40">
        <div className="max-w-6xl mx-auto">
          <h1 className="page-title mb-4 text-balance">Leadership Team</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Our leadership team is united in their commitment to driving excellence in every real estate project we
            undertake across Lucknow and beyond.
          </p>

          <div className="relative h-[400px] rounded-lg overflow-hidden mb-16">
            <Image src="/regnara-about-team.jpg" alt="Regnara Realty Leadership Team" fill className="object-cover" />
          </div>

          <Card className="border-2 border-[#c9a961]/20 mb-12">
            <CardContent className="p-8">
              <h2 className="section-title mb-6">Message from the Director</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Regnara Realty Developers Pvt. Ltd., we believe that real estate is not just about building
                  structures — it is about creating homes, communities, and lasting legacies. Since our inception, our
                  goal has been clear: to deliver high-quality, sustainable, and innovative real estate solutions that
                  redefine the standards of property development in Lucknow and across India.
                </p>
                <p>
                  Our journey is guided by a strong commitment to quality construction, timely delivery, and customer
                  satisfaction. We understand that every project carries the trust of families and investors, and we
                  honor that trust through excellence in every brick we lay.
                </p>
                <p>
                  With a dedicated team of professionals, transparent processes, and a deep understanding of the local
                  market, we aim to contribute to Lucknow&apos;s growth by creating residential apartments, commercial
                  spaces, and township developments that stand strong for generations.
                </p>
                <p>
                  At Regnara, we do not just develop properties — we create landmarks of trust, quality, and strength.
                  I extend my heartfelt gratitude to our clients, investors, and team members who continuously support
                  and believe in our vision. Together, we will keep building a stronger, brighter future.
                </p>
                <div className="mt-6">
                  <p className="font-bold text-primary">Management Team</p>
                  <p className="text-sm text-muted-foreground">Directors & Leadership</p>
                  <p className="text-sm text-muted-foreground">Regnara Realty Developers Pvt. Ltd.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="section-title mb-8">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:border-[#c9a961] transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 rounded-full bg-[#c9a961]/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#c9a961]">MD</span>
                </div>
                <h3 className="card-title mb-2">Managing Director</h3>
                <p className="text-sm text-[#c9a961] font-medium mb-3">Director</p>
                <p className="text-sm text-muted-foreground">
                  Leading the company&apos;s strategic vision and overseeing major real estate developments with deep
                  knowledge of the Lucknow property market.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#c9a961] transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 rounded-full bg-[#c9a961]/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#c9a961]">OD</span>
                </div>
                <h3 className="card-title mb-2">Operations Director</h3>
                <p className="text-sm text-[#c9a961] font-medium mb-3">Director</p>
                <p className="text-sm text-muted-foreground">
                  Expert in construction management and project operations, ensuring quality delivery and client
                  satisfaction across all residential and commercial projects.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#c9a961] transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 rounded-full bg-[#c9a961]/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#c9a961]">SM</span>
                </div>
                <h3 className="card-title mb-2">Sales Manager</h3>
                <p className="text-sm text-[#c9a961] font-medium mb-3">Manager</p>
                <p className="text-sm text-muted-foreground">
                  Managing client relationships, property consultations, and ensuring seamless project coordination
                  and execution for every buyer and investor.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Join Our Team</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about/why-regnara">Why Choose Regnara</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}


