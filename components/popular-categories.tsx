import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Code, PenTool, FileText, Camera, Laptop, Megaphone, BarChart, Languages } from "lucide-react"

export function PopularCategories() {
  const categories = [
    {
      id: 1,
      name: "Web Development",
      icon: <Code className="h-8 w-8 text-green-600" />,
      count: 1245,
      href: "/categories/web-development",
    },
    {
      id: 2,
      name: "Graphic Design",
      icon: <PenTool className="h-8 w-8 text-green-600" />,
      count: 987,
      href: "/categories/graphic-design",
    },
    {
      id: 3,
      name: "Content Writing",
      icon: <FileText className="h-8 w-8 text-green-600" />,
      count: 876,
      href: "/categories/content-writing",
    },
    {
      id: 4,
      name: "Photography",
      icon: <Camera className="h-8 w-8 text-green-600" />,
      count: 654,
      href: "/categories/photography",
    },
    {
      id: 5,
      name: "Mobile Development",
      icon: <Laptop className="h-8 w-8 text-green-600" />,
      count: 543,
      href: "/categories/mobile-development",
    },
    {
      id: 6,
      name: "Digital Marketing",
      icon: <Megaphone className="h-8 w-8 text-green-600" />,
      count: 432,
      href: "/categories/digital-marketing",
    },
    {
      id: 7,
      name: "Data Analysis",
      icon: <BarChart className="h-8 w-8 text-green-600" />,
      count: 321,
      href: "/categories/data-analysis",
    },
    {
      id: 8,
      name: "Translation",
      icon: <Languages className="h-8 w-8 text-green-600" />,
      count: 210,
      href: "/categories/translation",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Popular Categories</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Browse our most in-demand services and find the perfect match for your project
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {categories.map((category) => (
            <Link key={category.id} href={category.href}>
              <Card className="overflow-hidden transition-all hover:shadow-md hover:border-green-200">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} freelancers</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/categories"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  )
}
