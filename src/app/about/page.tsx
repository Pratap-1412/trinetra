import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Target, Eye, Lightbulb, Shield, TrendingUp, Calendar } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly explore new technologies and strategies to stay ahead of the curve and deliver cutting-edge solutions.",
    },
    {
      icon: Shield,
      title: "Transparency",
      description:
        "We believe in honest communication, clear reporting, and building trust through complete transparency in all our processes.",
    },
    {
      icon: TrendingUp,
      title: "Results",
      description:
        "Every strategy we implement is focused on delivering measurable results that drive real business growth and success.",
    },
  ]

  const teamMembers = [
    {
      name: "Rajesh Sharma",
      role: "Founder & CEO",
      image: "/placeholder.svg?key=team1&height=300&width=300&text=Rajesh+Sharma",
      description:
        "15+ years of experience in digital marketing and technology. Visionary leader driving innovation in AI-powered marketing solutions.",
    },
    {
      name: "Priya Patel",
      role: "Head of Strategy",
      image: "/placeholder.svg?key=team2&height=300&width=300&text=Priya+Patel",
      description:
        "Strategic marketing expert with deep expertise in campaign planning, brand positioning, and market analysis.",
    },
    {
      name: "Amit Kumar",
      role: "Technical Director",
      image: "/placeholder.svg?key=team3&height=300&width=300&text=Amit+Kumar",
      description:
        "AI and technology specialist leading our technical innovations and ensuring cutting-edge solutions for our clients.",
    },
    {
      name: "Sneha Gupta",
      role: "Creative Director",
      image: "/placeholder.svg?key=team4&height=300&width=300&text=Sneha+Gupta",
      description:
        "Creative visionary with expertise in brand design, content creation, and visual storytelling across all digital platforms.",
    },
    {
      name: "Vikram Singh",
      role: "Client Success Manager",
      image: "/placeholder.svg?key=team5&height=300&width=300&text=Vikram+Singh",
      description:
        "Dedicated to ensuring client satisfaction and success through personalized service and strategic account management.",
    },
    {
      name: "Anita Reddy",
      role: "Data Analytics Lead",
      image: "/placeholder.svg?key=team6&height=300&width=300&text=Anita+Reddy",
      description:
        "Data science expert specializing in AI-driven analytics, performance optimization, and predictive marketing insights.",
    },
  ]

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description:
        "Trinetra Techverse was established with a vision to revolutionize digital marketing through technology.",
    },
    {
      year: "2021",
      title: "Orbit Media Launch",
      description: "Launched our AI-driven digital marketing division, focusing on comprehensive marketing solutions.",
    },
    {
      year: "2022",
      title: "100+ Clients",
      description: "Reached our first major milestone of serving over 100 satisfied clients across various industries.",
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Fully integrated AI-powered analytics and automation into all our marketing services.",
    },
    {
      year: "2024",
      title: "Market Leader",
      description: "Established ourselves as a leading AI-driven digital marketing agency in the region.",
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Expanding our services globally while maintaining our commitment to personalized client service.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                  About <span className="text-primary">Trinetra Techverse</span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-secondary font-semibold">
                  Powering Digital Success Through Innovation
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are a forward-thinking technology company dedicated to transforming businesses through innovative
                  digital marketing solutions. Our sub-brand, Orbit Media, specializes in AI-driven marketing strategies
                  that deliver exceptional results.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card rounded-3xl p-8 shadow-soft-lg border border-border">
                <img
                  src="/placeholder.svg?key=about-hero&height=400&width=600&text=About+Us+Hero"
                  alt="About Trinetra Techverse"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Trinetra Techverse Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded with a vision to bridge the gap between technology and marketing, Trinetra Techverse has
                  evolved into a comprehensive digital solutions provider. We understand that in today's digital
                  landscape, businesses need more than just traditional marketing approaches.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our parent company focuses on developing innovative technology solutions that empower businesses to
                  thrive in the digital age. We combine cutting-edge technology with deep marketing expertise to create
                  solutions that are not just effective, but transformative.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">200+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">24/7</div>
                  <div className="text-muted-foreground">Support Available</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg?key=company-overview&height=500&width=600&text=Company+Overview"
                alt="Company Overview"
                className="w-full h-auto rounded-3xl shadow-soft-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Orbit Media Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Orbit Media Vision & Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our specialized digital marketing division focused on delivering AI-powered solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card border border-border rounded-3xl p-8 space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the global leader in AI-driven digital marketing solutions, empowering businesses of all sizes
                to achieve unprecedented growth through innovative technology and strategic marketing excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision a future where every business can access enterprise-level marketing capabilities through our
                comprehensive, AI-powered platform.
              </p>
            </div>

            <div className="bg-card border border-border rounded-3xl p-8 space-y-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To simplify digital marketing through AI-powered solutions that eliminate the complexity of managing
                multiple tools and vendors. We provide comprehensive, integrated marketing services that deliver
                measurable results and exceptional ROI.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to democratize advanced marketing technology, making it accessible and affordable for
                businesses at every stage of their growth journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-3xl p-8 text-center space-y-6 hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The talented professionals behind our success, dedicated to delivering exceptional results for our
              clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-3xl p-8 text-center space-y-6 hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/10"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-secondary font-semibold">{member.role}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Key milestones in our growth and evolution as a leading digital marketing agency.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-card border border-border rounded-3xl p-6 space-y-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Join our growing family of satisfied clients and experience the difference our AI-powered marketing
              solutions can make for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl hover:bg-secondary/90 transition-colors font-semibold">
                Get In Touch
              </button>
              <button className="border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-2xl hover:bg-primary-foreground/10 transition-colors font-semibold">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
