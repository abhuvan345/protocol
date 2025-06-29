"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, ArrowLeft, Github, Linkedin, Twitter, Mail, Award, Users, Target, Zap } from "lucide-react"
import Link from "next/link"

interface Member {
  id: string
  name: string
  role: string
  level: number
  avatar: string
  bio: string
  skills: string[]
  achievements: string[]
  social: {
    github?: string
    linkedin?: string
    twitter?: string
    email?: string
  }
  reports?: Member[]
}

const organizationData: Member = {
  id: "1",
  name: "Sarah Chen",
  role: "Club President",
  level: 0,
  avatar: "SC",
  bio: "Computer Science senior passionate about full-stack development and community building.",
  skills: ["React", "Node.js", "Python", "Leadership"],
  achievements: ["Google Summer of Code 2024", "Best Project Award 2023"],
  social: {
    github: "sarahchen",
    linkedin: "sarah-chen-dev",
    email: "sarah@codecraft.club",
  },
  reports: [
    {
      id: "2",
      name: "Alex Rodriguez",
      role: "Vice President",
      level: 1,
      avatar: "AR",
      bio: "Software Engineering student specializing in AI and machine learning applications.",
      skills: ["Python", "TensorFlow", "React", "Data Science"],
      achievements: ["Hackathon Winner 2024", "Research Publication"],
      social: {
        github: "alexrod",
        linkedin: "alex-rodriguez-ml",
      },
      reports: [
        {
          id: "3",
          name: "Emma Johnson",
          role: "Technical Lead",
          level: 2,
          avatar: "EJ",
          bio: "Full-stack developer with expertise in modern web technologies.",
          skills: ["TypeScript", "Next.js", "PostgreSQL", "AWS"],
          achievements: ["Open Source Contributor", "Mentor of the Year"],
          social: {
            github: "emmaj",
            twitter: "emma_codes",
          },
        },
        {
          id: "4",
          name: "David Kim",
          role: "Mobile Dev Lead",
          level: 2,
          avatar: "DK",
          bio: "Mobile application developer focused on cross-platform solutions.",
          skills: ["React Native", "Flutter", "Swift", "Kotlin"],
          achievements: ["App Store Featured", "Mobile Innovation Award"],
          social: {
            github: "davidkim",
            linkedin: "david-kim-mobile",
          },
        },
      ],
    },
    {
      id: "5",
      name: "Maya Patel",
      role: "Events Coordinator",
      level: 1,
      avatar: "MP",
      bio: "Event management specialist ensuring amazing experiences for all members.",
      skills: ["Project Management", "Marketing", "Design", "Communication"],
      achievements: ["Event Excellence Award", "Community Builder"],
      social: {
        linkedin: "maya-patel-events",
        email: "maya@codecraft.club",
      },
      reports: [
        {
          id: "6",
          name: "James Wilson",
          role: "Workshop Coordinator",
          level: 2,
          avatar: "JW",
          bio: "Passionate educator helping members learn new technologies.",
          skills: ["Teaching", "JavaScript", "Python", "DevOps"],
          achievements: ["Best Instructor 2024", "Workshop Innovation"],
          social: {
            github: "jameswilson",
            twitter: "james_teaches",
          },
        },
        {
          id: "7",
          name: "Lisa Zhang",
          role: "Community Manager",
          level: 2,
          avatar: "LZ",
          bio: "Building connections and fostering collaboration within our community.",
          skills: ["Community Building", "Social Media", "Content Creation"],
          achievements: ["Community Growth Award", "Social Impact Leader"],
          social: {
            twitter: "lisa_community",
            linkedin: "lisa-zhang-community",
          },
        },
      ],
    },
    {
      id: "8",
      name: "Michael Brown",
      role: "Technical Advisor",
      level: 1,
      avatar: "MB",
      bio: "Senior developer providing technical guidance and mentorship.",
      skills: ["System Architecture", "Cloud Computing", "Mentoring", "Security"],
      achievements: ["Industry Expert", "Mentor Excellence Award"],
      social: {
        github: "michaelbrown",
        linkedin: "michael-brown-tech",
        email: "michael@codecraft.club",
      },
      reports: [
        {
          id: "9",
          name: "Sophie Taylor",
          role: "Security Lead",
          level: 2,
          avatar: "ST",
          bio: "Cybersecurity specialist ensuring our projects and data stay secure.",
          skills: ["Cybersecurity", "Penetration Testing", "Risk Assessment"],
          achievements: ["Security Certification", "Bug Bounty Hunter"],
          social: {
            github: "sophietaylor",
            linkedin: "sophie-taylor-security",
          },
        },
        {
          id: "10",
          name: "Ryan Garcia",
          role: "DevOps Lead",
          level: 2,
          avatar: "RG",
          bio: "Infrastructure and deployment specialist streamlining our development process.",
          skills: ["Docker", "Kubernetes", "CI/CD", "Monitoring"],
          achievements: ["DevOps Excellence", "Automation Champion"],
          social: {
            github: "ryangarcia",
            twitter: "ryan_devops",
          },
        },
      ],
    },
  ],
}

