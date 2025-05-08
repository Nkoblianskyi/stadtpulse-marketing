import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import faqData from "@/data/faq.json"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Häufig gestellte Fragen zu unseren Offline-Marketing-Leistungen, Prozessen und Preisen.",
}

export default function FAQPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Häufig gestellte Fragen</h1>
          <p className="text-xl text-gray-600">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Leistungen.
          </p>
        </div>

        <Accordion type="single" collapsible className="mb-12">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-brand-50 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Haben Sie weitere Fragen?</h2>
          <p className="mb-6">
            Unser Team steht Ihnen gerne für alle Fragen zur Verfügung. Kontaktieren Sie uns für ein persönliches
            Beratungsgespräch.
          </p>
          <Button size="lg" asChild>
            <Link href="/kontakt">Kontakt aufnehmen</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
