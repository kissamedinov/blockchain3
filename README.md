# AstanaItUniversity_SE2314_SAB

AstanaItUniversity_SE2314_SAB is a smart contract implementing an ERC-20 token with additional functionality for retrieving and displaying transaction details.

## 📋 Description
This smart contract includes the basic functionalities of an ERC-20 token along with enhanced transaction handling features:

- **Initialization**: Upon deployment, 2000 tokens are created and assigned to the contract creator.
- **Transaction Logging**: Every transaction is recorded in an event with detailed information.
- **Transaction Data Retrieval**:
  - Sender address.
  - Receiver address.
  - Timestamp of the last transaction in a readable format.

## 🔧 Setup
### Clone the Repository
```sh
git clone https://github.com/
cd your-repository
```
### Install Dependencies
```sh
npm install
```
### Run Tests
```sh
npx hardhat test
```

### Deploy to Local Network
Run a local blockchain (e.g., Ganache), then deploy the contract:
```sh
npx hardhat run scripts/deploy.js --network ganache
```

## 🗒 Usage Examples

### Check Balance
Retrieve the token balance of the owner:
```javascript
const balance = await token.balanceOf(owner.address);
console.log("Balance:", ethers.utils.formatUnits(balance, 18));
```

### Transaction Example
Transfer 100 tokens to another address:
```javascript
await token.transfer(addr1.address, ethers.utils.parseUnits("100", 18));
```

### Retrieve Transaction Information
Get the sender address of the last transaction:
```javascript
const sender = await token.getTransactionSender();
console.log("Sender address:", sender);
```

Get the receiver address of the last transaction:
```javascript
const receiver = await token.getTransactionReceiver();
console.log("Receiver address:", receiver);
```

Get the timestamp of the last transaction:
```javascript
const timestamp = await token.getTransactionTimestamp();
console.log("Last transaction timestamp:", timestamp);
```

## 📷 Screenshots
Key project workflow steps:
- Clone the repository
- Install dependencies
- Run tests
- Deploy the contract
- Example usage:
  - Check balance
  - Execute transaction
  - Retrieve transaction details

