import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield, Key, Eye, Cpu, Network, Zap, Blocks,
  CheckCircle, RefreshCw, BarChart3, ShieldCheck, GitBranch,
  ArrowRight, Database
} from 'lucide-react';

// ── Helpers ───────────────────────────────────────────────────────────────────

function rHex(n: number) {
  return Array.from({ length: n }, () =>
    Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
  ).join('');
}

const TABS = [
  { id: 'arch',   label: 'Architecture',  icon: Blocks },
  { id: 'live',   label: 'ZK Live',       icon: Zap },
  { id: 'bench',  label: 'Performance',   icon: BarChart3 },
  { id: 'audit',  label: 'Security',      icon: ShieldCheck },
];

// ── Architecture Tab ──────────────────────────────────────────────────────────

const LAYERS = [
  {
    level: 'L4', label: 'Application Layer', color: '#10b981',
    items: ['Privacy Wallet', 'DEX Integration', 'Developer SDK', 'Mobile App'],
    desc: 'User-facing interfaces powered by privacy-first UX.',
  },
  {
    level: 'L3', label: 'Protocol Layer', color: '#14b8a6',
    items: ['ZK-SNARK Prover', 'Ring Signatures', 'Bulletproofs', 'Stealth Address'],
    desc: 'The cryptographic core — all privacy logic lives here.',
  },
  {
    level: 'L2', label: 'Consensus Layer', color: '#6366f1',
    items: ['Proof of Stake', 'BFT Finality', 'Slashing', '16-Shard Scaling'],
    desc: 'Fast, sybil-resistant transaction validation.',
  },
  {
    level: 'L1', label: 'Network Layer', color: '#64748b',
    items: ['P2P Gossip', 'Tor / I2P Routing', 'Encrypted Mempool', 'Kademlia DHT'],
    desc: 'Anonymous, encrypted node communication worldwide.',
  },
];

