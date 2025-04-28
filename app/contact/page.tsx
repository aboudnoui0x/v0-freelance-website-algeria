"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formState)
    // Reset form
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert("Your message has been sent. We'll get back to you soon!")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-12 md:py-16 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
            <p className="mt-4 text-gray-500 md:text-xl">Have questions or feedback? We'd love to hear from you.</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Our Office</h3>
                    <p className="text-gray-500">123 Didouche Mourad Street, Algiers, Algeria</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-500">info@freelancealgeria.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-500">+213 21 123 456</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">How do I create an account?</h3>
                    <p className="text-gray-500">
                      Click on the "Sign Up" button in the top right corner and follow the instructions to create your
                      account.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">How much does it cost to use FreelanceAlgeria?</h3>
                    <p className="text-gray-500">
                      Creating an account is free. We charge a small service fee on completed projects to maintain the
                      platform.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">How do payments work?</h3>
                    <p className="text-gray-500">
                      We offer secure payment methods including bank transfers, mobile payments, and credit cards. Funds
                      are held in escrow until the project is completed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="billing">Billing Question</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        value={formState.message}
                        onChange={handleChange}
                        className="min-h-[150px]"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center border-t pt-6">
                  <p className="text-sm text-gray-500">We typically respond within 24-48 business hours.</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
