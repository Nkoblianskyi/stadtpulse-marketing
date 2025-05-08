import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { WorkShowcase } from "@/components/work-showcase"
import { Testimonials } from "@/components/testimonials"
import { BlogPreview } from "@/components/blog-preview"
import { CTASection } from "@/components/cta-section"
import Script from "next/script"


export default function HomePage() {
  return (
    <>
      <Script id="schema-homepage" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "StadtPulse GmbH | Offline Marketing Agentur Wien",
            "description": "Ihre Offline-Marketingagentur in Wien für Billboards, Broschüren, Transportwerbung und Branding-Materialien.",
            "url": "https://stadtpulse.com",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".hero-text"]
            },
            "potentialAction": {
              "@type": "ReadAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://stadtpulse.com/kontakt"
              }
            }
          }
        `}
      </Script>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WorkShowcase />
      <Testimonials />
      <BlogPreview />
      <CTASection />
    </>
  )
}
