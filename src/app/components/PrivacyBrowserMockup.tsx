import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield, Lock, Eye, EyeOff, CheckCircle, XCircle, Zap,
  Globe, Wifi, AlertTriangle, ChevronDown, Copy, ExternalLink,
  RefreshCw, ArrowRight, Activity
} from 'lucide-react';
import { KryptonXLogo } from './KryptonXLogo';

// ── Types ────────────────────────────────────────────────────────────────────
type PrivacyMode = 'public' | 'stealth' | 'maximum';
type AnimPhase = 'idle' | 'encrypting' | 'done';

// ── Extension Popup ──────────────────────────────────────────────────────────
function ExtensionPopup({
  mode, setMode, phase
}: {
  mode: PrivacyMode;
  setMode: (m: PrivacyMode) => void;
  phase: AnimPhase;
}) {
  const modes: { key: PrivacyMode; label: string; color: string }[] = [
    { key: 'public',  label: 'Public',  color: 'text-gray-400' },
    { key: 'stealth', label: 'Stealth', color: 'text-teal-400' },
    { key: 'maximum', label: 'Maximum', color: 'text-emerald-400' },
  ];

  const stats = [
    { label: 'ZK Proofs',   value: phase === 'done' ? 'Active' : 'Standby', ok: phase === 'done' },
    { label: 'Encryption',  value: mode === 'maximum' ? 'AES-256' : mode === 'stealth' ? 'ChaCha20' : 'None', ok: mode !== 'public' },
    { label: 'Tor Routing', value: mode === 'maximum' ? 'Enabled' : 'Off', ok: mode === 'maximum' },
    { label: 'Ring Sig',    value: mode !== 'public' ? 'On' : 'Off', ok: mode !== 'public' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="absolute top-10 right-3 z-20 w-52"
      style={{
        background: 'linear-gradient(145deg,#0f1e32,#0a1424)',
        borderRadius: 14,
        border: '1px solid rgba(16,185,129,0.25)',
        boxShadow: '0 16px 48px rgba(0,0,0,0.7), 0 0 24px rgba(16,185,129,0.1)',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 pt-3 pb-2 border-b border-white/5">
        <div className="flex items-center gap-1.5">
          <KryptonXLogo size={18} animated={false} showText={false} />
          <span className="text-white text-[11px] font-semibold">KryptonX</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-[9px]">Connected</span>
        </div>
      </div>

      {/* Wallet */}
      <div className="px-3 py-2 border-b border-white/5">
        <div className="text-[8px] text-gray-500 mb-1">Active Wallet</div>
        <div className="flex items-center justify-between">
          <code className="text-[10px] text-gray-300 font-mono">
            {mode !== 'public' ? '0x•••• ···· 3f2a' : '0x1a2b3c4d···3f2a'}
          </code>
          <Copy className="w-3 h-3 text-gray-600 hover:text-gray-400 cursor-pointer" />
        </div>
        <div className="text-[10px] text-white font-semibold mt-0.5">
          {mode !== 'public' ? '••••• KRTX' : '4,280.00 KRTX'}
        </div>
      </div>

      {/* Privacy Mode */}
      <div className="px-3 py-2 border-b border-white/5">
        <div className="text-[8px] text-gray-500 mb-1.5 uppercase tracking-widest">Privacy Mode</div>
        <div className="flex gap-1">
          {modes.map(m => (
            <button
              key={m.key}
              onClick={() => setMode(m.key)}
              className={`flex-1 py-1 rounded-lg text-[8px] font-semibold transition-all border ${
                mode === m.key
                  ? m.key === 'maximum'
                    ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                    : m.key === 'stealth'
                    ? 'bg-teal-500/20 border-teal-500/50 text-teal-300'
                    : 'bg-gray-700/50 border-gray-600 text-gray-300'
                  : 'bg-transparent border-transparent text-gray-600 hover:text-gray-400'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="px-3 py-2">
        <div className="flex flex-col gap-1.5">
          {stats.map(s => (
            <div key={s.label} className="flex items-center justify-between">
              <span className="text-[9px] text-gray-500">{s.label}</span>
              <div className="flex items-center gap-1">
                <div className={`w-1.5 h-1.5 rounded-full ${s.ok ? 'bg-emerald-400' : 'bg-gray-600'}`} />
                <span className={`text-[9px] font-medium ${s.ok ? 'text-emerald-400' : 'text-gray-600'}`}>
                  {s.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer button */}
      <div className="px-3 pb-3">
        <button className="w-full py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[9px] font-semibold hover:bg-emerald-500/25 transition-all flex items-center justify-center gap-1">
          <Zap className="w-2.5 h-2.5" />
          Send Private Transaction
        </button>
      </div>
    </motion.div>
  );
}

// ── Transaction Field ────────────────────────────────────────────────────────
function TxField({
  label, value, masked, delay = 0, danger = false
}: {
  label: string; value: string; masked?: boolean; delay?: number; danger?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0"
    >
      <span className="text-[9px] text-gray-500 uppercase tracking-widest w-16 flex-shrink-0">{label}</span>
      <AnimatePresence mode="wait">
        {masked ? (
          <motion.div
            key="masked"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-1"
          >
            <Lock className="w-2.5 h-2.5 text-emerald-400" />
            <span className="text-[9px] font-mono text-emerald-400 tracking-wider">{'█'.repeat(Math.min(value.length, 14))}</span>
          </motion.div>
        ) : (
          <motion.span
            key="visible"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`text-[9px] font-mono truncate max-w-[130px] ${danger ? 'text-orange-300' : 'text-gray-300'}`}
          >
            {value}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Split Comparison Panel ───────────────────────────────────────────────────
function ComparisonPanel({ mode, phase }: { mode: PrivacyMode; phase: AnimPhase }) {
  const isPrivate = phase === 'done' && mode !== 'public';

  const txData = [
    { label: 'From',     value: '0x1a2b3c4d5e6f7890abcdef' },
    { label: 'To',       value: '0x9f8e7d6c5b4a3210fedcba' },
    { label: 'Amount',   value: '4,280.00 KRTX ($1,284)' },
    { label: 'IP Addr',  value: '192.168.1.104 · US-CA' },
    { label: 'Gas',      value: '0.000021 SOL' },
    { label: 'Memo',     value: 'Payment for services' },
  ];

  return (
    <div className="flex gap-3 p-4 h-full">
      {/* LEFT — Public/Exposed */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-2 h-2 rounded-full bg-orange-400" />
          <span className="text-[9px] font-bold text-orange-400 uppercase tracking-widest">Standard Tx</span>
        </div>
        <div
          className="flex-1 rounded-xl p-3 flex flex-col"
          style={{
            background: 'rgba(251,146,60,0.04)',
            border: '1px solid rgba(251,146,60,0.15)',
          }}
        >
          {txData.map((f, i) => (
            <TxField key={f.label} label={f.label} value={f.value} delay={i * 0.04} danger />
          ))}
          <div className="mt-auto pt-2">
            <div className="flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 rounded-lg px-2 py-1.5">
              <AlertTriangle className="w-3 h-3 text-orange-400 flex-shrink-0" />
              <span className="text-[9px] text-orange-300 font-medium">All data publicly visible on-chain</span>
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {['Traceable', 'Identifiable', 'Exposed'].map(t => (
                <span key={t} className="text-[8px] px-1.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/15">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CENTER — Arrow + encryption animation */}
      <div className="flex flex-col items-center justify-center gap-2 flex-shrink-0 w-10">
        <motion.div
          animate={phase === 'encrypting' ? { scale: [1, 1.2, 1], rotate: [0, 180, 360] } : {}}
          transition={{ duration: 1, repeat: phase === 'encrypting' ? Infinity : 0 }}
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500 ${
            phase === 'encrypting'
              ? 'bg-emerald-500/30 border border-emerald-500'
              : phase === 'done'
              ? 'bg-emerald-500/20 border border-emerald-500/50'
              : 'bg-slate-800 border border-slate-700'
          }`}
        >
          {phase === 'encrypting' ? (
            <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
          )}
        </motion.div>

        {phase !== 'idle' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col gap-1"
          >
            {[0, 1, 2, 3].map(i => (
              <motion.div
                key={i}
                className="w-1 h-1 rounded-full bg-emerald-400"
                animate={{ opacity: [0.2, 1, 0.2], y: [0, -3, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </motion.div>
        )}
      </div>

      {/* RIGHT — KryptonX / Private */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-1.5 mb-2">
          <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${isPrivate ? 'bg-emerald-400' : 'bg-gray-600'}`} />
          <span className={`text-[9px] font-bold uppercase tracking-widest transition-colors duration-500 ${isPrivate ? 'text-emerald-400' : 'text-gray-600'}`}>
            KryptonX Tx
          </span>
        </div>
        <div
          className="flex-1 rounded-xl p-3 flex flex-col transition-all duration-700"
          style={{
            background: isPrivate ? 'rgba(16,185,129,0.05)' : 'rgba(255,255,255,0.02)',
            border: isPrivate ? '1px solid rgba(16,185,129,0.2)' : '1px solid rgba(255,255,255,0.05)',
          }}
        >
          {txData.map((f, i) => (
            <TxField
              key={f.label}
              label={f.label}
              value={f.value}
              masked={isPrivate}
              delay={i * 0.05}
            />
          ))}
          <div className="mt-auto pt-2">
            <AnimatePresence mode="wait">
              {isPrivate ? (
                <motion.div
                  key="private"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-1.5"
                >
                  <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-2 py-1.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                    <span className="text-[9px] text-emerald-300 font-medium">ZK-proof verified · Fully encrypted</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {['Anonymous', 'Encrypted', 'Private'].map(t => (
                      <span key={t} className="text-[8px] px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/15">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="pending"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1.5 bg-slate-800/50 border border-slate-700/50 rounded-lg px-2 py-1.5"
                >
                  <Shield className="w-3 h-3 text-gray-600 flex-shrink-0" />
                  <span className="text-[9px] text-gray-600">Enable privacy mode to protect</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Browser Mockup ───────────────────────────────────────────────────────────
function BrowserMockup({
  mode, setMode, phase, onActivate
}: {
  mode: PrivacyMode;
  setMode: (m: PrivacyMode) => void;
  phase: AnimPhase;
  onActivate: () => void;
}) {
  const [showExt, setShowExt] = useState(true);

  return (
    <div
      className="relative w-full"
      style={{
        borderRadius: 14,
        overflow: 'visible',
        filter: 'drop-shadow(0 32px 80px rgba(0,0,0,0.7)) drop-shadow(0 0 40px rgba(16,185,129,0.08))',
      }}
    >
      {/* Browser shell */}
      <div
        style={{
          borderRadius: 14,
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
          background: 'linear-gradient(180deg,#1a1f2e,#141824)',
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-3 px-4"
          style={{
            height: 40,
            background: 'linear-gradient(180deg,#1e2436,#191e2c)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>

          {/* Tabs */}
          <div className="flex items-end gap-1 ml-2 flex-1">
            <div
              className="flex items-center gap-1.5 px-3 text-[10px] text-gray-300 rounded-t-lg"
              style={{ height: 26, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)', borderBottom: 'none' }}
            >
              <Globe className="w-2.5 h-2.5 text-emerald-400 flex-shrink-0" />
              <span className="truncate max-w-[100px]">KryptonX — Privacy Tx</span>
            </div>
            <div
              className="flex items-center gap-1 px-2.5 text-[10px] text-gray-600 rounded-t-lg"
              style={{ height: 23, background: 'rgba(255,255,255,0.02)' }}
            >
              <span className="truncate max-w-[80px]">Solana Explorer</span>
            </div>
          </div>

          {/* Extension area */}
          <button
            onClick={() => setShowExt(v => !v)}
            className="relative flex-shrink-0 flex items-center gap-1 hover:opacity-80 transition-opacity"
          >
            <KryptonXLogo size={18} animated={false} showText={false} />
            {showExt && (
              <motion.div
                className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </button>
        </div>

        {/* Address bar */}
        <div
          className="flex items-center gap-3 px-4"
          style={{
            height: 36,
            background: 'rgba(0,0,0,0.2)',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
          }}
        >
          <div className="flex items-center gap-1 text-gray-600">
            <div className="w-3 h-3 rounded-sm border border-gray-700 flex items-center justify-center">
              <div className="w-1 h-1 bg-gray-600 rounded-sm" />
            </div>
            <div className="w-3 h-3 rounded-sm border border-gray-700 flex items-center justify-center">
              <div className="w-1 h-1 bg-gray-600 rounded-sm" />
            </div>
            <RefreshCw className="w-3 h-3 ml-1" />
          </div>
          <div
            className="flex-1 flex items-center gap-2 px-3 rounded-lg"
            style={{ height: 24, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <Lock className="w-2.5 h-2.5 text-emerald-400" />
            <span className="text-[10px] text-gray-400 font-mono">app.kryptonx.io/private-send</span>
          </div>
          <ExternalLink className="w-3 h-3 text-gray-700" />
        </div>

        {/* Extension popup */}
        <div className="relative">
          {showExt && (
            <ExtensionPopup mode={mode} setMode={setMode} phase={phase} />
          )}
        </div>

        {/* Section header bar inside browser */}
        <div
          className="flex items-center justify-between px-4 py-2 border-b border-white/5"
          style={{ background: 'rgba(0,0,0,0.15)' }}
        >
          <div className="flex items-center gap-2">
            <Activity className="w-3 h-3 text-emerald-400" />
            <span className="text-[10px] text-gray-400 font-semibold">Transaction Privacy Comparison</span>
          </div>
          <button
            onClick={onActivate}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-semibold transition-all ${
              phase === 'idle'
                ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30'
                : phase === 'encrypting'
                ? 'bg-teal-500/20 border border-teal-500/40 text-teal-300'
                : 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400'
            }`}
          >
            {phase === 'idle' ? (
              <><Zap className="w-2.5 h-2.5" /> Activate KryptonX</>
            ) : phase === 'encrypting' ? (
              <><RefreshCw className="w-2.5 h-2.5 animate-spin" /> Encrypting…</>
            ) : (
              <><CheckCircle className="w-2.5 h-2.5" /> Protected</>
            )}
          </button>
        </div>

        {/* Main content — split comparison */}
        <div style={{ height: 280 }}>
          <ComparisonPanel mode={mode} phase={phase} />
        </div>

        {/* Status bar */}
        <div
          className="flex items-center justify-between px-4"
          style={{
            height: 24,
            background: 'rgba(0,0,0,0.25)',
            borderTop: '1px solid rgba(255,255,255,0.04)',
          }}
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Wifi className="w-2.5 h-2.5 text-emerald-500/60" />
              <span className="text-[8px] text-emerald-500/60">Solana Mainnet</span>
            </div>
            <span className="text-[8px] text-gray-700">·</span>
            <span className="text-[8px] text-gray-600">Slot #285,440,192</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[8px] text-emerald-500/70">KryptonX Extension v2.1.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Section ─────────────────────────────────────────────────────────────
export function PrivacyBrowserMockup() {
  const [mode, setMode] = useState<PrivacyMode>('stealth');
  const [phase, setPhase] = useState<AnimPhase>('idle');

  // Auto-demo loop
  useEffect(() => {
    const cycle = () => {
      setPhase('idle');
      setTimeout(() => setPhase('encrypting'), 1200);
      setTimeout(() => setPhase('done'), 3000);
      setTimeout(() => {
        setPhase('idle');
      }, 7000);
    };
    cycle();
    const t = setInterval(cycle, 9000);
    return () => clearInterval(t);
  }, []);

  const handleActivate = () => {
    if (phase !== 'idle') return;
    setPhase('encrypting');
    setTimeout(() => setPhase('done'), 1800);
    setTimeout(() => setPhase('idle'), 7000);
  };

  const features = [
    { icon: Shield,   title: 'Browser Extension',      desc: 'One-click privacy control directly in your browser — like MetaMask, but for anonymity.' },
    { icon: EyeOff,   title: 'Real-Time Encryption',   desc: 'Watch your transaction data transform from fully public to completely masked, in real time.' },
    { icon: Activity, title: 'ZK-Proof Verification',  desc: 'Zero-knowledge proofs validate each transaction without exposing any on-chain data.' },
    { icon: Globe,    title: 'Multi-Mode Privacy',      desc: 'Choose Public, Stealth, or Maximum privacy per transaction based on your needs.' },
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="absolute top-32 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <Globe className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm">Privacy in Action</span>
          </div>
          <h2 className="text-white text-4xl sm:text-5xl mb-4">
            See the Difference{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Live
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            One browser extension. Every transaction shielded. Your data stays yours — verified by zero-knowledge proofs on Solana.
          </p>
        </div>

        {/* Browser mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-16"
        >
          <BrowserMockup
            mode={mode}
            setMode={setMode}
            phase={phase}
            onActivate={handleActivate}
          />
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.45 }}
              className="group bg-gradient-to-br from-slate-900/60 to-slate-800/30 border border-white/5 hover:border-emerald-500/25 rounded-2xl p-5 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 group-hover:border-emerald-500/40 flex items-center justify-center mb-3 transition-all duration-300">
                <f.icon className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-white text-sm font-semibold mb-1.5">{f.title}</div>
              <div className="text-gray-500 text-xs leading-relaxed">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
