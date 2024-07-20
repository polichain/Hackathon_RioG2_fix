"use client";

import { useState, useEffect } from "react";
import { useReadContract } from "wagmi";
import * as React from "react";
import { energyMarketAbi } from "../../../generated";
import { Address } from "viem";

export let endereco: string;

export function GetVendors() {
  const abi = energyMarketAbi;
  const [vendor, setVendor] = useState("");
  const [resultData, setResultData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSetVendor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVendor(event.target.value);
  };

  const result = useReadContract({
    abi: energyMarketAbi,
    functionName: "vendors",
    address: "0x4B0FfA3E5506f655De25c77FfCCC42508eF7FB91",
    args: [vendor as Address],
  });

  useEffect(() => {
    console.log("Contract read result:", result);
  }, [result]);

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

  const serializeResultData = (data: any) => {
    if (typeof data === "bigint") {
      return data.toString();
    }
    if (Array.isArray(data)) {
      return data.map(serializeResultData);
    }
    if (typeof data === "object" && data !== null) {
      return Object.fromEntries(
        Object.entries(data).map(([key, value]) => [
          key,
          serializeResultData(value),
        ])
      );
    }
    return data;
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input
        name="vendor"
        placeholder="0xA0Cf…251e"
        value={endereco}
        onChange={handleSetVendor}
        required
      />
      <button type="submit">Submit</button>
      {isSubmitted && resultData && (
        <div>
          <h3>
            <div style={{ marginBottom: "-15px", textAlign: "center" }}>
              Tax: {serializeResultData(resultData.Tax)}
            </div>
            <br></br>
            <div style={{ textAlign: "center" }}>
              Reamaining Capacity: {serializeResultData(resultData.ReamainingCapacity)} {/* Reamaining Capacity:{" "} */}
            </div>
          </h3>
        </div>
      )}
    </form>
  );
}
