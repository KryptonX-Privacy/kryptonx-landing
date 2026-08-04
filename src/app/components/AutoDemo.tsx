import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield, Zap, Lock, Camera, Battery, Wifi, Signal,
  CheckCircle, Sparkles, TrendingUp, Gift, Layers,
  ArrowUpRight, Clock, Star,
} from 'lucide-react';
import { KryptonXLogo } from './KryptonXLogo';

// ── Tap cursor ────────────────────────────────────────────────────────────────
function TapCursor({ x, y, id }: { x: number; y: number; id: number }) {
  return (
    <motion.div
      key={id}
      className="absolute pointer-events-none z-50"
      style={{ left: x - 20, top: y - 20 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={[
        { scale: 1.1, opacity: 1 },
        { scale: 0.75, opacity: 1 },
        { scale: 1.6, opacity: 0 },
      ]}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="w-10 h-10 rounded-full border-2 border-emerald-400/90 shadow-lg shadow-emerald-500/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
      </div>
    </motion.div>
  );
}

// ── Status bar shared ─────────────────────────────────────────────────────────
function StatusBar() {
  return (
    <div className="flex justify-between items-center px-6 pt-10 pb-1 flex-shrink-0">
      <span className="text-white text-xs font-semibold">9:41</span>
      <div className="flex items-center gap-1.5">
        <Signal className="w-3 h-3 text-white" />
        <Wifi className="w-3 h-3 text-white" />
        <Battery className="w-5 h-3 text-white" fill="white" />
      </div>
    </div>
  );
}

// ── Screen: Dashboard ─────────────────────────────────────────────────────────
function DashboardScreen({ highlightStake, highlightAirdrop }: { highlightStake: boolean; highlightAirdrop: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #020c14 0%, #041c14 55%, #020c14 100%)' }}>
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-1 pb-3">
        <div>
          <p className="text-gray-500 text-[10px]">My Wallet</p>
          <p className="text-white text-sm font-bold">KryptonX</p>
        </div>
        <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
          <Shield className="w-4 h-4 text-emerald-400" />
        </div>
      </div>

      {/* Balance */}
      <div className="mx-4 rounded-2xl p-4 mb-3 flex-shrink-0"
        style={{ background: 'linear-gradient(135deg,rgba(16,185,129,0.18),rgba(20,184,166,0.1))', border: '1px solid rgba(16,185,129,0.25)' }}>
        <p className="text-gray-400 text-[10px] mb-0.5">Total Balance</p>
        <p className="text-white text-2xl font-bold">8,241.50 KRTX</p>
        <div className="flex items-center gap-1 mt-0.5">
          <TrendingUp className="w-3 h-3 text-emerald-400" />
          <span className="text-emerald-400 text-[10px]">+5.2% today</span>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-4 gap-2 px-4 mb-4 flex-shrink-0">
        {[
          { label: 'Swap',    icon: ArrowUpRight, hl: false },
          { label: 'Stack',   icon: Layers,       hl: highlightStake },
          { label: 'Airdrop', icon: Gift,         hl: highlightAirdrop },
          { label: 'Lock',    icon: Lock,         hl: false },
        ].map((btn) => (
          <motion.div key={btn.label} className="flex flex-col items-center gap-1"
            animate={btn.hl ? { scale: [1, 0.9, 1] } : { scale: 1 }}
            transition={{ duration: 0.3 }}>
            <motion.div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: btn.hl ? 'rgba(16,185,129,0.35)' : 'rgba(16,185,129,0.1)',
                border: `1px solid ${btn.hl ? 'rgba(16,185,129,0.7)' : 'rgba(16,185,129,0.2)'}`,
              }}
              animate={btn.hl ? { boxShadow: ['0 0 0 0 rgba(16,185,129,0)', '0 0 0 8px rgba(16,185,129,0.3)', '0 0 0 0 rgba(16,185,129,0)'] } : {}}
              transition={{ duration: 0.5 }}>
              <btn.icon className="w-5 h-5 text-emerald-400" />
            </motion.div>
            <span className="text-gray-400 text-[9px]">{btn.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Airdrop notification banner */}
      <AnimatePresence>
        {highlightAirdrop && (
          <motion.div className="mx-4 mb-3 rounded-xl px-3 py-2.5 flex items-center gap-2"
            style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.4)' }}
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <Gift className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <span className="text-amber-300 text-[10px] font-medium">🎉 Airdrop available! Tap to claim 250 KRTX</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Recent */}
      <div className="flex-1 px-4 overflow-hidden">
        <p className="text-gray-500 text-[10px] uppercase tracking-wider font-medium mb-2">Recent</p>
        {[
          { label: 'Staking Reward',  amount: '+14.2 KRTX', sub: 'Auto-compound · 1h' },
          { label: 'Private Swap',    amount: '−50 KRTX',   sub: 'Stealth · 3h ago' },
          { label: 'ZK Transfer',     amount: '+82 KRTX',   sub: 'Received · 5h ago' },
        ].map((tx) => (
          <div key={tx.label} className="flex items-center justify-between py-2.5 border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-emerald-500/15 flex items-center justify-center">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div>
                <p className="text-white text-[10px] font-medium">{tx.label}</p>
                <p className="text-gray-500 text-[9px]">{tx.sub}</p>
              </div>
            </div>
            <p className={`text-[10px] font-semibold ${tx.amount.startsWith('+') ? 'text-emerald-400' : 'text-amber-400'}`}>{tx.amount}</p>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="flex justify-around items-center px-4 py-3 flex-shrink-0"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.5)' }}>
        {[{ icon: '⌂', label: 'Home', active: true }, { icon: '◎', label: 'Earn' }, { icon: '⊞', label: 'Assets' }, { icon: '⚙', label: 'Settings' }].map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-0.5">
            <span className={`text-base ${item.active ? 'text-emerald-400' : 'text-gray-600'}`}>{item.icon}</span>
            <span className={`text-[8px] ${item.active ? 'text-emerald-400' : 'text-gray-600'}`}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Screen: Staking ───────────────────────────────────────────────────────────
function StakingScreen({ confirming, success }: { confirming: boolean; success: boolean }) {
  const pools = [
    { name: 'Flex Pool',    apy: '42%',  lock: 'No lock',   color: '#10b981' },
    { name: '30-Day Pool',  apy: '89%',  lock: '30 days',   color: '#14b8a6' },
    { name: '90-Day Pool',  apy: '145%', lock: '90 days',   color: '#f59e0b' },
  ];

  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(180deg,#020c14 0%,#041c14 55%,#020c14 100%)' }}>
      <StatusBar />

      <div className="px-5 pt-1 pb-3 flex-shrink-0">
        <p className="text-gray-400 text-[10px] mb-0.5">‹ Back</p>
        <p className="text-white text-base font-bold">Stack KRTX</p>
      </div>

      {/* Selected pool highlight */}
      <div className="mx-4 mb-3 flex-shrink-0">
        <p className="text-gray-500 text-[10px] uppercase tracking-wider mb-2">Choose Pool</p>
        <div className="space-y-2">
          {pools.map((pool, i) => (
            <motion.div
              key={pool.name}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl"
              style={{
                background: i === 1 && !success ? `${pool.color}22` : 'rgba(255,255,255,0.04)',
                border: `1px solid ${i === 1 && !success ? pool.color + '55' : 'rgba(255,255,255,0.07)'}`,
              }}
              animate={i === 1 && !success ? { scale: [1, 1.02, 1] } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}>
              <div>
                <p className="text-white text-[11px] font-semibold">{pool.name}</p>
                <p className="text-gray-500 text-[9px]">{pool.lock}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm" style={{ color: pool.color }}>{pool.apy}</p>
                <p className="text-gray-500 text-[9px]">APY</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Amount */}
      <div className="mx-4 mb-4 rounded-xl px-4 py-3 flex-shrink-0"
        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
        <p className="text-gray-500 text-[10px] mb-0.5">Amount to Stack</p>
        <p className="text-white text-xl font-bold">1,000 KRTX</p>
        <p className="text-emerald-400 text-[10px]">Est. reward: +890 KRTX / year</p>
      </div>

      {/* Confirm button */}
      <div className="mx-4 flex-shrink-0">
        <AnimatePresence mode="wait">
          {success ? (
            <motion.div key="ok"
              className="w-full rounded-2xl py-4 flex items-center justify-center gap-2"
              style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.5)' }}
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-bold text-sm">Stacked Successfully!</span>
            </motion.div>
          ) : (
            <motion.div key="stake"
              className="w-full rounded-2xl py-4 flex items-center justify-center gap-2"
              style={{ background: confirming ? 'rgba(16,185,129,0.3)' : 'linear-gradient(90deg,#059669,#0d9488)' }}
              animate={confirming ? { boxShadow: ['0 0 0 0 rgba(16,185,129,0)', '0 0 0 10px rgba(16,185,129,0.3)', '0 0 0 0 rgba(16,185,129,0)'] } : {}}
              transition={{ duration: 0.5 }}>
              {confirming
                ? <motion.div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }} transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }} />
                : <Layers className="w-4 h-4 text-white" />}
              <span className="text-white font-bold text-sm">
                {confirming ? 'Stacking…' : 'Stack Now'}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Success details */}
      <AnimatePresence>
        {success && (
          <motion.div className="mx-4 mt-3 rounded-xl px-4 py-3"
            style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
            <div className="flex justify-between mb-1.5">
              <span className="text-gray-400 text-[10px]">Stacked</span>
              <span className="text-white text-[10px] font-semibold">1,000 KRTX</span>
            </div>
            <div className="flex justify-between mb-1.5">
              <span className="text-gray-400 text-[10px]">Pool</span>
              <span className="text-teal-400 text-[10px] font-semibold">30-Day · 89% APY</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 text-[10px]">Next reward</span>
              <span className="text-emerald-400 text-[10px] font-semibold">+2.44 KRTX / day</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Screen: Airdrop ───────────────────────────────────────────────────────────
function AirdropScreen({ claiming, success }: { claiming: boolean; success: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(180deg,#0c0a02 0%,#1c140a 55%,#0c0a02 100%)' }}>
      <StatusBar />

      <div className="px-5 pt-1 pb-2 flex-shrink-0">
        <p className="text-gray-400 text-[10px] mb-0.5">‹ Back</p>
        <p className="text-white text-base font-bold">Airdrop Claim</p>
      </div>

      {/* Hero card */}
      <div className="mx-4 mb-4 rounded-2xl p-4 flex-shrink-0 flex flex-col items-center text-center"
        style={{ background: 'linear-gradient(135deg,rgba(245,158,11,0.15),rgba(251,191,36,0.08))', border: '1px solid rgba(245,158,11,0.3)' }}>
        <motion.div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3"
          style={{ background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(245,158,11,0.4)' }}
          animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
          <Gift className="w-8 h-8 text-amber-400" />
        </motion.div>
        <p className="text-white text-2xl font-bold mb-0.5">250 KRTX</p>
        <p className="text-amber-400 text-[11px]">Genesis Airdrop · Early Supporter</p>
      </div>

      {/* Eligibility checks */}
      <div className="mx-4 mb-4 space-y-2 flex-shrink-0">
        <p className="text-gray-500 text-[10px] uppercase tracking-wider mb-1">Eligibility</p>
        {[
          { label: 'Solana wallet connected', ok: true },
          { label: 'Held wallet before snapshot', ok: true },
          { label: 'KYC not required', ok: true },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span className="text-gray-300 text-[10px]">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Countdown / timer */}
      {!success && (
        <div className="mx-4 mb-4 flex-shrink-0 flex items-center gap-2 rounded-xl px-3 py-2"
          style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)' }}>
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-amber-300 text-[10px]">Expires in: <span className="font-bold">23:14:07</span></span>
        </div>
      )}

      {/* Claim button */}
      <div className="mx-4 flex-shrink-0">
        <AnimatePresence mode="wait">
          {success ? (
            <motion.div key="ok"
              className="w-full rounded-2xl py-4 flex flex-col items-center justify-center gap-1"
              style={{ background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(245,158,11,0.5)' }}
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                <span className="text-amber-400 font-bold text-sm">Airdrop Claimed!</span>
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              </div>
              <span className="text-amber-300/70 text-[10px]">+250 KRTX added to your wallet</span>
            </motion.div>
          ) : (
            <motion.div key="claim"
              className="w-full rounded-2xl py-4 flex items-center justify-center gap-2"
              style={{ background: claiming ? 'rgba(245,158,11,0.3)' : 'linear-gradient(90deg,#d97706,#f59e0b)' }}
              animate={claiming ? { boxShadow: ['0 0 0 0 rgba(245,158,11,0)', '0 0 0 10px rgba(245,158,11,0.3)', '0 0 0 0 rgba(245,158,11,0)'] } : {
                boxShadow: ['0 0 16px rgba(245,158,11,0.3)', '0 0 28px rgba(245,158,11,0.5)', '0 0 16px rgba(245,158,11,0.3)'],
              }}
              transition={{ duration: claiming ? 0.5 : 2, repeat: claiming ? 0 : Infinity }}>
              {claiming
                ? <motion.div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }} transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }} />
                : <Gift className="w-4 h-4 text-white" />}
              <span className="text-white font-bold text-sm">
                {claiming ? 'Claiming…' : 'Claim 250 KRTX'}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ── Step config ───────────────────────────────────────────────────────────────
type DemoStep =
  | 'dash'
  | 'stake-tap'
  | 'stake-form'
  | 'stake-confirm'
  | 'stake-success'
  | 'dash2'
  | 'airdrop-tap'
  | 'airdrop-screen'
  | 'airdrop-confirm'
  | 'airdrop-success';

const STEPS: { step: DemoStep; label: string; desc: string; duration: number; tap?: { x: number; y: number } }[] = [
  { step: 'dash',            label: 'Dashboard',               desc: 'Wallet overview with KRTX balance',          duration: 1800 },
  { step: 'stake-tap',       label: 'Tapping Stack…',          desc: 'Opening the staking pools',                  duration: 600,  tap: { x: 110, y: 318 } },
  { step: 'stake-form',      label: 'Choose your pool',        desc: 'Selecting 30-Day pool at 89% APY',           duration: 1800 },
  { step: 'stake-confirm',   label: 'Stacking…',               desc: 'Locking 1,000 KRTX into the pool',           duration: 600,  tap: { x: 152, y: 450 } },
  { step: 'stake-success',   label: '✓ Stacked!',              desc: '+2.44 KRTX reward every day',                duration: 2000 },
  { step: 'dash2',           label: 'Airdrop alert!',          desc: 'Genesis airdrop available to claim',         duration: 1600 },
  { step: 'airdrop-tap',     label: 'Tapping Airdrop…',        desc: 'Opening the airdrop claim page',             duration: 600,  tap: { x: 200, y: 318 } },
  { step: 'airdrop-screen',  label: '250 KRTX incoming',       desc: 'Eligibility confirmed — ready to claim',     duration: 2000 },
  { step: 'airdrop-confirm', label: 'Claiming…',               desc: 'Sending tokens to your wallet',              duration: 600,  tap: { x: 152, y: 470 } },
  { step: 'airdrop-success', label: '🎉 Airdrop claimed!',     desc: '+250 KRTX added to your balance',            duration: 2200 },
];

// ── Phone shell ───────────────────────────────────────────────────────────────
function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 rounded-[3.5rem] p-3 shadow-2xl shadow-emerald-500/30 border-[4px] border-slate-800/50"
      style={{ width: 300 }}>
      <div className="relative bg-slate-950 rounded-[3rem] overflow-hidden border border-slate-800/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-6 bg-slate-950 rounded-b-[1.6rem] z-50 border-x border-b border-slate-800/30 flex items-center justify-center gap-2">
          <Camera className="w-1.5 h-1.5 text-slate-600" />
          <div className="w-10 h-1.5 bg-slate-800 rounded-full" />
        </div>
        <div className="relative overflow-hidden" style={{ height: 600 }}>
          {children}
        </div>
      </div>
      <div className="absolute -right-[4px] top-28 w-[4px] h-14 bg-slate-700 rounded-l-md" />
      <div className="absolute -right-[4px] top-48 w-[4px] h-20 bg-slate-700 rounded-l-md" />
      <div className="absolute -left-[4px] top-44 w-[4px] h-12 bg-slate-700 rounded-r-md" />
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export function AutoDemo() {
  const [stepIndex, setStepIndex] = useState(0);
  const [tapKey, setTapKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const cfg = STEPS[stepIndex];
  const step = cfg.step;

  useEffect(() => {
    if (cfg.tap) setTapKey((k) => k + 1);
    timerRef.current = setTimeout(() => {
      setStepIndex((i) => (i + 1) % STEPS.length);
    }, cfg.duration);
    return () => clearTimeout(timerRef.current);
  }, [stepIndex]);

  const isStaking  = ['stake-form', 'stake-confirm', 'stake-success'].includes(step);
  const isAirdrop  = ['airdrop-screen', 'airdrop-confirm', 'airdrop-success'].includes(step);
  const isDash2    = step === 'dash2';
  const isDash     = step === 'dash' || step === 'stake-tap' || step === 'airdrop-tap';

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-5 py-2.5 mb-6">
            <Sparkles className="w-4 h-4 text-teal-400 animate-pulse" />
            <span className="text-teal-300 text-sm font-medium">Auto Demo — Stacking & Airdrop</span>
          </div>
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
            Earn with{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 bg-clip-text text-transparent">
              KryptonX
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Watch how stacking and airdrop claims work — fully automated, fully private.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">

          {/* Stacked phones */}
          <motion.div className="relative flex justify-center items-center"
            style={{ width: 360, height: 660 }}
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 1.2 }}>

            {/* Glow */}
            <motion.div
              className="absolute inset-0 rounded-full blur-[100px]"
              style={{ background: isAirdrop ? 'radial-gradient(ellipse,rgba(245,158,11,0.25),transparent 70%)' : 'radial-gradient(ellipse,rgba(16,185,129,0.25),transparent 70%)' }}
              animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Rotating ring */}
            <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none"
              animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}>
              <div className="w-[420px] h-[420px] border border-emerald-500/15 rounded-full" />
            </motion.div>

            {/* Back phone right */}
            <div className="absolute" style={{ transform: 'translateX(56px) translateY(22px) rotate(9deg) scale(0.86)', transformOrigin: 'bottom center', zIndex: 1, opacity: 0.4 }}>
              <PhoneShell>
                <div className="absolute inset-0 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg,#0f172a,#1a2744)' }}>
                  <Layers className="w-16 h-16 text-emerald-900/60" />
                </div>
              </PhoneShell>
            </div>

            {/* Back phone left */}
            <div className="absolute" style={{ transform: 'translateX(-56px) translateY(22px) rotate(-9deg) scale(0.86)', transformOrigin: 'bottom center', zIndex: 1, opacity: 0.4 }}>
              <PhoneShell>
                <div className="absolute inset-0 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg,#0f172a,#1a1005)' }}>
                  <Gift className="w-16 h-16 text-amber-900/60" />
                </div>
              </PhoneShell>
            </div>

            {/* Front phone — demo */}
            <motion.div className="relative z-10"
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
              <div style={{ perspective: 1800 }}>
                <motion.div
                  whileHover={{ rotateY: 8, rotateX: -6, scale: 1.04 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformStyle: 'preserve-3d' }}>
                  <PhoneShell>
                    {/* Tap cursor */}
                    <AnimatePresence>
                      {cfg.tap && <TapCursor key={tapKey} x={cfg.tap.x} y={cfg.tap.y} id={tapKey} />}
                    </AnimatePresence>

                    {/* Screens — single child so AnimatePresence mode="wait" works correctly */}
                    {(() => {
                      const screenKey = isStaking ? 'stake' : isAirdrop ? 'airdrop' : isDash2 || step === 'airdrop-tap' ? 'dash2' : 'dash';
                      const slideX = screenKey === 'stake' || screenKey === 'airdrop' ? 60 : 0;
                      return (
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={screenKey}
                            className="absolute inset-0"
                            initial={{ opacity: 0, x: slideX, scale: slideX ? 1 : 0.97 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -slideX, scale: slideX ? 1 : 0.97 }}
                            transition={{ duration: 0.32 }}
                          >
                            {screenKey === 'dash' && (
                              <DashboardScreen highlightStake={step === 'stake-tap'} highlightAirdrop={false} />
                            )}
                            {screenKey === 'dash2' && (
                              <DashboardScreen highlightStake={false} highlightAirdrop={true} />
                            )}
                            {screenKey === 'stake' && (
                              <StakingScreen confirming={step === 'stake-confirm'} success={step === 'stake-success'} />
                            )}
                            {screenKey === 'airdrop' && (
                              <AirdropScreen claiming={step === 'airdrop-confirm'} success={step === 'airdrop-success'} />
                            )}
                          </motion.div>
                        </AnimatePresence>
                      );
                    })()}
                  </PhoneShell>

                  {/* Phone glow */}
                  <motion.div
                    className="absolute inset-0 rounded-[3.5rem] blur-3xl -z-10"
                    style={{ background: isAirdrop ? 'linear-gradient(180deg,rgba(245,158,11,0.12),transparent,rgba(245,158,11,0.08))' : 'linear-gradient(180deg,rgba(16,185,129,0.12),transparent,rgba(20,184,166,0.08))' }}
                    animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.06, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Info panel */}
          <motion.div className="max-w-sm w-full"
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>

            {/* Current step */}
            <div className="mb-8">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-2 font-medium">Now showing</p>
              <AnimatePresence mode="wait">
                <motion.div key={step}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}>
                  <p className="text-white text-2xl font-bold mb-1">{cfg.label}</p>
                  <p className="text-gray-400 text-sm">{cfg.desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress dots */}
            <div className="flex items-center gap-1.5 mb-10">
              {STEPS.map((s, i) => (
                <motion.div key={s.step}
                  className="h-1.5 rounded-full transition-all duration-400"
                  style={{
                    width: i === stepIndex ? 28 : 7,
                    background: i === stepIndex
                      ? (isAirdrop || isDash2 ? 'linear-gradient(90deg,#d97706,#f59e0b)' : 'linear-gradient(90deg,#10b981,#14b8a6)')
                      : 'rgba(255,255,255,0.12)',
                  }}
                />
              ))}
            </div>

            {/* Feature cards */}
            <div className="space-y-3">
              {[
                {
                  icon: Layers,
                  title: 'Private Stacking',
                  desc: 'Stake KRTX anonymously across multiple pools. Rewards auto-compound — no one knows your position.',
                  color: 'emerald',
                },
                {
                  icon: Gift,
                  title: 'Airdrop Claims',
                  desc: 'Claim genesis and community airdrops directly in-app. No third-party sites, no risk.',
                  color: 'amber',
                },
                {
                  icon: Zap,
                  title: 'Instant Finality',
                  desc: 'Solana-powered — staking and airdrop transactions settle in under a second.',
                  color: 'teal',
                },
              ].map((f, i) => {
                const colorMap: Record<string, string> = {
                  emerald: 'rgba(16,185,129,',
                  amber:   'rgba(245,158,11,',
                  teal:    'rgba(20,184,166,',
                };
                const c = colorMap[f.color];
                return (
                  <motion.div key={f.title}
                    className="flex gap-3 p-3 rounded-xl"
                    style={{ background: `${c}0.06)`, border: `1px solid ${c}0.15)` }}
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.1 }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${c}0.15)`, border: `1px solid ${c}0.3)` }}>
                      <f.icon className="w-4 h-4" style={{ color: f.color === 'amber' ? '#f59e0b' : f.color === 'teal' ? '#14b8a6' : '#10b981' }} />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold mb-0.5">{f.title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
