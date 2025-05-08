import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Layout, FileType, Bus, Palette, PanelTop } from "lucide-react"
import services from "@/data/services.json"

export function ServicesSection() {
  const iconMap: Record<string, any> = {
    Layout: Layout,
    FileType: FileType,
    Bus: Bus,
    Palette: Palette,
    PanelTop: PanelTop,
  }

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Leistungen</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir bieten maßgeschneiderte Offline-Marketing-Lösungen, die auf Ihre spezifischen Bedürfnisse zugeschnitten
            sind.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => {
            const ServiceIcon = iconMap[service.icon] || Layout
            return (
              <Card key={service.id} className="flex flex-col h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                    <ServiceIcon className="h-6 w-6 text-brand-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-brand-600 font-bold">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/leistungen/${service.id}`} className="flex items-center justify-center">
                      Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/leistungen">Alle Leistungen ansehen</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
