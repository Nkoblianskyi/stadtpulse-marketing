import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Quote } from "lucide-react"
import works from "@/data/works.json"

type WorkPageProps = {
  params: {
    workId: string
  }
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const work = works.find((w) => w.id === params.workId)

  if (!work) {
    return {
      title: "Projekt nicht gefunden",
    }
  }

  return {
    title: work.title,
    description: work.description,
  }
}

export async function generateStaticParams() {
  return works.map((work) => ({
    workId: work.id,
  }))
}

export default function WorkPage({ params }: WorkPageProps) {
  const work = works.find((w) => w.id === params.workId)

  if (!work) {
    notFound()
  }

  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <Link href="/arbeiten" className="inline-flex items-center text-brand-600 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zu allen Projekten
        </Link>

        <div className="mb-8">
          <div className="text-sm font-medium text-brand-600 mb-2">{work.category}</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{work.title}</h1>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <User className="h-4 w-4 mr-1" />
              <span>Kunde: {work.client}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Datum: {work.date}</span>
            </div>
          </div>

          <p className="text-xl text-gray-600">{work.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {work.images.map((image, index) => (
            <div key={index} className={`rounded-lg overflow-hidden shadow-md ${index === 0 ? "md:col-span-2" : ""}`}>
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Die Herausforderung</h2>
            <p>{work.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Unsere Lösung</h2>
            <p>{work.solution}</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Ergebnisse</h2>
          <p>{work.results}</p>
        </div>

        {work.testimonial && (
          <div className="bg-brand-50 p-8 rounded-xl mb-12">
            <Quote className="h-10 w-10 text-brand-300 mb-4" />
            <blockquote className="text-xl mb-6 italic">"{work.testimonial.quote}"</blockquote>
            <div>
              <p className="font-bold">{work.testimonial.author}</p>
              <p className="text-gray-600">{work.testimonial.position}</p>
            </div>
          </div>
        )}

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Interessiert an einem ähnlichen Projekt?</h2>
          <Button size="lg" asChild>
            <Link href="/kontakt">Kontaktieren Sie uns</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
