import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { 
  Shield, Lock, Eye, EyeOff, Send, Download, ArrowUpRight, 
  ArrowDownLeft, Bell, Home as HomeIcon,
  TrendingUp, Clock, Globe, 
  ShieldCheck, Settings, Activity, Zap, QrCode, Copy,
  ChevronDown, ChevronRight, X, Check, AlertCircle,
  Wallet, CreditCard, BarChart3, Users, FileText, History,
  Search, Star, Compass, Image, RefreshCw, ExternalLink,
  ChevronLeft, Wifi, Smartphone, Key, Database, Link,
  DollarSign, PieChart, TrendingDown, Layers, Package,
  Radio, Sparkles, Award, Target, Flame, Coins
} from 'lucide-react';
import { KryptonXLogo } from './KryptonXLogo';

interface PhoneAppContentProps {
  balanceVisible: boolean;
  setBalanceVisible: (visible: boolean) => void;
  privacyMode: 'public' | 'private' | 'maximum';
  setPrivacyMode: (mode: 'public' | 'private' | 'maximum') => void;
  onHomePress: () => void;
  currentTime: string;
}

export function PhoneAppContent({
  balanceVisible,
  setBalanceVisible,
  privacyMode,
  setPrivacyMode,
  onHomePress,
  currentTime
}: PhoneAppContentProps) {
  const [activeTab, setActiveTab] = useState<'wallet' | 'browser' | 'nft' | 'settings'>('wallet');
  const [walletSubTab, setWalletSubTab] = useState<'overview' | 'swap' | 'stake' | 'history'>('overview');
  const [selectedToken, setSelectedToken] = useState<string | null>(null);
  const [showSendModal, setShowSendModal] = useState(false);
  const [showReceiveModal, setShowReceiveModal] = useState(false);
  const [showTokenDetail, setShowTokenDetail] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [browserUrl, setBrowserUrl] = useState('');
  const [activeDApp, setActiveDApp] = useState<string | null>(null);
  const [favoritesDApps, setFavoritesDApps] = useState<string[]>(['uniswap', 'raydium']);
  const [selectedNFT, setSelectedNFT] = useState<any>(null);
  
  // Privacy Features State
  const [privacyFeatures, setPrivacyFeatures] = useState([
    { id: 1, icon: ShieldCheck, label: 'Stealth Transactions', desc: 'Hide transaction details', status: true },
    { id: 2, icon: Lock, label: 'Zero-Knowledge Proofs', desc: 'Cryptographic privacy', status: true },
    { id: 3, icon: Eye, label: 'Address Obfuscation', desc: 'Anonymous addresses', status: true },
    { id: 4, icon: Globe, label: 'Decentralized Mixing', desc: 'Enhanced anonymity', status: false },
  ]);

  // Token Portfolio
  const [tokens] = useState([
    { 
      symbol: 'KRTX', 
      name: 'KryptonX', 
      balance: '2,847.3', 
      usd: '$11,089.42', 
      change: '+24.5%', 
      positive: true,
      price: '$3.89',
      icon: '🔒',
      chartData: [3.2, 3.4, 3.3, 3.6, 3.8, 3.7, 3.9]
    },
    { 
      symbol: 'SOL', 
      name: 'Solana', 
      balance: '12.5', 
      usd: '$1,487.50', 
      change: '+8.3%', 
      positive: true,
      price: '$119.00',
      icon: '◎',
      chartData: [115, 117, 116, 118, 120, 119, 119]
    },
    { 
      symbol: 'USDC', 
      name: 'USD Coin', 
      balance: '270.6', 
      usd: '$270.60', 
      change: '0.0%', 
      positive: true,
      price: '$1.00',
      icon: '💵',
      chartData: [1, 1, 1, 1, 1, 1, 1]
    },
    { 
      symbol: 'RAY', 
      name: 'Raydium', 
      balance: '45.8', 
      usd: '$87.04', 
      change: '+12.7%', 
      positive: true,
      price: '$1.90',
      icon: '⚡',
      chartData: [1.6, 1.7, 1.8, 1.85, 1.9, 1.88, 1.9]
    },
  ]);

  // DApps Database
  const dApps = [
    { 
      id: 'raydium', 
      name: 'Raydium', 
      category: 'DEX', 
      icon: '⚡', 
      desc: 'Automated Market Maker',
      url: 'raydium.io',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      id: 'uniswap', 
      name: 'Uniswap', 
      category: 'DEX', 
      icon: '🦄', 
      desc: 'Decentralized Exchange',
      url: 'app.uniswap.org',
      color: 'from-pink-500 to-rose-500'
    },
    { 
      id: 'magic-eden', 
      name: 'Magic Eden', 
      category: 'NFT', 
      icon: '🎨', 
      desc: 'NFT Marketplace',
      url: 'magiceden.io',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'jupiter', 
      name: 'Jupiter', 
      category: 'Aggregator', 
      icon: '🪐', 
      desc: 'Swap Aggregator',
      url: 'jup.ag',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      id: 'marinade', 
      name: 'Marinade', 
      category: 'Staking', 
      icon: '🌊', 
      desc: 'Liquid Staking',
      url: 'marinade.finance',
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      id: 'stepn', 
      name: 'STEPN', 
      category: 'GameFi', 
      icon: '👟', 
      desc: 'Move to Earn',
      url: 'stepn.com',
      color: 'from-orange-500 to-red-500'
    },
    { 
      id: 'orca', 
      name: 'Orca', 
      category: 'DEX', 
      icon: '🐋', 
      desc: 'User-friendly DEX',
      url: 'orca.so',
      color: 'from-teal-500 to-cyan-500'
    },
    { 
      id: 'metaplex', 
      name: 'Metaplex', 
      category: 'NFT', 
      icon: '🎭', 
      desc: 'NFT Standard',
      url: 'metaplex.com',
      color: 'from-purple-500 to-indigo-500'
    },
  ];

  // NFT Collection
  const nfts = [
    { id: 1, name: 'Privacy Ape #1337', collection: 'Privacy Apes', image: '🦍', rarity: 'Legendary', floor: '12.5 SOL' },
    { id: 2, name: 'Stealth Punk #420', collection: 'Stealth Punks', image: '🕵️', rarity: 'Rare', floor: '8.3 SOL' },
    { id: 3, name: 'Kryx Guardian #777', collection: 'Kryx Guardians', image: '🛡️', rarity: 'Epic', floor: '15.2 SOL' },
    { id: 4, name: 'Crypto Ghost #999', collection: 'Crypto Ghosts', image: '👻', rarity: 'Common', floor: '2.1 SOL' },
    { id: 5, name: 'Privacy Bird #555', collection: 'Privacy Birds', image: '🦅', rarity: 'Rare', floor: '6.7 SOL' },
    { id: 6, name: 'Anon Avatar #123', collection: 'Anon Avatars', image: '🎭', rarity: 'Epic', floor: '9.8 SOL' },
  ];

  // Staking Pools
  const stakingPools = [
    { name: 'KRTX Vault', apy: '145%', tvl: '$2.4M', rewards: '24.5 KRTX', lockPeriod: '30 days', icon: '🔒' },
    { name: 'Privacy Pool', apy: '89%', tvl: '$1.2M', rewards: '12.3 KRTX', lockPeriod: '15 days', icon: '🛡️' },
    { name: 'Flex Staking', apy: '45%', tvl: '$890K', rewards: '8.7 KRTX', lockPeriod: 'Flexible', icon: '⚡' },
  ];

  const togglePrivacyFeature = (id: number) => {
    setPrivacyFeatures(features => 
      features.map(f => f.id === id ? { ...f, status: !f.status } : f)
    );
  };

  const handleNotificationClick = () => {
    setNotifications(0);
  };

  const toggleFavorite = (dappId: string) => {
    setFavoritesDApps(prev => 
      prev.includes(dappId) 
        ? prev.filter(id => id !== dappId)
        : [...prev, dappId]
    );
  };

  return (
    <>
      {/* Status Bar */}
      <div className="relative flex items-center justify-between px-6 pt-10 pb-3 text-white text-xs font-semibold z-10">
        <span className="text-emerald-300">{currentTime}</span>
        <div className="flex items-center gap-1.5">
          <Wifi className="w-3 h-3 text-emerald-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
          <div className="w-5 h-3 border-2 border-emerald-400 rounded-sm relative">
            <div className="absolute inset-0.5 bg-emerald-400 rounded-sm" />
            <div className="absolute right-[-3px] top-1/2 -translate-y-1/2 w-1 h-1.5 bg-emerald-400 rounded-r" />
          </div>
        </div>
      </div>

      {/* App Content - Scrollable */}
      <div className="relative px-5 pb-20 z-10 h-[calc(100%-60px)] overflow-y-auto">
        {/* App Header */}
        <motion.div
          className="flex items-center justify-between mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-3">
            <motion.div 
              className="relative w-10 h-10"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <KryptonXLogo size={40} />
            </motion.div>
            <div>
              <div className="text-white text-sm font-bold">KryptonX</div>
              <div className="text-emerald-400 text-[10px] font-medium">
                {activeTab === 'wallet' ? 'Privacy Wallet' : 
                 activeTab === 'browser' ? 'DApp Browser' :
                 activeTab === 'nft' ? 'NFT Gallery' : 'Settings'}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              className="relative w-8 h-8 bg-slate-800/80 rounded-xl flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
              onClick={handleNotificationClick}
            >
              <Bell className="w-3.5 h-3.5 text-emerald-400" />
              {notifications > 0 && (
                <motion.div 
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[8px] font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  {notifications}
                </motion.div>
              )}
            </motion.button>
            <motion.button
              className="w-8 h-8 bg-slate-800/80 rounded-xl flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
              onClick={onHomePress}
            >
              <HomeIcon className="w-3.5 h-3.5 text-emerald-400" />
            </motion.button>
          </div>
        </motion.div>

        {/* Main Bottom Navigation */}
        <motion.div
          className="flex gap-2 mb-3 bg-slate-900/60 p-1.5 rounded-2xl border border-emerald-500/20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {[
            { id: 'wallet', label: 'Wallet', icon: Wallet },
            { id: 'browser', label: 'Browser', icon: Compass },
            { id: 'nft', label: 'NFTs', icon: Image },
            { id: 'settings', label: 'Settings', icon: Settings },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              className={`flex-1 py-2 px-2 rounded-xl text-[9px] font-bold transition-all flex items-center justify-center gap-1 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
                  : 'text-gray-400'
              }`}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id as any)}
            >
              <tab.icon className="w-3 h-3" />
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Content based on active tab */}
        <AnimatePresence mode="wait">
          {activeTab === 'wallet' ? (
            <motion.div
              key="wallet"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              {/* Privacy Mode Selector */}
              <motion.div
                className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-3 border border-emerald-500/20 mb-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-white text-[10px] font-bold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Privacy Mode
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'public', label: 'Public', icon: Globe, desc: 'Visible' },
                    { id: 'private', label: 'Private', icon: Lock, desc: 'Hidden' },
                    { id: 'maximum', label: 'Maximum', icon: ShieldCheck, desc: 'Stealth' },
                  ].map((mode) => (
                    <motion.button
                      key={mode.id}
                      className={`py-2 px-2 rounded-xl text-[9px] font-bold transition-all ${
                        privacyMode === mode.id
                          ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
                          : 'bg-slate-800/50 text-gray-400'
                      }`}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setPrivacyMode(mode.id as any)}
                    >
                      <mode.icon className="w-3 h-3 mx-auto mb-0.5" />
                      <div>{mode.label}</div>
                      <div className="text-[7px] opacity-70">{mode.desc}</div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Wallet Sub Navigation */}
              <div className="flex gap-2 mb-3 overflow-x-auto pb-2">
                {[
                  { id: 'overview', label: 'Overview', icon: BarChart3 },
                  { id: 'swap', label: 'Swap', icon: Zap },
                  { id: 'stake', label: 'Stake', icon: TrendingUp },
                  { id: 'history', label: 'History', icon: History },
                ].map((tab) => (
                  <motion.button
                    key={tab.id}
                    className={`px-3 py-1.5 rounded-lg text-[9px] font-bold whitespace-nowrap flex items-center gap-1 ${
                      walletSubTab === tab.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-800/50 text-gray-400'
                    }`}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setWalletSubTab(tab.id as any)}
                  >
                    <tab.icon className="w-3 h-3" />
                    {tab.label}
                  </motion.button>
                ))}
              </div>

              {/* Wallet Overview */}
              {walletSubTab === 'overview' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {/* Balance Card */}
                  <motion.div
                    className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 rounded-3xl p-4 shadow-2xl overflow-hidden mb-3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    />
                    
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full"
                        style={{ left: `${10 + i * 15}%`, top: `${20 + (i % 3) * 20}%` }}
                        animate={{ y: [0, -15, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                      />
                    ))}
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 text-emerald-100 text-[10px] font-medium">
                          <Lock className="w-3 h-3" />
                          <span>Total Portfolio</span>
                        </div>
                        <motion.button
                          className="bg-emerald-500/30 p-1.5 rounded-lg"
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setBalanceVisible(!balanceVisible)}
                        >
                          {balanceVisible ? <Eye className="w-3 h-3 text-white" /> : <EyeOff className="w-3 h-3 text-white" />}
                        </motion.button>
                      </div>
                      <div className="text-white text-3xl font-bold mb-2">
                        {balanceVisible ? '$12,934.56' : '••••••••'}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-emerald-50 text-[10px]">
                          <div className="bg-emerald-400/30 rounded-full p-1">
                            <TrendingUp className="w-2.5 h-2.5" />
                          </div>
                          <span>+24.5% ($2,543) Today</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Quick Actions */}
                  <motion.div className="grid grid-cols-4 gap-2 mb-3">
                    {[
                      { icon: Send, label: 'Send', action: () => setShowSendModal(true) },
                      { icon: Download, label: 'Receive', action: () => setShowReceiveModal(true) },
                      { icon: Zap, label: 'Swap', action: () => setWalletSubTab('swap') },
                      { icon: QrCode, label: 'QR Scan', action: () => {} },
                    ].map((action, idx) => (
                      <motion.button
                        key={idx}
                        className="flex flex-col items-center"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 + idx * 0.05 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={action.action}
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-1 shadow-lg shadow-emerald-500/30">
                          <action.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white text-[9px] font-medium">{action.label}</span>
                      </motion.button>
                    ))}
                  </motion.div>

                  {/* Token Portfolio */}
                  <div className="mb-3">
                    <div className="text-white text-xs font-bold mb-2 flex items-center justify-between">
                      <span>Assets Portfolio</span>
                      <div className="text-emerald-400 text-[9px]">{tokens.length} tokens</div>
                    </div>
                    <div className="space-y-2">
                      {tokens.map((token, idx) => (
                        <motion.button
                          key={idx}
                          className="w-full bg-slate-900/60 rounded-xl p-3 border border-emerald-500/10"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.05 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setSelectedToken(token.symbol);
                            setShowTokenDetail(true);
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-xl">
                                {token.icon}
                              </div>
                              <div className="text-left">
                                <div className="text-white text-[11px] font-bold flex items-center gap-1">
                                  {token.symbol}
                                  <span className="text-gray-400 text-[8px] font-normal">{token.name}</span>
                                </div>
                                <div className="text-gray-400 text-[9px]">
                                  {balanceVisible ? `${token.balance} ${token.symbol}` : '••••••'}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-white text-[10px] font-bold">
                                {balanceVisible ? token.usd : '••••••'}
                              </div>
                              <div className={`text-[9px] font-medium ${token.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                                {token.change}
                              </div>
                            </div>
                          </div>
                          
                          {/* Mini Chart */}
                          <div className="flex items-end gap-0.5 mt-2 h-6">
                            {token.chartData.map((value, i) => (
                              <div
                                key={i}
                                className="flex-1 bg-gradient-to-t from-emerald-500/50 to-emerald-400/30 rounded-t"
                                style={{ height: `${(value / Math.max(...token.chartData)) * 100}%` }}
                              />
                            ))}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Privacy Features */}
                  <div className="mb-3">
                    <div className="text-white text-xs font-bold mb-2 flex items-center justify-between">
                      <span>Privacy Features</span>
                      <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="space-y-2">
                      {privacyFeatures.map((feature, idx) => (
                        <motion.button
                          key={feature.id}
                          className="w-full bg-slate-900/60 rounded-xl p-2.5 border border-emerald-500/10 flex items-center justify-between"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + idx * 0.05 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => togglePrivacyFeature(feature.id)}
                        >
                          <div className="flex items-center gap-2.5">
                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                              feature.status ? 'bg-gradient-to-br from-emerald-500 to-teal-500' : 'bg-slate-800'
                            }`}>
                              <feature.icon className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <div className="text-white text-[10px] font-bold">{feature.label}</div>
                              <div className="text-gray-400 text-[8px]">{feature.desc}</div>
                            </div>
                          </div>
                          <motion.div
                            className={`relative w-9 h-5 rounded-full ${
                              feature.status ? 'bg-emerald-500' : 'bg-slate-700'
                            }`}
                          >
                            <motion.div
                              className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow"
                              animate={{ x: feature.status ? 18 : 2 }}
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                          </motion.div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Wallet Info */}
                  <div className="bg-slate-900/40 rounded-2xl p-3 border border-emerald-500/10 mb-16">
                    <div className="text-white text-xs font-bold mb-2 flex items-center gap-2">
                      <Copy className="w-3.5 h-3.5 text-emerald-400" />
                      Wallet Address
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-2 flex items-center justify-between mb-2">
                      <code className="text-emerald-400 text-[8px] font-mono">
                        {balanceVisible ? 'Krtx7xK...f8Q2w' : '••••••••••'}
                      </code>
                      <motion.button whileTap={{ scale: 0.9 }}>
                        <Copy className="w-3 h-3 text-gray-400" />
                      </motion.button>
                    </div>
                    <div className="flex items-center justify-between text-[9px]">
                      <span className="text-gray-400">Network</span>
                      <span className="text-emerald-400 font-bold">Solana Mainnet</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Swap Section */}
              {walletSubTab === 'swap' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-16"
                >
                  <div className="bg-slate-900/60 rounded-2xl p-4 border border-emerald-500/20 mb-3">
                    <div className="text-white text-xs font-bold mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-emerald-400" />
                      Privacy Swap
                    </div>
                    
                    <div className="bg-slate-800/50 rounded-xl p-3 mb-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400 text-[9px]">From</span>
                        <span className="text-emerald-400 text-[9px]">Balance: 12.5 SOL</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <input 
                          type="text" 
                          placeholder="0.00"
                          className="bg-transparent text-white text-xl font-bold outline-none w-1/2"
                          defaultValue="5.0"
                        />
                        <button className="flex items-center gap-2 bg-slate-700/50 px-3 py-1.5 rounded-lg">
                          <span className="text-lg">◎</span>
                          <span className="text-white text-[10px] font-bold">SOL</span>
                          <ChevronDown className="w-3 h-3 text-gray-400" />
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-center -my-1 relative z-10">
                      <motion.button
                        className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg"
                        whileTap={{ scale: 0.9, rotate: 180 }}
                      >
                        <ArrowDownLeft className="w-4 h-4 text-white" />
                      </motion.button>
                    </div>

                    <div className="bg-slate-800/50 rounded-xl p-3 mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400 text-[9px]">To (estimated)</span>
                        <span className="text-emerald-400 text-[9px]">Balance: 2,847.3 KRTX</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-white text-xl font-bold">~1,285.7</div>
                        <button className="flex items-center gap-2 bg-slate-700/50 px-3 py-1.5 rounded-lg">
                          <span className="text-lg">🔒</span>
                          <span className="text-white text-[10px] font-bold">KRTX</span>
                          <ChevronDown className="w-3 h-3 text-gray-400" />
                        </button>
                      </div>
                    </div>

                    <div className="bg-slate-800/30 rounded-xl p-2 space-y-1.5 mb-3">
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="text-gray-400">Rate</span>
                        <span className="text-white font-medium">1 SOL = 257.14 KRTX</span>
                      </div>
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="text-gray-400">Privacy Fee</span>
                        <span className="text-emerald-400 font-medium">0.3%</span>
                      </div>
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="text-gray-400">Network Fee</span>
                        <span className="text-white font-medium">0.000005 SOL</span>
                      </div>
                    </div>

                    <motion.button
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-emerald-500/30"
                      whileTap={{ scale: 0.98 }}
                    >
                      Swap with Privacy
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Stake Section */}
              {walletSubTab === 'stake' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-16"
                >
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-3">
                      <div className="text-emerald-100 text-[9px] mb-1">Total Staked</div>
                      <div className="text-white text-lg font-bold">1,250 KRTX</div>
                      <div className="text-emerald-100 text-[8px]">$4,862.50</div>
                    </div>
                    <div className="bg-gradient-to-br from-teal-600 to-emerald-600 rounded-2xl p-3">
                      <div className="text-emerald-100 text-[9px] mb-1">Total Rewards</div>
                      <div className="text-white text-lg font-bold">45.6 KRTX</div>
                      <div className="text-emerald-100 text-[8px]">$177.38</div>
                    </div>
                  </div>

                  <div className="text-white text-xs font-bold mb-2 flex items-center gap-2">
                    <Flame className="w-4 h-4 text-orange-400" />
                    Staking Pools
                  </div>
                  <div className="space-y-2">
                    {stakingPools.map((pool, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-900/60 rounded-2xl p-3 border border-emerald-500/20"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-sm">
                              {pool.icon}
                            </div>
                            <div>
                              <div className="text-white text-[10px] font-bold">{pool.name}</div>
                              <div className="text-gray-400 text-[8px]">{pool.lockPeriod}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-emerald-400 text-sm font-bold">{pool.apy}</div>
                            <div className="text-gray-400 text-[8px]">APY</div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 mb-2">
                          <div className="bg-slate-800/50 rounded-lg p-2">
                            <div className="text-gray-400 text-[8px]">TVL</div>
                            <div className="text-white text-[10px] font-bold">{pool.tvl}</div>
                          </div>
                          <div className="bg-slate-800/50 rounded-lg p-2">
                            <div className="text-gray-400 text-[8px]">Your Rewards</div>
                            <div className="text-emerald-400 text-[10px] font-bold">{pool.rewards}</div>
                          </div>
                        </div>

                        <motion.button
                          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2 rounded-xl font-bold text-[10px]"
                          whileTap={{ scale: 0.98 }}
                        >
                          Stake Now
                        </motion.button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* History Section */}
              {walletSubTab === 'history' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-16"
                >
                  <div className="text-white text-xs font-bold mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    Transaction History
                  </div>
                  <div className="space-y-2">
                    {[
                      { type: 'received', amount: '+125.5 KRTX', usd: '+$487.32', time: '2m ago', from: 'Staking Reward', icon: TrendingUp },
                      { type: 'sent', amount: '-50 KRTX', usd: '-$195.00', time: '1h ago', from: 'Private Transfer', icon: Send },
                      { type: 'swap', amount: '~100 KRTX', usd: '$390.00', time: '3h ago', from: 'SOL → KRTX', icon: Zap },
                      { type: 'stake', amount: '1,250 KRTX', usd: '$4,862.50', time: '2d ago', from: 'Staked in KRTX Vault', icon: Lock },
                    ].map((tx, idx) => (
                      <motion.button
                        key={idx}
                        className="w-full bg-slate-900/60 rounded-xl p-3 border border-emerald-500/10 flex items-center justify-between"
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                            tx.type === 'received' ? 'bg-emerald-500/20' :
                            tx.type === 'sent' ? 'bg-red-500/20' : 'bg-teal-500/20'
                          }`}>
                            <tx.icon className={`w-4 h-4 ${
                              tx.type === 'received' ? 'text-emerald-400' :
                              tx.type === 'sent' ? 'text-red-400' : 'text-teal-400'
                            }`} />
                          </div>
                          <div className="text-left">
                            <div className="text-white text-[10px] font-bold">{tx.from}</div>
                            <div className="text-gray-400 text-[8px]">{tx.time}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-[10px] font-bold ${
                            tx.type === 'received' ? 'text-emerald-400' : 
                            tx.type === 'sent' ? 'text-red-400' : 'text-white'
                          }`}>
                            {balanceVisible ? tx.amount : '•••••'}
                          </div>
                          <div className="text-gray-400 text-[8px]">
                            {balanceVisible ? tx.usd : '••••'}
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : activeTab === 'browser' ? (
            <motion.div
              key="browser"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="mb-16"
            >
              {/* Browser URL Bar */}
              <div className="bg-slate-900/60 rounded-2xl p-3 border border-emerald-500/20 mb-3">
                <div className="flex items-center gap-2 mb-3">
                  {activeDApp && (
                    <motion.button
                      className="w-8 h-8 bg-slate-800/50 rounded-xl flex items-center justify-center"
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setActiveDApp(null)}
                    >
                      <ChevronLeft className="w-4 h-4 text-emerald-400" />
                    </motion.button>
                  )}
                  <div className="flex-1 bg-slate-800/50 rounded-xl px-3 py-2 flex items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-gray-400" />
                    <input
                      type="text"
                      placeholder={activeDApp || "Search dApps or enter URL..."}
                      value={browserUrl}
                      onChange={(e) => setBrowserUrl(e.target.value)}
                      className="flex-1 bg-transparent text-white text-[10px] outline-none placeholder:text-gray-500"
                    />
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <motion.button
                    className="w-8 h-8 bg-slate-800/50 rounded-xl flex items-center justify-center"
                    whileTap={{ scale: 0.9 }}
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
                  </motion.button>
                </div>

                {/* Browser Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {['Popular', 'DEX', 'NFT', 'DeFi', 'Gaming'].map((cat) => (
                    <button
                      key={cat}
                      className="px-3 py-1.5 bg-slate-800/50 rounded-lg text-[9px] text-gray-400 font-medium whitespace-nowrap hover:bg-emerald-600/20 hover:text-emerald-400 transition-all"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {!activeDApp ? (
                <>
                  {/* Favorites */}
                  {favoritesDApps.length > 0 && (
                    <div className="mb-3">
                      <div className="text-white text-xs font-bold mb-2 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        Favorites
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {dApps.filter(d => favoritesDApps.includes(d.id)).map((dapp) => (
                          <motion.button
                            key={dapp.id}
                            className="flex flex-col items-center gap-2"
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setActiveDApp(dapp.url)}
                          >
                            <div className={`w-14 h-14 bg-gradient-to-br ${dapp.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                              {dapp.icon}
                            </div>
                            <span className="text-white text-[8px] font-medium text-center">{dapp.name}</span>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* All DApps */}
                  <div className="text-white text-xs font-bold mb-2 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-emerald-400" />
                    Explore dApps
                  </div>
                  <div className="space-y-2">
                    {dApps.map((dapp, idx) => (
                      <motion.div
                        key={dapp.id}
                        className="w-full bg-slate-900/60 rounded-xl p-3 border border-emerald-500/10 flex items-center justify-between cursor-pointer"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveDApp(dapp.url)}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 bg-gradient-to-br ${dapp.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                            {dapp.icon}
                          </div>
                          <div className="text-left">
                            <div className="text-white text-[11px] font-bold flex items-center gap-1">
                              {dapp.name}
                              <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 text-[7px] rounded">
                                {dapp.category}
                              </span>
                            </div>
                            <div className="text-gray-400 text-[9px]">{dapp.desc}</div>
                            <div className="text-emerald-400 text-[8px] flex items-center gap-1 mt-0.5">
                              <Globe className="w-2.5 h-2.5" />
                              {dapp.url}
                            </div>
                          </div>
                        </div>
                        <motion.button
                          className="w-7 h-7 bg-slate-800/50 rounded-lg flex items-center justify-center"
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(dapp.id);
                          }}
                        >
                          <Star 
                            className={`w-3.5 h-3.5 ${
                              favoritesDApps.includes(dapp.id) 
                                ? 'text-yellow-400 fill-yellow-400' 
                                : 'text-gray-400'
                            }`} 
                          />
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </>
              ) : (
                /* Active DApp View */
                <div className="space-y-3">
                  {/* DApp Content Simulation */}
                  <div className="bg-slate-900/60 rounded-2xl p-4 border border-emerald-500/20">
                    <div className="text-white text-sm font-bold mb-3 flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-emerald-400" />
                      {activeDApp}
                    </div>
                    
                    <div className="bg-slate-800/50 rounded-xl p-6 mb-3 text-center">
                      <div className="text-6xl mb-3">🌐</div>
                      <div className="text-white text-xs font-bold mb-1">DApp Connected</div>
                      <div className="text-gray-400 text-[9px]">Privacy-protected connection</div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="text-gray-400">Status</span>
                        <span className="flex items-center gap-1 text-emerald-400">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                          Connected
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="text-gray-400">Wallet</span>
                        <span className="text-white font-medium">Krtx7xK...f8Q2w</span>
                      </div>
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="text-gray-400">Network</span>
                        <span className="text-emerald-400 font-medium">Solana Mainnet</span>
                      </div>
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="text-gray-400">Privacy Mode</span>
                        <span className="text-white font-medium capitalize">{privacyMode}</span>
                      </div>
                    </div>

                    <motion.button
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2.5 rounded-xl font-bold text-[10px] mt-3"
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveDApp(null)}
                    >
                      Disconnect DApp
                    </motion.button>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <motion.button
                      className="bg-slate-900/60 rounded-xl p-3 border border-emerald-500/10 flex items-center gap-2"
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link className="w-4 h-4 text-emerald-400" />
                      <div className="text-left">
                        <div className="text-white text-[10px] font-bold">Share</div>
                        <div className="text-gray-400 text-[8px]">Share link</div>
                      </div>
                    </motion.button>
                    <motion.button
                      className="bg-slate-900/60 rounded-xl p-3 border border-emerald-500/10 flex items-center gap-2"
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleFavorite(dApps.find(d => d.url === activeDApp)?.id || '')}
                    >
                      <Star className="w-4 h-4 text-yellow-400" />
                      <div className="text-left">
                        <div className="text-white text-[10px] font-bold">Favorite</div>
                        <div className="text-gray-400 text-[8px]">Add to favorites</div>
                      </div>
                    </motion.button>
                  </div>
                </div>
              )}
            </motion.div>
          ) : activeTab === 'nft' ? (
            <motion.div
              key="nft"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="mb-16"
            >
              {/* NFT Stats */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-3">
                  <div className="text-purple-100 text-[9px] mb-1">Total NFTs</div>
                  <div className="text-white text-lg font-bold">{nfts.length}</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-3">
                  <div className="text-blue-100 text-[9px] mb-1">Floor Value</div>
                  <div className="text-white text-lg font-bold">54.6◎</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-3">
                  <div className="text-emerald-100 text-[9px] mb-1">Total Value</div>
                  <div className="text-white text-lg font-bold">$6.5K</div>
                </div>
              </div>

              {/* NFT Grid */}
              <div className="text-white text-xs font-bold mb-2 flex items-center gap-2">
                <Image className="w-4 h-4 text-emerald-400" />
                Your Collection
              </div>
              <div className="grid grid-cols-2 gap-2">
                {nfts.map((nft, idx) => (
                  <motion.button
                    key={nft.id}
                    className="bg-slate-900/60 rounded-2xl p-3 border border-emerald-500/10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedNFT(nft)}
                  >
                    {/* NFT Image */}
                    <div className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-6xl mb-2 relative overflow-hidden">
                      {nft.image}
                      <div className="absolute top-2 right-2">
                        <div className={`px-2 py-0.5 rounded-lg text-[7px] font-bold ${
                          nft.rarity === 'Legendary' ? 'bg-yellow-500 text-black' :
                          nft.rarity === 'Epic' ? 'bg-purple-500 text-white' :
                          nft.rarity === 'Rare' ? 'bg-blue-500 text-white' :
                          'bg-gray-500 text-white'
                        }`}>
                          {nft.rarity}
                        </div>
                      </div>
                    </div>
                    
                    {/* NFT Info */}
                    <div className="text-left">
                      <div className="text-white text-[10px] font-bold truncate">{nft.name}</div>
                      <div className="text-gray-400 text-[8px] truncate mb-1">{nft.collection}</div>
                      <div className="flex items-center justify-between">
                        <div className="text-emerald-400 text-[9px] font-bold">{nft.floor}</div>
                        <div className="text-gray-400 text-[8px]">Floor</div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-2 mt-3">
                <motion.button
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-bold text-[10px] flex items-center justify-center gap-2"
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-4 h-4" />
                  Receive NFT
                </motion.button>
                <motion.button
                  className="bg-slate-900/60 text-white py-3 rounded-xl font-bold text-[10px] flex items-center justify-center gap-2 border border-emerald-500/20"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab('browser')}
                >
                  <ExternalLink className="w-4 h-4" />
                  Browse NFTs
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="settings"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="mb-16"
            >
              {/* Account Section */}
              <div className="bg-slate-900/60 rounded-2xl p-4 border border-emerald-500/20 mb-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-2xl">
                    🔒
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-sm font-bold">Privacy Wallet</div>
                    <div className="text-emerald-400 text-[9px] font-mono">Krtx7xK...f8Q2w</div>
                  </div>
                  <motion.button
                    className="w-8 h-8 bg-slate-800/50 rounded-xl flex items-center justify-center"
                    whileTap={{ scale: 0.9 }}
                  >
                    <Copy className="w-3.5 h-3.5 text-emerald-400" />
                  </motion.button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-slate-800/50 rounded-xl p-2 text-center">
                    <div className="text-gray-400 text-[8px]">Balance</div>
                    <div className="text-white text-[11px] font-bold">$12,934</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-2 text-center">
                    <div className="text-gray-400 text-[8px]">NFTs</div>
                    <div className="text-white text-[11px] font-bold">{nfts.length} items</div>
                  </div>
                </div>
              </div>

              {/* General Settings */}
              <div className="text-white text-xs font-bold mb-2">General</div>
              <div className="space-y-2 mb-3">
                {[
                  { icon: Globe, label: 'Network', value: 'Solana Mainnet', action: () => {} },
                  { icon: Key, label: 'Security & Privacy', value: 'Maximum', action: () => {} },
                  { icon: Bell, label: 'Notifications', value: 'Enabled', action: () => {} },
                  { icon: Database, label: 'Backup & Recovery', value: 'Setup', action: () => {} },
                ].map((item, idx) => (
                  <motion.button
                    key={idx}
                    className="w-full bg-slate-900/60 rounded-xl p-3 border border-emerald-500/10 flex items-center justify-between"
                    whileTap={{ scale: 0.98 }}
                    onClick={item.action}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-800/50 rounded-xl flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="text-left">
                        <div className="text-white text-[10px] font-bold">{item.label}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-[9px]">{item.value}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Advanced Settings */}
              <div className="text-white text-xs font-bold mb-2">Advanced</div>
              <div className="space-y-2 mb-3">
                {[
                  { icon: Smartphone, label: 'Connected dApps', value: `${dApps.length} apps` },
                  { icon: Activity, label: 'Developer Mode', value: 'Off' },
                  { icon: Layers, label: 'Token Filter', value: 'All tokens' },
                  { icon: Coins, label: 'Currency', value: 'USD' },
                ].map((item, idx) => (
                  <motion.button
                    key={idx}
                    className="w-full bg-slate-900/60 rounded-xl p-3 border border-emerald-500/10 flex items-center justify-between"
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-800/50 rounded-xl flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="text-left">
                        <div className="text-white text-[10px] font-bold">{item.label}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-[9px]">{item.value}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* About */}
              <div className="text-white text-xs font-bold mb-2">About</div>
              <div className="bg-slate-900/60 rounded-xl p-3 border border-emerald-500/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-[9px]">Version</span>
                  <span className="text-white text-[9px] font-medium">1.0.0</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-[9px]">Build</span>
                  <span className="text-white text-[9px] font-medium">2026.03.08</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-[9px]">Network</span>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-emerald-400 text-[9px] font-medium">Online</span>
                  </div>
                </div>
              </div>

              {/* Logout Button */}
              <motion.button
                className="w-full bg-red-600/20 text-red-400 py-3 rounded-xl font-bold text-[11px] mt-3 border border-red-500/30 flex items-center justify-center gap-2"
                whileTap={{ scale: 0.98 }}
              >
                <AlertCircle className="w-4 h-4" />
                Lock Wallet
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Send Modal */}
      <AnimatePresence>
        {showSendModal && (
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSendModal(false)}
          >
            <motion.div
              className="w-full bg-slate-900 rounded-t-3xl p-5 border-t border-emerald-500/20"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-12 h-1 bg-gray-600 rounded-full mx-auto mb-4" />
              <div className="flex items-center justify-between mb-4">
                <div className="text-white text-sm font-bold">Send Privately</div>
                <button onClick={() => setShowSendModal(false)}>
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="text-gray-400 text-[9px] mb-1">Recipient Address</div>
                  <input 
                    type="text" 
                    placeholder="Enter Solana address"
                    className="w-full bg-slate-800/50 text-white text-[10px] px-3 py-2.5 rounded-xl outline-none border border-emerald-500/20 focus:border-emerald-500/50"
                  />
                </div>
                
                <div>
                  <div className="text-gray-400 text-[9px] mb-1">Amount</div>
                  <div className="flex items-center gap-2">
                    <input 
                      type="text" 
                      placeholder="0.00"
                      className="flex-1 bg-slate-800/50 text-white text-[10px] px-3 py-2.5 rounded-xl outline-none border border-emerald-500/20 focus:border-emerald-500/50"
                    />
                    <button className="bg-slate-800/50 px-3 py-2.5 rounded-xl border border-emerald-500/20 flex items-center gap-2">
                      <span className="text-white text-[10px] font-bold">KRTX</span>
                      <ChevronDown className="w-3 h-3 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-slate-800/30 rounded-xl p-2 space-y-1">
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-gray-400">Network Fee</span>
                    <span className="text-white">0.000005 SOL</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-gray-400">Privacy Fee</span>
                    <span className="text-emerald-400">0.3%</span>
                  </div>
                </div>

                <motion.button
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-bold text-sm"
                  whileTap={{ scale: 0.98 }}
                >
                  Send with Privacy
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Receive Modal */}
      <AnimatePresence>
        {showReceiveModal && (
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowReceiveModal(false)}
          >
            <motion.div
              className="w-full bg-slate-900 rounded-t-3xl p-5 border-t border-emerald-500/20"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-12 h-1 bg-gray-600 rounded-full mx-auto mb-4" />
              <div className="flex items-center justify-between mb-4">
                <div className="text-white text-sm font-bold">Receive Tokens</div>
                <button onClick={() => setShowReceiveModal(false)}>
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 bg-white rounded-2xl p-4 mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                    <QrCode className="w-24 h-24 text-white" />
                  </div>
                </div>
                
                <div className="text-white text-[11px] font-bold mb-1">Your Wallet Address</div>
                <div className="bg-slate-800/50 rounded-xl px-4 py-2.5 mb-3 flex items-center gap-2 w-full">
                  <code className="flex-1 text-emerald-400 text-[10px] font-mono truncate">
                    Krtx7xK4mT9pL2aB5cD8eF1gH3iJ6kM0nO2pQ...f8Q2w
                  </code>
                  <motion.button whileTap={{ scale: 0.9 }}>
                    <Copy className="w-4 h-4 text-emerald-400" />
                  </motion.button>
                </div>

                <motion.button
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-bold text-sm"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowReceiveModal(false)}
                >
                  Done
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Token Detail Modal */}
      <AnimatePresence>
        {showTokenDetail && selectedToken && (
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setShowTokenDetail(false);
              setSelectedToken(null);
            }}
          >
            <motion.div
              className="w-full bg-slate-900 rounded-t-3xl p-5 border-t border-emerald-500/20 max-h-[80%] overflow-y-auto"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-12 h-1 bg-gray-600 rounded-full mx-auto mb-4" />
              
              {tokens.find(t => t.symbol === selectedToken) && (() => {
                const token = tokens.find(t => t.symbol === selectedToken)!;
                return (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-2xl">
                          {token.icon}
                        </div>
                        <div>
                          <div className="text-white text-sm font-bold">{token.symbol}</div>
                          <div className="text-gray-400 text-[9px]">{token.name}</div>
                        </div>
                      </div>
                      <button onClick={() => {
                        setShowTokenDetail(false);
                        setSelectedToken(null);
                      }}>
                        <X className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>

                    <div className="bg-slate-800/50 rounded-2xl p-4 mb-3">
                      <div className="text-gray-400 text-[9px] mb-1">Balance</div>
                      <div className="text-white text-2xl font-bold mb-1">
                        {balanceVisible ? token.balance : '••••••'} {token.symbol}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-gray-400 text-[10px]">
                          {balanceVisible ? token.usd : '••••••'}
                        </div>
                        <div className={`text-[10px] font-medium ${token.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                          {token.change}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <motion.button
                        className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2.5 rounded-xl font-bold text-[10px] flex items-center justify-center gap-2"
                        whileTap={{ scale: 0.98 }}
                      >
                        <Send className="w-3.5 h-3.5" />
                        Send
                      </motion.button>
                      <motion.button
                        className="bg-slate-800/50 text-white py-2.5 rounded-xl font-bold text-[10px] flex items-center justify-center gap-2 border border-emerald-500/20"
                        whileTap={{ scale: 0.98 }}
                      >
                        <Zap className="w-3.5 h-3.5" />
                        Swap
                      </motion.button>
                    </div>

                    <div className="text-white text-[10px] font-bold mb-2">Price Chart (7D)</div>
                    <div className="flex items-end gap-1 h-24 mb-3">
                      {token.chartData.map((value, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end">
                          <div
                            className="bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t"
                            style={{ height: `${(value / Math.max(...token.chartData)) * 100}%` }}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="text-gray-400">Price</span>
                        <span className="text-white font-medium">{token.price}</span>
                      </div>
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="text-gray-400">24h Change</span>
                        <span className={`font-medium ${token.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                          {token.change}
                        </span>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NFT Detail Modal */}
      <AnimatePresence>
        {selectedNFT && (
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNFT(null)}
          >
            <motion.div
              className="w-full bg-slate-900 rounded-t-3xl p-5 border-t border-emerald-500/20 max-h-[80%] overflow-y-auto"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-12 h-1 bg-gray-600 rounded-full mx-auto mb-4" />
              
              <div className="flex items-center justify-between mb-4">
                <div className="text-white text-sm font-bold">NFT Details</div>
                <button onClick={() => setSelectedNFT(null)}>
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-3 relative overflow-hidden">
                <div className="text-9xl">{selectedNFT.image}</div>
                <div className="absolute top-3 right-3">
                  <div className={`px-3 py-1 rounded-xl text-[9px] font-bold ${
                    selectedNFT.rarity === 'Legendary' ? 'bg-yellow-500 text-black' :
                    selectedNFT.rarity === 'Epic' ? 'bg-purple-500 text-white' :
                    selectedNFT.rarity === 'Rare' ? 'bg-blue-500 text-white' :
                    'bg-gray-500 text-white'
                  }`}>
                    {selectedNFT.rarity}
                  </div>
                </div>
              </div>

              <div className="text-white text-lg font-bold mb-1">{selectedNFT.name}</div>
              <div className="text-gray-400 text-[10px] mb-3">{selectedNFT.collection}</div>

              <div className="bg-slate-800/50 rounded-xl p-3 mb-3">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="text-gray-400 text-[9px]">Floor Price</div>
                    <div className="text-white text-sm font-bold">{selectedNFT.floor}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-400 text-[9px]">Last Sale</div>
                    <div className="text-white text-sm font-bold">14.2 SOL</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <motion.button
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-bold text-[10px] flex items-center justify-center gap-2"
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  Transfer
                </motion.button>
                <motion.button
                  className="bg-slate-800/50 text-white py-3 rounded-xl font-bold text-[10px] flex items-center justify-center gap-2 border border-emerald-500/20"
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View on Explorer
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Home Indicator */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/20 rounded-full z-50" />
    </>
  );
}