function ArchTab() {
  const [active, setActive] = useState(1);
  const layer = LAYERS[active];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-full">
      {/* Stack column */}
      <div className="lg:col-span-2 flex flex-col gap-2">
        {LAYERS.map((l, i) => (
          <button
            key={l.level}
            onClick={() => setActive(i)}
            className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left transition-all duration-200 ${
              active === i
                ? 'bg-slate-800/80 border-slate-600'
                : 'bg-slate-900/40 border-slate-800/60 hover:border-slate-700'
            }`}
          >
            <span
              className="text-[10px] font-mono font-bold px-2 py-1 rounded-lg border flex-shrink-0"
              style={{ color: l.color, borderColor: l.color + '40', backgroundColor: l.color + '15' }}
            >
              {l.level}
            </span>
            <span className={`text-sm font-medium ${active === i ? 'text-white' : 'text-gray-400'}`}>
              {l.label}
            </span>
            {active === i && (
              <motion.div
                layoutId="arch-arrow"
                className="ml-auto"
              >
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </motion.div>
            )}
          </button>
        ))}

        {/* Flow line */}
        <div className="flex flex-col items-center gap-1 py-2 opacity-40">
          <div className="w-px h-4 bg-emerald-500/50" />
          <span className="text-[10px] text-gray-600 font-mono">data flows down</span>
        </div>
      </div>

      {/* Detail panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          className="lg:col-span-3 rounded-xl border border-slate-700/50 bg-slate-900/60 p-6 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: layer.color }}
            />
            <span className="font-mono text-xs font-bold" style={{ color: layer.color }}>
              {layer.level}
            </span>
            <h4 className="text-white font-semibold">{layer.label}</h4>
          </div>
          <p className="text-gray-400 text-sm mb-5">{layer.desc}</p>

          <div className="grid grid-cols-2 gap-2 flex-1">
            {layer.items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-2.5 bg-slate-950/60 border border-slate-800 rounded-lg px-3 py-2.5"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: layer.color }}
                />
                <span className="text-gray-300 text-xs font-medium">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Animated data flow visualization */}
          <div className="mt-5 bg-slate-950/50 border border-slate-800 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-[10px] font-mono uppercase tracking-widest">Data Flow</span>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-600 text-[9px]">LIVE</span>
              </div>
            </div>
            <div className="flex items-center gap-1 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-1.5 rounded-full flex-1"
                  style={{ backgroundColor: layer.color }}
                  animate={{ opacity: [0.1, 1, 0.1] }}
                  transition={{ duration: 1.2, delay: i * 0.06, repeat: Infinity }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ── ZK Live Tab ───────────────────────────────────────────────────────────────

const ZK_STEPS = [
  { label: 'Private input captured',     code: `amount = 2.50 KRX\nsender = 0x${rHex(4)}...`, color: '#10b981' },
  { label: 'Witness generated',          code: `w = H(sk, nonce)\n   = 0x${rHex(8)}`, color: '#14b8a6' },
  { label: 'R1CS constraints built',     code: `128 constraints\nall satisfied ✓`, color: '#6366f1' },
  { label: 'Groth16 proof computed',     code: `π_A = 0x${rHex(6)}...\nπ_B, π_C ready`, color: '#10b981' },
  { label: 'Pairing verified locally',   code: `e(π_A, vk_B) = 1\nno data leaked`, color: '#14b8a6' },
  { label: 'Broadcast to network',       code: `TX 0x${rHex(8)}...\nin mempool ✓`, color: '#10b981' },
];

function ZKLiveTab() {
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const cancelRef = useRef(false);

  async function run() {
    if (running) return;
    setRunning(true);
    setDone(false);
    setStep(-1);
    cancelRef.current = false;

    for (let i = 0; i < ZK_STEPS.length; i++) {
      if (cancelRef.current) return;
      setStep(i);
      await new Promise(r => setTimeout(r, 900));
    }
    setDone(true);
    setRunning(false);
  }

  function reset() {
    cancelRef.current = true;
    setStep(-1);
    setRunning(false);
    setDone(false);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left — step list */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-gray-400 text-sm">ZK Proof Pipeline — Live Simulation</span>
          <div className="flex gap-2">
            <button
              onClick={run}
              disabled={running}
              className="flex items-center gap-1.5 text-xs bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-3 py-1.5 rounded-lg transition-all disabled:opacity-40"
            >
              {running ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Zap className="w-3 h-3" />}
              {running ? 'Running...' : 'Run Proof'}
            </button>
            {(step >= 0 || done) && !running && (
              <button
                onClick={reset}
                className="text-xs border border-slate-700 text-gray-400 hover:text-white px-3 py-1.5 rounded-lg transition-all"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {ZK_STEPS.map((s, i) => {
          const isActive = step === i;
          const isDone = step > i || done;
          return (
            <motion.div
              key={i}
              animate={{ opacity: step === -1 ? 0.4 : isDone || isActive ? 1 : 0.3 }}
              className={`flex items-start gap-3 px-4 py-3 rounded-xl border transition-all ${
                isActive ? 'bg-slate-800/80 border-slate-600' :
                isDone ? 'bg-slate-900/60 border-slate-800' :
                'bg-slate-900/30 border-slate-800/40'
              }`}
            >
              <div className="flex-shrink-0 mt-0.5">
                {isDone && !isActive
                  ? <CheckCircle className="w-4 h-4 text-emerald-400" />
                  : isActive
                  ? <RefreshCw className="w-4 h-4 text-amber-400 animate-spin" />
                  : <div className="w-4 h-4 rounded-full border-2 border-slate-700" />
                }
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-xs font-medium ${isDone ? 'text-white' : isActive ? 'text-amber-300' : 'text-gray-500'}`}>
                  {s.label}
                </p>
                {(isDone || isActive) && (
                  <motion.pre
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[10px] text-gray-500 font-mono mt-1 leading-relaxed"
                  >
                    {s.code}
                  </motion.pre>
                )}
              </div>
              <span className="text-[9px] font-mono text-gray-600 flex-shrink-0 mt-0.5">
                {String(i + 1).padStart(2, '0')}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Right — output terminal */}
      <div className="bg-slate-950 rounded-xl border border-slate-800 flex flex-col overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-800 flex-shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          <span className="text-gray-600 text-[10px] font-mono ml-2">kryptonx-prover — output</span>
          {running && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />}
          {done && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400" />}
        </div>

        <div className="flex-1 p-4 font-mono text-xs space-y-1.5 overflow-y-auto">
          {step === -1 && !done && (
            <span className="text-gray-600">$ awaiting execution...</span>
          )}
          {ZK_STEPS.map((s, i) => {
            if (step < i && !done) return null;
            const isDone2 = done || step > i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-0.5"
              >
                <div className="flex items-center gap-2">
                  <span style={{ color: s.color }} className="font-bold">{'>'}</span>
                  <span className="text-gray-300">{s.label}</span>
                  {isDone2 && <CheckCircle className="w-3 h-3 text-emerald-400 ml-auto" />}
                </div>
                <div className="pl-4 text-gray-600 whitespace-pre">{s.code}</div>
              </motion.div>
            );
          })}
          {done && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3 border-t border-emerald-500/20 pt-3 space-y-1"
            >
              <p className="text-emerald-400 font-bold">✓ Proof complete — 288 bytes</p>
              <p className="text-gray-600">Sender: <span className="text-gray-400">hidden</span></p>
              <p className="text-gray-600">Amount: <span className="text-gray-400">encrypted</span></p>
              <p className="text-gray-600">Valid:  <span className="text-emerald-400">verified on-chain</span></p>
            </motion.div>
          )}
        </div>

        {/* Progress bar */}
        <div className="h-0.5 bg-slate-800 flex-shrink-0">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400"
            animate={{ width: step === -1 ? '0%' : done ? '100%' : `${((step + 1) / ZK_STEPS.length) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
}

// ── Performance Tab ───────────────────────────────────────────────────────────

const BENCH_DATA = [
  { metric: 'Transactions/sec', krx: 65000, eth: 15,   btc: 7,    krxLabel: '65,000 TPS', ethLabel: '15 TPS',  btcLabel: '7 TPS'    },
  { metric: 'TX Fee (avg)',     krx: 99.96, eth: 30,   btc: 25,   krxLabel: '$0.001',     ethLabel: '~$2.50',  btcLabel: '~$3.20'   },
  { metric: 'Finality time',   krx: 99,    eth: 15,   btc: 2,    krxLabel: '< 1 sec',    ethLabel: '~12 sec', btcLabel: '~60 min'  },
  { metric: 'Privacy level',   krx: 100,   eth: 5,    btc: 10,   krxLabel: 'Full ZK',    ethLabel: 'None',    btcLabel: 'Minimal'  },
  { metric: 'ZK Proof native', krx: 100,   eth: 20,   btc: 0,    krxLabel: 'Native',     ethLabel: 'Optional',btcLabel: 'None'     },
];

function BenchTab() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-6 mb-2">
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-emerald-500" /><span className="text-xs text-gray-400">KryptonX</span></div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-indigo-500/50" /><span className="text-xs text-gray-400">Ethereum</span></div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-amber-500/40" /><span className="text-xs text-gray-400">Bitcoin</span></div>
      </div>

      {BENCH_DATA.map((row, ri) => (
        <div key={row.metric} className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-xs">{row.metric}</span>
            <span className="text-emerald-400 text-xs font-bold">{row.krxLabel}</span>
          </div>
          <div className="space-y-1.5">
            {/* KRX */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-gray-600 w-16 flex-shrink-0 font-mono">KRX</span>
              <div className="flex-1 bg-slate-900 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${row.krx}%` }}
                  transition={{ duration: 0.8, delay: ri * 0.1, ease: 'easeOut' }}
                />
              </div>
            </div>
            {/* ETH */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-gray-600 w-16 flex-shrink-0 font-mono">ETH</span>
              <div className="flex-1 bg-slate-900 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-indigo-500/50"
                  initial={{ width: 0 }}
                  animate={{ width: `${row.eth}%` }}
                  transition={{ duration: 0.8, delay: ri * 0.1 + 0.1, ease: 'easeOut' }}
                />
              </div>
              <span className="text-[10px] text-gray-600 w-16 font-mono">{row.ethLabel}</span>
            </div>
            {/* BTC */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-gray-600 w-16 flex-shrink-0 font-mono">BTC</span>
              <div className="flex-1 bg-slate-900 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-amber-500/40"
                  initial={{ width: 0 }}
                  animate={{ width: `${row.btc}%` }}
                  transition={{ duration: 0.8, delay: ri * 0.1 + 0.2, ease: 'easeOut' }}
                />
              </div>
              <span className="text-[10px] text-gray-600 w-16 font-mono">{row.btcLabel}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Live stats strip */}
      <div className="grid grid-cols-4 gap-3 mt-4 pt-4 border-t border-slate-800">
        {[
          { label: 'TPS', value: '65K', icon: Zap,      color: 'text-emerald-400' },
          { label: 'Nodes', value: '2,847', icon: Network,  color: 'text-teal-400' },
          { label: 'ZK Time', value: '47ms', icon: Cpu,      color: 'text-amber-400' },
          { label: 'Fee', value: '$0.001', icon: Database, color: 'text-emerald-400' },
        ].map(s => (
          <div key={s.label} className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 text-center">
            <s.icon className={`w-4 h-4 ${s.color} mx-auto mb-1.5`} />
            <p className="text-white font-bold text-sm">{s.value}</p>
            <p className="text-gray-600 text-[9px] mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Security Tab ──────────────────────────────────────────────────────────────

const AUDITS = [
  { firm: 'Trail of Bits',    score: 98, date: 'Jan 2026', status: 'Completed',   critical: 0, high: 0, med: 1 },
  { firm: 'OpenZeppelin',     score: 96, date: 'Feb 2026', status: 'Completed',   critical: 0, high: 0, med: 2 },
  { firm: 'Halborn Security', score: 97, date: 'Q2 2026',  status: 'In Progress', critical: 0, high: 0, med: 0 },
];

const CERTS = [
  { label: 'ZK Circuit Formal Verification', icon: ShieldCheck },
  { label: 'Smart Contract Audit — 3 Firms',  icon: Shield },
  { label: 'Cryptographic Primitive Review',  icon: Key },
  { label: '100% Open Source (Apache 2.0)',   icon: GitBranch },
  { label: '$500K Bug Bounty Active',          icon: Eye },
  { label: 'Quantum-Resistant Roadmap',        icon: Cpu },
];

function SecurityTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Audits */}
      <div className="space-y-3">
        <p className="text-gray-400 text-sm mb-4">Security Audits by leading blockchain firms</p>
        {AUDITS.map((a, i) => (
          <motion.div
            key={a.firm}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-slate-900/60 border border-slate-800 rounded-xl p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-medium text-sm">{a.firm}</span>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold text-sm">{a.score}/100</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  a.status === 'Completed'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                }`}>{a.status}</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[10px] text-gray-500">
              <span>{a.date}</span>
              <span>·</span>
              <span className="text-emerald-500">{a.critical} critical</span>
              <span>·</span>
              <span className="text-emerald-500">{a.high} high</span>
              <span>·</span>
              <span className="text-amber-500">{a.med} medium</span>
            </div>
            {/* Score bar */}
            <div className="mt-3 h-1 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${a.score}%` }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <div>
        <p className="text-gray-400 text-sm mb-4">Certifications & Commitments</p>
        <div className="space-y-2">
          {CERTS.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <c.icon className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <span className="text-gray-300 text-sm flex-1">{c.label}</span>
              <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export function TechStackPro() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center gap-0 border-b border-slate-800 bg-slate-950/60 overflow-x-auto">
        {/* Window buttons */}
        <div className="flex gap-1.5 px-5 py-4 border-r border-slate-800 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-amber-500/70" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
        </div>

        {/* Tabs */}
        {TABS.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(i)}
            className={`relative flex items-center gap-2 px-5 py-4 text-xs font-medium transition-all border-r border-slate-800 whitespace-nowrap ${
              activeTab === i
                ? 'text-white bg-slate-800/60'
                : 'text-gray-500 hover:text-gray-300 hover:bg-slate-800/30'
            }`}
          >
            <t.icon className="w-3.5 h-3.5" />
            {t.label}
            {activeTab === i && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-400"
              />
            )}
          </button>
        ))}

        {/* Live badge */}
        <div className="ml-auto px-5 flex items-center gap-2 flex-shrink-0">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-600 text-[10px] font-mono uppercase tracking-widest">Live</span>
        </div>
      </div>

      {/* Tab content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === 0 && <ArchTab />}
            {activeTab === 1 && <ZKLiveTab />}
            {activeTab === 2 && <BenchTab />}
            {activeTab === 3 && <SecurityTab />}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
