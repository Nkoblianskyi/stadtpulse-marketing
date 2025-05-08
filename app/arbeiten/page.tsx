import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import works from "@/data/works.json"

export const metadata: Metadata = {
  title: "Arbeiten",
  description:
    "Entdecken Sie unsere erfolgreichen Projekte im Bereich Offline-Marketing: Billboards, Transportwerbung, U-Bahn-Werbung und Printmedien.",
}

export default function WorksPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unsere Arbeiten</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere erfolgreichen Projekte und sehen Sie, wie wir Marken im öffentlichen Raum zum Leben
            erwecken.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {works.map((work) => (
            <Card key={work.id} className="overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={work.images[0].src || "/placeholder.svg"}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <div className="text-sm font-medium text-brand-600 mb-1">{work.category}</div>
                <CardTitle>{work.title}</CardTitle>
                <CardDescription>Kunde: {work.client}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">{work.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/arbeiten/${work.id}`} className="flex items-center">
                    Projekt ansehen <ArrowRight className="ml-2 h-4 w-4" />
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
