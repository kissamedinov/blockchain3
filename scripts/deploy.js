const hre = require("hardhat");

async function main() {
const [deployer] = await hre.ethers.getSigners();
console.log("Deploying contracts with the account:", deployer.address);

const Token = await hre.ethers.getContractFactory("AstanaItUniversity_SE2314");
//numbers of tocken
const initialSupply = 5000; 

const token = await Token.deploy(initialSupply);
await token.deployed();

console.log("Token deployed to:", token.address);
}

main().catch((error) => {
console.error(error);
process.exitCode = 1;
});