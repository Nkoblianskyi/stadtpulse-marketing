import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Nehmen Sie Kontakt mit StadtPulse auf. Wir freuen uns auf Ihre Anfrage zu Billboards, Broschüren, Transportwerbung und mehr.",
}

export default function ContactPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontaktieren Sie uns</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir freuen uns auf Ihre Anfrage. Unser Team steht Ihnen gerne für ein persönliches Beratungsgespräch zur
            Verfügung.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-6">Ihre Nachricht an uns</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Kontaktinformationen</h2>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      Kärntner Straße 12
                      <br />
                      1010 Wien
                      <br />
                      Österreich
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <PhoneCall className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Telefon</h3>
                    <p className="text-gray-600">+43 1 896 52 62</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">E-Mail</h3>
                    <p className="text-gray-600">info@stadtpulse.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Öffnungszeiten</h3>
                    <p className="text-gray-600">
                      Montag - Freitag:
                      <br />
                      9:00 - 17:00 Uhr
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-lg mb-3">Standort</h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src="/f5949c6ec2ce370ed1e3000455549bb8.jpg"
                    alt="Karte Standort StadtPulse"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
