import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import works from "@/data/works.json"

export function WorkShowcase() {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Arbeiten</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere erfolgreichen Projekte und sehen Sie, wie wir Marken im öffentlichen Raum zum Leben
            erwecken.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {works.slice(0, 3).map((work) => (
            <div key={work.id} className="group">
              <Link href={`/arbeiten/${work.id}`} className="block">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={work.images[0].src || "/placeholder.svg"}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-medium text-brand-600 mb-2">{work.category}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-brand-600 transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-gray-600 mb-4">Kunde: {work.client}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{work.date}</span>
                      <span className="text-brand-600 flex items-center font-medium">
                        Ansehen <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/arbeiten">Alle Projekte ansehen</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
