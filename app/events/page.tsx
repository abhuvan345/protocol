"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, ArrowLeft, Calendar, MapPin, Users, Clock, Trophy, Star, Search } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

interface Event {
  id: string
  title: string
  description: string
  longDescription: string
  date: string
  time: string
  location: string
  capacity: number
  registered: number
  category: string
  status: "upcoming" | "ongoing" | "completed"
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  tags: string[]
  organizer: string
  prizes?: string[]
  requirements?: string[]
  agenda?: string[]
  image: string
  featured: boolean
}

const events: Event[] = [
  {
    id: "1",
    title: "React Masterclass Workshop",
    description: "Deep dive into React hooks, context, and advanced patterns",
    longDescription:
      "Join us for an intensive 4-hour workshop covering the most important React concepts. We'll explore hooks, context API, performance optimization, and advanced patterns used in production applications.",
    date: "2024-12-15",
    time: "2:00 PM - 6:00 PM",
    location: "Tech Lab 101",
    capacity: 50,
    registered: 45,
    category: "Workshop",
    status: "upcoming",
    difficulty: "Intermediate",
    tags: ["React", "JavaScript", "Frontend", "Hooks"],
    organizer: "Emma Johnson",
    requirements: ["Basic JavaScript knowledge", "Laptop with Node.js installed", "Code editor (VS Code recommended)"],
    agenda: [
      "Introduction to React Hooks",
      "Context API deep dive",
      "Performance optimization",
      "Advanced patterns",
      "Q&A session",
    ],
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: "2",
    title: "Winter Code Jam 2024",
    description: "48-hour hackathon with amazing prizes and networking opportunities",
    longDescription:
      "Our biggest hackathon of the year! Teams of 2-4 will compete to build innovative solutions. With $5000 in prizes and mentorship from industry professionals.",
    date: "2024-12-22",
    time: "Friday 6:00 PM - Sunday 6:00 PM",
    location: "Main Auditorium",
    capacity: 120,
    registered: 118,
    category: "Hackathon",
    status: "upcoming",
    difficulty: "Advanced",
    tags: ["Hackathon", "Competition", "Innovation", "Teamwork"],
    organizer: "Sarah Chen",
    prizes: ["1st Place: $2000", "2nd Place: $1500", "3rd Place: $1000", "Best UI/UX: $500"],
    requirements: ["Team of 2-4 members", "Laptop and chargers", "Enthusiasm for coding!"],
    agenda: [
      "Opening ceremony",
      "Team formation",
      "Coding begins",
      "Mentor check-ins",
      "Final presentations",
      "Awards ceremony",
    ],
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: "3",
    title: "AI in Web Development",
    description: "Exploring the future of web development with AI tools and automation",
    longDescription:
      "Discover how AI is revolutionizing web development. Learn about AI-powered coding assistants, automated testing, and the future of development workflows.",
    date: "2025-01-05",
    time: "3:00 PM - 4:30 PM",
    location: "Conference Room A",
    capacity: 80,
    registered: 72,
    category: "Tech Talk",
    status: "upcoming",
    difficulty: "Beginner",
    tags: ["AI", "Web Development", "Automation", "Future Tech"],
    organizer: "Alex Rodriguez",
    agenda: ["AI in modern development", "Popular AI tools demo", "Future predictions", "Q&A with industry expert"],
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
  {
    id: "4",
    title: "Open Source Contribution Day",
    description: "Learn how to contribute to open source projects and make your first PR",
    longDescription:
      "Perfect for beginners! Learn Git workflows, find beginner-friendly projects, and make your first contribution to open source.",
    date: "2024-11-28",
    time: "10:00 AM - 4:00 PM",
    location: "Computer Lab 205",
    capacity: 35,
    registered: 35,
    category: "Workshop",
    status: "completed",
    difficulty: "Beginner",
    tags: ["Open Source", "Git", "GitHub", "Contribution"],
    organizer: "David Kim",
    requirements: ["GitHub account", "Basic Git knowledge helpful but not required"],
    agenda: ["Git basics review", "Finding projects", "Making your first PR", "Code review process", "Celebration!"],
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
  {
    id: "5",
    title: "Mobile App Development Bootcamp",
    description: "Two-day intensive bootcamp covering React Native and Flutter",
    longDescription:
      "Comprehensive bootcamp covering both React Native and Flutter. Build real apps and learn deployment strategies.",
    date: "2024-10-15",
    time: "9:00 AM - 5:00 PM (2 days)",
    location: "Innovation Hub",
    capacity: 60,
    registered: 60,
    category: "Bootcamp",
    status: "completed",
    difficulty: "Intermediate",
    tags: ["Mobile", "React Native", "Flutter", "App Development"],
    organizer: "Maya Patel",
    requirements: ["Programming experience", "Mobile device for testing", "Development environment setup"],
    agenda: [
      "Day 1: React Native fundamentals",
      "Day 1: Building your first app",
      "Day 2: Flutter introduction",
      "Day 2: Cross-platform strategies",
      "App deployment",
    ],
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
  {
    id: "6",
    title: "Cybersecurity Awareness Session",
    description: "Understanding modern cybersecurity threats and best practices",
    longDescription:
      "Learn about the latest cybersecurity threats, how to secure your applications, and best practices for developers.",
    date: "2024-09-20",
    time: "2:00 PM - 4:00 PM",
    location: "Lecture Hall B",
    capacity: 100,
    registered: 95,
    category: "Seminar",
    status: "completed",
    difficulty: "Beginner",
    tags: ["Cybersecurity", "Security", "Best Practices", "Awareness"],
    organizer: "James Wilson",
    agenda: ["Current threat landscape", "Secure coding practices", "Tools and resources", "Q&A session"],
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
]

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Workshop", "Hackathon", "Tech Talk", "Bootcamp", "Seminar"]

  const filterEvents = (status: string) => {
    return events.filter((event) => {
      const matchesStatus = event.status === status
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === "All" || event.category === selectedCategory
      return matchesStatus && matchesSearch && matchesCategory
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Workshop: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      Hackathon: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      "Tech Talk": "bg-purple-500/20 text-purple-300 border-purple-500/30",
      Bootcamp: "bg-green-500/20 text-green-300 border-green-500/30",
      Seminar: "bg-red-500/20 text-red-300 border-red-500/30",
    }
    return colors[category as keyof typeof colors] || "bg-gray-500/20 text-gray-300 border-gray-500/30"
  }

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      Beginner: "bg-green-500/20 text-green-300",
      Intermediate: "bg-yellow-500/20 text-yellow-300",
      Advanced: "bg-red-500/20 text-red-300",
    }
    return colors[difficulty as keyof typeof colors] || "bg-gray-500/20 text-gray-300"
  }

  const getStatusColor = (status: string) => {
    const colors = {
      upcoming: "bg-blue-500/20 text-blue-300",
      ongoing: "bg-green-500/20 text-green-300",
      completed: "bg-gray-500/20 text-gray-300",
    }
    return colors[status as keyof typeof colors] || "bg-gray-500/20 text-gray-300"
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

      {/* Events Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Events & Workshops</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join our exciting events, workshops, and hackathons to level up your coding skills
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search events..."
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

        {/* Events Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white/5 border-white/10">
            <TabsTrigger
              value="upcoming"
              className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-300"
            >
              Upcoming ({filterEvents("upcoming").length})
            </TabsTrigger>
            <TabsTrigger
              value="ongoing"
              className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-300"
            >
              Ongoing ({filterEvents("ongoing").length})
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="data-[state=active]:bg-gray-500/20 data-[state=active]:text-gray-300"
            >
              Past Events ({filterEvents("completed").length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterEvents("upcoming").map((event, index) => (
                <Link href={`/events/${event.id}`} key={event.id}>
                  <Card
                    className={`bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/10 transition-all duration-500 cursor-pointer ${
                      event.featured ? "ring-2 ring-blue-500/50" : ""
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: "fadeInUp 0.6s ease-out forwards",
                    }}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                        {event.featured && (
                          <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                            <Star className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className={getDifficultyColor(event.difficulty)}>{event.difficulty}</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white text-lg group-hover:text-blue-400 transition-colors">
                        {event.title}
                      </CardTitle>
                      <p className="text-gray-300 text-sm">{event.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-gray-300 text-sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(event.date).toLocaleDateString()} • {event.time}
                        </div>
                        <div className="flex items-center text-gray-300 text-sm">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-gray-300 text-sm">
                          <Users className="h-4 w-4 mr-2" />
                          {event.registered}/{event.capacity} registered
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {event.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-purple-500/20 text-purple-300 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-gray-400 text-sm">by {event.organizer}</div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ongoing" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterEvents("ongoing").map((event, index) => (
                <Link href={`/events/${event.id}`} key={event.id}>
                  <Card
                    className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/10 transition-all duration-500 ring-2 ring-green-500/50 cursor-pointer"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: "fadeInUp 0.6s ease-out forwards",
                    }}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30 animate-pulse">
                          Live Now
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white text-lg">{event.title}</CardTitle>
                      <p className="text-gray-300 text-sm">{event.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-gray-300 text-sm">
                          <Clock className="h-4 w-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-gray-300 text-sm">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            {filterEvents("ongoing").length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg">No ongoing events at the moment</div>
                <p className="text-gray-500 mt-2">Check back later or browse upcoming events!</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="completed" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterEvents("completed").map((event, index) => (
                <Link href={`/events/${event.id}`} key={event.id}>
                  <Card
                    className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/10 transition-all duration-500 cursor-pointer"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: "fadeInUp 0.6s ease-out forwards",
                    }}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                        <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30">Completed</Badge>
                      </div>
                      {event.prizes && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                            <Trophy className="h-3 w-3 mr-1" />
                            Prizes
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white text-lg">{event.title}</CardTitle>
                      <p className="text-gray-300 text-sm">{event.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-gray-300 text-sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(event.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-gray-300 text-sm">
                          <Users className="h-4 w-4 mr-2" />
                          {event.registered} attended
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {event.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-gray-500/20 text-gray-300 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
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
