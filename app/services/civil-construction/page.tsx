"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Home, Factory, School, CheckCircle2, Phone, Mail, Hammer, Wrench } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CivilConstructionPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden mt-28">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-[0.4]">
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik__aerial-view-of-a-construction-site-with-cranes-and__87511-v6sgtKqiPO5dcQWgiKwUXwI5rZGzgv.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">Civil Construction</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Expert civil construction services for residential, commercial, and industrial projects
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-[#0a3d3d] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Civil Construction Track Record</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c9a961] mb-2">450+</div>
              <p className="text-lg text-white/80">Civil Projects</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c9a961] mb-2">20M+</div>
              <p className="text-lg text-white/80">Sq.ft Built</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c9a961] mb-2">97%</div>
              <p className="text-lg text-white/80">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c9a961] mb-2">15+</div>
              <p className="text-lg text-white/80">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Comprehensive Civil Construction Solutions</h2>
            <p className="text-xl text-muted-foreground text-center leading-relaxed">
              Our expert civil construction team delivers high-quality projects across residential, commercial, and industrial sectors with precision, innovation, and commitment to excellence.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">RCC Structures</h3>
                <p className="text-sm text-muted-foreground">Reinforced concrete columns, beams, slabs with superior strength</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Masonry Work</h3>
                <p className="text-sm text-muted-foreground">Quality brick masonry, block work, and stone finishing</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Hammer className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Foundation Work</h3>
                <p className="text-sm text-muted-foreground">Deep piling, raft, strip, and spread foundation systems</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Multi-Story Building</h3>
                <p className="text-sm text-muted-foreground">Residential and commercial multi-story complexes</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Factory className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Industrial Structures</h3>
                <p className="text-sm text-muted-foreground">Factories, warehouses, and industrial facilities</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Plumbing & MEP</h3>
                <p className="text-sm text-muted-foreground">Mechanical, electrical, and plumbing installations</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <School className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Institutional Buildings</h3>
                <p className="text-sm text-muted-foreground">Schools, colleges, hospitals, and public buildings</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Quality Control</h3>
                <p className="text-sm text-muted-foreground">Testing, inspection, and certified quality assurance</p>
              </CardContent>
            </Card>
          </div>

          {/* Construction Process Section */}
          <div className="mb-16 bg-muted/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Our Civil Construction Process</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Survey & Soil Testing</h4>
                    <p className="text-muted-foreground text-sm">
                      Professional site survey and soil analysis for optimal foundation design
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Foundation & Excavation</h4>
                    <p className="text-muted-foreground text-sm">
                      Expert foundation work with proper drainage and structural integrity
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Structural Construction</h4>
                    <p className="text-muted-foreground text-sm">
                      RCC work, masonry, steel fabrication with certified quality materials
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Finishing & Handover</h4>
                    <p className="text-muted-foreground text-sm">
                      Interior/exterior finishing, inspection, and quality certification
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Featured Civil Construction Project</h3>
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative h-96">
                  <Image src="/modern-commercial-building-construction-site-with-.jpg" alt="Civil Construction Project" fill className="object-cover" />
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold mb-4">Modern Corporate Complex</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    A prestigious 15-story commercial and residential complex built using advanced civil construction techniques, featuring robust structural design, modern amenities, and sustainable infrastructure.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Project Duration</p>
                      <p className="text-lg font-bold">24 Months</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Built-up Area</p>
                      <p className="text-lg font-bold">3.5 Lakh Sq.ft</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Structure Type</p>
                      <p className="text-lg font-bold">RCC Frame</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="text-lg font-bold">Dehradun</p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Why Choose Regnara for Civil Construction?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-2">Expert Civil Engineers</h4>
                  <p className="text-muted-foreground">
                    Certified engineers with extensive experience in structural design and execution
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-2">Quality Materials</h4>
                  <p className="text-muted-foreground">
                    ISI certified cement, steel, and construction materials from trusted suppliers
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-2">Advanced Technology</h4>
                  <p className="text-muted-foreground">
                    Latest construction methods, testing equipment, and project management tools
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-2">Timely Delivery</h4>
                  <p className="text-muted-foreground">
                    Proven track record of completing civil projects on schedule and within budget
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#0a3d3d] rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Civil Construction Project?</h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Contact our civil construction team for expert guidance, site assessment, and a detailed quotation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#0a3d3d] hover:bg-white/90">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0a3d3d] bg-transparent">
                <a href="tel:9855665557">Call: +91-9855665557</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}


