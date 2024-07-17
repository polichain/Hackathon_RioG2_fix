import {
    createUseReadContract,
    createUseWriteContract,
    createUseSimulateContract,
  } from 'wagmi/codegen'
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // energyMarket a
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  export const energyMarketAbi = [
    {
      type: 'constructor',
      inputs: [{ name: '_energyCost', internalType: 'uint256', type: 'uint256' }],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      inputs: [],
      name: 'Withdraw',
      outputs: [],
      stateMutability: 'payable',
    },
    {
      type: 'function',
      inputs: [
        { name: 'newCapacity', internalType: 'uint256', type: 'uint256' },
        { name: 'newTax', internalType: 'uint256', type: 'uint256' },
      ],
      name: 'addVendor',
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      inputs: [
        { name: 'vendor', internalType: 'address', type: 'address' },
        { name: 'amount', internalType: 'uint256', type: 'uint256' },
      ],
      name: 'buyEnergy',
      outputs: [],
      stateMutability: 'payable',
    },
    {
      type: 'function',
      inputs: [{ name: 'newCapacity', internalType: 'uint256', type: 'uint256' }],
      name: 'changeCapacity',
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      inputs: [],
      name: 'energyCost',
      outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      inputs: [],
      name: 'removeVendor',
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      inputs: [
        { name: 'newEnergyCost', internalType: 'uint256', type: 'uint256' },
      ],
      name: 'setEnergyCost',
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      inputs: [{ name: 'newTax', internalType: 'uint256', type: 'uint256' }],
      name: 'setTax',
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      inputs: [{ name: '', internalType: 'address', type: 'address' }],
      name: 'vendors',
      outputs: [
        { name: 'saldo', internalType: 'uint256', type: 'uint256' },
        { name: 'tax', internalType: 'uint256', type: 'uint256' },
        { name: 'dailyCapacity', internalType: 'uint256', type: 'uint256' },
        { name: 'remainingCapacity', internalType: 'uint256', type: 'uint256' },
        { name: 'active', internalType: 'bool', type: 'bool' },
      ],
      stateMutability: 'view',
    },
  ] as const
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // React
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  /**
   * Wraps __{@link useReadContract}__ with `abi` set to __{@link energyMarketAbi}__
   */
  export const useReadEnergyMarket = /*#__PURE__*/ createUseReadContract({
    abi: energyMarketAbi,
  })
  
  /**
   * Wraps __{@link useReadContract}__ with `abi` set to __{@link energyMarketAbi}__ and `functionName` set to `"energyCost"`
   */
  export const useReadEnergyMarketEnergyCost =
    /*#__PURE__*/ createUseReadContract({
      abi: energyMarketAbi,
      functionName: 'energyCost',
    })
  
  /**
   * Wraps __{@link useReadContract}__ with `abi` set to __{@link energyMarketAbi}__ and `functionName` set to `"vendors"`
   */
  export const useReadEnergyMarketVendors = /*#__PURE__*/ createUseReadContract({
    abi: energyMarketAbi,
    functionName: 'vendors',
  })
  
  /**
   * Wraps __{@link useWriteContract}__ with `abi` set to __{@link energyMarketAbi}__
   */
  export const useWriteEnergyMarket = /*#__PURE__*/ createUseWriteContract({
    abi: energyMarketAbi,
  })
  
  /**
   * Wraps __{@link useWriteContract}__ with `abi` set to __{@link energyMarketAbi}__ and `functionName` set to `"Withdraw"`
   */
  export const useWriteEnergyMarketWithdraw =
    /*#__PURE__*/ createUseWriteContract({
      abi: energyMarketAbi,
      functionName: 'Withdraw',
    })
  
  /**
   * Wraps __{@link useWriteContract}__ with `abi` set to __{@link energyMarketAbi}__ and `functionName` set to `"addVendor"`
   */
  export const useWriteEnergyMarketAddVendor =
    /*#__PURE__*/ createUseWriteContract({
      abi: energyMarketAbi,
      functionName: 'addVendor',
    })
  
  /**
   * Wraps __{@link useWriteContract}__ with `abi` set to __{@link energyMarketAbi}__ and `functionName` set to `"buyEnergy"`
   */
  export const useWriteEnergyMarketBuyEnergy =
    /*#__PURE__*/ createUseWriteContract({
      abi: energyMarketAbi,
      functionName: 'buyEnergy',
    })
  
  /**
   * Wraps __{@link useWriteContract}__ with `abi` set to __{@link energyMarketAbi}__ and `functionName` set to `"changeCapacity"`
   */
  export const useWriteEnergyMarketChangeCapacity =
    /*#__PURE__*/ createUseWriteContract({
      abi: energyMarketAbi,
      functionName: 'changeCapacity',
    })
  
  /**
   * Wraps __{@link useWriteContract}__ with `abi` set to __{@link energyMarketAbi}__ and `functionName` set to `"removeVendor"`
   */
  export const useWriteEnergyMarketRemoveVendor =
    /*#__PURE__*/ createUseWriteContract({
      abi: energyMarketAbi,
      functionName: 'removeVendor',
    })
  
  /**
   * Wraps __{@link useWriteContract}__ with `abi` set to __{@link energyMarketAbi}__ and `functionName` set to `"setEnergyCost"`
   */
  export const useWriteEnergyMarketSetEnergyCost =
    /*#__PURE__*/ createUseWriteContract({
      abi: energyMarketAbi,
      functionName: 'setEnergyCost',
    })
  
  /**
   * Wraps __{@link useWriteContract}__ with `abi` set to __{@link energyMarketAbi}__ and `functionName` set to `"setTax"`
   */
  export const useWriteEnergyMarketSetTax = /*#__PURE__*/ createUseWriteContract({
    abi: energyMarketAbi,
    functionName: 'setTax',
  })
  
  /**
   * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link energyMarketAbi}__
   */
  export const useSimulateEnergyMarket = /*#__PURE__*/ createUseSimulateContract({
    abi: energyMarketAbi,
  })
  
  /**
   * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link energyMarketAbi}__ and `functionName` set to `"Withdraw"`
   */
  export const useSimulateEnergyMarketWithdraw =
    /*#__PURE__*/ createUseSimulateContract({
      abi: energyMarketAbi,
      functionName: 'Withdraw',
    })
  
  /**
   * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link energyMarketAbi}__ and `functionName` set to `"addVendor"`
   */
  export const useSimulateEnergyMarketAddVendor =
    /*#__PURE__*/ createUseSimulateContract({
      abi: energyMarketAbi,
      functionName: 'addVendor',
    })
  
  /**
   * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link energyMarketAbi}__ and `functionName` set to `"buyEnergy"`
   */
  export const useSimulateEnergyMarketBuyEnergy =
    /*#__PURE__*/ createUseSimulateContract({
      abi: energyMarketAbi,
      functionName: 'buyEnergy',
    })
  
  /**
   * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link energyMarketAbi}__ and `functionName` set to `"changeCapacity"`
   */
  export const useSimulateEnergyMarketChangeCapacity =
    /*#__PURE__*/ createUseSimulateContract({
      abi: energyMarketAbi,
      functionName: 'changeCapacity',
    })
  
  /**
   * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link energyMarketAbi}__ and `functionName` set to `"removeVendor"`
   */
  export const useSimulateEnergyMarketRemoveVendor =
    /*#__PURE__*/ createUseSimulateContract({
      abi: energyMarketAbi,
      functionName: 'removeVendor',
    })
  
  /**
   * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link energyMarketAbi}__ and `functionName` set to `"setEnergyCost"`
   */
  export const useSimulateEnergyMarketSetEnergyCost =
    /*#__PURE__*/ createUseSimulateContract({
      abi: energyMarketAbi,
      functionName: 'setEnergyCost',
    })
  
  /**
   * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link energyMarketAbi}__ and `functionName` set to `"setTax"`
   */
  export const useSimulateEnergyMarketSetTax =
    /*#__PURE__*/ createUseSimulateContract({
      abi: energyMarketAbi,
      functionName: 'setTax',
    })