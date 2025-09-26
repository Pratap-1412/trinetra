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
} from "lucide-react"

export default function HomePage() {
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

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                  Welcome to <span className="text-primary">Trinetra Techverse</span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-secondary font-semibold">
                  Orbit Media - AI-Driven Digital Marketing Agency
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  One Stop Digital Marketing Service powered by AI. Transform your business with comprehensive marketing
                  solutions that deliver real results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl hover:bg-primary/90 transition-colors font-semibold flex items-center justify-center space-x-2">
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-border text-foreground px-8 py-4 rounded-2xl hover:bg-muted transition-colors font-semibold">
                  Contact Us
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card rounded-3xl p-8 shadow-soft-lg border border-border">
                <img
                  src="/modern-digital-marketing-dashboard-with-analytics-.jpg"
                  alt="Digital Marketing Dashboard"
                  className="w-full h-auto rounded-2xl"
                />
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
                className="bg-card border border-border rounded-3xl p-8 hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
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
              <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mx-auto">
                <Zap className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">All-in-One Solution</h3>
              <p className="text-muted-foreground leading-relaxed">
                Everything you need for digital marketing success in one comprehensive package. No more juggling
                multiple tools and vendors.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-secondary rounded-3xl flex items-center justify-center mx-auto">
                <Target className="w-10 h-10 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">AI-Powered Insights</h3>
              <p className="text-muted-foreground leading-relaxed">
                Leverage cutting-edge AI technology for campaign optimization, lead scoring, and predictive analytics
                that drive results.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mx-auto">
                <TrendingUp className="w-10 h-10 text-primary-foreground" />
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
              <div key={index} className="bg-card border border-border rounded-3xl p-8 space-y-6">
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
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Ready to Transform Your Digital Marketing?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of businesses that have already experienced exponential growth with our AI-powered marketing
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl hover:bg-secondary/90 transition-colors font-semibold flex items-center justify-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-2xl hover:bg-primary-foreground/10 transition-colors font-semibold">
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
