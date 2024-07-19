"use client";
import { useState } from "react";
import Image from "next/image";

import { useWriteEnergyMarketChangeCapacity } from "../../../generated";
import { useWriteEnergyMarketSetTax } from "../../../generated";
import { useWriteEnergyMarketWithdraw } from "../../../generated";

export default function Page() {
  const [capacity, setCapacity] = useState<number | "">("");

  const handleSetCapacity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCapacity(event.target.value === "" ? "" : Number(event.target.value));
  };

  const { writeContractAsync: tax_handler, isSuccess: tax_sucess, isError: error_tax, isPending: tax_pending } =
    useWriteEnergyMarketSetTax();

  const { writeContractAsync: withdraw_handler, isSuccess: withdraw_sucess, isError: withdraw_tax, isPending: withdraw_pending } =
    useWriteEnergyMarketWithdraw();

  const { writeContractAsync: capacity_handler, isSuccess: capacity_sucess, isError: error_capacity, isPending: capacity_pending } =
    useWriteEnergyMarketChangeCapacity();

  const [tax, setTax] = useState<number | "">("");

  const handleSetTax = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTax(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleWithdraw = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await withdraw_handler({
      address: "0x4B0FfA3E5506f655De25c77FfCCC42508eF7FB91",
    });
  };

  const handleTax = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await tax_handler({
      address: "0x4B0FfA3E5506f655De25c77FfCCC42508eF7FB91",
      args: [BigInt(tax)],
    });
  };

  const handleCapacity = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await capacity_handler({
      address: "0x4B0FfA3E5506f655De25c77FfCCC42508eF7FB91",
      args: [BigInt(capacity)],
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-xl mb-8">Vendor Page</div>
      <div className="flex flex-col items-center space-y-4">
        <header>
          <div>
            <button onClick={handleWithdraw} className="px-4 py-2 border rounded">Withdrawn</button>
          </div>
          <div>
            <form onSubmit={handleCapacity}>
              <input
                type="number"
                value={capacity}
                onChange={handleSetCapacity}
                placeholder="Capacity"
                className="px-4 py-2 border rounded"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
                disabled={capacity_pending}
              ></button>
              {capacity_sucess && (
                <p className="text-green-500 mt-4">Capacity changed successfully!</p>
              )}
              {error_capacity && <p className="text-red-500 mt-4">Error:</p>}
            </form>
          </div>
          <div>
            <form onSubmit={handleTax}>
              <input
                type="number"
                value={tax}
                onChange={handleSetTax}
                placeholder="Tax"
                className="px-4 py-2 border rounded"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
                disabled={tax_pending}
              ></button>
            </form>
            {tax_sucess && (
              <p className="text-green-500 mt-4">Tax changed successfully!</p>
            )}
            {error_tax && <p className="text-red-500 mt-4">Error:</p>}
          </div>
        </header>
      </div>
    </main>
  );
}
