"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Code2, ArrowLeft, Calendar, Clock, Search, Heart, MessageCircle, Share2, BookOpen } from "lucide-react"
import Link from "next/link"

interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  authorAvatar: string
  publishDate: string
  readTime: string
  category: string
  tags: string[]
  likes: number
  comments: number
  featured: boolean
  image: string
}

const articles: Article[] = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Explore the cutting-edge technologies and frameworks that will shape web development in the coming year.",
    content: "Full article content here...",
    author: "Sarah Chen",
    authorAvatar: "SC",
    publishDate: "December 20, 2024",
    readTime: "8 min read",
    category: "Technology",
    tags: ["Web Development", "Trends", "2025", "JavaScript"],
    likes: 124,
    comments: 18,
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "2",
    title: "Building Scalable React Applications: Best Practices",
    excerpt: "Learn how to structure and optimize React applications for better performance and maintainability.",
    content: "Full article content here...",
    author: "Alex Rodriguez",
    authorAvatar: "AR",
    publishDate: "December 18, 2024",
    readTime: "12 min read",
    category: "Tutorial",
    tags: ["React", "JavaScript", "Performance", "Best Practices"],
    likes: 89,
    comments: 12,
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "3",
    title: "From Beginner to Pro: My Journey in Competitive Programming",
    excerpt: "A personal story about overcoming challenges and achieving success in competitive programming.",
    content: "Full article content here...",
    author: "Emma Johnson",
    authorAvatar: "EJ",
    publishDate: "December 15, 2024",
    readTime: "6 min read",
    category: "Personal",
    tags: ["Competitive Programming", "Journey", "Learning", "Algorithms"],
    likes: 156,
    comments: 24,
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "4",
    title: "Understanding Machine Learning: A Beginner's Guide",
    excerpt: "Demystifying machine learning concepts and providing a roadmap for beginners to get started.",
    content: "Full article content here...",
    author: "David Kim",
    authorAvatar: "DK",
    publishDate: "December 12, 2024",
    readTime: "10 min read",
    category: "Education",
    tags: ["Machine Learning", "AI", "Beginner", "Python"],
    likes: 203,
    comments: 31,
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "5",
    title: "Open Source Contribution: How to Make Your First PR",
    excerpt: "Step-by-step guide to making your first contribution to open source projects.",
    content: "Full article content here...",
    author: "Maya Patel",
    authorAvatar: "MP",
    publishDate: "December 10, 2024",
    readTime: "7 min read",
    category: "Tutorial",
    tags: ["Open Source", "Git", "GitHub", "Contribution"],
    likes: 78,
    comments: 15,
    featured: false,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "6",
    title: "Cybersecurity in Modern Web Applications",
    excerpt: "Essential security practices every web developer should know to protect their applications.",
    content: "Full article content here...",
    author: "James Wilson",
    authorAvatar: "JW",
    publishDate: "December 8, 2024",
    readTime: "9 min read",
    category: "Security",
    tags: ["Cybersecurity", "Web Security", "OWASP", "Best Practices"],
    likes: 145,
    comments: 22,
    featured: true,
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Technology", "Tutorial", "Personal", "Education", "Security"]

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredArticles = filteredArticles.filter((article) => article.featured)
  const regularArticles = filteredArticles.filter((article) => !article.featured)

  const getCategoryColor = (category: string) => {
    const colors = {
      Technology: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      Tutorial: "bg-green-500/20 text-green-300 border-green-500/30",
      Personal: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      Education: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      Security: "bg-red-500/20 text-red-300 border-red-500/30",
    }
    return colors[category as keyof typeof colors] || "bg-gray-500/20 text-gray-300 border-gray-500/30"
  }

  const getAvatarColor = (name: string) => {
    const colors = [
      "from-blue-500 to-purple-600",
      "from-green-500 to-teal-600",
      "from-purple-500 to-pink-600",
      "from-yellow-500 to-orange-600",
      "from-red-500 to-pink-600",
    ]
    return colors[name.length % colors.length]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CodeCraft Club</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Articles Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Tech Articles & Insights</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the latest trends, tutorials, and insights from our community of developers
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search articles, tags, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className={`${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-600"
                    : "border-white/20 text-white hover:bg-white/10 bg-transparent"
                } transition-all duration-300`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <BookOpen className="h-8 w-8 mr-3 text-blue-400" />
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Link href={`/articles/${article.id}`} key={article.id}>
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/10 transition-all duration-500 cursor-pointer">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className={getCategoryColor(article.category)}>{article.category}</Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Featured</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white text-xl group-hover:text-blue-400 transition-colors">
                        {article.title}
                      </CardTitle>
                      <p className="text-gray-300">{article.excerpt}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-8 h-8 bg-gradient-to-r ${getAvatarColor(article.author)} rounded-full flex items-center justify-center text-white font-bold text-sm`}
                          >
                            {article.authorAvatar}
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">{article.author}</div>
                            <div className="text-gray-400 text-xs flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {article.publishDate}
                            </div>
                          </div>
                        </div>
                        <div className="text-gray-400 text-sm flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-4 text-gray-400 text-sm">
                          <div className="flex items-center">
                            <Heart className="h-4 w-4 mr-1" />
                            {article.likes}
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {article.comments}
                          </div>
                        </div>
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Regular Articles */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <Link href={`/articles/${article.id}`} key={article.id}>
                <Card
                  className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/10 transition-all duration-500 cursor-pointer"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: "fadeInUp 0.6s ease-out forwards",
                  }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(article.category)}>{article.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-lg group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </CardTitle>
                    <p className="text-gray-300 text-sm">{article.excerpt}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div
                          className={`w-6 h-6 bg-gradient-to-r ${getAvatarColor(article.author)} rounded-full flex items-center justify-center text-white font-bold text-xs`}
                        >
                          {article.authorAvatar}
                        </div>
                        <div className="text-white text-sm">{article.author}</div>
                      </div>
                      <div className="text-gray-400 text-xs flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-3 text-gray-400 text-sm">
                        <div className="flex items-center">
                          <Heart className="h-3 w-3 mr-1" />
                          {article.likes}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="h-3 w-3 mr-1" />
                          {article.comments}
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-1">
                        <Share2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
