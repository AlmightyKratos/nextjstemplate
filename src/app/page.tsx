import { auth, signIn, signOut } from "@/auth"
import Image from "next/image"

const AuthUserCard = async () => {
  const session = await auth()
  if (!session?.user)
    return (
      <form
        action={async () => {
          "use server"
          await signIn("github")
        }}
      >
        <button type="submit">Signin with GitHub</button>
      </form>
    )
  return (
    <div className="flex flex-row items-center gap-20">
      <div className="flex flex-row items-center gap-8">
        {session.user.image && (
          <Image
            width={"100"}
            height={"100"}
            alt="Profile Image"
            src={session.user.image}
          />
        )}
        <div className="flex flex-col gap-2">
          <div>{session.user.name}</div>
          <div>{session.user.email}</div>
        </div>
      </div>
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <button type="submit">Signout</button>
      </form>
    </div>
  )
}

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center">
      <div>
        <AuthUserCard />
        Hello World!
      </div>
    </main>
  )
}
