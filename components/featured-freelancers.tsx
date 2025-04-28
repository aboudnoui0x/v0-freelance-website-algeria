import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export function FeaturedFreelancers() {
  const freelancers = [
    {
      id: 1,
      name: "Amina Benali",
      title: "Graphic Designer",
      rating: 4.9,
      reviews: 124,
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Logo Design", "Branding", "UI/UX"],
      location: "Algiers",
    },
    {
      id: 2,
      name: "Karim Hadj",
      title: "Web Developer",
      rating: 4.8,
      reviews: 98,
      image: "/placeholder.svg?height=300&width=300",
      skills: ["React", "Node.js", "MongoDB"],
      location: "Oran",
    },
    {
      id: 3,
      name: "Leila Mansouri",
      title: "Content Writer",
      rating: 4.7,
      reviews: 87,
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Copywriting", "SEO", "Translation"],
      location: "Constantine",
    },
    {
      id: 4,
      name: "Youcef Boudjema",
      title: "Mobile Developer",
      rating: 4.9,
      reviews: 112,
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Flutter", "React Native", "iOS/Android"],
      location: "Annaba",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Freelancers</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Discover top-rated professionals ready to bring your projects to life
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {freelancers.map((freelancer) => (
            <Card key={freelancer.id} className="overflow-hidden transition-all hover:shadow-lg">
              <Link href={`/freelancers/${freelancer.id}`}>
                <div className="aspect-square relative">
                  <Image
                    src={freelancer.image || "/placeholder.svg"}
                    alt={freelancer.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">{freelancer.name}</h3>
                    <p className="text-gray-500">{freelancer.title}</p>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{freelancer.rating}</span>
                      <span className="text-gray-500 text-sm">({freelancer.reviews} reviews)</span>
                    </div>
                    <p className="text-sm text-gray-500">{freelancer.location}</p>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
                  {freelancer.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="font-normal">
                      {skill}
                    </Badge>
                  ))}
                </CardFooter>
              </Link>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/freelancers"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            View All Freelancers
          </Link>
        </div>
      </div>
    </section>
  )
}
