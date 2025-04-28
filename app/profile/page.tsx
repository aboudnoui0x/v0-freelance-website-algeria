"use client"

import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { updateProfile } from "@/lib/actions/profile"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"
import { redirect } from "next/navigation"

export default function ProfilePage() {
  const { user, profile, isLoading } = useAuth()
  const [isSaving, setIsSaving] = useState(false)
  const { toast } = useToast()

  // Redirect if not logged in
  if (!isLoading && !user) {
    redirect("/login")
  }

  async function handleSubmit(formData: FormData) {
    setIsSaving(true)

    const result = await updateProfile(formData)

    if (result?.error) {
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      })
    } else if (result?.success) {
      toast({
        title: "Success",
        description: "Your profile has been updated.",
      })
    }

    setIsSaving(false)
  }

  if (isLoading) {
    return (
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Your Profile</h1>

        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Update your personal information and profile details</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" name="first-name" defaultValue={profile?.first_name || ""} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" name="last-name" defaultValue={profile?.last_name || ""} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Professional Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="e.g. Web Developer, Graphic Designer"
                  defaultValue={profile?.title || ""}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  placeholder="Tell us about yourself"
                  className="min-h-[100px]"
                  defaultValue={profile?.bio || ""}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="e.g. Algiers, Algeria"
                  defaultValue={profile?.location || ""}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="https://yourwebsite.com"
                  defaultValue={profile?.website || ""}
                />
              </div>

              {profile?.user_type === "freelancer" && (
                <div className="space-y-2">
                  <Label htmlFor="hourly-rate">Hourly Rate (DZD)</Label>
                  <Input
                    id="hourly-rate"
                    name="hourly-rate"
                    type="number"
                    placeholder="e.g. 2000"
                    defaultValue={profile?.hourly_rate || ""}
                  />
                </div>
              )}

              <Button type="submit" className="bg-green-600 hover:bg-green-700" disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
