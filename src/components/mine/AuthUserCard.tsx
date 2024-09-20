import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { auth, signIn, signOut } from "@/auth"
import Image from "next/image"

export const AuthUserCard = async () => {
  const session = await auth()
  if (!session?.user)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>Sign In</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <form
              action={async () => {
                "use server"
                await signIn("github")
              }}
            >
              <button type="submit">Signin with GitHub</button>
            </form>
          </DropdownMenuItem>
          {/* <DropdownMenuItem> */}
          <form
            action={async (formData) => {
              "use server"
              await signIn("credentials", formData)
            }}
          >
            <label>
              Email
              <input name="email" type="email" />
            </label>
            <label>
              Password
              <input name="password" type="password" />
            </label>
            <button>Sign In</button>
          </form>
          {/* </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
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
        <Button type="submit">Signout</Button>
      </form>
    </div>
  )
}
