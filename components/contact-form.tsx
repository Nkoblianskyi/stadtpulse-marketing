"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    acceptTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormState((prev) => ({ ...prev, acceptTerms: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Reset form and show success message
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        acceptTerms: false,
      })
      setIsSubmitted(true)
    } catch (err) {
      setError("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 p-6 rounded-lg border border-green-100 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Nachricht gesendet!</h3>
        <p className="text-green-700 mb-4">
          Vielen Dank für Ihre Anfrage. Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.
        </p>
        <Button onClick={() => setIsSubmitted(false)}>Neue Anfrage</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            placeholder="Ihr vollständiger Name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-Mail *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            required
            placeholder="ihre-email@beispiel.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formState.phone}
            onChange={handleChange}
            placeholder="+43 123 456789"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Betreff *</Label>
          <Input
            id="subject"
            name="subject"
            value={formState.subject}
            onChange={handleChange}
            required
            placeholder="Worum geht es?"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Nachricht *</Label>
        <Textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
          placeholder="Wie können wir Ihnen helfen?"
          rows={6}
          className="resize-none"
        />
      </div>

      <div className="flex items-start space-x-2 mt-4">
        <Checkbox id="acceptTerms" checked={formState.acceptTerms} onCheckedChange={handleCheckboxChange} required />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="acceptTerms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Ich stimme der{" "}
            <Link href="/datenschutz" className="text-brand-600 hover:underline">
              Datenschutzerklärung
            </Link>{" "}
            zu und akzeptiere die{" "}
            <Link href="/agb" className="text-brand-600 hover:underline">
              AGB
            </Link>
            .
          </label>
        </div>
      </div>

      {error && <div className="p-4 bg-red-50 text-red-700 rounded-lg">{error}</div>}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || !formState.acceptTerms}>
        {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
      </Button>
    </form>
  )
}
