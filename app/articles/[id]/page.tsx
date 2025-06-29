"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, ArrowLeft, Calendar, Clock, Heart, MessageCircle, Share2, Eye, ThumbsUp } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  authorAvatar: string
  authorBio: string
  publishDate: string
  readTime: string
  category: string
  tags: string[]
  likes: number
  comments: number
  shares: number
  views: number
  featured: boolean
  image: string
}

// Mock data - in real app this would come from API
const articles: Article[] = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Explore the cutting-edge technologies and frameworks that will shape web development in the coming year.",
    content: `The web development landscape is evolving at an unprecedented pace. As we approach 2025, several key trends are emerging that will fundamentally reshape how we build, deploy, and interact with web applications.

## 1. AI-Powered Development Tools

Artificial Intelligence is no longer just a buzzword in web development—it's becoming an integral part of our daily workflow. AI-powered coding assistants like GitHub Copilot, Tabnine, and newer tools are revolutionizing how developers write code.

### What's Changing:

**Code Generation**: AI can now generate entire functions, components, and even full applications based on natural language descriptions.

**Bug Detection**: Advanced AI systems can identify potential bugs and security vulnerabilities before they make it to production.

**Code Optimization**: AI tools can suggest performance improvements and refactoring opportunities.

### Real-World Impact:

Companies are reporting 30-50% increases in developer productivity when using AI-powered tools. However, this doesn't mean AI will replace developers—instead, it's augmenting human capabilities and allowing us to focus on higher-level problem-solving.

## 2. The Rise of Edge Computing

Edge computing is moving processing closer to users, reducing latency and improving performance. This trend is particularly important for web applications that require real-time interactions.

### Key Technologies:

- **Edge Functions**: Serverless functions that run at the edge of the network
- **CDN Evolution**: Content Delivery Networks are becoming compute platforms  
- **Edge Databases**: Distributed databases that replicate data closer to users

### Benefits:

- Reduced latency for global applications
- Better performance for real-time features
- Improved user experience across different geographical locations

## 3. WebAssembly (WASM) Goes Mainstream

WebAssembly is finally reaching mainstream adoption, enabling high-performance applications that were previously impossible in the browser.

### Use Cases:

**Gaming**: Complex 3D games running at near-native performance

**Image/Video Processing**: Real-time editing tools in the browser

**Scientific Computing**: Complex calculations without server round-trips

**Legacy Code**: Running existing C/C++/Rust applications in the browser

### Developer Experience:

Tools like Emscripten and newer WASM-focused frameworks are making it easier than ever to compile existing code to WebAssembly and integrate it with JavaScript applications.

## 4. Progressive Web Apps (PWAs) 2.0

PWAs are getting significant upgrades with new capabilities that blur the line between web and native applications.

### New Capabilities:

- **File System Access**: Direct access to user files with proper permissions
- **Advanced Camera Controls**: Professional-grade camera features
- **Bluetooth and USB**: Hardware integration previously limited to native apps
- **Background Processing**: More sophisticated background tasks

### Market Adoption:

Major companies like Twitter, Pinterest, and Starbucks have seen significant improvements in user engagement after implementing PWAs.

## 5. The Component-Driven Development Revolution

The way we think about building UIs is shifting towards a more modular, component-driven approach.

### Key Trends:

**Design Systems**: Comprehensive component libraries that ensure consistency

**Micro Frontends**: Breaking large applications into smaller, manageable pieces

**Universal Components**: Components that work across different frameworks

**Visual Development**: Tools that allow designers to create functional components

### Tools Leading the Way:

- Storybook for component development and documentation
- Bit for component sharing and collaboration
- Figma plugins that generate code from designs

## 6. Sustainability in Web Development

Environmental consciousness is becoming a priority in web development, with developers focusing on creating more efficient, sustainable applications.

### Green Coding Practices:

**Performance Optimization**: Faster sites use less energy

**Efficient Hosting**: Choosing green hosting providers

**Minimal JavaScript**: Reducing bundle sizes and unnecessary code

**Image Optimization**: Using modern formats and proper compression

### Measuring Impact:

Tools like Website Carbon Calculator and EcoGrader help developers understand and reduce their applications' environmental impact.

## Preparing for the Future

As these trends continue to evolve, developers should focus on:

1. **Continuous Learning**: Stay updated with new technologies and best practices
2. **Experimentation**: Try new tools and frameworks in side projects
3. **Community Engagement**: Participate in developer communities and conferences
4. **User-Centric Thinking**: Always prioritize user experience over technology trends

## Conclusion

The future of web development is exciting and full of possibilities. While these trends will shape the industry, the fundamental principles of good development—clean code, user experience, and accessibility—remain constant.

The key to success in this evolving landscape is to stay curious, keep learning, and always remember that technology should serve users, not the other way around.

What trends are you most excited about? How are you preparing for the future of web development? Share your thoughts in the comments below!`,
    author: "Sarah Chen",
    authorAvatar: "SC",
    authorBio:
      "Full-stack developer and tech writer with 8+ years of experience. Passionate about emerging technologies and developer education.",
    publishDate: "December 20, 2024",
    readTime: "8 min read",
    category: "Technology",
    tags: ["Web Development", "Trends", "2025", "JavaScript", "AI", "WebAssembly", "PWA"],
    likes: 124,
    comments: 18,
    shares: 32,
    views: 1547,
    featured: true,
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "2",
    title: "Building Scalable React Applications: Best Practices",
    excerpt: "Learn how to structure and optimize React applications for better performance and maintainability.",
    content: `Building React applications that can scale effectively requires careful planning, thoughtful architecture, and adherence to best practices. In this comprehensive guide, we'll explore the key strategies for creating maintainable, performant React applications.

## Project Structure and Organization

### Feature-Based Organization

Instead of organizing files by type (components, hooks, utils), organize by feature:

\`\`\`
src/
  features/
    authentication/
      components/
      hooks/
      services/
      types/
      index.ts
    dashboard/
      components/
      hooks/
      services/
      types/
      index.ts
  shared/
    components/
    hooks/
    utils/
    types/
\`\`\`

This approach makes it easier to understand the codebase and enables better code splitting.

### Component Architecture

#### Container vs Presentational Components

Separate your components into two categories:

- **Container Components**: Handle logic and state management
- **Presentational Components**: Focus purely on rendering UI

#### Custom Hooks for Logic Reuse

Extract complex logic into custom hooks:

\`\`\`javascript
// useUserData.js
function useUserData(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser(userId)
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [userId]);

  return { user, loading, error };
}
\`\`\`

## State Management Strategies

### Choose the Right Tool

- **Local State**: useState, useReducer for component-specific state
- **Global State**: Context API for simple global state, Redux Toolkit for complex applications
- **Server State**: React Query or SWR for API data management

### State Normalization

For complex data structures, normalize your state:

\`\`\`javascript
// Instead of nested objects
const state = {
  posts: [
    { id: 1, title: 'Post 1', author: { id: 1, name: 'John' } },
    { id: 2, title: 'Post 2', author: { id: 1, name: 'John' } }
  ]
};

// Use normalized structure
const state = {
  posts: {
    byId: {
      1: { id: 1, title: 'Post 1', authorId: 1 },
      2: { id: 2, title: 'Post 2', authorId: 1 }
    },
    allIds: [1, 2]
  },
  authors: {
    byId: {
      1: { id: 1, name: 'John' }
    },
    allIds: [1]
  }
};
\`\`\`

## Performance Optimization

### Code Splitting

Implement route-based and component-based code splitting:

\`\`\`javascript
// Route-based splitting
const Dashboard = lazy(() => import('./Dashboard'));
const Profile = lazy(() => import('./Profile'));

// Component-based splitting
const HeavyComponent = lazy(() => import('./HeavyComponent'));
\`\`\`

### Memoization

Use React.memo, useMemo, and useCallback strategically:

\`\`\`javascript
const ExpensiveComponent = React.memo(({ data, onUpdate }) => {
  const processedData = useMemo(() => {
    return data.map(item => expensiveProcessing(item));
  }, [data]);

  const handleUpdate = useCallback((id) => {
    onUpdate(id);
  }, [onUpdate]);

  return (
    <div>
      {processedData.map(item => (
        <Item key={item.id} data={item} onUpdate={handleUpdate} />
      ))}
    </div>
  );
});
\`\`\`

## Error Handling and Resilience

### Error Boundaries

Implement error boundaries to catch and handle errors gracefully:

\`\`\`javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Log to error reporting service
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}
\`\`\`

## Testing Strategies

### Testing Pyramid

Implement a comprehensive testing strategy:

- **Unit Tests**: Test individual components and functions
- **Integration Tests**: Test component interactions
- **E2E Tests**: Test complete user workflows

### Testing Best Practices

\`\`\`javascript
// Test behavior, not implementation
test('should display user name when user is provided', () => {
  render(<UserProfile user={{ name: 'John Doe' }} />);
  expect(screen.getByText('John Doe')).toBeInTheDocument();
});

// Use data-testid for complex selectors
const LoginForm = () => (
  <form data-testid="login-form">
    <input data-testid="email-input" type="email" />
    <input data-testid="password-input" type="password" />
    <button data-testid="submit-button">Login</button>
  </form>
);
\`\`\`

## Development Workflow

### Code Quality Tools

Set up automated code quality checks:

- **ESLint**: Code linting and style enforcement
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit checks
- **TypeScript**: Static type checking

## Conclusion

Building scalable React applications requires attention to architecture, performance, testing, and maintainability. By following these best practices, you'll create applications that can grow with your needs while maintaining code quality and developer productivity.

Remember, scalability isn't just about handling more users—it's about creating a codebase that can evolve and be maintained by a growing team over time.`,
    author: "Alex Rodriguez",
    authorAvatar: "AR",
    authorBio:
      "Senior React developer and architect with expertise in large-scale application development. Contributor to several open-source projects.",
    publishDate: "December 18, 2024",
    readTime: "12 min read",
    category: "Tutorial",
    tags: ["React", "JavaScript", "Performance", "Best Practices", "Architecture", "Scalability"],
    likes: 89,
    comments: 12,
    shares: 24,
    views: 892,
    featured: false,
    image: "/placeholder.svg?height=400&width=800",
  },
]

