import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function AboutSection() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img src="/ef109c674a2f203fd1af09d3375bdb3b.jpg" alt="Über StadtPulse" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-brand-100 rounded-lg -z-10" />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Über StadtPulse</h2>
            <p className="text-lg text-gray-600 mb-6">
              StadtPulse wurde 2010 in Wien gegründet, mit der Vision, Marken im öffentlichen Raum zum Leben zu
              erwecken. Was als kleine Designagentur begann, hat sich zu einer der führenden Offline-Marketing-Agenturen
              Österreichs entwickelt.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg">Erfahrenes Team</h3>
                  <p className="text-gray-600">
                    Unser Team aus über 25 Experten bringt jahrelange Erfahrung in der Branche mit.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg">Maßgeschneiderte Lösungen</h3>
                  <p className="text-gray-600">
                    Wir entwickeln individuelle Konzepte, die perfekt auf Ihre Marke und Ziele abgestimmt sind.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg">Nachhaltige Materialien</h3>
                  <p className="text-gray-600">
                    Wir setzen auf umweltfreundliche Materialien und Prozesse, um unseren ökologischen Fußabdruck zu
                    minimieren.
                  </p>
                </div>
              </div>
            </div>

            <Button asChild>
              <Link href="/uber-uns">Mehr über uns erfahren</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
