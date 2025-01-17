const hre = require("hardhat");

async function main() {
    const [owner, addr1] = await hre.ethers.getSigners();
    const Token = await hre.ethers.getContractFactory("AstanaItUniversity_SE2314_SAB");
    const token = await Token.attach("0xA7dB21F5c39E8e4F7bBf6C3a4959A28e8C7e992F"); 

    const amount = hre.ethers.utils.parseUnits("100", 18); 
    const recipient = addr1.address;

    
    const tokenFromAddr1 = token.connect(addr1);
    const tx = await tokenFromAddr1.transfer(owner.address, amount);
    await tx.wait();

    console.log(`Successfully returned 100 tokens from ${recipient} to ${owner.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});