// Component to render formatted content
function FormattedContent({ content }: { content: string }) {
  const formatContent = (text: string) => {
    // Split content into sections
    const sections = text.split("\n\n")

    return sections
      .map((section, index) => {
        // Handle headings
        if (section.startsWith("## ")) {
          return (
            <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4 first:mt-0">
              {section.replace("## ", "")}
            </h2>
          )
        }

        if (section.startsWith("### ")) {
          return (
            <h3 key={index} className="text-xl font-semibold text-white mt-6 mb-3">
              {section.replace("### ", "")}
            </h3>
          )
        }

        if (section.startsWith("#### ")) {
          return (
            <h4 key={index} className="text-lg font-medium text-white mt-4 mb-2">
              {section.replace("#### ", "")}
            </h4>
          )
        }

        // Handle code blocks
        if (section.startsWith("```")) {
          const codeContent = section.replace(/```\w*\n?/, "").replace(/```$/, "")
          return (
            <div key={index} className="my-6">
              <pre className="bg-gray-900/50 border border-white/10 rounded-lg p-4 overflow-x-auto">
                <code className="text-sm text-gray-300 font-mono whitespace-pre">{codeContent}</code>
              </pre>
            </div>
          )
        }

        // Handle lists
        if (section.includes("- **") || section.includes("- ")) {
          const listItems = section.split("\n").filter((line) => line.trim().startsWith("- "))
          const nonListContent = section
            .split("\n")
            .filter((line) => !line.trim().startsWith("- "))
            .join("\n")

          return (
            <div key={index} className="my-4">
              {nonListContent && (
                <p className="text-gray-300 leading-relaxed mb-3">{formatInlineText(nonListContent)}</p>
              )}
              <ul className="space-y-2 ml-4">
                {listItems.map((item, itemIndex) => {
                  const cleanItem = item.replace("- ", "")
                  return (
                    <li key={itemIndex} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2 mt-2">•</span>
                      <span>{formatInlineText(cleanItem)}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        }

        // Handle numbered lists
        if (/^\d+\./.test(section.trim())) {
          const listItems = section.split("\n").filter((line) => /^\d+\./.test(line.trim()))
          return (
            <ol key={index} className="space-y-2 ml-4 my-4">
              {listItems.map((item, itemIndex) => {
                const cleanItem = item.replace(/^\d+\.\s*/, "")
                return (
                  <li key={itemIndex} className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2 font-medium">{itemIndex + 1}.</span>
                    <span>{formatInlineText(cleanItem)}</span>
                  </li>
                )
              })}
            </ol>
          )
        }

        // Handle regular paragraphs
        if (section.trim()) {
          return (
            <p key={index} className="text-gray-300 leading-relaxed mb-4">
              {formatInlineText(section)}
            </p>
          )
        }

        return null
      })
      .filter(Boolean)
  }

  const formatInlineText = (text: string) => {
    // Handle bold text
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')

    // Handle inline code
    text = text.replace(
      /`([^`]+)`/g,
      '<code class="bg-blue-500/20 text-blue-300 px-1 py-0.5 rounded text-sm font-mono">$1</code>',
    )

    // Handle links (basic)
    text = text.replace(
      /\[([^\]]+)\]$$([^)]+)$$/g,
      '<a href="$2" class="text-blue-400 hover:text-blue-300 underline">$1</a>',
    )

    return <span dangerouslySetInnerHTML={{ __html: text }} />
  }

  return <div className="space-y-1">{formatContent(content)}</div>
}

export default function ArticleDetailPage() {
  const params = useParams()
  const articleId = params.id as string

  const article = articles.find((a) => a.id === articleId)

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Article Not Found</h1>
          <Link href="/articles">
            <Button>Back to Articles</Button>
          </Link>
        </div>
      </div>
    )
  }

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
            <Link href="/articles">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Articles
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className={getCategoryColor(article.category)}>{article.category}</Badge>
            {article.featured && (
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Featured</Badge>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{article.title}</h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">{article.excerpt}</p>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm mb-8">
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 bg-gradient-to-r ${getAvatarColor(article.author)} rounded-full flex items-center justify-center text-white font-bold`}
              >
                {article.authorAvatar}
              </div>
              <div>
                <div className="text-white font-medium">{article.author}</div>
                <div className="text-gray-400 text-sm">{article.authorBio}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {article.publishDate}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {article.readTime}
            </div>
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-2" />
              {article.views} views
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative mb-12 rounded-2xl overflow-hidden">
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="max-w-none">
                  <FormattedContent content={article.content} />
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm mt-8">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Author Card */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-4">About the Author</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${getAvatarColor(article.author)} rounded-full flex items-center justify-center text-white font-bold`}
                  >
                    {article.authorAvatar}
                  </div>
                  <div>
                    <div className="text-white font-medium">{article.author}</div>
                    <div className="text-gray-400 text-sm">Author</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{article.authorBio}</p>
              </CardContent>
            </Card>

            {/* Article Stats */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-4">Article Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-300">
                      <Eye className="h-4 w-4 mr-2 text-blue-400" />
                      Views
                    </div>
                    <span className="text-white font-medium">{article.views.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-300">
                      <Heart className="h-4 w-4 mr-2 text-red-400" />
                      Likes
                    </div>
                    <span className="text-white font-medium">{article.likes}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-300">
                      <MessageCircle className="h-4 w-4 mr-2 text-green-400" />
                      Comments
                    </div>
                    <span className="text-white font-medium">{article.comments}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-300">
                      <Share2 className="h-4 w-4 mr-2 text-purple-400" />
                      Shares
                    </div>
                    <span className="text-white font-medium">{article.shares}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Like Article
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Article
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Add Comment
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Reading Progress */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-4">Reading Time</h3>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{article.readTime}</div>
                  <div className="text-gray-400 text-sm">Average reading time</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
