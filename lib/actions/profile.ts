"use server"

import { createServerSupabaseClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function updateProfile(formData: FormData) {
  const supabase = createServerSupabaseClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { error: "Not authenticated" }
  }

  const firstName = formData.get("first-name") as string
  const lastName = formData.get("last-name") as string
  const title = formData.get("title") as string
  const bio = formData.get("bio") as string
  const location = formData.get("location") as string
  const website = formData.get("website") as string
  const hourlyRate = formData.get("hourly-rate") ? Number.parseFloat(formData.get("hourly-rate") as string) : null

  const { error } = await supabase
    .from("profiles")
    .update({
      first_name: firstName,
      last_name: lastName,
      title,
      bio,
      location,
      website,
      hourly_rate: hourlyRate,
      updated_at: new Date().toISOString(),
    })
    .eq("id", user.id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath("/profile")
  revalidatePath("/")

  return { success: true }
}
