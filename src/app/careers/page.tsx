import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Heart,
  Zap,
  Target,
  Award,
  ArrowRight,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers at Trinetra Techverse | Join Our Team - Orbit Media",
  description:
    "Explore exciting career opportunities at Trinetra Techverse. Join our AI-driven digital marketing team and grow your career in marketing, development, and analytics.",
  keywords:
    "careers, jobs, digital marketing jobs, web developer jobs, marketing careers, Trinetra Techverse careers, Orbit Media jobs",
}

export default function CareersPage() {
  const openPositions = [
    {
      id: "digital-marketing-specialist",
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹4-7 LPA",
      description:
        "We're looking for a creative and data-driven Digital Marketing Specialist to join our growing team.",
      skills: ["SEO", "Social Media Marketing", "Content Marketing", "Google Ads", "Analytics"],
    },
    {
      id: "web-developer",
      title: "Full Stack Web Developer",
      department: "Development",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹6-10 LPA",
      description:
        "Join our development team to build cutting-edge web applications for our clients using modern technologies.",
      skills: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
    },
    {
      id: "social-media-manager",
      title: "Social Media Manager",
      department: "Marketing",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "2-3 years",
      salary: "₹3-6 LPA",
      description:
        "Manage and grow social media presence for multiple clients across various platforms with creative campaigns.",
      skills: ["Instagram", "Facebook", "Twitter", "Content Creation", "Community Management"],
    },
    {
      id: "graphic-designer",
      title: "Graphic Designer",
      department: "Creative",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹3-5 LPA",
      description:
        "Create stunning visual content for digital marketing campaigns, social media, and client branding projects.",
      skills: ["Adobe Photoshop", "Illustrator", "Figma", "Video Editing", "UI/UX Design"],
    },
    {
      id: "content-writer",
      title: "Content Writer",
      department: "Content",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "1-2 years",
      salary: "₹2.5-4 LPA",
      description:
        "Craft compelling content for blogs, websites, social media, and marketing campaigns that engage audiences.",
      skills: ["SEO Writing", "Blog Writing", "Copywriting", "Research", "Content Strategy"],
    },
    {
      id: "data-analyst",
      title: "Data Analyst",
      department: "Analytics",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹5-8 LPA",
      description:
        "Analyze marketing data and provide actionable insights to optimize campaigns and drive business growth.",
      skills: ["Google Analytics", "Data Visualization", "SQL", "Python", "Excel", "Power BI"],
    },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear career progression paths with regular performance reviews and promotions.",
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Comprehensive health insurance coverage for you and your family.",
    },
    {
      icon: Zap,
      title: "Learning & Development",
      description: "Access to online courses, workshops, and certifications to enhance your skills.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive and inclusive environment.",
    },
    {
      icon: Target,
      title: "Work-Life Balance",
      description: "Flexible working hours and hybrid work options to maintain healthy balance.",
    },
    {
      icon: Award,
      title: "Performance Bonuses",
      description: "Rewarding performance with quarterly bonuses and annual increments.",
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
              Join Our <span className="text-secondary">Amazing Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Build your career with India's leading AI-driven digital marketing agency. We're always looking for
              talented individuals who are passionate about innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#open-positions"
                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl hover:bg-secondary/90 transition-colors font-semibold flex items-center justify-center space-x-2"
              >
                <span>View Open Positions</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Why Join Trinetra Techverse?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We offer more than just a job. We provide a platform for growth, learning, and making a real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-3xl p-8 hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <benefit.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-muted/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Open Positions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our current job openings and find the perfect role for you.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position) => (
              <Link
                key={position.id}
                href={`/careers/${position.id}`}
                className="block bg-card border border-border rounded-3xl p-8 hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="space-y-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-secondary transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{position.description}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-secondary">
                      <span className="font-semibold">View Details</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="w-4 h-4 text-secondary" />
                      <span>{position.department}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span>{position.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-secondary" />
                      <span>{position.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-secondary" />
                      <span>{position.salary}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future
              opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@trinetra-techverse.com"
                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl hover:bg-secondary/90 transition-colors font-semibold flex items-center justify-center space-x-2"
              >
                <span>Send Your Resume</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
