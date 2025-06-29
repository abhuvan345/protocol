"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import {
  Code2,
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  Trophy,
  Star,
  CheckCircle,
  User,
  Target,
  BookOpen,
  Share2,
  Heart,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

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
  organizerAvatar: string
  prizes?: string[]
  requirements?: string[]
  agenda?: string[]
  image: string
  featured: boolean
  likes: number
  comments: number
  shares: number
}

// Mock data - in real app this would come from API
const events: Event[] = [
  {
    id: "1",
    title: "React Masterclass Workshop",
    description: "Deep dive into React hooks, context, and advanced patterns",
    longDescription: `Join us for an intensive 4-hour workshop covering the most important React concepts that every modern developer should know. 

This comprehensive session will take you through advanced React patterns, performance optimization techniques, and real-world application development strategies.

We'll start with a deep dive into React Hooks, exploring not just the basics of useState and useEffect, but also advanced hooks like useReducer, useContext, and custom hooks. You'll learn how to build reusable logic and manage complex state effectively.

The Context API section will cover when and how to use React Context for state management, avoiding prop drilling, and creating scalable application architectures. We'll also discuss performance considerations and best practices.

Finally, we'll explore advanced patterns including render props, higher-order components, compound components, and the latest React features. You'll leave with practical knowledge you can immediately apply to your projects.`,
    date: "2024-12-15",
    time: "2:00 PM - 6:00 PM",
    location: "Tech Lab 101, Computer Science Building",
    capacity: 50,
    registered: 45,
    category: "Workshop",
    status: "upcoming",
    difficulty: "Intermediate",
    tags: ["React", "JavaScript", "Frontend", "Hooks", "Context API", "Performance"],
    organizer: "Emma Johnson",
    organizerAvatar: "EJ",
    requirements: [
      "Basic JavaScript knowledge (ES6+ features)",
      "Laptop with Node.js installed (v16 or higher)",
      "Code editor (VS Code recommended)",
      "Git installed for cloning workshop materials",
      "Basic understanding of HTML and CSS",
    ],
    agenda: [
      "Welcome & Setup (30 min)",
      "React Hooks Deep Dive (90 min)",
      "Break (15 min)",
      "Context API & State Management (90 min)",
      "Break (15 min)",
      "Advanced Patterns & Performance (75 min)",
      "Q&A Session & Wrap-up (15 min)",
    ],
    image: "/placeholder.svg?height=400&width=800",
    featured: true,
    likes: 89,
    comments: 23,
    shares: 12,
  },
  {
    id: "2",
    title: "Winter Code Jam 2024",
    description: "48-hour hackathon with amazing prizes and networking opportunities",
    longDescription: `Get ready for our biggest hackathon of the year! The Winter Code Jam 2024 brings together the most talented developers, designers, and innovators for an epic 48-hour coding marathon.

This isn't just a competition – it's a celebration of creativity, innovation, and the power of collaborative coding. Teams of 2-4 members will work together to build groundbreaking solutions that could change the world.

With $5000 in total prizes and mentorship from industry professionals at companies like Google, Microsoft, and Meta, this is your chance to showcase your skills, learn from the best, and potentially launch your next big idea.

The theme this year is "Technology for Good" – we're looking for solutions that make a positive impact on society, whether that's through accessibility, sustainability, education, or social justice.

Throughout the event, you'll have access to workshops, mentoring sessions, and networking opportunities with industry leaders. Plus, we'll provide all meals, snacks, and plenty of caffeine to keep you going!`,
    date: "2024-12-22",
    time: "Friday 6:00 PM - Sunday 6:00 PM",
    location: "Main Auditorium & Innovation Labs",
    capacity: 120,
    registered: 118,
    category: "Hackathon",
    status: "upcoming",
    difficulty: "Advanced",
    tags: ["Hackathon", "Competition", "Innovation", "Teamwork", "Prizes", "Networking"],
    organizer: "Sarah Chen",
    organizerAvatar: "SC",
    prizes: [
      "🥇 1st Place: $2000 + Internship Opportunities",
      "🥈 2nd Place: $1500 + Tech Swag Package",
      "🥉 3rd Place: $1000 + Premium Course Access",
      "🎨 Best UI/UX: $500 + Design Tools License",
      "🌱 Most Innovative: $500 + Startup Mentorship",
      "👥 People's Choice: $300 + Community Recognition",
    ],
    requirements: [
      "Team of 2-4 members (can form teams at event)",
      "Laptop and chargers for all team members",
      "Valid student ID or proof of enrollment",
      "Enthusiasm for coding and problem-solving!",
      "Willingness to learn and collaborate",
    ],
    agenda: [
      "Friday 6:00 PM - Opening Ceremony & Team Formation",
      "Friday 8:00 PM - Coding Begins!",
      "Saturday 9:00 AM - Breakfast & Morning Check-in",
      "Saturday 12:00 PM - Lunch & Mentor Sessions",
      "Saturday 6:00 PM - Dinner & Networking",
      "Sunday 9:00 AM - Final Sprint & Breakfast",
      "Sunday 2:00 PM - Project Submissions Due",
      "Sunday 3:00 PM - Presentations Begin",
      "Sunday 5:00 PM - Awards Ceremony",
    ],
    image: "/placeholder.svg?height=400&width=800",
    featured: true,
    likes: 156,
    comments: 45,
    shares: 28,
  },
]

