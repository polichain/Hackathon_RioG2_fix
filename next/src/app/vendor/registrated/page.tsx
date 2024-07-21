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
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0px' }}>
      <div style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center' }}>Vendor Page</div>
      <br />
      <div style={{ display: 'flex', gap: '2rem' }}>
        <form onSubmit={handleCapacity} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <input
            type="number"
            value={capacity}
            onChange={handleSetCapacity}
            placeholder="Capacity"
            style={{ padding: '8px 16px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '8px' }}
          />
          <button
            type="submit"
            style={{ padding: '8px 16px' }}
            disabled={capacity_pending}
          >
            {capacity_pending ? "Submitting..." : "Submit"}
          </button>
          {capacity_sucess && (
            <p style={{ color: 'green', textAlign: 'center' }}>Capacity changed successfully!</p>
          )}
          {error_capacity && <p style={{ color: 'red', fontWeight: '700', textAlign: 'center' }}>Error:</p>}
        </form>

        <form onSubmit={handleTax} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <input
            type="number"
            value={tax}
            onChange={handleSetTax}
            placeholder="Tax"
            style={{ padding: '8px 16px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '8px' }}
          />
          <button
            type="submit"
            style={{ padding: '8px 16px' }}
            disabled={tax_pending}
          >
            {tax_pending ? "Submitting..." : "Submit"}
          </button>
          {tax_sucess && (
            <p style={{ color: 'green', textAlign: 'center' }}>Tax changed successfully!</p>
          )}
          {error_tax && <p style={{ color: 'red', fontWeight: '700', textAlign: 'center' }}>Error:</p>}
        </form>
      </div>
      <br></br>
      <div>
        <button onClick={handleWithdraw} style={{ padding: '12px 24px', fontSize: '1.25rem', backgroundColor: '#27963e', border: 'none' }}>
          Withdraw
        </button>
      </div>
    </main>
  );
}