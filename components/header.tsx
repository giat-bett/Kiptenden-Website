"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-4-KUHkH7C4rAL0APUftdWudZ3p8KMrhv.jpeg"
            alt="KEEG Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="font-bold text-xl text-primary hidden md:block">Kiptenden Education Empowerment</span>
          <span className="font-bold text-xl text-primary md:hidden">KEEG</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

