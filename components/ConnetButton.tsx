"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

const ConnectButton = () => {
  const { disconnect, connected } = useWallet();
  const { setVisible } = useWalletModal();
  async function handleClickWallet() {
    if (connected) {
      disconnect();
    } else {
      setVisible(true);
    }
    console.log("Clicked")
  }
  return (
    <Button
      className="
    w-[135px] h-[35px]
    bg-gradient-to-b from-[#7F7CFF] to-[#8200FF]
    text-white
    px-6 py-2 rounded-full
    border border-white/30
    hover: transition-all duration-200
    font-semibold text-sm
  "
      onClick={handleClickWallet}
    >
      {connected ? "Disconnect Wallet" : "Connect Wallet"}
    </Button>
  );
};

export default ConnectButton;
