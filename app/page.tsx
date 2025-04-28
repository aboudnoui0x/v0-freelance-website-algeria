import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { FeaturedFreelancers } from "@/components/featured-freelancers"
import { PopularCategories } from "@/components/popular-categories"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { Stats } from "@/components/stats"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Connect with Top Freelancers in Algeria
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Find skilled professionals for your projects or showcase your talents to potential clients across
                  Algeria.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/find-work">Find Work</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/hire">Hire Talent</Link>
                </Button>
              </div>
              <div className="relative mt-6">
                <div className="relative flex items-center max-w-md">
                  <Search className="absolute left-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search for skills or services..."
                    className="pl-8 bg-white shadow-sm"
                  />
                  <Button type="submit" className="ml-2 bg-green-600 hover:bg-green-700">
                    Search
                  </Button>
                </div>
              </div>
            </div>
            <div className="mx-auto lg:mr-0 relative">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Freelancers in Algeria"
                width={500}
                height={500}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Popular Categories */}
      <PopularCategories />

      {/* How It Works */}
      <HowItWorks />

      {/* Featured Freelancers */}
      <FeaturedFreelancers />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Join thousands of freelancers and businesses in Algeria's fastest growing platform.
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
                <Link href="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
