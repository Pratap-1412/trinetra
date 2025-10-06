import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import type { Metadata } from "next"
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
  Mail,
  Palette,
  PenTool,
  ArrowRight,
  CheckCircle,
  Plus,
  Code,
  Megaphone,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services - Digital Marketing, Web Development & Political Campaigns | Trinetra Techverse",
  description:
    "Comprehensive digital marketing services including political campaigning, website development, SEO, social media marketing, WhatsApp marketing, and AI-driven analytics. One-stop solution for all your marketing needs.",
  keywords:
    "digital marketing services, political campaigning, website development, web design, SEO services, social media marketing, WhatsApp marketing, influencer marketing, video marketing, PPC advertising, AI analytics, corporate branding",
}

export default function ServicesPage() {
  const mainServices = [
    {
      id: "political",
      icon: Vote,
      title: "Political Campaigning",
      description: "Strategic political marketing campaigns that win elections and build strong voter connections.",
      features: [
        "WhatsApp group management and voter outreach",
        "Social media campaign strategies",
        "Digital poster and banner design",
        "Targeted voter messaging and segmentation",
        "Opposition research and analysis",
        "Crisis communication management",
      ],
      benefits: [
        "Wider voter reach across demographics",
        "Targeted messaging for different voter groups",
        "Real-time campaign monitoring and adjustments",
        "Cost-effective campaigning compared to traditional methods",
      ],
    },
    {
      id: "digital-marketing",
      icon: Megaphone,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies that drive traffic, engagement, and conversions across all channels.",
      features: [
        "Multi-channel marketing campaigns",
        "Content marketing and strategy",
        "Email marketing automation",
        "Marketing funnel optimization",
        "Conversion rate optimization (CRO)",
        "Marketing automation and workflows",
      ],
      benefits: [
        "Increased brand visibility and awareness",
        "Higher conversion rates and ROI",
        "Data-driven marketing decisions",
        "Scalable marketing solutions",
      ],
    },
    {
      id: "web-development",
      icon: Code,
      title: "Website Development",
      description:
        "Custom website development with modern technologies, responsive design, and seamless user experiences.",
      features: [
        "Custom website design and development",
        "Responsive and mobile-first design",
        "E-commerce website development",
        "Content Management Systems (CMS)",
        "Website maintenance and support",
        "Performance optimization and security",
      ],
      benefits: [
        "Professional online presence",
        "Mobile-friendly responsive design",
        "Fast loading and optimized performance",
        "Secure and scalable architecture",
      ],
    },
    {
      id: "whatsapp",
      icon: MessageSquare,
      title: "WhatsApp Marketing",
      description: "Reach your customers directly with powerful WhatsApp marketing solutions.",
      features: [
        "Bulk messaging campaigns",
        "Automated chatbots",
        "WhatsApp Business API integration",
        "Group management and broadcasting",
        "Message scheduling and automation",
        "Customer support integration",
      ],
      benefits: [
        "98% open rate guarantee",
        "Direct customer communication",
        "Cost-effective marketing",
        "Real-time customer engagement",
      ],
    },
    {
      id: "social-media",
      icon: Share2,
      title: "Social Media Marketing",
      description: "Comprehensive social media strategies across all major platforms.",
      features: [
        "Instagram marketing and growth",
        "Facebook advertising campaigns",
        "Twitter engagement strategies",
        "LinkedIn B2B marketing",
        "Content creation and curation",
        "Community management",
      ],
      benefits: [
        "Increased brand awareness",
        "Higher engagement rates",
        "Targeted audience reach",
        "Improved brand loyalty",
      ],
    },
    {
      id: "influencer",
      icon: Users,
      title: "Influencer Marketing",
      description: "Connect with the right influencers to amplify your brand message.",
      features: [
        "Micro-influencer partnerships",
        "Macro-influencer collaborations",
        "Campaign strategy development",
        "Performance tracking and analytics",
        "Content approval workflows",
        "ROI measurement and reporting",
      ],
      benefits: [
        "Authentic brand promotion",
        "Expanded reach and visibility",
        "Higher conversion rates",
        "Trust-building with audiences",
      ],
    },
    {
      id: "video",
      icon: Video,
      title: "Video Marketing",
      description: "Engaging video content that captures attention and drives action.",
      features: [
        "YouTube advertising campaigns",
        "Motion graphics and animations",
        "Explainer video production",
        "Social media video content",
        "Video SEO optimization",
        "Live streaming support",
      ],
      benefits: [
        "Higher engagement rates",
        "Better message retention",
        "Improved conversion rates",
        "Enhanced brand storytelling",
      ],
    },
    {
      id: "seo",
      icon: Search,
      title: "SEO & Website Marketing",
      description: "Improve your online visibility and drive organic traffic to your website.",
      features: [
        "Keyword research and optimization",
        "On-page SEO implementation",
        "Technical SEO audits",
        "Content marketing strategies",
        "Link building campaigns",
        "Local SEO optimization",
      ],
      benefits: [
        "Higher search rankings",
        "Increased organic traffic",
        "Better user experience",
        "Long-term sustainable growth",
      ],
    },
    {
      id: "branding",
      icon: Building2,
      title: "Corporate Branding",
      description: "Build a strong corporate identity that resonates with your audience.",
      features: [
        "Logo design and brand identity",
        "Corporate profile creation",
        "Professional brochure design",
        "Brand guideline development",
        "Marketing collateral design",
        "Brand positioning strategies",
      ],
      benefits: [
        "Professional brand image",
        "Consistent brand messaging",
        "Enhanced credibility",
        "Competitive differentiation",
      ],
    },
    {
      id: "events",
      icon: Calendar,
      title: "Event Marketing",
      description: "Maximize attendance and engagement for your events.",
      features: [
        "Webinar promotion campaigns",
        "Event landing page creation",
        "Social media event marketing",
        "Email marketing campaigns",
        "Registration management",
        "Post-event follow-up strategies",
      ],
      benefits: [
        "Higher event attendance",
        "Better audience engagement",
        "Increased brand exposure",
        "Lead generation opportunities",
      ],
    },
    {
      id: "ppc",
      icon: MousePointer,
      title: "Paid Ads (PPC)",
      description: "Targeted advertising campaigns that deliver measurable results.",
      features: [
        "Google Ads management",
        "Meta Ads (Facebook & Instagram)",
        "YouTube advertising campaigns",
        "LinkedIn advertising",
        "Campaign optimization",
        "A/B testing and analysis",
      ],
      benefits: [
        "Immediate traffic generation",
        "Precise audience targeting",
        "Measurable ROI",
        "Scalable advertising solutions",
      ],
    },
    {
      id: "analytics",
      icon: BarChart3,
      title: "AI-Driven Analytics",
      description: "Advanced analytics and insights powered by artificial intelligence.",
      features: [
        "Campaign performance tracking",
        "Lead scoring and qualification",
        "Customer behavior analysis",
        "Predictive analytics",
        "Custom dashboard creation",
        "Automated reporting",
      ],
      benefits: [
        "Data-driven decision making",
        "Improved campaign performance",
        "Better customer insights",
        "Optimized marketing spend",
      ],
    },
  ]

  const additionalServices = [
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Automated email campaigns that nurture leads and drive conversions.",
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      description: "Strategic content creation that educates, engages, and converts your audience.",
    },
    {
      icon: Palette,
      title: "Graphic Design & Video Editing",
      description: "Professional design services for all your marketing materials and video content.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
              Our <span className="text-secondary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital marketing solutions including political campaigning, website development, and
              AI-powered analytics designed to grow your business and win campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                          <service.icon className="w-8 h-8 text-secondary" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{service.title}</h2>
                      </div>
                      <p className="text-xl text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-4">Key Features:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-4">Benefits:</h3>
                        <div className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center space-x-3">
                              <Plus className="w-4 h-4 text-secondary flex-shrink-0" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl hover:bg-secondary/90 transition-colors font-semibold flex items-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="bg-card rounded-3xl p-8 shadow-soft-lg border border-border hover:border-secondary/50 transition-all duration-300">
                      <img
                        src={`/.jpg?height=400&width=600&query=${service.title.replace(/ /g, "+")}`}
                        alt={service.title}
                        className="w-full h-auto rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Expand your marketing capabilities with our additional specialized services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-3xl p-8 hover:shadow-soft-lg hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1 group text-center"
              >
                <div className="space-y-6">
                  <div className="w-20 h-20 bg-secondary/10 rounded-3xl flex items-center justify-center mx-auto group-hover:bg-secondary/20 transition-colors">
                    <service.icon className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <button className="text-secondary hover:text-secondary/80 transition-colors font-semibold flex items-center space-x-2 mx-auto">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Choose the services that best fit your business needs, or let us create a custom package for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl hover:bg-secondary/90 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-lg">
                <span>Contact Us Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-2xl hover:bg-primary-foreground hover:text-primary transition-all duration-300 font-semibold">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
