"use client";
import React, { useState } from "react";
import { useWriteEnergyMarketAddVendor } from "../../../generated"; // Certifique-se de que o caminho esteja correto
import { addVendor } from "../../../data";
import { useAccount } from "wagmi";


export default function Page() {
  const [capacity, setCapacity] = useState<number | "">("");
  const [tax, setTax] = useState<number | "">("");
  const [place, setPlace] = useState("");

  const { writeContractAsync, isSuccess, isError, isPending } =
    useWriteEnergyMarketAddVendor();

  const { address: accountAddress } = useAccount();
  const strippedAddress: string | undefined = accountAddress as string;


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
    await addVendor(place, strippedAddress);
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0px' }}>
      <div style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center' }}>Vendor Registration</div>
      <br></br>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <header>
          <form onSubmit={handleSubmit} >
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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
                disabled={isPending}
              >
                {isPending ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
          {isSuccess && (
            <p style={{ color: 'green', marginTop: '16px', fontSize: '1.2rem' }}>Vendor added successfully!</p>
          )}
          {isError && <p style={{ color: 'red', marginTop: '16px', fontSize: '1.5rem', fontWeight: '700' }}>Error:</p>}
        </header>
      </div>
    </main>
  );
}
