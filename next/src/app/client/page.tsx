"use client";
import Link from "next/link";
import { useState } from "react";
import { fetchAllVendors } from "../../data";

type Vendor = {
  id: number;
  place: string;
  address: string;
};

export default function Page() {
  const [data, setData] = useState<Vendor[]>([]);
  const [showVendors, setShowVendors] = useState(false);
  const [showVendors2, setShowVendors2] = useState(false);

  const toggleVendors = async () => {
    setData(await fetchAllVendors());
    setShowVendors(!showVendors);
  };

  const toggleVendors2 = async () => {
    setShowVendors(!showVendors);
    if (!showVendors) {
      const vendorsData = await fetchAllVendors();
      setData(vendorsData);
    }
  };
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center' }}>
        Buy Energy
      </div>
      <div>
        <button onClick={toggleVendors2}>
          {showVendors ? 'Hide Vendors' : 'Select Vendors'}
        </button>
        {showVendors && (
          <div style={{
            border: '1px solid black',
            borderRadius: '5px',
            padding: '20px',
            marginTop: '10px',
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.8)'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>PLACES: </div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {data.map((vendor) => (
                <li key={vendor.id} style={{ margin: '0px 0' }}>
                  <Link href={`/client/${vendor.address}`}>
                    {vendor.place}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}