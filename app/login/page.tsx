"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { signIn } from "@/lib/actions/auth"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"
import { useSearchParams } from "next/navigation"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const searchParams = useSearchParams()
  const message = searchParams.get("message")
  const redirect = searchParams.get("redirect") || "/"

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)

    const result = await signIn(formData)

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
          <CardTitle className="text-2xl font-bold">Log in to your account</CardTitle>
          <CardDescription>Enter your email and password to access your account</CardDescription>
          {message && <div className="p-3 bg-green-50 text-green-700 text-sm rounded-md">{message}</div>}
        </CardHeader>
        <CardContent className="space-y-4">
          <form action={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm text-green-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" name="password" type="password" required />
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember" name="remember" className="rounded border-gray-300" />
              <Label htmlFor="remember" className="text-sm">
                Remember me
              </Label>
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log In"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Separator className="my-4" />
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-green-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
