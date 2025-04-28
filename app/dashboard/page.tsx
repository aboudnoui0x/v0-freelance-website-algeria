"use client"

import { useAuth } from "@/contexts/auth-context"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Briefcase, MessageSquare, Star, User } from "lucide-react"

export default function DashboardPage() {
  const { user, profile, isLoading } = useAuth()

  // Redirect if not logged in
  if (!isLoading && !user) {
    redirect("/login")
  }

  if (isLoading) {
    return (
      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-500 mb-8">
          Welcome back, {profile?.first_name} {profile?.last_name}
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Active Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {profile?.user_type === "client" ? (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Post a Job</CardTitle>
                  <CardDescription>Create a new job listing to find freelancers</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <Briefcase className="h-10 w-10 text-green-600" />
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <Link href="/post-job">Post a Job</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Browse Freelancers</CardTitle>
                  <CardDescription>Find skilled professionals for your projects</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <User className="h-10 w-10 text-green-600" />
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <Link href="/hire">Browse Freelancers</Link>
                  </Button>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Find Work</CardTitle>
                  <CardDescription>Browse available jobs that match your skills</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <Briefcase className="h-10 w-10 text-green-600" />
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <Link href="/find-work">Find Jobs</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Complete Your Profile</CardTitle>
                  <CardDescription>Add skills and experience to stand out to clients</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <Star className="h-10 w-10 text-green-600" />
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <Link href="/profile">Update Profile</Link>
                  </Button>
                </CardContent>
              </Card>
            </>
          )}
          <Card>
            <CardHeader>
              <CardTitle>Messages</CardTitle>
              <CardDescription>View and respond to your messages</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <MessageSquare className="h-10 w-10 text-green-600" />
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/messages">View Messages</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
