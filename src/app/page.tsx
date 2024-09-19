import { AuthUserCard } from "../components/mine/AuthUserCard"
import { FirstPopover } from "@/components/mine/FirstPopover"
import { ThemeToggle } from "@/components/mine/ThemeToggle"

export default function Home() {
  return (
    <div className="text-g grid min-h-screen place-items-center">
      <div className="flex flex-col items-center gap-32">
        <AuthUserCard />
        <FirstPopover />
        <ThemeToggle />
      </div>
    </div>
  )
}
