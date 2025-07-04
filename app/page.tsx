"use client";

import { Button } from "@/components/ui/button";
import { BGPattern } from "@/components/ui/bg-pattern";
import { Sparkles, Gift, Users, CheckCircle } from "lucide-react";
import { useTheme } from 'next-themes';

export default function Home() {
  const { resolvedTheme } = useTheme();

  const darkBackgroundStyle =
    resolvedTheme === 'dark'
      ? {
        background: '#020617',
        backgroundImage: `
              linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(130,0,255,0.15) 0%, transparent 70%)
            `,
        backgroundSize: '32px 32px, 32px 32px, 100% 100%',
      }
      : {
        background: "white",
        backgroundImage: `
     linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
     linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
     radial-gradient(circle at 50% 10%, rgba(130,0,255,0.1) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
   `,
        backgroundSize: "40px 40px, 40px 40px, 100% 100%",
      };
  return (
    <div className="relative min-h-screen overflow-hidden transition-colors" style={darkBackgroundStyle}>



      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <h1
          className="text-4xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8200FF] via-[#9B4DFF] to-[#C084FC] mb-4"
        >
          Commit to Events, Only If Others Do Too.
        </h1>

        <p className="text-gray-600 dark:text-gray-400 max-w-xl text-lg md:text-xl">
          Trustless RSVP on Solana. If enough people join, the event is confirmed.
          Otherwise, everyone gets refunded — automatically.
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="default" size="lg">Join Event</Button>
          <Button variant="secondary" className="border !border-black dark:!border-white" size="lg">Create Event</Button>
        </div>
      </section>





    </div>
  );
}




