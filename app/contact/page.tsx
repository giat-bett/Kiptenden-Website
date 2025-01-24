"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Image from "next/image"
import { useFormState, useFormStatus } from "react-dom"
import { submitContactForm } from "../actions"
import { toast } from "sonner"
import { useEffect } from "react"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
  )
}

export default function ContactPage() {
  const [state, formAction] = useFormState(submitContactForm, null)

  useEffect(() => {
    if (state) {
      if (state.success) {
        toast.success(state.message)
      } else {
        toast.error(state.message)
      }
    }
  }, [state])

  return (
    <div>
      <section className="relative h-[300px] mb-12">
        <Image
          src="/images/the-group.jpg?q=80&w=1920"
          alt="Contact header"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 container h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">Contact Us</h1>
        </div>
      </section>

      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-secondary">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-4">
                <div>
                  <Input placeholder="Your Name" name="name" required aria-label="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" name="email" required aria-label="Your Email" />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    className="min-h-[150px]"
                    required
                    aria-label="Your Message"
                  />
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Kiptenden, Kericho, Kenya</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="break-all">kiptendeneducationempowerment@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+254 720 572 348</span>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold mb-3">Follow Us</h3>
                <div className="flex gap-4">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" aria-label="Facebook">
                      <Facebook className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" aria-label="Twitter">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" aria-label="Instagram">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

