import { useState } from 'react';
import { ChevronRight, Home, BookOpen, Map, Shield, Lock, Wallet, Cpu, FileKey, Code, Zap, Users, Network, Database, Server, HelpCircle, CheckCircle, ArrowRight, Eye, Key, Globe } from 'lucide-react';

type Section = 
  | 'introduction'
  | 'architecture'
  | 'what-is-zk'
  | 'privacy-model'
  | 'wallet-setup'
  | 'technology'
  | 'zksnark'
  | 'ring-signatures'
  | 'smart-contracts'
  | 'private-transactions'
  | 'stealth-addresses'
  | 'sdk'
  | 'api-reference'
  | 'faq';

export function Documentation() {
  const [activeSection, setActiveSection] = useState<Section>('introduction');

  const menuItems = [
    {
      category: 'HOME',
      items: [
        { id: 'introduction', label: 'Introduction', icon: BookOpen },
        { id: 'architecture', label: 'Architecture Overview', icon: Map }
      ]
    },
    {
      category: 'GETTING STARTED',
      items: [
        { id: 'what-is-zk', label: 'What is KryptonX?', icon: Shield },
        { id: 'privacy-model', label: 'Privacy & Security Model', icon: Lock },
        { id: 'wallet-setup', label: 'Wallet Setup', icon: Wallet },
        { id: 'technology', label: 'Technology Stack', icon: Cpu }
      ]
    },
    {
      category: 'CORE CONCEPTS',
      items: [
        { id: 'zksnark', label: 'ZK-SNARK Proof System', icon: FileKey },
        { id: 'ring-signatures', label: 'Ring Signatures', icon: Key },
        { id: 'smart-contracts', label: 'Smart Contracts', icon: Code }
      ]
    },
    {
      category: 'PRODUCTS & FEATURES',
      items: [
        { id: 'private-transactions', label: 'Private Transactions', icon: Zap },
        { id: 'stealth-addresses', label: 'Stealth Addresses', icon: Eye }
      ]
    },
    {
      category: 'SDK & INTEGRATION',
      items: [
        { id: 'sdk', label: 'SDK Documentation', icon: Database },
        { id: 'api-reference', label: 'API Reference', icon: Server }
      ]
    },
    {
      category: 'SUPPORT',
      items: [
        { id: 'faq', label: 'FAQ', icon: HelpCircle }
      ]
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'introduction':
        return (
          <div>
            <h1 className="text-white text-4xl sm:text-5xl mb-4">KryptonX Documentation</h1>
            <p className="text-gray-400 text-lg mb-12">
              Privacy-first cryptocurrency powered by Zero-Knowledge proofs and advanced cryptographic techniques
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/30 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all hover:scale-105">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-white mb-2">ZK Proofs</h3>
                <p className="text-gray-400 text-sm">Zero-knowledge cryptography</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/30 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all hover:scale-105">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-white mb-2">Fast</h3>
                <p className="text-gray-400 text-sm">2s block time</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/30 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all hover:scale-105">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-white mb-2">Secure</h3>
                <p className="text-gray-400 text-sm">Military-grade encryption</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/30 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all hover:scale-105">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-white mb-2">Decentralized</h3>
                <p className="text-gray-400 text-sm">Trustless network</p>
              </div>
            </div>

            {/* What is KryptonX */}
            <div className="mb-12">
              <h2 className="text-white text-3xl mb-6">What is KryptonX?</h2>
              <p className="text-gray-400 text-lg mb-4">
                KryptonX is a next-generation privacy cryptocurrency that combines Zero-Knowledge proof technology with 
                high-performance blockchain infrastructure to create a secure, private, and scalable transaction ecosystem.
              </p>
              <p className="text-gray-400 text-lg">
                Our platform enables users to authenticate, transact, and communicate without exposing sensitive information, 
                leveraging cutting-edge cryptographic techniques to ensure maximum privacy and security.
              </p>
            </div>

            {/* Core Features */}
            <div>
              <h2 className="text-white text-3xl mb-6">Core Features</h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-xl mb-2">🔐 Zero-Knowledge Authentication</h3>
                      <p className="text-gray-400">
                        Authenticate without revealing your password or secret key. Our ZK-proof system ensures that only you can 
                        prove ownership of your account without exposing credentials to anyone, including our servers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-xl mb-2">⚡ Solana Integration</h3>
                      <p className="text-gray-400">
                        Built on Solana's high-performance infrastructure, delivering lightning-fast transactions with minimal fees 
                        while maintaining complete privacy through our advanced cryptographic layer.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-xl mb-2">👁️ Stealth Addresses</h3>
                      <p className="text-gray-400">
                        Generate unique, one-time addresses for every transaction, making it impossible to link payments or 
                        track transaction history across the blockchain.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Key className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-xl mb-2">🔑 Ring Signatures</h3>
                      <p className="text-gray-400">
                        Mix your transaction with others in a cryptographic ring, making it mathematically impossible to determine 
                        the true sender while maintaining transaction validity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'architecture':
        return (
          <div>
            <h1 className="text-white text-4xl sm:text-5xl mb-4">Architecture Overview</h1>
            <p className="text-gray-400 text-lg mb-12">
              Understanding the technical architecture behind KryptonX
            </p>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 border border-purple-500/30 rounded-2xl p-8">
                <h2 className="text-white text-2xl mb-6 flex items-center gap-3">
                  <Network className="w-6 h-6 text-purple-400" />
                  System Architecture
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white text-xl mb-3">Layer 1: Blockchain Core</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>Proof of Stake consensus mechanism for energy efficiency and security</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>2-second block time with instant finality</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>Sharding technology for parallel transaction processing</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white text-xl mb-3">Layer 2: Privacy Layer</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>ZK-SNARK implementation for transaction privacy</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>Ring signature mixing for sender anonymity</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>Stealth address generation for recipient privacy</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white text-xl mb-3">Layer 3: Application Layer</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>Smart contract platform for dApps</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>SDK and API for easy integration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>Multi-platform wallet support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-slate-800/50 to-cyan-900/20 border border-cyan-500/30 rounded-2xl p-6">
                  <Database className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-white text-xl mb-3">Data Storage</h3>
                  <p className="text-gray-400">
                    Distributed ledger with encrypted transaction data. Only transaction validity is public, 
                    while amounts and addresses remain private.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 border border-purple-500/30 rounded-2xl p-6">
                  <Server className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-white text-xl mb-3">Network Protocol</h3>
                  <p className="text-gray-400">
                    Peer-to-peer network with built-in Tor integration for IP address anonymity and 
                    geographic location privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'what-is-zk':
        return (
          <div>
            <h1 className="text-white text-4xl sm:text-5xl mb-4">What is KryptonX?</h1>
            <p className="text-gray-400 text-lg mb-12">
              Understanding Zero-Knowledge proofs and privacy technology
            </p>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 border border-purple-500/30 rounded-2xl p-8">
                <h2 className="text-white text-2xl mb-6">What are Zero-Knowledge Proofs?</h2>
                <p className="text-gray-400 mb-4">
                  Zero-Knowledge proofs (ZKPs) are cryptographic methods that allow one party (the prover) to prove to another party 
                  (the verifier) that a statement is true, without revealing any information beyond the validity of the statement itself.
                </p>
                <p className="text-gray-400">
                  In the context of cryptocurrency, this means you can prove you have the right to spend funds or that a transaction 
                  is valid, without revealing your identity, balance, or transaction details.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 border border-purple-500/30 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-white text-xl mb-3">Completeness</h3>
                  <p className="text-gray-400 text-sm">
                    If the statement is true, an honest verifier will be convinced by an honest prover
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/50 to-cyan-900/20 border border-cyan-500/30 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Lock className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white text-xl mb-3">Soundness</h3>
                  <p className="text-gray-400 text-sm">
                    If the statement is false, no cheating prover can convince an honest verifier
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 border border-purple-500/30 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-white text-xl mb-3">Zero-Knowledge</h3>
                  <p className="text-gray-400 text-sm">
                    If the statement is true, the verifier learns nothing other than this fact
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-cyan-900/20 border border-cyan-500/30 rounded-2xl p-8">
                <h2 className="text-white text-2xl mb-6">How KryptonX Uses ZK Proofs</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-cyan-400">1</span>
                    </div>
                    <div>
                      <h3 className="text-white mb-2">Transaction Privacy</h3>
                      <p className="text-gray-400">
                        Prove transaction validity without revealing sender, receiver, or amount
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-cyan-400">2</span>
                    </div>
                    <div>
                      <h3 className="text-white mb-2">Identity Protection</h3>
                      <p className="text-gray-400">
                        Authenticate ownership without exposing private keys or credentials
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-cyan-400">3</span>
                    </div>
                    <div>
                      <h3 className="text-white mb-2">Balance Confidentiality</h3>
                      <p className="text-gray-400">
                        Keep your balance private while proving sufficient funds for transactions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'sdk':
        return (
          <div>
            <h1 className="text-white text-4xl sm:text-5xl mb-4">SDK Documentation</h1>
            <p className="text-gray-400 text-lg mb-12">
              Complete guide to integrating KryptonX into your applications
            </p>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 border border-purple-500/30 rounded-2xl p-8">
                <h2 className="text-white text-2xl mb-6">Installation</h2>
                <div className="bg-slate-950/70 rounded-xl p-4 border border-purple-500/20">
                  <pre className="text-cyan-300 text-sm font-mono">
npm install @kryptonx/sdk
                  </pre>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-cyan-900/20 border border-cyan-500/30 rounded-2xl p-8">
                <h2 className="text-white text-2xl mb-6">Quick Start</h2>
                <div className="bg-slate-950/70 rounded-xl p-4 border border-cyan-500/20 overflow-x-auto">
                  <pre className="text-sm font-mono">
<span className="text-pink-400">import</span> <span className="text-white">{'{'}</span> <span className="text-cyan-300">KryptonX</span> <span className="text-white">{'}'}</span> <span className="text-pink-400">from</span> <span className="text-green-300">'@kryptonx/sdk'</span><span className="text-white">;</span>

<span className="text-gray-500">// Initialize client</span>
<span className="text-pink-400">const</span> <span className="text-white">client</span> <span className="text-pink-400">=</span> <span className="text-pink-400">new</span> <span className="text-yellow-300">KryptonX</span><span className="text-white">(</span><span className="text-white">{'{'}</span>
  <span className="text-cyan-300">network</span><span className="text-white">:</span> <span className="text-green-300">'mainnet'</span><span className="text-white">,</span>
  <span className="text-cyan-300">apiKey</span><span className="text-white">:</span> <span className="text-green-300">'your_api_key'</span>
<span className="text-white">{'}'}</span><span className="text-white">)</span><span className="text-white">;</span>

<span className="text-gray-500">// Create wallet</span>
<span className="text-pink-400">const</span> <span className="text-white">wallet</span> <span className="text-pink-400">=</span> <span className="text-pink-400">await</span> <span className="text-white">client</span><span className="text-white">.</span><span className="text-yellow-300">createWallet</span><span className="text-white">()</span><span className="text-white">;</span>

<span className="text-gray-500">// Send private transaction</span>
<span className="text-pink-400">const</span> <span className="text-white">tx</span> <span className="text-pink-400">=</span> <span className="text-pink-400">await</span> <span className="text-white">wallet</span><span className="text-white">.</span><span className="text-yellow-300">send</span><span className="text-white">(</span><span className="text-white">{'{'}</span>
  <span className="text-cyan-300">to</span><span className="text-white">:</span> <span className="text-green-300">'krtx5h...3k2m'</span><span className="text-white">,</span>
  <span className="text-cyan-300">amount</span><span className="text-white">:</span> <span className="text-orange-300">100</span><span className="text-white">,</span>
  <span className="text-cyan-300">privacy</span><span className="text-white">:</span> <span className="text-green-300">'maximum'</span>
<span className="text-white">{'}'}</span><span className="text-white">)</span><span className="text-white">;</span>
                  </pre>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 border border-purple-500/30 rounded-2xl p-6">
                  <Code className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-white text-xl mb-3">TypeScript Support</h3>
                  <p className="text-gray-400">
                    Full TypeScript definitions included for better development experience
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/50 to-cyan-900/20 border border-cyan-500/30 rounded-2xl p-6">
                  <Shield className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-white text-xl mb-3">Secure by Default</h3>
                  <p className="text-gray-400">
                    Built-in security best practices and automatic privacy features
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'faq':
        return (
          <div>
            <h1 className="text-white text-4xl sm:text-5xl mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-400 text-lg mb-12">
              Common questions about KryptonX
            </p>

            <div className="space-y-4">
              {[
                {
                  q: "Is KryptonX truly anonymous?",
                  a: "Yes, KryptonX uses advanced cryptographic techniques including ZK-SNARKs, ring signatures, and stealth addresses to ensure complete transaction privacy and anonymity."
                },
                {
                  q: "How fast are transactions?",
                  a: "KryptonX has a 2-second block time with instant finality, allowing for quick confirmations while maintaining full privacy."
                },
                {
                  q: "What are the transaction fees?",
                  a: "Average transaction fees are around $0.001, making KryptonX one of the most cost-effective privacy solutions available."
                },
                {
                  q: "Can I integrate KryptonX into my application?",
                  a: "Yes! We provide comprehensive SDKs for JavaScript/TypeScript, Python, and other languages. Check our SDK documentation for more details."
                },
                {
                  q: "Is the code open source?",
                  a: "Yes, KryptonX is fully open source. You can review our code, contribute, and verify the security measures yourself on our GitHub repository."
                },
                {
                  q: "How do I get started?",
                  a: "Download our wallet from the Dock page, or integrate our SDK into your application. Full documentation is available in the Getting Started section."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/50 transition-all"
                >
                  <h3 className="text-white text-lg mb-3 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 ml-8">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 border border-purple-500/30 rounded-2xl p-8">
            <h2 className="text-white text-2xl mb-4">{activeSection}</h2>
            <p className="text-gray-400">Content for this section is being developed.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Sidebar */}
      <div className="w-64 bg-slate-950/80 backdrop-blur-xl border-r border-purple-500/20 overflow-y-auto fixed h-full">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">N</span>
            </div>
            <span className="text-white">KryptonX Docs</span>
          </div>

          <div className="space-y-6">
            {menuItems.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-3 px-3">
                  {section.category}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id as Section)}
                        className={`w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg transition-all ${
                          isActive
                            ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                            : 'text-gray-400 hover:text-white hover:bg-slate-800/50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4" />
                          <span className="text-sm">{item.label}</span>
                        </div>
                        {isActive && <ChevronRight className="w-4 h-4" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8 lg:p-12">
        <div className="max-w-5xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}