"use client";
import Link from 'next/link';
import { useState } from 'react';

const vendors = [
  { address: '0x1', name: 'Vendor 1', taxa: 10, remainingCapacity: 1 },
  { address: '0x2', name: 'Vendor 2', taxa: 10, remainingCapacity: 100 },
  { address: '0x3', name: 'Vendor 3', taxa: 10, remainingCapacity: 100 }

];

export default function Page() {
  const [showVendors, setShowVendors] = useState(false);

  const toggleVendors = () => {
    setShowVendors(!showVendors);
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center' }}>Buy Energy</div>
      <br></br>
      <div className="flex flex-col items-center space-y-4">
        <header>
          <div className="flex justify-center">
            <button onClick={toggleVendors} className="px-4 py-2 border rounded">
              Select Vendor
            </button>
          </div>
          {showVendors && (
            <div style={{ marginTop: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '4px', backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '320px' }}>
              <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                {vendors.map((vendor, index) => (
                  <Link key={index} href={`/client/${vendor.address}`}>
                    <li style={{ padding: '10px', cursor: 'pointer' }}>
                      {vendor.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </header>
      </div>
    </main>
  );
}
