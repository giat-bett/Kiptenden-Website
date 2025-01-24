import CostEstimateSection from "@/components/sections/cost-estimate-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  const messages = [
    {
      name: "Dr Bengat Kipyegon Joseph",
      title: "Patron",
      role: "University of Embu, Kenya",
      image: "/images/leaders-patron.png?height=400&width=400",
      message:
        `Kiptenden Education Empowerment group, founded in 2014, has withstood a test of time. The 
group was founded on the premise of social transformation through resource mobilization and 
education empowerment. We have seen it grow over years and the number of students supported 
to university level is a true testament of commitment and resilience. 

As we celebrate ten years of 
excellent work; we desire to refocus on strategy in order to keep the fire of success flowing. We 
are reaching out to likeminded partners to travel this journey together as we plan to establish 
community resource centre which will hold a library, ICT training centre, and other learning 
facilities. 

We believe on unity of purpose and direction and am proud to be identified with a 
dynamic society such as ours. Long live Kiptenden Education Empowerment`,
    },
    {
      name: "Davis",
      title: "Community Leader",
      role: "Education Advocate",
      image: "/images/leaders-davis.png?height=400&width=400",
      message: `Education is the most potent weapon we can employ to transform the world. This assertion reflects the transforming potential of education for both individuals and societies. Empowerment through education provides the information, skills, and confidence needed to face life's challenges.

      Through active engagement, workshops, and peer learning, we empower our community. By sharing resources creatively and incorporating local culture, we make education more accessible while protecting our community identity. Our mantra has always been to leave home to change home.

      The Community's light shines brightly as young people unite to empower one another through education. Together, we demonstrate that great things can be accomplished when a community works as one.`,
    },
    {
      name: "Mercy Rono",
      title: "Pioneer Member",
      role: "Alumni",
      image: "/images/leaders-mercy.png?height=400&width=400",
      message:
        `Since the inception of Kiptenden Education Empowerment Group (KEEG), we have seen 
programs that have benefitted us as students of Chepseon Kiptenden. Such programs include group 
discussions during holidays, occasional mentorship programs, and farewell parties/fundraisers to 
high schools, colleges and universities. 

I wish to acknowledge efforts that have been put over time 
in ensuring continuity of these programs. Our biggest mentor, Dr. Bengat, has always walked with 
us and given us guidances. Second, I thank our parents who comprise the committee that first came 
up with the idea of this group. They saw it good for us to benefit in matters education. 

Lastly, my gratitude goes to students of Chepseon Kiptenden for positively embracing this good thing. We 
actually count ourselves lucky, and we thank God!

I am a proud pioneer, and I am happy to see more and more beneficiaries over generations!
`,
    },

  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] mb-12">
        <Image
          src="/images/about-keeg.jpg?q=80&w=1920"
          alt="Education community"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 container h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">About Us</h1>
        </div>
      </section>

      <div className="container max-w-8xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <Card>
              <CardContent className="p-6">
              <p className="text-lg leading-relaxed">
                We are a community-based organization dedicated to enhancing education uptake within the community by empowering 
                school-going students to stay focused on their studies. Our initiatives include:  
                <ul className="list-disc list-inside mt-2">
                  <li>Organizing community motivational workshops during holidays.</li>
                  <li>Facilitating group discussions, idea-sharing sessions, and competitions.</li>
                  <li>Providing learning materials to support academic growth.</li>
                  <li>Offering mentorship programs for young community professionals.</li>
                </ul>
              </p>

              </CardContent>
            </Card>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/images/keeg-banner-unveil.jpg?q=80&w=1920"
              alt="Unveiling of the banner"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-secondary/20 p-8 rounded-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/parents-get-gifts.jpg?q=80&w=1920"
                alt="Community meeting"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Story</h2>
              <p className="text-lg leading-relaxed">
                The Community based organization was founded in 2014 by parents who saw the need to bring together
                children from different homes to encourage them and facilitate their learning during the holidays.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Messages from Our Leaders</h2>
          <div className="space-y-12">
            {messages.map((person, index) => (
              <Card key={index} className="border-2 border-secondary overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1 p-6 bg-secondary/10">
                    <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                      <Image src={person.image || "/placeholder.svg"} alt={person.name} fill className="object-cover" />
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-xl text-primary">{person.name}</h3>
                      <p className="text-lg text-primary/80">{person.title}</p>
                      <p className="text-sm text-muted-foreground">{person.role}</p>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="space-y-4">
                      {person.message.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="text-muted-foreground leading-relaxed">
                          {paragraph.trim()}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <CostEstimateSection/>
      </div>
    </div>
  )
}

