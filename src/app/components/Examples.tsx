import { useState } from 'react';
import { Code, Copy, Check, Play, Download, ExternalLink, Zap, Shield, Wallet, ArrowRight, FileCode, Terminal, Rocket, Eye, Lock, Key, ChevronRight, Book, Github } from 'lucide-react';

type ExampleCategory = 'basic' | 'advanced' | 'integration' | 'dapps';

export function Examples() {
  const [activeCategory, setActiveCategory] = useState<ExampleCategory>('basic');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const categories = [
    { id: 'basic', label: 'Basic Examples', icon: Code, count: 8 },
    { id: 'advanced', label: 'Advanced', icon: Rocket, count: 6 },
    { id: 'integration', label: 'Integration', icon: Terminal, count: 5 },
    { id: 'dapps', label: 'dApps', icon: Zap, count: 4 }
  ];

  const basicExamples = [
    {
      id: 'basic-1',
      title: 'Create Wallet',
      description: 'Generate a new KryptonX wallet with private keys',
      difficulty: 'Beginner',
      time: '2 min',
      language: 'TypeScript',
      code: `import { KryptonX } from '@kryptonx/sdk';

// Initialize client
const client = new KryptonX({
  network: 'mainnet',
  apiKey: 'YOUR_API_KEY'
});

// Create new wallet
const wallet = await client.createWallet();

console.log('Address:', wallet.address);
console.log('Private Key:', wallet.privateKey);
console.log('Public Key:', wallet.publicKey);`,
      tags: ['wallet', 'setup', 'beginner']
    },
    {
      id: 'basic-2',
      title: 'Send Private Transaction',
      description: 'Send a private transaction with maximum privacy',
      difficulty: 'Beginner',
      time: '3 min',
      language: 'TypeScript',
      code: `import { KryptonX } from '@kryptonx/sdk';

const client = new KryptonX({ network: 'mainnet' });
const wallet = await client.importWallet(privateKey);

// Send private transaction
const tx = await wallet.send({
  to: 'krtx5h4g3k2m1n...', // Recipient address
  amount: 100, // Amount in KRTX
  privacy: 'maximum', // Privacy level
  memo: 'Payment for services' // Optional memo
});

console.log('Transaction Hash:', tx.hash);
console.log('Status:', tx.status);`,
      tags: ['transaction', 'privacy', 'send']
    },
    {
      id: 'basic-3',
      title: 'Check Balance',
      description: 'Get wallet balance and transaction history',
      difficulty: 'Beginner',
      time: '2 min',
      language: 'TypeScript',
      code: `import { KryptonX } from '@kryptonx/sdk';

const client = new KryptonX({ network: 'mainnet' });
const wallet = await client.importWallet(privateKey);

// Get balance
const balance = await wallet.getBalance();
console.log('Available:', balance.available);
console.log('Pending:', balance.pending);
console.log('Total:', balance.total);

// Get transaction history
const history = await wallet.getTransactions({
  limit: 10,
  offset: 0
});

history.forEach(tx => {
  console.log(\`\${tx.date}: \${tx.amount} KRTX\`);
});`,
      tags: ['balance', 'history', 'query']
    },
    {
      id: 'basic-4',
      title: 'Generate Stealth Address',
      description: 'Create one-time stealth address for receiving payments',
      difficulty: 'Intermediate',
      time: '3 min',
      language: 'TypeScript',
      code: `import { KryptonX } from '@kryptonx/sdk';

const client = new KryptonX({ network: 'mainnet' });
const wallet = await client.importWallet(privateKey);

// Generate stealth address
const stealthAddress = await wallet.generateStealthAddress({
  label: 'Payment from Client A',
  expiresIn: 86400 // 24 hours in seconds
});

console.log('Stealth Address:', stealthAddress.address);
console.log('Payment Code:', stealthAddress.paymentCode);
console.log('Expires:', stealthAddress.expiresAt);

// Share stealth address with sender
// They can only use it once!`,
      tags: ['stealth', 'privacy', 'address']
    },
    {
      id: 'basic-5',
      title: 'Verify Transaction',
      description: 'Verify transaction status and confirmations',
      difficulty: 'Beginner',
      time: '2 min',
      language: 'TypeScript',
      code: `import { KryptonX } from '@kryptonx/sdk';

const client = new KryptonX({ network: 'mainnet' });

// Verify transaction by hash
const tx = await client.getTransaction(
  '0x8f4b2c1d...'
);

console.log('Status:', tx.status); // pending, confirmed, failed
console.log('Confirmations:', tx.confirmations);
console.log('Block:', tx.blockNumber);
console.log('Timestamp:', tx.timestamp);
console.log('Fee:', tx.fee);

// Wait for confirmations
await tx.wait(6); // Wait for 6 confirmations
console.log('Transaction confirmed!');`,
      tags: ['verify', 'transaction', 'status']
    },
    {
      id: 'basic-6',
      title: 'Import Existing Wallet',
      description: 'Import wallet using private key or mnemonic',
      difficulty: 'Beginner',
      time: '2 min',
      language: 'TypeScript',
      code: `import { KryptonX } from '@kryptonx/sdk';

const client = new KryptonX({ network: 'mainnet' });

// Import from private key
const wallet1 = await client.importWallet(
  '0x1234567890abcdef...'
);

// Import from mnemonic (12 or 24 words)
const wallet2 = await client.importFromMnemonic(
  'word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11 word12'
);

// Import from JSON keystore
const wallet3 = await client.importFromKeystore(
  keystoreJson,
  'password123'
);

console.log('Wallet imported:', wallet1.address);`,
      tags: ['import', 'wallet', 'mnemonic']
    },
    {
      id: 'basic-7',
      title: 'Encrypt & Decrypt Messages',
      description: 'Send encrypted messages with transactions',
      difficulty: 'Intermediate',
      time: '4 min',
      language: 'TypeScript',
      code: `import { KryptonX } from '@kryptonx/sdk';

const client = new KryptonX({ network: 'mainnet' });
const wallet = await client.importWallet(privateKey);

// Encrypt message
const encrypted = await wallet.encryptMessage(
  'krtx5h4g3k2m1n...', // Recipient public key
  'This is a secret message'
);

// Send with transaction
const tx = await wallet.send({
  to: 'krtx5h4g3k2m1n...',
  amount: 0,
  encryptedData: encrypted
});

// Decrypt received message
const decrypted = await wallet.decryptMessage(
  encrypted,
  senderPublicKey
);

console.log('Decrypted:', decrypted);`,
      tags: ['encryption', 'messages', 'privacy']
    },
    {
      id: 'basic-8',
      title: 'Multi-Signature Wallet',
      description: 'Create and use multi-sig wallet for enhanced security',
      difficulty: 'Advanced',
      time: '5 min',
      language: 'TypeScript',
      code: `import { KryptonX } from '@kryptonx/sdk';

const client = new KryptonX({ network: 'mainnet' });

// Create multi-sig wallet (2 of 3)
const multiSig = await client.createMultiSig({
  owners: [
    'krtx5h4g3k2m1n...', // Owner 1
    'krtx7j8k9l0m1n...', // Owner 2
    'krtx3d4e5f6g7h...'  // Owner 3
  ],
  threshold: 2 // Require 2 signatures
});

// Propose transaction (by owner 1)
const proposal = await multiSig.propose({
  to: 'krtx9x8y7z6w5v...',
  amount: 500,
  memo: 'Team payment'
});

// Approve by owner 2
await multiSig.approve(proposal.id, owner2PrivateKey);

// Execute after threshold reached
await multiSig.execute(proposal.id);`,
      tags: ['multisig', 'security', 'advanced']
    }
  ];

  const advancedExamples = [
    {
      id: 'adv-1',
      title: 'Ring Signature Transaction',
      description: 'Create transaction with ring signature mixing',
      difficulty: 'Advanced',
      time: '6 min',
      language: 'TypeScript',
      code: `import { KryptonX } from '@kryptonx/sdk';

const client = new KryptonX({ network: 'mainnet' });
const wallet = await client.importWallet(privateKey);

// Create ring signature transaction
const tx = await wallet.sendWithRingSignature({
  to: 'krtx5h4g3k2m1n...',
  amount: 100,
  ringSize: 11, // Mix with 10 other transactions
  decoys: 'auto', // Auto-select decoy transactions
  privacy: 'maximum'
});

console.log('Ring members:', tx.ringMembers.length);
console.log('Your position hidden among:', tx.ringSize);
console.log('Transaction hash:', tx.hash);`,
      tags: ['ring-signature', 'privacy', 'advanced']
    },
    {
      id: 'adv-2',
      title: 'Zero-Knowledge Proof Generation',
      description: 'Generate and verify custom ZK proofs',
      difficulty: 'Expert',
      time: '10 min',
      language: 'TypeScript',
      code: `import { KryptonX, ZKProof } from '@kryptonx/sdk';

const client = new KryptonX({ network: 'mainnet' });
const wallet = await client.importWallet(privateKey);

// Create ZK proof for balance verification
const proof = await ZKProof.generate({
  statement: 'balance >= 1000',
  witness: {
    balance: wallet.balance,
    privateKey: wallet.privateKey
  },
  circuit: 'balance-verification-v1'
});

console.log('Proof:', proof.data);
console.log('Public inputs:', proof.publicInputs);

// Verify proof (anyone can verify)
const isValid = await ZKProof.verify(proof);
console.log('Proof valid:', isValid);

// Submit proof on-chain
const tx = await wallet.submitProof(proof);`,
      tags: ['zk-proof', 'verification', 'expert']
    },
    {
      id: 'adv-3',
      title: 'Confidential Smart Contract',
      description: 'Deploy and interact with private smart contracts',
      difficulty: 'Expert',
      time: '15 min',
      language: 'TypeScript',
      code: `import { KryptonX, Contract } from '@kryptonx/sdk';

const client = new KryptonX({ network: 'mainnet' });
const wallet = await client.importWallet(privateKey);

// Deploy private contract
const contract = await Contract.deploy({
  code: contractBytecode,
  constructor: {
    owner: wallet.address,
    initialSupply: 1000000
  },
  privacy: {
    state: 'encrypted', // Encrypt contract state
    balance: 'hidden', // Hide balances
    calls: 'private' // Private function calls
  }
});

// Call private function
const result = await contract.call('transfer', {
  to: 'krtx5h4g3k2m1n...',
  amount: 100,
  proof: await wallet.generateCallProof()
});

console.log('Contract deployed:', contract.address);`,
      tags: ['smart-contract', 'privacy', 'expert']
    },
    {
      id: 'adv-4',
      title: 'Atomic Swap',
      description: 'Perform trustless atomic swap with another chain',
      difficulty: 'Advanced',
      time: '8 min',
      language: 'TypeScript',
      code: `import { KryptonX, AtomicSwap } from '@kryptonx/sdk';

const client = new KryptonX({ network: 'mainnet' });
const wallet = await client.importWallet(privateKey);

// Initiate atomic swap
const swap = await AtomicSwap.create({
  send: {
    token: 'KRTX',
    amount: 100,
    chain: 'kryptonx'
  },
  receive: {
    token: 'ETH',
    amount: 0.05,
    chain: 'ethereum',
    address: '0x1234...'
  },
  timeout: 3600 // 1 hour
});

// Share swap details with counterparty
console.log('Swap ID:', swap.id);
console.log('Secret hash:', swap.secretHash);

// Complete swap after counterparty locks funds
await swap.complete(secret);`,
      tags: ['atomic-swap', 'cross-chain', 'advanced']
    },
    {
      id: 'adv-5',
      title: 'Privacy-Preserving Voting',
      description: 'Implement anonymous voting system',
      difficulty: 'Advanced',
      time: '12 min',
      language: 'TypeScript',
      code: `import { KryptonX, Voting } from '@kryptonx/sdk';

const client = new KryptonX({ network: 'mainnet' });
const wallet = await client.importWallet(privateKey);

// Create voting session
const voting = await Voting.create({
  title: 'Proposal #1: Upgrade Protocol',
  options: ['Yes', 'No', 'Abstain'],
  eligibility: {
    minBalance: 100, // Must hold 100 KRTX
    snapshot: 'latest'
  },
  duration: 86400 // 24 hours
});

// Cast anonymous vote with ZK proof
const vote = await voting.cast({
  option: 'Yes',
  proof: await wallet.generateEligibilityProof()
});

// Tally results (privacy-preserved)
const results = await voting.getTally();
console.log('Results:', results);`,
      tags: ['voting', 'governance', 'privacy']
    },
    {
      id: 'adv-6',
      title: 'Private Token Issuance',
      description: 'Create and manage private tokens',
      difficulty: 'Advanced',
      time: '10 min',
      language: 'TypeScript',
      code: `import { KryptonX, Token } from '@kryptonx/sdk';

const client = new KryptonX({ network: 'mainnet' });
const wallet = await client.importWallet(privateKey);

// Issue private token
const token = await Token.create({
  name: 'Private Gold',
  symbol: 'PGLD',
  totalSupply: 1000000,
  decimals: 18,
  privacy: {
    balances: 'hidden',
    transfers: 'private',
    supply: 'public'
  }
});

// Mint tokens (owner only)
await token.mint(wallet.address, 10000);

// Private transfer
await token.transfer({
  to: 'krtx5h4g3k2m1n...',
  amount: 500,
  proof: await wallet.generateBalanceProof()
});

console.log('Token created:', token.address);`,
      tags: ['token', 'issuance', 'privacy']
    }
  ];

  const integrationExamples = [
    {
      id: 'int-1',
      title: 'React Integration',
      description: 'Integrate KryptonX into React application',
      difficulty: 'Intermediate',
      time: '5 min',
      language: 'TypeScript',
      code: `import { useState, useEffect } from 'react';
import { KryptonX } from '@kryptonx/sdk';

export function WalletComponent() {
  const [wallet, setWallet] = useState(null);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const initWallet = async () => {
      const client = new KryptonX({ network: 'mainnet' });
      const w = await client.createWallet();
      setWallet(w);
      
      // Get balance
      const b = await w.getBalance();
      setBalance(b.total);
    };
    
    initWallet();
  }, []);

  const handleSend = async (to, amount) => {
    const tx = await wallet.send({ to, amount });
    alert(\`Transaction sent: \${tx.hash}\`);
  };

  return (
    <div>
      <h2>Balance: {balance} KRTX</h2>
      <button onClick={() => handleSend('krtx...', 10)}>
        Send 10 KRTX
      </button>
    </div>
  );
}`,
      tags: ['react', 'frontend', 'integration']
    },
    {
      id: 'int-2',
      title: 'Next.js API Route',
      description: 'Backend API integration with Next.js',
      difficulty: 'Intermediate',
      time: '6 min',
      language: 'TypeScript',
      code: `// pages/api/wallet/send.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { KryptonX } from '@kryptonx/sdk';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { to, amount } = req.body;

  try {
    const client = new KryptonX({
      network: 'mainnet',
      apiKey: process.env.KRYPTONX_API_KEY
    });

    const wallet = await client.importWallet(
      process.env.WALLET_PRIVATE_KEY
    );

    const tx = await wallet.send({ to, amount });

    return res.status(200).json({
      success: true,
      txHash: tx.hash
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
}`,
      tags: ['nextjs', 'api', 'backend']
    },
    {
      id: 'int-3',
      title: 'Express.js Server',
      description: 'Backend server with Express.js',
      difficulty: 'Intermediate',
      time: '7 min',
      language: 'TypeScript',
      code: `import express from 'express';
import { KryptonX } from '@kryptonx/sdk';

const app = express();
app.use(express.json());

// Initialize client
const client = new KryptonX({
  network: 'mainnet',
  apiKey: process.env.KRYPTONX_API_KEY
});

// Create wallet endpoint
app.post('/api/wallet/create', async (req, res) => {
  try {
    const wallet = await client.createWallet();
    res.json({
      address: wallet.address,
      // NEVER send private key to client in production!
      privateKey: wallet.privateKey
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Send transaction endpoint
app.post('/api/wallet/send', async (req, res) => {
  const { from, to, amount, privateKey } = req.body;
  
  try {
    const wallet = await client.importWallet(privateKey);
    const tx = await wallet.send({ to, amount });
    res.json({ txHash: tx.hash });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000);`,
      tags: ['express', 'server', 'backend']
    },
    {
      id: 'int-4',
      title: 'Web3.js Integration',
      description: 'Use with existing Web3 applications',
      difficulty: 'Advanced',
      time: '8 min',
      language: 'TypeScript',
      code: `import Web3 from 'web3';
import { KryptonX, Bridge } from '@kryptonx/sdk';

// Initialize both clients
const web3 = new Web3(window.ethereum);
const krtx = new KryptonX({ network: 'mainnet' });

// Bridge between Ethereum and KryptonX
const bridge = new Bridge({
  ethereum: web3,
  kryptonx: krtx
});

// Deposit ETH to KryptonX (private)
async function depositToPrivate() {
  const accounts = await web3.eth.getAccounts();
  
  const tx = await bridge.deposit({
    from: accounts[0],
    amount: web3.utils.toWei('1', 'ether'),
    toPrivate: true
  });
  
  console.log('Deposited to private account:', tx.hash);
}

// Withdraw from KryptonX to Ethereum
async function withdrawToEthereum() {
  const wallet = await krtx.importWallet(privateKey);
  
  const tx = await bridge.withdraw({
    from: wallet,
    to: ethereumAddress,
    amount: 100
  });
  
  console.log('Withdrawn to Ethereum:', tx.hash);
}`,
      tags: ['web3', 'bridge', 'ethereum']
    },
    {
      id: 'int-5',
      title: 'WebSocket Real-time Updates',
      description: 'Listen to real-time blockchain events',
      difficulty: 'Intermediate',
      time: '5 min',
      language: 'TypeScript',
      code: `import { KryptonX } from '@kryptonx/sdk';

const client = new KryptonX({
  network: 'mainnet',
  websocket: true
});

// Subscribe to new blocks
client.on('block', (block) => {
  console.log('New block:', block.number);
  console.log('Transactions:', block.transactions.length);
});

// Subscribe to wallet transactions
const wallet = await client.importWallet(privateKey);

wallet.on('transaction', (tx) => {
  console.log('New transaction:', tx.hash);
  console.log('Amount:', tx.amount);
  console.log('From:', tx.from);
});

// Subscribe to balance changes
wallet.on('balance', (balance) => {
  console.log('Balance updated:', balance.total);
});

// Unsubscribe
wallet.off('transaction');`,
      tags: ['websocket', 'real-time', 'events']
    }
  ];

  const dappExamples = [
    {
      id: 'dapp-1',
      title: 'Private DEX',
      description: 'Decentralized exchange with hidden order books',
      difficulty: 'Expert',
      time: '20 min',
      language: 'TypeScript',
      code: `import { KryptonX, DEX } from '@kryptonx/sdk';

const client = new KryptonX({ network: 'mainnet' });
const wallet = await client.importWallet(privateKey);

// Initialize DEX
const dex = new DEX({
  client,
  router: '0xDEX_ROUTER_ADDRESS'
});

// Create private limit order
const order = await dex.createOrder({
  type: 'limit',
  pair: 'KRTX/USDT',
  side: 'buy',
  price: 10.5,
  amount: 100,
  privacy: 'maximum' // Hidden from order book
});

// Execute private swap
const swap = await dex.swap({
  from: 'KRTX',
  to: 'USDT',
  amount: 50,
  slippage: 0.5,
  privacy: 'maximum'
});

console.log('Swap completed:', swap.hash);
console.log('Received:', swap.received);`,
      tags: ['dex', 'defi', 'trading']
    },
    {
      id: 'dapp-2',
      title: 'Private NFT Marketplace',
      description: 'Anonymous NFT trading platform',
      difficulty: 'Expert',
      time: '25 min',
      language: 'TypeScript',
      code: `import { KryptonX, NFT } from '@kryptonx/sdk';

const client = new KryptonX({ network: 'mainnet' });
const wallet = await client.importWallet(privateKey);

// Create private NFT collection
const collection = await NFT.createCollection({
  name: 'Private Art',
  symbol: 'PART',
  privacy: {
    owner: 'hidden',
    transfers: 'private',
    metadata: 'encrypted'
  }
});

// Mint private NFT
const nft = await collection.mint({
  to: wallet.address,
  metadata: {
    name: 'Artwork #1',
    image: 'ipfs://...',
    attributes: [...]
  },
  royalty: 5 // 5% royalty
});

// List for sale (privately)
await nft.list({
  price: 100,
  currency: 'KRTX',
  visibility: 'private' // Only visible to specific addresses
});

// Buy NFT
await nft.buy({ proof: await wallet.generatePaymentProof() });`,
      tags: ['nft', 'marketplace', 'privacy']
    },
    {
      id: 'dapp-3',
      title: 'Private Lending Protocol',
      description: 'Confidential lending and borrowing',
      difficulty: 'Expert',
      time: '30 min',
      language: 'TypeScript',
      code: `import { KryptonX, Lending } from '@kryptonx/sdk';

const client = new KryptonX({ network: 'mainnet' });
const wallet = await client.importWallet(privateKey);

// Initialize lending protocol
const lending = new Lending({
  client,
  protocol: '0xLENDING_ADDRESS'
});

// Deposit collateral (private)
await lending.deposit({
  asset: 'KRTX',
  amount: 1000,
  proof: await wallet.generateBalanceProof()
});

// Borrow against collateral
const loan = await lending.borrow({
  asset: 'USDT',
  amount: 5000,
  collateral: 'KRTX',
  ltv: 0.7, // 70% loan-to-value
  privacy: 'maximum'
});

// Repay loan
await lending.repay({
  loanId: loan.id,
  amount: 5100, // Principal + interest
  proof: await wallet.generateRepaymentProof()
});

console.log('Loan repaid:', loan.id);`,
      tags: ['lending', 'defi', 'collateral']
    },
    {
      id: 'dapp-4',
      title: 'Anonymous DAO',
      description: 'Private governance and voting system',
      difficulty: 'Expert',
      time: '35 min',
      language: 'TypeScript',
      code: `import { KryptonX, DAO } from '@kryptonx/sdk';

const client = new KryptonX({ network: 'mainnet' });
const wallet = await client.importWallet(privateKey);

// Create anonymous DAO
const dao = await DAO.create({
  name: 'Private Collective',
  governance: {
    votingPeriod: 7 * 86400, // 7 days
    quorum: 0.4, // 40% quorum
    threshold: 0.6 // 60% approval
  },
  privacy: {
    members: 'hidden',
    votes: 'anonymous',
    proposals: 'public'
  }
});

// Submit proposal
const proposal = await dao.propose({
  title: 'Allocate funds for development',
  description: '...',
  actions: [{
    target: treasuryAddress,
    value: 10000,
    data: '0x...'
  }]
});

// Vote anonymously
await dao.vote({
  proposalId: proposal.id,
  support: true,
  proof: await wallet.generateMembershipProof()
});

// Execute if passed
await dao.execute(proposal.id);`,
      tags: ['dao', 'governance', 'anonymous']
    }
  ];

  const getCurrentExamples = () => {
    switch (activeCategory) {
      case 'basic': return basicExamples;
      case 'advanced': return advancedExamples;
      case 'integration': return integrationExamples;
      case 'dapps': return dappExamples;
      default: return basicExamples;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <FileCode className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">Code Examples</span>
          </div>
          
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl mb-4">
            KryptonX <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Examples</span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Real-world code examples to help you integrate KryptonX into your applications
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as ExampleCategory)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-white/20' : 'bg-slate-700'
                }`}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {getCurrentExamples().map((example) => (
            <div
              key={example.id}
              className="group bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-white text-xl mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                    {example.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{example.description}</p>
                  
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className={`px-3 py-1 rounded-full ${
                      example.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      example.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      example.difficulty === 'Advanced' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {example.difficulty}
                    </span>
                    <span className="text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {example.time}
                    </span>
                    <span className="text-gray-500">{example.language}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => handleCopy(example.code, example.id)}
                  className="flex-shrink-0 p-2 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-all"
                >
                  {copiedCode === example.id ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>

              {/* Code Block */}
              <div className="bg-slate-950/70 rounded-xl p-4 mb-4 border border-purple-500/20 overflow-x-auto">
                <pre className="text-sm font-mono text-gray-300 whitespace-pre">
                  {example.code}
                </pre>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {example.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded border border-purple-500/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 px-4 py-2 rounded-lg transition-all border border-purple-500/30">
                  <Play className="w-4 h-4" />
                  Run Example
                </button>
                <a href="https://github.com/KryptonX-Privacy/kryptonx-landing" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-slate-800/50 hover:bg-slate-800 text-gray-400 hover:text-white px-4 py-2 rounded-lg transition-all">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12 text-center">
          <Book className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          <h2 className="text-white text-3xl mb-4">Need More Help?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Check out our comprehensive documentation and join our developer community
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2 shadow-lg shadow-purple-500/30">
              Read Full Documentation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="https://github.com/KryptonX-Privacy/kryptonx-landing" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 hover:bg-slate-800 text-white px-8 py-4 rounded-xl transition-all border border-purple-500/30 inline-flex items-center gap-2">
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}