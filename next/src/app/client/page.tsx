"use client"; 
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import test from 'node:test';

export default function Page() {
  const [showVendors, setShowVendors] = useState(false);
  const vendor = [
    { name: 'Vendor 1', route: '/example' },
    { name: 'Vendor 2', route: '/example2' },
    { name: 'Vendor 3', route: '/example3'}
  ];
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
          {showVendors &&  (
            
            <ul className="mt-4 border p-4 rounded space-y-2 max-h-40 overflow-y-auto">
              {vendor.map((vendor, index) => (
                <Link key={index} href={`/client${vendor.route}`}>
                <li key={index} className="py-1 px-2 hover:bg-gray-200 rounded cursor-pointer">
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
