"use client";

import Image from "next/image";
import React, { useState } from "react";

const vendor = [
  { address: 0x1, name: 'Vendor 1', route: '/example', taxa: 10, remainingCapacity: 1 },
  { address: 0x2, name: 'Vendor 2', route: '/example2', taxa: 10, remainingCapacity: 100 },
  { address: 0x3, name: 'Vendor 3', route: '/example3', taxa: 10, remainingCapacity: 100}
]; /* MERAMENTE EXEMPLOS */

export function calculatePrice(address: number, amount: number) {
  let price; //Valor a ser pago
  let energyCost = 1; //valor de cada lugar
  if (vendor[address].remainingCapacity >=  amount) {
      price = amount * energyCost;
      vendor[address].remainingCapacity -= amount; //precisa mandar isso para o banco de dados tb
} else {
      price = vendor[address].remainingCapacity * energyCost;
      amount -= vendor[address].remainingCapacity;
      price +=
          (amount * energyCost) +
          (amount * energyCost) *
          (vendor[address].taxa / 100);
          vendor[address].remainingCapacity = 0; //atualizar no banco de dados
}
  return price;
  
}


export default function Page() {
  const [amount, setAmount] = useState<number | "">("");
  const [price, setPrice] = useState<number | "">(0);

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
  }
  
/*
const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const value = amount === "" ? 0 : amount;
      let calculatedPrice = 0;

      if (capacity > value) {
        calculatedPrice = preco_da_energia * (capacity - value);
      } else if (capacity < value) {
        calculatedPrice = preco_da_energia * capacity
        calculatedPrice = calculatedPrice * tax * (value - capacity);
      }

      setPrice(calculatedPrice);
    }
  }
  */
  

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-xl mb-8">Purchase page</div>
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
        </header>
        <div className="text-lg">
          PRICE: {price}
        </div>
        <div>
        <button className="px-4 py-2 border rounded">
                Buy (vai chamar o metamask atraves do wagmi que vai realizar o pagamento)
          </button>
        </div>
      </div>
    </main>
  );
}
