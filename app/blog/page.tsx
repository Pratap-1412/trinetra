import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight, TrendingUp, Search, Share2 } from "lucide-react"

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "The Future of AI in Digital Marketing: Trends to Watch in 2025",
    excerpt:
      "Discover how artificial intelligence is revolutionizing digital marketing strategies and what businesses need to know to stay competitive in the evolving landscape.",
    image: "/placeholder.svg?key=blog-featured&height=400&width=800&text=AI+Digital+Marketing",
    author: "Rajesh Sharma",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "AI & Technology",
    featured: true,
  }

  const blogPosts = [
    {
      id: 2,
      title: "WhatsApp Marketing: Complete Guide to Business Growth",
      excerpt:
        "Learn how to leverage WhatsApp's massive user base to drive customer engagement, increase sales, and build lasting relationships with your audience.",
      image: "/placeholder.svg?key=blog1&height=300&width=400&text=WhatsApp+Marketing",
      author: "Priya Patel",
      date: "January 12, 2025",
      readTime: "6 min read",
      category: "WhatsApp Marketing",
    },
    {
      id: 3,
      title: "Social Media ROI: Measuring Success in 2025",
      excerpt:
        "Discover the key metrics and strategies to measure and improve your social media return on investment with actionable insights and real-world examples.",
      image: "/placeholder.svg?key=blog2&height=300&width=400&text=Social+Media+ROI",
      author: "Amit Kumar",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "Social Media",
    },
    {
      id: 4,
      title: "Influencer Marketing Trends: What's Working Now",
      excerpt:
        "Explore the latest influencer marketing strategies that are driving results, from micro-influencers to AI-powered campaign optimization.",
      image: "/placeholder.svg?key=blog3&height=300&width=400&text=Influencer+Marketing",
      author: "Sneha Gupta",
      date: "January 8, 2025",
      readTime: "5 min read",
      category: "Influencer Marketing",
    },
    {
      id: 5,
      title: "SEO in 2025: Beyond Keywords and Backlinks",
      excerpt:
        "Understand how search engine optimization is evolving with AI, user experience signals, and the importance of E-A-T in modern SEO strategies.",
      image: "/placeholder.svg?key=blog4&height=300&width=400&text=SEO+2025",
      author: "Vikram Singh",
      date: "January 5, 2025",
      readTime: "9 min read",
      category: "SEO",
    },
    {
      id: 6,
      title: "Video Marketing: Creating Content That Converts",
      excerpt:
        "Master the art of video marketing with proven strategies for creating engaging content that drives conversions across all digital platforms.",
      image: "/placeholder.svg?key=blog5&height=300&width=400&text=Video+Marketing",
      author: "Anita Reddy",
      date: "January 3, 2025",
      readTime: "6 min read",
      category: "Video Marketing",
    },
    {
      id: 7,
      title: "Political Digital Campaigns: Winning in the Digital Age",
      excerpt:
        "Learn how political campaigns are leveraging digital marketing strategies to reach voters, build support, and win elections in today's connected world.",
      image: "/placeholder.svg?key=blog6&height=300&width=400&text=Political+Campaigns",
      author: "Rajesh Sharma",
      date: "December 30, 2024",
      readTime: "8 min read",
      category: "Political Marketing",
    },
    {
      id: 8,
      title: "Email Marketing Automation: Nurture Leads Like a Pro",
      excerpt:
        "Discover advanced email marketing automation strategies that nurture leads, increase conversions, and build long-term customer relationships.",
      image: "/placeholder.svg?key=blog7&height=300&width=400&text=Email+Automation",
      author: "Priya Patel",
      date: "December 28, 2024",
      readTime: "7 min read",
      category: "Email Marketing",
    },
    {
      id: 9,
      title: "Corporate Branding in the Digital Era",
      excerpt:
        "Build a strong corporate brand identity that resonates with your audience and stands out in the competitive digital marketplace.",
      image: "/placeholder.svg?key=blog8&height=300&width=400&text=Corporate+Branding",
      author: "Sneha Gupta",
      date: "December 25, 2024",
      readTime: "6 min read",
      category: "Branding",
    },
  ]

  const categories = [
    "AI & Technology",
    "WhatsApp Marketing",
    "Social Media",
    "Influencer Marketing",
    "SEO",
    "Video Marketing",
    "Political Marketing",
    "Email Marketing",
    "Branding",
  ]

  const recentPosts = blogPosts.slice(0, 4)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
              Marketing <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert insights, industry trends, and actionable strategies for digital
              marketing success in the AI-powered era.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-secondary" />
                <span>Latest Trends</span>
              </div>
              <div className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-primary" />
                <span>Expert Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <Share2 className="w-5 h-5 text-secondary" />
                <span>Actionable Tips</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Featured Article</h2>
          </div>

          <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-soft-lg hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-balance">{featuredPost.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-muted-foreground" />
                    <span className="text-foreground font-medium">{featuredPost.author}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${featuredPost.id}`}
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl hover:bg-primary/90 transition-colors font-semibold flex items-center space-x-2 w-fit"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="space-y-6 mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Latest Articles</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Discover the latest insights, strategies, and trends in digital marketing.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-card border border-border rounded-3xl overflow-hidden hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="relative">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">{post.excerpt}</p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center space-x-3">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-foreground font-medium">{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${post.id}`}
                        className="block w-full bg-muted text-foreground py-3 rounded-2xl hover:bg-primary hover:text-primary-foreground transition-colors font-medium text-center"
                      >
                        Read More
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <div className="bg-card border border-border rounded-3xl p-6 space-y-6">
                <h3 className="text-xl font-bold text-foreground">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-card border border-border rounded-3xl p-6 space-y-6">
                <h3 className="text-xl font-bold text-foreground">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                      <div className="flex space-x-3">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-xl flex-shrink-0"
                        />
                        <div className="space-y-1 flex-1">
                          <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-primary rounded-3xl p-6 space-y-4 text-center">
                <h3 className="text-xl font-bold text-primary-foreground">Stay Updated</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Get the latest marketing insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-2xl border-0 focus:ring-2 focus:ring-secondary text-foreground"
                  />
                  <button className="w-full bg-secondary text-secondary-foreground py-3 rounded-2xl hover:bg-secondary/90 transition-colors font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Ready to Implement These Strategies?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Let our expert team help you apply these insights to grow your business with proven digital marketing
              strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl hover:bg-secondary/90 transition-colors font-semibold flex items-center justify-center space-x-2">
                <span>Get Started Today</span>
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
