"use client";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useReadContract } from 'wagmi'
import React, { useState } from "react";
import { SendTransaction } from "./sendtransaction";
import { GetVendors } from "./getVendor"
import { useWriteEnergyMarketBuyEnergy } from "../../../generated";
import { parseEther } from 'viem';


export const endereco: string = '0xC768B34f7F4f8A05AA51d741ef6027ec28c98558'


const vendor = [
  { address: 0x1, name: "Vendor 1", taxa: 88, remainingCapacity: 1 },
  { address: 0x2, name: "Vendor 2", taxa: 10, remainingCapacity: 20 },
  { address: 0x3, name: "Vendor 3", taxa: 25, remainingCapacity: 2000 },
]; /* MERAMENTE EXEMPLOS */

export function calculatePrice(address: number, amount: number) {
  let price; //Valor a ser pago
  let energyCost = 1; //valor de cada lugar
  if (vendor[address].remainingCapacity >= amount) {
    price = amount * energyCost;
    vendor[address].remainingCapacity -= amount; //precisa mandar isso para o banco de dados tb
  } else {
    price = vendor[address].remainingCapacity * energyCost;
    amount -= vendor[address].remainingCapacity;
    price +=
      amount * energyCost + amount * energyCost * (vendor[address].taxa / 100);
    vendor[address].remainingCapacity = 0; //atualizar no banco de dados
  }
  return price;
}

export default function Page({ params }: { params: { name: string } }) {
  const [amount, setAmount] = useState<number | "">("");
  const [price, setPrice] = useState<number | "">(0);

  //const { readContract, isSuccess, isError, isPending } =
  // useReadEnergyMarketVendors();


  const result = useReadContract({
    address: '0x4B0FfA3E5506f655De25c77FfCCC42508eF7FB91',
    functionName: 'vendors',
    args: ['0xC768B34f7F4f8A05AA51d741ef6027ec28c98558'],

  })


  const handleSetAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value === "" ? "" : Number(event.target.value);
    setAmount(value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); //faz com q só atualize o price dps do enter
      const value = amount === "" ? 0 : amount;
      const address = 0x1;
      setPrice(calculatePrice(address, value)); // Calcula o preço
    }
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1px",
      }}
    >
      <div style={{ fontSize: "2rem", fontWeight: "700", textAlign: "center" }}>
        {" "}
        PURCHASE PAGE{" "}
      </div>
      <br></br>
      <br></br>
      <div>My Post: {params.name}</div>
      <div className="flex flex-col items-center space-y-4">
        <header>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="number"
              value={amount}
              onChange={handleSetAmount}
              onKeyPress={handleKeyPress}
              placeholder="Amount"
              className="px-4 py-2 border rounded"
            />
          </form>
          <div style={{ fontSize: "1.2rem", fontWeight: "700" }}>
            <br></br>
            PRICE: {price}
          </div>
        </header>

        <div>
          <GetVendors />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ConnectButton />
        </div>

        <br></br>
      </div>
    </main>
  );
}