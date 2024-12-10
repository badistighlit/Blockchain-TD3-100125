# ux-indexer

## Intro

Your task is to build a simple UX for connecting to Ethereum, interacting with the blockchain, integrating with the [SQD Indexer](https://www.sqd.dev/), and enabling users to perform blockchain transactions. You will retrieve, display, and manage token-related data while focusing on creating a seamless user experience using modern tools.

This repo outlines tasks that will guide you through setting up an app.

The tasks are structured to evaluate your ability to:

1. Set up a modern web3 app.
2. Connect and interact with Ethereum using Wagmi.sh.
3. Retrieve and display data using the SQD Indexer.
4. Create a functional UI for sending transactions.

---

## Tasks List

### Part 1: Connecting to Ethereum and Basic Setup (9 pts)

#### 1. **Set Up a GitHub Repository** (1 pt)

- Create a repository to host your project.

#### 2. **Initialize a Next.js App with Wagmi.sh** (3 pts)

- Install and configure [Wagmi](https://wagmi.sh/) to interact with Ethereum.
- Create a `/chain-info` page that:
  - Connects to Ethereum.
  - Displays the following:
    - Current chain ID.
    - Last block number.
    - Latest block hash.
    - Gas used.
    - Gas price.
    - Burnt Fees.

#### 3. **Add a Connect Button** (3 pts)

- Add a **Header** section.
- Include a **Connect Wallet** button that:
  - Allows users to connect or disconnect their wallet.
  - Displays the connected wallet address and ETH balance.

#### 4. **Handle Chain Errors** (2 pts)

- Display an error if the user is connected to a chain other than Ethereum Mainnet or a specified testnet (e.g., Sepolia).
- Add button to switch chain to Ethereum Mainnet or a specified testnet (e.g., Sepolia)

---

### Part 2: Integrating with SQD Indexer (9 pts)

#### 1. **Tutorial Walkthrough** (2 pts)

- Complete the [SQD.dev tutorial](https://docs.sqd.dev/sdk/how-to-start/squid-from-scratch/).

#### 2. **Retrieve Indexer Data** (4 pts)

- Retrieve data using the SQD Indexer for:
  - Token Informations (e.g., symbol, name, decimals & total supply).
  - Token balances for a specific address.
  - Metrics (e.g., total transfers, number of holders).

#### 3. **Create a Data Page** (3 pts)

- Create a `/token-data` page that:
  - Displays token-related information (e.g., Symbol, Name, Decimals, Total Supply).
  - Displays token balances for a selected address.
  - Includes token metrics in the token information section.

---

### Part 3: Sending Transactions (7 pts)

#### 1. **Create a Send Transaction Page** (4 pts)

- Create a `/send-tx` page with a user-friendly UI for sending Ethereum transactions.
- The page should include:
  - An input field for the recipient's address.
  - An input field for the amount of ETH to send.
  - A button to confirm and send the transaction.
- Validate user inputs:
  - Ensure the recipient address is valid.
  - Display a clear error message if the transaction fails.
- Show a confirmation message with the transaction hash upon success.

---

### Bonus Tasks (3 pts)

#### 1. **Deploy Your App** (3 pts)

- Deploy your app using [Vercel](https://vercel.com/), [Railway](https://railway.app/), or any other free-tier platform.

---

### Deliverables

1. **Repository**: Submit a link to your GitHub repository containing the project.
2. **Live Deployment or Local Demo**:
   - If hosted, provide the live deployment link.
   - If not hosted, provide a screen recording of your local implementation.

---

### Evaluation

| **Section**                    | **Points** |
| ------------------------------ | ---------- |
| Part 1: Connecting to Ethereum | 9 pts      |
| Part 2: Integrating with SQD   | 9 pts      |
| Part 3: Sending Transactions   | 4 pts      |
| Bonus Tasks                    | 3 pts      |
| **Total**                      | **25 pts** |

---

Note: The final score for students is calculated out of 22 points, with additional bonus points available to exceed this total.
