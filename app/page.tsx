import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Code2,
  Users,
  Calendar,
  Trophy,
  Github,
  Linkedin,
  Twitter,
  ChevronRight,
  Star,
  Zap,
  Target,
  BookOpen,
  Coffee,
  Rocket,
} from "lucide-react"
import Link from "next/link"

export default function CodingClubWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Protocol</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                Events
              </Link>
              <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                Gallery
              </Link>
              <Link href="/members" className="text-gray-300 hover:text-white transition-colors">
                Members
              </Link>
              <Link href="/articles" className="text-gray-300 hover:text-white transition-colors">
                Articles
              </Link>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Join Now
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">🚀 Now Accepting New Members</Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Code. Create.{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Collaborate.
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our vibrant community of passionate developers, learn cutting-edge technologies, and build amazing
              projects together. Your coding journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8"
              >
                Join the Club <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 bg-transparent"
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-400">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-400">Workshops</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">12+</div>
              <div className="text-gray-400">Hackathons Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose CodeCraft?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We're more than just a coding club - we're a community that empowers developers at every level
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">Learn Fast</CardTitle>
                <CardDescription className="text-gray-300">
                  Accelerate your learning with hands-on workshops, mentorship, and real-world projects
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Build Network</CardTitle>
                <CardDescription className="text-gray-300">
                  Connect with like-minded developers, industry professionals, and potential collaborators
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="bg-green-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Achieve Goals</CardTitle>
                <CardDescription className="text-gray-300">
                  Turn your ideas into reality with our supportive community and structured learning paths
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Upcoming Events</h2>
            <p className="text-gray-300 text-lg">Join us for exciting workshops, hackathons, and tech talks</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-red-500/20 text-red-300 border-red-500/30">Workshop</Badge>
                  <span className="text-gray-400 text-sm">Dec 15</span>
                </div>
                <CardTitle className="text-white">React Masterclass</CardTitle>
                <CardDescription className="text-gray-300">
                  Deep dive into React hooks, context, and advanced patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Saturday, 2:00 PM - 5:00 PM
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Hackathon</Badge>
                  <span className="text-gray-400 text-sm">Dec 22-23</span>
                </div>
                <CardTitle className="text-white">Winter Code Jam</CardTitle>
                <CardDescription className="text-gray-300">
                  48-hour hackathon with amazing prizes and networking opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-gray-400 text-sm">
                  <Trophy className="h-4 w-4 mr-2" />
                  $5000 in prizes
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Tech Talk</Badge>
                  <span className="text-gray-400 text-sm">Jan 5</span>
                </div>
                <CardTitle className="text-white">AI in Web Development</CardTitle>
                <CardDescription className="text-gray-300">
                  Exploring the future of web development with AI tools and automation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-gray-400 text-sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Guest Speaker: Sarah Chen
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-300 text-lg">Amazing projects built by our talented members</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/10 transition-colors">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Rocket className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white">TaskFlow Pro</CardTitle>
                <CardDescription className="text-gray-300">
                  A collaborative project management tool built with Next.js and Supabase
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                      React
                    </Badge>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                      Node.js
                    </Badge>
                  </div>
                  <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/10 transition-colors">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Coffee className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white">CampusEats</CardTitle>
                <CardDescription className="text-gray-300">
                  Food delivery app for college students with real-time tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                      Flutter
                    </Badge>
                    <Badge variant="secondary" className="bg-orange-500/20 text-orange-300">
                      Firebase
                    </Badge>
                  </div>
                  <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/10 transition-colors">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Star className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white">CodeReview AI</CardTitle>
                <CardDescription className="text-gray-300">
                  AI-powered code review tool that helps developers write better code
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="bg-red-500/20 text-red-300">
                      TensorFlow
                    </Badge>
                  </div>
                  <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Members Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "CodeCraft Club transformed my coding journey. The mentorship and collaborative projects helped me
                  land my dream internship at Google!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    A
                  </div>
                  <div>
                    <div className="text-white font-semibold">Alex Chen</div>
                    <div className="text-gray-400 text-sm">Computer Science, Junior</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "The hackathons and workshops here are incredible. I've learned more in 6 months than I did in my
                  entire first year of college!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    S
                  </div>
                  <div>
                    <div className="text-white font-semibold">Sarah Johnson</div>
                    <div className="text-gray-400 text-sm">Software Engineering, Sophomore</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Amazing community! The senior members are always willing to help, and the collaborative environment
                  makes learning so much fun."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    M
                  </div>
                  <div>
                    <div className="text-white font-semibold">Mike Rodriguez</div>
                    <div className="text-gray-400 text-sm">Data Science, Senior</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Coding Journey?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of passionate developers and take your skills to the next level. Your future in tech starts
              here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Input
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 max-w-sm"
              />
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Join Now - It's Free!
              </Button>
            </div>
            <p className="text-gray-400 text-sm">No spam, ever. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Protocol</span>
              </div>
              <p className="text-gray-400">
                Empowering the next generation of developers through collaboration, learning, and innovation.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="text-gray-400 hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Learning Path
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Code Challenges
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Mentorship
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Career Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                  <Github className="h-5 w-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Protocol. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
