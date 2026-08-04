import { useState } from 'react';
import { Shield, Eye, EyeOff, Send, Download, RefreshCw, TrendingUp, History, Settings, Copy, Check, QrCode, ArrowUpRight, ArrowDownLeft, Clock, Zap, Lock, Users, ChevronRight, ChevronDown, X, Wallet as WalletIcon, Coins, ArrowLeftRight, Info, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Transaction {
  id: string;
  type: 'send' | 'receive' | 'swap' | 'stake';
  amount: number;
  token: string;
  timestamp: Date;
  status: 'completed' | 'pending' | 'failed';
  privacyLevel: 'public' | 'private' | 'maximum';
  to?: string;
  from?: string;
  txHash: string;
}

type WalletTab = 'dashboard' | 'send' | 'receive' | 'history' | 'swap' | 'stake' | 'settings';
type PrivacyMode = 'public' | 'private' | 'maximum';

const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'receive',
    amount: 125.50,
    token: 'SOL',
    timestamp: new Date(Date.now() - 3600000),
    status: 'completed',
    privacyLevel: 'private',
    from: '7xK...9pL2',
    txHash: '5x9K...pL2q'
  },
  {
    id: '2',
    type: 'send',
    amount: 50.00,
    token: 'KRTX',
    timestamp: new Date(Date.now() - 7200000),
    status: 'completed',
    privacyLevel: 'maximum',
    to: '3mN...7kQ8',
    txHash: '2p4M...8nR9'
  },
  {
    id: '3',
    type: 'swap',
    amount: 1000,
    token: 'USDC',
    timestamp: new Date(Date.now() - 86400000),
    status: 'completed',
    privacyLevel: 'public',
    txHash: '9q2L...4tY6'
  },
  {
    id: '4',
    type: 'stake',
    amount: 500,
    token: 'KRTX',
    timestamp: new Date(Date.now() - 172800000),
    status: 'completed',
    privacyLevel: 'private',
    txHash: '7m8K...3wE2'
  }
];

const mockTokens = [
  { symbol: 'SOL', name: 'Solana', balance: 342.75, usdValue: 68550, change24h: 5.2, logo: '🟣' },
  { symbol: 'KRTX', name: 'KryptonX', balance: 15420, usdValue: 23130, change24h: 12.8, logo: '💎' },
  { symbol: 'USDC', name: 'USD Coin', balance: 5000, usdValue: 5000, change24h: 0.01, logo: '💵' }
];

