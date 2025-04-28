"use server"

import { createServerSupabaseClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export async function signUp(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const firstName = formData.get("first-name") as string
  const lastName = formData.get("last-name") as string
  const userType = formData.get("user-type") as "freelancer" | "client"

  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
        user_type: userType,
      },
    },
  })

  if (error) {
    return { error: error.message }
  }

  // Create profile
  if (data.user) {
    const { error: profileError } = await supabase.from("profiles").insert({
      id: data.user.id,
      first_name: firstName,
      last_name: lastName,
      user_type: userType,
    })

    if (profileError) {
      return { error: profileError.message }
    }
  }

  revalidatePath("/")
  redirect("/login?message=Check your email to confirm your account")
}

export async function signIn(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const supabase = createServerSupabaseClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error: error.message }
  }

  revalidatePath("/")
  redirect("/")
}

export async function signOut() {
  const supabase = createServerSupabaseClient()
  await supabase.auth.signOut()
  revalidatePath("/")
  redirect("/")
}
