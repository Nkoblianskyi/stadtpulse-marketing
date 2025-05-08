import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import blogPosts from "@/data/blog.json"
import { BlogContent } from "@/components/blog-content"
import Script from "next/script"

type BlogPostPageProps = {
  params: {
    postId: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id === params.postId)

  if (!post) {
    return {
      title: "Artikel nicht gefunden",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    postId: post.id,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.postId)

  if (!post) {
    notFound()
  }

  // Преобразуем дату в формат ISO для schema.org
  const dateParts = post.date.split(".")
  const isoDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`

  return (
    <>
      <Script id={`schema-article-${post.id}`} type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "${post.title}",
            "description": "${post.excerpt}",
            "image": "${post.featuredImage}",
            "datePublished": "${isoDate}",
            "author": {
              "@type": "Person",
              "name": "${post.author}",
              "jobTitle": "${post.authorPosition}"
            },
            "publisher": {
              "@type": "Organization",
              "name": "StadtPulse GmbH",
              "logo": {
                "@type": "ImageObject",
                "url": "https://stadtpulse.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://stadtpulse.com/blog/${post.id}"
            }
          }
        `}
      </Script>
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Link href="/blog" className="inline-flex items-center text-brand-600 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zum Blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category, index) => (
              <span key={index} className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">
                {category}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <User className="h-4 w-4 mr-1" />
              <span>
                {post.author}, {post.authorPosition}
              </span>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden mb-8">
            <img
              src={post.featuredImage || "/placeholder.svg"}
              alt={post.title}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>

          <BlogContent sections={post.sections} />

          <div className="border-t border-gray-200 mt-12 pt-8">
            <h2 className="text-2xl font-bold mb-6">Weitere Artikel</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={relatedPost.featuredImage || "/placeholder.svg"}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
