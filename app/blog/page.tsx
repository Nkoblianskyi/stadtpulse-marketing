import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, User } from "lucide-react"
import blogPosts from "@/data/blog.json"

export const metadata: Metadata = {
  title: "Blog",
  description: "Aktuelle Artikel und Insights zum Thema Offline-Marketing, Billboards, Printmedien und mehr.",
}

export default function BlogPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aktuelle Artikel und Insights zum Thema Offline-Marketing, Billboards, Printmedien und mehr.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.featuredImage || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.categories.map((category, index) => (
                    <span key={index} className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">
                      {category}
                    </span>
                  ))}
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <p className="line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0 h-auto font-semibold text-brand-600" asChild>
                  <Link href={`/blog/${post.id}`} className="flex items-center gap-1">
                    Weiterlesen <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
