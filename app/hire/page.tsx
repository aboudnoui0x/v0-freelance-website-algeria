import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Search, MapPin, CheckCircle } from "lucide-react"

export default function HirePage() {
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
      verified: true,
      description:
        "Creative graphic designer with 5+ years of experience specializing in brand identity and UI/UX design.",
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
      verified: true,
      description:
        "Full-stack developer with expertise in React and Node.js. I build responsive and scalable web applications.",
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
      verified: false,
      description:
        "Professional content writer and translator specializing in SEO-optimized content in Arabic, French, and English.",
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
      verified: true,
      description:
        "Mobile app developer with expertise in Flutter and React Native. I create beautiful, functional apps for iOS and Android.",
    },
    {
      id: 5,
      name: "Nadia Hamidi",
      title: "Digital Marketer",
      rating: 4.6,
      reviews: 76,
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Social Media", "SEO", "Google Ads"],
      location: "Algiers",
      verified: true,
      description:
        "Digital marketing specialist with a focus on social media management, SEO, and paid advertising campaigns.",
    },
    {
      id: 6,
      name: "Omar Bensouda",
      title: "Video Editor",
      rating: 4.8,
      reviews: 92,
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Video Editing", "Animation", "Motion Graphics"],
      location: "Tlemcen",
      verified: false,
      description:
        "Professional video editor with experience in creating engaging content for social media and advertising.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-green-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hire Top Talent in Algeria</h1>
            <p className="mt-4 text-gray-500 md:text-xl">
              Find and hire skilled freelancers for your projects from across Algeria
            </p>
          </div>
          <div className="max-w-3xl mx-auto mt-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search for skills or services..."
                  className="pl-8 bg-white shadow-sm"
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="web">Web Development</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="writing">Writing</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-green-600 hover:bg-green-700">Search</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-[250px_1fr] lg:gap-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold">Filters</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Category</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="web-dev" className="rounded border-gray-300" />
                        <label htmlFor="web-dev" className="text-sm">
                          Web Development
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="design" className="rounded border-gray-300" />
                        <label htmlFor="design" className="text-sm">
                          Design
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="writing" className="rounded border-gray-300" />
                        <label htmlFor="writing" className="text-sm">
                          Writing & Translation
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="marketing" className="rounded border-gray-300" />
                        <label htmlFor="marketing" className="text-sm">
                          Digital Marketing
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Location</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="algiers" className="rounded border-gray-300" />
                        <label htmlFor="algiers" className="text-sm">
                          Algiers
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="oran" className="rounded border-gray-300" />
                        <label htmlFor="oran" className="text-sm">
                          Oran
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="constantine" className="rounded border-gray-300" />
                        <label htmlFor="constantine" className="text-sm">
                          Constantine
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="annaba" className="rounded border-gray-300" />
                        <label htmlFor="annaba" className="text-sm">
                          Annaba
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Rating</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="rating-4" className="rounded border-gray-300" />
                        <label htmlFor="rating-4" className="text-sm flex items-center">
                          4+ <Star className="h-3 w-3 ml-1 fill-yellow-400 text-yellow-400" />
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="rating-3" className="rounded border-gray-300" />
                        <label htmlFor="rating-3" className="text-sm flex items-center">
                          3+ <Star className="h-3 w-3 ml-1 fill-yellow-400 text-yellow-400" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Verification</h4>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="verified" className="rounded border-gray-300" />
                      <label htmlFor="verified" className="text-sm">
                        Verified only
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Available Freelancers</h2>
                <Select defaultValue="rating">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="reviews">Most Reviews</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {freelancers.map((freelancer) => (
                  <Card key={freelancer.id} className="overflow-hidden transition-all hover:shadow-md">
                    <CardHeader className="p-0">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={freelancer.image || "/placeholder.svg"}
                          alt={freelancer.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <CardTitle className="text-lg">
                            <Link href={`/freelancers/${freelancer.id}`} className="hover:text-green-600">
                              {freelancer.name}
                            </Link>
                          </CardTitle>
                          <p className="text-gray-500">{freelancer.title}</p>
                        </div>
                        {freelancer.verified && (
                          <Badge variant="outline" className="flex items-center gap-1 font-normal">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{freelancer.rating}</span>
                        <span className="text-gray-500 text-sm">({freelancer.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                        <MapPin className="h-4 w-4" />
                        {freelancer.location}
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">{freelancer.description}</p>
                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-2 pt-0 px-4 pb-4">
                      {freelancer.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="font-normal">
                          {skill}
                        </Badge>
                      ))}
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center">
                <Button variant="outline" className="mr-2">
                  Previous
                </Button>
                <Button variant="outline" className="bg-green-50">
                  1
                </Button>
                <Button variant="outline" className="mx-1">
                  2
                </Button>
                <Button variant="outline" className="mx-1">
                  3
                </Button>
                <Button variant="outline" className="ml-2">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
