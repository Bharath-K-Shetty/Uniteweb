"use client"

import * as React from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Search,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { useBlur } from "@/context/BlurContext"

export function SearchBarDialog() {
  const [open, setOpen] = React.useState(false)
  const { setBlurred } = useBlur()
  React.useEffect(() => {
    setBlurred(open)
  }, [open])
  // Ctrl+K to open, Esc to close
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(true)
      }
      if (e.key === "Escape") {
        setOpen(false)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-gray-100 dark:bg-gray-900 border border-violet-500 rounded-md pl-10 pr-4 py-2 text-sm  dark:text-white placeholder-gray-400 relative w-64 text-left hidden md:block"
      >
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-400 h-4 w-4" />
        <span className="text-gray-600 dark:text-gray-400">Search Events</span>
        <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-800 text-black dark:text-gray-400 text-[10px] font-medium px-1.5 py-0.5 rounded border border-gray-600">
          ⌘ K
        </kbd>
      </button>

      {/* Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        {open && (
          <div className="absolute top-2 right-3 z-10">
            <kbd className="bg-gray-800 text-gray-400 text-[10px] font-medium px-1.5 py-0.5 rounded border border-gray-600">
              ESC
            </kbd>
          </div>
        )}

        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
