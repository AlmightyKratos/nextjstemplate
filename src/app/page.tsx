import { AuthUserCard } from "../components/mine/AuthUserCard"
import { ThemeToggle } from "@/components/mine/ThemeToggle"

export default function Home() {
  return (
    <div className="text-g grid min-h-screen place-items-center">
      <AuthUserCard />
      <ThemeToggle />
    </div>
  )
}
