import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">Trinetra Techverse</span>
                <span className="text-xs opacity-80">Orbit Media</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              One Stop Digital Marketing Service powered by AI. Transform your business with our comprehensive marketing
              solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 opacity-80 hover:opacity-100 hover:text-secondary cursor-pointer transition-all" />
              <Twitter className="w-5 h-5 opacity-80 hover:opacity-100 hover:text-secondary cursor-pointer transition-all" />
              <Instagram className="w-5 h-5 opacity-80 hover:opacity-100 hover:text-secondary cursor-pointer transition-all" />
              <Linkedin className="w-5 h-5 opacity-80 hover:opacity-100 hover:text-secondary cursor-pointer transition-all" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all">
                Home
              </Link>
              <Link
                href="/services"
                className="block text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="block text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all"
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="block text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all"
              >
                About Us
              </Link>
              <Link
                href="/blog"
                className="block text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all"
              >
                Blog
              </Link>
              <Link
                href="/careers"
                className="block text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="block text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <div className="space-y-2">
              <span className="block text-sm opacity-80">WhatsApp Marketing</span>
              <span className="block text-sm opacity-80">Social Media Marketing</span>
              <span className="block text-sm opacity-80">SEO & Website Marketing</span>
              <span className="block text-sm opacity-80">Political Campaigning</span>
              <span className="block text-sm opacity-80">Website Development</span>
              <span className="block text-sm opacity-80">Digital Marketing</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 opacity-80" />
                <span className="text-sm opacity-80">info@trinetra-techverse.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 opacity-80" />
                <span className="text-sm opacity-80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 opacity-80" />
                <span className="text-sm opacity-80">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2025 Trinetra Techverse. All rights reserved. | Orbit Media - AI Digital Marketing Agency
          </p>
        </div>
      </div>
    </footer>
  )
}
