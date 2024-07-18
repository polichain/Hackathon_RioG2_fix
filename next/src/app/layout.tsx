import "../styles/global.css";
import "@rainbow-me/rainbowkit/styles.css";
import Head from "next/head";
import { ConnectButton, RainbowKitProvider } from "@rainbow-me/rainbowkit";

import { Metadata } from "next";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "../wagmi";
import MyWagmiProvider from "../_providers/MyWagmiProvider";
import Link from "next/link";

// either Static metadata
export const metadata: Metadata = {
  title: "EnergyMarket",
  description: "We are building a marketplace for energy on blockchain",
};

const queryClient = new QueryClient();

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MyWagmiProvider>
          <header>
            <nav>
              <ul>
                <li>
                  <ConnectButton />
                </li>
                <li>
                  <Link href="/client">Buy Energy</Link>
                </li>
                <li>
                  <Link href="/vendor">Vendor</Link>
                </li>
              </ul>
            </nav>
          </header>
          {children}
        </MyWagmiProvider>
      </body>
    </html>
  );
}

export default RootLayout;
