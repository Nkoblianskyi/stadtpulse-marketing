import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <div className="bg-brand-600 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit, Ihre Marke im öffentlichen Raum zum Leben zu erwecken?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Kontaktieren Sie uns für ein kostenloses Beratungsgespräch und erfahren Sie, wie wir Ihnen helfen können,
            Ihre Marketingziele zu erreichen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-600 hover:bg-white/90" asChild>
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-brand-600 border-white/20 hover:bg-white/10" asChild>
              <Link href="/leistungen">Unsere Leistungen</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
