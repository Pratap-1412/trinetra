"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import {
  MessageSquare,
  Share2,
  Users,
  Video,
  Search,
  Vote,
  Building2,
  Calendar,
  MousePointer,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Target,
  TrendingUp,
  Code,
  Megaphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "AI-Driven Digital Marketing",
      subtitle: "Transform Your Business with Smart Marketing Solutions",
      description:
        "Leverage cutting-edge AI technology to optimize your marketing campaigns and drive unprecedented growth.",
      image: "/modern-digital-marketing-dashboard-with-analytics-.jpg",
      cta: "Explore AI Solutions",
    },
    {
      title: "Political Campaign Excellence",
      subtitle: "Win Elections with Strategic Digital Campaigns",
      description:
        "Comprehensive political campaigning services including WhatsApp groups, social ads, and targeted voter outreach.",
      image: "/team-collaboration-in-modern-office-with-digital-m.jpg",
      cta: "View Campaign Services",
    },
    {
      title: "Website Development",
      subtitle: "Build Stunning Websites That Convert",
      description:
        "Custom website development with modern technologies, responsive design, and seamless user experiences.",
      image: "/modern-digital-marketing-dashboard-with-analytics-.jpg",
      cta: "Start Your Project",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const services = [
    {
      icon: MessageSquare,
      title: "WhatsApp Marketing",
      description: "Bulk messaging, chatbots, and automation to reach your customers directly.",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Instagram, Facebook, Twitter campaigns that drive engagement and growth.",
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      description: "Micro and macro influencer partnerships for authentic brand promotion.",
    },
    {
      icon: Video,
      title: "Video Marketing",
      description: "YouTube ads, motion graphics, and explainer videos that convert.",
    },
    {
      icon: Search,
      title: "SEO & Website Marketing",
      description: "Google ranking optimization, blogs, and website performance enhancement.",
    },
    {
      icon: Vote,
      title: "Political Campaigning",
      description: "WhatsApp groups, social ads, and poster campaigns for political success.",
    },
    {
      icon: Code,
      title: "Website Development",
      description: "Custom websites with modern design, responsive layouts, and powerful functionality.",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies that deliver measurable results.",
    },
    {
      icon: Building2,
      title: "Corporate Branding",
      description: "Logo design, profile creation, and professional brochure development.",
    },
    {
      icon: Calendar,
      title: "Event Marketing",
      description: "Webinar ads and online event promotions that maximize attendance.",
    },
    {
      icon: MousePointer,
      title: "Paid Ads (PPC)",
      description: "Google Ads, Meta Ads, and YouTube Ads with optimized ROI.",
    },
    {
      icon: BarChart3,
      title: "AI-Driven Analytics",
      description: "Campaign tracking, lead scoring, and behavior analysis for data-driven decisions.",
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechStart Solutions",
      feedback:
        "Orbit Media transformed our digital presence completely. Their AI-driven approach increased our leads by 300%.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "Fashion Forward",
      feedback:
        "The WhatsApp marketing campaigns were incredibly effective. We saw immediate results in customer engagement.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      company: "Local Restaurant Chain",
      feedback:
        "Their social media strategy helped us expand to 5 new locations. Truly a one-stop solution for all marketing needs.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Enhanced Hero Section with Carousel */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Carousel Content */}
          <div className="relative">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === currentSlide ? "opacity-100 relative" : "opacity-0 absolute inset-0 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Text Content */}
                  <div className="space-y-8 z-10">
                    <div className="space-y-6">
                      {/* Badge */}
                      <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
                        <Zap className="w-4 h-4" />
                        <span>Trinetra Techverse - Orbit Media</span>
                      </div>

                      {/* Main Heading */}
                      <h1 className="text-5xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
                        {slide.title.split(" ").map((word, i) =>
                          i === slide.title.split(" ").length - 1 || i === slide.title.split(" ").length - 2 ? (
                            <span key={i} className="text-secondary">
                              {word}{" "}
                            </span>
                          ) : (
                            <span key={i}>{word} </span>
                          ),
                        )}
                      </h1>

                      {/* Subtitle */}
                      <h2 className="text-2xl lg:text-3xl text-primary font-semibold text-balance">{slide.subtitle}</h2>

                      {/* Description */}
                      <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
                        {slide.description}
                      </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl hover:bg-secondary/90 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                        <span>{slide.cta}</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                      <button className="border-2 border-primary text-primary px-8 py-4 rounded-2xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold">
                        Contact Us
                      </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-8">
                      <div className="space-y-1">
                        <div className="text-3xl font-bold text-secondary">500+</div>
                        <div className="text-sm text-muted-foreground">Happy Clients</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-3xl font-bold text-secondary">1000+</div>
                        <div className="text-sm text-muted-foreground">Projects Done</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-3xl font-bold text-secondary">98%</div>
                        <div className="text-sm text-muted-foreground">Success Rate</div>
                      </div>
                    </div>
                  </div>

                  {/* Image with Enhanced Styling */}
                  <div className="relative lg:h-[600px] flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Decorative Elements */}
                      <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-3xl rotate-12 blur-sm"></div>
                      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-3xl -rotate-12 blur-sm"></div>

                      {/* Main Image Card */}
                      <div className="relative bg-card rounded-3xl p-4 shadow-2xl border border-border h-full overflow-hidden group">
                        <div className="relative h-full rounded-2xl overflow-hidden">
                          <img
                            src={slide.image || "/placeholder.svg"}
                            alt={slide.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          {/* Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Carousel Controls */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-4 lg:justify-between mt-8">
              {/* Navigation Buttons */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-card border-2 border-border hover:border-secondary hover:bg-secondary/10 transition-all duration-300 flex items-center justify-center group"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-secondary transition-colors" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-card border-2 border-border hover:border-secondary hover:bg-secondary/10 transition-all duration-300 flex items-center justify-center group"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-foreground group-hover:text-secondary transition-colors" />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex items-center gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "w-8 bg-secondary" : "w-2 bg-border hover:bg-secondary/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Orbit Media */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">About Orbit Media</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your complete digital marketing solution. No need to buy separate tools or manage multiple vendors. We
              provide everything you need under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                  <span className="text-lg font-semibold text-foreground">All-in-One Solution</span>
                </div>
                <p className="text-muted-foreground leading-relaxed ml-9">
                  From WhatsApp marketing to AI analytics, we handle every aspect of your digital marketing needs.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                  <span className="text-lg font-semibold text-foreground">Cost-Effective</span>
                </div>
                <p className="text-muted-foreground leading-relaxed ml-9">
                  Save money by avoiding multiple subscriptions and vendor management costs.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                  <span className="text-lg font-semibold text-foreground">AI-Powered Insights</span>
                </div>
                <p className="text-muted-foreground leading-relaxed ml-9">
                  Make data-driven decisions with our advanced AI analytics and reporting tools.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/team-collaboration-in-modern-office-with-digital-m.jpg"
                alt="Team Collaboration"
                className="w-full h-auto rounded-3xl shadow-soft-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital marketing solutions powered by AI to grow your business effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-3xl p-8 hover:shadow-soft-lg hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Orbit Media */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Why Choose Orbit Media?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-secondary rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <Zap className="w-10 h-10 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">All-in-One Solution</h3>
              <p className="text-muted-foreground leading-relaxed">
                Everything you need for digital marketing success in one comprehensive package. No more juggling
                multiple tools and vendors.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <Target className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">AI-Powered Insights</h3>
              <p className="text-muted-foreground leading-relaxed">
                Leverage cutting-edge AI technology for campaign optimization, lead scoring, and predictive analytics
                that drive results.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-secondary rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <TrendingUp className="w-10 h-10 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Result-Oriented Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                We focus on measurable outcomes and ROI. Every campaign is designed to deliver tangible business growth
                and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-3xl p-8 space-y-6 hover:shadow-soft-lg hover:border-secondary/50 transition-all duration-300"
              >
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">"{testimonial.feedback}"</p>
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Ready to Transform Your Digital Marketing?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of businesses that have already experienced exponential growth with our AI-powered marketing
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl hover:bg-secondary/90 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-2xl hover:bg-primary-foreground hover:text-primary transition-all duration-300 font-semibold">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
