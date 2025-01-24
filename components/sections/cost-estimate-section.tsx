"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, ArrowRight } from "lucide-react"

export default function CostEstimateSection() {
  const costItems = [
    {
      srNo: 1,
      description: "½ acre land",
      estimatedCost: "2.5million",
    },
    {
      srNo: 2,
      description: "Estimated cost of setting up structures/ offices",
      estimatedCost: "2million",
    },
  ]

  return (
    <section className="max-w-4xl mx-auto p-6 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Cost estimate</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="prose prose-gray">
            <p className="text-gray-700">
              We have identified a farm some central place and have requested owner to purchase the same. The total cost
              of purchasing is 2.5 million and e estimate the initial construction to take 2million totaling to
              4.5million. The 50 members have registered with kshs 20, 000 @ this will ensure we raise an amount of
              1,000, 000. We are still short of 3.5 million. We will be happy to solicit more on this noble course.
            </p>
            <p className="font-medium mt-4">The general estimate of the project is as follows:</p>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-24">SR/NO</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="w-32">Estimated Cost</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {costItems.map((item) => (
                <TableRow key={item.srNo}>
                  <TableCell>{item.srNo}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.estimatedCost}</TableCell>
                </TableRow>
              ))}
              <TableRow className="font-medium">
                <TableCell colSpan={2}>Total Cost</TableCell>
                <TableCell>4.5 Million</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <p className="text-sm text-gray-600 italic mt-4">
            NB: Members are on the way raising 1 million and we shall be short of 3.5 million
          </p>
        </CardContent>
      </Card>

      {/* Call to Action Card */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="pt-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Support Our Noble Cause</h3>
              <p className="text-primary-foreground/90">
                We need your help to raise the remaining 3.5 million. Your contribution, no matter how small, will make
                a significant impact on this project.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Call us: +254 720 572 348</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>Email: kiptendeneducationempowerment@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
                onClick={() => (window.location.href = "mailto:kiptendeneducationempowerment@gmail.com")}
              >
                Reach Out to Contribute
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-sm text-primary-foreground/90 text-center">
                All contributions will be properly acknowledged and documented
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}