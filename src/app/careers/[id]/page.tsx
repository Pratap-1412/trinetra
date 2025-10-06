import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Briefcase, MapPin, Clock, DollarSign, Users, CheckCircle, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

// This would typically come from a database or CMS
const jobData: Record<
  string,
  {
    title: string
    department: string
    location: string
    type: string
    experience: string
    salary: string
    description: string
    responsibilities: string[]
    requirements: string[]
    skills: string[]
    benefits: string[]
  }
> = {
  "digital-marketing-specialist": {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹4-7 LPA",
    description:
      "We're looking for a creative and data-driven Digital Marketing Specialist to join our growing team. You'll be responsible for developing and executing comprehensive digital marketing strategies for our diverse client portfolio.",
    responsibilities: [
      "Develop and implement digital marketing campaigns across multiple channels",
      "Manage SEO/SEM strategies to improve organic and paid search performance",
      "Create and optimize social media marketing campaigns",
      "Analyze campaign performance and provide actionable insights",
      "Collaborate with content and design teams to create engaging marketing materials",
      "Stay updated with latest digital marketing trends and best practices",
      "Manage client relationships and present campaign results",
    ],
    requirements: [
      "Bachelor's degree in Marketing, Business, or related field",
      "2-4 years of experience in digital marketing",
      "Proven track record of successful digital marketing campaigns",
      "Strong understanding of SEO, SEM, and social media marketing",
      "Experience with Google Analytics, Google Ads, and social media platforms",
      "Excellent analytical and problem-solving skills",
      "Strong communication and presentation skills",
    ],
    skills: ["SEO", "Social Media Marketing", "Content Marketing", "Google Ads", "Analytics", "Email Marketing"],
    benefits: [
      "Competitive salary with performance bonuses",
      "Health insurance for you and your family",
      "Professional development opportunities",
      "Flexible working hours",
      "Collaborative work environment",
    ],
  },
  "web-developer": {
    title: "Full Stack Web Developer",
    department: "Development",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹6-10 LPA",
    description:
      "Join our development team to build cutting-edge web applications for our clients using modern technologies. You'll work on diverse projects ranging from corporate websites to complex web applications.",
    responsibilities: [
      "Design and develop responsive web applications using React and Next.js",
      "Build and maintain RESTful APIs using Node.js",
      "Implement database solutions using MongoDB and PostgreSQL",
      "Write clean, maintainable, and well-documented code",
      "Collaborate with designers to implement pixel-perfect UI/UX",
      "Optimize applications for maximum speed and scalability",
      "Participate in code reviews and mentor junior developers",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3-5 years of professional web development experience",
      "Strong proficiency in React, Next.js, and TypeScript",
      "Experience with Node.js and Express.js",
      "Knowledge of database design and management",
      "Understanding of version control systems (Git)",
      "Excellent problem-solving and debugging skills",
    ],
    skills: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Git", "REST APIs"],
    benefits: [
      "Competitive salary package",
      "Latest technology stack and tools",
      "Learning and development budget",
      "Hybrid work model",
      "Team outings and events",
    ],
  },
  "social-media-manager": {
    title: "Social Media Manager",
    department: "Marketing",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "2-3 years",
    salary: "₹3-6 LPA",
    description:
      "Manage and grow social media presence for multiple clients across various platforms with creative campaigns. You'll be the voice of our clients on social media, creating engaging content and building communities.",
    responsibilities: [
      "Develop and execute social media strategies for multiple clients",
      "Create engaging content for Instagram, Facebook, Twitter, and LinkedIn",
      "Manage social media calendars and posting schedules",
      "Monitor social media trends and competitor activities",
      "Engage with followers and build online communities",
      "Analyze social media metrics and prepare performance reports",
      "Collaborate with content creators and designers",
    ],
    requirements: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "2-3 years of social media management experience",
      "Deep understanding of major social media platforms",
      "Experience with social media management tools",
      "Strong copywriting and content creation skills",
      "Creative mindset with attention to detail",
      "Ability to manage multiple client accounts simultaneously",
    ],
    skills: [
      "Instagram",
      "Facebook",
      "Twitter",
      "LinkedIn",
      "Content Creation",
      "Community Management",
      "Canva",
      "Analytics",
    ],
    benefits: [
      "Competitive compensation",
      "Creative freedom in campaigns",
      "Access to premium social media tools",
      "Flexible work arrangements",
      "Performance incentives",
    ],
  },
  "graphic-designer": {
    title: "Graphic Designer",
    department: "Creative",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹3-5 LPA",
    description:
      "Create stunning visual content for digital marketing campaigns, social media, and client branding projects. You'll bring creative ideas to life through compelling designs that engage and inspire.",
    responsibilities: [
      "Design graphics for social media, websites, and marketing campaigns",
      "Create brand identities including logos, color schemes, and style guides",
      "Develop marketing collateral such as brochures, flyers, and presentations",
      "Edit and produce video content for social media and advertisements",
      "Collaborate with marketing team to understand project requirements",
      "Maintain brand consistency across all design projects",
      "Stay updated with design trends and best practices",
    ],
    requirements: [
      "Bachelor's degree in Graphic Design or related field",
      "1-3 years of professional design experience",
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, After Effects)",
      "Experience with Figma or similar design tools",
      "Strong portfolio showcasing diverse design work",
      "Understanding of typography, color theory, and layout principles",
      "Ability to work on multiple projects with tight deadlines",
    ],
    skills: ["Adobe Photoshop", "Illustrator", "Figma", "Video Editing", "UI/UX Design", "After Effects", "Branding"],
    benefits: [
      "Creative work environment",
      "Latest design software and tools",
      "Portfolio building opportunities",
      "Skill development workshops",
      "Flexible hours",
    ],
  },
  "content-writer": {
    title: "Content Writer",
    department: "Content",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "1-2 years",
    salary: "₹2.5-4 LPA",
    description:
      "Craft compelling content for blogs, websites, social media, and marketing campaigns that engage audiences. You'll be responsible for creating content that drives traffic, engagement, and conversions.",
    responsibilities: [
      "Write SEO-optimized blog posts and website content",
      "Create engaging social media copy and captions",
      "Develop email marketing campaigns and newsletters",
      "Write product descriptions and marketing materials",
      "Conduct research on industry-related topics",
      "Proofread and edit content for clarity and accuracy",
      "Collaborate with marketing team to align content with strategy",
    ],
    requirements: [
      "Bachelor's degree in English, Journalism, or related field",
      "1-2 years of professional writing experience",
      "Excellent writing, editing, and proofreading skills",
      "Understanding of SEO best practices",
      "Ability to write in various tones and styles",
      "Strong research and analytical skills",
      "Attention to detail and ability to meet deadlines",
    ],
    skills: ["SEO Writing", "Blog Writing", "Copywriting", "Research", "Content Strategy", "Editing", "WordPress"],
    benefits: [
      "Competitive salary",
      "Diverse writing opportunities",
      "Professional growth",
      "Flexible work environment",
      "Learning resources",
    ],
  },
  "data-analyst": {
    title: "Data Analyst",
    department: "Analytics",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹5-8 LPA",
    description:
      "Analyze marketing data and provide actionable insights to optimize campaigns and drive business growth. You'll work with large datasets to uncover trends and opportunities for our clients.",
    responsibilities: [
      "Analyze marketing campaign performance across multiple channels",
      "Create dashboards and reports using data visualization tools",
      "Identify trends, patterns, and insights from complex datasets",
      "Develop predictive models to forecast campaign outcomes",
      "Collaborate with marketing teams to optimize strategies",
      "Present findings and recommendations to clients and stakeholders",
      "Maintain data quality and integrity across systems",
    ],
    requirements: [
      "Bachelor's degree in Statistics, Mathematics, or related field",
      "2-4 years of experience in data analysis",
      "Proficiency in Google Analytics and data visualization tools",
      "Strong SQL skills for data extraction and manipulation",
      "Experience with Python or R for statistical analysis",
      "Excellent analytical and problem-solving abilities",
      "Strong communication skills to present complex data insights",
    ],
    skills: [
      "Google Analytics",
      "Data Visualization",
      "SQL",
      "Python",
      "Excel",
      "Power BI",
      "Tableau",
      "Statistical Analysis",
    ],
    benefits: [
      "Competitive compensation package",
      "Access to premium analytics tools",
      "Data science training opportunities",
      "Hybrid work model",
      "Performance bonuses",
    ],
  },
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const job = jobData[params.id]

  if (!job) {
    return {
      title: "Job Not Found | Trinetra Techverse Careers",
      description: "The job position you're looking for could not be found.",
    }
  }

  return {
    title: `${job.title} - Careers at Trinetra Techverse | Orbit Media`,
    description: `${job.description} Apply now for ${job.title} position at Trinetra Techverse. ${job.experience} experience required. Location: ${job.location}.`,
    keywords: `${job.title}, ${job.department} jobs, ${job.skills.join(", ")}, careers at Trinetra Techverse`,
  }
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = jobData[params.id]

  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Job Not Found</h1>
          <p className="text-muted-foreground mb-8">The job position you're looking for could not be found.</p>
          <Link
            href="/careers"
            className="inline-flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Careers</span>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Job Header */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/careers"
            className="inline-flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to All Positions</span>
          </Link>

          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">{job.title}</h1>

            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-secondary" />
                <span>{job.department}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-secondary" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-secondary" />
                <span>{job.experience}</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-secondary" />
                <span>{job.salary}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">About the Role</h2>
                <p className="text-muted-foreground leading-relaxed">{job.description}</p>
              </div>

              {/* Responsibilities */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">What We Offer</h2>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar - Apply Card */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-3xl p-8 sticky top-24 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Ready to Apply?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Join our team and be part of something amazing. We're excited to hear from you!
                </p>

                <div className="space-y-4">
                  <a
                    href={`mailto:careers@trinetra-techverse.com?subject=Application for ${job.title}&body=Hi, I would like to apply for the ${job.title} position.`}
                    className="w-full bg-secondary text-secondary-foreground px-6 py-4 rounded-2xl hover:bg-secondary/90 transition-colors font-semibold flex items-center justify-center space-x-2"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>

                  <Link
                    href="/careers"
                    className="w-full border border-border text-foreground px-6 py-4 rounded-2xl hover:bg-muted transition-colors font-semibold flex items-center justify-center"
                  >
                    View Other Positions
                  </Link>
                </div>

                <div className="pt-6 border-t border-border space-y-3">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Questions?</strong>
                    <br />
                    Email us at careers@trinetra-techverse.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