export function Wallet() {
  const [activeTab, setActiveTab] = useState<WalletTab>('dashboard');
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [privacyMode, setPrivacyMode] = useState<PrivacyMode>('private');
  const [sendAmount, setSendAmount] = useState('');
  const [sendAddress, setSendAddress] = useState('');
  const [selectedToken, setSelectedToken] = useState('SOL');
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);
  const [ringSize, setRingSize] = useState(11);
  const [stealthAddress, setStealthAddress] = useState(true);

  const totalBalance = mockTokens.reduce((acc, token) => acc + token.usdValue, 0);
  const walletAddress = '7xK9pL2q3mN8kQ4tY6wE5rF1sG8hJ9pL2q3mN8kQ';

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getPrivacyColor = (level: PrivacyMode) => {
    switch(level) {
      case 'public': return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
      case 'private': return 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30';
      case 'maximum': return 'text-purple-400 bg-purple-500/20 border-purple-500/30';
    }
  };

  const getPrivacyLabel = (level: PrivacyMode) => {
    switch(level) {
      case 'public': return 'Public';
      case 'private': return 'Private';
      case 'maximum': return 'Maximum Privacy';
    }
  };

  const renderDashboard = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Balance Card */}
      <div className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 rounded-3xl p-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <span className="text-emerald-100 text-sm">Total Balance</span>
            <button
              onClick={() => setBalanceVisible(!balanceVisible)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {balanceVisible ? <Eye className="w-5 h-5 text-white" /> : <EyeOff className="w-5 h-5 text-white" />}
            </button>
          </div>

          <div className="mb-6">
            {balanceVisible ? (
              <div>
                <div className="text-4xl font-bold text-white mb-1">
                  ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="text-emerald-100 text-sm">≈ {mockTokens[0].balance} SOL</div>
              </div>
            ) : (
              <div className="text-4xl font-bold text-white">••••••••</div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-4 gap-3">
            <button
              onClick={() => setActiveTab('send')}
              className="flex flex-col items-center gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all"
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
              <span className="text-white text-xs font-medium">Send</span>
            </button>

            <button
              onClick={() => setActiveTab('receive')}
              className="flex flex-col items-center gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all"
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Download className="w-5 h-5 text-white" />
              </div>
              <span className="text-white text-xs font-medium">Receive</span>
            </button>

            <button
              onClick={() => setActiveTab('swap')}
              className="flex flex-col items-center gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all"
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-white" />
              </div>
              <span className="text-white text-xs font-medium">Swap</span>
            </button>

            <button
              onClick={() => setActiveTab('stake')}
              className="flex flex-col items-center gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all"
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-white text-xs font-medium">Stake</span>
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Status */}
      <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-white text-sm font-medium">Privacy Mode</div>
              <div className="text-gray-400 text-xs">Enhanced protection active</div>
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full border text-xs font-medium ${getPrivacyColor(privacyMode)}`}>
            {getPrivacyLabel(privacyMode)}
          </div>
        </div>
      </div>

      {/* Assets List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-lg font-semibold">Assets</h3>
          <button className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors">
            View All
          </button>
        </div>

        {mockTokens.map((token, index) => (
          <motion.div
            key={token.symbol}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4 hover:border-emerald-500/40 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-xl">
                  {token.logo}
                </div>
                <div>
                  <div className="text-white font-medium">{token.symbol}</div>
                  <div className="text-gray-400 text-sm">{token.name}</div>
                </div>
              </div>
              <div className="text-right">
                {balanceVisible ? (
                  <>
                    <div className="text-white font-medium">{token.balance.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">${token.usdValue.toLocaleString()}</div>
                  </>
                ) : (
                  <div className="text-white">••••</div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-lg font-semibold">Recent Activity</h3>
          <button
            onClick={() => setActiveTab('history')}
            className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors"
          >
            View All
          </button>
        </div>

        {mockTransactions.slice(0, 3).map((tx) => (
          <div
            key={tx.id}
            className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  tx.type === 'send' ? 'bg-red-500/20' :
                  tx.type === 'receive' ? 'bg-green-500/20' :
                  tx.type === 'swap' ? 'bg-blue-500/20' :
                  'bg-purple-500/20'
                }`}>
                  {tx.type === 'send' && <ArrowUpRight className="w-5 h-5 text-red-400" />}
                  {tx.type === 'receive' && <ArrowDownLeft className="w-5 h-5 text-green-400" />}
                  {tx.type === 'swap' && <RefreshCw className="w-5 h-5 text-blue-400" />}
                  {tx.type === 'stake' && <TrendingUp className="w-5 h-5 text-purple-400" />}
                </div>
                <div>
                  <div className="text-white font-medium capitalize">{tx.type}</div>
                  <div className="text-gray-400 text-sm flex items-center gap-2">
                    <span>{tx.timestamp.toLocaleTimeString()}</span>
                    {tx.privacyLevel !== 'public' && (
                      <Lock className="w-3 h-3 text-emerald-400" />
                    )}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-white font-medium ${tx.type === 'send' ? 'text-red-400' : 'text-green-400'}`}>
                  {tx.type === 'send' ? '-' : '+'}{tx.amount} {tx.token}
                </div>
                <div className="text-gray-400 text-sm">{tx.status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const renderSend = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Privacy Mode Selector */}
      <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Shield className="w-5 h-5 text-emerald-400" />
          <h3 className="text-white font-medium">Privacy Mode</h3>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {(['public', 'private', 'maximum'] as PrivacyMode[]).map((mode) => (
            <button
              key={mode}
              onClick={() => setPrivacyMode(mode)}
              className={`p-3 rounded-xl border text-xs font-medium transition-all ${
                privacyMode === mode
                  ? getPrivacyColor(mode)
                  : 'bg-slate-800/50 border-slate-700 text-gray-400 hover:border-slate-600'
              }`}
            >
              {mode === 'public' && '🌐 Public'}
              {mode === 'private' && '🔒 Private'}
              {mode === 'maximum' && '🛡️ Maximum'}
            </button>
          ))}
        </div>
        
        {privacyMode !== 'public' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-3 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl"
          >
            <div className="flex items-start gap-2 text-xs text-emerald-300">
              <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium mb-1">Privacy Active</div>
                <div className="text-emerald-400/70">
                  {privacyMode === 'private' && 'Transaction uses ring signatures (11 members) and stealth address'}
                  {privacyMode === 'maximum' && 'Maximum privacy with 20-member ring and advanced encryption'}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Token Selector */}
      <div className="space-y-2">
        <label className="text-gray-400 text-sm">Select Token</label>
        <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4">
          <select
            value={selectedToken}
            onChange={(e) => setSelectedToken(e.target.value)}
            className="w-full bg-transparent text-white font-medium outline-none cursor-pointer"
          >
            {mockTokens.map((token) => (
              <option key={token.symbol} value={token.symbol} className="bg-slate-900">
                {token.symbol} - {token.balance.toLocaleString()} available
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Amount Input */}
      <div className="space-y-2">
        <label className="text-gray-400 text-sm">Amount</label>
        <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4">
          <input
            type="number"
            value={sendAmount}
            onChange={(e) => setSendAmount(e.target.value)}
            placeholder="0.00"
            className="w-full bg-transparent text-white text-2xl font-bold outline-none"
          />
          <div className="text-gray-400 text-sm mt-2">
            ≈ ${(parseFloat(sendAmount || '0') * 200).toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </div>
        </div>
        <div className="flex gap-2">
          {['25%', '50%', '75%', 'Max'].map((percent) => (
            <button
              key={percent}
              className="flex-1 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-gray-400 text-sm hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
            >
              {percent}
            </button>
          ))}
        </div>
      </div>

      {/* Address Input */}
      <div className="space-y-2">
        <label className="text-gray-400 text-sm">Recipient Address</label>
        <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4">
          <input
            type="text"
            value={sendAddress}
            onChange={(e) => setSendAddress(e.target.value)}
            placeholder="Enter Solana address..."
            className="w-full bg-transparent text-white outline-none"
          />
        </div>
      </div>

      {/* Privacy Settings */}
      {privacyMode !== 'public' && (
        <div className="space-y-3">
          <h3 className="text-white font-medium">Privacy Settings</h3>
          
          {/* Ring Size */}
          <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300 text-sm">Ring Size</span>
              <span className="text-emerald-400 font-medium">{ringSize} members</span>
            </div>
            <input
              type="range"
              min="5"
              max="20"
              value={ringSize}
              onChange={(e) => setRingSize(parseInt(e.target.value))}
              className="w-full accent-emerald-500"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Faster</span>
              <span>More Private</span>
            </div>
          </div>

          {/* Stealth Address */}
          <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white text-sm font-medium">Stealth Address</div>
                <div className="text-gray-400 text-xs">One-time receiving address</div>
              </div>
              <button
                onClick={() => setStealthAddress(!stealthAddress)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  stealthAddress ? 'bg-emerald-500' : 'bg-slate-700'
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                  stealthAddress ? 'translate-x-6' : 'translate-x-0.5'
                }`} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Network Fee */}
      <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">Network Fee</span>
          <div className="text-right">
            <div className="text-white font-medium">0.000005 SOL</div>
            <div className="text-gray-400 text-xs">≈ $0.001</div>
          </div>
        </div>
      </div>

      {/* Send Button */}
      <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-4 rounded-2xl transition-all transform hover:scale-[1.02] shadow-lg shadow-emerald-500/50 flex items-center justify-center gap-2">
        <Send className="w-5 h-5" />
        Send Transaction
      </button>
    </motion.div>
  );

  const renderReceive = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* QR Code */}
      <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-6">
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center mb-4">
            <QrCode className="w-40 h-40 text-slate-900" />
          </div>
          <div className="text-center mb-4">
            <div className="text-white font-medium mb-1">Scan to Send</div>
            <div className="text-gray-400 text-sm">Send SOL or tokens to this address</div>
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="space-y-2">
        <label className="text-gray-400 text-sm">Your Wallet Address</label>
        <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 text-white font-mono text-sm break-all">
              {walletAddress}
            </div>
            <button
              onClick={handleCopy}
              className="flex-shrink-0 p-2 hover:bg-emerald-500/20 rounded-lg transition-colors"
            >
              {copied ? (
                <Check className="w-5 h-5 text-emerald-400" />
              ) : (
                <Copy className="w-5 h-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Generate Stealth Address */}
      <button className="w-full bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4 hover:border-emerald-500/40 transition-all">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-left">
              <div className="text-white font-medium">Generate Stealth Address</div>
              <div className="text-gray-400 text-sm">One-time address for privacy</div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </button>

      {/* Network Selection */}
      <div className="space-y-3">
        <h3 className="text-white font-medium">Select Network</h3>
        {['Solana Mainnet', 'Solana Devnet', 'Solana Testnet'].map((network, index) => (
          <button
            key={network}
            className={`w-full bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border rounded-2xl p-4 transition-all ${
              index === 0
                ? 'border-emerald-500/50'
                : 'border-emerald-500/20 hover:border-emerald-500/40'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-emerald-400' : 'bg-gray-600'}`} />
                <span className="text-white">{network}</span>
              </div>
              {index === 0 && (
                <Check className="w-5 h-5 text-emerald-400" />
              )}
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );

  const renderHistory = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {['All', 'Send', 'Receive', 'Swap', 'Stake'].map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
              filter === 'All'
                ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
                : 'bg-slate-800/50 border border-slate-700 text-gray-400 hover:border-emerald-500/30'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Transactions List */}
      <div className="space-y-3">
        {mockTransactions.map((tx, index) => (
          <motion.div
            key={tx.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4 hover:border-emerald-500/40 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3 flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  tx.type === 'send' ? 'bg-red-500/20' :
                  tx.type === 'receive' ? 'bg-green-500/20' :
                  tx.type === 'swap' ? 'bg-blue-500/20' :
                  'bg-purple-500/20'
                }`}>
                  {tx.type === 'send' && <ArrowUpRight className="w-5 h-5 text-red-400" />}
                  {tx.type === 'receive' && <ArrowDownLeft className="w-5 h-5 text-green-400" />}
                  {tx.type === 'swap' && <RefreshCw className="w-5 h-5 text-blue-400" />}
                  {tx.type === 'stake' && <TrendingUp className="w-5 h-5 text-purple-400" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-medium capitalize">{tx.type}</span>
                    {tx.privacyLevel !== 'public' && (
                      <Lock className="w-3 h-3 text-emerald-400" />
                    )}
                  </div>
                  <div className="text-gray-400 text-sm mb-1">
                    {tx.timestamp.toLocaleDateString()} • {tx.timestamp.toLocaleTimeString()}
                  </div>
                  <div className="text-gray-500 text-xs font-mono truncate">
                    {tx.txHash}
                  </div>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className={`text-white font-medium ${tx.type === 'send' ? 'text-red-400' : 'text-green-400'}`}>
                  {tx.type === 'send' ? '-' : '+'}{tx.amount} {tx.token}
                </div>
                <div className={`text-xs px-2 py-1 rounded-full border mt-1 inline-block ${
                  tx.status === 'completed' ? 'text-green-400 bg-green-500/20 border-green-500/30' :
                  tx.status === 'pending' ? 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30' :
                  'text-red-400 bg-red-500/20 border-red-500/30'
                }`}>
                  {tx.status}
                </div>
              </div>
            </div>

            {/* Privacy Badge */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
              <div className={`px-2 py-1 rounded-full border text-xs font-medium ${getPrivacyColor(tx.privacyLevel)}`}>
                {getPrivacyLabel(tx.privacyLevel)}
              </div>
              <button className="text-emerald-400 text-xs hover:text-emerald-300 transition-colors">
                View Details →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderSwap = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* From Token */}
      <div className="space-y-2">
        <label className="text-gray-400 text-sm">From</label>
        <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <select className="bg-transparent text-white font-medium outline-none cursor-pointer">
              <option value="SOL" className="bg-slate-900">SOL</option>
              <option value="KRTX" className="bg-slate-900">KRTX</option>
              <option value="USDC" className="bg-slate-900">USDC</option>
            </select>
            <input
              type="number"
              placeholder="0.00"
              className="bg-transparent text-white text-right text-2xl font-bold outline-none w-32"
            />
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Balance: 342.75 SOL</span>
            <span className="text-emerald-400 cursor-pointer hover:text-emerald-300">Max</span>
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <div className="flex justify-center">
        <button className="w-12 h-12 bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-full flex items-center justify-center hover:border-emerald-500/40 transition-all">
          <RefreshCw className="w-5 h-5 text-emerald-400" />
        </button>
      </div>

      {/* To Token */}
      <div className="space-y-2">
        <label className="text-gray-400 text-sm">To (estimated)</label>
        <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <select className="bg-transparent text-white font-medium outline-none cursor-pointer">
              <option value="USDC" className="bg-slate-900">USDC</option>
              <option value="KRTX" className="bg-slate-900">KRTX</option>
              <option value="SOL" className="bg-slate-900">SOL</option>
            </select>
            <div className="text-white text-2xl font-bold">0.00</div>
          </div>
          <div className="text-gray-400 text-sm">Balance: 5,000 USDC</div>
        </div>
      </div>

      {/* Swap Details */}
      <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Rate</span>
          <span className="text-white">1 SOL = 200 USDC</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Slippage Tolerance</span>
          <span className="text-emerald-400 cursor-pointer hover:text-emerald-300">0.5% →</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Network Fee</span>
          <span className="text-white">0.000005 SOL</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Privacy Mode</span>
          <div className={`px-2 py-1 rounded-full border text-xs font-medium ${getPrivacyColor(privacyMode)}`}>
            {getPrivacyLabel(privacyMode)}
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-4 rounded-2xl transition-all transform hover:scale-[1.02] shadow-lg shadow-emerald-500/50 flex items-center justify-center gap-2">
        <RefreshCw className="w-5 h-5" />
        Swap Tokens
      </button>
    </motion.div>
  );

  const renderStake = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Staking Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4">
          <div className="text-gray-400 text-sm mb-1">Total Staked</div>
          <div className="text-white text-2xl font-bold">500 KRTX</div>
          <div className="text-emerald-400 text-sm">≈ $750</div>
        </div>
        <div className="bg-gradient-to-br from-slate-900/50 to-purple-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-4">
          <div className="text-gray-400 text-sm mb-1">Rewards Earned</div>
          <div className="text-white text-2xl font-bold">12.5 KRTX</div>
          <div className="text-purple-400 text-sm">+2.5% APY</div>
        </div>
      </div>

      {/* Stake More */}
      <div className="space-y-2">
        <label className="text-gray-400 text-sm">Stake Amount</label>
        <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4">
          <input
            type="number"
            placeholder="0.00"
            className="w-full bg-transparent text-white text-2xl font-bold outline-none mb-2"
          />
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Available: 15,420 KRTX</span>
            <span className="text-emerald-400 cursor-pointer hover:text-emerald-300">Max</span>
          </div>
        </div>
      </div>

      {/* APY Info */}
      <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-400 text-sm">Current APY</span>
          <span className="text-emerald-400 text-2xl font-bold">18.5%</span>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Lock Period</span>
            <span className="text-white">30 days</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Minimum Stake</span>
            <span className="text-white">100 KRTX</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Rewards Distribution</span>
            <span className="text-white">Daily</span>
          </div>
        </div>
      </div>

      {/* Active Stakes */}
      <div className="space-y-3">
        <h3 className="text-white font-medium">Active Stakes</h3>
        <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <div className="text-white font-medium">500 KRTX Staked</div>
              <div className="text-gray-400 text-sm">Started 15 days ago</div>
            </div>
            <div className="text-right">
              <div className="text-emerald-400 font-medium">+12.5 KRTX</div>
              <div className="text-gray-400 text-sm">Rewards</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 py-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-xl text-sm font-medium hover:bg-emerald-500/30 transition-all">
              Claim Rewards
            </button>
            <button className="flex-1 py-2 bg-slate-800/50 border border-slate-700 text-gray-400 rounded-xl text-sm font-medium hover:border-emerald-500/30 transition-all">
              Unstake
            </button>
          </div>
        </div>
      </div>

      {/* Stake Button */}
      <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-4 rounded-2xl transition-all transform hover:scale-[1.02] shadow-lg shadow-emerald-500/50 flex items-center justify-center gap-2">
        <TrendingUp className="w-5 h-5" />
        Stake KRTX
      </button>
    </motion.div>
  );

  const renderSettings = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      {/* Account */}
      <div className="space-y-3">
        <h3 className="text-white font-medium">Account</h3>
        <button className="w-full bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4 hover:border-emerald-500/40 transition-all text-left">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <WalletIcon className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="text-white font-medium">Wallet Address</div>
                <div className="text-gray-400 text-sm font-mono">{walletAddress.slice(0, 20)}...</div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </button>
      </div>

      {/* Privacy Settings */}
      <div className="space-y-3">
        <h3 className="text-white font-medium">Privacy Settings</h3>
        
        <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white text-sm font-medium">Default Privacy Mode</div>
              <div className="text-gray-400 text-xs">Used for all transactions</div>
            </div>
            <select
              value={privacyMode}
              onChange={(e) => setPrivacyMode(e.target.value as PrivacyMode)}
              className="bg-slate-800 text-white border border-slate-700 rounded-lg px-3 py-1.5 text-sm outline-none cursor-pointer"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="maximum">Maximum</option>
            </select>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white text-sm font-medium">Auto-generate Stealth Addresses</div>
              <div className="text-gray-400 text-xs">For receiving payments</div>
            </div>
            <button
              onClick={() => setStealthAddress(!stealthAddress)}
              className={`w-12 h-6 rounded-full transition-colors ${
                stealthAddress ? 'bg-emerald-500' : 'bg-slate-700'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                stealthAddress ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </button>
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="space-y-3">
        <h3 className="text-white font-medium">Security</h3>
        
        {['Backup Wallet', 'Change Password', 'Two-Factor Authentication', 'Export Private Key'].map((item) => (
          <button
            key={item}
            className="w-full bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4 hover:border-emerald-500/40 transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-white">{item}</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </button>
        ))}
      </div>

      {/* Network */}
      <div className="space-y-3">
        <h3 className="text-white font-medium">Network</h3>
        <div className="bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white text-sm font-medium">Current Network</div>
              <div className="text-emerald-400 text-xs">Solana Mainnet</div>
            </div>
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* About */}
      <div className="space-y-3">
        <h3 className="text-white font-medium">About</h3>
        {['Terms of Service', 'Privacy Policy', 'Help Center', 'Version 1.0.0'].map((item) => (
          <button
            key={item}
            className="w-full bg-gradient-to-br from-slate-900/50 to-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4 hover:border-emerald-500/40 transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-white">{item}</span>
              {!item.includes('Version') && <ChevronRight className="w-5 h-5 text-gray-400" />}
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-950">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            animation: 'gridFlow 20s linear infinite'
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 border-b border-emerald-500/20 bg-slate-900/50 backdrop-blur-xl">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-lg">KryptonX</div>
                <div className="text-emerald-400 text-xs">Secure Wallet</div>
              </div>
            </div>
            <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-md mx-auto px-4 py-6">
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'send' && renderSend()}
        {activeTab === 'receive' && renderReceive()}
        {activeTab === 'history' && renderHistory()}
        {activeTab === 'swap' && renderSwap()}
        {activeTab === 'stake' && renderStake()}
        {activeTab === 'settings' && renderSettings()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-emerald-500/20 bg-slate-900/80 backdrop-blur-xl">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-around">
            {[
              { id: 'dashboard', icon: WalletIcon, label: 'Wallet' },
              { id: 'history', icon: History, label: 'History' },
              { id: 'swap', icon: ArrowLeftRight, label: 'Swap' },
              { id: 'settings', icon: Settings, label: 'Settings' }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as WalletTab)}
                  className="flex flex-col items-center gap-1 min-w-0 flex-1"
                >
                  <div className={`p-2 rounded-xl transition-all ${
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs font-medium ${
                    isActive ? 'text-emerald-400' : 'text-gray-400'
                  }`}>
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gridFlow {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }
      `}</style>
    </div>
  );
}
