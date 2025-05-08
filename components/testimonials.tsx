import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "StadtPulse hat unsere Erwartungen übertroffen. Die Billboardkampagne hat unsere Markenbekanntheit in Wien deutlich gesteigert und zu einem messbaren Anstieg der Verkäufe geführt.",
    position: "Marketingleiter, Wiener Traditionsbäckerei",
    image: "/professional-man-suit.png",
  },
  {
    quote:
      "Die Zusammenarbeit mit StadtPulse war von Anfang bis Ende professionell. Das Team hat unsere Vision verstanden und in beeindruckende visuelle Konzepte umgesetzt, die genau unsere Zielgruppe ansprechen.",
    position: "CEO, TechStart Austria",
    image: "/professional-woman-glasses.png",
  },
  {
    quote:
      "Die Transportwerbung, die StadtPulse für uns gestaltet hat, erregt überall in der Stadt Aufmerksamkeit. Wir erhalten ständig positives Feedback von Kunden, die uns durch diese Werbung entdeckt haben.",
    position: "Inhaber, Café Central",
    image: "/middle-aged-man-smiling.png",
  },
]

export function Testimonials() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Was unsere Kunden sagen</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Erfahren Sie, wie wir unseren Kunden geholfen haben, ihre Marketingziele zu erreichen.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <Quote className="h-10 w-10 text-brand-300 mb-4" />
                <blockquote className="text-lg mb-6">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
