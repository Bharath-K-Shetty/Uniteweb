'use client'

import { useEffect, useState } from "react";
import { ThemeProvider } from 'next-themes';
import { WalletContextProvider } from "@/context/WalletContextProvider";
import { BlurProvider } from "@/context/BlurContext";
import AppShell from "@/components/AppShell";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <WalletContextProvider>
        <BlurProvider>
          <AppShell>{children}</AppShell>
        </BlurProvider>
      </WalletContextProvider>
    </ThemeProvider>
  );
}
