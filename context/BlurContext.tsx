'use client'

import { createContext, useContext, useState, ReactNode } from "react"

type BlurContextType = {
  isBlurred: boolean
  setBlurred: (val: boolean) => void
}

const BlurContext = createContext<BlurContextType | undefined>(undefined)

export function BlurProvider({ children }: { children: ReactNode }) {
  const [isBlurred, setIsBlurred] = useState(false)

  return (
    <BlurContext.Provider value={{ isBlurred, setBlurred: setIsBlurred }}>
      {children}
    </BlurContext.Provider>
  )
}

export function useBlur() {
  const context = useContext(BlurContext)
  if (!context) {
    throw new Error("useBlur must be used within a BlurProvider")
  }
  return context
}
