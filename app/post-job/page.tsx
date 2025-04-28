"use client"

import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/components/ui/use-toast"
import { createClientSupabaseClient } from "@/lib/supabase/client"

export default function PostJobPage() {
  const { user, profile, isLoading } = useAuth()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [budgetType, setBudgetType] = useState("fixed")
  const [isRemote, setIsRemote] = useState(true)
  const [categories, setCategories] = useState<any[]>([])
  const { toast } = useToast()
  const supabase = createClientSupabaseClient()

  // Redirect if not logged in or not a client
  if (!isLoading && (!user || profile?.user_type !== "client")) {
    redirect("/login")
  }

  // Fetch categories
  useState(() => {
    async function fetchCategories() {
      const { data } = await supabase.from("categories").select("*").order("name")
      if (data) {
        setCategories(data)
      }
    }
    fetchCategories()
  })

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)

    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const categoryId = formData.get("category") as string
    const budgetAmount = formData.get("budget-amount") ? Number(formData.get("budget-amount")) : null
    const location = formData.get("location") as string

    const { error } = await supabase.from("jobs").insert({
      title,
      description,
      client_id: user!.id,
      category_id: categoryId || null,
      budget_type: budgetType as "fixed" | "hourly" | "monthly",
      budget_amount: budgetAmount,
      location: isRemote ? null : location,
      is_remote: isRemote,
    })

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    } else {
      toast({
        title: "Success",
        description: "Your job has been posted successfully.",
      })
      // Reset form
      const form = document.getElementById("post-job-form") as HTMLFormElement
      form.reset()
    }

    setIsSubmitting(false)
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
        <h1 className="text-3xl font-bold mb-6">Post a Job</h1>

        <Card>
          <CardHeader>
            <CardTitle>Job Details</CardTitle>
            <CardDescription>Provide details about the job you want to post</CardDescription>
          </CardHeader>
          <CardContent>
            <form id="post-job-form" action={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Job Title</Label>
                <Input id="title" name="title" placeholder="e.g. Website Development for E-commerce Store" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Job Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe the job in detail, including requirements and deliverables"
                  className="min-h-[200px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select name="category">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Budget Type</Label>
                <RadioGroup defaultValue="fixed" onValueChange={setBudgetType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fixed" id="fixed" />
                    <Label htmlFor="fixed">Fixed Price</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hourly" id="hourly" />
                    <Label htmlFor="hourly">Hourly Rate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly">Monthly Salary</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget-amount">
                  Budget Amount (DZD){" "}
                  {budgetType === "hourly" ? "per hour" : budgetType === "monthly" ? "per month" : ""}
                </Label>
                <Input id="budget-amount" name="budget-amount" type="number" placeholder="e.g. 50000" />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="remote" checked={isRemote} onCheckedChange={setIsRemote} />
                <Label htmlFor="remote">This is a remote job</Label>
              </div>

              {!isRemote && (
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" name="location" placeholder="e.g. Algiers, Algeria" required={!isRemote} />
                </div>
              )}

              <Button type="submit" className="bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                {isSubmitting ? "Posting..." : "Post Job"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
