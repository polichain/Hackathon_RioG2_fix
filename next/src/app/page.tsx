import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
      <div style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center' }}>Energy Market</div>
      <br />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Link href="/client">
            <button style={{ width: '150px', padding: '16px', textAlign: 'center' }}>
              Buy Energy
            </button>
          </Link>
          <Link href="/vendor">
            <button style={{ width: '150px', padding: '16px', textAlign: 'center' }}>
              Vendor
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
