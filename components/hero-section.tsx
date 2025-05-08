import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <img src="/sunset-city-billboard.png" alt="Offline Marketing" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ihre Marke im öffentlichen Raum zum Leben erwecken
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            StadtPulse ist Wiens führende Agentur für Offline-Marketing. Wir gestalten Billboards, Broschüren und
            Transportwerbung, die garantiert auffallen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/leistungen">
                Unsere Leistungen <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              asChild
            >
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
