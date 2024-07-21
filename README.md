# Energy Market

### Visão Geral
Este projeto é uma plataforma de comercialização de energia elétrica que permite aos usuários comprar energia através de um contrato inteligente desenvolvidos. 

### Objetivo
O projeto tem como um dos intuitos fomentar a energia renovável no contexto atual, facilitando a compra de tal em detrimento da energia elétrica convencional. Além disso, o Energy Market tem como objetiva facilitar a disponibilidade de postos de carregamento para carros elétricos.

### Tecnologias Utilizadas

- **Next.js**: estrutura da web de desenvolvimento front-end React
- **Solidity**: Linguagem de programação para contratos inteligentes em Ethereum.
- **Wagmi**: Biblioteca para trabalhar com contratos inteligentes e interagir com a blockchain.
- **RainbowKit**: Conjunto de ferramentas para integração de carteiras.
- **Vercel**: Plataforma para estruturação e conexão do banco de dados.

### Funcionalidades

- **Compra de Energia**: Permite aos usuários comprar energia através de contratos inteligentes.
- **Venda de Energia**: Permite aos usuários venderem a energia renovável que não está sendo utilizada e colocar o próprio local como posto de energia elétrica.
- **Integração de Carteiras**: Utiliza RainbowKit para conectar carteiras de criptomoedas.
- **Interação com Contratos**: Utiliza Wagmi para facilitar a interação com contratos inteligentes.

### Link de Deploy
[Energy Market](https://hackathon-rio-g2-fix.vercel.app/)

### Instalação e Execução local
1. Clone este repositório:
    ```bash
    git clone https://github.com/polichain/Hackathon_RioG2_fix.git
    cd Hackathon_RioG2_fix/
    ```
2. Instale as dependências na pasta next
    ```bash
    npm install

    yarn install

    npm install @rainbow-me/rainbowkit wagmi viem@2.x @tanstack/react-query

    npm i @vercel/postgres
    ```
3. Inicialize o servidor localmente
   ```bash
   npm run dev
   ```
4. Acesse o http://localhost:3000


