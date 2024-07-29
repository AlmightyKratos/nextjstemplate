"use server"

import { redirect } from "next/navigation"
import { auth } from "./auth"

export const redirectOrGetUserId = async () => {
  const session = await auth()
  if (!session?.user?.id) {
    redirect("/")
  } else {
    return session.user.id
  }
}
