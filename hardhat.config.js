require("@nomiclabs/hardhat-ethers");

module.exports = {
    defaultNetwork: "ganache",
    networks: {
        ganache: {
            url: "http://127.0.0.1:7545",
            accounts: ["0xA7dB21F5c39E8e4F7bBf6C3a4959A28e8C7e992F", "0xb9e024e6b0abd1a3be56c38602074edfe20614b4b72675bae8fc5ba1fea4b4e8"] 
        }
    },
    solidity: {
        version: "0.8.20", 
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    }
};