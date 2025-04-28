"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useAuth } from "@/contexts/auth-context"
import { signOut } from "@/lib/actions/auth"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { user, profile, isLoading } = useAuth()

  const routes = [
    { href: "/", label: "Home" },
    { href: "/find-work", label: "Find Work" },
    { href: "/hire", label: "Hire Talent" },
    { href: "/categories", label: "Categories" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const getInitials = () => {
    if (profile) {
      return `${profile.first_name.charAt(0)}${profile.last_name.charAt(0)}`.toUpperCase()
    }
    return "U"
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <div className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === route.href ? "text-primary" : "text-muted-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  {!isLoading && !user ? (
                    <>
                      <Button asChild variant="outline">
                        <Link href="/login" onClick={() => setIsOpen(false)}>
                          Log In
                        </Link>
                      </Button>
                      <Button asChild className="bg-green-600 hover:bg-green-700">
                        <Link href="/register" onClick={() => setIsOpen(false)}>
                          Sign Up
                        </Link>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button asChild variant="outline">
                        <Link href="/profile" onClick={() => setIsOpen(false)}>
                          My Profile
                        </Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                          Dashboard
                        </Link>
                      </Button>
                      <form action={signOut}>
                        <Button type="submit" variant="ghost" className="w-full">
                          Sign Out
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl">FreelanceAlgeria</span>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          {!isLoading && !user ? (
            <>
              <Button asChild variant="ghost">
                <Link href="/login">Log In</Link>
              </Button>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/register">Sign Up</Link>
              </Button>
            </>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{getInitials()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    {profile && (
                      <p className="font-medium">
                        {profile.first_name} {profile.last_name}
                      </p>
                    )}
                    {user?.email && <p className="w-[200px] truncate text-sm text-muted-foreground">{user.email}</p>}
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <form action={signOut} className="w-full">
                    <button type="submit" className="w-full text-left">
                      Sign Out
                    </button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  )
}
