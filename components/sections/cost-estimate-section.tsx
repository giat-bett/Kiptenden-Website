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
    <section className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl font-bold">Future Plans</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6">
          <div className="prose prose-sm sm:prose-base prose-gray">
            <p className="text-gray-700">
              We have identified a farm some central place and have requested owner to purchase the same. The total cost
              of purchasing is 2.5 million and e estimate the initial construction to take 2million totaling to
              4.5million. The 50 members have registered with kshs 20, 000 @ this will ensure we raise an amount of
              1,000, 000. We are still short of 3.5 million. We will be happy to solicit more on this noble course.
            </p>
            <p className="font-medium mt-4">The general estimate of the project is as follows:</p>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16 sm:w-24">SR/NO</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="w-28 sm:w-32">Estimated Cost</TableHead>
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
          </div>

          <p className="text-xs sm:text-sm text-gray-600 italic mt-2 sm:mt-4">
            NB: Members are on the way raising 1 million and we shall be short of 3.5 million
          </p>
        </CardContent>
      </Card>

      {/* Call to Action Card */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="pt-6">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 items-center">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold break-words hyphens-auto">Support Our Noble Cause</h3>
              <p className="text-sm sm:text-base text-primary-foreground/90">
                We need your help to raise the remaining 3.5 million. Your contribution, no matter how small, will make
                a significant impact on this project.
              </p>
              <div className="space-y-2 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>Call us: +254 720 572 348</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="break-all">Email: kiptendeneducationempowerment@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="w-full whitespace-normal h-auto py-3"
                onClick={() => (window.location.href = "mailto:kiptendeneducationempowerment@gmail.com")}
              >
                <span className="flex items-center gap-2">
                  <span className="flex-grow">Reach Out to Contribute</span>
                  <ArrowRight className="h-4 w-4 flex-shrink-0" />
                </span>
              </Button>
              <p className="text-xs sm:text-sm text-primary-foreground/90 text-center">
                All contributions will be properly acknowledged and documented
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}