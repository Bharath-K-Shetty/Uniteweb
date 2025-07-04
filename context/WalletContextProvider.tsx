
"use client";

import { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
export const WalletContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  return (
    <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/CqK7_lqrMRDljAA1FCvLU">
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
