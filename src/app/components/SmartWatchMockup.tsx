import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield, Zap, Eye, EyeOff, Send, ArrowDownLeft, ArrowUpRight,
  Lock, Wifi, Battery, Heart, ChevronRight, Check
} from 'lucide-react';

// ── Screens ──────────────────────────────────────────────────────────────────
type Screen = 'home' | 'stealth' | 'transactions' | 'send';

const screens: Screen[] = ['home', 'stealth', 'transactions', 'send'];

// ── Live Clock Hook ───────────────────────────────────────────────────────────
function useClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const h = time.getHours().toString().padStart(2, '0');
  const m = time.getMinutes().toString().padStart(2, '0');
  const s = time.getSeconds().toString().padStart(2, '0');
  return { h, m, s };
}

// ── Screen: Home ─────────────────────────────────────────────────────────────
function HomeScreen({ stealthOn }: { stealthOn: boolean }) {
  const { h, m } = useClock();
  return (
    <div className="flex flex-col items-center justify-between h-full py-3 px-2">
      {/* Status bar */}
      <div className="flex items-center justify-between w-full px-1">
        <span className="text-[9px] text-emerald-400/60">KryptonX</span>
        <div className="flex items-center gap-1">
          <Wifi className="w-2.5 h-2.5 text-emerald-400/60" />
          <Battery className="w-3 h-3 text-emerald-400/60" />
        </div>
      </div>

      {/* Time */}
      <div className="text-center">
        <div className="text-4xl font-thin text-white tracking-tight tabular-nums">
          {h}<span className="animate-pulse text-emerald-400">:</span>{m}
        </div>
        <div className="text-[9px] text-gray-500 mt-0.5 tracking-widest uppercase">
          {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
        </div>
      </div>

      {/* Balance */}
      <div className="text-center">
        <div className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">Balance</div>
        <div className="text-lg font-semibold text-white tabular-nums">
          {stealthOn ? (
            <span className="tracking-widest text-emerald-400">••• •••</span>
          ) : (
            <span>4,280 <span className="text-[11px] text-emerald-400">KRTX</span></span>
          )}
        </div>
        <div className="text-[9px] text-gray-500">
          {stealthOn ? '🔒 Hidden' : '≈ $1,284.00'}
        </div>
      </div>

      {/* Stealth indicator */}
      <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-medium transition-all duration-500 ${
        stealthOn
          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
          : 'bg-gray-800/60 text-gray-500 border border-gray-700/40'
      }`}>
        {stealthOn ? <Lock className="w-2.5 h-2.5" /> : <Eye className="w-2.5 h-2.5" />}
        {stealthOn ? 'Stealth ON' : 'Public Mode'}
      </div>
    </div>
  );
}

// ── Screen: Stealth Mode ─────────────────────────────────────────────────────
function StealthScreen({
  stealthOn, setStealthOn
}: {
  stealthOn: boolean;
  setStealthOn: (v: boolean) => void;
}) {
  return (
    <div className="flex flex-col items-center justify-between h-full py-3 px-3">
      <div className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">Privacy Mode</div>

      {/* Shield */}
      <div className="relative flex items-center justify-center">
        <motion.div
          className={`absolute w-20 h-20 rounded-full blur-2xl transition-colors duration-700 ${
            stealthOn ? 'bg-emerald-500/30' : 'bg-gray-600/20'
          }`}
          animate={stealthOn ? { scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] } : { scale: 1, opacity: 0.2 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className={`relative w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 ${
            stealthOn
              ? 'bg-emerald-500/20 border-emerald-500/60'
              : 'bg-gray-800/50 border-gray-600/40'
          }`}
          animate={stealthOn ? { rotate: [0, 2, -2, 0] } : {}}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Shield className={`w-7 h-7 transition-colors duration-500 ${stealthOn ? 'text-emerald-400' : 'text-gray-500'}`} />
        </motion.div>
      </div>

      {/* Status text */}
      <div className="text-center">
        <motion.div
          key={stealthOn ? 'on' : 'off'}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-sm font-semibold ${stealthOn ? 'text-emerald-400' : 'text-gray-400'}`}
        >
          {stealthOn ? 'Maximum Privacy' : 'Standard Mode'}
        </motion.div>
        <div className="text-[9px] text-gray-500 mt-0.5">
          {stealthOn ? 'All txns encrypted' : 'Tap to enable stealth'}
        </div>
      </div>

      {/* Toggle */}
      <button
        onClick={() => setStealthOn(!stealthOn)}
        className={`relative w-14 h-7 rounded-full border-2 transition-all duration-500 ${
          stealthOn
            ? 'bg-emerald-500/30 border-emerald-500/60'
            : 'bg-gray-800 border-gray-600/50'
        }`}
      >
        <motion.div
          className={`absolute top-0.5 w-5 h-5 rounded-full shadow-lg transition-colors duration-300 ${
            stealthOn ? 'bg-emerald-400' : 'bg-gray-500'
          }`}
          animate={{ x: stealthOn ? 28 : 2 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      </button>
    </div>
  );
}

// ── Screen: Transactions ─────────────────────────────────────────────────────
const txns = [
  { id: 1, type: 'in',  label: '0x••••3f2a', amount: '+142 KRTX', time: '2m ago',  color: 'emerald' },
  { id: 2, type: 'out', label: '0x••••8c91', amount: '-88 KRTX',  time: '14m ago', color: 'rose' },
  { id: 3, type: 'in',  label: '0x••••1b44', amount: '+320 KRTX', time: '1h ago',  color: 'emerald' },
];

function TransactionsScreen({ stealthOn }: { stealthOn: boolean }) {
  return (
    <div className="flex flex-col h-full py-3 px-2">
      <div className="text-[10px] text-gray-400 uppercase tracking-widest font-medium mb-2 text-center">Recent</div>
      <div className="flex flex-col gap-1.5 flex-1 justify-center">
        {txns.map((tx, i) => (
          <motion.div
            key={tx.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-2 bg-white/[0.04] rounded-xl px-2 py-1.5 border border-white/5"
          >
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
              tx.type === 'in' ? 'bg-emerald-500/20' : 'bg-rose-500/20'
            }`}>
              {tx.type === 'in'
                ? <ArrowDownLeft className="w-2.5 h-2.5 text-emerald-400" />
                : <ArrowUpRight className="w-2.5 h-2.5 text-rose-400" />
              }
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] text-gray-300 truncate font-mono">
                {stealthOn ? '0x ██████████' : tx.label}
              </div>
              <div className="text-[8px] text-gray-600">{tx.time}</div>
            </div>
            <div className={`text-[9px] font-semibold flex-shrink-0 ${
              tx.type === 'in' ? 'text-emerald-400' : 'text-rose-400'
            }`}>
              {stealthOn ? '••••' : tx.amount}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-1 mt-1">
        <Lock className="w-2 h-2 text-emerald-500/60" />
        <span className="text-[8px] text-emerald-500/60">ZK-encrypted</span>
      </div>
    </div>
  );
}

// ── Screen: Quick Send ───────────────────────────────────────────────────────
function SendScreen({ stealthOn }: { stealthOn: boolean }) {
  const [sent, setSent] = useState(false);
  const [amount] = useState('50');

  const handleSend = () => {
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <div className="flex flex-col items-center justify-between h-full py-3 px-3">
      <div className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">Quick Send</div>

      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
              <Check className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="text-[10px] text-emerald-400 font-medium">Sent!</div>
            <div className="text-[9px] text-gray-500">ZK proof verified</div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-2 w-full"
          >
            {/* Amount display */}
            <div className="text-center">
              <div className="text-3xl font-thin text-white tabular-nums">{amount}</div>
              <div className="text-[9px] text-emerald-400">KRTX</div>
            </div>

            {/* To address */}
            <div className="w-full bg-white/[0.05] rounded-xl px-2.5 py-1.5 border border-white/10">
              <div className="text-[8px] text-gray-500 mb-0.5">To</div>
              <div className="text-[9px] text-gray-300 font-mono truncate">
                {stealthOn ? '0x ████ ████ ████' : '0x3f2a...8c91'}
              </div>
            </div>

            {/* Privacy badge */}
            <div className={`flex items-center gap-1 text-[8px] px-2 py-0.5 rounded-full ${
              stealthOn
                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                : 'bg-gray-800 text-gray-500 border border-gray-700/50'
            }`}>
              {stealthOn ? <Lock className="w-2 h-2" /> : <Eye className="w-2 h-2" />}
              {stealthOn ? 'Stealth Send' : 'Standard Send'}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Send button */}
      <button
        onClick={handleSend}
        disabled={sent}
        className="w-full py-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[10px] font-semibold flex items-center justify-center gap-1.5 hover:from-emerald-500 hover:to-teal-500 transition-all active:scale-95 disabled:opacity-50"
      >
        <Send className="w-3 h-3" />
        Send Now
      </button>
    </div>
  );
}

// ── Watch Frame ──────────────────────────────────────────────────────────────
function WatchFrame({
  screen, stealthOn, setStealthOn, onDotClick
}: {
  screen: Screen;
  stealthOn: boolean;
  setStealthOn: (v: boolean) => void;
  onDotClick: (s: Screen) => void;
}) {
  const content = {
    home:         <HomeScreen stealthOn={stealthOn} />,
    stealth:      <StealthScreen stealthOn={stealthOn} setStealthOn={setStealthOn} />,
    transactions: <TransactionsScreen stealthOn={stealthOn} />,
    send:         <SendScreen stealthOn={stealthOn} />,
  };

  return (
    <div className="relative select-none" style={{ width: 200 }}>
      {/* Top strap */}
      <div className="mx-auto rounded-t-lg bg-gradient-to-b from-slate-800 to-slate-700 border-x border-t border-slate-600/40"
        style={{ width: 126, height: 56 }}>
        {/* Strap texture lines */}
        {[14, 24, 34, 44].map(y => (
          <div key={y} className="absolute left-0 right-0 h-px bg-black/20" style={{ top: y }} />
        ))}
      </div>

      {/* Watch case */}
      <div
        className="relative mx-auto"
        style={{
          width: 174,
          background: 'linear-gradient(145deg, #2a2a3a, #1a1a28)',
          borderRadius: 46,
          padding: 6,
          boxShadow: `
            0 0 0 1px rgba(255,255,255,0.07),
            0 8px 40px rgba(0,0,0,0.8),
            0 0 60px rgba(16,185,129,0.12),
            inset 0 1px 0 rgba(255,255,255,0.08)
          `,
        }}
      >
        {/* Side button — digital crown */}
        <div
          className="absolute -right-[7px] bg-gradient-to-b from-slate-600 to-slate-700 rounded-full border border-slate-500/30"
          style={{ top: 52, width: 7, height: 30 }}
        />
        {/* Side button — action */}
        <div
          className="absolute -right-[7px] bg-gradient-to-b from-slate-600 to-slate-700 rounded-sm border border-slate-500/30"
          style={{ top: 90, width: 7, height: 16 }}
        />

        {/* Screen bezel */}
        <div
          className="overflow-hidden bg-black"
          style={{ borderRadius: 40 }}
        >
          {/* Screen content */}
          <div style={{ width: 162, height: 188 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={screen}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                className="w-full h-full"
              >
                {content[screen]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Screen dot nav */}
        <div className="flex items-center justify-center gap-1.5 mt-2 mb-1">
          {screens.map(s => (
            <button
              key={s}
              onClick={() => onDotClick(s)}
              className={`rounded-full transition-all duration-300 ${
                screen === s
                  ? 'bg-emerald-400 w-3.5 h-1.5'
                  : 'bg-gray-700 hover:bg-gray-600 w-1.5 h-1.5'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom strap */}
      <div className="mx-auto rounded-b-lg bg-gradient-to-b from-slate-700 to-slate-800 border-x border-b border-slate-600/40"
        style={{ width: 126, height: 56 }}>
        {[14, 24, 34, 44].map(y => (
          <div key={y} className="absolute left-0 right-0 h-px bg-black/20" style={{ top: y }} />
        ))}
        {/* Buckle */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 w-6 h-2.5 rounded-sm bg-slate-500/60 border border-slate-400/30" />
        <div className="absolute left-1/2 -translate-x-1/2 top-5 w-0.5 h-1.5 bg-slate-400/50" />
      </div>
    </div>
  );
}

// ── Main Export ──────────────────────────────────────────────────────────────
const screenLabels: Record<Screen, { title: string; desc: string; icon: typeof Shield }> = {
  home:         { title: 'Live Dashboard',     desc: 'Balance & stealth status at a glance',       icon: Zap },
  stealth:      { title: 'Stealth Mode',       desc: 'One-tap maximum privacy toggle',              icon: Shield },
  transactions: { title: 'Private History',    desc: 'ZK-encrypted transaction feed',               icon: Lock },
  send:         { title: 'Quick Send',         desc: 'Stealth transfers from your wrist',           icon: Send },
};

export function SmartWatchMockup() {
  const [screen, setScreen] = useState<Screen>('home');
  const [stealthOn, setStealthOn] = useState(true);

  // Auto-cycle screens
  useEffect(() => {
    const t = setInterval(() => {
      setScreen(prev => {
        const idx = screens.indexOf(prev);
        return screens[(idx + 1) % screens.length];
      });
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const meta = screenLabels[screen];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm">Wearable Privacy</span>
          </div>
          <h2 className="text-white text-4xl sm:text-5xl mb-4">
            KryptonX on Your{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Wrist
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Control your privacy, check balance, and send stealth transactions — all without touching your phone.
          </p>
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">

          {/* Watch mockup */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="w-48 h-48 rounded-full bg-emerald-500/15 blur-3xl"
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -left-24 top-12 bg-slate-900/90 border border-emerald-500/30 rounded-xl px-3 py-2 backdrop-blur-sm hidden lg:flex items-center gap-2"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-300 whitespace-nowrap">ZK Proof Active</span>
            </motion.div>

            <motion.div
              className="absolute -right-24 bottom-20 bg-slate-900/90 border border-teal-500/30 rounded-xl px-3 py-2 backdrop-blur-sm hidden lg:flex items-center gap-2"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <Lock className="w-3 h-3 text-teal-400" />
              <span className="text-xs text-teal-300 whitespace-nowrap">End-to-End Encrypted</span>
            </motion.div>

            <WatchFrame
              screen={screen}
              stealthOn={stealthOn}
              setStealthOn={setStealthOn}
              onDotClick={setScreen}
            />
          </motion.div>

          {/* Right side — info */}
          <div className="flex flex-col gap-4 max-w-sm w-full">
            {/* Active screen info card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={screen}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-gradient-to-br from-slate-900/80 to-emerald-900/20 border border-emerald-500/20 rounded-2xl p-5 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                    <meta.icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{meta.title}</div>
                    <div className="text-gray-500 text-xs">{meta.desc}</div>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  {screens.map(s => (
                    <button
                      key={s}
                      onClick={() => setScreen(s)}
                      className={`flex-1 py-1 rounded-lg text-[10px] font-medium transition-all duration-200 border ${
                        screen === s
                          ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                          : 'bg-slate-800/50 border-slate-700/50 text-gray-500 hover:text-gray-300 hover:border-slate-600'
                      }`}
                    >
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Feature list */}
            {[
              { icon: Shield, title: 'One-tap Stealth Mode',    desc: 'Toggle maximum privacy instantly from your wrist without opening your phone' },
              { icon: Zap,    title: 'Instant Notifications',   desc: 'Get silent encrypted alerts for incoming stealth transactions' },
              { icon: Send,   title: 'Quick Stealth Send',      desc: 'Send private transactions in seconds using your biometric watch authentication' },
              { icon: Eye,    title: 'Privacy at a Glance',     desc: 'See your masked balance and ZK-proof status without revealing sensitive data' },
            ].map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-start gap-3 group cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/50 group-hover:border-emerald-500/30 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <feat.icon className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium mb-0.5 flex items-center gap-1">
                    {feat.title}
                    <ChevronRight className="w-3 h-3 text-emerald-500/50 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="text-gray-500 text-xs leading-relaxed">{feat.desc}</div>
                </div>
              </motion.div>
            ))}

            {/* Coming soon badge */}
            <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-2.5 mt-1">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-300 text-xs font-medium">Coming Q3 2026 · WatchOS & WearOS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
