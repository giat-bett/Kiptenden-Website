"use client"

import { Facebook, Instagram, Mail, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-md">
  <div className="container py-8 sm:py-12 mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Logo and Description */}
      <div className="flex flex-col items-center md:items-start">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-4-KUHkH7C4rAL0APUftdWudZ3p8KMrhv.jpeg"
          alt="KEEG Logo"
          width={100}
          height={100}
          className="rounded-lg mb-4"
        />
        <p className="text-muted-foreground text-center md:text-left">
          Empowering community through Resource mobilization for quality education
        </p>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col gap-4 p-4">
        {/* add some padding to this div */}

        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
        <nav className="flex flex-col gap-2">
          <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors">
            Our Programs
          </Link>
          <Link href="/success-stories" className="text-muted-foreground hover:text-primary transition-colors">
            Success Stories
          </Link>
          <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
            Gallery
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
      </div>

      {/* Social Media and Newsletter */}
      <div className="flex flex-col gap-4 p-4">
        <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
        <div className="flex gap-4">
          <Link href="#" className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-110">
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-110">
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-110">
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-110">
            <Mail className="h-6 w-6" />
          </Link>
        </div>

        {/* Newsletter */}
        <div className="mt-6">
          <h4 className="font-bold mb-2">Subscribe to Our Newsletter</h4>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring"
            />
            <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-8 text-center text-muted-foreground">
      <p>&copy; {new Date().getFullYear()} Kiptenden Education Empowerment. All rights reserved.</p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mt-4 text-primary underline hover:text-secondary transition-colors"
      >
        Back to Top
      </button>
    </div>
  </div>
</footer>

  )
}