import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import services from "@/data/services.json"

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Entdecken Sie unsere umfassenden Offline-Marketing-Leistungen: Billboards, Broschüren, Transportwerbung, U-Bahn Werbung und Branding-Materialien.",
}

export default function ServicesPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unsere Leistungen</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir bieten maßgeschneiderte Offline-Marketing-Lösungen, die auf Ihre spezifischen Bedürfnisse zugeschnitten
            sind.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={service.imagePath || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{service.content.split("\n")[0]}</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/leistungen/${service.id}`} className="flex items-center">
                    Details <ArrowRight className="ml-2 h-4 w-4" />
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
