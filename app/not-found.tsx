import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-16 md:py-24">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-brand-200">404</h1>
        <h2 className="text-3xl font-bold mb-4">Seite nicht gefunden</h2>
        <p className="text-gray-600 mb-8">
          Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben. Bitte überprüfen Sie die URL oder kehren
          Sie zur Startseite zurück.
        </p>
        <Button size="lg" asChild>
          <Link href="/">Zurück zur Startseite</Link>
        </Button>
      </div>
    </div>
  )
}
