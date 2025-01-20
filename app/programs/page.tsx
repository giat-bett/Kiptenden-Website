import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCheck, Users2 } from "lucide-react"
import Image from "next/image"

export default function ProgramsPage() {
  const programs = [
    {
      title: "Community Educational empowerment",
      icon: Users,
      description:
        "Sustainable development cannot be achieved in the absence of peace, and true and lasting peace can only be realized through the involvement of all actors within the society. This program strives to build communities' capacities to embrace participatory and inclusive peace processes. Bringing together children from the community builds up a sense of belonging in them and helps boost children's morale and confidence.",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1920",
    },
    {
      title: "Leadership and mentorship",
      icon: UserCheck,
      description:
        "This program seeks to strengthen the capacity of communities and most importantly empower the young Generation into taking up leadership roles and positions in their various institutions to effectively exercise their civic rights and duties. Through mentorship, we help guide students towards achieving their full potential and becoming future leaders.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1920",
    },
    {
      title: "Gender Equality",
      icon: Users2,
      description:
        "Our program aims at enhancing the capacity of communities to understand and address obstacles to gender equality. Our Objective is to contribute to a society where everyone regardless of gender has equal access to resources, opportunities as well as equal representation and participation in social, economic and political spheres.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1920",
    },
  ]

  return (
    <div>
      <section className="relative h-[300px] mb-12">
        <Image
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1920"
          alt="Programs header"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 container h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">Our Programs</h1>
        </div>
      </section>

      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="border-2 border-secondary overflow-hidden">
              <div className="relative h-[200px]">
                <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
              </div>
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-3">
                  <program.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-secondary/10 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Commitment</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Through these programs, we strive to create lasting change in our community by empowering the next
            generation through education, leadership, and equal opportunities for all.
          </p>
        </div>
      </div>
    </div>
  )
}

