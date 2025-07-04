'use client'

import { useEffect, useState } from "react"
import { useBlur } from "@/context/BlurContext"
import Navbar from "@/components/Navbar"
import { AppSidebar } from "@/components/Sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const { isBlurred } = useBlur()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by rendering only after mount
  if (!mounted) return null

  return (
    <SidebarProvider>
      <div
        className={`transition-all duration-200 ${isBlurred ? "blur-xs" : ""} w-full`}
      >
        <Navbar />

        <div className="flex">
          <AppSidebar />
          <main className="flex-1 overflow-y-auto h-[calc(100vh-64px)]">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
