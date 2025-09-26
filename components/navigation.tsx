"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground">Trinetra Techverse</span>
              <span className="text-xs text-muted-foreground">Orbit Media</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>

            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-2xl shadow-soft-lg py-2 z-50">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    All Services
                  </Link>
                  <Link
                    href="/services#whatsapp"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    WhatsApp Marketing
                  </Link>
                  <Link
                    href="/services#social-media"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    Social Media Marketing
                  </Link>
                  <Link
                    href="/services#seo"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    SEO & Website Marketing
                  </Link>
                </div>
              )}
            </div>

            <Link href="/portfolio" className="text-foreground hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>

            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-2xl hover:bg-primary/90 transition-colors font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-foreground hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-foreground hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-2xl hover:bg-primary/90 transition-colors font-medium text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
