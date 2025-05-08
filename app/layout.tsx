import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieConsent } from "@/components/cookie-consent"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Script from "next/script"

const inter = Outfit({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://stadtpulse.com"),
  title: {
    default: "StadtPulse GmbH | Offline Marketing Agentur Wien",
    template: "%s | StadtPulse GmbH",
  },
  description:
    "Ihre Offline-Marketingagentur in Wien für Billboards, Broschüren, Transportwerbung und Branding-Materialien.",
  keywords: ["Marketing", "Offline Marketing", "Wien", "Billboards", "Broschüren", "Transportwerbung", "Branding"],
  authors: [{ name: "StadtPulse GmbH" }],
  creator: "StadtPulse GmbH",
  publisher: "StadtPulse GmbH",
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://stadtpulse.com",
    title: "StadtPulse GmbH | Offline Marketing Agentur Wien",
    description:
      "Ihre Offline-Marketingagentur in Wien für Billboards, Broschüren, Transportwerbung und Branding-Materialien.",
    siteName: "StadtPulse GmbH",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <Script id="schema-organization" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "StadtPulse GmbH",
              "url": "https://stadtpulse.com",
              "logo": "https://stadtpulse.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+43 1 896 52 62",
                "contactType": "customer service",
                "availableLanguage": ["German", "English"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kärntner Straße 12",
                "addressLocality": "Wien",
                "postalCode": "1010",
                "addressCountry": "AT"
              },
              "sameAs": []
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
