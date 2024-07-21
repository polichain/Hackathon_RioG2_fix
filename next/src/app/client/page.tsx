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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div style={{ fontSize: "2rem", fontWeight: "700", textAlign: "center" }}>
        Buy Energy
      </div>
      <div>
        <button onClick={toggleVendors2}>
          {showVendors ? "Hide Vendors" : "Show Vendors"}
        </button>
        {showVendors && (
          <ul>
            {data.map((vendor) => (
              <li key={vendor.id}>
                Lugar: {vendor.place} -{" "}
                <Link href={`/client/${vendor.address}`}>
                  Endereço: {vendor.address}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <br></br>
      <div className="flex flex-col items-center space-y-4">
        <header>
          <div className="flex justify-center">
            <button
              onClick={toggleVendors}
              className="px-4 py-2 border rounded"
            >
              Select Vendor
            </button>
          </div>
          {showVendors && (
            <div
              style={{
                marginTop: "10px",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "4px",
                backgroundColor: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                width: "320px",
              }}
            ></div>
          )}
        </header>
      </div>
    </main>
  );
}
