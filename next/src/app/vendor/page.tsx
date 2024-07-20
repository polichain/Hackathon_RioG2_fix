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
            <button style={{ padding: '15px 30px', width: '200px', textAlign: 'center' }}> Already Vendor </button>
          </Link>
          <Link href="vendor/registration">
            <button style={{ padding: '15px 30px', width: '200px', textAlign: 'center' }}> Become a Vendor </button>
          </Link>
        </div>
      </div>
    </main >
  );
}
