"use client";
import Link from "next/link";
import { useState } from "react";

export const vendors = [
  { address: "0xC768B34f7F4f8A05AA51d741ef6027ec28c98558", name: "vendor 1" },
  { address: "0x2", name: "vendor 2" },
  { address: "0x3", name: "vendor 3" },
];

export default function Page() {
  const [showVendors, setShowVendors] = useState(false);

  const toggleVendors = () => {
    setShowVendors(!showVendors);
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
            >
              <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                {vendors.map((vendor, index) => (
                  <Link key={index} href={`/client/${vendor.address}`}>
                    <li style={{ padding: "10px", cursor: "pointer" }}>
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
