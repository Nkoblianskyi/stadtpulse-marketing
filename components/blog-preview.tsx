import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import blogPosts from "@/data/blog.json"

export function BlogPreview() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Aktuelle Beiträge</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Erfahren Sie mehr über Trends und Best Practices im Bereich Offline-Marketing.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <div key={post.id} className="group">
              <Link href={`/blog/${post.id}`} className="block">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.featuredImage || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                    <span className="text-brand-600 flex items-center font-medium">
                      Weiterlesen <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/blog">Alle Beiträge ansehen</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
