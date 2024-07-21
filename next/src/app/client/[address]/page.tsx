"use client";

import { useReadContract } from "wagmi";
import React, { useState } from "react";
import GetVendors from "./getVendor";
import {
  energyMarketAbi,
  useWriteEnergyMarketBuyEnergy,
} from "../../../generated";
import { parseEther } from "viem";
import { Address } from "viem";

interface ResultData {
  Tax?: number; // Use ? to denote that the property is optional
  RemainingCapacity?: number;
  error?: string;
}

export function calculatePrice(amount: number, tax: number, energyCost: number, remainingCapacity: number) {
  let price; //Valor a ser pago
  if (remainingCapacity >= amount) {
    price = amount * energyCost;
    remainingCapacity -= amount; //precisa mandar isso para o banco de dados tb
  } else {
    price = remainingCapacity * energyCost;
    amount -= remainingCapacity;
    price +=
      amount * energyCost + amount * energyCost * (tax / 100);
    remainingCapacity = 0; //atualizar no banco de dados
  }
  return price;
}

export default function Page({ params }: { params: { address: string } }) {

  const [resultData, setResultData] = useState<ResultData>({});

  const [amount, setAmount] = useState<number | "">("");
  const [price, setPrice] = useState<number | "">(0);
  const { writeContractAsync, isSuccess, isError, isPending } =
    useWriteEnergyMarketBuyEnergy();
  const nome: string = params.address;
  const priceInEther = parseEther(price.toString());

  const handleSetAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value === "" ? "" : Number(event.target.value);
    setAmount(value);
  };

  const result = useReadContract({
    abi: energyMarketAbi,
    functionName: "vendors",
    address: "0x4B0FfA3E5506f655De25c77FfCCC42508eF7FB91",
    args: [nome as Address],
  });

  const handlePayment = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await writeContractAsync({
      address: "0x4B0FfA3E5506f655De25c77FfCCC42508eF7FB91",
      args: [nome as Address, BigInt(amount)],
      value: priceInEther,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (result.data) {
      setResultData({
        Tax: Number(result.data[1]),
        RemainingCapacity: Number(result.data[3]),
      });
    } else {
      setResultData({ error: "No data found or an error occurred" });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit;
      event.preventDefault();
      const value = amount === "" ? 0 : amount;
      const tax = resultData.Tax ?? 0; // Use 0 as default if Tax is undefined
      const remainingCapacity = resultData.RemainingCapacity ?? 0;
      setPrice(calculatePrice(value, tax, 10, remainingCapacity));
    }
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1px"
      }}
    >
      <div style={{ fontSize: "2rem", fontWeight: "700", textAlign: "center" }}>
        PURCHASE PAGE
      </div>

      <br></br>
      <br></br>
      <div className="flex flex-col items-center space-y-4">
        <header>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: 'rgba(255, 255, 255, 0.8)'
            }}
          >
            <input
              type="number"
              value={amount}
              onChange={handleSetAmount}
              onKeyPress={handleKeyPress}
              placeholder="Amount"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
            />
          </form>
          <div style={{ fontSize: "1.2rem", fontWeight: "700" }}>
            PRICE: {price}
          </div>
          <br></br>
          <div>
            <button onClick={handlePayment}> Transfer </button>
          </div>
        </header>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <GetVendors endereco={nome} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>

        <br></br>
      </div>
    </main>
  );
}
