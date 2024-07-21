# Energy Market

### Overview
This project is a platform for trading electrical energy, allowing users to purchase energy through developed smart contracts.

### Objective
One of the main goals of the project is to promote renewable energy in the current context, making it easier to purchase such energy over conventional electrical energy. Additionally, Energy Market aims to facilitate the availability of charging stations for electric cars.

### Technologies Used

- **Next.js**: web development framework for front-end React.
- **Solidity**: programming language for smart contracts on Ethereum.
- **Wagmi**: library for working with smart contracts and interacting with the blockchain.
- **RainbowKit**: set of tools for wallet integration.
- **Vercel**: platform for structuring and connecting the database.

### Features

- **Energy Purchase:** Allows users to buy energy through smart contracts.
- **Energy Sale:** Allows users to sell unused renewable energy and set up their own location as an electric charging station.
- **Wallet Integration:** Uses RainbowKit to connect cryptocurrency wallets.
- **Contract Interaction:** Uses Wagmi to facilitate interaction with smart contracts.

### Deployment Link
[Energy Market](https://hackathon-rio-g2-fix.vercel.app/)

### Installation and Local Execution

1. Clone this repository:
    ```bash
    git clone https://github.com/polichain/Hackathon_RioG2_fix.git
    cd Hackathon_RioG2_fix/
    ```
2. Install dependencies in the next folder
    ```bash
    npm install

    yarn install

    npm install @rainbow-me/rainbowkit wagmi viem@2.x @tanstack/react-query

    npm i @vercel/postgres
    ```
3. Start the server locally
   ```bash
   npm run dev
   ```
4. Access http://localhost:3000