function CompactMemberCard({ member, isRoot = false }: { member: Member; isRoot?: boolean }) {
  const getAvatarColor = (name: string) => {
    const colors = [
      "from-blue-500 to-purple-600",
      "from-green-500 to-teal-600",
      "from-purple-500 to-pink-600",
      "from-yellow-500 to-orange-600",
      "from-red-500 to-pink-600",
      "from-indigo-500 to-blue-600",
    ]
    return colors[name.length % colors.length]
  }

  return (
    <Card
      className={`bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 w-full max-w-sm ${isRoot ? "ring-2 ring-blue-500/50" : ""}`}
    >
      <CardContent className="p-4">
        <div className="flex items-center space-x-3 mb-3">
          <div
            className={`w-12 h-12 bg-gradient-to-r ${getAvatarColor(member.name)} rounded-full flex items-center justify-center text-white font-bold text-sm`}
          >
            {member.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-bold text-sm truncate">{member.name}</h3>
            <p className="text-blue-400 font-medium text-xs">{member.role}</p>
            {isRoot && (
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 text-xs mt-1">Leader</Badge>
            )}
          </div>
        </div>

        <p className="text-gray-300 text-xs mb-3 line-clamp-2">{member.bio}</p>

        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {member.skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-blue-500/20 text-blue-300 text-xs px-1 py-0">
                {skill}
              </Badge>
            ))}
            {member.skills.length > 3 && (
              <Badge variant="secondary" className="bg-gray-500/20 text-gray-300 text-xs px-1 py-0">
                +{member.skills.length - 3}
              </Badge>
            )}
          </div>
        </div>

        <div className="mb-3">
          <div className="flex items-center text-gray-300 text-xs mb-1">
            <Award className="h-3 w-3 mr-1" />
            <span className="font-semibold">Top Achievement</span>
          </div>
          <p className="text-gray-400 text-xs truncate">{member.achievements[0]}</p>
        </div>

        <div className="flex space-x-1">
          {member.social.github && (
            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-1 h-6 w-6">
              <Github className="h-3 w-3" />
            </Button>
          )}
          {member.social.linkedin && (
            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-1 h-6 w-6">
              <Linkedin className="h-3 w-3" />
            </Button>
          )}
          {member.social.twitter && (
            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-1 h-6 w-6">
              <Twitter className="h-3 w-3" />
            </Button>
          )}
          {member.social.email && (
            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-1 h-6 w-6">
              <Mail className="h-3 w-3" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default function MembersPage() {
  const allMembers = [organizationData]

  // Flatten the organization structure for grid display
  const flattenMembers = (member: Member): Member[] => {
    const result = [member]
    if (member.reports) {
      member.reports.forEach((report) => {
        result.push(...flattenMembers(report))
      })
    }
    return result
  }

  const allFlatMembers = flattenMembers(organizationData)

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

      {/* Members Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Core Team</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the dedicated leaders who make CodeCraft Club an amazing community for developers
          </p>
        </div>

        {/* Leadership Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Leadership</h2>
          <div className="flex justify-center mb-8">
            <CompactMemberCard member={organizationData} isRoot={true} />
          </div>
        </div>

        {/* Executive Team */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Executive Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {organizationData.reports?.map((member) => (
              <div key={member.id} className="flex justify-center">
                <CompactMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>

        {/* Department Leads */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Department Leads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {organizationData.reports?.map((exec) =>
              exec.reports?.map((lead) => (
                <div key={lead.id} className="flex justify-center">
                  <CompactMemberCard member={lead} />
                </div>
              )),
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center bg-white/5 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-3xl font-bold text-white mb-2">10</div>
            <div className="text-gray-400 text-sm">Core Members</div>
          </div>
          <div className="text-center bg-white/5 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-3xl font-bold text-white mb-2">25+</div>
            <div className="text-gray-400 text-sm">Skills Combined</div>
          </div>
          <div className="text-center bg-white/5 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400 text-sm">Projects Led</div>
          </div>
          <div className="text-center bg-white/5 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-3xl font-bold text-white mb-2">100+</div>
            <div className="text-gray-400 text-sm">Members Mentored</div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-white font-bold mb-2">Innovation</h3>
                <p className="text-gray-300 text-sm">Pushing boundaries and exploring new technologies</p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-white font-bold mb-2">Community</h3>
                <p className="text-gray-300 text-sm">Building lasting connections and supporting each other</p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="bg-green-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Target className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-white font-bold mb-2">Excellence</h3>
                <p className="text-gray-300 text-sm">Striving for quality in everything we do</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
