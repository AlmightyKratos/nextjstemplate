"use client"

import {
  DialogDescription,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
} from "@/components/ui/dialog"
import { FirstForm } from "./FirstForm"
import { Button } from "../ui/button"
import { useState } from "react"

export const FirstPopover = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Open Popover</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <FirstForm closePopover={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}
