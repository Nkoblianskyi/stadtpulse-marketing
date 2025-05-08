"use client"

import { useEffect, useRef } from "react"

interface BlogSection {
  type: string
  content: string
  items?: string[]
}

interface BlogContentProps {
  sections: BlogSection[]
}

export function BlogContent({ sections }: BlogContentProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      // Add IDs to headings for anchor links
      const headings = contentRef.current.querySelectorAll("h1, h2, h3, h4, h5, h6")
      headings.forEach((heading) => {
        const id = heading.textContent?.toLowerCase().replace(/[^\w]+/g, "-") || ""
        heading.setAttribute("id", id)
      })
    }
  }, [sections])

  return (
    <div ref={contentRef} className="prose prose-lg max-w-none">
      {sections.map((section, index) => {
        switch (section.type) {
          case "heading1":
            return (
              <h1 key={index} className="text-3xl font-bold my-6">
                {section.content}
              </h1>
            )

          case "heading2":
            return (
              <h2 key={index} className="text-2xl font-bold my-5">
                {section.content}
              </h2>
            )

          case "heading3":
            return (
              <h3 key={index} className="text-xl font-bold my-4">
                {section.content}
              </h3>
            )

          case "paragraph":
            return (
              <p key={index} className="mb-4">
                {section.content}
              </p>
            )

          case "callout":
            return (
              <div key={index} className="bg-brand-50 p-4 rounded-lg my-4 border-l-4 border-brand-500">
                <p className="font-medium">{section.content}</p>
              </div>
            )

          case "tip":
            return (
              <div key={index} className="bg-blue-50 p-4 rounded-lg my-4 border-l-4 border-blue-500">
                <p className="font-medium text-blue-800">Tipp: {section.content}</p>
              </div>
            )

          case "list":
            return (
              <ul key={index} className="my-4 space-y-2">
                {section.items?.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )

          default:
            return null
        }
      })}
    </div>
  )
}
