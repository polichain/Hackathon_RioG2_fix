"use client";
import { useWriteContract } from "wagmi";
import { energyMarketAbi } from "../../../generated";
import React, { useState } from "react";
import { useWriteEnergyMarketAddVendor } from "../../../generated"; // Certifique-se de que o caminho esteja correto

export default function Page() {
  const [capacity, setCapacity] = useState<number | "">("");
  const [tax, setTax] = useState<number | "">("");
  const [place, setPlace] = useState("");

  const { writeContractAsync, isSuccess, isError, isPending } =
    useWriteEnergyMarketAddVendor();

  const handleSetPlace = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlace(event.target.value);
  };

  const handleSetCapacity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCapacity(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleSetTax = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTax(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await writeContractAsync({
      address: "0x4B0FfA3E5506f655De25c77FfCCC42508eF7FB91",
      args: [BigInt(capacity), BigInt(tax)],
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-xl mb-8">Vendor Registration</div>
      <div className="flex flex-col items-center space-y-4">
        <header>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              value={capacity}
              onChange={handleSetCapacity}
              placeholder="Capacity"
              className="px-4 py-2 border rounded"
            />
            <input
              type="number"
              value={tax}
              onChange={handleSetTax}
              placeholder="Tax"
              className="px-4 py-2 border rounded"
            />
            <input
              type="text"
              value={place}
              onChange={handleSetPlace}
              placeholder="Place"
              className="px-4 py-2 border rounded"
            />
            <button
              /*onClick={() => 
              writeContractAsync ({ 
                address: '0x6b175474e89094c44da98b954eedeac495271d0f',
                type: "legacy",
                args: [
                  BigInt(capacity),
                  BigInt(tax)

                ],
             })
            }*/

              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
              disabled={isPending}
            >
              {isPending ? "Submitting..." : "Submit"}
            </button>
          </form>
          {isSuccess && (
            <p className="text-green-500 mt-4">Vendor added successfully!</p>
          )}
          {isError && <p className="text-red-500 mt-4">Error:</p>}
        </header>
      </div>
    </main>
  );
}
