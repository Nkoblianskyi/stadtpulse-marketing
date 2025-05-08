import Link from "next/link"
import { PhoneCall, Mail, MapPin, Building2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto py-12 px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className='flex items-center gap-2'>
              <Building2 color="#acc987" />
            <h3 className="text-lg font-bold">StadtPulse GmbH</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Ihre Offline-Marketingagentur in Wien für Billboards, Broschüren, Transportwerbung und
              Branding-Materialien.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-600 mr-2 mt-0.5" />
                <span className="text-gray-600">
                  Kärntner Straße 12
                  <br />
                  1010 Wien, Österreich
                </span>
              </div>
              <div className="flex items-center">
                <PhoneCall className="h-5 w-5 text-brand-600 mr-2" />
                <span className="text-gray-600">+43 1 896 52 62</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-brand-600 mr-2" />
                <span className="text-gray-600">info@stadtpulse.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Leistungen</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/leistungen/billboards" className="text-gray-600 hover:text-brand-600">
                  Billboards & Außenwerbung
                </Link>
              </li>
              <li>
                <Link href="/leistungen/printmedien" className="text-gray-600 hover:text-brand-600">
                  Printmedien & Broschüren
                </Link>
              </li>
              <li>
                <Link href="/leistungen/transportwerbung" className="text-gray-600 hover:text-brand-600">
                  Transportwerbung
                </Link>
              </li>
              <li>
                <Link href="/leistungen/branding" className="text-gray-600 hover:text-brand-600">
                  Branding & Corporate Design
                </Link>
              </li>
              <li>
                <Link href="/leistungen/messestaende" className="text-gray-600 hover:text-brand-600">
                  Messestände & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Schnelllinks</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/uber-uns" className="text-gray-600 hover:text-brand-600">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/arbeiten" className="text-gray-600 hover:text-brand-600">
                  Arbeiten
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-brand-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-brand-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-600 hover:text-brand-600">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/datenschutz" className="text-gray-600 hover:text-brand-600">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-600 hover:text-brand-600">
                  Cookie-Richtlinie
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-gray-600 hover:text-brand-600">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} StadtPulse GmbH. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
