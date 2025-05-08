import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie StadtPulse kennen - Wiens führende Agentur für Offline-Marketing mit über 15 Jahren Erfahrung.",
}

export default function AboutPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Über StadtPulse</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wiens führende Agentur für Offline-Marketing mit über 15 Jahren Erfahrung.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Unsere Geschichte</h2>
            <p className="mb-4">
              StadtPulse wurde 2010 in Wien gegründet, mit der Vision, Marken im öffentlichen Raum zum Leben zu
              erwecken. Was als kleine Designagentur begann, hat sich zu einer der führenden Offline-Marketing-Agenturen
              Österreichs entwickelt.
            </p>
            <p className="mb-4">
              Unser Gründer, Markus Schneider, erkannte früh das Potenzial von strategisch platzierter Außenwerbung und
              hochwertigen Printmedien in einer zunehmend digitalen Welt. Heute arbeitet unser Team aus über 25 Experten
              daran, dieses Potenzial für unsere Kunden voll auszuschöpfen.
            </p>
            <p>
              Über die Jahre haben wir unser Angebot kontinuierlich erweitert und verfeinert, um den sich wandelnden
              Bedürfnissen unserer Kunden gerecht zu werden. Was sich nicht geändert hat, ist unser Engagement für
              Qualität, Kreativität und messbare Ergebnisse.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img src="/ef109c674a2f203fd1af09d3375bdb3b.jpg" alt="Das StadtPulse Team" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-brand-100 rounded-lg -z-10" />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Unsere Werte</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Qualität</h3>
              <p className="text-gray-600">
                Wir setzen auf hochwertige Materialien und präzise Ausführung, um sicherzustellen, dass jedes Projekt
                unsere hohen Standards erfüllt.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Kreativität</h3>
              <p className="text-gray-600">
                Wir denken außerhalb der Box, um innovative Lösungen zu entwickeln, die Aufmerksamkeit erregen und im
                Gedächtnis bleiben.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Nachhaltigkeit</h3>
              <p className="text-gray-600">
                Wir sind bestrebt, umweltfreundliche Materialien und Prozesse zu verwenden, um unseren ökologischen
                Fußabdruck zu minimieren.
              </p>
            </div>
          </div>
        </div>


        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit, mit uns zu arbeiten?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Kontaktieren Sie uns für ein kostenloses Beratungsgespräch und erfahren Sie, wie wir Ihre Marke im
            öffentlichen Raum zum Leben erwecken können.
          </p>
          <Button size="lg" asChild>
            <Link href="/kontakt">Kontakt aufnehmen</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
