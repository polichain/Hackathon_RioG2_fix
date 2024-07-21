"use client";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useReadContract } from "wagmi";
import React, { useState } from "react";
import { SendTransaction } from "./sendtransaction";
import GetVendors from "./getVendor";
import {
  energyMarketAbi,
  useWriteEnergyMarketBuyEnergy,
} from "../../../generated";
import { parseEther } from "viem";
import { usePathname } from "next/navigation";
import { Address } from "viem";

export default function Page({ params }: { params: { address: string } }) {
  const [amount, setAmount] = useState<number | "">("");
  const [price, setPrice] = useState<number | "">(0);
  const { writeContractAsync, isSuccess, isError, isPending } =
    useWriteEnergyMarketBuyEnergy();
  const nome: string = params.address;
  const priceInEther = parseEther(price.toString());

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

  function calculatePrice(address: number, amount: number) {
    let price; //Valor a ser pago
    let energyCost = 1; //valor de cada lugar
    if (vendor[address].remainingCapacity >= amount) {
      price = amount * energyCost;
      vendor[address].remainingCapacity -= amount; //precisa mandar isso para o banco de dados tb
    } else {
      price = vendor[address].remainingCapacity * energyCost;
      amount -= vendor[address].remainingCapacity;
      price +=
        amount * energyCost +
        amount * energyCost * (vendor[address].taxa / 100);
      vendor[address].remainingCapacity = 0; //atualizar no banco de dados
    }
    return price;
  }

  const handleSetAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value === "" ? "" : Number(event.target.value);
    setAmount(value);
  };

  const [resultData, setResultData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    if (result.data) {
      console.log("Result data:", result.data);
      setResultData({
        Tax: result.data[1],
        ReamainingCapacity: result.data[3],
      });
    } else {
      setResultData({ error: "No data found or an error occurred" });
    }
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); //faz com q só atualize o price dps do enter
      const value = amount === "" ? 0 : amount;
      const address = nome;
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
      <div className="flex flex-col items-center space-y-4">
        <header>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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
