"use client";
import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [capacity, setCapacity] = useState<number | "">("");

  const handleSetCapacity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCapacity(event.target.value === "" ? "" : Number(event.target.value));
  };

  const [tax, setTax] = useState<number | "">("");

  const handleSetTax = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTax(event.target.value === "" ? "" : Number(event.target.value));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-xl mb-8">Vendor Page</div>
      <div className="flex flex-col items-center space-y-4">
        <header>
          <button className="px-4 py-2 border rounded">Withdrawn</button>
        </header>
        <header>
          <form name="capacityForm">
            <input
              type="number"
              value={capacity}
              onChange={handleSetCapacity}
              placeholder="Capacity"
              className="px-4 py-2 border rounded"
            />
          </form>
        </header>
        <header>
          <form name="taxForm">
            <input
              type="number"
              value={tax}
              onChange={handleSetTax}
              placeholder="Tax"
              className="px-4 py-2 border rounded"
            />
          </form>
        </header>
      </div>
    </main>
  );
}
