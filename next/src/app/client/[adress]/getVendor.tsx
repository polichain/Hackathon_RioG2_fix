"use client";

import { useState } from 'react';
import { useReadContract } from 'wagmi';
import * as React from 'react'
import { energyMarketAbi } from '../../../generated';
export function GetVendors() {

    const abi = energyMarketAbi;
    const [vendor, setVendor] = useState("");
    const [resultData, setResultData] = useState({});

    const handleSetVendor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVendor(event.target.value);
    };


    const result = useReadContract({
        abi,  // ta dizendo que o tipo n possui abi
        functionName: 'vendors',
        address: '0x4B0FfA3E5506f655De25c77FfCCC42508eF7FB91',
        args: ["0xC768B34f7F4f8A05AA51d741ef6027ec28c98558"],
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aqui assumimos que result.data é onde os dados serão armazenados
        if (result.data) {
            setResultData(result.data);
        } else {
            setResultData("No data found or an error occurred");
        }
    };

    const serializeResultData = (data: {}) => {
        if (typeof data === 'bigint') {
            return data.toString();
        }
        if (Array.isArray(data)) {
            return data.map(serializeResultData);
        }
        if (typeof data === 'object' && data !== null) {
            return Object.fromEntries(Object.entries(data).map(([key, value]) => [key, serializeResultData(value)]));
        }
        return data;
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="vendor"
                placeholder="0xA0Cf…251e"
                value={vendor}
                onChange={handleSetVendor}
                required
            />
            <button type="submit">Submit</button>
            {resultData && (
                <div>
                    <h3>Result:</h3>
                    <pre>{JSON.stringify(serializeResultData(resultData), null, 2)}</pre>
                </div>
            )}
        </form>
    )
}