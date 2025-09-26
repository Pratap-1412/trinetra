"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowRight, ExternalLink, Calendar, TrendingUp, Users, Award } from "lucide-react"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Political", "Retail", "Healthcare", "Technology", "NGO", "Education"]

  const caseStudies = [
    {
      id: 1,
      title: "Political Campaign Success",
      category: "Political",
      client: "Regional Political Party",
      image: "/placeholder.svg?key=case1&height=400&width=600&text=Political+Campaign",
      description:
        "Comprehensive digital campaign strategy that increased voter engagement by 250% and social media reach by 400%.",
      results: {
        engagement: "250%",
        reach: "400%",
        conversion: "180%",
      },
      services: ["WhatsApp Marketing", "Social Media", "Political Campaigning"],
      duration: "3 months",
      featured: true,
    },
    {
      id: 2,
      title: "E-commerce Growth Strategy",
      category: "Retail",
      client: "Fashion Forward Store",
      image: "/placeholder.svg?key=case2&height=400&width=600&text=E-commerce+Growth",
      description:
        "Complete digital transformation resulting in 300% increase in online sales and 500% growth in social media following.",
      results: {
        sales: "300%",
        followers: "500%",
        roi: "450%",
      },
      services: ["Social Media Marketing", "Influencer Marketing", "SEO"],
      duration: "6 months",
      featured: true,
    },
    {
      id: 3,
      title: "Healthcare Awareness Campaign",
      category: "Healthcare",
      client: "City Medical Center",
      image: "/placeholder.svg?key=case3&height=400&width=600&text=Healthcare+Campaign",
      description:
        "Educational campaign that increased health awareness and patient appointments by 200% through targeted digital marketing.",
      results: {
        awareness: "200%",
        appointments: "180%",
        engagement: "320%",
      },
      services: ["Content Marketing", "Social Media", "Video Marketing"],
      duration: "4 months",
      featured: false,
    },
    {
      id: 4,
      title: "Tech Startup Launch",
      category: "Technology",
      client: "InnovateTech Solutions",
      image: "/placeholder.svg?key=case4&height=400&width=600&text=Tech+Startup",
      description:
        "Complete brand launch strategy that generated 1000+ leads in the first month and established strong market presence.",
      results: {
        leads: "1000+",
        brand_awareness: "400%",
        market_share: "15%",
      },
      services: ["Corporate Branding", "PPC", "AI Analytics"],
      duration: "5 months",
      featured: true,
    },
    {
      id: 5,
      title: "NGO Fundraising Campaign",
      category: "NGO",
      client: "Hope Foundation",
      image: "/placeholder.svg?key=case5&height=400&width=600&text=NGO+Campaign",
      description:
        "Emotional storytelling campaign that increased donations by 350% and volunteer registrations by 200%.",
      results: {
        donations: "350%",
        volunteers: "200%",
        reach: "600%",
      },
      services: ["Video Marketing", "Social Media", "Email Marketing"],
      duration: "3 months",
      featured: false,
    },
    {
      id: 6,
      title: "Educational Institution Growth",
      category: "Education",
      client: "Future Learning Academy",
      image: "/placeholder.svg?key=case6&height=400&width=600&text=Education+Growth",
      description:
        "Student enrollment campaign that resulted in 400% increase in inquiries and 250% growth in admissions.",
      results: {
        inquiries: "400%",
        admissions: "250%",
        engagement: "300%",
      },
      services: ["Event Marketing", "Social Media", "WhatsApp Marketing"],
      duration: "4 months",
      featured: false,
    },
  ]

  const filteredCaseStudies =
    activeFilter === "All" ? caseStudies : caseStudies.filter((study) => study.category === activeFilter)

  const featuredCaseStudies = caseStudies.filter((study) => study.featured)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
              Success <span className="text-primary">Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses across various industries achieve remarkable growth through our
              AI-powered digital marketing solutions.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-secondary" />
                <span>500+ Successful Campaigns</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>Average 300% Growth</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-secondary" />
                <span>200+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Featured Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our most impactful campaigns that showcase the power of AI-driven digital marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCaseStudies.slice(0, 2).map((study, index) => (
              <div
                key={study.id}
                className="bg-card border border-border rounded-3xl overflow-hidden hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative">
                  <img src={study.image || "/placeholder.svg"} alt={study.title} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-secondary font-medium">{study.category}</span>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{study.client}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{study.description}</p>

                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(study.results).map(([key, value], resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="text-2xl font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key.replace("_", " ")}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-primary text-primary-foreground py-3 rounded-2xl hover:bg-primary/90 transition-colors font-semibold flex items-center justify-center space-x-2">
                    <span>View Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">All Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Browse our complete portfolio of successful campaigns across different industries.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-card text-foreground hover:bg-muted border border-border"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-card border border-border rounded-3xl overflow-hidden hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative">
                  <img src={study.image || "/placeholder.svg"} alt={study.title} className="w-full h-48 object-cover" />
                  {study.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-secondary font-medium">{study.category}</span>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{study.client}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">{study.description}</p>

                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(study.results)
                      .slice(0, 3)
                      .map(([key, value], resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-lg font-bold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key.replace("_", " ")}</div>
                        </div>
                      ))}
                  </div>

                  <button className="w-full bg-muted text-foreground py-2 rounded-2xl hover:bg-primary hover:text-primary-foreground transition-colors font-medium flex items-center justify-center space-x-2">
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Impact in Numbers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The measurable results we've delivered for our clients across all industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Campaigns Launched</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-secondary">300%</div>
              <div className="text-muted-foreground">Average Growth</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-primary">200+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-secondary">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Join our portfolio of successful clients and experience the transformative power of AI-driven digital
              marketing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl hover:bg-secondary/90 transition-colors font-semibold flex items-center justify-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-2xl hover:bg-primary-foreground/10 transition-colors font-semibold">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
