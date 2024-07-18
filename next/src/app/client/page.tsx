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
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-xl mb-8">Buy Energy</div>
      <div className="flex flex-col items-center space-y-4">
        <header>
          <div className="flex justify-center">
            <button onClick={toggleVendors} className="px-4 py-2 border rounded">
              Select Vendor
            </button>
          </div>
          {showVendors && (
            <ul className="mt-4 border p-4 rounded space-y-2 max-h-40 overflow-y-auto">
              {vendors.map((vendor, index) => (
                <Link key={index} href={`/client/${vendor.address}`}>
                  <li className="py-1 px-2 hover:bg-gray-200 rounded cursor-pointer">
                    {vendor.name}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </header>
      </div>
    </main>
  );
}
