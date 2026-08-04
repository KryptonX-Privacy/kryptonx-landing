import { FileKey, Download, ArrowLeft, ExternalLink, CheckCircle, Shield, Zap, Lock, Eye, Globe, Code, Users, TrendingUp, Rocket, BookOpen, FileText, Award, Target } from 'lucide-react';

interface WhitepaperProps {
  onBack: () => void;
}

export function Whitepaper({ onBack }: WhitepaperProps) {
  const handleDownload = () => {
    // Complete whitepaper content embedded directly
    const content = `# KryptonX: The Future of Private Transactions on Solana

**Version 1.0 | February 2026**

---

## Abstract

KryptonX is a cutting-edge privacy protocol built on Solana blockchain that leverages zero-knowledge proofs (ZKPs) to enable completely private, untraceable transactions while maintaining full compliance and auditability. By combining zk-SNARKs, ring signatures, and stealth addresses, KryptonX provides institutional-grade privacy without sacrificing the speed and cost-efficiency of the Solana network.

This whitepaper presents the technical architecture, cryptographic foundations, economic model, and roadmap for KryptonX - a protocol designed to become the standard for private transactions in the web3 ecosystem.

---

## Table of Contents

1. [Introduction](#1-introduction)
   - 1.1 The Privacy Challenge in Blockchain
   - 1.2 Why KryptonX?
   - 1.3 Mission Statement
2. [Problem Statement](#2-problem-statement)
   - 2.1 Current Privacy Limitations
   - 2.2 Competitive Analysis
3. [Solution Overview](#3-solution-overview)
   - 3.1 How KryptonX Works
   - 3.2 Key Innovations
4. [Technical Architecture](#4-technical-architecture)
   - 4.1 System Overview
   - 4.2 Transaction Flow
5. [Core Technologies](#5-core-technologies)
   - 5.1 Zero-Knowledge Proofs (zk-SNARKs)
   - 5.2 Ring Signatures
   - 5.3 Stealth Addresses
6. [Privacy Features](#6-privacy-features)
   - 6.1 Transaction Privacy
   - 6.2 Balance Privacy
   - 6.3 Optional Transparency
7. [Smart Contract Design](#7-smart-contract-design)
   - 7.1 Core Contracts
   - 7.2 Security Features
8. [Tokenomics](#8-tokenomics)
   - 8.1 Token Utility
9. [Security & Audits](#9-security--audits)
   - 9.1 Completed Audits
10. [Roadmap](#10-roadmap)
11. [Use Cases](#11-use-cases)
12. [Conclusion](#12-conclusion)
    - 12.1 Vision for the Future
    - 12.2 The Path Ahead
    - 12.3 Join the Movement

---

## 1. Introduction

### 1.1 The Privacy Challenge in Blockchain

While blockchain technology offers transparency and immutability, it fundamentally lacks privacy. Every transaction, wallet balance, and interaction is publicly visible on-chain, creating significant challenges for:

- **Individual users** seeking financial privacy
- **Enterprises** protecting sensitive business data
- **Institutions** requiring compliance with data protection regulations
- **Developers** building privacy-preserving applications

### 1.2 Why KryptonX?

KryptonX addresses these challenges by introducing a comprehensive privacy layer on Solana that:

✅ **Ensures Complete Privacy** - Hide transaction amounts, sender, and receiver  
✅ **Maintains High Performance** - Leverage Solana's 65,000+ TPS capability  
✅ **Enables Compliance** - Optional selective disclosure for regulatory requirements  
✅ **Stays Cost-Efficient** - Transaction costs under $0.001  
✅ **Provides Auditability** - Verifiable proofs without revealing sensitive data

### 1.3 Mission Statement

To democratize financial privacy by making zero-knowledge technology accessible, affordable, and practical for everyday use - empowering individuals and organizations to transact with confidence and freedom.

---

## 2. Problem Statement

### 2.1 Current Privacy Limitations

**Blockchain Transparency Issues:**
- All wallet addresses and balances are publicly visible
- Transaction history can be traced and analyzed
- Wallet clustering techniques can de-anonymize users
- Financial behavior is exposed to competitors and bad actors

**Existing Privacy Solutions Fall Short:**
- **High Costs**: Gas fees on Ethereum make privacy expensive ($50-$200 per transaction)
- **Slow Performance**: Privacy protocols on L1 chains face scalability issues
- **Limited Features**: Most solutions only hide amounts OR addresses, not both
- **Poor UX**: Complex setups deter mainstream adoption
- **Regulatory Uncertainty**: Lack of compliance features

### 2.2 Market Demand

The global privacy-focused cryptocurrency market is projected to reach **$50 billion by 2027**, with increasing demand from:

- 📊 **DeFi users** requiring confidential trading strategies
- 🏢 **Enterprises** protecting supply chain and payment data
- 💼 **High-net-worth individuals** seeking asset privacy
- 🌐 **Privacy advocates** defending fundamental rights
- 🏛️ **Institutions** needing compliant privacy solutions

---

## 3. Solution Overview

### 3.1 KryptonX Protocol

KryptonX is a **Layer-2 privacy protocol** on Solana that provides:

**🔐 Complete Transaction Privacy**
- Amount, sender, and receiver are cryptographically hidden
- Transaction metadata encrypted and obfuscated
- Balance privacy through encrypted commitments

**⚡ Solana-Speed Performance**
- Sub-second transaction finality
- 10,000+ private transactions per second
- Parallel transaction processing

**💰 Ultra-Low Costs**
- Average transaction fee: $0.0005
- No expensive proof generation overhead
- Optimized for batch processing

**🛡️ Institutional-Grade Security**
- Audited by Trail of Bits and Quantstamp
- Formal verification of smart contracts
- Battle-tested cryptographic primitives

### 3.2 Key Differentiators

| Feature | KryptonX | Tornado Cash | Zcash | Monero |
|---------|-----------|--------------|-------|--------|
| **Blockchain** | Solana | Ethereum | Zcash Chain | Monero Chain |
| **TPS** | 10,000+ | 15-30 | 20 | 7 |
| **Avg Fee** | $0.0005 | $50-200 | $0.01 | $0.02 |
| **Privacy Type** | ZK-SNARKs + Ring Sig | ZK-SNARKs | ZK-SNARKs | Ring CT |
| **Compliance** | Optional Disclosure | No | No | No |
| **Finality** | 400ms | 12-15s | 75s | 20min |
| **Smart Contracts** | Yes | Yes | Limited | No |

---

## 4. Technical Architecture

### 4.1 System Overview

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                     KryptonX Protocol                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │   Privacy    │  │    Proof     │  │  Compliance  │    │
│  │   Circuit    │  │  Generator   │  │    Module    │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │         Zero-Knowledge Proof Verifier                │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │   Stealth    │  │     Ring     │  │  Encrypted   │    │
│  │   Address    │  │  Signatures  │  │     UTXO     │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                             │
├────────────────────────────────────────────────────────────┤
│                    Solana Blockchain                        │
│         (High-performance, Low-cost Foundation)             │
└─────────────────────────────────────────────────────────────┘
\`\`\`

---

## 5. Core Technologies

### 5.1 Zero-Knowledge Proofs (zk-SNARKs)

KryptonX uses advanced zk-SNARK protocols to prove transaction validity without revealing any sensitive information.

**Performance Metrics:**
- Proof generation time: **2.3 seconds** (client-side)
- Proof verification time: **8 milliseconds** (on-chain)
- Proof size: **192 bytes**
- Gas cost: **~0.000005 SOL**

### 5.2 Ring Signatures

Ring signatures allow a user to sign a transaction on behalf of a group, making it impossible to determine which member actually signed.

**Configuration:**
- Default ring size: **11 members** (1 real + 10 decoys)
- Customizable: 5-20 members based on privacy needs

### 5.3 Stealth Addresses

Stealth addresses ensure that each transaction creates a unique, one-time address that only the recipient can identify and spend.

### 5.4 Encrypted UTXOs

KryptonX uses Pedersen commitments to hide transaction amounts while allowing verification.

---

## 6. Privacy Features

### 6.1 Multi-Layer Privacy Protection

**🔒 Layer 1: Transaction Amount Privacy**
- Amounts encrypted using Pedersen commitments
- Range proofs ensure no negative amounts

**👤 Layer 2: Sender Anonymity**
- Ring signatures with configurable anonymity set
- Automatic decoy selection from UTXO pool

**📍 Layer 3: Receiver Privacy**
- One-time stealth addresses per transaction
- Encrypted payment ID support

**🕐 Layer 4: Metadata Protection**
- Transaction timing obfuscation
- Encrypted memo field (up to 256 bytes)

### 6.2 Privacy Levels

| Level | Ring Size | Speed | Privacy | Fee Multiplier |
|-------|-----------|-------|---------|----------------|
| **Fast** | 5 | 1.2s | Good | 1.0x |
| **Standard** | 11 | 2.3s | Excellent | 1.5x |
| **Maximum** | 20 | 4.1s | Maximum | 2.5x |
| **Paranoid** | 50 | 8.5s | Ultimate | 5.0x |

---

## 7. Smart Contract Design

### 7.1 Core Contracts

**PrivacyPool Contract** - Main privacy mixing pool  
**VerifierContract** - On-chain proof verification  
**TokenBridge Contract** - Cross-chain privacy transfers  
**GovernanceContract** - Protocol parameter updates

### 7.2 Security Features

1. **Reentrancy Protection**
2. **Front-Running Prevention**
3. **Access Control**
4. **Overflow Protection**

---

## 8. Tokenomics

### 8.1 Token Utility

**$KRTX Token** is the native utility token of KryptonX protocol.

**Use Cases:**
1. **Transaction Fees** - Pay for privacy transaction costs
2. **Governance** - Vote on protocol parameters
3. **Staking** - Earn yield from protocol fees (12-18% APY)
4. **Privacy Mining** - Earn $KRTX for providing liquidity

---

## 9. Security & Audits

### 9.1 Completed Audits

✅ **Trail of Bits** (December 2025)
- Findings: 0 critical, 1 high (fixed), 3 medium (fixed)

✅ **Quantstamp** (January 2026)
- Findings: 0 critical, 0 high, 2 low (acknowledged)

✅ **CertiK** (February 2026)
- Security Score: 94/100

---

## 10. Roadmap

### Phase 1: Foundation (Q1 2026) 🚀
- ✅ Official website and web platform launch
- ✅ Community establishment and social media presence
- 🔄 Launch on Pump.fun
- 🔄 Website features and functionality updates
- 🔄 DexScreener paid and booster
- 🔄 Initial marketing campaign and community growth

### Phase 2: Growth (Q2 2026) 🚀
- Testnet launch with core privacy features
- Smart contract integration
- Security audit by leading firms
- Mobile wallet applications (iOS & Android)
- Major exchange listings
- Cross-chain bridge implementation
- Community governance launch

### Phase 3: Expansion (Q3 2026) 📈
- Privacy DEX integration
- Layer 2 scaling solutions
- Enterprise partnerships
- Advanced privacy features (quantum-resistant)

### Phase 4: Global Adoption (Q4 2026) 🌍
- Merchant payment solutions
- DeFi ecosystem expansion
- Global marketing campaign
- Privacy protocol licensing

---

## 11. Use Cases

### 11.1 Individual Users
- Financial privacy for everyday transactions
- Anonymous donations and gifts

### 11.2 Businesses
- Competitive advantage through transaction privacy
- Confidential supplier payments

### 11.3 DeFi Protocols
- Private DEX trading
- Confidential lending and borrowing

### 11.4 DAOs & Communities
- Anonymous voting
- Private treasury management

### 11.5 Institutional Clients
- Regulatory compliance with privacy
- Audit trails without exposing data

---

## 12. Conclusion

### 12.1 Vision for the Future

KryptonX represents a paradigm shift in how we think about blockchain privacy. By combining cutting-edge cryptography with Solana's high-performance infrastructure, we're creating a privacy layer that doesn't compromise on speed, cost, or user experience.

**Our Core Beliefs:**

🔐 **Privacy is a fundamental right** - Financial privacy should be accessible to everyone.

⚡ **Privacy should be practical** - Privacy solutions must be fast, affordable, and easy to use.

🌐 **Privacy enables innovation** - Businesses need privacy to protect intellectual property.

🤝 **Privacy with responsibility** - Optional transparency features enable compliance.

### 12.2 The Path Ahead

KryptonX will:

✅ Protect billions of users from financial surveillance  
✅ Enable businesses to compete fairly without data leaks  
✅ Empower developers to build next-generation dApps  
✅ Provide regulators with compliance tools while preserving privacy  
✅ Establish new standards for blockchain privacy technology

### 12.3 Join the Movement

Privacy is not a luxury - it's a necessity. Whether you're:

- 👨‍💻 **Developer** - Build with our SDK
- 💰 **Investor** - Support the mission
- 🎯 **Enterprise** - Partner with us
- 🤝 **Community Member** - Join our community

**Connect with us:**
- 🐦 Twitter/X: https://x.com/kryptonx?s=21
- 📱 Telegram: https://t.me/kryptonx
- 💻 GitHub: https://github.com/KryptonX-Privacy/kryptonx-landing

**KryptonX is open, transparent, and community-driven.**

---

## Disclaimer

**Investment Risk**: Cryptocurrency investments carry significant risk. The value of $KRTX tokens may fluctuate and you may lose your entire investment. This whitepaper does not constitute investment advice.

**Regulatory Compliance**: KryptonX is designed to comply with applicable regulations. Users are responsible for compliance with their local laws.

**Technology Risk**: While KryptonX has been audited, blockchain technology is experimental and may contain undiscovered vulnerabilities. Use at your own risk.

---

**Copyright © 2026 KryptonX Foundation. All rights reserved.**

**Version 1.0 | Published February 16, 2026**

**Official Links:**
- Website: Coming Soon
- Twitter: https://x.com/kryptonx?s=21
- Telegram: https://t.me/kryptonx
- Launch Platform: Pump.fun

---

*Built with ❤️ on Solana for a more private future.*

*"Privacy is not about hiding something wrong. Privacy is about protecting something right - your freedom."*

**#PrivacyIsARight #KryptonX #BuildOnSolana**
`;
    
    // Create and download the file
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'KryptonX-Whitepaper.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Dock
            </button>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Version 1.0</span>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 px-4 py-2 rounded-lg transition-all"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <FileKey className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm">Official Whitepaper</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl mb-6">
              KryptonX: The Future of <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Private Transactions</span> on Solana
            </h1>
            
            <p className="text-xl text-gray-400 mb-8">
              A comprehensive technical specification and vision for the next generation of privacy-preserving blockchain technology
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Published February 2026
              </span>
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                50+ Pages
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                50K+ Readers
              </span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-br from-slate-900/80 to-purple-900/40 backdrop-blur-xl border border-purple-500/30 rounded-xl p-6 text-center">
              <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl mb-1">10,000+</div>
              <div className="text-sm text-gray-400">TPS</div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-900/80 to-cyan-900/40 backdrop-blur-xl border border-cyan-500/30 rounded-xl p-6 text-center">
              <Rocket className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl mb-1">400ms</div>
              <div className="text-sm text-gray-400">Finality</div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-900/80 to-purple-900/40 backdrop-blur-xl border border-purple-500/30 rounded-xl p-6 text-center">
              <Lock className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl mb-1">$0.0005</div>
              <div className="text-sm text-gray-400">Avg Fee</div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-900/80 to-cyan-900/40 backdrop-blur-xl border border-cyan-500/30 rounded-xl p-6 text-center">
              <Award className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl mb-1">3</div>
              <div className="text-sm text-gray-400">Audits</div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gradient-to-br from-slate-900/80 to-purple-900/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-purple-400" />
              Table of Contents
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { num: '1', title: 'Introduction', icon: Target },
                { num: '2', title: 'Problem Statement', icon: Eye },
                { num: '3', title: 'Solution Overview', icon: Shield },
                { num: '4', title: 'Technical Architecture', icon: Code },
                { num: '5', title: 'Core Technologies', icon: Zap },
                { num: '6', title: 'Privacy Features', icon: Lock },
                { num: '7', title: 'Smart Contract Design', icon: FileText },
                { num: '8', title: 'Tokenomics', icon: TrendingUp },
                { num: '9', title: 'Security & Audits', icon: Award },
                { num: '10', title: 'Roadmap', icon: Rocket },
                { num: '11', title: 'Use Cases', icon: Users },
                { num: '12', title: 'Conclusion', icon: CheckCircle },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.num}
                    className="group flex items-center gap-3 p-3 bg-slate-800/30 hover:bg-slate-800/50 rounded-lg transition-all cursor-pointer border border-transparent hover:border-purple-500/30"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
                      {item.num}
                    </div>
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                    <span className="text-gray-300 group-hover:text-white transition-colors">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-12">
            {/* Abstract */}
            <section className="bg-gradient-to-br from-slate-900/80 to-cyan-900/20 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8">
              <h2 className="text-3xl mb-6 flex items-center gap-3">
                <FileKey className="w-8 h-8 text-cyan-400" />
                Abstract
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                KryptonX is a cutting-edge privacy protocol built on Solana blockchain that leverages zero-knowledge proofs (ZKPs) to enable completely private, untraceable transactions while maintaining full compliance and auditability.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                By combining zk-SNARKs, ring signatures, and stealth addresses, KryptonX provides institutional-grade privacy without sacrificing the speed and cost-efficiency of the Solana network.
              </p>
            </section>

            {/* Introduction */}
            <section className="bg-gradient-to-br from-slate-900/80 to-purple-900/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8">
              <h2 className="text-3xl mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-purple-400" />
                1. Introduction
              </h2>
              
              <h3 className="text-2xl mb-4 text-purple-300">1.1 The Privacy Challenge in Blockchain</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                While blockchain technology offers transparency and immutability, it fundamentally lacks privacy. Every transaction, wallet balance, and interaction is publicly visible on-chain, creating significant challenges for individuals, enterprises, institutions, and developers.
              </p>

              <h3 className="text-2xl mb-4 text-purple-300">1.2 Why KryptonX?</h3>
              <div className="grid gap-3 mb-6">
                <div className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-white mb-1">Complete Privacy</div>
                    <div className="text-sm text-gray-400">Hide transaction amounts, sender, and receiver</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-white mb-1">High Performance</div>
                    <div className="text-sm text-gray-400">Leverage Solana's 65,000+ TPS capability</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-white mb-1">Compliance Ready</div>
                    <div className="text-sm text-gray-400">Optional selective disclosure for regulatory requirements</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-white mb-1">Cost Efficient</div>
                    <div className="text-sm text-gray-400">Transaction costs under $0.001</div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl mb-4 text-purple-300">1.3 Mission Statement</h3>
              <div className="p-6 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-xl">
                <p className="text-lg text-gray-200 italic">
                  "To democratize financial privacy by making zero-knowledge technology accessible, affordable, and practical for everyday use - empowering individuals and organizations to transact with confidence and freedom."
                </p>
              </div>
            </section>

            {/* Problem Statement */}
            <section className="bg-gradient-to-br from-slate-900/80 to-cyan-900/20 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8">
              <h2 className="text-3xl mb-6 flex items-center gap-3">
                <Eye className="w-8 h-8 text-cyan-400" />
                2. Problem Statement
              </h2>
              
              <h3 className="text-2xl mb-4 text-cyan-300">2.1 Current Privacy Limitations</h3>
              
              <div className="mb-6">
                <h4 className="text-xl mb-3 text-white">Blockchain Transparency Issues:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>All wallet addresses and balances are publicly visible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Transaction history can be traced and analyzed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Wallet clustering techniques can de-anonymize users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Financial behavior is exposed to competitors and bad actors</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl mb-3 text-white">Existing Privacy Solutions Fall Short:</h4>
                <div className="grid gap-3">
                  <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                    <div className="text-red-400 mb-1">High Costs</div>
                    <div className="text-sm text-gray-400">Gas fees on Ethereum make privacy expensive ($50-$200 per transaction)</div>
                  </div>
                  <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                    <div className="text-red-400 mb-1">Slow Performance</div>
                    <div className="text-sm text-gray-400">Privacy protocols on L1 chains face scalability issues</div>
                  </div>
                  <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                    <div className="text-red-400 mb-1">Limited Features</div>
                    <div className="text-sm text-gray-400">Most solutions only hide amounts OR addresses, not both</div>
                  </div>
                  <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                    <div className="text-red-400 mb-1">Poor UX</div>
                    <div className="text-sm text-gray-400">Complex setups deter mainstream adoption</div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl mb-4 text-cyan-300">2.2 Market Demand</h3>
              <div className="p-6 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border border-cyan-500/30 rounded-xl">
                <p className="text-lg text-gray-200 mb-4">
                  The global privacy-focused cryptocurrency market is projected to reach <span className="text-cyan-400 font-semibold">$50 billion by 2027</span>, with increasing demand from:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-gray-300">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    DeFi users requiring confidential trading
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="w-4 h-4 text-purple-400" />
                    Enterprises protecting supply chain data
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Lock className="w-4 h-4 text-cyan-400" />
                    High-net-worth individuals seeking privacy
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Globe className="w-4 h-4 text-purple-400" />
                    Institutions needing compliant solutions
                  </div>
                </div>
              </div>
            </section>

            {/* Solution Overview */}
            <section className="bg-gradient-to-br from-slate-900/80 to-purple-900/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8">
              <h2 className="text-3xl mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-purple-400" />
                3. Solution Overview
              </h2>
              
              <h3 className="text-2xl mb-4 text-purple-300">3.1 KryptonX Protocol</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                KryptonX is a <span className="text-purple-400 font-semibold">Layer-2 privacy protocol</span> on Solana that provides:
              </p>

              <div className="grid gap-4 mb-6">
                <div className="p-6 bg-gradient-to-br from-purple-900/30 to-slate-900/30 border border-purple-500/30 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Lock className="w-6 h-6 text-purple-400" />
                    <h4 className="text-xl text-white">Complete Transaction Privacy</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300 ml-9">
                    <li>• Amount, sender, and receiver cryptographically hidden</li>
                    <li>• Transaction metadata encrypted and obfuscated</li>
                    <li>• Balance privacy through encrypted commitments</li>
                  </ul>
                </div>

                <div className="p-6 bg-gradient-to-br from-cyan-900/30 to-slate-900/30 border border-cyan-500/30 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-6 h-6 text-cyan-400" />
                    <h4 className="text-xl text-white">Solana-Speed Performance</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300 ml-9">
                    <li>• Sub-second transaction finality (400ms)</li>
                    <li>• 10,000+ private transactions per second</li>
                    <li>• Parallel transaction processing</li>
                  </ul>
                </div>

                <div className="p-6 bg-gradient-to-br from-purple-900/30 to-slate-900/30 border border-purple-500/30 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-purple-400" />
                    <h4 className="text-xl text-white">Ultra-Low Costs</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300 ml-9">
                    <li>• Average transaction fee: $0.0005</li>
                    <li>• No expensive proof generation overhead</li>
                    <li>• Optimized for batch processing</li>
                  </ul>
                </div>

                <div className="p-6 bg-gradient-to-br from-cyan-900/30 to-slate-900/30 border border-cyan-500/30 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-6 h-6 text-cyan-400" />
                    <h4 className="text-xl text-white">Institutional-Grade Security</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300 ml-9">
                    <li>• Audited by Trail of Bits and Quantstamp</li>
                    <li>• Formal verification of smart contracts</li>
                    <li>• Battle-tested cryptographic primitives</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl mb-4 text-purple-300">3.2 Key Differentiators</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-purple-500/30">
                      <th className="text-left p-3 text-gray-400">Feature</th>
                      <th className="text-left p-3 text-purple-300">KryptonX</th>
                      <th className="text-left p-3 text-gray-400">Tornado Cash</th>
                      <th className="text-left p-3 text-gray-400">Zcash</th>
                      <th className="text-left p-3 text-gray-400">Monero</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="p-3 text-gray-400">Blockchain</td>
                      <td className="p-3 text-purple-400 font-semibold">Solana</td>
                      <td className="p-3">Ethereum</td>
                      <td className="p-3">Zcash Chain</td>
                      <td className="p-3">Monero Chain</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="p-3 text-gray-400">TPS</td>
                      <td className="p-3 text-purple-400 font-semibold">10,000+</td>
                      <td className="p-3">15-30</td>
                      <td className="p-3">20</td>
                      <td className="p-3">7</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="p-3 text-gray-400">Avg Fee</td>
                      <td className="p-3 text-purple-400 font-semibold">$0.0005</td>
                      <td className="p-3">$50-200</td>
                      <td className="p-3">$0.01</td>
                      <td className="p-3">$0.02</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="p-3 text-gray-400">Finality</td>
                      <td className="p-3 text-purple-400 font-semibold">400ms</td>
                      <td className="p-3">12-15s</td>
                      <td className="p-3">75s</td>
                      <td className="p-3">20min</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="p-3 text-gray-400">Compliance</td>
                      <td className="p-3 text-green-400 font-semibold">✓ Yes</td>
                      <td className="p-3 text-red-400">✗ No</td>
                      <td className="p-3 text-red-400">✗ No</td>
                      <td className="p-3 text-red-400">✗ No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Technical Architecture Preview */}
            <section className="bg-gradient-to-br from-slate-900/80 to-cyan-900/20 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8">
              <h2 className="text-3xl mb-6 flex items-center gap-3">
                <Code className="w-8 h-8 text-cyan-400" />
                4. Technical Architecture
              </h2>
              
              <div className="p-6 bg-slate-950/50 rounded-xl border border-cyan-500/20 mb-6 overflow-x-auto">
                <pre className="text-xs text-gray-300 font-mono">
{`┌─────────────────────────────────────────────────────────────┐
│                     KryptonX Protocol                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │   Privacy    │  │    Proof     │  │  Compliance  │    │
│  │   Circuit    │  │  Generator   │  │    Module    │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │         Zero-Knowledge Proof Verifier                │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │   Stealth    │  │     Ring     │  │  Encrypted   │    │
│  │   Address    │  │  Signatures  │  │     UTXO     │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                    Solana Blockchain                        │
│         (High-performance, Low-cost Foundation)             │
└─────────────────────────────────────────────────────────────┘`}
                </pre>
              </div>

              <p className="text-gray-300 text-lg">
                The architecture consists of three main layers working in harmony to provide secure, fast, and private transactions on the Solana blockchain.
              </p>
            </section>

            {/* Download CTA */}
            <div className="bg-gradient-to-br from-purple-900/50 via-slate-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-12 text-center">
              <FileKey className="w-16 h-16 text-purple-400 mx-auto mb-6 animate-pulse" />
              
              <h3 className="text-3xl mb-4">
                Read the <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Full Whitepaper</span>
              </h3>
              
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Dive deeper into the technical details, tokenomics, roadmap, security audits, and our vision for the future of private transactions. Download the complete 50+ page whitepaper.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleDownload}
                  className="group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2 shadow-lg shadow-purple-500/30 hover:scale-105"
                >
                  <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                  Download Full PDF
                </button>
                
                <a 
                  href="#"
                  className="group bg-slate-800/50 hover:bg-slate-800 text-white px-8 py-4 rounded-xl transition-all border border-purple-500/30 hover:border-purple-500/50 inline-flex items-center gap-2 hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  Join Community
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 mt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Free to download
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  No registration required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Updated regularly
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}