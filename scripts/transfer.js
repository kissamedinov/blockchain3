const hre = require("hardhat");

async function main() {
    const [owner] = await hre.ethers.getSigners();
    const Token = await hre.ethers.getContractFactory("AstanaItUniversity_SE2314_SAB");
    const token = await Token.attach("0xA7dB21F5c39E8e4F7bBf6C3a4959A28e8C7e992F"); 

    const recipient = "0x7C3Fb91E23Ae417c59F78d6a300b2c4829BfA47C"; 
    const amount = hre.ethers.utils.parseUnits("100", 18); 

    // transaction
    const tx = await token.transfer(recipient, amount);
    await tx.wait();

    console.log(`Successfully transferred 100 tokens to ${recipient}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});