import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  hardhat,
} from 'wagmi/chains';
import { xrp } from './xrp';

export const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    xrp,
    hardhat,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [xrp] : []),
  ],
  ssr: true,
});
