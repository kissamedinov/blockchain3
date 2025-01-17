# Astana University_SE2314_SAB

Astana University_SE2314_SAB is a smart contract implementing an ERC-20 standard token with additional functionality for receiving and displaying transaction information.

## 📋 Description
This smart contract includes the basic capabilities of the standard ERC-20 token with additional functions for managing transaction data:

- **Initialization**: During deployment, 2,000 tokens are created and assigned to the contract creator.
- **Transaction logging**: Each transaction is recorded along with relevant details.
- **Transaction details**: Provides information such as:
  - Sender's address
  - Recipient's address
  - Timestamp of the most recent transaction in an easy-to-read format

## 🛠️ Functionality

### Main Features

#### **ERC-20 Standard Token:**
- **Name**: `Astana UNIVERSITY_SE2314_SAB`
- **Symbol**: `AIU2314`
- **Decimal Places**: `18`

### Additional Functions

1. **Retrieve Last Transaction Timestamp**: Returns the timestamp of the last transaction in the format `day-month-year`.
2. **Transaction Participant Address**: Allows access to the sender's and recipient's addresses.
3. **Transaction Logging**: Records the following details for each transaction:
   - Sender's address
   - Recipient's address
   - Transaction amount
   - Timestamp

## ⚙️ Technical Requirements

- **Development Environment**: Hardhat
- **Programming Language**: Solidity `^0.8.20`
- **Libraries and Dependencies**:
  - `@openzeppelin/contracts`
  - `hardhat`
  - `@nomiclabs/hardhat-ethers`
  - `chai`
  - `ethers`

##  Installation and Launch

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Compile the contract:
   ```bash
   npx hardhat compile
   ```

4. Deploy the contract:
   ```bash
   npx hardhat run scripts/deploy.js --network <network-name>
   ```

5. Run tests:
   ```bash
   npx hardhat test
   
