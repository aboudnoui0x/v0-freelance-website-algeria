import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Mohammed Belkacem",
      role: "Startup Founder",
      company: "TechAlgiers",
      content:
        "FreelanceAlgeria helped me find the perfect developer for my startup. The quality of talent on this platform is exceptional.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      id: 2,
      name: "Samira Hadjali",
      role: "Freelance Designer",
      company: "Independent",
      content:
        "Since joining FreelanceAlgeria, I've been able to connect with amazing clients and grow my design business substantially.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      id: 3,
      name: "Ahmed Kaddour",
      role: "Marketing Director",
      company: "AlgeriaMedia",
      content:
        "We've hired multiple content writers through this platform. The process is smooth and the talent pool is impressive.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4,
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Hear from freelancers and clients who have found success on our platform
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
