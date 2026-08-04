import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield, Eye, EyeOff, MapPin, Wallet, Clock,
  DollarSign, RefreshCw, CheckCircle, XCircle,
  Lock, Wifi, AlertTriangle, ChevronRight
} from 'lucide-react';
import { KryptonXLogo } from './KryptonXLogo';

// ── Privacy metrics ───────────────────────────────────────────────────────────
const metrics = [
  {
    icon: Wallet,
    label: 'Identity',
    exposed: '0x1a2b3c4d5e6f...8901',
    protected: 'Stealth Address',
  },
  {
    icon: DollarSign,
    label: 'Balance',
    exposed: '$1,284.00 KRTX',
    protected: 'Encrypted',
  },
  {
    icon: Clock,
    label: 'Tx History',
    exposed: '47 txns visible',
    protected: 'ZK-Proof Hidden',
  },
  {
    icon: MapPin,
    label: 'Location',
    exposed: '192.168.1.104 · US',
    protected: 'Tor Routed',
  },
  {
    icon: Eye,
    label: 'Tx Amount',
    exposed: 'Fully public',
    protected: 'Range Proof',
  },
];

// ── Score Ring ────────────────────────────────────────────────────────────────
function ScoreRing({ score, color }: { score: number; color: 'red' | 'emerald' }) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;

  const colors = {
    red:     { stroke: '#ef4444', text: 'text-red-400',     bg: 'text-red-400' },
    emerald: { stroke: '#10b981', text: 'text-emerald-400', bg: 'text-emerald-400' },
  };
  const c = colors[color];

  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <svg width="64" height="64" className="-rotate-90">
        <circle cx="32" cy="32" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
        <motion.circle
          cx="32" cy="32" r={r}
          fill="none"
          stroke={c.stroke}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-base font-bold tabular-nums ${c.text}`}>{score}</span>
        <span className="text-[7px] text-gray-600 uppercase tracking-wider">/ 100</span>
      </div>
    </div>
  );
}

// ── Metric Row ────────────────────────────────────────────────────────────────
function MetricRow({
  metric, isKryptonX, delay
}: {
  metric: typeof metrics[0];
  isKryptonX: boolean;
  delay: number;
}) {
  return (
    <motion.div
      key={isKryptonX ? 'kx' : 'std'}
      initial={{ opacity: 0, x: isKryptonX ? 8 : -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      className={`flex items-center gap-2.5 py-2 border-b last:border-0 transition-colors ${
        isKryptonX ? 'border-emerald-500/10' : 'border-orange-500/10'
      }`}
    >
      <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
        isKryptonX ? 'bg-emerald-500/10' : 'bg-orange-500/10'
      }`}>
        <metric.icon className={`w-3 h-3 ${isKryptonX ? 'text-emerald-400' : 'text-orange-400'}`} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[9px] text-gray-600 uppercase tracking-widest">{metric.label}</div>
        <div className={`text-[11px] font-mono truncate mt-0.5 ${
          isKryptonX ? 'text-emerald-300' : 'text-orange-300'
        }`}>
          {isKryptonX ? metric.protected : metric.exposed}
        </div>
      </div>
      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
        isKryptonX ? 'bg-emerald-500/15' : 'bg-orange-500/15'
      }`}>
        {isKryptonX
          ? <CheckCircle className="w-3 h-3 text-emerald-400" />
          : <XCircle className="w-3 h-3 text-orange-400" />
        }
      </div>
    </motion.div>
  );
}

// ── Wallet Panel ──────────────────────────────────────────────────────────────
function WalletPanel({ isKryptonX }: { isKryptonX: boolean }) {
  const score = isKryptonX ? 98 : 8;

  return (
    <div className={`flex-1 rounded-xl p-4 flex flex-col gap-3 transition-all duration-500 ${
      isKryptonX
        ? 'bg-emerald-500/5 border border-emerald-500/20'
        : 'bg-orange-500/5 border border-orange-500/15'
    }`}>
      {/* Panel header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {isKryptonX
            ? <KryptonXLogo size={20} animated={false} showText={false} />
            : <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <Wallet className="w-2.5 h-2.5 text-white" />
              </div>
          }
          <div>
            <div className="text-[11px] font-semibold text-white leading-none">
              {isKryptonX ? 'KryptonX' : 'Standard Wallet'}
            </div>
            <div className="text-[9px] text-gray-600 mt-0.5">
              {isKryptonX ? 'Privacy-first' : 'Public blockchain'}
            </div>
          </div>
        </div>
        <ScoreRing score={score} color={isKryptonX ? 'emerald' : 'red'} />
      </div>

      {/* Privacy score label */}
      <div className={`text-center py-1.5 rounded-lg text-[9px] font-semibold uppercase tracking-widest ${
        isKryptonX
          ? 'bg-emerald-500/10 text-emerald-400'
          : 'bg-orange-500/10 text-orange-400'
      }`}>
        {isKryptonX ? '✓ Privacy Score: Excellent' : '⚠ Privacy Score: Critical'}
      </div>

      {/* Metrics */}
      <div className="flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={isKryptonX ? 'kx' : 'std'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col"
          >
            {metrics.map((m, i) => (
              <MetricRow key={m.label} metric={m} isKryptonX={isKryptonX} delay={i * 0.07} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom badge */}
      <div className={`flex items-center gap-1.5 mt-auto pt-1 text-[9px] ${
        isKryptonX ? 'text-emerald-500/60' : 'text-orange-500/50'
      }`}>
        {isKryptonX
          ? <><Lock className="w-2.5 h-2.5" /> Zero-Knowledge Proof · Tor · Ring Signatures</>
          : <><AlertTriangle className="w-2.5 h-2.5" /> All data publicly visible on Solana Explorer</>
        }
      </div>
    </div>
  );
}

// ── Browser Mockup ────────────────────────────────────────────────────────────
function BrowserShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        borderRadius: 14,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)',
        background: 'linear-gradient(180deg,#1a1f2e,#141824)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 40px rgba(16,185,129,0.07)',
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-3 px-4"
        style={{ height: 40, background: 'linear-gradient(180deg,#1e2436,#191e2c)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div
          className="flex-1 flex items-center gap-2 px-3 rounded-lg"
          style={{ height: 24, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <Lock className="w-2.5 h-2.5 text-emerald-400" />
          <span className="text-[10px] text-gray-400 font-mono">app.kryptonx.io/wallet-analyzer</span>
        </div>
        <Wifi className="w-3.5 h-3.5 text-gray-700" />
      </div>

      {/* Content */}
      {children}

      {/* Status bar */}
      <div
        className="flex items-center justify-between px-4"
        style={{ height: 24, background: 'rgba(0,0,0,0.25)', borderTop: '1px solid rgba(255,255,255,0.04)' }}
      >
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[8px] text-emerald-500/60">KryptonX Privacy Analyzer v1.0</span>
        </div>
        <span className="text-[8px] text-gray-700">Solana Mainnet · Secured</span>
      </div>
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export function WalletPrivacyDemo() {
  const [activeTab, setActiveTab] = useState<'compare' | 'kryptonx' | 'standard'>('compare');
  const [autoToggle, setAutoToggle] = useState(true);
  const [highlight, setHighlight] = useState<'kryptonx' | 'standard'>('standard');

  // Auto-cycle highlight in compare mode
  useEffect(() => {
    if (!autoToggle || activeTab !== 'compare') return;
    const t = setInterval(() => {
      setHighlight(h => h === 'kryptonx' ? 'standard' : 'kryptonx');
    }, 3500);
    return () => clearInterval(t);
  }, [autoToggle, activeTab]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="mt-16"
    >
      <BrowserShell>
        {/* Toolbar */}
        <div
          className="flex items-center justify-between px-4 py-2.5 border-b border-white/5"
          style={{ background: 'rgba(0,0,0,0.15)' }}
        >
          <div className="flex items-center gap-1 bg-slate-900/60 rounded-lg p-0.5">
            {([
              { key: 'compare',  label: 'Compare' },
              { key: 'kryptonx', label: 'KryptonX' },
              { key: 'standard', label: 'Standard' },
            ] as const).map(tab => (
              <button
                key={tab.key}
                onClick={() => { setActiveTab(tab.key); setAutoToggle(tab.key === 'compare'); }}
                className={`px-3 py-1 rounded-md text-[10px] font-medium transition-all ${
                  activeTab === tab.key
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className={`flex items-center gap-1.5 text-[9px] px-2.5 py-1 rounded-full border transition-all ${
              autoToggle
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-slate-800 border-slate-700 text-gray-500'
            }`}>
              <RefreshCw className={`w-2.5 h-2.5 ${autoToggle ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }} />
              Live Analysis
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="p-4" style={{ minHeight: 320 }}>
          <AnimatePresence mode="wait">
            {activeTab === 'compare' && (
              <motion.div
                key="compare"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex gap-3"
              >
                {/* Standard - dimmed when kryptonx is highlighted */}
                <motion.div
                  className="flex-1"
                  animate={{ opacity: highlight === 'standard' ? 1 : 0.45, scale: highlight === 'standard' ? 1 : 0.985 }}
                  transition={{ duration: 0.5 }}
                >
                  <WalletPanel isKryptonX={false} />
                </motion.div>

                {/* Center divider */}
                <div className="flex flex-col items-center justify-center gap-2 flex-shrink-0">
                  <div className="w-px flex-1 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                  <div className="w-7 h-7 rounded-full bg-slate-800 border border-white/8 flex items-center justify-center">
                    <ChevronRight className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div className="w-px flex-1 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                </div>

                {/* KryptonX - dimmed when standard is highlighted */}
                <motion.div
                  className="flex-1"
                  animate={{ opacity: highlight === 'kryptonx' ? 1 : 0.45, scale: highlight === 'kryptonx' ? 1 : 0.985 }}
                  transition={{ duration: 0.5 }}
                >
                  <WalletPanel isKryptonX={true} />
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'kryptonx' && (
              <motion.div
                key="kryptonx"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="max-w-sm mx-auto"
              >
                <WalletPanel isKryptonX={true} />
              </motion.div>
            )}

            {activeTab === 'standard' && (
              <motion.div
                key="standard"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="max-w-sm mx-auto"
              >
                <WalletPanel isKryptonX={false} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </BrowserShell>
    </motion.div>
  );
}
