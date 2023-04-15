// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
  // Setup accounts
  const [buyer, seller, inspector, lender] = await ethers.getSigners()

  // Deploy Real Estate
  const Cars = await ethers.getContractFactory('Cars')
  const car = await Cars.deploy()
  await car.deployed()

  console.log(`Deployed Car Contract at: ${car.address}`)
  console.log(`Minting 3 cars...\n`)

  for (let i = 0; i < 3; i++) {
    const transaction = await car.connect(seller).mint(`https://gateway.ipfs.io/ipfs/QmYti88tLmaMmPtTpeoDSBcFnBa7Qs9uQy14gXV4LXiAv5/${i + 1}.json`)
    await transaction.wait()
  }

  // Deploy Escrow
  const Escrow = await ethers.getContractFactory('Escrow')
  const escrow = await Escrow.deploy(
    car.address,
    seller.address,
    inspector.address,
    lender.address
  )
  await escrow.deployed()

  console.log(`Deployed Escrow Contract at: ${escrow.address}`)
  console.log(`Listing 3 cars...\n`)

  for (let i = 0; i < 3; i++) {
    // Approve cars...
    let transaction = await car.connect(seller).approve(escrow.address, i + 1)
    await transaction.wait()
  }

  // Listing cars...
  transaction = await escrow.connect(seller).list(1, buyer.address, tokens(5.77), tokens(5.77))
  await transaction.wait()

  transaction = await escrow.connect(seller).list(2, buyer.address, tokens(5.82), tokens(5.82))
  await transaction.wait()

  transaction = await escrow.connect(seller).list(3, buyer.address, tokens(5.60), tokens(5.60))
  await transaction.wait()

  console.log(`Finished.`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
