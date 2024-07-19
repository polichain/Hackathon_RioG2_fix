import {
    RainbowKitProvider,
    getDefaultConfig,
    Chain,
  } from '@rainbow-me/rainbowkit';
  import { WagmiProvider } from 'wagmi';
  import {
    QueryClientProvider,
    QueryClient,
  } from "@tanstack/react-query";
  
  export const xrp = {
    id: 1440002,
    name: 'XRPL EVM Sidechain Devnet',
    iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png',
    iconBackground: '#fff',
    nativeCurrency: { name: 'XRP', symbol: 'XRP', decimals: 18 },
    rpcUrls: {
      default: { http: ['https://rpc-evm-sidechain.xrpl.org/'] },
    },
    blockExplorers: {
      default: { name: 'ExplorerXRP', url: 'https://explorer.xrplevm.org' },
    },
  } as const satisfies Chain;