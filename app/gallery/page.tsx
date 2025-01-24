import { ImageCarousel } from "@/components/sections/ImageCarousel"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
// import { ImageCarousel } from "@/components/ImageCarousel"

export default function GalleryPage() {
  const images = [
    {
      src: "/images/community-workshop.jpg?q=80&w=1920",
      alt: "Community learning session",
      title: "Community Workshop 2023",
    },
    {
      src: "/images/group-study.jpg?q=80&w=1920",
      alt: "Students in discussion",
      title: "Student Discussion Group",
    },
    {
      src: "/images/kiptenden-comrades.jpg?q=80&w=1920",
      alt: "Educational workshop",
      title: "Educational Workshop",
    },
    {
      src: "/images/graduates-and-dr-bengat.jpg?q=80&w=1920",
      alt: "Graduation celebration",
      title: "Graduation Day",
    },
    {
      src: "/images/women-empowerment-at-keeg.jpg?q=80&w=1920",
      alt: "Student success",
      title: "Success Stories",
    },
    {
      src: "/images/group-study.jpg?q=80&w=1920",
      alt: "Group study session",
      title: "Group Study",
    },
  ]

  return (
    <div className="space-y-12">
      <section className="relative h-[300px]">
        <Image
          src="/images/comrades-with-shoulder-bands.jpg?q=80&w=1920"
          alt="Gallery header"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 container h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">Photo Gallery</h1>
        </div>
      </section>
      <section className="container max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">All Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card key={index} className="border-2 border-secondary">
              <CardContent className="p-4">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="px-0 pt-4">
                  <h3 className="font-semibold text-lg text-primary">{image.title}</h3>
                </CardHeader>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="container max-w-7xl mx-auto px-4 py-2">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Images</h2>
        <ImageCarousel images={images} />
      </section>
    </div>
  )
}