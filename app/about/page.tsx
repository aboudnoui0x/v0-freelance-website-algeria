import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, TrendingUp, MapPin } from "lucide-react"

export default function AboutPage() {
  const team = [
    {
      name: "Farid Medjdoub",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Samira Hadjali",
      role: "Chief Operations Officer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Karim Benali",
      role: "Chief Technology Officer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Leila Mansouri",
      role: "Marketing Director",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-12 md:py-16 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About FreelanceAlgeria</h1>
              <p className="text-gray-500 md:text-xl">
                We're on a mission to transform the freelance landscape in Algeria by connecting talented professionals
                with businesses and individuals seeking quality services.
              </p>
            </div>
            <div className="mx-auto lg:mr-0">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="FreelanceAlgeria Team"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
            <p className="mt-4 text-gray-500">
              Founded in 2020, FreelanceAlgeria was born from a simple observation: Algeria has an incredible pool of
              talented professionals, but they lacked a dedicated platform to showcase their skills and connect with
              potential clients.
            </p>
            <p className="mt-4 text-gray-500">
              Our founder, Farid Medjdoub, experienced firsthand the challenges of freelancing in Algeria. After years
              of working as a freelance web developer and struggling to find consistent work, he decided to create a
              solution that would benefit the entire freelance community.
            </p>
            <p className="mt-4 text-gray-500">
              Today, FreelanceAlgeria has grown into the country's leading platform for freelancers and clients, with
              thousands of successful projects completed and a growing community of professionals across all industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Community First</h3>
                <p className="text-gray-500">
                  We prioritize building a supportive community where freelancers can grow and thrive.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Quality Work</h3>
                <p className="text-gray-500">
                  We maintain high standards to ensure clients receive exceptional service every time.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Economic Growth</h3>
                <p className="text-gray-500">
                  We're committed to contributing to Algeria's economic development through digital opportunities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <MapPin className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Local Focus</h3>
                <p className="text-gray-500">
                  We understand the unique needs of the Algerian market and tailor our platform accordingly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Team</h2>
            <p className="mt-4 text-gray-500">
              Meet the dedicated professionals working behind the scenes to make FreelanceAlgeria the best platform for
              freelancers and clients in Algeria.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative mx-auto rounded-full overflow-hidden w-40 h-40 mb-4">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose FreelanceAlgeria?</h2>
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2 mt-0.5" />
                <div className="text-left">
                  <h3 className="font-bold text-lg">Local Expertise</h3>
                  <p className="text-gray-500">
                    Our platform is specifically designed for the Algerian market, with features tailored to local needs
                    and preferences.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2 mt-0.5" />
                <div className="text-left">
                  <h3 className="font-bold text-lg">Verified Professionals</h3>
                  <p className="text-gray-500">
                    We verify the identity and credentials of our freelancers to ensure you're working with qualified
                    professionals.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2 mt-0.5" />
                <div className="text-left">
                  <h3 className="font-bold text-lg">Secure Payments</h3>
                  <p className="text-gray-500">
                    Our secure payment system protects both clients and freelancers, ensuring fair compensation for
                    quality work.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2 mt-0.5" />
                <div className="text-left">
                  <h3 className="font-bold text-lg">Dedicated Support</h3>
                  <p className="text-gray-500">
                    Our customer support team is available to assist with any questions or issues you may encounter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Community Today</h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Whether you're a freelancer looking for opportunities or a client seeking talent, FreelanceAlgeria is
                here to help.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/register">Create an Account</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
