"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, MessageCircle, Building2, Instagram, Facebook, MessageCircleIcon } from "lucide-react"
import { useState } from "react"
import { PageWrapper } from "@/components/page-wrapper"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    query: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const officeLocations = [
    {
      title: "Head Office",
      address: "B-803 BLOCK B AT NEELKANTH DREAMZ, VRINDAVAN COLONY, Lucknow, Uttar Pradesh 226029",
      phone: "+91-9123456789",
      phone2: "",
      email: "regnararealty@gmail.com",
    },
  ]

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a3d3d] to-[#164d4d]">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get in touch with our team for project consultations and inquiries
          </p>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* General Enquiries */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">General Enquiries</h3>
              <p className="text-gray-600 text-center mb-6">For all general enquiries, please email us</p>
              <div className="text-center">
                <a href="mailto:regnararealty@gmail.com" className="text-primary hover:underline">
                  regnararealty@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Support */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Phone Support</h3>
              <p className="text-gray-600 text-center mb-6">Available Mon-Sat, 10:00 AM - 6:30 PM</p>
              <div className="text-center">
                <a href="tel:9123456789" className="text-primary hover:underline">
                  +91-9123456789
                </a>
              </div>
            </div>

            {/* Support Enquiries */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Support Enquiries</h3>
              <p className="text-gray-600 text-center mb-6">Need help with a current project?</p>
              <div className="text-center">
                <a href="mailto:regnararealty@gmail.com" className="text-primary hover:underline">
                  regnararealty@gmail.com
                </a>
              </div>
            </div>

            {/* Office Phone */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Office Phone</h3>
              <p className="text-gray-600 text-center mb-6">Call our head office directly</p>
              <div className="text-center">
                <a href="tel:9123456789" className="text-primary hover:underline">
                  +91-9123456789
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-gradient-to-br from-[#0a3d3d] to-[#164d4d]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Our Presence Across India</h2>
            <div className="h-1 w-32 bg-[#c5a572]" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0a3d3d] mb-6">{office.title}</h3>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <MapPin className="w-5 h-5 text-[#0a9bd7] flex-shrink-0 mt-1" />
                      <p className="text-sm text-gray-700 leading-relaxed">{office.address}</p>
                    </div>

                    <div className="flex gap-3">
                      <Phone className="w-5 h-5 text-[#0a9bd7] flex-shrink-0" />
                      <div className="text-sm">
                        <a
                          href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                          className="text-gray-700 hover:text-[#0a3d3d] transition-colors"
                        >
                          {office.phone}
                        </a>
                        {office.phone2 && (
                          <>
                            <br />
                            <a
                              href={`tel:${office.phone2.replace(/[^0-9+]/g, "")}`}
                              className="text-gray-700 hover:text-[#0a3d3d] transition-colors"
                            >
                              {office.phone2}
                            </a>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Mail className="w-5 h-5 text-[#0a9bd7] flex-shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-sm text-gray-700 hover:text-[#0a3d3d] transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Drop Us A Line</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and our team will get back to you within 24 hours
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium mb-2">
                        Organisation <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your organization"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Id <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your phone"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="query" className="block text-sm font-medium mb-2">
                      What is my query about? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="query"
                      name="query"
                      value={formData.query}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select Query</option>
                      <option value="Civil Construction">Civil Construction</option>
                      <option value="Infrastructure Development">Infrastructure Development</option>
                      <option value="Real Estate">Real Estate & Housing</option>
                      <option value="Interior & Exterior">Interior & Exterior Works</option>
                      <option value="Construction Materials">Construction Materials Supply</option>
                      <option value="Project Management">Project Management & Consultancy</option>
                      <option value="Job Enquiry">Job Enquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Start typing here..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto px-12">
                    <Send className="w-4 h-4 mr-2" />
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Visit Our Head Office</h2>
            <p className="text-lg text-muted-foreground">Visit us or reach out through any of our channels</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">Visit Our Head Office</h3>
              </div>
              <div className="space-y-6 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                  <p>B-803 BLOCK B AT NEELKANTH DREAMZ</p>
                  <p>VRINDAVAN COLONY, Lucknow</p>
                  <p>Uttar Pradesh 226029</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
                  <p>
                    Phone:{" "}
                    <a href="tel:9123456789" className="hover:text-primary transition-colors">
                      +91-9123456789
                    </a>
                  </p>
                  <p>
                    Email:{" "}
                    <a href="mailto:regnararealty@gmail.com" className="hover:text-primary transition-colors">
                      regnararealty@gmail.com
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Office Hours</h4>
                  <p>Monday - Saturday: 10:00 AM - 6:30 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full relative col-span-1 md:col-span-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14247.930689973617!2d80.93489815!3d26.7865231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bf0e2270921c5%3A0x6e9f16d7a4cbfae!2sVrindavan%20Colony%2C%20Lucknow%2C%20Uttar%20Pradesh%20226029!5e0!3m2!1sen!2sin!4v1713432000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Regnara Realty Head Office Location"
              />
              <a
                href="https://goo.gl/maps/vrindavancolonylucknow"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10 flex items-center justify-center"
                title="Open location in Google Maps"
              >
                <MapPin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Follow us on Social Media</h2>
          <div className="flex justify-center gap-6">
            <Link
              href="https://instagram.com/regnararealty"
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link
              href="https://facebook.com/regnararealty"
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href="https://wa.me/919123456789"
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

