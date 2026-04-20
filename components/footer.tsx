import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { SiteImage } from "@/components/site-image"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#0d2137] text-white">
      {/* Top CTA Strip */}
      <div className="bg-[#c9a44a]">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#0d2137] font-semibold text-sm tracking-wide uppercase">
            Strong Foundations, Brighter Futures
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0d2137] text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-[#0d2137]/80 transition-colors"
          >
            Book a Site Visit
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-14">
          {/* Company Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/regnara-logo.png"
                alt="Regnara Realty Developers"
                width={80}
                height={80}
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs mb-6">
              Regnara Realty Developers Pvt. Ltd. is committed to delivering premium residential, commercial, and
              township projects across India — built on trust, quality, and timely delivery.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://facebook.com/regnararealty"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c9a44a] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="https://instagram.com/regnararealty"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c9a44a] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="https://linkedin.com/company/regnararealty"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c9a44a] text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="https://youtube.com/@regnararealty"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c9a44a] text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </Link>
              <Link
                href="https://twitter.com/regnararealty"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c9a44a] text-white flex items-center justify-center transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-[#c9a44a] font-semibold text-sm uppercase tracking-widest mb-5">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "Mission & Vision", href: "/about/mission-vision" },
                { label: "Leadership", href: "/about/leadership" },
                { label: "Why Regnara", href: "/about/why-regnara" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-[#c9a44a] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-[#c9a44a] font-semibold text-sm uppercase tracking-widest mb-5">Projects</h3>
            <ul className="space-y-3">
              {[
                { label: "Residential", href: "/projects/residential" },
                { label: "Township & Plots", href: "/projects/infrastructure" },
                { label: "Commercial", href: "/projects/commercial" },
                { label: "Joint Ventures", href: "/services/joint-venture" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-[#c9a44a] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#c9a44a] font-semibold text-sm uppercase tracking-widest mb-5">Services</h3>
            <ul className="space-y-3">
              {[
                { label: "Apartment Development", href: "/services/residential-development" },
                { label: "Township Development", href: "/services/township-development" },
                { label: "Commercial Development", href: "/services/commercial-development" },
                { label: "Investment Solutions", href: "/services/investment-solutions" },
                { label: "Project Management", href: "/services/project-management" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-[#c9a44a] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-10"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="text-white/50 text-xs">
              Registered Office: B-803, Block B, Neelkanth Dreamz, Vrindavan Colony, Lucknow — 226029, Uttar Pradesh
            </p>
            <p className="text-white/50 text-xs">
              Email:{" "}
              <Link href="mailto:regnararealty@gmail.com" className="hover:text-[#c9a44a] transition-colors">
                regnararealty@gmail.com
              </Link>
              {" "}&nbsp;|&nbsp; Mon–Sat: 10:00 AM – 6:30 PM
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="flex gap-4 flex-wrap">
              <Link href="/privacy-policy" className="text-white/50 hover:text-[#c9a44a] transition-colors text-xs">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/50 hover:text-[#c9a44a] transition-colors text-xs">
                Terms of Use
              </Link>
              <Link href="/ethics" className="text-white/50 hover:text-[#c9a44a] transition-colors text-xs">
                Ethics & Compliance
              </Link>
            </div>
            <p className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} Regnara Realty Developers Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
