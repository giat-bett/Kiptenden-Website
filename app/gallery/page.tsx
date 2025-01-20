import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function GalleryPage() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1920",
      alt: "Community learning session",
      title: "Community Workshop 2023",
    },
    {
      src: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1920",
      alt: "Students in discussion",
      title: "Student Discussion Group",
    },
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1920",
      alt: "Educational workshop",
      title: "Educational Workshop",
    },
    {
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920",
      alt: "Graduation celebration",
      title: "Graduation Day",
    },
    {
      src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1920",
      alt: "Student success",
      title: "Success Stories",
    },
    {
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1920",
      alt: "Group study session",
      title: "Group Study",
    },
  ]

  return (
    <div>
      <section className="relative h-[300px] mb-12">
        <Image
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1920"
          alt="Gallery header"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 container h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">Photo Gallery</h1>
        </div>
      </section>

      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card key={index} className="border-2 border-secondary">
              <CardContent className="p-4">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="px-0 pt-4">
                  <h3 className="font-semibold text-lg text-primary">{image.title}</h3>
                </CardHeader>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

