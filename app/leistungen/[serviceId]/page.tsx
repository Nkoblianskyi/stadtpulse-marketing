import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft, Layout, FileType, Bus, Palette, PanelTop } from "lucide-react"
import services from "@/data/services.json"
import Script from "next/script"

type ServicePageProps = {
  params: {
    serviceId: string
  }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find((s) => s.id === params.serviceId)

  if (!service) {
    return {
      title: "Service nicht gefunden",
    }
  }

  return {
    title: service.title,
    description: service.description,
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    serviceId: service.id,
  }))
}

const iconMap: Record<string, any> = {
  Layout: Layout,
  FileType: FileType,
  Bus: Bus,
  Palette: Palette,
  PanelTop: PanelTop,
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.id === params.serviceId)

  if (!service) {
    notFound()
  }

  const ServiceIcon = iconMap[service.icon] || Layout

  return (
    <>
      <Script id={`schema-service-${service.id}`} type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "${service.title}",
            "description": "${service.description}",
            "provider": {
              "@type": "Organization",
              "name": "StadtPulse GmbH",
              "url": "https://stadtpulse.com"
            },
            "serviceType": "Marketing Service",
            "areaServed": {
              "@type": "City",
              "name": "Wien"
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "url": "https://stadtpulse.com/leistungen/${service.id}"
            }
          }
        `}
      </Script>
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <Link href="/leistungen" className="inline-flex items-center text-brand-600 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zu allen Leistungen
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center">
                  <ServiceIcon className="h-6 w-6 text-brand-600" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">{service.title}</h1>
              </div>

              <p className="text-xl text-gray-600 mb-6">{service.description}</p>

              {service.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}

              <h2 className="text-2xl font-bold mt-8 mb-4">Unsere Leistungen im Überblick</h2>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-600 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" asChild>
                <Link href="/kontakt">Jetzt anfragen</Link>
              </Button>
            </div>

            <div>
              <div className="sticky top-24">
                <div className="rounded-xl overflow-hidden shadow-lg mb-8">
                  <img
                    src={service.imagePath || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h2 className="text-xl font-bold mb-4">Unser Prozess</h2>
                  <div className="space-y-6">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center flex-shrink-0 font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-bold">{step.stepTitle}</h3>
                          <p className="text-gray-600">{step.stepDescription}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
