import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Protected routes that require authentication
  const protectedRoutes = ["/dashboard", "/profile", "/post-job", "/messages"]

  // Check if the route is protected and the user is not authenticated
  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route)) && !session) {
    const redirectUrl = new URL("/login", req.url)
    redirectUrl.searchParams.set("redirect", req.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // If user is authenticated and trying to access login/register pages, redirect to dashboard
  if (session && (req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  return res
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/post-job/:path*", "/messages/:path*", "/login", "/register"],
}
