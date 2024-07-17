// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

contract energyMarket {
    mapping(address => Vendor) public vendors;

    address owner;
    uint public energyCost;
    struct Vendor {
        uint saldo;
        uint tax;
        uint dailyCapacity; // Média
        uint remainingCapacity;
        bool active;
    }

    constructor(uint _energyCost) {
        energyCost = _energyCost;
        owner = msg.sender;
    }

    function buyEnergy(address vendor, uint amount) external payable {
        uint price;

        if (vendors[vendor].remainingCapacity >= amount) {
            price = amount * energyCost;
            vendors[vendor].remainingCapacity -= amount;
        } else {
            price = vendors[vendor].remainingCapacity * energyCost;
            amount -= vendors[vendor].remainingCapacity;
            price +=
                (amount * energyCost) +
                (amount * energyCost) *
                (vendors[vendor].tax / 100);
            vendors[vendor].remainingCapacity = 0;
        }

        require(msg.value >= price, "Insufficient funds sent");
        vendors[vendor].saldo += price;

        if (msg.value > price) {
            /* TROCO */
            payable(msg.sender).transfer(msg.value - price);
        }
    }

    function changeCapacity(uint newCapacity) public {
        require(vendors[msg.sender].active == true, "You don t are a vendor");
        vendors[msg.sender].dailyCapacity = newCapacity;
    }

    function addVendor(uint newCapacity, uint newTax) public {
        vendors[msg.sender].dailyCapacity = newCapacity;
        vendors[msg.sender].tax = newTax;
        vendors[msg.sender].remainingCapacity = newCapacity;
        vendors[msg.sender].saldo = 0;
        vendors[msg.sender].active = true;
    }

    function Withdraw() public payable {
        payable(msg.sender).transfer(vendors[msg.sender].saldo);
        vendors[msg.sender].saldo = 0;
    }

    function setEnergyCost(uint newEnergyCost) public {
        require(msg.sender == owner, "You need to be the owner to do this");
        energyCost = newEnergyCost;
    }

    function setTax(uint newTax) public {
        require(vendors[msg.sender].active == true, "You don t are a vendor");
        vendors[msg.sender].tax = newTax;
    }

    function removeVendor() public {
        require(vendors[msg.sender].active == true, "You don t are a vendor");
        vendors[msg.sender].active = false;
        vendors[msg.sender].dailyCapacity = 0;
        vendors[msg.sender].remainingCapacity = 0;
        vendors[msg.sender].saldo = 0;
        vendors[msg.sender].tax = 0;
    }
}
