import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"

export default function SuccessStoriesPage() {
  const statistics = [
    { year: "2013", count: 0 },
    { year: "2014", count: 5 },
    { year: "2015", count: 7 },
    { year: "2016", count: 12 },
    { year: "2017", count: 4 },
    { year: "2018", count: 7 },
    { year: "2019", count: 7 },
    { year: "2020", count: 6 },
    { year: "2021", count: 5 },
    { year: "2022", count: 12 },
    { year: "2023", count: 12 },
  ]

  const stories = [
    {
      title: "Ten Year Anniversary",
      image: "/images/ten-year-anniversary.jpg?q=80&w=1920",
      content:
        "Though our commitment and resilience we marked our ten year anniversary in the year 2024. This was a true reflection of the journey that we have undertaken. The commitment from both parents and students is what brought us this far.",
    },
    {
      title: "Growing Impact",
      image: "/images/university-comrades.jpg?q=80&w=1920",
      content:
        "Over the years, we've helped 77 students transition to universities. Our commitment to education has created lasting change in our community, empowering the next generation of leaders.",
    },
  ]

  return (
    <div>
      <section className="relative h-[300px] mb-12">
        <Image
          src="/images/many-members-in-tent.jpg?q=80&w=1920"
          alt="Success stories header"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 container h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">Success Stories</h1>
        </div>
      </section>

      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {stories.map((story, index) => (
            <Card key={index} className="border-2 border-secondary">
              <div className="relative h-[200px]">
                <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{story.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">{story.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary/10 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">University Transitions Over the Years</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Year</TableHead>
                <TableHead>Students to University</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {statistics.map((stat) => (
                <TableRow key={stat.year}>
                  <TableCell className="font-medium">{stat.year}</TableCell>
                  <TableCell>{stat.count}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-secondary/20 font-bold">
                <TableCell>TOTAL</TableCell>
                <TableCell>77</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

