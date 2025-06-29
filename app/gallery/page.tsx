"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Code2, ChevronLeft, ChevronRight, Calendar, Users, MapPin, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Event {
  id: string
  title: string
  date: string
  location: string
  attendees: number
  category: string
  description: string
  images: string[]
}

const events: Event[] = [
  {
    id: "1",
    title: "React Masterclass Workshop",
    date: "December 15, 2024",
    location: "Tech Lab 101",
    attendees: 45,
    category: "Workshop",
    description:
      "An intensive workshop covering React hooks, context, and advanced patterns with hands-on coding exercises.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "2",
    title: "Winter Code Jam 2024",
    date: "December 22-23, 2024",
    location: "Main Auditorium",
    attendees: 120,
    category: "Hackathon",
    description: "48-hour hackathon with amazing prizes, networking opportunities, and innovative project showcases.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "3",
    title: "AI in Web Development",
    date: "January 5, 2025",
    location: "Conference Room A",
    attendees: 80,
    category: "Tech Talk",
    description: "Exploring the future of web development with AI tools, automation, and machine learning integration.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "4",
    title: "Open Source Contribution Day",
    date: "November 28, 2024",
    location: "Computer Lab 205",
    attendees: 35,
    category: "Workshop",
    description: "Learn how to contribute to open source projects, understand Git workflows, and make your first PR.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "5",
    title: "Mobile App Development Bootcamp",
    date: "October 15-16, 2024",
    location: "Innovation Hub",
    attendees: 60,
    category: "Bootcamp",
    description: "Two-day intensive bootcamp covering React Native and Flutter development with real-world projects.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "6",
    title: "Cybersecurity Awareness Session",
    date: "September 20, 2024",
    location: "Lecture Hall B",
    attendees: 95,
    category: "Seminar",
    description: "Understanding modern cybersecurity threats, best practices, and how to secure your applications.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
]

export default function GalleryPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [filter, setFilter] = useState("All")

  const categories = ["All", "Workshop", "Hackathon", "Tech Talk", "Bootcamp", "Seminar"]
  const filteredEvents = filter === "All" ? events : events.filter((event) => event.category === filter)

  const nextImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedEvent.images.length)
    }
  }

  const prevImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedEvent.images.length) % selectedEvent.images.length)
    }
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

      {/* Gallery Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Event Gallery</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Relive the amazing moments from our workshops, hackathons, and tech events
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className={`${
                filter === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600"
                  : "border-white/20 text-white hover:bg-white/10 bg-transparent"
              } transition-all duration-300`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <Card
              key={event.id}
              className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/10 transition-all duration-500 cursor-pointer transform hover:scale-105 fade-in-up"
              onClick={() => {
                setSelectedEvent(event)
                setCurrentImageIndex(0)
              }}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={event.images[0] || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-2">{event.title}</h3>
                  <div className="flex items-center justify-between text-gray-300 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {event.attendees}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Image Slider Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="max-w-4xl bg-black/90 border-white/10 p-0">
          {selectedEvent && (
            <>
              <DialogHeader className="p-6 pb-0">
                <DialogTitle className="text-white text-2xl">{selectedEvent.title}</DialogTitle>
                <div className="flex items-center gap-4 text-gray-300 text-sm mt-2">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {selectedEvent.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {selectedEvent.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {selectedEvent.attendees} attendees
                  </div>
                </div>
              </DialogHeader>

              <div className="relative">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={selectedEvent.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${selectedEvent.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>

                {selectedEvent.images.length > 1 && (
                  <>
                    <Button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2"
                      size="sm"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2"
                      size="sm"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </>
                )}

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {selectedEvent.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300">{selectedEvent.description}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

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

      .fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
      }
    `}</style>
    </div>
  )
}
