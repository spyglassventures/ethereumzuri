# Züri Crypto Cars NFT DApp

Demo (Video): https://youtu.be/qtvSYP6mI7o

Züri Crypto Cars NFT DApp is Ethereum market place, connecting buyer and sellers of cars.

Its cool because it comes with:
- an escrow and 
- helps with the paperwork.

![](docs/1.png?raw=true)

## Motivation
I came up with the idea, since I was selling my own car and most requests I got were for export. 
Most people wanted to export my BMW to Eastern Europe and wanted to pay in cash, ideally not in CHF. 
I was ok with EUR, but I was worried about getting counterfeid bills. Also the buyers has to deal with customs and fill out forms.
See: https://www.bazg.admin.ch/bazg/de/home/services/services-private/services-private-einfuhr/ausfuhrzollanmeldung-e-dec-web.html
Blockchain can solve this! Züri Crypto Cars will solve this!

![](docs/2.png?raw=true)
![](docs/techstack.png?raw=true)
![](docs/form.png?raw=true)
Click Link to see example form: https://github.com/spyglassventures/ethereumzuri/blob/master/docs/Example_export_form.pdf

## How it Works
Users can browse and purchase NFTs representing a range of cars. Each NFT is a unique digital asset that represents ownership of a specific car.

Using the Züri Crypto Cars NFT DApp, car owners can tokenize their vehicles and sell them as NFTs, allowing others to invest in and own a piece of their favorite cars.

The Züri Crypto Cars NFT DApp uses smart contracts to ensure secure and transparent transactions on the Ethereum blockchain. All transactions are recorded on the blockchain, providing a permanent and immutable record of ownership and transfer.

## Getting Started
To get started with Züri Crypto Cars NFT DApp, you will need an Ethereum wallet and some Ether (ETH) to purchase NFTs.


## Technology Stack & Tools

- Solidity (Writing Smart Contracts & Tests)
- Javascript (React & Testing)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [React.js](https://reactjs.org/) (Frontend Framework)

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
`$ npm install`

### 3. Run tests
`$ npx hardhat test`

### 4. Start Hardhat node
`$ npx hardhat node`

### 5. Run deployment script
In a separate terminal execute:
`$ npx hardhat run ./scripts/deploy.js --network localhost`

### 7. Start frontend
`$ npm run start`