export default function EventDetailPage() {
  const params = useParams()
  const eventId = params.id as string

  const event = events.find((e) => e.id === eventId)

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Event Not Found</h1>
          <Link href="/events">
            <Button>Back to Events</Button>
          </Link>
        </div>
      </div>
    )
  }

  const registrationPercentage = (event.registered / event.capacity) * 100

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
            <Link href="/events">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Events
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative mb-8 rounded-2xl overflow-hidden">
          <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-64 md:h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
              <Badge className={getDifficultyColor(event.difficulty)}>{event.difficulty}</Badge>
              {event.featured && (
                <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{event.title}</h1>
            <p className="text-gray-200 text-lg">{event.description}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  About This Event
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-300 whitespace-pre-line leading-relaxed">{event.longDescription}</div>
              </CardContent>
            </Card>

            {/* Agenda */}
            {event.agenda && (
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Event Agenda
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {event.agenda.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="bg-blue-500/20 rounded-full p-1 mt-1">
                          <CheckCircle className="h-3 w-3 text-blue-400" />
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Requirements */}
            {event.requirements && (
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {event.requirements.map((req, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="bg-green-500/20 rounded-full p-1 mt-1">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                        </div>
                        <span className="text-gray-300">{req}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Prizes */}
            {event.prizes && (
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Trophy className="h-5 w-5 mr-2" />
                    Prizes & Awards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {event.prizes.map((prize, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20"
                      >
                        <Trophy className="h-4 w-4 text-yellow-400" />
                        <span className="text-gray-200">{prize}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Tags */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Topics Covered</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-purple-500/20 text-purple-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Registration Card */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Calendar className="h-4 w-4 mr-3" />
                  <div>
                    <div className="font-medium">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="text-sm text-gray-400">{event.time}</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-300">
                  <MapPin className="h-4 w-4 mr-3" />
                  <span>{event.location}</span>
                </div>

                <div className="flex items-center text-gray-300">
                  <User className="h-4 w-4 mr-3" />
                  <span>Organized by {event.organizer}</span>
                </div>

                <Separator className="bg-white/10" />

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Registration</span>
                    <span className="text-white">
                      {event.registered}/{event.capacity}
                    </span>
                  </div>
                  <Progress value={registrationPercentage} className="h-2" />
                  <div className="text-xs text-gray-400 mt-1">{event.capacity - event.registered} spots remaining</div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  {event.status === "upcoming"
                    ? "Register Now"
                    : event.status === "ongoing"
                      ? "Join Event"
                      : "View Summary"}
                </Button>
              </CardContent>
            </Card>

            {/* Organizer Card */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Organizer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {event.organizerAvatar}
                  </div>
                  <div>
                    <div className="text-white font-medium">{event.organizer}</div>
                    <div className="text-gray-400 text-sm">Event Coordinator</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Stats */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex justify-between items-center">
                  <Button variant="ghost" className="text-gray-400 hover:text-white flex items-center space-x-2">
                    <Heart className="h-4 w-4" />
                    <span>{event.likes}</span>
                  </Button>
                  <Button variant="ghost" className="text-gray-400 hover:text-white flex items-center space-x-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>{event.comments}</span>
                  </Button>
                  <Button variant="ghost" className="text-gray-400 hover:text-white flex items-center space-x-2">
                    <Share2 className="h-4 w-4" />
                    <span>{event.shares}</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
