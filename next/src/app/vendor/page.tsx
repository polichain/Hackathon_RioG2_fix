import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0px' }}>
      <div style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center' }}>Vendor Page</div>
      <br></br>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Link href="vendor/registrated">
            <button className="px-4 py-2 border rounded">Already Vendor</button>
          </Link>
          <Link href="vendor/registration">
            <button className="px-4 py-2 border rounded">
              Become a Vendor
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
