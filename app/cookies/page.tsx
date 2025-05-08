import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie-Richtlinie",
  description: "Cookie-Richtlinie der StadtPulse GmbH. Informationen zur Verwendung von Cookies auf unserer Website.",
}

export default function CookiePolicyPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Cookie-Richtlinie</h1>

        <div className="prose prose-lg max-w-none">
          <p>
            Diese Cookie-Richtlinie erläutert, wie StadtPulse GmbH („wir", „uns" oder „unser") Cookies und ähnliche
            Technologien verwendet, um Sie zu erkennen, wenn Sie unsere Website besuchen. Sie erklärt, was diese
            Technologien sind und warum wir sie verwenden, sowie Ihre Rechte, unsere Verwendung von Cookies zu
            kontrollieren.
          </p>

          <h2>1. Was sind Cookies?</h2>
          <p>
            Cookies sind kleine Datendateien, die auf Ihrem Computer oder mobilen Gerät platziert werden, wenn Sie eine
            Website besuchen. Cookies werden weithin verwendet, um Websites funktionieren zu lassen oder effizienter zu
            arbeiten, sowie um Informationen an die Eigentümer der Website zu liefern.
          </p>
          <p>
            Cookies setzen verschiedene Aufgaben um, wie z.B. Ihnen das effiziente Navigieren zwischen Seiten zu
            ermöglichen, sich an Ihre Präferenzen zu erinnern und generell Ihre Erfahrung zu verbessern.
          </p>

          <h2>2. Welche Arten von Cookies verwenden wir?</h2>
          <p>Wir verwenden folgende Arten von Cookies:</p>

          <h3>Notwendige Cookies</h3>
          <p>
            Diese Cookies sind für das Funktionieren unserer Website unerlässlich und können in unseren Systemen nicht
            abgeschaltet werden. Sie werden in der Regel nur als Reaktion auf von Ihnen durchgeführte Aktionen gesetzt,
            die einer Anforderung von Diensten gleichkommen, wie z.B. das Festlegen Ihrer Datenschutzeinstellungen, das
            Anmelden oder das Ausfüllen von Formularen. Sie können Ihren Browser so einstellen, dass er diese Cookies
            blockiert oder Sie darüber benachrichtigt, aber einige Teile der Website werden dann nicht funktionieren.
          </p>

          <h3>Leistungs-Cookies</h3>
          <p>
            Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir die Leistung unserer
            Website messen und verbessern können. Sie helfen uns zu verstehen, welche Seiten am beliebtesten und welche
            am wenigsten beliebt sind, und zu sehen, wie Besucher sich auf der Website bewegen. Alle Informationen, die
            diese Cookies sammeln, sind aggregiert und daher anonym.
          </p>

          <h3>Funktionale Cookies</h3>
          <p>
            Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung bereitzustellen.
            Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten hinzugefügt
            haben. Wenn Sie diese Cookies nicht zulassen, funktionieren einige oder alle dieser Dienste möglicherweise
            nicht einwandfrei.
          </p>

          <h3>Targeting-Cookies</h3>
          <p>
            Diese Cookies können über unsere Website von unseren Werbepartnern gesetzt werden. Sie können von diesen
            Unternehmen verwendet werden, um ein Profil Ihrer Interessen zu erstellen und Ihnen relevante Werbung auf
            anderen Websites zu zeigen. Sie speichern nicht direkt persönliche Informationen, sondern basieren auf der
            eindeutigen Identifizierung Ihres Browsers und Internet-Geräts.
          </p>

          <h2>3. Wie lange bleiben Cookies auf meinem Gerät?</h2>
          <p>
            Die Verweildauer eines Cookies auf Ihrem Gerät hängt davon ab, ob es sich um einen "persistenten" oder
            "Sitzungs"-Cookie handelt. Sitzungs-Cookies bleiben auf Ihrem Gerät, bis Sie Ihren Browser schließen.
            Persistente Cookies bleiben auf Ihrem Gerät, bis sie ablaufen oder gelöscht werden.
          </p>

          <h2>4. Cookies platzieren und verwenden</h2>
          <p>Cookies werden auf Ihrem Gerät oder in Ihrem Browser platziert und von diesem gelesen.</p>

          <h2>5. Wie kann ich die Verwendung von Cookies kontrollieren?</h2>
          <p>
            Sie haben das Recht zu entscheiden, ob Sie Cookies akzeptieren oder ablehnen möchten. Sie können Ihre
            Cookie-Präferenzen festlegen, indem Sie die Cookie-Einstellungen in unserem Cookie-Banner verwenden, der
            erscheint, wenn Sie unsere Website besuchen.
          </p>
          <p>
            Sie können auch Ihre Browser-Einstellungen so ändern, dass Cookies abgelehnt werden. Bitte beachten Sie
            jedoch, dass, wenn Sie Cookies deaktivieren, Sie möglicherweise nicht alle interaktiven Funktionen unserer
            Website nutzen können.
          </p>

          <h2>6. Änderungen an unserer Cookie-Richtlinie</h2>
          <p>
            Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren, um beispielsweise Änderungen der von uns
            verwendeten Cookies oder aus anderen betrieblichen, rechtlichen oder regulatorischen Gründen zu
            berücksichtigen. Bitte besuchen Sie diese Cookie-Richtlinie daher regelmäßig, um über unsere Verwendung von
            Cookies und verwandten Technologien informiert zu bleiben.
          </p>
          <p>Das Datum am Ende dieser Cookie-Richtlinie gibt an, wann sie zuletzt aktualisiert wurde.</p>

          <h2>7. Wo kann ich weitere Informationen erhalten?</h2>
          <p>
            Wenn Sie Fragen zu unserer Verwendung von Cookies oder anderen Technologien haben, senden Sie bitte eine
            E-Mail an info@stadtpulse.com oder verwenden Sie die Kontaktdaten auf unserer Website.
          </p>

          <p className="text-sm text-gray-500 mt-8">Stand: Mai 2025</p>
        </div>
      </div>
    </div>
  )
}
