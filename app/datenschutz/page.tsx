import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der StadtPulse GmbH. Informationen zur Verarbeitung Ihrer personenbezogenen Daten.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-lg max-w-none">
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher
            ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen
            Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen
            unserer Website.
          </p>

          <h2>1. Verantwortlicher</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            StadtPulse GmbH
            <br />
            Kärntner Straße 12
            <br />
            1010 Wien, Österreich
            <br />
            Tel.: +43 1 896 52 62
            <br />
            E-Mail: info@stadtpulse.com
          </p>

          <h2>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
          <p>
            Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen Ihrer Bestellung, bei einer Kontaktaufnahme
            mit uns (z.B. per Kontaktformular oder E-Mail) oder bei Eröffnung eines Kundenkontos freiwillig mitteilen.
            Welche Daten erhoben werden, ist aus den jeweiligen Eingabeformularen ersichtlich. Wir verwenden die von
            Ihnen mitgeteilten Daten zur Vertragsabwicklung und Bearbeitung Ihrer Anfragen.
          </p>

          <h2>3. Datensicherheit</h2>
          <p>
            Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre durch uns verwalteten Daten
            gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter
            Personen zu schützen. Unsere Sicherheitsverfahren werden regelmäßig überprüft und dem technologischen
            Fortschritt angepasst.
          </p>

          <h2>4. Cookies</h2>
          <p>
            Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers
            auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies, um unser Angebot
            nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen.
            Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
          </p>
          <p>
            Wenn Sie dies nicht wünschen, können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von
            Cookies informiert und Sie dies nur im Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die
            Funktionalität unserer Website eingeschränkt sein.
          </p>

          <h2>5. Webanalyse</h2>
          <p>
            Unsere Website verwendet Funktionen des Webanalysedienstes Google Analytics. Dazu werden Cookies verwendet,
            die eine Analyse der Benutzung der Website durch Ihre Benutzer ermöglicht. Die dadurch erzeugten
            Informationen werden auf den Server des Anbieters übertragen und dort gespeichert.
          </p>
          <p>
            Sie können dies verhindern, indem Sie Ihren Browser so einrichten, dass keine Cookies gespeichert werden,
            oder indem Sie das entsprechende Add-on installieren.
          </p>

          <h2>6. Ihre Rechte</h2>
          <p>
            Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung,
            Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen
            das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt
            worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist dies die
            Datenschutzbehörde.
          </p>

          <h2>7. Kontakt</h2>
          <p>
            Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an
            die unter Punkt 1 dieser Datenschutzerklärung genannten Kontaktperson.
          </p>

          <p className="text-sm text-gray-500 mt-8">Stand: Mai 2025</p>
        </div>
      </div>
    </div>
  )
}
