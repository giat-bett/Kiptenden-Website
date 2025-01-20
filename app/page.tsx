import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Users, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1920"
            alt="Students studying"
            fill
            className="object-cover brightness-[0.2]"
            priority
          />
        </div>
        <div className="container mx-auto text-center relative z-10 text-white">
          <div className="mb-8 flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-4-KUHkH7C4rAL0APUftdWudZ3p8KMrhv.jpeg"
              alt="KEEG Logo"
              width={200}
              height={200}
              className="rounded-lg shadow-xl"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Empowering Through Education</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Building a brighter future through community education and empowerment since 2014
          </p>
          <Button asChild size="lg" variant="secondary" className="text-primary font-semibold">
            <Link href="/about">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 mx-auto container p-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { value: "Integrity", icon: "🎯" },
            { value: "Accountability", icon: "⚖️" },
            { value: "Transparency", icon: "👁️" },
            { value: "Team work", icon: "🤝" },
          ].map(({ value, icon }) => (
            <Card key={value} className="border-2 border-secondary">
              <CardContent className="p-6 text-center">
                <span className="text-4xl mb-4 block">{icon}</span>
                <h3 className="font-bold text-xl mb-2 text-primary">{value}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=1920"
            alt="Educational background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        {/* Mission */}
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-secondary">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                </div>
                <p>To empower community through Resource mobilization for quality education</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-secondary">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                </div>
                <p>To be the best change agents in education, social and economic sector.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-2 border-secondary">
            <CardContent className="p-6 text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">77+</h3>
              <p className="text-muted-foreground">Students to Universities</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-secondary">
            <CardContent className="p-6 text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">10</h3>
              <p className="text-muted-foreground">Years of Impact</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-secondary">
            <CardContent className="p-6 text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">3</h3>
              <p className="text-muted-foreground">Core Programs</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

