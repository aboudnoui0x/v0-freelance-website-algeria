"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, User } from "lucide-react"
import { signUp } from "@/lib/actions/auth"
import { useToast } from "@/components/ui/use-toast"

export default function RegisterPage() {
  const [accountType, setAccountType] = useState("freelancer")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)

    // Add the user type to the form data
    formData.append("user-type", accountType)

    const result = await signUp(formData)

    if (result?.error) {
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      })
      setIsLoading(false)
    }
  }

  return (
    <div className="container flex items-center justify-center min-h-screen py-12 px-4 md:px-6">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>Join FreelanceAlgeria to find work or hire talent</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tabs defaultValue="freelancer" onValueChange={setAccountType}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="freelancer" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Freelancer
              </TabsTrigger>
              <TabsTrigger value="client" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Client
              </TabsTrigger>
            </TabsList>
            <TabsContent value="freelancer">
              <div className="text-sm text-gray-500 mt-2 mb-4">
                Create a profile to find work and connect with clients
              </div>
            </TabsContent>
            <TabsContent value="client">
              <div className="text-sm text-gray-500 mt-2 mb-4">
                Create an account to hire talented freelancers for your projects
              </div>
            </TabsContent>
          </Tabs>
          <form action={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" name="first-name" placeholder="Enter your first name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" name="last-name" placeholder="Enter your last name" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" name="confirm-password" type="password" required />
            </div>
            {accountType === "freelancer" && (
              <div className="space-y-2">
                <Label>What services do you offer?</Label>
                <RadioGroup defaultValue="development" name="service-type">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="development" id="development" />
                    <Label htmlFor="development">Development</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="design" id="design" />
                    <Label htmlFor="design">Design</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="writing" id="writing" />
                    <Label htmlFor="writing">Writing & Translation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="marketing" id="marketing" />
                    <Label htmlFor="marketing">Digital Marketing</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
            )}
            {accountType === "client" && (
              <div className="space-y-2">
                <Label>What are you looking to hire for?</Label>
                <RadioGroup defaultValue="project" name="hiring-type">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="project" id="project" />
                    <Label htmlFor="project">One-time Project</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ongoing" id="ongoing" />
                    <Label htmlFor="ongoing">Ongoing Work</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fulltime" id="fulltime" />
                    <Label htmlFor="fulltime">Full-time Contractor</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="notSure" id="notSure" />
                    <Label htmlFor="notSure">Not Sure Yet</Label>
                  </div>
                </RadioGroup>
              </div>
            )}
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" name="terms" className="rounded border-gray-300" required />
              <Label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <Link href="/terms" className="text-green-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-green-600 hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>
        </CardContent>
        <div className="text-center pb-6">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="text-green-600 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </Card>
    </div>
  )
}
