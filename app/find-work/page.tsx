import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase, Clock, DollarSign, MapPin, Search } from "lucide-react"

export default function FindWorkPage() {
  const jobs = [
    {
      id: 1,
      title: "Website Redesign for E-commerce Store",
      company: "AlgeriaShop",
      location: "Algiers",
      type: "Fixed Price",
      budget: "50,000 DZD",
      posted: "2 days ago",
      skills: ["Web Design", "Shopify", "UI/UX"],
      description:
        "Looking for an experienced web designer to redesign our e-commerce store. The project includes updating the UI/UX and implementing new features.",
    },
    {
      id: 2,
      title: "Arabic-French Content Translator",
      company: "MediaGroup",
      location: "Remote",
      type: "Hourly",
      budget: "1,500 DZD/hr",
      posted: "1 day ago",
      skills: ["Translation", "Content Writing", "Editing"],
      description:
        "We need a professional translator to help with translating marketing content from Arabic to French and vice versa.",
    },
    {
      id: 3,
      title: "Mobile App Developer for Delivery Service",
      company: "FastDelivery",
      location: "Oran",
      type: "Fixed Price",
      budget: "120,000 DZD",
      posted: "3 days ago",
      skills: ["React Native", "Firebase", "API Integration"],
      description:
        "We're looking for a mobile app developer to create a delivery tracking app for our customers. Experience with React Native is required.",
    },
    {
      id: 4,
      title: "Social Media Marketing Specialist",
      company: "AlgeriaFashion",
      location: "Constantine",
      type: "Part-time",
      budget: "30,000 DZD/month",
      posted: "5 days ago",
      skills: ["Social Media", "Content Creation", "Analytics"],
      description:
        "Seeking a social media specialist to manage our brand presence across multiple platforms and create engaging content.",
    },
    {
      id: 5,
      title: "Logo Design for Tech Startup",
      company: "TechInnovate",
      location: "Remote",
      type: "Fixed Price",
      budget: "15,000 DZD",
      posted: "1 week ago",
      skills: ["Logo Design", "Branding", "Illustrator"],
      description: "Our tech startup needs a modern, professional logo that represents innovation and technology.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-green-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Find Work in Algeria</h1>
            <p className="mt-4 text-gray-500 md:text-xl">
              Browse thousands of freelance opportunities across Algeria and apply to jobs that match your skills
            </p>
          </div>
          <div className="max-w-3xl mx-auto mt-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input type="search" placeholder="Search for jobs..." className="pl-8 bg-white shadow-sm" />
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
                    <h4 className="text-sm font-medium mb-2">Job Type</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="fixed" className="rounded border-gray-300" />
                        <label htmlFor="fixed" className="text-sm">
                          Fixed Price
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="hourly" className="rounded border-gray-300" />
                        <label htmlFor="hourly" className="text-sm">
                          Hourly Rate
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="fulltime" className="rounded border-gray-300" />
                        <label htmlFor="fulltime" className="text-sm">
                          Full-time
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="parttime" className="rounded border-gray-300" />
                        <label htmlFor="parttime" className="text-sm">
                          Part-time
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
                        <input type="checkbox" id="remote" className="rounded border-gray-300" />
                        <label htmlFor="remote" className="text-sm">
                          Remote
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Experience Level</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="entry" className="rounded border-gray-300" />
                        <label htmlFor="entry" className="text-sm">
                          Entry Level
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="intermediate" className="rounded border-gray-300" />
                        <label htmlFor="intermediate" className="text-sm">
                          Intermediate
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="expert" className="rounded border-gray-300" />
                        <label htmlFor="expert" className="text-sm">
                          Expert
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Available Jobs</h2>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="budget-high">Budget: High to Low</SelectItem>
                    <SelectItem value="budget-low">Budget: Low to High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-4">
                {jobs.map((job) => (
                  <Card key={job.id} className="overflow-hidden transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">
                          <Link href={`/jobs/${job.id}`} className="hover:text-green-600">
                            {job.title}
                          </Link>
                        </CardTitle>
                        <Badge variant="outline" className="font-normal">
                          {job.type}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.company}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {job.budget}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.posted}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-gray-600">{job.description}</p>
                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-2 pt-2">
                      {job.skills.map((skill) => (
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
