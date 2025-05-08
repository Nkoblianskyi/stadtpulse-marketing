"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
    // Here you would initialize analytics, etc.
  }

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", "necessary")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg md:flex md:items-center md:justify-between">
      <div className="mb-4 md:mb-0 md:mr-8 md:max-w-3xl">
        <div className="flex items-start">
          <div>
            <h3 className="text-lg font-bold mb-2">Wir verwenden Cookies</h3>
            <p className="text-gray-600">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Durch die
              Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß unserer{" "}
              <a href="/cookies" className="text-brand-600 hover:underline">
                Cookie-Richtlinie
              </a>{" "}
              zu.
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 p-1 text-gray-400 hover:text-gray-600 md:hidden"
            aria-label="Schließen"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <Button variant="outline" onClick={acceptNecessary}>
          Nur notwendige Cookies
        </Button>
        <Button onClick={acceptAll}>Alle akzeptieren</Button>
      </div>
    </div>
  )
}
